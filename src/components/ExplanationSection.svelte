<section class="membership" id="aktiviteter">
    <div class="row">
        <div class="box">
            <h2>Aktiviteter i Os Kodeklubb</h2>
            <p>Her er et utvalg av aktiviteter vi har satt for vår forening:</p>
        </div>
        <div class="item-list">
            <div class="item">
                <h4>Kodeonsdag</h4>
                <p>
                    Vi har medlemsmøte annenhver onsdag i Bjørnafjorden
                    Gründerpark i Os sentrum. Medlemmene blir delt inn i grupper
                    på 2-5 personer som setter opp sine egne
                    læringsmål/prosjekter. Hvordan de ønsker å nå disse målene
                    er opp til den enkelte gruppe. Det er mulig å delta på
                    medlemsmøte ved å melde seg på via facebook siden til
                    klubben.
                </p>
            </div>
            <div class="item">
                <h4>Nybegynnergrupper</h4>
                <p>
                    Vi har nybegynnergruppe for de som ønsker å lære
                    programmering. De som er med i denne gruppen vil få god
                    veiledning fra erfarne kodere som selv har vært nybegynnere.
                    Å lære sammen med andre, og i et miljø med erfarne kodere,
                    vil være et godt utgangspunkt for å lære koding.
                </p>
            </div>
            <div class="item">
                <h4>Sosiale aktiviteter</h4>
                <p>
                    Os kodeklubb er et sosialt kodefellesskap. Vi arrangere
                    ulike sosiale sammenkomster som julebord og
                    sommeravslutning.
                </p>
            </div>
            <div class="item">
                <h4>Andre</h4>
                <p>
                    Det er opp til medlemmene i klubben hvilke andre aktiviteter
                    klubben skal drive med. Vi oppfordrer medlemmene til å ta
                    egne initiativ.
                </p>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    .box {
        background: #e2e2e2;
        padding: 50px;
    }

    .box h2 {
        color: #000;
        font-family: Arial, Recoleta, sans-serif;
        margin: 0 0 1.1625rem;
        text-align: center;
    }

    .box p {
        font-size: 1.25em;
        color: #3c4856;
        margin: 2.325rem 0 1.1625rem 0;
        line-height: 1.8;
        text-align: center;
        font-family: Arial, Recoleta, sans-serif;
    }

    .item-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin: 0;
        background: #e2e2e2;
        padding: 50px;
    }

    .item-list h4 {
        color: #000;
        font-family: Arial, Recoleta, sans-serif;
        /*margin: 0 0 1rem 0;*/
        font-size: 1.25em;
        font-weight: 600;
        text-transform: uppercase;
        text-align: center;
    }
    .item-list p {
        color: #3c4856c2;
        font-size: 1em;
        line-height: 1.5;
        text-align: center;
        margin: 0.5rem 0 2.3625rem 0;
    }

    .item {
        width: 500px;
    }

    .item p {
      justify-content: center;
    }

    @media only screen and (max-width: 30.5rem) {
        .item p {
            font-size: 1.2em;
        }

  }
    @media only screen and (max-width: 767px) {
        .item {
            width: 500px;
        }
        .membership {
            .row {
                .box {
                    padding-bottom: 1px;
                }

                .item-list {
                    padding-top: 0px;
                }
            }
        }
    }

    @media only screen and (min-width: 768px) {
        .item {
            width: 250px;
        }
    }

    @media only screen and (min-width: 924px) {
        .item {
            width: 300px;
        }
    }

    @media only screen and (min-width: 1087px) {
        .item {
            width: 350px;
        }
    }

    @media only screen and (min-width: 1200px) {
        .item {
            width: 400px;
        }
    }

    @media only screen and (min-width: 1400px) {
        .item {
            width: 450px;
        }
    }
    @media only screen and (min-width: 1401px) {
        .item {
            width: 500px;
        }
    }

    @media only screen and (min-width: 1740px) {
        .item {
            width: 600px;
        }
    }
</style>
