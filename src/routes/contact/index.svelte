<script>
  import { base, assets } from '$app/paths';
    let name = "Adrian";
    let email = "adrian.saelen@test.com";
    let message = "";
    let error = "";
  console.log({base, assets});
    const submitForm = async () => {
      try {
        const submit = await fetch("/api/kontakt", {
          method: "POST",
          body: JSON.stringify({
            name,
            email
          })
        });

        const data = await submit.json()
        message = data
      } catch (err) {
        error = err
      }
    }
  </script>

  <section id="kontakt">
      <div class="row">
          <h2>Kontakt Oss</h2>

          <form name="contact" netlify>
            <p>
              <label>Name <input type="text" name="name" /></label>
            </p>
            <p>
              <label>Email <input type="email" name="email" /></label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
  </section>

  <style lang="scss">
      #kontakt {
          background: #fff;
          padding: 60px 0;

      .kontaktskjema {

      }
          .row {
              max-width: 500px;
              margin: 0 auto;
              h2 {
                color: #000;
                font-family: Recoleta,sans-serif;
                padding: 0;
                margin: 0 0 1.1625rem;
                text-align: center;
              }
              form {
                  input {

                      font: 100%/1.55 Poppins,sans-serif;
                      display: block;
                      width: 100%;
                      min-height: 60px;
                      padding: 17px 22px;
                      font-size: 14px;
                      font-weight: 400;
                      line-height: 24px;
                      letter-spacing: .025em;
                      margin: 0 0 14px 0;
                      color: #151515;
                      background-color: #f7f7f7;
                      background-image: none;
                      border-radius: 0;
                      -webkit-appearance: none;
                      transition: .3s ease-in-out;
                      border: 1px solid #f7f7f7;
                      box-sizing: border-box;
                      &::placeholder {
                          font: 100%/1.55 Poppins,sans-serif;
                          font-size: 14px;
                          color: #151515;
                      }
                  }
              }
          }
      }
  </style>