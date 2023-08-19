
import axios from 'axios';

export const postModule = {
    state: () =>  ({
        posts: [],
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
    }),
    getters: {
        sortedPost(state) {
            return [...state.posts].sort((post1, post2) => post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]))
        },

        searchedSortedPosts(state, getters) {
            return getters.sortedPost.filter(post => post.title.includes(state.searchQuery));
        }
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        setIsPostLoading(state, isPostLoading) {
            state.isPostLoading = isPostLoading;
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort;
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery;
        },
        setCurrentPage(state, currentPage) {
            state.currentPage = currentPage;
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages;
        },

    },
    actions: {
        async fetchPosts({state, commit}) {
            try {

                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.currentPage,
                        _limit: state.postsPerPage
                    }
                });

                commit('setPosts', response.data)
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.postsPerPage))
                 
            } catch (error) {
                alert("Error on get posts from SERVER")
            }finally {
                commit('setIsPostLoading', false)
            }
        },

        async loadNextPosts({state, commit}) {
            try {

                // state - to get state param
                // commit - to call mutations 
                // dispatch - to call other actions 
                // getters - to call getters  



                commit('setCurrentPage', state.currentPage + 1)
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.currentPage,
                        _limit: state.postsPerPage
                    }
                });

                commit('setPosts', [...state.posts, ...response.data])

                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.postsPerPage))


              
            } catch (error) {
                alert("Error on get posts from SERVER")
            }finally {
                commit('setIsPostLoading', false)
            }
        },
    },
    namespaced: true
}