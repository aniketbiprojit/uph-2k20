const fs = require('fs');
const { promisify } = require('util')

const readFileAsync = promisify(fs.readFile)
const writeFileAsync = promisify(fs.writeFile)


const readline = require('readline');
const { google } = require('googleapis');

const SCOPES = [
	'https://mail.google.com/',
	'https://www.googleapis.com/auth/spreadsheets'
];

const TOKEN_PATH = __dirname + '/../token.json';

async function authorize(credentials, data, callback) {
	const { client_secret, client_id, redirect_uris } = credentials.installed;
	const oAuth2Client = new google.auth.OAuth2(
		client_id,
		client_secret,
		redirect_uris[0]
	);
	let values = async (TOKEN_PATH) =>{
		let token = await readFileAsync(TOKEN_PATH); 
		oAuth2Client.setCredentials(JSON.parse(token));
		return callback(oAuth2Client, data)
	};
	return values(TOKEN_PATH)
}

function getNewToken(oAuth2Client, data, callback) {
	const authUrl = oAuth2Client.generateAuthUrl({
		access_type: 'offline',
		scope: SCOPES
	});
	console.log('Authorize this app by visiting this url:', authUrl);
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});
	rl.question('Enter the code from that page here: ', code => {
		rl.close();
		oAuth2Client.getToken(code, (err, token) => {
			if (err)
				return console.error(
					'Error while trying to retrieve access token',
					err
				);
			oAuth2Client.setCredentials(token);
			fs.writeFile(TOKEN_PATH, JSON.stringify(token), err => {
				if (err) return console.error(err);
				console.log('Token stored to', TOKEN_PATH);
			});
			return callback(oAuth2Client, data);
		});
	});
}

function getEmailContent(data) {
    // console.log(data)
    let message = [];

	message.push('From: "Aniket Chowdhury" <anikettipu@gmail.com>');
	message.push(`To: ${data.email}`);
	message.push('Content-type: text/html;charset=iso-8859-1');
	message.push('MIME-Version: 1.0');
	message.push('Subject: Subject');
	message.push(``);
	message.push(`${data.name}<br/>`);
	message.push('Duh! It works.');
	message.push('');
	message.push('And this would be the content.<br/>');
	message.push('The body is in HTML so <b>we could even use bold</b>');

	let email = message.join('\r\n').trim();

	let base64EncodedEmail = new Buffer(email).toString('base64');
	return base64EncodedEmail.replace(/\+/g, '-').replace(/\//g, '_');
}

function sendMail(auth, data) {
	const base64EncodedEmail = getEmailContent(data);

	const gmail = google.gmail({ version: 'v1', auth });
	gmail.users.messages.send(
		{
			userId: 'me',
			resource: {
				raw: base64EncodedEmail
			}
		},
		(err, res) => {
			if (err) {
				console.log('The API returned an error: ' + err);
				return false;
			}
			if (res['status'] === 200) {
				return true;
			} else {
				return false;
			}
		}
	);
}

function addToSheet(auth, data) {
	const sheets = google.sheets({ version: 'v4', auth });
	sheets.spreadsheets.values.append(data, (err, res) => {
		if (err) {
			console.log('The API returned an error: ' + err);
			return false;
		} else if (res['status'] === 200) return true;
		else return false;
	});
}

module.exports.authorize = authorize;
module.exports.addToSheet = addToSheet;
// module.exports.getPlaces = getPlaces;
module.exports.sendMail = sendMail;
// module.exports.getUid = getUid
