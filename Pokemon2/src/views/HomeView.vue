<template>
    
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
          { name: "Logo", image: "https://live.staticflickr.com/5763/20825075904_4d1195a82c_b.jpg"},
          { name: "Pikachu", image: "https://i.blogs.es/82d7ef/pokemon/1366_2000.jpeg" },
          /* { name: "Charizard", image: require('@/assets/descarga1.jpg') },
          { name: "Jigglypuff", image: require('@/assets/descarga1.jpg') }, */
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
  
  