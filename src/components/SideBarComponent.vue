<template>
  <div class="sidebar">
    <h2>Sidebar</h2>
    <ul>
      <li><router-link to="/counter">contador</router-link></li>
      <li><router-link to="/tasks">Lista de tareas</router-link></li>
      <li><router-link to="/register">Formulario de registro</router-link></li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style>
.sidebar {
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
}
</style>
