<template>
    <div class="container">
      <h2>Foglalás: {{ time }}</h2>
      <form @submit.prevent="submitForm">
        <input v-model="name" placeholder="Név" required>
        <input v-model="phone" placeholder="Telefonszám" required>
        <button type="submit">Foglalás</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { useRoute, useRouter } from 'vue-router';
  import { ref } from 'vue';
  import { useCounterStore } from '../store';
  import { useToast } from 'vue-toastification';
  
  const route = useRoute();
  const router = useRouter();
  const store = useBookingStore();
  const toast = useToast();
  
  const time = route.params.time;
  const name = ref('');
  const phone = ref('');
  
  const submitForm = async () => {
    await store.bookSlot(time, name.value, phone.value);
    toast.success('Foglalás sikeres!');
    router.push('/');
  };
  </script>