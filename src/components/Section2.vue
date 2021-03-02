<template>
    <div id="section2">
        <b-container fluid class="text-center bg">
            <h2>Выполнение комплекса путевых работ</h2>
            <br>
            <b-row>
                <b-col md="6">
                    <h5>
                    Землечерпание
                    </h5>
                     <b-img :src="require('../assets/image10.jpg')" rounded="circle" class="img-fluid"></b-img>
                </b-col>
                <b-col md="6">
                    <h5>
                    Дноочищение
                    </h5>
                     <b-img :src="require('../assets/image11.jpg')" rounded="circle" class="img-fluid"></b-img>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="6">
                    <h5>
                    Содержание навигационного оборудования
                    </h5>
                     <b-img :src="require('../assets/image18.png')" rounded="circle" class="img-fluid"></b-img>
                </b-col>
                <b-col md="6">
                    <h5>
                    Инженерно-геодезические изыскания
                    </h5>
                     <b-img :src="require('../assets/image20.jpg')" rounded="circle" class="img-fluid"></b-img>
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
        background-color: #474e5d; /* Dark Blue */
        color: #ffffff;
    }
    img {
        width: 200px;
        height: 200px;
    }
    h2 {
        padding-bottom: 0px;
        font-size: 26px;
    }
    h5 {
        padding: 20px 0;
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