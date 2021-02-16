<template>
  <div id="app">
    <Header />
    <b-jumbotron
     id="jumbotron">
      <b-container fluid class="text-center" id="jumbotron-b-container">
        <b-row align-v="center">
          <b-col>
            <h1>Белводпуть</h1>
          </b-col>
        </b-row>
        <b-row align-v="center">
          <b-col>
            <b-button variant="primary" href="#">Подробнее</b-button>
          </b-col>
        </b-row>
      </b-container>
    </b-jumbotron>
  </div>
</template>

<script>
import Header from './components/Header.vue'


export default {
  name: 'App',
  components: {
    Header
  }
}
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
#jumbotron {
  height:100vh;
  margin: 0;
}
#jumbotron-b-container {
  height: 100vh;
  padding: 0;
  margin: 0;
}
</style>
