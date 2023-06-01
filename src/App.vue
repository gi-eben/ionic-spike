<template>
  <IonApp>
    <IonRouterOutlet :animated="false" :key="$route.path" />
  </IonApp>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
</script>
