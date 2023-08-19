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
            <post-form  />
        </comp-dialog>
        <post-list v-if="!isPostLoading" :posts="searchedSortedPosts"/>
        <h2 v-else>
            Posts are loading...
        </h2>
    </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'
import {usePosts} from '@/hooks/usePosts'
import useSortedPosts from '@/hooks/useSortedPosts'
import useSortedAndFoundPosts from '@/hooks/useSortedAndFoundPosts'


export default {
    components: {
        PostForm, PostList
    },
    data() {
        return {
            dialogShow: false,
            sortOptions: [
                {value: 'title', name: "По тайтлу", id: 1},
                {value: 'body', name: "По тексту", id: 2}
            ],
        }
    },

    setup() {
        const {posts, totalPages, isPostLoading} = usePosts(10);
        const {selectedSort, sortedPost} = useSortedPosts(posts)
        const {searchQuery, searchedSortedPosts} = useSortedAndFoundPosts(sortedPost)


        return {posts, totalPages, isPostLoading, selectedSort, sortedPost, searchQuery, searchedSortedPosts}
    }
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