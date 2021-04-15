<template>
    <div id="section3">
        <b-container fluid class="text-center bg">
            <h2>Производство строительных работ</h2>
            <b-row>
                <b-col lg="4">  
                    <h5>
                    Водохозяйственное строительство
                    </h5>
                     <b-img :src="require('../assets/image15.jpg')" class="img-fluid"></b-img>
                </b-col>
                <b-col lg="4">
                    <h5>
                    Гидромеханизированная разработка грунта
                    </h5>
                     <b-img :src="require('../assets/image16.jpg')" class="img-fluid"></b-img>
                </b-col>
                <b-col lg="4">
                    <h5>
                        Перевозка грузов и пассажиров
                    </h5>
                     <b-img :src="require('../assets/image19.jpg')" class="img-fluid"></b-img>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            description: "Learn more content goes here"
        }
    }
}
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
        width: 250px;
        height: 200px;
        border-radius: 5%;
    }
    h2 {
        padding-bottom: 15px;
        font-size: 26px;
    }
    h5 {
        padding: 15px 0;
    }
    .collapse-content {
        font-size: 19px;
        line-height: 1.375em;
        color: #303030;
        font-weight: 400;
        margin-bottom: 30px;
    }  
    /* Small devices (tablets, 768px and up) */
    @media (min-width: 768px) {
        img {
            width: 300px;
            height: 250px;
            border-radius: 5%;
        }
        h2 {
            font-size: 35px;
        }
    }
</style>