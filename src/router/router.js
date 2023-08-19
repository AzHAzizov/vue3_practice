
import PostPage from "@/pages/PostPage"
import Main from "@/pages/Main"
import About from "@/pages/About"
import PostItemId from "@/pages/PostItem"
import PostPageWithStore from "@/pages/PostPageWithStore"
import { createRouter, createWebHistory } from "vue-router";


const routes  = [
    {
        path: "/",
        component: Main
    },
    {
        path: "/about",
        component: About
    },
    {
        path: "/posts",
        component: PostPage
    },
    {
        path: "/posts/:id",
        component: PostItemId
    },
    {
        path: "/storePost",
        component: PostPageWithStore
    } 
];


const router = createRouter({
    history: createWebHistory(),
    routes, 
});


export default router;