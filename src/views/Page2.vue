<template>
  <AppPage>
    <div class="container py-8">
      <h1 class="font-bold text-3xl">Page 2</h1>

      <div class="flex gap-4 mt-4">
        <RouterLink class="bg-redwood-500 text-white px-3 py-2 rounded w-20 text-center" to="/1" exact-active-class="bg-redwood-600">1</RouterLink>
        <RouterLink class="bg-redwood-500 text-white px-3 py-2 rounded w-20 text-center" to="/2" exact-active-class="bg-redwood-600">2</RouterLink>
      </div>
    </div>
  </AppPage>
</template>

<script setup lang="ts">
import AppPage from '../components/AppPage.vue'
</script>
