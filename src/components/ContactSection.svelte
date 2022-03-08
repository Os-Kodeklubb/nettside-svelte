<script>
	const handleSubmit = (e) => {
		e.preventDefault()
		let myForm = document.getElementById('kontaktskjema');
		let formData = new FormData(myForm);
		fetch('/', {
			method: 'POST',
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: new URLSearchParams(formData).toString()
		}).then(() => console.log('Form successfully submitted')).catch((error) =>
			alert(error))
	}
</script>

<form id="kontaktskjema" on:submit={handleSubmit} name="Kontakt - Os Kodeklubb" method="POST" data-netlify="true" netlify-honeypot="bot-field">
  <div class="container">
    <input type="text" name="name" placeholder="Navn" />
    <input type="email" name="email" placeholder="Email" />
    <input type="text" name="bot-field" />
  </div>
  <textarea name="message" placeholder="Melding" />
  <button class="mx-2 bg-red-50 border-2 px-2 rounded-md  block mx-auto" type="submit">Send Melding</button>
  <input type="hidden" name="form-name" value="Contact - Green Guys">
</form>