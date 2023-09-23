<template>
    <div>auth only</div>
    <div class="container mx-auto">

      <AddProducts/>
    </div>
</template>
<script lang="ts" setup>
import { definePageMeta } from '#imports';
definePageMeta({
    middleware: ['auth']
});

</script>