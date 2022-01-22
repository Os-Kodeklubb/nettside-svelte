<script lang="ts">
    import logo from '/images/os-kodeklubb-logo.png';
    let toggleMenu: boolean = true;
    let hideMenu = true;

    function handleClick() {
        toggleMenu = !toggleMenu;
        hideMenu = !hideMenu;
    }

</script>

<header>
    <div class="row">
        <a href="/" class="logo">
            <img src={logo} alt="Os Kodeklubb Logo" />
            <h2 style="color: #da3654;">OS KODEKLUBB</h2>
        </a>
        <nav on:click={handleClick}>
            <div class="menu-button {toggleMenu ? '' : 'menu-button-x'}" />
            <ul  class="{hideMenu ? 'menu-hide': ''}">
                <li><a href="#om-oss">Om Oss</a></li>
                <li><a href="#aktiviteter">Aktiviteter</a></li>
                <li><a href="#kontakt">Kontakt</a></li>
            </ul>
        </nav>
    </div>
</header>

<style lang="scss">
    nav ul {
        flex-direction:column ;
    }
    .menu-hide {
        display: none;
    }
    nav {
        display: flex;
        justify-content: end;
    }
    .menu-button::before {
        content: '';
        margin-top: -8px;
    }

    .menu-button::after {
        content: '';
        margin-top: 8px;
    }

    .menu-button,
    .menu-button::before,
    .menu-button::after {
        display: block;
        background-color: #000;
        position: absolute;
        height: 4px;
        width: 30px;
        transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
        border-radius: 2px;
    }

    .menu-button-x::after {
        margin-top: 0px;
        transform: rotate(-405deg);
    }
    .menu-button-x::before {
        margin-top: 0px;
        transform: rotate(405deg);
    }
    .menu-button-x {
        background: rgba(255, 255, 255, 0);
    }

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
                height: 80px;
                margin: 0 10px 0 0;
            }
        }
        nav {
            padding: 10px 0;
            ul {
                display: flex;
                list-style: none;
                li {
                    a {
                        padding: 0px 20px 0px 20px;
                        text-decoration: none;
                        font-size: 1.25em;
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
