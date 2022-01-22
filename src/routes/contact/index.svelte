<script context="module">
	export const prerender = true;
</script>

<script>
    let name = "Adrian";
    let email = "adrian.saelen@test.com";
    let message = "";
    let error = "";

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

      {#if !message && !error}
        <form name="Kontaktskjema - Os Kodeklubb" class="kontaktskjema" action="POST" data-netlify="true" on:submit|preventDefault={submitForm}>
            <input type="text" name="name" placeholder="Navn" bind:value={name} />
            <input type="text" name="email" placeholder="Email" bind:value={email} />
            <input type="submit" />
        </form>
      {:else if message}
        <p>Hei <b>{message.name}</b>, din melding ble sendt til Os Kodeklubb!</p>
      {:else if error}
        <p>Kontaktskjemaet feilet. Prøv igjen.</p>
      {/if}
      </div>
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