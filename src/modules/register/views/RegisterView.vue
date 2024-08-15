<template>
  <div>
    <h2>Formulario de registro</h2>
    <Form :validation-schema="schema" @submit="onSubmit" @keyup.enter="onSubmit">
      <div class="form">
        <label for="nombre">Nombre</label>
        <Field
          type="text"
          name="nombre"
          id="nombre"
          placeholder="Ingrese su nombre"
          v-model="nombre"
        />
        <ErrorMessage name="nombre" />
      </div>
      <div class="form">
        <label for="email">Email</label>
        <Field
          type="email"
          name="email"
          id="email"
          placeholder="Ingrese su email"
          v-model="email"
        />
        <ErrorMessage name="email" />
      </div>
      <div class="form">
        <button type="submit">Registrar</button>
      </div>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate'
import { schema } from '../schemas/validationSchema'
import { useRegisterStore } from '@/stores/registerStore'
import { onMounted, ref } from 'vue'

const registerStore = useRegisterStore()
const nombre = ref('')
const email = ref('')

const onSubmit = () => {
  registerStore.saveRegister(nombre.value, email.value)
}

onMounted(() => {
  nombre.value = registerStore.nombre
  email.value = registerStore.email
})
</script>

<style>
.form {
  margin-bottom: 10px;
}
</style>
