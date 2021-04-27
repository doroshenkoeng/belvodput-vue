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
            <b-row align-h="end" class="mx-5 mt-5">
                <b-button @click="onLearnMoreClick" v-b-toggle.construct-work-collapse variant="link" class="learn-more-btn">{{ learnMoreButtonContent }}</b-button>
            </b-row>
            <b-row align-h="start">
                <b-col class="learn-more-column text-left">
                    <b-collapse id="construct-work-collapse">
                        <h5 class="collapse-content">
                            <div v-html="learnMoreDescription"></div>
                        </h5>
                    </b-collapse>
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
    .learn-more-btn {
        color: rgb(47, 131, 216);
    }
    .learn-more-btn, .learn-more-btn:focus {
        outline: none;
        border: none;
        box-shadow: none !important;
    }
    .learn-more-column {
        padding: 0 10%;
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

<script scoped>
export default {
    data() {
        return {
            isLearnMoreButtonClicked: false,
            learnMoreButtonContent: "Подробнее",
            learnMoreDescription: `<p>К дноуглублению относятся работы, выполняемые для углубления, расширения, спрямления и поддержания состояния существующих судовых ходов с установленными габаритами, а также с целью создания новых судовых ходов. Складирование извлекаемого грунта производится в русле реки (водоёма) или на береговой полосе.</p><p> Дноуглубление применяется при разработке грунта из-под воды с укладкой на берег в карты намыва для возведения насыпей при строительстве гидротехнических сооружений. Для производства вышеприведенных работ на предприятии имеются три землесосных земснаряда. Производительностью - 325м3/час, глубина разработки свыше 12 метров, дальность рефулирования свыше 600 метров. Один земснаряд является сборно-разборным и перевозится в закрытые водоёмы. Для разработки «тяжелых» и каменистых грунтов имеется плавучий кран, грузоподъёмностью 5 тонн.</p>`
        }
    },
    methods: {
        onLearnMoreClick: function() {
            this.isLearnMoreButtonClicked = !this.isLearnMoreButtonClicked;
            if (this.isLearnMoreButtonClicked) {
                this.learnMoreButtonContent = "Скрыть";
            } else {
                this.learnMoreButtonContent = "Подробнее";
            }
        }
    }
}
</script>