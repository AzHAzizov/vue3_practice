<template>
    <div class="navbar">
        <div class="navbar__title" @click="$router.push('/')">Application</div>
        <div class="navbar__btns">
             <comp-button @click="$router.push('/posts')">Posts</comp-button>
             <comp-button @click="$router.push('/about')">About Us</comp-button>
             <comp-button @click="$router.push('/storePost')">Store Posts</comp-button>
             <comp-button @click="$router.push('/composition')">Compsitioned Posts</comp-button>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .navbar {
        height: 50px;
        background-color: teal;
        box-shadow: 2px 2px 4px gray;
        display: flex;
        align-items: center;
        padding: 0 15px;
    }

    .navbar__btns {
        display: flex;
        margin-left: auto;
    }
</style>