<script setup lang="ts">
import { IonContent, IonFooter, IonHeader, IonPage, IonToolbar } from '@ionic/vue';

//
</script>

<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <div class="h-16 bg-berry-500 px-4">
          <div class="flex justify-center items-center h-full">
            <h1 class="text-white">
              Header
            </h1>
          </div>
        </div>
      </IonToolbar>
    </IonHeader>

    <IonContent id="main-content">
      <slot/>
    </IonContent>

    <IonFooter>
      <IonToolbar>
        <div class="flex justify-center items-center py-5 bg-error-100">
          Footer
        </div>
      </IonToolbar>
    </IonFooter>
  </IonPage>
</template>
