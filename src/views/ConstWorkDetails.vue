<template>
  <div id="const-work-details">
    
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";

export default {
  name: "ConstWorkDetails",
  components: {
    Footer
  },
  created() {
    document.title = "Белводпуть - Подробнее";
  }
};
</script>

<style>
</style>
