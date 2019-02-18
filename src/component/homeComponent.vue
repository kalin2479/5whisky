<template lang="pug">
  div.relative
    .home#Home.fullSeccion
      .intro
        .container
          .logo.boxCenter
            a(href="#")
              img(src="@/assets/logo.png")
          .boxCenter
            .boxContent
              h2.titleBanner
                | DESCUBRE EL WHISKY
              h2.titleBanner2
                | PERFECTO PARA TI
              h2.subtitleBanner
                | SIENTE EL AROMA, EL SABOR Y LA ESCENCIA DEL WHISKY QUE VA CONTIGO
    .navHome
      .container
        .boxCenter
          .boxContent.lineBtn
            .boxBarra
              .circule.circulePrimero
              .linea.lineaPrimero
            router-link.btnSabor.btnSabor1(to="/whisky/sweet")
              span(@mouseover="changeBackground('sweet')", @mouseleave="resetBackground('sweet')")
                | sweet
            .boxBarra
              .linea.linea2
            router-link.btnSabor.btnSabor2(to="/whisky/")
              span(@mouseover="changeBackground('smoky')" , @mouseleave="resetBackground('smoky')")
                | smoky
            .boxBarra
              .linea.linea3
            router-link.btnSabor.btnSabor3(to="/whisky/")
              span(@mouseover="changeBackground('smooth')", @mouseleave="resetBackground('smooth')")
                | smooth
            .boxBarra
              .linea.linea4
            router-link.btnSabor.btnSabor4(to="/whisky/")
              span(@mouseover="changeBackground('spicy')", @mouseleave="resetBackground('spicy')")
                | spicy
            .boxBarra
              .linea.linea5
            router-link.btnSabor.btnSabor5(to="/whisky/")
              span(@mouseover="changeBackground('bold')", @mouseleave="resetBackground('bold')")
                | bold
            .boxBarra
              .linea.lineaFinal
              .circule.circuleFinal
    .sweet#Sweet.fullSeccion.pageAbsolute
      .intro
        .container
          .boxCenter
            .boxContent
              h2.titleBanner
                | SWEET
              h3.sumillaBanner
                | La perfecta combinación entre frescura frutal,
                br
                | suave cremosidad y notas dulces; una variedad de whiskies
                br
                | premium que a más de uno le endulzarán los sentidos.
    .smoky#Smoky.fullSeccion.pageAbsolute
      .intro
        .container
          .boxCenter
            .boxContent
              h2.titleBanner
                | Smoky
              h3.sumillaBanner
                | Desde los intensos sabores frutales a finas notas ahumadas;
                br
                | toda una experiencia inolvidable para los sentidos.
    .smooth#Smooth.fullSeccion.pageAbsolute
      .intro
        .container
          .boxCenter
            .boxContent
              h2.titleBanner
                | Smooth
              h3.sumillaBanner
                | Una melodiosa y suave aventura para el gusto; un whisky para
                br
                | perderse en un mar de cremosidad y sensaciones sutiles.
    .spicy#Spicy.fullSeccion.pageAbsolute
      .intro
        .container
          .boxCenter
            .boxContent
              h2.titleBanner
                | Spicy
              h3.sumillaBanner
                | Un vibrante viaje lleno de intensos tonos frutales,
                br
                | toques de vainilla y especias picantes.
    .bold#Bold.fullSeccion.pageAbsolute
      .intro
        .container
          .boxCenter
            .boxContent
              h2.titleBanner
                | Bold
              h3.sumillaBanner
                | Una experiencia profunda y audaz, que permite descubrir frutos
                br
                | oscuros, roble ahumado y nos acompaña con un acabado duradero.
</template>

<script>

  import { bus } from '@/main'

  export default {
    data () {
      return {}
    },
    mounted: function() {
      bus.$on('animateHome',function(boolData){
        var tl = new TimelineLite();
        var titleBanner = $(".titleBanner");
        var titleBanner2 = $(".titleBanner2");
        var subtitleBanner = $(".subtitleBanner");

        var circule = $(".circule");
        var linea = $(".linea");
        var btnSabor = $(".btnSabor");

        var btnSabor1 = $(".btnSabor1");
        var circule1 = $(".circulePrimero");
        var linea1 = $(".lineaPrimero");

        var btnSabor2 = $(".btnSabor2");
        var linea2 = $(".linea2");

        var btnSabor3 = $(".btnSabor3");
        var linea3 = $(".linea3");

        var btnSabor4 = $(".btnSabor4");
        var linea4 = $(".linea4");

        var btnSabor5 = $(".btnSabor5");
        var linea5 = $(".linea5");

        var circuleFinal = $(".circuleFinal");
        var lineaFinal = $(".lineaFinal");


        tl.set(titleBanner, {x:300, opacity: 0});
        tl.set(titleBanner2, {x:-300, opacity: 0});
        tl.set(subtitleBanner, {x:300, opacity: 0});
        tl.set(circule, {opacity:0, scale: 0});
        tl.set(linea, {opacity:0, width: 0});
        tl.set(btnSabor, {opacity:0, scale: 0});


        tl.add( TweenLite.to(titleBanner, 1, {x:0, opacity: 1}), 1);
        tl.add( TweenLite.to(titleBanner2, 1, {x:0, opacity: 1}), 2.5);
        tl.add( TweenLite.to(subtitleBanner, 1, {x:0, opacity: 1}), 3.5);

        tl.add( TweenLite.to(circule1, .25, {scale:1, opacity: 1}));
        tl.add( TweenLite.to(linea1, .25, {width:"10px", opacity: 1}));
        tl.add( TweenLite.to(btnSabor1, .25, {scale:1, opacity: 1}));

        tl.add( TweenLite.to(linea2, .25, {width:"37px", opacity: 1}));
        tl.add( TweenLite.to(btnSabor2, .25, {scale:1, opacity: 1}));

        tl.add( TweenLite.to(linea3, .25, {width:"37px", opacity: 1}));
        tl.add( TweenLite.to(btnSabor3, .25, {scale:1, opacity: 1}));

        tl.add( TweenLite.to(linea4, .25, {width:"37px", opacity: 1}));
        tl.add( TweenLite.to(btnSabor4, .25, {scale:1, opacity: 1}));

        tl.add( TweenLite.to(linea5, .25, {width:"37px", opacity: 1}));
        tl.add( TweenLite.to(btnSabor5, .25, {scale:1, opacity: 1}));

        tl.add( TweenLite.to(lineaFinal, .25, {width:"10px", opacity: 1}));
        tl.add( TweenLite.to(circuleFinal, .25, {scale:1, opacity: 1}));
      });
    },
    methods: {
      changeBackground: function(name) {
        // console.log(name)
        $("."+name).fadeIn('slown');

      },
      resetBackground: function(name){
        // console.log("Reset")
        $("."+name).fadeOut('slown');
      }
    }
  }
</script>

<style lang="sass">
  @import '../sass/main.sass'
  .relative
    position: relative
  .navHome
    position: absolute
    z-index: 400
    top: 80%
    width: 100%
    transform: translateY(-80%)
  .boxBarra
    position: relative
    z-index: 12
    width: 4px
    .circule
      background: white
      width: 10px
      height: 10px
      border-radius: 50%
      position: absolute
      left: 0
      top: 46px
      &.circulePrimero
        left: 16px
      &.circuleFinal
        left: 10px
    .linea
      position: absolute
      left: 0
      top: 50px
      width: 37px
      height: 2px
      background: white
      &.lineaPrimero
        width: 10px
        left: 26px
      &.lineaFinal
        width: 10px
  .home .intro,
  .pageAbsolute .intro
    background-image: url('../assets/fondoInicio.jpg')
    background-size: cover
    background-repeat: no-repeat
    background-position: center center
    height: inherit
    width: inherit
  .sweet .intro
    background-image: url('../assets/fondosweet.jpg')
  .smoky .intro
    background-image: url('../assets/fondosmoky.jpg')
  .smooth .intro
    background-image: url('../assets/fondosmooth.jpg')
  .spicy .intro
    background-image: url('../assets/fondospicy.jpg')
  .bold .intro
    background-image: url('../assets/fondobold.jpg')
  .lineBtn
    display: flex
    flex-direction: row
    flex-wrap: wrap
    justify-content: flex-start
  .btnSabor
    width: 100px
    height: 100px
    border: 2px solid white
    display: block
    border-radius: 50%
    position: relative
    text-align: center
    line-height: 6.25em
    margin-left: 2rem
    z-index: 13
    span
      position: relative
      z-index: 3
      font-family: "oswaldmediumItalic"
      font-size: 1.35rem
      text-transform: uppercase
      color: transparent
      background: url('../assets/mascaraletras.jpg') repeat
      -webkit-background-clip: text
      // -webkit-text-fill-color: transparent
      transition: all .5s ease
      width: 100px
      height: 100px
      display: block
    &:before
      position: absolute
      width: 90px
      height: 90px
      border-radius: 50%
      top: 3px
      left: 3px
      content: ""
      background: white
      transition: all .5s ease
    &:hover
      &::before
        background: $mostaza
      span
        background: transparent
        color: white

  .pageAbsolute
    display: none
    .boxContent
      height: 70vh
      display: flex
      flex-direction: column
      flex-wrap: wrap
      justify-content: center
      text-align: center
      .titleBanner
        font-size: 5rem
</style>
