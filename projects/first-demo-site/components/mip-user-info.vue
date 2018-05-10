<template>
    <div class="user">
        <mip-link to="/detail.html">
            <div class="user-avatar">
                <mip-img :src="userImage"></mip-img>
            </div>
        </mip-link>
        <div class="user-name">{{username}}</div>
        <div class="user-publish-time">{{publishTime}}</div>
    </div>
</template>

<style lang="stylus" scoped>
.user
    display flex
    align-items center
    color
    &-avatar
        width 40px
        height 40px
        border-radius 20px
        overflow hidden
    &-name
        flex 1
        font-size 16px
        padding-left 10px
    &-publish-time
        text-align right
        flex 1
        color #b7b7b7
</style>

<script>
    export default {
        data () {
            return {
                username: '大炒勺',
                userImage: 'https://i5.meishichina.com/data/avatar/000/09/60/59_avatar_big.jpg?x-oss-process=style/c120&v=20180502',
                publishTime: '2010-07-28 15:43'
            }
        },
        mounted() {
        }
    }
</script>
