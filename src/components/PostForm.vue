<template>
    <div>
        <form @submit.prevent>
            <h4>Craete new Post</h4>
            <comp-input v-focus v-model="post.title" type="text" placeholder="Title" />
            <comp-input v-model="post.body" type="text" placeholder="Text" />

            <comp-button  @click="createPost">
                Save
            </comp-button>
        </form>
    </div>
</template>

<script>
export default {

    data() {
        return {
            post: {
                title: "",
                body: ""
            }
        }
    },

    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit("save", this.post);


            this.post = {
                title: "",
                body: ""
            }

            // this.post.title = "123123123";
            // this.post.text = ""
            // this.$forceUpdate();
        }

    }
}
</script>

<style scoped>
form {
    margin-bottom: 50px;
}
</style>