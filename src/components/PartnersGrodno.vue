<template>
  <div id="partners">
      <b-container fluid class="text-center bg">
            <h2>Наши партнеры</h2>
            <b-row align-v="center">
                <b-col lg="4">  
                     <b-img :src="require('../assets/image-grodno9.jpg')" class="img-fluid"></b-img>
                </b-col>
                <b-col lg="4">
                     <b-img :src="require('../assets/image-grodno10.jpg')" class="img-fluid"></b-img>
                </b-col>
                <b-col lg="4">
                     <b-img :src="require('../assets/image-grodno12.jpg')" class="img-fluid"></b-img>
                </b-col>
            </b-row>
            <b-row align-v="center">
                <b-col lg="4">  
                     <b-img :src="require('../assets/image-grodno13.jpg')" class="img-fluid"></b-img>
                </b-col>
                <b-col lg="4">
                     <b-img :src="require('../assets/image-grodno14.jpg')" class="img-fluid"></b-img>
                </b-col>
                <b-col lg="4">
                     <b-img :src="require('../assets/image-grodno15.jpg')" class="img-fluid image-grodno15"></b-img>
                </b-col>
            </b-row>
            <b-row align-v="center">
                <b-col lg="4">  
                     <b-img :src="require('../assets/image-grodno16.jpg')" class="img-fluid gomelautodor-img"></b-img>
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
        width: 150px;
        height: 150px;
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
    .col-lg-4 {
        padding: 20px;
    }
    .image-grodno15 {
        width: 280px;
        height: 150px;
    }

    /* Small devices (tablets, 768px and up) */
    @media (min-width: 768px) {
        img {
            width: 180px;
            height: 180px;
            border-radius: 5%;
        }
        h2 {
            font-size: 35px;
        }
    }
</style>