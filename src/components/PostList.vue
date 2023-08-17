<template>
    <div v-if="posts.length > 0">
        <post-item @remove="$emit('remove', post)" v-for="post in posts" :post="post" v-bind:key="post.id" />
    </div>
    <h2 v-else>
        Posts list is empty
    </h2>
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