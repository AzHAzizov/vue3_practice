<template>
    <div>
        <post-item v-for="post in posts" :post="post" v-bind:key="post.id" />
    </div>
</template>

<script>
import PostItem from './PostItem.vue'


    export default {

        components: {
            PostItem
        },
        props: {
            posts: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped>



</style>