<template>
    <!-- eslint-disable -->
    <div class="app">

        <div>
            Likes : {{ likes }}
            <comp-button @click="addLikes"> Add like </comp-button>
        </div>

        <!-- <div class="app__navbar_actions">


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
        <div v-intersection="loadNextPosts" class="observe"></div> -->
    </div>
</template>

<script>
// import PostForm from '@/components/PostForm.vue'
// import PostList from '@/components/PostList.vue'
// import axios from 'axios'
import { ref } from 'vue'


export default {
    // components: {
    //     PostForm, PostList
    // },
    data() {
        return {
            // dialogShow: false,
            // sortOptions: [
            //     {value: 'title', name: "По тайтлу", id: 1},
            //     {value: 'body', name: "По тексту", id: 2}
            // ],
        }
    },

    setup() {
        const likes  = ref(2);


        const addLikes = () => {
            likes.value +=1;
        }

        return {
            likes,
            addLikes
        }
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