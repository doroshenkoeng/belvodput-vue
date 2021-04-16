<template>
  <div id="header">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand to="/gomel">
        {{ leftNavItems[0] }}
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <router-link to="/gomel" class="router-link-item">Гомель</router-link>
            <router-link to="/grodno" class="router-link-item">Гродно</router-link>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

            <b-nav-item v-for="(item, index) in rightNavItems" :key="index">
              <a :href="'#' + item.id" v-smooth-scroll>{{ item.name }}</a>
            </b-nav-item>

            <!-- <b-nav-item>
              <router-link to="/news">Новости</router-link>
            </b-nav-item> -->

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leftNavItems: [
        `РУДДПВП "Белводпуть"`
      ],
      rightNavItems: [
        {
          name: "Услуги",
          id: "section1"
        },
        {
          name: "О предприятии",
          id: "about"
        },
        {
          name: "Партнеры",
          id: "partners"
        },
        {
          name: "Контакты",
          id: "contacts"
        },
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
    font-size: 21px;
    padding: 10px;
  }
  .router-link-item {
    font-size: 18px;
    color: rgb(182, 180, 180) !important;
    padding: 10px;
    text-decoration: none !important;
    outline: none;
  }
  .router-link-item.router-link-active {
    color: white !important;
  }
</style>