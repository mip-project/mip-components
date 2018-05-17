<template>
    <div class="wrapper">
        <h2>{{name}}</h2>
        <mip-user-info></mip-user-info>
        <p class="detail">
            {{postDetail}}
        </p>
    </div>
</template>

<style lang="stylus" scoped>
.wrapper
    margin 0 auto
    color #333
    padding 0 10px

    h2
        padding 20px 0px

    .detail
        margin 20px 0
        font-size 16px
        line-height 28px
</style>

<script>
    import mipUserInfo from './mip-user-info';
    export default {
        components: {
            mipUserInfo
        },
        data () {
            return {
                name: '传统红烧肉',
                postDetail: '在网上常看到，最家常的一道菜“红烧肉”，制作的工序各有不同，可以说是五花八门，在制作时，往里面放什么的都有。可最近有网友问我，“到底最正宗的红烧肉要如何来制作，是否能推荐一款？”其实，我也拿捏不准，也不知道谁的正宗，谁的不正宗！'
            }
        },
        mounted() {
        }
    }
</script>
