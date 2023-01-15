<template>
  <div id="carousel-grodno">
    <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      img-width="1024"
      img-height="480"
      background="#ababab"
    >
      <CarouselSlideGrodno
        v-for="(service, index) in services"
        :key="index"
        :serviceDescription="services[index].name"
        :image="services[index].image"
        :hrefId="services[index].id"
      />
    </b-carousel>
  </div>
</template>

<script>
import CarouselSlideGrodno from "./CarouselSlideGrodno.vue";

export default {
  components: {
    CarouselSlideGrodno,
  },
  computed: {
    services: function () {
      return [
        {
          name: this.$t("bankProtectionService"),
          id: "section1",
          image: "image-grodno4",
        },
        {
          name: this.$t("trackComplexService"),
          id: "grodno-section2",
          image: "image-grodno8",
        },
        {
          name: this.$t("constructionService"),
          id: "grodno-section3",
          image: "image-grodno3",
        },
      ];
    },
  },
};
</script>


<style>
.carousel-inner img {
  height: 40vh;
}

.link-color {
  color: darkblue;
}

.carousel-item img {
  filter: brightness(40%);
  -webkit-filter: brightness(40%);
  /* filter: blur(3px) brightness(40%);
    -webkit-filter: blur(3px) brightness(40%);
    transform: scale(1.1);
    -webkit-transform: scale(1.1); */
}

.carousel-caption {
  top: 50%;
  transform: translateY(-50%);
  bottom: initial;
}

.carousel-caption h1 {
  font-size: 30px;
}

.carousel-caption p {
  font-size: 15px;
}

/* Medium devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .carousel-inner img {
    height: 92vh;
  }
  .carousel-caption h1 {
    font-size: 65px;
  }

  .carousel-caption p {
    font-size: 35px;
  }
}

/* Landscape */
@media only screen and (min-device-width: 320px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
  .carousel-inner img {
    height: 80vh;
  }
}

/* Medium devices (desktops, 992px and up) */
/* @media (min-width: @screen-md-min) { ... } */

/* Large devices (large desktops, 1200px and up) */
/* @media (min-width: @screen-lg-min) { ... } */
</style>