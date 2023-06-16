<template>
  <div id="news">

    <main role="main" class="container">
      <div class="row">
        <div class="col-md-8 blog-main">

          <div class="blog-post" v-for="(singleNews, index) in newsList" :key="index">
            <h2 class="blog-post-title">{{ singleNews.title }}</h2>
            <p class="blog-post-meta">{{ singleNews.date }}</p>
            <div v-html="singleNews.content"></div>
            <p v-for="(image, index) in singleNews.images" :key="index">
              <b-img :src="require('../assets/' + image)" class="img-fluid"></b-img>
            </p>
          </div><!-- /.blog-post -->
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";

export default {
  name: "News",
  components: {
    Footer
  },
  data() {
      return {
          newsList: [
            {
              title: "Запрет на прохождение маломерных судов",
              date: "Июнь 16, 2023",
              content: `
                <p>В связи с выполнением ремонтных работ с 19 июня по 10 июля 2023 года вводится запрет на прохождение маломерных судов под мостом по улице Поповича города Гродно.</p>
                `,
              images: [],
            },
            {
                title: "Получен аттестат соответствия категории четвертой на право осуществления инженерных изысканий",
                date: "Август 30, 2021",
                content: `
                <p>Настоящий аттестат соответствия категории четвертой выдан выдан Республиканскому унитарному Днепро-Двинскому предприятию водных путей "Белводпутъ".</p>
                `,
                images: [
                  "singleNews2Image1.jpg"
                ]
            },
            {
                title: "Получено специальное разрешение на право осуществления деятельности в области промышленной безопасности",
                date: "Апрель 25, 2021",
                content: `
                <p>Право осуществления деятельности в области промышленной безопасности выдано Республиканскому унитарному Днепро-Двинскому предприятию водных путей "Белводпутъ". Специальное разрешение (лицензия) выдано на основании решения от 20 апреля 2021 г. No 17 км и зарегистрировано в реестре специальных разрешений (лицензий) Госпромнадзора МЧС Республики Беларусь.</p>
                <h3>Перечень работ и услуг, составляющих вид деятельности:</h3>
                <ol>
                <li>
                  Монтаж (без права оказания услуг) технических устройств, эксплуатируемых на потенциально опасных объектах: карьерах, разрезах по добыче полезных ископаемых с проектным объемом добычи по горной массе от 100 тыс. м3 в год (землесосные снаряды);
                </li>
                <li>
                  Обслуживание (без права оказания услуг) технических устройств, эксплуатируемых на потенциально опасных объектах: карьерах, разрезах по добыче полезных ископаемых с проектным объемом добычи по горной массе от 100 тыс. м3 в год (землесосные снаряды);
                </li>
                <li>
                  Ремонт (без права оказания услуг, без применения сварки) технических устройств, эксплуатируемых на потенциально опасных объектах: карьерах, разрезах по добыче полезных ископаемых с проектным объемом добычи по горной массе от 100 тыс. м3 в год (землесосные снаряды).
                </li>
                `,
                images: [
                  'singleNews1Image1.jpg',
                  'singleNews1Image2.jpg',
                  'singleNews1Image3.jpg'
                ],
            }
          ]
      }
  },
  created() {
    document.title = "Белводпуть - Новости";
  }
};
</script>

<style scoped>

/* stylelint-disable selector-list-comma-newline-after */

.blog-header {
  line-height: 1;
  border-bottom: 1px solid #e5e5e5;
}

.blog-header-logo {
  font-family: "Playfair Display", Georgia, "Times New Roman", serif;
  font-size: 2.25rem;
}

.blog-header-logo:hover {
  text-decoration: none;
}

h1, h2, h3, h4, h5, h6 {
  font-family: "Playfair Display", Georgia, "Times New Roman", serif;
}

.display-4 {
  font-size: 2.5rem;
}
@media (min-width: 768px) {
  .display-4 {
    font-size: 3rem;
  }
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

.nav-scroller .nav-link {
  padding-top: .75rem;
  padding-bottom: .75rem;
  font-size: .875rem;
}

.card-img-right {
  height: 100%;
  border-radius: 0 3px 3px 0;
}

.flex-auto {
  -ms-flex: 0 0 auto;
  -webkit-box-flex: 0;
  flex: 0 0 auto;
}

.h-250 { height: 250px; }
@media (min-width: 768px) {
  .h-md-250 { height: 250px; }
}

.border-top { border-top: 1px solid #e5e5e5; }
.border-bottom { border-bottom: 1px solid #e5e5e5; }

.box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }

/*
 * Blog name and description
 */
.blog-title {
  margin-bottom: 0;
  font-size: 2rem;
  font-weight: 400;
}
.blog-description {
  font-size: 1.1rem;
  color: #999;
}

@media (min-width: 40em) {
  .blog-title {
    font-size: 3.5rem;
  }
}

/* Pagination */
.blog-pagination {
  margin-bottom: 4rem;
}
.blog-pagination > .btn {
  border-radius: 2rem;
}

/*
 * Blog posts
 */
.blog-post {
  margin-bottom: 4rem;
}
.blog-post-title {
  margin-bottom: .25rem;
  margin-top: 1.5rem;
  font-size: 2.0rem;
}
.blog-post-meta {
  margin-bottom: 1.25rem;
  color: #999;
}

/*
 * Footer
 */
.blog-footer {
  padding: 2.5rem 0;
  color: #999;
  text-align: center;
  background-color: #f9f9f9;
  border-top: .05rem solid #e5e5e5;
}
.blog-footer p:last-child {
  margin-bottom: 0;
}


</style>
