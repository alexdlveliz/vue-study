<template>
    <h1>Hola mundo</h1>
    <p>
      {{ counter }}
    </p>
    <button @click="incrementCounter">Incrementar</button>
    <button @click="decrementCounter">Decrementar</button>
  </template>
    
  <script setup lang="ts">
    import { ref } from 'vue' //esto nos permite agregar variables reactivas
  
    const counter = ref(0)
  
    const incrementCounter = () => {
      counter.value++
    }
  
    const decrementCounter = () => {
      counter.value--
    }
  </script>
  
  <style scoped>
    p {
      color: red;
    }
  </style>
  