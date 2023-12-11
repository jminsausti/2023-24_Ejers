<template>
  <div id="app">
    <img class="imgPokemon" :src="imgPrincipal" alt="pokemon">
    <h2>PokeGuia</h2>
    <p>Nombre:<input type="text" id="busqueda" @keyup.enter="buscando" v-model="nombrePoke"><button @click.prevent="buscando">Buscar</button></p>

    <!-- <select name="" id="" v-model="nombrePoke" @change="buscando($event)" >
  
      <option v-for="pokemon in pokemonesSelect" :value=" pokemon.name" >
        {{ pokemon.name }}
      </option>
    </select> -->
    <select v-on:change="rutaImagen($event)">
      <option v-for="pokemon in pokemonesSelect" :value=" pokemon.id" >
        <RouterLink v-bind:to="{name: 'imagen', params:{id:pokemon.id }}">
          {{ pokemon.name }}
        </RouterLink>
      </option>
    </select>

    <div v-if="activo">
      <img :src="llevarFoto" alt="">
      <h3>Habilidades</h3>
      <ul>
        <li v-for="(item, index) in pokeHabilidad" :key="index">{{item.ability.name}}</li>
      </ul>
      <h3>Movimientos</h3>
      <ul>
        <li v-for="(item, index) in pokeMove" :key="index">{{item.move.name}}</li>
      </ul>
    </div>
          
  </div>
</template>

<script>
// import PokeGuia from './PokeGuia.vue'

export default {
  name: 'HomeView',
  data() {
    return {
      imgPrincipal: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1920px-International_Pok%C3%A9mon_logo.svg.png",
      pokemones:[],
      nombrePoke : '',
      pokemonesSelect:[],
      activo: false,
      pokeHabilidad: [],
      pokeMove: [],
      
    }
  },
  methods: {
    buscando(event){
      //let nombrePoke = document.getElementById("busqueda").value || event.target.value;
      alert(this.nombrePoke)
      if (this.nombrePoke && isNaN(this.nombrePoke)) {
          fetch(`https://pokeapi.co/api/v2/pokemon/${this.nombrePoke}`)
          .then(respuesta => respuesta.json())
          .then(datos => {
            this.pokemones = datos;
            this.pokeHabilidad = datos.abilities;
            this.pokeMove = datos.moves;
            this.activo = true;
          })
          .catch(error => {
            console.error(error);
            alert("El nombre no se encuentra en la base de datos");
          })
      }else{
        alert("Debe ingresar un nombre valido en el campo")
      }
    },
   async pikachu () {
      let respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
      let datos = await respuesta.json();
          this.pokemones = datos;
          this.pokeHabilidad = datos.abilities;
          this.pokeMove = datos.moves;
          this.activo = true;
      },
    async getPokemons(){
      let respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/");
      let datos = await respuesta.json();
      console.log(datos.results)
      this.pokemonesSelect = datos.results;
      
    },
    rutaImagen(event){
      consol
      this.$router.push("/" + e.target.value);
    },
  computed: {
    llevarFoto(){
      return this.pokemones.sprites.front_default;
    },
    llevarNombre(){
      return this.pokemones.name;
    }
  },
  mounted() {
    this.pikachu();
    this.getPokemons();
  },
}
</script>

<style scope>
  #app {
    text-align: center;
  }
  ul{
  display:inline-block;
  text-align:left;
}
 .imgPokemon{
    width: 30%;
 }
</style>