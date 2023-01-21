<template>
  <div id="footer">
    <b-container fluid class="bg-dark">
      <b-row>
        <b-col md="4">
          <b-list-group flush>
            <b-list-group-item
              ><h3>{{ $t("sections") }}</h3></b-list-group-item
            >
            <b-list-group-item
              ><a href=".">{{ $t("main") }}</a></b-list-group-item
            >
            <b-list-group-item
              ><a href="#section1" v-smooth-scroll>{{
                $t("bankProtectionService")
              }}</a></b-list-group-item
            >
            <b-list-group-item
              ><a href="#section2" v-smooth-scroll>{{
                $t("trackComplexService")
              }}</a></b-list-group-item
            >
            <b-list-group-item
              ><a href="#section3" v-smooth-scroll>{{
                $t("constructionService")
              }}</a></b-list-group-item
            >
            <b-list-group-item
              ><a href="#about" v-smooth-scroll>{{
                $t("aboutCompany")
              }}</a></b-list-group-item
            >
            <b-list-group-item
              ><a href="https://mintrans.gov.by/ru">{{
                $t("ministry")
              }}</a></b-list-group-item
            >
            <b-list-group-item
              ><a href="http://обращения.бел">{{
                $t("ticketSystem")
              }}</a></b-list-group-item
            >
            <b-list-group-item>
              <a href="https://pravo.by" target="_blank">
                <b-img
                  center
                  src="https://pravo.by/upload/images/sm_full.aspx_guid=180431476362146.jpg"
                  alt="Национальный правовой Интернет-портал Республики Беларусь"
                  class="img-fluid"
                  align="left"
                ></b-img>
              </a>
            </b-list-group-item>
            <b-list-group-item>
              <LocaleButton />
            </b-list-group-item>
          </b-list-group>
        </b-col>
        <b-col md="4">
          <b-list-group flush>
            <b-list-group-item
              ><h3>{{ $t("services") }}</h3></b-list-group-item
            >
            <b-list-group-item
              ><p>{{ $t("bankProtectionService") }}</p></b-list-group-item
            >
            <b-list-group-item
              ><p>{{ $t("bottomCleaning") }}</p></b-list-group-item
            >
            <b-list-group-item
              ><p>{{ $t("dredging") }}</p></b-list-group-item
            >
            <b-list-group-item
              ><p>{{ $t("alluvium") }}</p></b-list-group-item
            >
          </b-list-group>
        </b-col>
        <b-col md="4">
          <b-list-group flush>
            <b-list-group-item
              ><h3 id="contacts">{{ $t("contacts") }}</h3></b-list-group-item
            >
            <b-list-group-item
              ><h3>{{ $t("address") }}</h3>
              <p>{{ address }}</p></b-list-group-item
            >
            <b-list-group-item
              ><h3>{{ $t("email") }}</h3>
              <a :href="'mailto:' + mail">{{ mail }}</a></b-list-group-item
            >
            <b-list-group-item>
              <h3>{{ $t("phoneNumbers") }}</h3>
              <div v-for="(phone, index) in phones" :key="index">
                <a :href="'tel:' + phone.phone">{{
                  phone.phone + " - " + phone.receiver
                }}</a
                ><br />
              </div>
            </b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="text-center copyright">
          <p>&copy; {{ $t("belvodput") }}, 2023 г.</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import LocaleButton from "./LocaleButton.vue";

export default {
  components: {
    LocaleButton,
  },
  computed: {
    address: function () {
      return this.$t("grodnoCompanyAddress");
    },
    mail: function () {
      return "info@belvodput.by";
    },
    phones: function () {
      return [
        {
          phone: "(0152)393456",
          receiver: this.$t("receptionRoom"),
        },
        {
          phone: "(0152)684872",
          receiver: this.$t("grodnoChiefOfficerDeputy"),
        },
        {
          phone: "(0152)393469",
          receiver: this.$t("cargoSectorMaster"),
        },
        {
          phone: "(0152)393457",
          receiver: this.$t("leadTourismSpecialist"),
        },
      ];
    },
  },
};
</script>

<style scoped>
.container-fluid {
  padding-top: 70px;
  padding-bottom: 30px;
  padding-left: 0px;
  padding-right: 0px;
}
a,
p {
  color: #888;
  font-family: "Lato", Helvetica, sans-serif;
  font-size: 15pt;
  font-weight: 300;
  line-height: 1.65em;
}
a {
  text-decoration: underline;
}
a:hover {
  color: white !important;
}
h3 {
  color: white;
}
.copyright {
  margin-top: 50px;
}
.copyright p {
  font-size: 18px;
}
.list-group-item {
  background-color: transparent;
}
.underlined-row {
  border-bottom: thin;
  border-color: #888;
}

/* Medium devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .container-fluid {
    padding-top: 70px;
    padding-bottom: 30px;
    padding-left: 80px;
    padding-right: 80px;
  }
}
</style>