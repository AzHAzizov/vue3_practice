<template>
    <!-- eslint-disable -->
    <div class="app">
        <div class="app__navbar_actions">
            <comp-button @click="dialogShow = true">Add Post</comp-button>
            <comp-select v-model="selectedSort" v-model:options="sortOptions" />
        </div>
        <comp-dialog v-model:show="dialogShow">
            <post-form @save="savePost" />
        </comp-dialog>
        <post-list v-if="!isPostLoading" @remove="removePost" :posts="sortedPost"/>
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
            posts: [],
            title: "",
            body: "",
            dialogShow: false,
            isPostLoading: true,
            selectedSort: "",
            sortOptions: [
                {value: 'title', name: "По тайтлу", id: 1},
                {value: 'body', name: "По тексту", id: 2}
            ],
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
    },
    computed: {
        sortedPost() {
            return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
        }
    },  

   
}
</script>

<style lang="css" scoped>

.app > .app__navbar_actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px;    
}




</style>    