<template>
    <div v-if="pokemon">
      <h1>{{ pokemon.name }}</h1>
      <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
      <p>Altura: {{ pokemon.height }} decímetros</p>
      <p>Peso: {{ pokemon.weight }} hectogramos</p>
    </div>
  </template>
  
  <script>
      import axios from 'axios'

  export default {
    data() {
      return {
        pokemon: null,
      };
    },
    created() {
      // Fetch details of the selected Pokémon
      // Use the route parameter 'name' to get the Pokémon's name
      axios.get(`https://pokeapi.co/api/v2/pokemon/${this.$route.params.name}`).then(response => {
        this.pokemon = response.data;
      });
    },
  };
  </script>
  