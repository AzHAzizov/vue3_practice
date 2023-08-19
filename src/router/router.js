
import PostPage from "@/pages/PostPage"
import Main from "@/pages/Main"
import About from "@/pages/About"
import PostItemId from "@/pages/PostItem"
import PostPageComositionAPi from "@/pages/PostPageComositionAPi"
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
    },
    {
        path: "/composition",
        component: PostPageComositionAPi
    } 
];


const router = createRouter({
    history: createWebHistory(),
    routes, 
});


export default router;