<template>
<div class="bgc">
  <h2 class="cim">Booking</h2>
  <div class="booking"></div>
  <div class="container p-4 rounded">
    
    <form @submit.prevent="bookAppointment">
      <label>Válosszon tetováló művészt</label>
      <select v-model="artist" class="form-select mb-3">
        <option>Ogechukwukamma Chinyere</option>
        <option>Zodwa Ayanda</option>
        <option>Gouxgii Usaa</option>
        <option>Naamah Ceridwen </option>
      
      </select>


      <label class="idopont">Válasszon a napok közül!</label>
      <select v-model="time" class="form-select mb-3">
        <option>Hétfő</option>
        <option>Kedd</option>
        <option>Szerda</option>
        <option>Csütörtök</option>
        <option>Péntek</option>
        <option>Szombat</option>
        <option>Vasárnap</option>
      </select>


      <label class="idopont">Válasszon az időpontok közül!</label>
      <select v-model="time" class="form-select mb-3">
        <option>08:00</option>
        <option>09:00</option>
        <option>10:00</option>
        <option>11:00</option>
        <option>12:00</option>
        <option>13:00</option>
        <option>14:00</option>
        <option>15:00</option>
        <option>16:00</option>
      </select>

      <div class="mb-3">
        <label for="name" class="form-label">Név</label>
        <input v-model="name" type="text" class="form-control" id="name"/>
      </div>

      <div class="mb-3">
        <label for="phone" class="form-label">Telefonszám</label>
        <input v-model="phone" type="text" class="form-control" id="phone"/>
      </div>

      <button type="submit" class="btn btn-dark mb-3">Foglalás</button>
    </form>

    <div class="toast-container position-fixed top-0 end-0 p-3">
      <div id="liveToast" class="toast align-items-center text-white bg-success border-0" role="alert">
        <div class="d-flex">
          <div class="toast-body">
           A válsztás sikeres!
          </div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Toast } from "bootstrap";

const name = ref("");
const phone = ref("");
const artist = ref("Naamah Ceridwen");
const time = ref("08:00");

const bookAppointment = () => {
  if (!name.value || !phone.value) {
    alert("A mező kitöltése kötelező");
    return;
  }

  const toastEl = document.getElementById("liveToast");
  const toast = new Toast(toastEl);
  toast.show();
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
.cim
{
    font-family: 'bloodcrow','Times New Roman', Times, serif;
    text-shadow: 1px 1px 2px black;
    color: #d8d8d8;
    font-weight: 900;
    text-align: center;
    font-size: 80px;
    margin-bottom: 80px;

}
</style>