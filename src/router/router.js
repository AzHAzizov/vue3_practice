
import PostPage from "@/pages/PostPage"
import Main from "@/pages/Main"
import About from "@/pages/About"
import PostItemId from "@/pages/PostItem"
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
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes, 
});


export default router;