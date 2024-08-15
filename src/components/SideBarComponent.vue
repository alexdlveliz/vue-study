<template>
  <div class="sidebar">
    <h2>Bienvenido</h2>
    <h3>Nombre: {{ nombre }}</h3>
    <h4>Email: {{ email }}</h4>
    <ul>
      <li><router-link to="/counter">contador</router-link></li>
      <li><router-link to="/tasks">Lista de tareas</router-link></li>
      <li><router-link to="/register">Formulario de registro</router-link></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useRegisterStore } from '@/stores/registerStore'
import { ref, watch } from 'vue'

const registerStore = useRegisterStore()
const nombre = ref(registerStore.nombre)
const email = ref(registerStore.email)

watch(
  () => registerStore.nombre,
  (newValue) => {
    nombre.value = newValue
  }
)
watch(
  () => registerStore.email,
  (newValue) => {
    email.value = newValue
  }
)
</script>

<style>
.sidebar {
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
}
</style>
