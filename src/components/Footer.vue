<template>
    <div id="footer">
        <b-container fluid class="bg-dark">
            <b-row>
                <b-col md="4">
                    <b-list-group flush>
                        <b-list-group-item><h3>Разделы</h3></b-list-group-item>
                        <b-list-group-item><a href=".">Главная</a></b-list-group-item>
                        <b-list-group-item><a href="#section1" v-smooth-scroll>Берегоукрепляющие работы</a></b-list-group-item>
                        <b-list-group-item><a href="#section2" v-smooth-scroll>Выполнение комплекса путевых работ</a></b-list-group-item>
                        <b-list-group-item><a href="#section3" v-smooth-scroll>Производство строительных работ</a></b-list-group-item>
                        <b-list-group-item><a href="#about" v-smooth-scroll>О предприятии</a></b-list-group-item>
                    </b-list-group>
                </b-col>
                <b-col md="4">
                    <b-list-group flush>
                        <b-list-group-item><h3>Услуги</h3></b-list-group-item>
                        <b-list-group-item><p>Берегоукрепляющие работы</p></b-list-group-item>
                        <b-list-group-item><p>Дноочищение</p></b-list-group-item>
                        <b-list-group-item><p>Дноуглубление</p></b-list-group-item>
                        <b-list-group-item><p>Намыв грунта</p></b-list-group-item>
                    </b-list-group>
                </b-col>
                <b-col md="4">
                        <b-list-group flush>
                            <b-list-group-item><h3 id="contacts">Контакты</h3></b-list-group-item>
                            <b-list-group-item><h3>Адрес</h3><p>{{ address }}</p></b-list-group-item>
                            <b-list-group-item><h3>Почта</h3><a href="mailto: dnch141972@gmail.com">{{ mail }}</a></b-list-group-item>
                            <b-list-group-item>
                                <h3>Телефоны</h3>
                                <div v-for="(phone, index) in phones" :key="index">
                                    <a :href="'tel:' + phone.phone">{{ phone.phone + ' - ' + phone.receiver }}</a><br>
                                </div>
                            </b-list-group-item>
                        </b-list-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col class="text-center copyright">
                    <p>&copy; РУП "Белводпуть", 2021 г.</p>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            address: "Беларусь, 246050 г.Гомель, ул. Коммунаров, 7",
            mail: "bvp@post.mtk.by",
            phones: [
                {
                    phone: "+375 (232) 70-03-60",
                    receiver: "руководитель"
                },
                {
                    phone: "70-11-45",
                    receiver: "бухгалтер"
                },
                {
                    phone: "74-94-74",
                    receiver: "главный инженер"
                },
                {
                    phone: "74-94-75",
                    receiver: "диспетчер"
                },
                {
                    phone: "70-13-01",
                    receiver: "магазин"
                }
            ]
        }
    }
}
</script>

<style scoped>
    .container-fluid {
        padding-top: 70px;
        padding-bottom: 30px;
        padding-left: 0px;
        padding-right: 0px;
    }
    a, p {
        color:#888;
        font-family: "Lato", Helvetica, sans-serif;
        font-size: 15pt;
        font-weight: 300;
        line-height: 1.65em;
    }
    a {
        text-decoration: underline;
    }
    a:hover {
        color: white !important;
    }
    h3 {
        color: white;
    }
    .copyright {
        margin-top: 50px;
    }
    .list-group-item {
        background-color: transparent;
    }
    .underlined-row {
        border-bottom: thin;
        border-color: #888;
    }

    /* Medium devices (desktops, 992px and up) */
    @media (min-width: 992px) { 
        .container-fluid {
            padding-top: 70px;
            padding-bottom: 30px;
            padding-left: 80px;
            padding-right: 80px;
        }
    }
</style>