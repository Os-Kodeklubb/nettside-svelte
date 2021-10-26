<script>
	import logo from '../../../static/images/os-kodeklubb-logo.png';
</script>

<header>
    <div class="row">
        <a href="/" class="logo">
            <img src={ logo } alt="Os Kodeklubb Logo">
            <h4>Os Kodeklubb</h4>
        </a>
        <nav>
            <ul>
                <li><a href="/om-oss">Om Oss</a></li>
                <li><a href="/nyheter">Nyheter</a></li>
                <li><a href="/kontakt">Kontakt</a></li>
            </ul>
        </nav>
    </div>
</header>

<style lang="scss">
    header {
        background: none;
        padding: 10px 0;
        .row {
            display: flex;
            justify-content: space-between;
        }
        .logo {
            display: flex;
            align-items: center;
            text-decoration: none;
            img {
                height: 40px;
                margin: 0 10px 0 0;
            }
            h4 {
                font-size: 1.25em;
                margin: 0;
                color: #000;
                font-family: Poppins,sans-serif;
            }
        }
        nav {
            ul {
                display: flex;
                list-style: none;
                li {
                    a {
                        padding: 15px;
                        text-decoration: none;
                        font-size: 15px;
                        color: #000;
                        &:hover {
                            color: #da3654;
                        }
                    }
                }
            }
        }
    }
</style>