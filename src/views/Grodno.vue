<template>
  <div id="grodno">
    <!-- <Header /> -->
    <CarouselGrodno />
    <Section1 />
    <Section2 />
    <Section3 />
    <AboutGrodno />
    <PartnersGrodno />
    <FooterGrodno />
  </div>
</template>

<script>
import CarouselGrodno from "../components/CarouselGrodno.vue";
import Section1 from "../components/Section1.vue";
import Section2 from "../components/Section2.vue";
import Section3 from "../components/Section3.vue";
import AboutGrodno from "../components/AboutGrodno.vue";
import FooterGrodno from "../components/FooterGrodno.vue";
import PartnersGrodno from "../components/PartnersGrodno.vue";

export default {
  name: "Gomel",
  components: {
    CarouselGrodno,
    Section1,
    Section2,
    Section3,
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
