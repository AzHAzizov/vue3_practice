<template>
    <div>
        <select v-bind:value="modelValue" @change="changeOption">
            <option selected value="" disabled>Choose from list</option>
            <option 
                    v-for="option in options" 
                    :key="option.id" 
                    :value="option.value"
                >
                {{option.name}}
            </option>
        </select>
    </div>
</template>

<script>
    export default {
        name: 'comp-select',
        props: {
            modelValue: [String],
            options: {
                type: Array,
                default: () => []
            }
        },
        methods: {
            changeOption(event) {
                this.$emit('update:modelValue', event.target.value)
            }
        },
        mounted() {
            console.log(this.options)
        }
    }
</script>

<style scoped>

</style>