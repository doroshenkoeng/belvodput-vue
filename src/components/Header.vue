<template>
  <div id="header">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Белводпуть</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

            <b-nav-item active href="#">Услуги</b-nav-item>
            <b-nav-item active href="#">Контакты</b-nav-item>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>