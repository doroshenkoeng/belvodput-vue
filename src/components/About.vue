<template>
    <div id="about">
        <b-container fluid class="bg">
            <h2 class="text-center">{{ $t("aboutCompany") }}</h2>
            <b-row align-v="center">
                <b-col md="4">
                    <b-img center :src="require('../assets/logo-removebg-preview.png')" class="img-fluid"></b-img>
                </b-col>
                <b-col md="8">
                    <h4>
                        {{ $t("companyDescription") }}
                    </h4>
                    <br>
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

    body {
        font: 400 15px Lato, sans-serif;
        line-height: 1.8;
        color: #818181;
    }
    h2 {
        font-size: 24px;
        text-transform: uppercase;
        color: #303030;
        font-weight: 600;
        margin-bottom: 5px;
    }
    h4 {
        font-size: 19px;
        line-height: 1.375em;
        color: #303030;
        font-weight: 400;
        margin-bottom: 30px;
    }  

    .bg {
        background-color: #f6f6f6;
        color: #555555;
    }
    img {
        max-width: 160px !important;
    }
    h2 {
        padding: 0 0 10px 0;
    }
    .row {
        padding: 20px;
    }
</style>