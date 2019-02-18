<template lang="pug">
  footer
    p
      | Tomar bebidas alcohólicas en exceso es dañino. Encuentra más información en
      a(href="http://www.dirnkiq.com", target="_blanck")
        | www.dirnkiq.com
</template>

<script>
export default {
}
</script>

<style lang="sass">
  footer
    position: absolute
    bottom: 0
    left: 0
    background: rgba(0,0,0,.5)
    width: 100%
    line-height: 3.5em
    text-align: center
    z-index: 10
    p,
    a
      color: white
      font-family: "Verdana"
      font-size: .75r
      text-transform: uppercase
      color: whitem
      letter-spacing: 0.025em
      text-transform: uppercase
    a
      text-decoration: underline
      margin-left: .35rem
    p, a
      color: rgba(255, 255, 255, .75)

</style>
