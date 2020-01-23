const axios = require('axios');

const captcha = async (secret, response) => {
	try {
		const s = `https://www.google.com/recaptcha/api/siteverify?secret=6LeQD84UAAAAALKSAxmS8l4winxHBi487YXQ29aF&response=${response}`;
		const data = await axios.post(
			s,
			{},
			{
				headers: {
					'Content-Type':
						'application/x-www-form-urlencoded; charset=utf-8'
				}
			}
		);
		console.log(data);
		// return data
		return data.data.success;
	} catch (err) {
		console.log(err);
		throw err;
	}
};

module.exports = captcha;
