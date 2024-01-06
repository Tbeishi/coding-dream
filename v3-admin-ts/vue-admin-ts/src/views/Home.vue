<template>
    <v-header></v-header>
    <v-sidebar></v-sidebar>
    <div class="content-box" :class="{'content-collapse':SidebarStore.collapse}">
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup lang="ts">
import vHeader from '../components/Header.vue'
import vSidebar from '../components/Sidebar.vue'
import { useSidebarStore } from '../store/sidebar';
const SidebarStore = useSidebarStore()
</script>

<style  scoped>

</style>