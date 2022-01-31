<section class="hero container">
  <div class="gradient" />

  <video width="100%" height="auto" autoplay loop muted>
    <source src="video/ForsideVideoEndelig.mp4" type="video/mp4" />
  </video>

  <div class="text-on-image">
    <div style="width: fit-content;">
      <h1>KODEFELLESSKAP</h1>
      <hr style="border: 1px solid black;" />
    </div>
    <ul>
      <li>Fokus på å lære koding</li>
      <li>Kodespråkuavhengig</li>
      <li>Design, frontend, backend, fullstack og sikkerhet</li>
      <li>Alt fra nybegynnere til erfarne kodere</li>
      <li>Fra selvlærte kodere til folk med mastergrad</li>
      <li>Over 18 år</li>
    </ul>
    <div class="cta-area">
      <a href="#kontakt" class="cta main">Kontakt</a>
      <a href="#aktiviteter" class="cta secondary">Aktiviteter</a>
    </div>
  </div>
</section>

<style lang="scss">
  section {
    background: none;
    padding: 10px 0 50px 0;
    overflow: hidden;
    position: relative;

    .cta-area {
      margin: 10px 0 0 0;
      .cta {
        background-color: var(--primary-color);
        background: linear-gradient(
          90deg,
          var(--secondary-color),
          0,
          var(--primary-color)
        );
        color: black;
        border-radius: 25px;
        padding: 10px 30px;
        display: inline-block;
        text-decoration: none;
        &.main {
          margin: 0 10px 0 0;
          transition: all 0.3s cubic-bezier(0, 0.89, 0.44, 1);
          transition: all 0.2s ease-in-out;
          &:hover {
            transform: scale(1.1);
            box-shadow: 0 9px 60px 0 #0d5d2c59;
          }
        }
        &.secondary {
          background: #eee;
          color: #000;
          transition: all 0.3s cubic-bezier(0, 0.89, 0.44, 1);
          transition: all 0.2s ease-in-out;
          &:hover {
            transform: scale(1.1);
            box-shadow: 0 9px 60px 0 #0d5d2c59;
          }
        }
      }
    }

    .gradient {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      background-image: linear-gradient(
        to left,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 1)
      );
      opacity: 0.75;
    }
  }

  .text-on-image {
    position: absolute;
    top: 200px;
    left: 150px;
  }
  li {
    color: black;
    font-size: 2rem;
  }

  h1 {
    font-size: 5rem;
    font-family: Arial, Recoleta, "sans-serif";
    line-height: 1.25;
    margin: 0 0 30px 0;
    font-weight: 600;
    color: black;
  }

  @media only screen and (max-width: 488px) {
    section {
      video {
        display: none;
      }
      .text-on-image {
        position: unset;
        h1 {
          text-align: center;
          overflow-wrap: break-word;
        }

        .cta-area {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.5em;
        }
      }

      .gradient {
        display: none;
      }
    }
  }
  @media only screen and (max-width: 576px) {
    .text-on-image {
      top: 50px;
      left: 50px;
    }

    li {
      font-size: 0.5rem;
    }
    h1 {
      font-size: 1.5rem;
      margin: 0 0 15px 0;
      line-height: 0.75;
    }
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    .text-on-image {
      top: 70px;
      left: 50px;
    }

    li {
      font-size: 1rem;
    }
    h1 {
      font-size: 2rem;
      margin: 0 0 15px 0;
      line-height: 0.75;
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 992px) {
    .text-on-image {
      top: 70px;
      left: 100px;
    }

    li {
      font-size: 1.5rem;
    }
    h1 {
      font-size: 2.5rem;
      margin: 0 0 15px 0;
      line-height: 0.75;
    }
  }

  @media only screen and (min-width: 993px) and (max-width: 1200px) {
    .text-on-image {
      top: 150px;
      left: 100px;
    }

    li {
      font-size: 1.5rem;
    }
    h1 {
      font-size: 3rem;
      margin: 0 0 15px 0;
      line-height: 0.75;
    }
  }

  @media only screen and (min-width: 1201px) and (max-width: 1400px) {
    .text-on-image {
      top: 150px;
      left: 100px;
    }

    li {
      font-size: 2rem;
    }
    h1 {
      font-size: 4rem;
      margin: 0 0 15px 0;
      line-height: 0.75;
    }
  }
  @media only screen and (min-width: 1401px) {
    .text-on-image {
      top: 150px;
      left: 100px;
    }

    li {
      font-size: 2rem;
    }
    h1 {
      font-size: 5rem;
      margin: 0 0 15px 0;
      line-height: 0.75;
    }
  }
</style>
