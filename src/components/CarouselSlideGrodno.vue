<template>
  <div id="carousel-slide-grodno">
    <b-carousel-slide>
      <template #img>
        <div class="image-container">
          <img class="d-block img-fluid w-100" :src="imageSrc" alt="image slot" />
        </div>
      </template>
      <div>
        <h1>Белводпуть-Гродно</h1>
        <h3>{{ serviceDescription }}</h3>
        <a :href="'#' + hrefId" v-smooth-scroll class="button2">Подробнее</a>
      </div>
    </b-carousel-slide>
  </div>
</template>

<script>
export default {
  props: [
      "serviceDescription",
      "image",
       "hrefId"
       ],
  computed: {
    imageSrc() {
      return require("../assets/" + this.image + ".jpg");
    },
  },
};
</script>

<style scoped>
    h3 {
      padding-top: 0px;
      padding-bottom: 8px;
      font-size: 20px;
    }
    a.button2 {
        display:inline-block;
        padding: 0.2em 1.5em;
        border:0.16em solid #FFFFFF;
        margin:0 0.3em 0.3em 0;
        box-sizing: border-box;
        text-decoration:none;
        text-transform:uppercase;
        font-family:'Roboto',sans-serif;
        font-weight:400;
        color:#FFFFFF;
        text-align:center;
        transition: all 0.15s;
    }
    a.button2:hover {
        color:#DDDDDD;
        border-color:#DDDDDD;
    }
    a.button2:active {
        color:#BBBBBB;
        border-color:#BBBBBB;
    }
    /* @media all and (max-width:30em) {
        a.button2 {
            display: block;
            margin: 0.4em auto;
        }
    } */

    /* Small devices (tablets, 768px and up) */
    @media (min-width: 768px) {
      a.button2 {
        display:inline-block;
        padding: 0.8em 3em;
        border:0.16em solid #FFFFFF;
        margin:0 0.3em 0.3em 0;
        box-sizing: border-box;
        text-decoration:none;
        text-transform:uppercase;
        font-family:'Roboto',sans-serif;
        font-weight:400;
        color:#FFFFFF;
        text-align:center;
        transition: all 0.15s;
      }
      h3 {
        padding-top: 10px;
        padding-bottom: 30px;
        font-size: 25px;
      } 
    }
</style>