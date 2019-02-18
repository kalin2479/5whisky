<template lang="pug">
  div
    div.loadElement
      div.centerElement
        div.imgLoad
        p
          | Cargando...
</template>

<script>
import { bus } from '@/main'
export default {
  created: function(){
    bus.$on('cargarElement',function(boolData){
      $("body").css("height", "100vh");
      $("body").css("overflow", "hidden");
      $(".loadElement").fadeIn("slow");
      $(".loadElement .imgLoad").addClass("centrar");
    })
  }
}
</script>

<style lang="sass">
  .loadElement
    position: absolute
    top: 0
    left: 0
    width: 100vw
    height: 100vh
    background: rgba(0, 0, 0, 1)
    display: none
    z-index: 9999
    .centerElement
      display: flex
      flex-direction: column
      flex-wrap: wrap
      justify-content: center
      align-content: center
      align-items: center
      width: 100vw
      height: 100vh
      p
        font-size: 1rem
        color: white
        text-transform: uppercase
      .imgLoad
        background-image: url('../assets/cargando.gif')
        background-size: cover
        background-position: center
        background-repeat: no-repeat
        width: 244px
        height: 118px
</style>
