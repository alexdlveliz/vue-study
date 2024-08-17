<template>
  <HeaderComponent :message="text" />
  <div class="container">
    <SideBarComponent />
    <div class="content">
      <input type="text" v-model="text" />
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideBarComponent from '@/components/SideBarComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import { ref } from 'vue'

const text = ref('')
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
