<template>
    <div id="section1">
        <b-container fluid class="text-center bg">
            <h2>{{ $t("bankProtectionService") }}</h2>
            <br>
            <b-row>
                <b-col lg="4">
                    <h5>
                        {{ $t("landscapeWise") }}
                    </h5>
                     <b-img :src="require('../assets/image5.jpg')" rounded="circle" class="img-fluid"></b-img>
                </b-col>
                <b-col lg="4">
                    <h5>
                        {{ $t("usageOfFlexibleConcreteMats") }}
                    </h5>
                     <b-img :src="require('../assets/image9.jpg')" rounded="circle" class="img-fluid"></b-img>
                </b-col>
                <b-col lg="4">
                    <h5>
                        {{ $t("geoGridApplication") }}
                    </h5>
                     <b-img :src="require('../assets/image8.jpg')" rounded="circle" class="img-fluid"></b-img>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<style scoped>
    .container-fluid {
        padding-top: 80px;
        padding-bottom: 80px;
    }
    .bg {
        background-color: #1abc9c; /* Green */
        color: #ffffff;
    }
    img {
        width: 200px;
        height: 200px;
    }
    h2 {
        padding: 0 0 10px 0;
        font-size: 26px;
    }
    h5 {
        padding: 15px 0;
    }

    /* Small devices (tablets, 768px and up) */
    @media (min-width: 768px) {
        img {
            width: 300px;
            height: 300px;
        }
        h2 {
            font-size: 35px;
        }
    }
</style>