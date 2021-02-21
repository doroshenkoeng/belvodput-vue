<template>
  <div id="header">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href=".">РУП "Белводпуть"</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

            <b-nav-item v-for="(item, index) in items" :key="index">
              <a :href="'#' + items[index].id" v-smooth-scroll>{{ items[index].name }}</a>
            </b-nav-item>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "Услуги",
          id: "section1"
        },
        {
          name: "О предприятии",
          id: "about"
        },
        {
          name: "Контакты",
          id: "contacts"
        }
      ]
    }
  }
}
</script>

<style>
  .nav-link {
    outline: none;
    text-decoration: none;
  }
  .nav-link a {
    font-size: 18px;
    color: #cee8d8;
    text-decoration: none;
    outline: none;
  }
  .nav-link a:hover {
    color: white;
  }
  .nav-item {
    padding: 10px;
  }
  .navbar .navbar-brand {
    font-size: 25px;
    padding: 10px;
  }
</style>