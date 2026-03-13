<!-- src/App.vue -->
<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Header-component.vue'
</script>

<template>
  <Header />
  <main>
    <RouterView />
  </main>

  <!-- Aquí más adelante pondrás el Footer -->
</template>
<style>

main {
  min-height: calc(110vh - 160px); /* Ajusta según altura de header y footer */
  padding: 2rem;
  width: 100%;
  max-width: 100%;
  padding: 0;
}

</style>
