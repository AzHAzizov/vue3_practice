export default {
    props: {
        show: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        hideDialogWindow() {
            this.$emit('update:show', false)
        }
    },
    mounted() {
        
    },
}