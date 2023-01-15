<template>
  <div id="partners">
      <b-container fluid class="text-center bg">
            <h2>{{ $t("ourPartners") }}</h2>
            <b-row align-v="center">
                <b-col md="4">  
                     <b-img :src="require('../assets/image-grodno9.jpg')" class="img-fluid"></b-img>
                </b-col>
                <b-col md="4">
                     <b-img :src="require('../assets/image-grodno10.jpg')" class="img-fluid"></b-img>
                </b-col>
                <b-col md="4">
                     <b-img :src="require('../assets/image-grodno12.jpg')" class="img-fluid"></b-img>
                </b-col>
            </b-row>
            <b-row align-v="center">
                <b-col md="4">  
                     <b-img :src="require('../assets/image-grodno13.jpg')" class="img-fluid"></b-img>
                </b-col>
                <b-col md="4">
                     <b-img :src="require('../assets/image-grodno14.jpg')" class="img-fluid"></b-img>
                </b-col>
                <b-col md="4">
                     <b-img :src="require('../assets/image-grodno15.jpg')" class="img-fluid"></b-img>
                </b-col>
            </b-row>
            <b-row align-v="center">
                <b-col md="4">  
                     <b-img :src="require('../assets/image-grodno16.jpg')" class="img-fluid"></b-img>
                </b-col>
            </b-row>
        </b-container>
  </div>
</template>

<script>

</script>

<style scoped>
    .container-fluid {
        padding-top: 80px;
        padding-bottom: 80px;
    }
    .bg {
        background-color: #ffffff;
        color: #555555;
    }
    img {
        width: 100px;
        margin: 15px;
    }
    h2 {
        padding-bottom: 15px;
        font-size: 26px;
    }
    h5 {
        padding: 15px 0;
    }
    /* Small devices (tablets, 768px and up) */
    @media (min-width: 768px) {
        h2 {
            font-size: 35px;
        }
    }
</style>