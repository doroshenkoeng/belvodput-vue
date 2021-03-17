<template>
  <div id="grodno">
    <!-- <Header /> -->
    <CarouselGrodno />
    <Section1 />
    <GrodnoSection2 />
    <GrodnoSection3 />
    <AugustowChannel />
    <AboutGrodno />
    <PartnersGrodno />
    <FooterGrodno />
  </div>
</template>

<script>
import CarouselGrodno from "../components/CarouselGrodno.vue";
import Section1 from "../components/Section1.vue";
import GrodnoSection2 from "../components/GrodnoSection2.vue";
import AboutGrodno from "../components/AboutGrodno.vue";
import FooterGrodno from "../components/FooterGrodno.vue";
import PartnersGrodno from "../components/PartnersGrodno.vue";
import AugustowChannel from "../components/AugustowChannel.vue";
import GrodnoSection3 from "../components/GrodnoSection3.vue";

export default {
  name: "Gomel",
  components: {
    CarouselGrodno,
    Section1,
    GrodnoSection2,
    GrodnoSection3,
    AugustowChannel,
    AboutGrodno,
    FooterGrodno,
    PartnersGrodno
  },
  created() {
    document.title = "Белводпуть - Гродно";
  }
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
