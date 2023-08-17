<template>
    <div class="dialog" v-if="show" @click="hideDialogWindow">
        <div class="dialog__content" @click.stop>
            <slot></slot>    
        </div>
    </div>
</template>

<script>
export default {
    name: 'comp-dialog',
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


}
</script>

<style scoped>

.dialog {
    top:0;
    left: 0;
    right: 0;
    bottom: 0;

    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
}


.dialog__content {
    margin: auto;
    background: white;
    border-radius: 12px;
    min-height: 50px;
    min-width: 500px;
    padding: 20px;
}


</style>