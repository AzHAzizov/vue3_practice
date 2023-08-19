<template>
    <div class="dialog" v-if="show" @click="hideDialogWindow">
        <div class="dialog__content" @click.stop>
            <slot></slot>    
        </div>
    </div>
</template>

<script>

import toggleMixin from '@/mixins/toggleMixin'

export default {
    name: 'comp-dialog',
    mixins: [toggleMixin]
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