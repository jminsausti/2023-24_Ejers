<template>
  <div>
    <h1>Selecciona un Pokémon</h1>
    <label for="pokemonSelect">Elige un Pokémon:</label>
    <select v-model="selectedPokemon" id="pokemonSelect" @change="navigateToPokemon">
      <option v-for="pokemon in pokemonList" :key="pokemon.name" :value="pokemon.name">
        {{ pokemon.name }}
      </option>
    </select>
    <router-link :to="{ name: 'PokemonDetail', params: { name: selectedPokemon } }">
      <button>Ver detalles</button>
    </router-link>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      selectedPokemon: '',
      pokemonList: [],
    };
  },
  mounted() {
    // Fetch the list of Pokémon for the dropdown
    // You can use this endpoint: https://pokeapi.co/api/v2/pokemon?limit=100
    // Fetch only the first 100 for simplicity
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100').then(response => {
      this.pokemonList = response.data.results;
    });
  },
  methods: {
    navigateToPokemon() {
      // Navigate to the selected Pokémon's details page
      // The route name is 'pokemonDetail'
      this.$router.push({ name: 'PokemonDetail', params: { name: this.selectedPokemon } });
    },
  },
};
</script>

