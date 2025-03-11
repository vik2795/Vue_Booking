<template>
<div class="bgc">
  <div class="container">
      <h2>Foglalás: {{ time }}</h2>
      <form @submit.prevent="submitForm">
        <input v-model="name" placeholder="Név" required>
        <input v-model="phone" placeholder="Telefonszám" required>
        <button type="submit">Foglalás</button>
      </form>
    </div>
</div>
</template>
<script>
  import { useRoute, useRouter } from 'vue-router';
  import { ref } from 'vue';
  import { useToast } from 'vue-toastification';
  
  const route = useRoute();
  const router = useRouter();
  const toast = useToast();

  const name = ref('');
  const phone = ref('');
  
  const submitForm = async () => {
    await store.bookSlot(time, name.value, phone.value);
    toast.success('Foglalás sikeres!');
    router.push('/');
  };

</script>
<style scoped>
.bgc
{
    
  background-image:linear-gradient(to bottom right,#800000,#730000,#660000,#5a0000,#5a0000,#4d0000,#330000,#260000,#1a0000,#0d0000,#000000);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  color:#caaaaa;
  

}
</style>