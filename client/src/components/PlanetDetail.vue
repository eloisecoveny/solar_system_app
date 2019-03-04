<template lang="html">
  <div id="planet-detail" class="animated zoomIn faster">
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
    <button id="arrow-left" v-on:click="handleToggleLeft(selectedPlanet._id)" type="button" name="buttonLeft" > < </button>
    <button id="arrow-right" v-on:click="handleToggleRight(selectedPlanet._id)" type="button" name="buttonRight" > > </button>
    <img id="home" v-on:click="goHome(selectedPlanet._id)" src= "../assets/rocket.jpg"/>
    <div class="audio">
      <h4>{{selectedPlanet.name}}'s Frecuency</h4>
      <img v-on:click="audioPlay()"  class='button-play' src="../assets/play.png">
      <!-- <button v-on:click="audioPlay()" type="button" name="button">Pause</button> -->
    </div>
  </div>
</template>




<style lang="css" scoped>
</style>


<script>
import {eventBus} from '../main.js'
import {Howl, Howler} from 'howler';

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
    audioPlay(){
      const myTrack = new Howl({src: ["./src/assets/" + this.selectedPlanet.name + ".mp3", "./src/assets/" + this.selectedPlanet.name + ".ogg"],
      autoplay: true,
      volume: 0.8});
      myTrack.play();
    },
    // audioPause(){
    //   myTrack.pause();
    // }

  }
}
</script>

<style lang="css" scoped>
#planet-detail {
  background-color: black;

}

body {
  display: flex;
  flex-direction: wrap;
  justify-content: flex-end;
}
img {
  display: flex;
  margin-left: 300px;
  width:500px;
  height:300px;
  align-items: center
}


#description {
  position: absolute;
  z-index: 1;
  display: flex;
  border-radius: 3%;
  width: 50%;
  height: 40%;
  padding: 10px;
  border: 1px;
  margin-left: 90px;
  padding: none;
  color: silver;
  font-size: 20px;
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

h2 {
  display: flex;
  margin-left: 35%;
  font-size: 40px;
  color: silver;
}

h3 {
  margin: 2px;
  background-color: #e89f68
}

h4 {
  color: silver;
  margin-left: 20px
}

button {
  color:silver;
  outline: none

}

button:hover {
  transform: scale(1.4);

}

#arrow-left {
  border: none;
  font-size: 100px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: -100px;
  font-weight: bold;
  background-color: black;
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
  background-color: black;
  cursor: pointer;
  align-items:  center;

}

#home {
  position: absolute;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 200px 600px;
  width:80px;
  height:80px;
  cursor: pointer;
}

#home:hover {
  transform: scale(1.4);
}

.button-play {
  height: 40px;
  width: 40px;
  margin-left: 20px;
}

.audio {
  position: absolute;
  z-index: 1;
  margin: 200px 90px;
  width: 15%;
  border: 1px solid white;
  display: flex;
  align-items: center;
  border-radius: 8%;
}

.button-play:hover {
  transform: scale(1.4);
}


</style>
