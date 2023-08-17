<template>
    <div class="app">
        <comp-button @click="dialogShow = true">Add Post</comp-button>
        <comp-dialog v-model:show="dialogShow">
            <post-form @save="savePost" />
        </comp-dialog>
        <post-list v-if="!isPostLoading" @remove="removePost" :posts="posts"/>
        <h2 v-else>
            Posts are loading...
        </h2>
    </div>
</template>

<script>
import PostForm from './components/PostForm.vue'
import PostList from './components/PostList.vue'
import axios from 'axios'


export default {
    components: {
        PostForm, PostList
    },
    data() {
        return {
            posts: [
               
            ],
            title: "",
            body: "",
            dialogShow: false,
            isPostLoading: true,
        }
    },
    methods : {
        savePost(data) {

            console.log(data)

            this.posts.push(data)
            this.dialogShow = false
            return true;
        },


        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id);
        },


        async fetchPosts() {
            try {

                const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
                this.posts = response.data

            } catch (error) {
                alert("Error on get posts from SERVER")
            }finally {
                this.isPostLoading = false;
            }
        }

        // titleInput(event){
        //     this.title = event.target.value;
        // },
        // textInput(event){
        //     this.text = event.target.value;
        // }

    },
    mounted() {
        this.fetchPosts();
    }
}
</script>

<style lang="css" scoped>





</style>    