<template>
  <div class="container">
    <SideBarComponent />
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideBarComponent from '@/components/SideBarComponent.vue'
</script>

<style>
.container {
  display: flex;
}

.content {
  flex: 1;
  padding: 20px;
}
</style>
