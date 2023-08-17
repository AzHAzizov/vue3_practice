<template>
    <div>

        <div>
            <button @click="addLike">
                Like
            </button>


            <div>
                Likes count : {{ like }}
            </div>

        </div>

        <div>
            <button @click="addDislike">
                Dislike
            </button>

            <div>
                Displikes count: {{ dislike }}
            </div>
        </div>



    </div>
</template>

<script>
export default {
    data() {
        return {
            like: 0,
            dislike: 0,
        }
    },

    methods: {
        addLike() {
            this.like += 1;
        },
        addDislike() {
            this.dislike += 1;
        }
    },
}
</script>

<style lang="css" scoped></style>    