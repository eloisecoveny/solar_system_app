<template lang="html">
  <div id="planetIndex" >
    <h1>Solar System</h1>
      <div id="sun-rotate" v-for="(planet, index) in planets" v-on:click="handleClick(index)" >
        <div id="sun">
        </div>
      </div>
      <div id="mercury-orbit" v-for="(planet, index) in planets" v-on:click="handleClick(index)" >
        <div id="mercury">
        </div>
      </div>
      <div id="venus-orbit" v-for="(planet, index) in planets" v-on:click="handleClick(index)" >
        <div id="venus">
        </div>
      </div>
      <div id="earth-orbit" v-for="(planet, index) in planets" v-on:click="handleClick(index)" >
        <div id="earth">
        </div>
      </div>
      <div id="mars-orbit" v-for="(planet, index) in planets" v-on:click="handleClick(index)" >
        <div id="mars">
        </div>
      </div>
      <div id="jupiter-orbit" v-for="(planet, index) in planets" v-on:click="handleClick(index)" >
        <div id="jupiter">
        </div>
      </div>
      <div id="saturn-orbit" v-for="(planet, index) in planets" v-on:click="handleClick(index)" >
        <div id="saturn">
          <div id="saturn-ring">

          </div>
        </div>
      </div>
      <div id="uranus-orbit" v-for="(planet, index) in planets" v-on:click="handleClick(index)" >
        <div id="uranus">
        </div>
      </div>


  </div>
</template>

<script>
import {eventBus} from '../main.js'

export default {
  name: "solar-system",
  props: ["planets"],
  data(){
    return {
      selectedPlanet: null
    }
  },
  methods: {
    handleClick(index){
      eventBus.$emit("planet-selected", index)
    }
  }
}
</script>

<style lang="css" scoped>

#planetIndex {
  align-items: center;
}

#sun-rotate {
  position: absolute;
  top: 210px;
  left: 665px;
  animation: rotate-left 2s linear infinite;
}

#sun {
  position: absolute;
  top: 90px;
  left: -13px;
  height: 120px;
  width: 120px;
  border-radius: 100%;
  background: radial-gradient(circle at 30px 100px, #ffd000, #ff6702);
  transition: transform .2s;
  z-index: 7;
}


#mercury-orbit {
    position: absolute;
    top: 260px;
    left: 600px;
    width: 220px;
    height: 220px;
    border: 2px #4A437F dashed;
    border-radius: 100%;
    -webkit-animation: spin-right 10s linear infinite;
    animation: spin-right 10s linear infinite;
    z-index: 6;
}
#mercury {
  position: absolute;
  top: 90px;
  left: -13px;
  height: 25px;
  width: 25px;
  border-radius: 100%;
  background: radial-gradient(circle at 2px 25px, #ffe526, #e29b28);
  transition: transform .2s;
}

#mercury:hover {
  transform: scale(1.5);
}

#venus-orbit {
    position: absolute;
    top: 230px;
    left: 560px;
    width: 320px;
    height: 320px;
    border: 2px #4A437F dashed;
    border-radius: 100%;
    -webkit-animation: spin-right 5s linear infinite;
    animation: spin-right 13s linear infinite;
    z-index: 5;
}

#venus {
    position: absolute;
    top: 80px;
    left: -13px;
    height: 45px;
    width: 45px;
    border-radius: 100%;
    background: radial-gradient(circle at 25px 25px, #ffa11e, #f76516);
    transition: transform .2s;
}

#venus:hover {
  transform: scale(1.5);
}

#earth-orbit {
    position: absolute;
    top: 150px;
    left: 490px;
    width: 500px;
    height: 500px;
    border: 2px #4A437F dashed;
    border-radius: 100%;
    -webkit-animation: spin-right 5s linear infinite;
    animation: spin-right 15s linear infinite;
    z-index: 4;
}

#earth {
    position: absolute;
    top: 150px;
    left: -13px;
    height: 50px;
    width: 50px;
    border-radius: 100%;
    background: radial-gradient(circle at 5px 10px, #00ad62, #69b1f4);
    transition: transform .2s;
}

#earth:hover {
  transform: scale(1.5);
}

#mars-orbit {
    position: absolute;
    top: 60px;
    left: 380px;
    width: 700px;
    height: 700px;
    border: 2px #4A437F dashed;
    border-radius: 100%;
    -webkit-animation: spin-right 5s linear infinite;
    animation: spin-right 24s linear infinite;
    z-index: 3;
}

#mars {
    position: absolute;
    top: 170px;
    left: 19px;
    height: 38px;
    width: 38px;
    border-radius: 100%;
    background: radial-gradient(circle at 5px 10px, #dda600, #bf7900);
    transition: transform .2s;
}

#mars:hover {
  transform: scale(1.5);
}

#jupiter-orbit {
    position: absolute;
    top: 10px;
    left: 300px;
    width: 900px;
    height: 900px;
    border: 2px #4A437F dashed;
    border-radius: 100%;
    -webkit-animation: spin-right 5s linear infinite;
    animation: spin-right 28s linear infinite;
    z-index: 2;
}

#jupiter {
    position: absolute;
    top: 170px;
    left: 19px;
    height: 80px;
    width: 80px;
    border-radius: 100%;
    background: radial-gradient(circle at 5px 10px, #dda600, #bf7900);
    transition: transform .2s;
}

#jupiter:hover {
  transform: scale(1.5);
}

#saturn-orbit {
    position: absolute;
    top: -80px;
    left: 200px;
    width: 1100px;
    height: 1100px;
    border: 2px #4A437F dashed;
    border-radius: 100%;
    -webkit-animation: spin-right 5s linear infinite;
    animation: spin-right 28s linear infinite;
    z-index: 1;
}

#saturn {
    position: absolute;
    top: 290px;
    left: 10px;
    height: 65px;
    width: 65px;
    border-radius: 100%;
    background: radial-gradient(circle at 5px 10px, #baa071, #ead6b2);
    transition: transform .2s;
}

/* #saturn-ring {
  position: fixed;
  top: 150px;
  left: 50px;
  width: 110px;
  height: 30px;
  border: 4px #876220 solid;
  border-radius: 100%;
  -webkit-animation: spin-right 0s linear infinite;
  animation: spin-right 0s linear infinite;
  z-index: 0;
} */

#saturn:hover {
  transform: scale(1.5);
}

#jupiter-orbit {
    position: absolute;
    top: -300px;
    left: 0px;
    width: 1500px;
    height: 1500px;
    border: 2px #4A437F dashed;
    border-radius: 100%;
    -webkit-animation: spin-right 5s linear infinite;
    animation: spin-right 28s linear infinite;
    z-index: 2;
}

#jupiter {
    position: absolute;
    top: 170px;
    left: 19px;
    height: 80px;
    width: 80px;
    border-radius: 100%;
    background: radial-gradient(circle at 5px 10px, #dda600, #bf7900);
    transition: transform .2s;
}

#jupiter:hover {
  transform: scale(1.5);
}

@-webkit-keyframes spin-right {
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

</style>
