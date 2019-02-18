<template lang="pug">
  .popupHome
    .boxContent
      .boxLegal
        .boxBorder
          .boxImage
            img(src="@/assets/logo2.png")
          form(@submit.prevent="submit", action="", method="post")
            .rowForm.alert(:class=" $v.year.$error ? 'active' :  '' ")
              p
                | Usted no es mayor de edad o a ingresado un dato inválido.
            .rowForm
              h3
                | necesitas ser mayor de edad para disfrutar esta experiencia
                br
                span
                  | por favor, confírmanos tu año de nacimiento
            .rowForm.rowFlex
              input(type="text", placeholder="AÑO DE NACIMIENTO", v-mask="['####']",  v-model="year", :class=" $v.year.$error ? 'error' :  '' ")
              button(type="submit")
                span
                  | Ingresar
          .infoLegal
            p
              | Haciendo click en
              span INGRESAR
              | aceptas la Política de privacidad. Esta web está reservada a personas mayores de 18 años o con
              br
              | edad legal para consumir alcohol conforme a la legislación de su país de acceso. Te aconsejamos que no intentes entrar en
              br
              | este sitio si no cumples con los requisitos.
            p
              | Utilizamos cookies propias y de terceros para mejorar la experiencia de navegación. Al continuar con la navegación,
              br
              | entendemos que acepta su uso. Para más información, consulte nuestra
              a(href="#")
                | Política de Cookies.
</template>

<script>
  import { required, minLength, between } from 'vuelidate/lib/validators'
  import home from '@/component/homeComponent.vue'
  import { bus } from '@/main'

  export default {
    // Este nombre debe coincidir con el nombre del componente que hemos definido
    // name: 'FormLegal',
    data () {
      return {
        year: '',
        submitStatus: null
      }
    },
    validations: {
      year: {
        required,
        minLength: minLength(4)
      }
    },
    methods: {
      mounted: function(){
      },
      detectIE: function(){
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf('MSIE');
        if (msie > 0){
          return parseInt(ua.substring(msie + 5, ua.indexOf('.',msie)), 10);
        }
        var trident = ua.indexOf('rv:');
        if (trident > 0){
          var rv = ua.indexOf('rv:');
          return parseInt(ua.substring(rv + 3,ua.indexOf('.',rv)),10);
        }

        var edge = ua.indexOf('Edge/');

        if(edge > 0){
          return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        }
        // Cualquier otro browser, que no sea IE
        return false;
      },
      submit: function(){
        var _y = this.year;
        var _date = new Date();
        var _yCurrent = _date.getFullYear();
        var _dif = _yCurrent - _y;
        // console.log(_dif);
        // console.log(this.year);
        // console.log('submit!');
        if (_dif < 18){
          $(".alert").addClass("active");
          $("input[type='text']").addClass('error');
        }else{
          this.$v.$touch();
          if (this.$v.$invalid) {
            this.submitStatus = 'ERROR';
            // console.log(this.submitStatus);
          } else {
            // do your submit logic here
            this.submitStatus = 'PENDING';

            // console.log(this.submitStatus);
            var _this = this;
            setTimeout(() => {
              _this.submitStatus = 'OK';
              $(".popupHome").fadeOut("slown");
              // para comunicarnos con el padre (componente)
              // _this.$emit('animateHome');
              // comunicacion entre componentes

              var version = this.detectIE();
              if (version === false){
                // console.log('<s>IE/Edge</s>');
                // $(".btnSabor span").css("background","transparent");
                // $(".btnSabor span").css("color","yellow");
              } else if (version >= 12 ){
                // $(".btnSabor span").css("background","transparent");
                // $(".btnSabor span").css("color","red");
              } else {
                // console.log('IE' + version);
                $(".btnSabor span").css("background","transparent");
                $(".btnSabor span").css("color","#45270e");
              }
              // document.getElementById('details').innerHTML = window.navigator.userAgent;
              // console.log(window.navigator.userAgent);
              VueCookies.set('accessToken', "true");
              bus.$emit('animateHome',true);

            }, 500)
          }
        }
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import '../sass/main.sass'
  .popupHome
    position: absolute
    height: 100vh
    width: 100vw
    background: rgba(0,0,0,0.7)
    z-index: 800
    display: none
    .boxContent
      display: flex
      flex-direction: row
      flex-wrap: wrap
      justify-content: center
      align-content: center
      align-items: center
      height: inherit
      width: inherit
      .boxLegal
        width: 987px
        background: white
        height: auto
        .boxBorder
          margin: 10px
          border: 1px solid $mostaza
          position: relative
          &:before
            position: absolute
            right: -4px
            top: 25px
            width: 8px
            height: 41px
            background: white
            border: 0
            content: ""
          .infoLegal
            text-align: center
            padding-top: .85rem
            p
              font-family: "Roboto"
              font-weight: 400
              font-size: .7rem
              color: #7d7d7d
              line-height: 1.25em
              margin-bottom: 1rem
              &:last-child
                margin-bottom: 1.75rem
              span
                color: $marron
                font-weight: 700
                margin: 0 5px
              a
                margin: 0 5px
          form
            .rowForm
              text-align: center
              margin-bottom: 1.5rem
              &.alert
                display: none
                margin-bottom: .85rem
                padding: 10px
                background: rgb(228, 31, 11)
                &.active
                  display: block
                p
                  font-family: "Roboto"
                  font-weight: 400
                  font-size: 0.85rem
                  color: white
                  font-weight: 500
              h3
                font-family: "Roboto"
                font-weight: 400
                font-size: 1rem
                color: $marron
                line-height: 1.25em
                text-transform: uppercase
                span
                  font-weight: 700
              &.rowFlex
                display: flex
                flex-direction: row
                flex-wrap: wrap
                justify-content: center
                input::-webkit-input-placeholder
                  color: white
                  opacity: 1
                input::placeholder
                  color: white
                  opacity: 1
                input[type="text"]
                  margin-right: 1rem
                  text-align: center
                  width: 164px
                  height: 48px
                  border: 0
                  background: $marron
                  font-size: 1rem
                  font-family: "oswaldmedium"
                  color: white
                  outline: 0
                  &:focus
                    outline: 0


                  &.error
                    border: 1px solid rgb(228, 31, 11)
                    background-color: rgba(255, 0, 47, 0.81)
                button
                  width: 163px
                  border: 1px solid $marron
                  background: white
                  cursor: pointer
                  position: relative
                  &:before
                    content: ""
                    position: absolute
                    bottom: -4px
                    right: 10px
                    width: 20px
                    height: 8px
                    background: white
                  span
                    color: $marron
                    font-size: 1rem
                    font-family: "oswaldmedium"
                    text-align: center
                    text-transform: uppercase

          .boxImage
            width: 100px
            margin: auto
            text-align: center
            width: 221px
            padding-top: 3.5rem
            padding-bottom: 2.5rem
</style>
