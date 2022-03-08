<script context="module">
  export const prerender = true

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

<form id="kontaktskjema" on:submit={handleSubmit} name="Contact - Os Kodeklubb" method="POST" data-netlify="true" netlify-honeypot="bot-field">
  <div class="container">
      <input type="text" name="name" placeholder="Navn" />
      <input type="email" name="email" placeholder="Email" />
      <input type="text" name="bot-field" />
  </div>
  <textarea name="message" placeholder="Melding" />
  <button type="submit">Send Melding</button>
  <input type="hidden" name="form-name" value="Contact - Os Kodeklubb">
</form>

<form name="test" method="post" netlify netlify-honeypot="bot-field">
  <input type="hidden" name="form-name" value="test" />
  <input type="text" name="bot-field" />
  <p>
      <label>Your Name: <input type="text" name="name" /></label>
  </p>
  <p>
      <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
      <label>Message: <textarea name="message" /></label>
  </p>
  <p>
      <button type="submit">Send</button>
  </p>
</form>