<template>
    <div class="post">
        <div class="post-item">
            <div class="content">
                <div>
                    <strong>Title: </strong>
                    <span>{{post.title}}</span>
                </div>    
                <div>
                    <strong>Text: </strong>
                    <span>{{post.text}}</span>
                </div>   
            </div>
            
            <div class="action">
                <comp-button @click="$emit('remove', post)" class="remove">
                    Remove
                </comp-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.post{
    border: 2px solid rgb(61, 177, 86);
    margin-bottom: 5px;
    max-width: 1200px;
    padding: 10px 0 10px 10px;
}


.post > div > strong {
    margin-right: 5px;
}

.post > .post-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.post > button.remove {
    color: red;
}s


.post > .action {
    margin-right: 10px;
}

</style>