window.addEventListener('DOMContentLoaded', (event) => {
	const target = this.document.querySelector('#input-url');

	target.textContent = `${window.location.host}/`;
});

function generateCaptchaWidget() {
	try {
		grecaptcha.render('recaptcha', {
			'sitekey': '6LfIDUomAAAAANSlFp3GIxCEJ8tRCdv1gI8GVZCJ',
			'theme': 'dark',
			'callback': 'submitURL'
		});
	} catch(err) {
		grecaptcha.reset();
	}
}