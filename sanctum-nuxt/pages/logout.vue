<template>
<p>Logging out...</p>

</template>
<script setup>
const auth = useAuthStore()
onMounted(async () =>{
    await auth.logout()
})
  

</script>