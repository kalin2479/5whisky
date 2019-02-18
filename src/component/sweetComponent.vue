<template lang="pug">
  div.sectionLoad
    header.header.ping
      .boxHeader
        router-link(to="/", class="logo")
          img(src="@/assets/minilogo.png", alt="5Whisky")
        div.separate
          .arrow
          .arrow
        a(href="javascript:void(0)")
          | {{ product.sabor }}
      nav
        a(href="javascript:void(0)")
          img(src="@/assets/menu.png")
          span Menú
    section.sectionDetail
      .container
        .boxContent
          .boxPuntos
            .boxRow
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
            .boxRow
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
            .boxRow
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
            .boxRow
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
            .boxRow
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
            .boxRow
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
            .boxRow
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
            .boxRow
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
            .boxRow
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
            .boxRow
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
            .boxRow
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
            .boxRow
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
          div.boxMainDetail
            .boxTitle
              h2(v-html="titleProduct")
              h3 {{ subTitleProduct }}
            .boxDetail(v-html="descriptionProduct")
            .boxAccess
              a(v-bind:href="linkProduct" target="_blank")
                img(src="@/assets/carrito.png")
                div.text Agregar
              .separate
                .circule
                .line
              a(hre="javascript:void(0)")
                img(src="@/assets/receta.png")
                div.text Recetas
            .boxPremios
              h2
                | Premios Internacionales
              .listPremios
                a(v-for="(premio, index) in premiosProduct" :key="index")
                  img(v-bind:src="require(`@/assets/${premio.imagen}`)")
                  .toolTip
                    .indicador
                    .detail
                      .cantidad {{ premio.cantidad }}
                      p(v-html = "premio.titulo")
          div.boxActiveGallery
            .boxSprite
              img(v-bind:src="require(`@/assets/${imgBig}`)", class="sprite")
      div.boxGallery
        carousel(:navigationEnabled="true", :perPage = "6", :minSwipeDistance="1")
          slide( v-for="(lproducts, index) in listProduct" :key="index"
          :data-index="index + 1"
          :class="{ active: lproducts.active }"
          :data-img="lproducts.fotoGrande"
          @slideClick="handleSlideClick")
            .marco
              img(v-bind:src="require(`@/assets/${lproducts.miniFoto}`)")
          slide(v-for="(lproducts, index) in listProductVacio" :key="lproducts.key")
            .marco.demo
    section.sectionReceta
      .container
        .boxContent
          .boxPuntos
            .boxRow
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
            .boxRow
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
            .boxRow
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
            .boxRow
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
            .boxRow
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
            .boxRow
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
            .boxRow
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
            .boxRow
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
            .boxRow
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
            .boxRow
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
            .boxRow
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
            .boxRow
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
              span .
          div.boxMainDetail
            .boxImageDetail
              img(src="@/assets/vaso.png", class = "vaso")
              img(src="@/assets/naranja.png", class = "adorno")
            .boxTitle
              h2(v-html="titleReceta")
            .boxSupSubtitle
              .boxSubtitle(v-html = "subtitleReceta")
              span.left (
              span.right )
            .boxDescription
              .contentRight
                h3 Ingredientes:
                div(v-html="ingredientesReceta")
                h3 ¿Cómo Prepararlo?
                div(v-html="preparloReceta")
                h4(v-html="cierreReceta")
            .boxBotton
              a(:href="comprarReceta")
                | COMPRAR
          .boxGalleyDatail
            .wrapperGalley
              .viewMain
                video(v-if="type === 'video'"
                class="video-js"
                :poster="require(`@/assets/${arreceta[0].poster}`)"
                controls
                width="100%"
                height="100%"
                id="videoReceta")
                  source(:src="require(`@/assets/${arreceta[0].name}`)" type="video/mp4")
                  p(class="vjs-no-js")
                    | To view this video please enable JavaScript, and consider upgrading to a web browser that
                  a(href="https://videojs.com/html5-video-support/", target="_blank")
                    | supports HTML5 video
                div(v-if="type === 'imagen'")
                  img(v-bind:src="require(`@/assets/${arreceta[0].name}`)")
              .boxRecetas
                h2
                  | Recetas Relacionadas
                .carouselRelacionados
                  carousel(:navigationEnabled="true", :perPage = "4", :minSwipeDistance="1")
                    slide(v-for="(task, index) in galleryReceta"
                    v-bind:key="index"
                    v-bind:data-index="index"
                    v-bind:data-name="task.name"
                    v-bind:data-poster="task.poster"
                    v-bind:data-type="task.type"
                    v-bind:data-id="task.id"
                    @slideClick="viewGallery"
                    v-bind:class="task.active")
                      .marco
                        img(v-bind:src="require(`@/assets/${task.thumbnails}`)")
</template>

<script>

import home from '@/component/loadingComponent.vue'
import { bus } from '@/main'
import axios from 'axios'
import VueAxios from 'vue-axios'

// Vue.use(VueAxios, axios)


export default {
  data(){
    return {
      imgBig : "01.png",
      type : "",
      product: [],
      titleProduct: "",
      subTitleProduct: "",
      linkProduct: "",
      descriptionProduct: "",
      idProduct: 0,
      premiosProduct: [],
      listProduct: [],
      listProductVacio: [],
      titleReceta: "",
      subtitleReceta: "",
      ingredientesReceta: "",
      preparloReceta: "",
      cierreReceta: "",
      comprarReceta: "",
      code: 0,
      arreceta: [
        {
          name: "",
          poster: "",
          title: "",
          sumilla: "",
          ingredientes: "",
          preparlo: "",
          frase: ""
        }
      ],
      galleryReceta: [],
      idReceta: 0
    }
  },
  created: function(){
  },
  srollEvent: function(){
    let pinged = false;
  	let nav = document.querySelector(".header");
    let stickyScrollPoint = document.querySelector(".sectionDetail").offsetHeight - 80;

    window.addEventListener('scroll',function(ev){
      stickyScrollPoint = document.querySelector(".sectionDetail").offsetHeight - 80;
      // console.log(window.scrollY);
      // console.log(stickyScrollPoint)

      if(window.scrollY < stickyScrollPoint){
        if (!pinged) return;
    		nav.classList.remove("ping");
    		pinged = false;
      };
      /*
      getBoundingClientRect -> me indica las coordenadas del elemento
      */
      let coords = nav.getBoundingClientRect();
      if (coords.top <= 0){
        if (pinged) return;
    		nav.classList.add("ping");
    		pinged = true;
      };
      // console.log(coords.top);
    });
  },
  mounted: function(){
    console.log(VueCookies.get('accessToken'))
    if (VueCookies.get('accessToken') != "true"){
      this.$router.push({ name: 'home', query: { redirect: '/' } });
    }
    // this.srollEvent();

    bus.$emit('cargarElement',true)
    // this.arreceta[0].name = this.galleryReceta[0].name
    // this.arreceta[0].poster = this.galleryReceta[0].poster
    // this.type = this.galleryReceta[0].type
    // console.log(">>"+this.arreceta[0].name)
    var self = this

    setTimeout(function(){
      // $(".sectionLoad").fadeIn("slow")
      self.resetGallery()
    }, 1500);
    var api = "/dataBase/productSweet.json";
    axios.get(api).then((response) => {
      // console.log(11)
      let data = response.data[self.code];
      let objProduct = data.productos;
      let objReceta = data.recetas;
      var status = false;
      let z = 0;
      var arrayAdd = [];
      self.listProduct = objProduct;
      z = 6 - objProduct.length;
      let aux = z;
      let m = 0;
      if (z > 0){
        for (m = 0; m<z; m++){
          aux = aux + 1;
          arrayAdd= '{"key": '+aux+'}';
          self.listProductVacio.push(JSON.parse(arrayAdd));
        }
      }
      // obtendremos los datos de la receta
      self.galleryReceta = objReceta;
      // console.log("ss")
      // console.log(objReceta)
      for (let i = 0; i < objReceta.length; i ++){
        if (objReceta[i].active === "active"){
          self.type = objReceta[i].type;
          self.arreceta[0].name = objReceta[i].name
          self.arreceta[0].poster = objReceta[i].poster
          self.titleReceta = objReceta[i].titulo
          self.subtitleReceta = objReceta[i].subtitulo
          self.ingredientesReceta = objReceta[i].ingredientes
          self.preparloReceta = objReceta[i].preparlo
          self.cierreReceta = objReceta[i].cierre
          self.comprarReceta = objReceta[i].comprar
        }
      }
      for (let key = 0; key < objProduct.length; key ++){
      // Object.keys(objProduct).forEach((key)=>{
        // console.log("For Each Key: ", key)
        // console.log("For Each Value: ", objProduct[key])
        // console.log(objProduct[key])
        status = objProduct[key].active
        if (status){
          self.product             = data;
          self.titleProduct        = objProduct[key].titulo;
          self.subTitleProduct     = objProduct[key].subtitulo;
          self.descriptionProduct  = objProduct[key].descripcion;
          self.linkProduct         = objProduct[key].url;
          self.premiosProduct      = objProduct[key].premios;
          self.imgBig              = objProduct[key].fotoGrande;
          self.idProduct           = objProduct[key].id;
          setTimeout(function(){
            $("body").css("height", "auto");
            $("body").css("overflow", "initial");
            $(".loadElement").fadeOut("slow");
            // $("header").addClass("ping");
            // var top = $(".sectionDetail").offset().top - 80;
            // $('html, body').animate({
            //   scrollTop: top
            // }, 500);
          }, 3000 )
          return false;
        }
      } // fin del for



      // console.log(self.premiosProduct);
      // console.log(data);
    })
    .catch((error) => {
      console.log('Error:'+error);
    })

    // this.axios.get(api).then((response) => {
    //   console.log(response.data)
    // })
    //
    // this.$http.get(api).then((response) => {
    //   console.log(response.data)
    // })

  },
  methods: {
    resetGallery: function(){
      // $(".carouselRelacionados .VueCarousel-pagination").css("display","none");
    },
    myProduct: function(id){
      var api = "/dataBase/productSweet.json";
      let self = this;
      // console.log(">>"+id)
      axios.get(api).then((response) => {
        let data = response.data[self.code];
        let objProduct = data.productos;
        let objProductAux = data.productos;
        // console.log(objProduct.length)

        for (let i = 0; i < objProduct.length; i ++){
          objProduct[i].active = "";
          // console.log("valor dinamico:"+objProduct[i].id)
          // console.log(">>>"+id)
          // console.log("key"+i)
          if (parseInt(objProduct[i].id) === parseInt(id)){
            // console.log("entroe")
            objProduct[i].active = "active";
            // self.product             = data;
            self.titleProduct        = objProduct[i].titulo;
            self.subTitleProduct     = objProduct[i].subtitulo;
            self.descriptionProduct  = objProduct[i].descripcion;
            self.linkProduct         = objProduct[i].url;
            self.premiosProduct      = objProduct[i].premios;
            self.imgBig              = objProduct[i].fotoGrande;
            self.idProduct           = objProduct[i].id;
            self.listProduct = objProduct;
            // console.log(self.listProduct);

          }
        }

      });
    },
    getProduct: function(id){
      var api = "/dataBase/productSweet.json";
      let self = this;
      axios.get(api).then((response) => {
        let data = response.data[self.code];
        let objProduct = data.productos;
        let objReceta = data.recetas;

        let key = id - 1;
        self.titleProduct        = objProduct[key].titulo;
        self.subTitleProduct     = objProduct[key].subtitulo;
        self.descriptionProduct  = objProduct[key].descripcion;
        self.linkProduct         = objProduct[key].url;
        self.premiosProduct      = objProduct[key].premios;
        self.imgBig              = objProduct[key].fotoGrande;
        self.idProduct           = objProduct[key].id;
        for (let i = 0; i < objProduct.length; i ++){
          objProduct[i].active = "";
          if (i === parseInt(key)){
            objProduct[key].active = "active";
            self.listProduct = objProduct;
          }
        }

        // obtendremos los datos de la receta
        for (let i = 0; i < objReceta.length; i ++){
          objReceta[i].active = "";
          if (objReceta[i].idProduct === self.idProduct){
            self.type = objReceta[i].type;
            objReceta[i].active = "active";
            self.arreceta[0].name = objReceta[i].name;
            self.arreceta[0].poster = objReceta[i].poster;
            self.titleReceta = objReceta[i].titulo
            self.subtitleReceta = objReceta[i].subtitulo
            self.ingredientesReceta = objReceta[i].ingredientes
            self.preparloReceta = objReceta[i].preparlo
            self.cierreReceta = objReceta[i].cierre
            self.comprarReceta = objReceta[i].comprar
            if (self.type === "video"){
              setTimeout(function(){
                var video = document.getElementById('videoReceta')
                console.log(video)
                // video.currentTime = 0
                video.load()
                // video.play()
              }, 500)

            }
          }
        }
        self.galleryReceta = objReceta;
        // console.log(self.galleryReceta);


      })
      .catch((error) => {
        console.log('Error:'+error);
      })
    },
    viewGallery: function(dataset){
      // console.log(dataset)
      for (let i = 0; i < this.galleryReceta.length; i ++){
        this.galleryReceta[i].active = "";
        // console.log(this.galleryReceta[i].id)
        // console.log(dataset.id)
        if (this.galleryReceta[i].id === parseInt(dataset.id)){
          this.galleryReceta[i].active = "active";
          this.titleReceta = this.galleryReceta[i].titulo
          this.subtitleReceta = this.galleryReceta[i].subtitulo
          this.ingredientesReceta = this.galleryReceta[i].ingredientes
          this.preparloReceta = this.galleryReceta[i].preparlo
          this.cierreReceta = this.galleryReceta[i].cierre
          this.comprarReceta = this.galleryReceta[i].comprar
          this.myProduct(this.galleryReceta[i].idProduct)
        }
      }
      // console.log(this.galleryReceta)
      this.arreceta[0].name = dataset.name
      this.arreceta[0].poster = dataset.poster
      this.type = dataset.type
      if (this.type === "video"){
        setTimeout(function(){
          var video = document.getElementById('videoReceta')
          // console.log(video)
          // video.currentTime = 0
          video.load()
          // video.play()
        }, 500)

      }

    },
    handleSlideClick: function(dataset) {
      $(".boxGallery .VueCarousel-slide").removeClass('active')
      $(".boxGallery .VueCarousel-slide:nth-of-type("+dataset.index+")").addClass('active')
      // this.imgBig = dataset.img;
      this.getProduct(dataset.index);
    }
  }
}
</script>

<style lang="sass">
  @import '../sass/main.sass'

  @keyframes perspectivaVaso
    0%
      transform: rotate(180deg) translate(0rem, 3rem) scale(0) rotate(-180deg)
      opacity: 0
    30%
      transform: rotate(90deg) translate(0rem, 3rem) scale(.5) rotate(-90deg)
      opacity: 1
    100%
      transform: rotate(0deg) translate(0rem, 0rem) scale(1) rotate(-0deg)
      opacity: 1
  @keyframes entraAdorno
    0%
      right: 6rem
      opacity: 0
    50%
      opacity: .5
    100%
      right: 2rem
      opacity: 1
  // .sectionLoad
  //   display: none
  .VueCarousel-pagination
    display: none
  .VueCarousel-navigation-button
    font-size: 2.5rem
  .boxGalleyDatail
    width: 50%
    .wrapperGalley
      padding: 3rem 1rem 3rem 2rem
      video,
      img
        border: 1px solid rgba(255, 255, 255, .5)
        padding: 2px
      img
        width: 100%
        object-fit: cover
      .viewMain
        overflow: hidden
        padding: 0px
        border: 0px solid rgba(255, 255, 255, .5)
    .boxRecetas
      text-align: left
      margin-top: 1rem
      ul
        display: flex
        flex-direction: row
        flex-wrap: nowrap
        justify-content: flex-end
        margin-top: .25rem
        li
          margin-right: .25rem
          opacity: .5
          transition: .5s all ease
          &:hover
            opacity: 1
          &.active
            opacity: 1
          &:last-child
            margin-right: 0
      h2
        color: white
        font-family: "oswaldbold"
        font-size: 1.25rem
        position: relative
        &:before
          content: ""
          height: 1px
          width: 100%
          position: absolute
          left: 0
          bottom: 4px
          border-bottom: 1px solid white
  .boxImageDetail
    position: absolute
    top: 0
    left: -7.5rem
    width: 284px
    height: 500px
    img
      position: absolute
      right: 0
      top: 0
      &.vaso
        top: 4rem
        height: 400px
        opacity: 0
        &.zoomVaso
          animation-name: perspectivaVaso
          animation-duration: 1s
          /* or: Xms */
          animation-iteration-count: 1
          animation-direction: alternate
          /* or: normal */
          animation-timing-function: ease-out
          /* or: ease, ease-in, ease-in-out, linear, cubic-bezier(x1, y1, x2, y2) */
          animation-fill-mode: forwards
          /* or: backwards, both, none */
          animation-delay: .5s
      &.adorno
        top: auto
        bottom: 0rem
        right: 2rem
        width: 178px
        opacity: 0
        &.animarAdorno
          animation-name: entraAdorno
          animation-duration: .5s
          /* or: Xms */
          animation-iteration-count: 1
          animation-direction: alternate
          /* or: normal */
          animation-timing-function: ease-out
          /* or: ease, ease-in, ease-in-out, linear, cubic-bezier(x1, y1, x2, y2) */
          animation-fill-mode: forwards
          /* or: backwards, both, none */
          animation-delay: 1.5
  .boxBotton
    display: flex
    flex-direction: row
    flex-wrap: wrap
    justify-content: flex-end
    margin-top: 1rem
    a
      margin-right: 2rem
      display: block
      width: 156px
      height: 43px
      box-sizing: border-box
      background: white
      font-family: "oswaldbold"
      font-size: 1rem
      text-transform: uppercase
      line-height: 2.9em
      color: #dab57f
      text-align: center
      position: relative
      &:after
        content: ""
        position: absolute
        z-index: 1
        bottom: -11px
        right: 13px
        width: 20px
        height: 7px
        background: #dcb474
      &:before
        content: ""
        position: absolute
        z-index: 1
        top: 6px
        left: 6px
        border: 1px solid white
        width: 156px
        height: 43px
  .sectionDetail
    margin-top: 5rem
  .sectionDetail,
  .sectionReceta
    position: relative
    overflow: hidden
    .boxActiveGallery
      position: relative
      .boxSprite
        position: absolute
        // top: -430px
        top: -319px
        left: 20px
        width: 350px
        overflow: hidden
        img
          max-width: none
    .carouselRelacionados
      margin-top: .3rem
      .VueCarousel-wrapper
        .VueCarousel-inner
          .VueCarousel-slide
            opacity: .5
            transition: .5s all ease
            cursor: pointer
            &:hover, &.active
              opacity: 1
            .marco
              margin: 0 2px
              &.demo
                background: #e0bd84
    .boxGallery
      width: 628px
      position: absolute
      top: 289px
      right: -210px
      transform: rotate(90deg)
      .VueCarousel-wrapper
        // overflow: auto !important
        .VueCarousel-inner
          .VueCarousel-slide
            height: inherit
            width: 128px
            opacity: .5
            cursor: pointer
            transition: .5s all ease
            .marco
              border: 1px solid #e0bd84
              margin: 0px 2px
              overflow: hidden
              height: 130px
              transition: .5s all ease
              &.demo
                background: #e0bd84
            &:hover
              opacity: 1
            &.active
              height: 179px
              position: relative
              z-index: 4
              background: #d8ac65
              opacity: 1
              .marco
                margin: 0
                height: inherit
              img
                transform: rotate(-90deg) scale(1.45)
                left: -10px
                top: -55px
            img
              width: 100%
              position: relative
              transform: rotate(-90deg) scale(.65)
              left: 19px
              top: -114px
    .boxContent
      padding-top: 9.5rem
      text-align: right
      display: flex
      flex-direction: row
      flex-wrap: wrap
      justify-content: space-between
      position: relative
      width: auto
      .boxPremios
        text-align: left
        padding-top: 1rem
        .listPremios
          display: flex
          flex-direction: row
          flex-wrap: wrap
          justify-content: flex-start
          padding-top: .75rem
          a
            position: relative
            transition: .5s all ease
            &:hover
              .toolTip
                display: block
            .toolTip
              position: absolute
              top: -5.75rem
              left: -2rem
              width: 219px
              height: 79px
              border-radius: 5px
              background: #d8ad65
              padding: 8px
              z-index: 10
              display: none
              .indicador
                width: 0
                height: 0
                border-left: 12px solid #d8ad65
                border-top: 6px solid transparent
                border-bottom: 6px solid transparent
                bottom: -12px
                left: 69px
                transform: rotate(90deg)
                position: absolute
              .detail
                width: 100%
                height: 100%
                border: 1px solid white
                display: flex
                flex-direction: row
                flex-wrap: nowrap
                justify-content: flex-start
                position: relative
                padding-top: .25rem
                &:before
                  content: ""
                  position: absolute
                  background: #d8ad65
                  width: 15px
                  height: 14px
                  top: -8px
                  right: -4px
                .cantidad
                  font-family: "Roboto"
                  font-size: 3.5rem
                  font-weight: 700
                  color: white
                  line-height: 1em
                  padding-left: 15px
                p
                  font-family: "Roboto"
                  font-size: .8rem
                  font-weight: 400
                  color: white
                  line-height: 1em
                  padding: 5px 0 0 8px
                  letter-spacing: .025em
                  span
                    font-weight: 700
                    padding-left: 2px
        h2
          font-family: "oswaldbold"
          font-size: 1rem
          color: #d8ac65
          text-transform: uppercase
          text-decoration: underline
      .boxAccess
        display: flex
        flex-direction: row
        flex-wrap: wrap
        justify-content: flex-end
        margin-right: 4rem
        margin-top: 3rem
        .separate
          position: relative
          width: 30px
          height: 50px
          .line
            position: absolute
            width: 1px
            height: 95px
            background: #d8ac65
            top: -10px
            left: 50%
            transform: translateX(-50%)
          .circule
            position: absolute
            width: 10px
            height: 10px
            background: #d8ac65
            border-radius: 50%
            top: -14px
            left: 50%
            transform: translateX(-50%)
        a
          img
            height: 50px
          .text
            font-family: "oswaldbold"
            font-size: .75rem
            color: #d8ac65
            text-transform: uppercase
      .boxActiveGallery
        width: 50%
        height: 100%
      .boxMainDetail
        position: relative
        z-index: 3
        width: 50%
        padding-bottom: 3rem
        .boxDetail
          padding-top: 1.5em
          p
            font-family: "Roboto"
            font-weight: 300
            font-size: .85rem
            color: #828181
            margin-bottom: 1.5rem
        .boxTitle
          h2, h3
            font-family: "oswaldbold"
            font-size: 2.5rem
            color: #d8ac65
            line-height: 1em
          h3
            font-family: "oswaldlight"
            font-size: 1.7rem
  header
    box-sizing: border-box
    background-image: url('../assets/fondonav.jpg')
    background-size: cover
    background-position: center
    background-repeat: repeat
    display: flex
    flex-direction: row
    flex-wrap: wrap
    justify-content: space-between
    align-content: flex-start
    align-items: flex-start
    padding-top: 1.1rem
    padding-bottom: 1.25rem
    padding-left: 40px
    padding-right: 40px
    &.ping
      position: fixed
      top: 0
      left: 0
      width: 100%
      z-index: 300
    nav
      a
        display: flex
        flex-direction: row
        flex-wrap: wrap
        justify-content: flex-start
        align-content: flex-start
        align-items: center
        img
          margin-right: .5rem
          // width: 28px
        span
          font-family: "oswaldmediumItalic"
          font-size: 1.25rem
          color: white
          padding-top: 6px
    .boxHeader
      display: flex
      flex-direction: row
      flex-wrap: wrap
      justify-content: flex-start
      align-content: flex-start
      align-items: center
      a
        font-family: "oswaldmediumItalic"
        font-size: 1.35rem
        color: rgba(255,255,255,.65)
        padding-top: 0px
      .separate
        margin: 0 12px 0 15px
        display: flex
        flex-direction: row
        flex-wrap: wrap
        justify-content: flex-start
        align-content: flex-start
        align-items: center
        padding-top: 0px
        .arrow
          position: relative
          width: 6px
          height: 30px
          &:nth-of-type(1)
            &:before, &:after
              content: ""
              position: absolute
              width: 14px
              height: 2px
              transform: rotate(55deg)
              background: #ded8ce
              left: 0px
              top: 7px
            &:after
              transform: rotate(-55deg)
              background: #ded8ce
              left: 0px
              top: 18px
          &:nth-of-type(2)
            &:before, &:after
              content: ""
              position: absolute
              width: 14px
              height: 2px
              transform: rotate(55deg)
              background: #ded8ce
              left: 0px
              top: 7px
            &:after
              transform: rotate(-55deg)
              background: #ded8ce
              left: 0px
              top: 18px
      .logo
        padding: 0
        height: 60px
  .boxPuntos
    width: 508px
    height: 512px
    position: absolute
    top: 9.45rem
    left: -10px
    z-index: 2
    text-align: left
    @media screen and (min-width: 1280px)
      left: 87px
    .boxRow
      height: 27px
      flex-direction: row
      flex-wrap: wrap
      justify-content: flex-start
      span
        font-family: "Roboto"
        font-weight: 300
        font-size: 1.4rem
        color: #d8ac65
        margin-right: 2rem
  .sectionReceta
    background-image: url('../assets/fondoReceta.jpg')
    background-size: cover
    background-position: center
    background-repeat: repeat
    padding-bottom: 8rem
    .boxDescription
      display: flex
      flex-direction: row
      flex-wrap: wrap
      justify-content: flex-end
      align-content: flex-start
      align-items: stretch
      .contentRight
        text-align: left
        width: 300px
        margin-top: 1rem
        h3
          font-family: "Roboto"
          font-weight: 700
          font-size: .9rem
          color: rgba(255,255,255,1)
          text-decoration: underline
          line-height: 2em
          margin-top: .5rem
        h4
          font-family: "Roboto"
          font-weight: 700
          font-size: 1rem
          color: rgba(255,255,255,1)
          letter-spacing: -.05em
          margin-top: 1rem
          line-height: 1.25em

        p
          ont-family: "Roboto"
          font-weight: 400
          font-size: .8rem
          color: rgba(255,255,255,1)

          span
            font-weight: 700
            margin-left: 2px
            margin-right: 2px
    .boxSupSubtitle
      position: relative
      font-family: "oswaldlight"
      font-size: 1.15rem
      color: rgba(255,255,255,.6)
      display: inline-block
      padding: 0 1rem
      margin-top: 1rem
      span
        position: absolute
        font-size: 4rem
        top: -20px
        &.left
          left: -6px
        &.right
          right: -6px
    // .boxSubtitle


    .boxContent
      .boxMainDetail
        .boxTitle
          h3, h2
            color: white
    .boxPuntos
      .boxRow
        span
          color: white

</style>
