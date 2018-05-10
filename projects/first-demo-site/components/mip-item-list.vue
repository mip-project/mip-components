<template>
    <div class="list">
        <h3>配料说明</h3>
        <ul>
            <li v-for="item in model.listData" @click="listClick(item.name)">
                {{item.name}}<span>{{item.count}}</span>
            </li>
        </ul>
    </div>
</template>

<style lang="stylus" scoped>
.list
    padding 0 10px 50px 10px
    h3
        padding 10px 0
    li
        padding 0 10px
        line-height 36px
        font-size 14px
        border-bottom 1px solid #f0f0f0
        span
            color #999
            float right
</style>

<script>
    export default {
        props: {
            model: {
                default() {
                    return {};
                },
                type: Object
            }
        },
        methods: {
            listClick(name) {
                console.log(name);
            }
        }
    }
</script>
