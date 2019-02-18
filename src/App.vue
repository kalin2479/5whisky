<template lang="pug">
  #app
    //- LegalComponent(v-on:animateHome="animationHome")
    LegalComponent
    //- homeComponent
    router-view
    footerComponent
    loadingComponent
</template>

<script>
// importamos nuestros componentes que estamos creando
import LegalComponent from '@/component/LegalComponent.vue'
// import homeComponent from '@/component/homeComponent.vue'
import footerComponent from '@/component/footerComponent.vue'
import loadingComponent from '@/component/loadingComponent.vue'

export default {
  name: 'app',
  data () {
    return {}
  },
  components: {
    LegalComponent: LegalComponent,
    // homeComponent,
    footerComponent,
    loadingComponent
  },
  created: function() {
    // antes de que se carge
    // console.log($("#Sweet"))
  },
  mounted: function() {
    console.log(VueCookies.get('accessToken'))
    if (VueCookies.get('accessToken') === "true"){
      $(".popupHome").fadeOut("slown");
    }else{
      $(".popupHome").fadeIn("slown");
    }
  }
}
</script>

<style lang="sass">
</style>
