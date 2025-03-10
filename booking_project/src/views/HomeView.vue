<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>

<div class="bgc">
    <h2 class="cim">Tattoo</h2>
</div>

</template>

<style scoped>
.cim
{
    font-family: 'bloodcrow','Times New Roman', Times, serif;
    text-shadow: 1px 1px 2px black;
    color: #d8d8d8;
    font-weight: 900;
    text-align: center;
    margin: 295px;
    font-size: 480px;

}
.bgc
{
    
  background-image:linear-gradient(to bottom right,#800000,#730000,#660000,#5a0000,#5a0000,#4d0000,#330000,#260000,#1a0000,#0d0000,#000000);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  

}
</style>
