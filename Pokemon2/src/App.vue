<template>
  <div id="app">
    <header>
      <nav> 
        <!-- Indicamos el path al que deberá acceder -->
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink :to="{name:'pokemon'}">Pokemons</RouterLink> |
      </nav>
    </header>
    
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* #app {
  text-align: center;
  margin-top: 60px;
} */
</style>
