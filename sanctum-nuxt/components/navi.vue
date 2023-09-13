<script setup>
//import { useAuthStore } from "~/stores/useAuthStore";
import { ref } from 'vue';
const auth = useAuthStore();

const links_registered = ref([

  { id: 1, url: '/dashboard', tt: 'Dashboard' },
  { id: 2, url: '/logout', tt: 'Logout' },
]);
const links_guest = ref([
  { id: 1, url: '/register', tt: 'Register' },
  { id: 2, url: '/login', tt: 'Login' },
]);

</script>

<template>
  <div>
    <nav class="p-5 bg-white shadow md:flex md:items-center md:justify-between">
      <div>
        <span v-if="auth.isLoggedIn" class="text-2xl">{{ auth.user.name }}</span>
        <span v-else class="text-2xl">HI</span>

      </div>
      <ul class="md:flex md:items-center">
        <li class="mx-4">
          <nuxt-link class="text-xl hover:text-blue-500 duration-500" to="/">Home</nuxt-link>
        </li>
        <li v-if="auth.isLoggedIn" v-for="l in links_registered" class="mx-4">
          <nuxt-link class="text-xl hover:text-blue-500 duration-500" :to="l.url">{{ l.tt }}</nuxt-link>

        </li>
        <li v-else v-for="l in links_guest" class="mx-4">
          <nuxt-link class="text-xl hover:text-blue-500 duration-500" :to="l.url">{{ l.tt }}</nuxt-link>

        </li>

      </ul>
    </nav>
  </div>
</template>

<style scoped></style>
