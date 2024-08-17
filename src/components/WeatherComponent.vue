<template>
  <h3>La temperatura actual es: {{ weatherStore.temperature }}°</h3>
</template>

<script setup lang="ts">
import { useWeather } from '@/composables/useWeather'
import { useWeatherStore } from '@/stores/WeatherStore'
import { onMounted } from 'vue'

const weatherStore = useWeatherStore()

onMounted(() => {
  useWeather()
})
</script>

<style scoped></style>
