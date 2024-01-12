<template>
    <h1>POKEMONS</h1>
    <br>
    <div class="pokemon-slider">
      <div class="slider-container" ref="slider">
        <div v-for="(pokemon, index) in pokemonList" :key="index" class="slide">
          <img :src="pokemon.image" :alt="pokemon.name" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentIndex: 0,
        pokemonList: [
          { 
            name: "Logo",
            image: "https://i.blogs.es/82d7ef/pokemon/1366_521.jpeg"
          },  
          { 
            name: "Pokemons",
            image: "https://cdn.custom-cursor.com/collections/129/cover-pokemon-preview.png"
          },
          { 
            name: "Pokemons",
            image: "https://www.pokemonunite.gg/res/img/pkmn/025.png"
          },
          { 
            name: "Charizard",
            image: "https://styles.redditmedia.com/t5_2vir1/styles/ommunityIcon_sk3n6g22jsg41.png"
          },
          { 
            name: "Jigglypuff",
            image: "https://tiermaker.com/images/chart/chart/ash-pokemon-gen-1-8-147611/corphish-256x256png.png"
          },
          // Agrega más pokémon según sea necesario
        ],
        intervalId: null,
      };
    },
    mounted() {
      this.startAutoSlide();
    },
    beforeDestroy() {
      this.stopAutoSlide();
    },
    methods: {
      startAutoSlide() {
        this.intervalId = setInterval(() => {
          this.nextSlide();
        }, 3000); // Cambia la imagen cada 3 segundos (ajusta según tus necesidades)
      },
      stopAutoSlide() {
        clearInterval(this.intervalId);
      },
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.pokemonList.length;
        this.updateSlider();
      },
      updateSlider() {
        const slider = this.$refs.slider;
        const offset = -this.currentIndex * 100;
        slider.style.transform = `translateX(${offset}%)`;
      },
    },
  };
  </script>
  
  <style scoped>
  .pokemon-slider {
    max-width: 600px;
    margin: auto;
    overflow: hidden;
  }
  
  .slider-container {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }
  
  .slide {
    flex: 0 0 100%;
  }
  </style>
  
  