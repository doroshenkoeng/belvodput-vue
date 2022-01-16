<template>
  <div id="partners">
      <b-container fluid class="text-center bg">
            <h2>Наши партнеры</h2>
            <b-row align-v="center">
                <b-col md="3">  
                     <b-img :src="require('../assets/image21.jpg')" class="img-fluid"></b-img>
                </b-col>
                <b-col md="3">
                     <b-img :src="require('../assets/image23.png')" class="img-fluid"></b-img>
                </b-col>
                <b-col md="3">
                     <b-img :src="require('../assets/image22.jpg')" class="img-fluid"></b-img>
                </b-col>
                 <b-col md="3">
                     <b-img :src="require('../assets/image25.jpg')" class="img-fluid"></b-img>
                </b-col>
            </b-row>
            <b-row align-v="center">
                <b-col md="3">
                     <b-img :src="require('../assets/image26.jpg')" class="img-fluid gomelpromstroy-img"></b-img>
                </b-col>
                <b-col md="3">  
                     <b-img :src="require('../assets/image27.jpg')" class="img-fluid"></b-img>
                </b-col>
                <b-col md="3">
                     <b-img :src="require('../assets/image28.jpg')" class="img-fluid"></b-img>
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
        border-radius: 5%;
        margin: 15px;
    }
    h2 {
        padding-bottom: 30px;
        font-size: 26px;
    }
    h5 {
        padding: 15px 0;
    }
    .gomelautodor-img {
        width: 210px !important;
        height: 170px !important;
    }
    .col-lg-4 {
        padding: 20px;
    }
    /* Small devices (tablets, 768px and up) */
    @media (min-width: 768px) {
        h2 {
            font-size: 35px;
        }
    }
</style>