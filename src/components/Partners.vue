<template>
  <div id="partners">
      <b-container fluid class="text-center bg">
            <h2>Наши партнеры</h2>
            <b-row align-v="center">
                <b-col lg="4">  
                     <b-img :src="require('../assets/image21.jpg')" class="img-fluid"></b-img>
                </b-col>
                <b-col lg="4">
                     <b-img :src="require('../assets/image23.png')" class="img-fluid"></b-img>
                </b-col>
                <b-col lg="4">
                     <b-img :src="require('../assets/image22.jpg')" class="img-fluid"></b-img>
                </b-col>
            </b-row>
            <b-row align-v="center">
                <b-col lg="4">  
                     <b-img :src="require('../assets/image24.png')" class="img-fluid gomelautodor-img"></b-img>
                </b-col>
                <b-col lg="4">
                     <b-img :src="require('../assets/image25.jpg')" class="img-fluid"></b-img>
                </b-col>
                <b-col lg="4">
                     <b-img :src="require('../assets/image26.jpg')" class="img-fluid gomelpromstroy-img"></b-img>
                </b-col>
            </b-row>
            <b-row align-v="center">
                <b-col lg="4">  
                     <b-img :src="require('../assets/image27.jpg')" class="img-fluid gomelautodor-img"></b-img>
                </b-col>
                <b-col lg="4">
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
        width: 140px;
        height: 140px;
        border-radius: 5%;
    }
    h2 {
        padding-bottom: 15px;
        font-size: 26px;
    }
    h5 {
        padding: 15px 0;
        /* padding-top: 0;
        padding-bottom: 10px; */
    }
    .gomelautodor-img {
        width: 210px !important;
        height: 170px !important;
    }
    .col-lg-4 {
        padding: 20px;
    }
    .gomelpromstroy-img {
        width: 200px !important;
        height: 160px !important;
    }

    /* Small devices (tablets, 768px and up) */
    @media (min-width: 768px) {
        img {
            width: 140px;
            height: 140px;
            border-radius: 5%;
        }
        h2 {
            font-size: 35px;
        }
    }
</style>