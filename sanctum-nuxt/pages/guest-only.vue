<template>
    <div>guest only</div>
</template>
<script lang="ts" setup>
import { definePageMeta } from '#imports';
definePageMeta({
    middleware: ['guest']
})
</script>