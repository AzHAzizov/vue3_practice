<template>
    <div>
        <div class="post" v-for="post in posts" v-bind:key="post.id">
            <div>
                <strong>Title</strong>
                <span>{{post.title}}</span>
            </div>    
            <div>
                <strong>Text</strong>
                <span>{{post.text}}</span>
            </div>    
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: [
                {id: 1, title: "Post title 1", text: "Post long text 1"},
                {id: 2, title: "Post title 2", text: "Post long text 2"},
                {id: 3, title: "Post title 3", text: "Post long text 3"},
                {id: 4, title: "Post title 4", text: "Post long text 4"},
            ]
        }
    }
}
</script>

<style lang="css" scoped>

.post{
    border: 2px solid rgb(61, 177, 86);
    margin-bottom: 5px;
    max-width: 1200px;
    padding: 10px 0 10px 10px;
}


.post > div > strong {
    margin-right: 5px;
}


</style>    