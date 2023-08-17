<template>
    <div class="app">
        <post-form @save="savePost" />
        <post-list :posts="posts"/>
    </div>
</template>

<script>
import PostForm from './components/PostForm.vue'
import PostList from './components/PostList.vue'


export default {
    components: {
        PostForm, PostList
    },
    data() {
        return {
            posts: [
                {id: 1, title: "Post title 1", text: "Post long text 1"},
                {id: 2, title: "Post title 2", text: "Post long text 2"},
                {id: 3, title: "Post title 3", text: "Post long text 3"},
                {id: 4, title: "Post title 4", text: "Post long text 4"},
            ],
            title: "",
            text: ""
        }
    },
    methods : {
        savePost(data) {
            this.posts.push(data)
            return true;
        },

        // titleInput(event){
        //     this.title = event.target.value;
        // },
        // textInput(event){
        //     this.text = event.target.value;
        // }
    }
}
</script>

<style lang="css" scoped>





</style>    