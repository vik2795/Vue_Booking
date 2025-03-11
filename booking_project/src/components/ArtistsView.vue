<template>
  <div class="bgc">
    <h2 class="cim">Artists</h2>
<div class="card-container">
<div class="row">
  
  <div class="container mt-3"></div>

  <div class="card" style="width:400px">
    <img class="card-img-top" src="../img/indri.PNG" alt="Card image" style="width:100%">
    <div class="card-body">
      <h4 class="card-title">Ogechukwukamma Chinyere</h4>
      <a href="#" class="btn btn-dark">See Profile</a>
    </div>
  </div>
  
  <div class="card" style="width:400px">
    <img class="card-img-top" src="../img/spread.jpg" alt="Card image" style="width:100%">
    <div class="card-body">
      <h4 class="card-title">Gouxgii Usaa</h4>
      <a href="#" class="btn btn-dark">See Profile</a>
    </div>
  </div>

  <div class="card" style="width:400px">
    <img class="card-img-top" src="../img/ivan.jpg" alt="Card image" style="width:100%">
    <div class="card-body">
      <h4 class="card-title">Zodwa Ayanda</h4>
      <a href="#" class="btn btn-dark">See Profile</a>
    </div>
  </div>

  <div class="card" style="width:400px">
    <img class="card-img-top" src="../img/salami.jpg" alt="Card image" style="width:100%">
    <div class="card-body">
      <h4 class="card-title">Naamah Ceridwen</h4>
      <a href="#" class="btn btn-dark">See Profile</a>
    </div>
  </div>

  
</div>
</div>
</div>



</template>
  
<script>
import { RouterLink, RouterView } from 'vue-router'; 
</script>
<style scoped>
.card
{
  margin: 5px;
  margin-top: 50px;
  

  
}

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
.row
{
  margin-top: 50px;
}
</style>