<template>
  <div>
    <h2>Formulario de registro</h2>
    <Form :validation-schema="schema" @submit="onSubmit">
      <div class="form">
        <label for="nombre">Nombre</label>
        <Field type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre" />
        <ErrorMessage name="nombre" />
      </div>
      <div class="form">
        <label for="email">Email</label>
        <Field type="email" name="email" id="email" placeholder="Ingrese su email" />
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

const onSubmit = () => {
  console.log('el formulario se ha enviado')
}
</script>

<style>
.form {
  margin-bottom: 10px;
}
</style>
