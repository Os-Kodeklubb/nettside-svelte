<script>

</script>

<section class="container">
    <!--<img src="../../static/images/Sponsorer/ITSSvg.svg" alt="Insurance Technology Solution AS" loading="lazy"/>
    <img src="../../static/images/Sponsorer/K1Svg.svg" alt="Kantega AS" loading="lazy"/>
    <img src="../../static/images/Sponsorer/UC1Svg.svg" alt="Ulriken Consulting AS"loading="lazy"/>
    <img src="../../static/images/Sponsorer/TB2Svg.svg" alt="Tidsbanken AS" loading="lazy"/>
    -->
</section>



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



</style>