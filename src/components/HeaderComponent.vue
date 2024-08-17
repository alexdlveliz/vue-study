<template>
  <div class="header">{{ receivedMessage }}<WeatherComponent /></div>
</template>

<script setup lang="ts">
import WeatherComponent from './WeatherComponent.vue'
import { defineProps, watch, ref } from 'vue'

const props = defineProps(['message'])
const receivedMessage = ref(props.message)

watch(
  () => props.message,
  (newValue) => {
    receivedMessage.value = newValue
  }
)
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  top: 0;
  right: 0;
  left: 0;
  background-color: #333;
  color: white;
}
h3 {
  margin: 0;
}
</style>
