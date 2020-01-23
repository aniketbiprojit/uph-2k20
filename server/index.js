const fs = require('fs');
const express = require('express');
const mail = require('./mail');

const counter = require('./counter').counter;
const captcha = require('./captcha');

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('static'));

app.use(require('cors')());

app.post('/register', async (req, res) => {
	console.log(req.body);
	try {
		const response = req.body['g-recaptcha-response'];

		const captchaResponse = await captcha('', response);
		if (!captchaResponse) {
			console.log(captchaResponse);
			res.sendStatus(404);
			return;
		}
		const options = { year: 'numeric', month: 'long', day: 'numeric' };
		req.body.now = new Date().toLocaleString('hi-IN', options);
		req.body.timeNow = new Date().toLocaleString('hi-IN', {
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit'
		});
		req.body.uphid = 'UPH-' + (await counter());

		const data = {
			spreadsheetId: '13g_H0ZQWJEVbGLa8JO_brSt5KAF8-Min6qf8fJQjIbY',
			range: 'Sheet1!A1:H',
			valueInputOption: 'USER_ENTERED',
			resource: {
				values: [
					[
						req.body.uphid,
						req.body.name,
						req.body.email,
						req.body.mobile,
						req.body.institute,
						req.body.emergency,
						req.body.now,
						req.body.timeNow
					]
				]
			}
		};

		fs.readFile(__dirname + '/../credentials.json', (err, content) => {
			if (err)
				return console.log('Error loading client secret file:', err);
			mail.authorize(JSON.parse(content), data, mail.addToSheet);

			// mail.authorize(JSON.parse(content), req.body, mail.sendMail);
			res.send('okay');
		});
	} catch (err) {
		console.log(err);
		res.sendStatus(500);
	}
});

app.listen(port, () => console.log(`Runnning on port ${port}`));
