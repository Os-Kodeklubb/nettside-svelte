<footer>
    <div class="row">
        <div class="box">
            <div class="top">
                <h2>Bli med i Os Kodeklubb!</h2>
                <h4>Nysgjerrig på koding?</h4>
                <p>Kontakt oss og bli med - ingen forkunnskaper nødvendig!</p>
                <p>telefon 908 62 611 eller post@oskodeklubb.no</p>
            </div>

            <p class="opphavsrett">
                © OsKodeklubb.no - Alle rettigheter forbeholdt.
            </p>
        </div>
    </div>
</footer>

<style lang="scss">
    footer {
        margin: 0 0 3rem 0;
        .row {
            .box {
                color: #fff;
                background: rgb(32, 32, 32);
                padding: 3.1rem 8vw 1.55rem;
                position: relative;
                text-align: center;
                h2 {
                    -webkit-text-fill-color: #0000;
                    background: linear-gradient(180deg, #feac0e, #da3654 70%);
                    -webkit-background-clip: text;
                    font-size: 0.875em;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                }
                h4 {
                    font-family: Recoleta, sans-serif;
                    font-size: 2em;
                    margin: 1em 0 0 0;
                }
                p {
                    opacity: 0.7;
                }
                a {
                    background-color: #da3654;
                    background: linear-gradient(90deg, #da3654 0, #eb5295);
                    color: #fff;
                    padding: 10px 30px;
                    display: inline-block;
                    text-decoration: none;
                    margin: 30px 0 0 0;
                }
                a:hover {
                    transform: scale(1.05);
                    box-shadow: 0 9px 60px 0 #da365459;
                }
                .top {
                    margin: 0 0 50px 0;
                    padding: 0 0 75px 0;
                    border-bottom: 1px solid #ffffff30;
                }
                .opphavsrett {
                    color: #ffffff80;
                    font-size: 0.8125rem;
                    text-align: left;
                    opacity: 1;
                }
            }
        }
    }
</style>
