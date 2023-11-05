<script setup>
import NavBar from "./components/NavBar.vue";
import Banner from "./components/Banner.vue";
import Stack from "./components/Stack.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="container">
  <NavBar/>
  <Banner/>
  <Stack/>
  <Footer/>
  </div>
</template>

<style>
body{
  margin: 0;
  padding: 0;
}
.container{
  height: 100%;
}
</style>
