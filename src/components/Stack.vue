<script setup>

</script>

<template>
  <div class="container">
    <h2>Lenguajes y herramientas</h2>
    <div class="container__items">
      <i class="fa-brands fa-python fa-4x"></i>
      <i class="fa-brands fa-js fa-4x"></i>
      <i class="fa-brands fa-java fa-4x"></i>
      <i class="fa-brands fa-php fa-4x"></i>
      <i class="fa-brands fa-html5 fa-4x"></i>
      <i class="fa-brands fa-laravel fa-4x"></i>
      <i class="fa-brands fa-vuejs fa-4x"></i>
      <i class="fa-brands fa-react fa-4x"></i>
      <i class="fa-brands fa-git-alt fa-4x"></i>
      <i class="fa-brands fa-github fa-4x"></i>
      <i class="fa-brands fa-aws fa-4x"></i>
      <i class="fa-brands fa-css3-alt fa-4x"></i>
    </div>
  </div>
</template>

<style scoped>



h2 {
  text-align: center;
  padding: 0;
  margin: 0;
  color: #dd2b53;
  font-family: "Source Code Pro", sans-serif;
  font-size: 40px;
}

p {
  font-family: "Source Code Pro", sans-serif;
  font-size: 30px;
}

hr {
  color: #5F9EA0FF;
}

.container {
  background: #221E1FFA;
  color: #fff;
  padding: 60px 30px;
}


.container__items > i:nth-child(n+2) {
  margin: 0 0 0 35px;
}

.container__items {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}


img {
  width: 100%;
  height: 100%;
}

</style>