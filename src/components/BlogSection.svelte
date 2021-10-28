<section class="blog">
    <div class="row">
        <h2>Siste nyheter</h2>
        <p>Få med deg det siste som har skjedd og kommende arrangement hos Os Kodeklubb:</p>
        <div class="blog-list">
            <div class="blog-post">
                <h4>Os Kodeklubb har sitt første møte</h4>
                <p>Bra oppmøte med over 15 medlemmer tilstede ved første møte for Os Kodeklubb. Her virker det å være mye erfaring og ferdigheter som gjør at man kan lære mye og utveksle kompetanse.</p>
                <a href="#">Les mer</a>
            </div>
            <div class="blog-post">
                <h4>Første prosjekt i gruppen settes i gang</h4>
                <p>Etter en god diskusjon i vårt andre møte i Os Kodeklubb bestemmes det i plenum at man starter med et felles prosjekt for å utvikle en nettside for klubben vår.</p>
                <a href="#">Les mer</a>
            </div>
            <div class="blog-post">
                <h4>Utkast til nettside lansert med React</h4>
                <p>Etter mye god planlegging i vårt forrige møte startet man med litt praktisk gjennomføring der vi gikk igjennom enkel installasjon og forklaring på hvordan rammeverket React fungerer.</p>
                <a href="#">Les mer</a>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    .blog {
        padding: 8vw 0 4vw 0;
        .row {
            h2 {
                color: #000;
                font-family: Recoleta,sans-serif;
                padding: 0;
                margin: 0 0 1.1625rem;
                text-align: center;
            }
            p {
                font-size: 1.25em;
                color: #3c4856;
                margin: 2.325rem 0 1.1625rem 0;
                line-height: 1.8;
                text-align: center;
            }
            .blog-list {
                display: flex;
                margin: 75px 0;
                .blog-post {
                    width: calc(100% / 3);
                    transition: all .2s ease-in-out;
                    padding: 25px;
                    border-radius: 8px;
                    cursor: pointer;
                    h4 {
                        color: #000;
                        font-family: Recoleta,sans-serif;
                        margin: 0 0 1rem 0;
                        font-size: 1.5em;
                        font-weight: 600;
                        line-height: 1.3;
                    }
                    p {
                        color: #6d7882;
                        font-size: 1em;
                        line-height: 1.5;
                        text-align: left;
                        margin: 0.5rem 0 2.3625rem 0;
                    }
                    a {
                        color: #da3654;
                    }
                    &:hover {
                        box-shadow: 0 9px 60px 0 #da365426;
                    }
                }
            }
        }
    }
</style>