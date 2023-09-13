<script lang="ts" setup>
import { useAuthStore } from '@/stores/useAuthStore';
definePageMeta({
  middleware: ["guest"],
});

const form = ref({
  email: "marseniou@gmail.com",
  password: "password"
})
const auth = useAuthStore();

async function handleLogin() {
  if (auth.isLoggedIn) {
    return navigateTo("/");
  }
  
  const { error } = await auth.login(form.value);
  if(!error.value){
    return navigateTo("/");
  }
}
</script>

<template>
  <div>
    <form action="" @submit.prevent="handleLogin">
      <label for="">
        Email
        <input type="email" v-model="form.email">
      </label>
      <label for="">
        password
        <input type="password" v-model="form.password">
      </label>
      <button>Login</button>
    </form>
  </div>
</template>

<style scoped></style>
