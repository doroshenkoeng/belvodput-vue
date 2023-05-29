<template>
    <div id="banner">
        <div v-if="isBannerShowed">
            <div class="img-wrap">
                <b-button-close class="close" v-on:click="closeBanner"></b-button-close>
                <a href="https://fest-sbv.gck.by/" target="_blank">
                    <b-img center :src="require('../assets/fest.jpg')" class="img-fluid"></b-img>
                </a>
            </div>
        </div>

    </div>
</template>

<style scoped>
.img-wrap {
    position: relative;
    background: linear-gradient(to right, rgb(255, 192, 223), rgb(133, 132, 209));
}
.img-wrap .close {
    position: absolute;
    top: 2px;
    right: 2px;
    z-index: 100;
}
</style>

<script>
export default {
    data() {
        return {
            isBannerShowed: true
        }
    },
    methods: {
        closeBanner: function() {
            this.isBannerShowed = false;
        }
    }
}
</script>
