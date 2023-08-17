<template>
    <div class="app">
        <comp-button @click="dialogShow = true">Add Post</comp-button>
        <comp-dialog v-model:show="dialogShow">
            <post-form @save="savePost" />
        </comp-dialog>
        <post-list @remove="removePost" :posts="posts"/>
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
            text: "",
            dialogShow: false,
        }
    },
    methods : {
        savePost(data) {
            this.posts.push(data)
            this.dialogShow = false
            return true;
        },


        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id);
        }

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