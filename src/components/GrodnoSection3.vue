<template>
    <div id="grodno-section3">
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
                        <h4 class="collapse-content">
                            {{ learnMoreDescription }}
                        </h4>
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
        background-color: #f6f6f6;
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
        /* padding-top: 0;
        padding-bottom: 10px; */
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

<script>
export default {
    data() {
        return {
            isLearnMoreButtonClicked: false,
            learnMoreButtonContent: "Подробнее",
            learnMoreDescription: `Почасовая аренда (фрахт) с согласованным маршрутом: на свадьбы, юбилеи, корпоративы, дни рождения и другие мероприятия. Организация, по предварительной заявке, на борту теплохода питания, анимации и живой музыки. Речные прогулки на теплоходе "О.Соломова" Расписание движения теплохода: Среда, Пятница – в 18.00, Воскресенье – в 12.00. Минимальная группа 33 человека.`
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