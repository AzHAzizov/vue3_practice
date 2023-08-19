<template>
    <!-- eslint-disable -->
    <div>
        <!-- <div class="app__navbar_actions">
            <comp-button @click="dialogShow = true">Add Post</comp-button>
            
            <div>
                <comp-input v-model="searchQuery" placeholder="Search"/>
                <comp-select v-model="selectedSort" v-model:options="sortOptions" />
            </div>
        </div> -->
        <!-- <comp-dialog v-model:show="dialogShow">
            <post-form @save="savePost" />
        </comp-dialog> -->
        <post-list v-if="!isPostLoading" @remove="removePost" :posts="searchedSortedPosts"/>
        <h2 v-else>
            Posts are loading...
        </h2>
        <div v-intersection="loadNextPosts" class="observe"></div>
    </div>
</template>

<script>
// import PostForm from '@/components/PostForm.vue'
// import PostList from '@/components/PostList.vue'
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex'




export default {
    data() {
        return {
            dialogShow: false  
        }
    },


    methods : {
        ...mapActions({
            setCurrentPage: 'post/setCurrentPage'
        }),
        ...mapMutations({
            loadNextPosts: 'post/loadNextPosts',
            fetchPosts: 'post/fetchPosts',
        }),


        savePost(data) {

            console.log(data)

            this.posts.push(data)
            this.dialogShow = false
            return true;
        },


        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id);
        },
    },


    watch:{
       
    },  

    mounted() {
        this.fetchPosts();
    },
    computed: {
        ...mapState({
            posts : state => state.posts,
            isPostLoading : state => state.isPostLoading,
            selectedSort : state => state.selectedSort,
            searchQuery : state => state.searchQuery,
            currentPage : state => state.currentPage,
            postsPerPage : state => state.postsPerPage,
            totalPages : state => state.totalPages,
        }),
        ...mapGetters({
            sortedPost: 'post/sortedPost',
            searchedSortedPosts: 'post/searchedSortedPosts',
        })
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