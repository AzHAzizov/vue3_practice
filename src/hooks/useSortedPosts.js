import { computed, ref } from "vue";

export default function useSortedPosts(posts) {


    const selectedSort = ref('')

    const sortedPost = computed(() => {
        return [...posts.value].sort((post1, post2) => post1[selectedSort.value]?.localeCompare(post2[selectedSort.value]))
    })


    return {
        selectedSort, sortedPost
    }

}