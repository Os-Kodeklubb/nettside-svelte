<section class="explanation" id="om-oss">
    <div class="row">
        <div class="box item-list">
            <h2 class="item heading" style="color: var(--secondary-color)">
                Medlemskap
            </h2>
            <div class="divider" />
            <p class="item text" style="margin-top:auto; margin-bottom:auto;">
                Et medlemskap i Os Kodeklubb koster 300 kr og gir deg tilgang til alle arrangement som
                kjøres i regi av klubben. Du vil bli del av et sosialt kodefelleskap.
            </p>
        </div>
    </div>
</section>

<style lang="css">
    .box {
        padding: 70px;
    }

    .text {
        color: #3c4856c2;
        font-size: 1.5rem;
        line-height: 1.5;
        text-align: left;
        margin: 0.5rem 0 2.3625rem 0;
    }


    .item-list {
        display: flex;
        flex-direction: row-reverse;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 0;

    }

    .item {
        width: 500px;
        text-align: center;
    }

    @media only screen and (max-width: 30.5rem) {
        .box {
            padding: 0px;
            padding-bottom: 1rem;
            text-align: center;
        }

        .box > .item {
            margin-bottom: 1rem;
        }

        .box p.item {
            font-size: 1.2rem;
        }
        .box h2.item {
            font-size: 1.7rem;
        }

    }

    @media only screen and (max-width: 767px) {
        .item {
            width: 500px;
        }

        .divider {
            border-left: 1px solid #000;
            height: 400px;
            display: none;
        }

        .item-list p {
            text-align: center;
            font-size: 1rem;

        }

        .item-list h2 {
            font-size: 1.5rem;
        }

    }

    @media only screen and (min-width: 768px) {
        .item {
            width: 250px;
        }

        .divider {
            border-left: 1px solid #000;
            height: 600px;
        }

        .item-list h2 {
            font-size: 30px;
        }
    }

    @media only screen and (min-width: 924px) {
        .item {
            width: 300px;
        }

        .divider {
            border-left: 1px solid #000;
            height: 500px;
        }

        .item-list h2 {
            font-size: 40px;
        }
    }

    @media only screen and (min-width: 1087px) {
        .item {
            width: 350px;
        }
        .divider {
            border-left: 1px solid #000;
            height: 400px;
        }

        .item-list h2 {
            font-size: 50px;
        }
    }

    @media only screen and (min-width: 1200px) {
        .item {
            width: 400px;
        }
        .divider {
            border-left: 1px solid #000;
            height: 400px;
        }

        .item-list h2 {
            font-size: 60px;
        }
    }

    @media only screen and (min-width: 1400px) {
        .item {
            width: 450px;
        }
        .divider {
            border-left: 1px solid #000;
            height: 300px;
        }

        .item-list h2 {
            font-size: 70px;
        }
    }
    @media only screen and (min-width: 1401px) {
        .item {
            width: 500px;
        }
        .divider {
            border-left: 1px solid #000;
            height: 300px;
        }
        .item-list h2 {
            font-size: 70px;
        }
    }

    @media only screen and (min-width: 1740px) {
        .item {
            width: 600px;
        }
        .divider {
            border-left: 1px solid #000;
            height: 300px;
        }
        .item-list h2 {
            font-size: 70px;
        }
    }
</style>
