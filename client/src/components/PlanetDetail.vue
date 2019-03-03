<template lang="html">
  <div id="planet-detail">
    <img :alt="selectedPlanet.name" :src="selectedPlanet.image"/>
    <h2>{{selectedPlanet.name}}</h2>
    <p id="description">{{selectedPlanet.description}}</p>
    <div class="fun-facts">
      <h3>Fun Facts</h3>
      <p class="pfun-facts">Number of Moons: {{selectedPlanet.funFacts.noMoons}}</p>
      <p class="pfun-facts">Gravity: {{selectedPlanet.funFacts.gravity}}</p>
      <p class="pfun-facts" v-if="selectedPlanet.funFacts.lengthOfYears">Length of Year: {{selectedPlanet.funFacts.lengthOfYears}}</p>
      <p class="pfun-facts" v-if="selectedPlanet.funFacts.daysEarth">Length of Day: {{selectedPlanet.funFacts.daysEarth}}</p>
      <p class="pfun-facts" v-if="selectedPlanet.funFacts.planetType">Planet Type: {{selectedPlanet.funFacts.planetType}}</p>
      <p class="pfun-facts" v-if="selectedPlanet.funFacts.starType">Star Type: {{selectedPlanet.funFacts.starType}}</p>
      <p class="pfun-facts">Temperature: {{selectedPlanet.funFacts.temperature}}</p>
    </div>
    <p id="audio">Audio</p>
    <button id="arrow-left" v-on:click="handleToggleLeft(selectedPlanet._id)" type="button" name="buttonLeft"> < </button>
    <button id="arrow-right" v-on:click="handleToggleRight(selectedPlanet._id)" type="button" name="buttonRight"> > </button>
    <button v-on:click="goHome(selectedPlanet._id)" type="button" name="buttonHome">Home</button>
  </div>
</template>


<script>
export default {
}
</script>

<style lang="css" scoped>
</style>


<script>
import {eventBus} from '../main.js'

export default {
  name: "planet-detail",
  props: ['selectedPlanet'],
  methods: {
    handleToggleRight(id){
      eventBus.$emit("toggle-right", id)
    },
    handleToggleLeft(id){
      eventBus.$emit("toggle-left", id)
    },
    goHome(id){
      eventBus.$emit("go-home", id)
    },

  }
}
</script>

<style lang="css" scoped>
* {
  background-color: black
}

body {
  display: flex;
  flex-direction: wrap;
  justify-content: flex-end;
}
img {
  display: flex;
  margin-left: 300px;
  width: 40%;
}


#description {
  display: flex;
  flex-direction: wrap;
  justify-content: space-evenly;
  width: 50%;
  padding: 10px;
  border: 1px;;
  margin-left: 40px;
  color: silver;
}

.fun-facts {
  display: flex;
  flex-direction: column;
  width: 25%;
  padding: 10px;
  border: 1px;;
  margin-left: 60%;
  margin-top: -150px;
  border: 1px solid black;
  border-style: double;
  border-width: 6px;
  border-color: #ed802f;
  background-color: #e89f68;
  border-radius: 5%;
}

.pfun-facts {
  background-color: #e89f68;

}

h2 {
  display: flex;
  margin-left: 35%;
  font-size: 35px;
  color: silver;
}

h3 {
  margin: 2px;
  background-color: #e89f68
}

#audio {
  display: flex;
  flex-direction: wrap;
  margin-top: -200px;
  margin-left: 20px;
  padding: 10px;
  width: 20%;
  color: silver
}

button {
  color:silver;
}

#arrow-left {
  border: none;
  font-size: 100px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: -400px;
  font-weight: bold

}

#arrow-right {
  border: none;
  font-size: 100px;
  display: flex;
  flex-direction: row;
  margin-top: -125px;
  margin-left: 90%;
  font-weight: bold
}

</style>
