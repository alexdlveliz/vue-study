import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRegisterStore = defineStore('register', () => {
  const nombre = ref('')
  const email = ref('')

  const saveRegister = (nombreForm: string, emailForm: string) => {
    nombre.value = nombreForm
    email.value = emailForm
  }
  return { nombre, email, saveRegister }
})
