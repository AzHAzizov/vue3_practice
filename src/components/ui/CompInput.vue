<template>
        <input @input="updateInput" :value="modelValue">
</template>

<script>
    export default {
        name: "comp-input",

        props: {
            modelValue: [String, Number],
        },

        methods: {
            updateInput(event) {
                this.$emit('update:modelValue', event.target.value)
            }
        }

    }
</script>

<style scoped>

</style>