<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav class="header">
      <RouterLink class="btn btn-dark m-2" to="/">🏛</RouterLink> 
      <RouterLink class="btn btn-dark m-2" to="/">üres</RouterLink>
      <RouterLink class="btn btn-dark m-2" to="/">üres</RouterLink>
      <RouterLink class="btn btn-dark m-2" to="/">üres</RouterLink>
      <RouterLink class="btn btn-dark m-2" to="/">üres</RouterLink>
      <RouterLink class="btn btn-dark m-2" to="/">üres</RouterLink>
    </nav>
  

  <RouterView />
</template>

<style scoped>
.header
{
  background-color: #2e2e2e;

}
.btn
{
  background-color: #6d3232; 
  color: #caaaaa;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;
  font-family:'Times New Roman', Times, serif;
  font-weight:bold;
  }

</style>
