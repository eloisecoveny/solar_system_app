<template lang="html">
  <div id="planet-detail" class="animated zoomIn faster">
    <img class="animated fadeInDownBig 1s" :alt="selectedPlanet.name" :src="selectedPlanet.image"/>
    <h2 class="animated fadeInLeft 1s">{{selectedPlanet.name}}</h2>
    <p class="animated fadeInUpBig 1s" id="description">{{selectedPlanet.description}}</p>
    <div class="fun-facts animated fadeInRight 1s">
      <h3>Fun Facts</h3>
      <p class="pfun-facts"><b>Number of Moons:</b> {{selectedPlanet.funFacts.noMoons}}</p>
      <p class="pfun-facts"><b>Gravity:</b> {{selectedPlanet.funFacts.gravity}}</p>
      <p class="pfun-facts" v-if="selectedPlanet.funFacts.lengthOfYears"><b>Length of Year:</b> {{selectedPlanet.funFacts.lengthOfYears}}</p>
      <p class="pfun-facts" v-if="selectedPlanet.funFacts.daysEarth"><b>Length of Day:</b> {{selectedPlanet.funFacts.daysEarth}}</p>
      <p class="pfun-facts" v-if="selectedPlanet.funFacts.planetType"><b>Planet Type:</b> {{selectedPlanet.funFacts.planetType}}</p>
      <p class="pfun-facts" v-if="selectedPlanet.funFacts.starType"><b>Star Type:</b> {{selectedPlanet.funFacts.starType}}</p>
      <p class="pfun-facts"><b>Temperature:</b> {{selectedPlanet.funFacts.temperature}}</p>
    </div>
    <button id="arrow-left" v-on:click="handleToggleLeft(selectedPlanet._id)" type="button" name="buttonLeft" > < </button>
    <button id="arrow-right" v-on:click="handleToggleRight(selectedPlanet._id)" type="button" name="buttonRight"> > </button>
    <div class="home-btn">
    <img id="home" v-on:click="goHome(selectedPlanet._id)" src= "../assets/rocket2.png"/>
    <p v-on:click="goHome(selectedPlanet._id)" id="home-text"> <<< return to outer space</p>
    </div>
    <div class="audio">
      <h4>Listen to {{selectedPlanet.name}}</h4>
      <iframe  width="60" height="35" :src="selectedPlanet.frequency" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>
</div>
</template>

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

body {
  display: flex;
  flex-direction: wrap;
  justify-content: flex-end;
}


img {
  display: flex;
  margin-left: 300px;
  margin-bottom: 100px;
  width:500px;
  width: auto;
  height:250px;
  align-items: center
}


#description {
  position: absolute;
  z-index: 1;
  display: flex;
  border-radius: 3%;
  width: 48%;
  /* height: 40%; */
  padding-top: 30px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 35px;
  border: 1px;
  margin-left: 90px;
  color: silver;
  font-size: 20px;
  font-family: 'Mukta', sans-serif;
  line-height: 30px;
}


.fun-facts {
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 25%;
  padding: 10px;
  border: 1px;;
  margin-left: 60%;
  margin-top: -50px;
  border: 1px solid black;
  border-style: double;
  border-width: 6px;
  border-color: #ed802f;
  background-color: #e89f68;
  border-radius: 5%;
}

.fun-facts:hover {
  transform: scale(1.1);
}

.pfun-facts {
  background-color: #e89f68;
}

p {
  font-family: 'Merriweather Sans', sans-serif;
}

h2 {
  display: flex;
  margin-left: 35%;
  font-size: 60px;
  color: silver;
  font-family: 'ZCOOL QingKe HuangYou', cursive;
}

h3 {
  font-size: 20px;
  margin: 2px;
  background-color: #e89f68;
  font-family: 'Mukta', sans-serif;
  padding-bottom: 15px;
  font-size: 30px;
}

h4 {
  color: silver;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 18px;
  font-family: 'Mukta', sans-serif;
}

p {
  font-family: 'Mukta', sans-serif;
  font-size: 18px;
}

button {
  color:silver;
  outline: none;


}

button:hover {
  transform: scale(1.2);


}

#arrow-left {
  border: none;
  font-size: 100px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: -100px;
  margin-left: 20px;
  font-weight: bold;
  /* background-color: black; */
  cursor: pointer;
  align-items:  center;

}


#arrow-right {
  border: none;
  font-size: 100px;
  display: flex;
  flex-direction: row;
  margin-top: -125px;
  margin-left: 90%;
  font-weight: bold;
  /* background-color: black; */
  cursor: pointer;
  align-items:  center;

}

#home {
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  width: 100px;
  height: 100px;
  -webkit-transition: height 4s;
  transition: height 4s;
  top: 300px;
  left: 20px;
}

#home:hover {
  transform: scale(1.2);
  height: 120px;
}

#home-text {
  color: white;
  margin-left: 40px;
  margin-top: 250px;
  font-family: 'ZCOOL QingKe HuangYou', cursive;
  font-size: 30px;
  color: rgb(142, 31, 49);
  cursor: pointer;
}

.home-btn {
  display: inline-block;
  margin-top: 30px

}

.audio {
  position: absolute;
  z-index: 1;
  margin: 250px 90px;
  width: 20%;
  border: none;
  display: flex;
  align-items: center;
  top: 500px;
}



</style>
