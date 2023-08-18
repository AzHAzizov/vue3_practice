<template>
    <div>
        <navbar-tab></navbar-tab>
        <router-view></router-view>

        <!-- <post-page /> -->
    </div>
</template>

<script>
import NavbarTab from './components/NavbarTab.vue'


export default {
  components: { NavbarTab },
}
</script>

<style scoped></style>