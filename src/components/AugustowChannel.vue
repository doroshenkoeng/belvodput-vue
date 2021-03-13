<template>
    <div id="about">
        <b-container fluid class="bg">
            <h2 class="text-center">Об Августовском канале</h2>
            <b-row align-v="center">
                <b-col md="4">
                    <b-img center :src="require('../assets/augustow1.jpg')" fluid></b-img>
                </b-col>
                <b-col md="8">
                    <h4>Августовский канал – один из крупнейших в Европе. Построен в XIX веке для сплава древесины и товаров, соединяет бассейны рек Вислы и Немана. Часть этого гидротехнического сооружения проходит по территории Польши (80 км), часть – по Беларуси (22 км) в Гродненской области. Свои основные функции канал выполнял недолго. Но благодаря красивейшим пейзажам, через которые он проходит, стал популярным туристическим местом. Войны XX века не пощадили рукотворную водную артерию. Однако в 2004 – 2006 годах ее белорусский участок был отреставрирован. Сегодня Августовский канал снова принимает туристов и является отличным местом для активного, да и для любого другого, отдыха.</h4><br>
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
        background-color: #ffffff;
        color: #555555;
    }
    img {
        /* width: 250px;
        height: 300px; */
        /* border-radius: 100%; */
        padding-bottom: 20px;
        width: 350px;
    }
    h2 {
        padding: 0 0 10px 0;
    }
    .row {
        padding: 20px;
    }
    @media (max-width: 768px) {
        img {
            max-width: 200px;
        }
    }
</style>