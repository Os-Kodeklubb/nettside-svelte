<script>
    import ITSSvg from "$static/images/Sponsorer/ITSSvg.svg"
    import K1Svg from "$static/images/Sponsorer/K1Svg.svg"
    import UC1Svg from "$static/images/Sponsorer/UC1Svg.svg"
    import TB2_270Svg from "$static/images/Sponsorer/TB2_270Svg.svg"
    import M1Svg from "$static/images/Sponsorer/M1Svg.svg"
</script>

<section class="container">
    <img src={ITSSvg} alt="Insurance Technology Solution AS" loading="lazy"/>
    <img src={K1Svg} alt="Kantega AS" loading="lazy"/>
    <img src={UC1Svg} alt="Ulriken Consulting AS"loading="lazy"/>
    <img src={TB2_270Svg} alt="Tidsbanken AS" loading="lazy"/>
    <img src={M1Svg} alt="Miles AS" loading="lazy"/>

</section>

<div class="constainerh1">
    <h1>Våre sponsorer</h1>
</div>


<style type="scss">
  @import "../../static/scss/mixins";
  .container {
    padding: 50px;
    place-items: center;
    @include create_grid($col: 1, $col_gap: 0.2rem, $row_gap: 2rem);

    @media (min-width: 768px) {
      @include create_grid($col: 2, $col_gap: 0.2rem, $row_gap: 1rem);
    }

    @media (min-width: 992px) {
      @include create_grid($col: 4, $col_gap: 0.2rem, $row_gap: 1rem);
    }
  }

    .constainerh1 h1 {
      fontsize: 25px;
      text-align: center;

    }

</style>