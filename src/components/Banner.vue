<template>
    <div id="banner">
        <div v-if="isBannerShowed">
            <div class="img-wrap">
                <b-button-close class="close" v-on:click="closeBanner"></b-button-close>
                <a href="https://fest-sbv.gck.by/" target="_blank">
                </a>
            </div>
        </div>

    </div>
</template>

<style scoped>
.img-wrap {
    position: relative;
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