<template>
  <div id="locale-button">
    <button type="button" class="btn btn-outline-light" @click="onClick">
      {{ buttonTitle }}
    </button>
  </div>
</template>

<style scoped>
</style>

<script>
export default {
  methods: {
    onClick() {
      if (this.$root.$i18n.locale === "by") {
        this.$root.$i18n.locale = "ru";
      } else {
        this.$root.$i18n.locale = "by";
      }
    }
  },
  computed: {
    buttonTitle: function () {
      if (this.$root.$i18n.locale === "by") {
        return "РУ";
      } else {
        return "БЕЛ";
      }
    }
  }
};
</script>