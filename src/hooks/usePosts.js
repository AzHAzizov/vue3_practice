import { onMounted, ref } from "vue";
import axios from 'axios'
export function  usePosts(postsPerPage) {


    const posts = ref([])
    const totalPages = ref(0)
    const isPostLoading = ref(true)

    const fetching = async () => {
        try {

            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _page: 1,
                    _limit: postsPerPage
                }
            });
            posts.value = response.data
            totalPages.value = Math.ceil(response.headers['x-total-count'] / postsPerPage);

        } catch (error) {
            alert("Error on get posts from SERVER")
        } finally {
            isPostLoading.value = false;
        }
    }


    onMounted(fetching);


    return {posts, totalPages, isPostLoading}
}