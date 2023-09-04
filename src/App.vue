<template>
  <div id="app">
<!--     <Banner />-->
    <Header />
    <router-view />
  </div>
</template>

<script>
// import Banner from "./components/Banner.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    // Banner,
    Header
  },
  created() {
    document.title = "Белводпуть";
  }
};
</script>

<style>
</style>