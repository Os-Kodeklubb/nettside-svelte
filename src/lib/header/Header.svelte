<script lang="ts">
    import logo from "$static/images/logo-placeholder.png";
    let toggleMenu: boolean = true;
    let hideMenu: boolean = true;

    function handleClick() {
        toggleMenu = !toggleMenu;
        hideMenu = !hideMenu;
    }
</script>

<header>
    <div class="row">
        <a href="/" class="logo">
            <img src={logo} alt="Os Kodeklubb Logo" />
            <h2>OS KODEKLUBB</h2>
        </a>
        <nav>
            <div class="menu-container" on:click={handleClick}>
                <div class="menu-button {toggleMenu ? '' : 'menu-button-close'}" />
            </div>
            <ul class={hideMenu ? 'menu-hide' : ''}>
                <li><a href="#om-oss">Om Oss</a></li>
                <li><a href="#aktiviteter">Aktiviteter</a></li>
                <li><a href="#kontakt">Kontakt</a></li>
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
            align-items: center;
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
        a {
            h2 {
                color: var(--secondary-color);
            }
        }	
        nav {
            ul {
                padding-left: 0px;
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

        // hamburger variables
        $menu-width: 30px;
        $menu-height: 4px;
        $hamburger-margin-top-reset: 0px;
        $hamburger-margin-top-before: -8px;
        $hamburger-margin-top-after: 8px;
        $hamburger-margin-top: 8px;

        // hamburger variables media queries
        $hamburger-menu-breakpoint: 787px;
        // hamburger start
        @media screen and (max-width: $hamburger-menu-breakpoint) {
            .row {
                flex-wrap: wrap;
            }

            nav {
                margin-top: 1em;
                display: flex;
                flex-direction: row-reverse;

                .menu-hide {
                    display: none;
                }

                ul {
                    flex-direction: column;
                }

                .menu-container {
                    height: 20px;
                    width: $menu-width;
                    .menu-button {
                        margin-top: $hamburger-margin-top;
                    }

                    .menu-button,
                    .menu-button::before,
                    .menu-button::after {
                        display: block;
                        background-color: #000;
                        position: absolute;
                        height: $menu-height;
                        width: $menu-width;
                        transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
                        border-radius: 2px;
                    }

                    .menu-button::before {
                        content: '';
                        margin-top: $hamburger-margin-top-before;
                    }

                    .menu-button::after {
                        content: '';
                        margin-top: $hamburger-margin-top-after;
                    }

                    .menu-button-close::after {
                        margin-top: $hamburger-margin-top-reset;
                        transform: rotate(-405deg);
                    }

                    .menu-button-close::before {
                        margin-top: $hamburger-margin-top-reset;
                        transform: rotate(405deg);
                    }
                    .menu-button-close {
                        background: rgba(255, 255, 255, 0);
                    }
                }
            }
        }
        // hamburger end
    }
</style>
