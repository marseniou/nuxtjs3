<script lang="ts" setup>
//import { useAuthStore } from '@/stores/useAuthStore'
const form = ref({
  name:"",
  email: "",
  password: "",
  password_confirmation:""
})
const auth = useAuthStore();
async function handleRegister() {
  const {error} = await auth.register(form.value);
  
  if (!error.value){
    navigateTo("/")
  }
}
</script>

<template>
  <div>
    <form action="" @submit.prevent="handleRegister">
      <label for="">
        Name
        <input type="text" v-model="form.name">
      </label>
      <label for="">
        Email
        <input type="email" v-model="form.email">
      </label>
      <label for="">
        password
        <input type="password" v-model="form.password">
      </label>
      <label for="">
        password confirmation
        <input type="password" v-model="form.password_confirmation">
      </label>
      <button>Register</button>
    </form>
  </div>
</template>

<style scoped></style>
