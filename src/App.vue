<template>
    <!-- eslint-disable -->
    <div class="app">
        <div class="app__navbar_actions">


            <comp-button @click="dialogShow = true">Add Post</comp-button>
            
            <div>
                <comp-input v-model="searchQuery" placeholder="Search"/>
                <comp-select v-model="selectedSort" v-model:options="sortOptions" />
            </div>
        </div>
        <comp-dialog v-model:show="dialogShow">
            <post-form @save="savePost" />
        </comp-dialog>
        <post-list v-if="!isPostLoading" @remove="removePost" :posts="searchedSortedPosts"/>
        <h2 v-else>
            Posts are loading...
        </h2>
        <div ref="observer" class="observe"></div>
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
            searchQuery: "",

            currentPage: 1,
            postsPerPage: 10,
            totalPages : 0,

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

                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.currentPage,
                        _limit: this.postsPerPage
                    }
                });
                this.posts = response.data


                this.totalPages = Math.ceil(response.headers['x-total-count'] / this.postsPerPage);

            } catch (error) {
                alert("Error on get posts from SERVER")
            }finally {
                this.isPostLoading = false;
            }
        },

        async loadNextPosts() {
            try {

                this.currentPage += 1;
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.currentPage,
                        _limit: this.postsPerPage
                    }
                });
                this.posts = [...this.posts, ...response.data]


                this.totalPages = Math.ceil(response.headers['x-total-count'] / this.postsPerPage);

            } catch (error) {
                alert("Error on get posts from SERVER")
            }finally {
                this.isPostLoading = false;
            }
        },



    },


    watch:{
       
    },  

    mounted() {
        this.fetchPosts();


        

        const options = {
            rootMargin: "0px",
            threshold: 1.0,
        };

        const callback = (entries)  => {
            if(entries[0].isIntersecting) {
                this.loadNextPosts();
            }
        }


        const observer = new IntersectionObserver(callback, options);
        observer.observe(this.$refs.observer)
    },
    computed: {
        sortedPost() {
            return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
        },

        searchedSortedPosts() {
            return this.sortedPost.filter(post => post.title.includes(this.searchQuery));
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


.page__wrapper {
    display: flex;
    margin-top: 15px;
    align-items: center;
    justify-content: center;
}

.page {
    border: 1px solid black;
    padding: 5px;
}


.current__page {
    border: 2.2px solid teal;
}


</style>    