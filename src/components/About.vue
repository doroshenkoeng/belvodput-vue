<template>
    <div id="about">
        <b-container fluid class="bg">
            <h2 class="text-center">О предприятии</h2>
            <b-row align-v="center">
                <b-col md="4">
                    <b-img center :src="require('../assets/logo-removebg-preview.png')" class="img-fluid"></b-img>
                    <!-- <img src="../assets/logo-removebg-preview.png" class="img-fluid"> -->
                </b-col>
                <b-col md="8">
                    <!-- <h2>О предприятии</h2> -->
                    <h4>Республиканское Унитарное Днепро-двинское предприятие Водных Путей "Белводпуть" находится в Гомеле и расположено по адресу улица Коммунаров, 7. К сферам деятельности предприятия можно отнести: <strong>Промышленное строительство</strong>, <strong>Мелиоративные работы</strong>. Чтобы связаться с сотрудниками организации, вы можете позвонить по телефону +375 232 70-11-46 и уточнить у них любую интересующую вас информацию.</h4><br>
                    <!-- <p><strong>VISION:</strong> Our vision Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> -->
                </b-col>
            </b-row>
            <!-- <b-row>
                <b-col>
                    <h5>
                    Водохозяйственное строительство
                    </h5>
                     <img src="../assets/image15.jpg" class="img-circle img-responsive"> 
                </b-col>
                <b-col>
                    <h5>
                    Гидромеханизированная разработка грунта
                    </h5>
                     <img src="../assets/image16.jpg" class="img-circle img-responsive"> 
                </b-col>
            </b-row> -->
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
        /* width: 250px;
        height: 300px; */
        /* border-radius: 100%; */
        /* padding: 10px; */
        min-width: 150px !important;
    }
    h2 {
        padding: 0 0 10px 0;
    }
    .row {
        padding: 20px;
    }
</style>