import { computed, ref } from "vue";

export default function useSortedAndFoundPosts(sortedPost) {


    const searchQuery = ref('')

    const searchedSortedPosts = computed(() => {
        return sortedPost.value.filter(post => post.title.includes(searchQuery.value));
    })


    return {
        searchQuery, searchedSortedPosts
    }

}