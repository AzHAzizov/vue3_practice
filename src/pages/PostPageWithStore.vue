<template>
    <!-- eslint-disable -->
    <div>
        <div class="app__navbar_actions">
            <comp-button @click="dialogShow = true">Add Post</comp-button>
            
            <div>
                <comp-input 
                    :model-value="searchQuery"
                    @update:model-value="setSearchQuery"
                    v-focus
                >
                </comp-input>
                <comp-select :model-value="selectedSort" @update:model-value="setSelectedSort" :options="sortOptions" />
            </div>
        </div>
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
import PostList from '@/components/PostList.vue'
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex'



export default {

    components: {
        PostList
    },

    data() {
        return {
            dialogShow: false  
        }
    },


    methods : {
        ...mapActions({
            loadNextPosts: 'post/loadNextPosts',
            fetchPosts: 'post/fetchPosts',
        }),
        ...mapMutations({
            setCurrentPage: 'post/setCurrentPage',
            setSearchQuery: 'post/setSearchQuery',
            setSelectedSort: 'post/setSelectedSort',
        }),


        savePost(data) {
            this.posts.push(data)
            this.dialogShow = false
            return true;
        },


        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id);
        },
    },

    mounted() {
        this.fetchPosts();
    },
    computed: {
        ...mapState({
            posts : state => state.post.posts,
            isPostLoading : state => state.post.isPostLoading,
            selectedSort : state => state.post.selectedSort,
            searchQuery : state => state.post.searchQuery,
            currentPage : state => state.post.currentPage,
            postsPerPage : state => state.post.postsPerPage,
            totalPages : state => state.post.totalPages,
            sortOptions : state => state.post.sortOptions,
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