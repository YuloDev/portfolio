<script setup>
import {ref} from "vue";


</script>

<template>

  <nav>
    <ul>
      <li class="btn-inicio">
        <router-link to="/">Inicio</router-link>
      </li>
      <li>
        <router-link to="/proyects">Proyectos</router-link>
      </li>
      <li>
        <router-link to="/about">Sobre mi</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  padding: 0 300px;

}

a {
  font-family: "Source Code Pro", sans-serif;
  font-size: 25px;
  text-decoration: none;
  color: black;
}


ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
}

li {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.btn-inicio {
  background-color: #dd2b53;
  border-radius: 3px;
  padding: 10px 15px;
}

.btn-inicio > a {
  color: #fff;

}
</style>