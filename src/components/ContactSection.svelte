
<form id="kontaktskjema" name="Kontakt - Os Kodeklubb" method="POST" data-netlify="true" netlify-honeypot="bot-field">
  <div class="container">
    <input type="text" name="name" placeholder="Navn" />
    <input type="email" name="email" placeholder="Email" />
    <input type="text" name="bot-field" />
  </div>
  <textarea name="message" placeholder="Melding" />
  <button type="submit">Send Melding</button>
  <input type="hidden" name="form-name" value="Kontakt - Os Kodeklubb">
</form>

<style lang="scss">
  * {
    box-sizing: border-box;
  }
  form {
    margin: 0 auto;
    width: 100%;
    max-width: 400px;
    input, textarea {
      display: block;
      width: 100%;
      padding: 12px 17px;
      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: .025em;
      margin: 0 0 14px 0;
      color: #151515;
      background-color: #f7f7f7;
      background-image: none;
      border-radius: 5px;
      -webkit-appearance: none;
      transition: .3s ease-in-out;
      border: 1px solid #f7f7f7;
      &::placeholder {
        font-family: "Poppins";
        font-size: 14px;
        color: #151515;
      }
      &[name="bot-field"] {
        display: none;
      }
    }
    textarea {
      height: 156px;
      min-height: 60px;
      max-height: 265px;
      resize: vertical;
    }
    button {
      display: block;
      width: 100%;
      max-width: 200px;
      padding: 15px 35px;
      border: none;
      color: #151515;
      background: #00ffc3;
      text-transform: uppercase;
      font-weight: bold;
      font-family: "Poppins", sans-serif;
      transition: 250ms all ease-in-out;
      margin: 0 auto;
      border-radius: 50px;
      cursor: pointer;
      &:hover {
        background: #eda407;
      }
    }
  }
        
</style>