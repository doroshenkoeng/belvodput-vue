<template>
  <div id="gomel">
    <!-- <Header /> -->
    <Carousel />
    <Section1 />
    <Section2 />
    <Section3 />
    <About />
    <Partners />
    <Footer />
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import Section1 from "../components/Section1.vue";
import Section2 from "../components/Section2.vue";
import Section3 from "../components/Section3.vue";
import About from "../components/About.vue";
import Footer from "../components/Footer.vue";
import Partners from "../components/Partners.vue";

export default {
  name: "Gomel",
  components: {
    Carousel,
    Section1,
    Section2,
    Section3,
    About,
    Footer,
    Partners
  },
  created() {
    document.title = "Белводпуть - Гомель";
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
