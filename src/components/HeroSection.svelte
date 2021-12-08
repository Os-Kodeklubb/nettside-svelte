<script>
    import heroImage from '../../static/images/coding-image.jpg'
</script>


<section class="hero container">

        <video width="100%" height="auto" autoplay loop preload>
            <source src="static/video/ForsideVideo.mp4" type="video/mp4">
        </video>
        <div class="TekstPåBilde">
        <h1>SOSIALT KODEFELLESSKAP</h1>
        <ul>
                <li>Fokus på å lære koding</li>
                <li>Kodespråkuavhengig</li>
                <li>Design, frontend, backend, fullstack og sikkerhet</li>
                <li>Alt fra nybegynnere til erfarne kodere</li>
                <li>Fra selvlærte kodere til folk med mastergrad</li>
                <li>Over 18 år</li>
        </ul>

        <div class="cta-area">
                        <a href="#" class="cta main">Kontakt</a>
                        <a href="#" class="cta secondary">Hva vi gjør</a>
        </div>
    </div>

</section>

<style lang="scss">
    section {
        background: none;
        padding: 50px 0 100px 0;
        overflow: hidden;
        position: relative;
        .two-wide {
            display: flex;
            .holder-one, .holder-two {
                width: 50%;
            }
            .holder-one {
                padding: 0 1rem 0 0
            }
        }
        h1 {
            font-size: 5rem;
            font-family: Recoleta, 'sans-serif';
            line-height: 1.25;
            margin: 0 0 30px 0;
            font-weight: 600;
            color: #da3654;;
            span {
                width: 100%;
                display: block;
            }
            mark {
                -webkit-text-fill-color: #0000;
                background: linear-gradient(
            180deg,#feac0e,#da3654 70%);
                -webkit-background-clip: text;
                background-clip: text;
                background-image: linear-gradient(
            90deg,#f931c6 0,#dd6c68);
                -webkit-box-decoration-break: clone;
            }
        }
      h3 {
        font-size: 3.5rem;
        color: #da3654;;
      }
        p {
            margin: 0 0 1rem 0;
            color: white;

        }
        .cta-area {
            margin: 40px 0 0 0;
            .cta {
                background-color: #da3654;
                background: linear-gradient(90deg,#da3654 0,#eb5295);
                color: #fff;
                border-radius: 25px;
                padding: 10px 30px;
                display: inline-block;
                text-decoration: none;
                &.main {
                    margin: 0 10px 0 0;
                    transition: all .3s cubic-bezier(0,.89,.44,1);
                    &:hover {
                        box-shadow: 0 9px 60px 0 #da365459;
                    }
                }
                &.secondary {
                    background: #eee;
                    color: #000;
                    transition: all .3s cubic-bezier(0,.89,.44,1);
                    &:hover {
                        box-shadow: 0 9px 60px 0 #da365459;
                    }
                }
            }
        }

        .holder-two {
            position: relative;
            img {
                width: 140%;
                mask-image: linear-gradient(to right, transparent 5%, #fff 33%, #fff 100%, transparent 100%);
                -webkit-mask-image: linear-gradient(to right, transparent 5%, #fff 33%, #fff 100%, transparent 100%);
                &.mask1 {
                    mask-image: linear-gradient(to top, transparent 1%, #fff 3%, #fff 97%, transparent 99%);
                    -webkit-mask-image: linear-gradient(to top, transparent 1%, #fff 3%, #fff 97%, transparent 99%)
                }
                &.mask2 {
                    mask-image: radial-gradient(ellipse 90% 80% at 48% 78%, black 40%, transparent 50%);
                    -webkit-mask-image: radial-gradient(ellipse 90% 80% at 48% 78%, black 40%, transparent 50%);
                }
            }
        }
    }

    .TekstPåBilde {
      position: absolute;
      top: 200px;
      left: 150px;
    }
    li {
      color: white;
      font-size: 2rem;
    }
</style>