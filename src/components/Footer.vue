<template>
    <div id="footer">
        <b-container fluid class="bg-dark">
            <b-row>
                <b-col md="4">
                    <b-list-group flush>
                        <b-list-group-item><h3>Разделы</h3></b-list-group-item>
                        <b-list-group-item><a href=".">Главная</a></b-list-group-item>
                        <b-list-group-item><a href="#section1" v-smooth-scroll>Берегоукрепительные работы</a></b-list-group-item>
                        <b-list-group-item><a href="#section2" v-smooth-scroll>Выполнение комплекса путевых работ</a></b-list-group-item>
                        <b-list-group-item><a href="#section3" v-smooth-scroll>Производство строительных работ</a></b-list-group-item>
                        <b-list-group-item><a href="#about" v-smooth-scroll>О предприятии</a></b-list-group-item>
                        <b-list-group-item><a href="https://mintrans.gov.by/ru">Министерство транспорта и коммуникаций</a></b-list-group-item>
                        <b-list-group-item><a href="http://обращения.бел">Система обращения граждан</a></b-list-group-item>
                        <b-list-group-item>
                            <a href="https://pravo.by" target="_blank">
                                <b-img center src="https://pravo.by/upload/images/sm_full.aspx_guid=180431476362146.jpg" alt="Национальный правовой Интернет-портал Республики Беларусь" class="img-fluid" align="left"></b-img>
                            </a>
                        </b-list-group-item>
                    </b-list-group>
                </b-col>
                <b-col md="4">
                    <b-list-group flush>
                        <b-list-group-item><h3>Услуги</h3></b-list-group-item>
                        <b-list-group-item><p>Берегоукрепительные работы</p></b-list-group-item>
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
                    <p>&copy; РУДДПВП "Белводпуть", 2021 г.</p>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            address: "Беларусь, 246050 г.Гомель, ул. Коммунаров, 7а",
            mail: "info@belvodput.by",
            phones: [
                {
                    phone: "50-63-60",
                    receiver: "директор"
                },
                {
                    phone: "50-60-74",
                    receiver: "главный инженер"
                },
                {
                    phone: "50-63-69",
                    receiver: "и.о.зам. директора"
                },
                {
                    phone: "50-66-46",
                    receiver: "диспетчер, приемная"
                },
                {
                    phone: "50-61-31",
                    receiver: "бухгалтер"
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
    .copyright p {
        font-size: 18px;
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