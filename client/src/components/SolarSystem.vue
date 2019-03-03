<template lang="html">
  <div id="planetIndex" >
    <h1>Solar System</h1>
      <div id="sun-rotate" v-on:click="handleClick(0)" >
        <div id="sun">
        </div>
      </div>
      <div id="mercury-orbit" v-on:click="handleClick(1)" >
        <div id="mercury">
        </div>
      </div>
      <div id="venus-orbit" v-on:click="handleClick(2)" >
        <div id="venus">
        </div>
      </div>
      <div id="earth-orbit" v-on:click="handleClick(3)" >
        <div id="earth">
        </div>
      </div>
      <div id="mars-orbit" v-on:click="handleClick(4)" >
        <div id="mars">
        </div>
      </div>
      <div id="jupiter-orbit" v-on:click="handleClick(5)" >
        <div id="jupiter">
        </div>
      </div>
      <div id="saturn-orbit" v-on:click="handleClick(6)" >
        <div id="saturn-ring">
        </div>
        <div id="saturn">
        </div>
      </div>
      <div id="uranus-orbit" v-on:click="handleClick(7)" >
        <div id="uranus">
        </div>
      </div>
      <div id="neptune-orbit" v-on:click="handleClick(8)" >
        <div id="neptune">
        </div>
      </div>
      <div id="pluto-orbit" v-on:click="handleClick(9)" >
        <div id="pluto">
        </div>
      </div>
      <div id="cosmos">
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

h1 {
  color: white;
}

#planetIndex {
  align-items: center;
}


#sun-rotate {
  position: absolute;
  top: 210px;
  left: 665px;
}

#sun {
  position: absolute;
  top: 45px;
  left: -7px;
  height: 60px;
  width: 60px;
  border-radius: 100%;
  background: radial-gradient(circle at 50% 50%, #ffd000, #ff6702);
  transition: transform .2s;
  z-index: 9;
}

#sun:hover {
  transform: scale(1.2);
}


#mercury-orbit {
    position: absolute;
    top: 230px;
    left: 630px;
    width: 110px;
    height: 110px;
    border: 2px #a09b9b dashed;
    border-radius: 100%;
    -webkit-animation: spin-right 10s linear infinite;
    animation: spin-right 14s linear infinite;
    z-index: 8;
}
#mercury {
  position: absolute;
  top: 45px;
  left: -7px;
  height: 12px;
  width: 12px;
  border-radius: 100%;
  background: radial-gradient(circle at 50% 50%, #ffe526, #e29b28);
  transition: transform .2s;
}

#mercury:hover {
  transform: scale(1.8);
}

#venus-orbit {
    position: absolute;
    top: 200px;
    left: 603px;
    width: 160px;
    height: 160px;
    border: 2px #a09b9b dashed;
    border-radius: 100%;
    -webkit-animation: spin-right 5s linear infinite;
    animation: spin-right 18s linear infinite;
    z-index: 7;
}

#venus {
    position: absolute;
    top: 80px;
    left: -13px;
    height: 23px;
    width: 23px;
    border-radius: 100%;
    background: radial-gradient(circle at 50% 50%, #ffa11e, #f76516);
    transition: transform .2s;
}

#venus:hover {
  transform: scale(1.5);
}

#earth-orbit {
    position: absolute;
    top: 162px;
    left: 555px;
    width: 250px;
    height: 250px;
    border: 2px #a09b9b dashed;
    border-radius: 100%;
    -webkit-animation: spin-right 5s linear infinite;
    animation: spin-right 24s linear infinite;
    z-index: 6;
}


#earth {
    position: absolute;
    top: 150px;
    left: -5px;
    height: 25px;
    width: 25px;
    border-radius: 100%;
    background: radial-gradient(circle at 50% 50%, #69b1f4, #00ad62);
    transition: transform .2s;
}

#earth:hover {
  transform: scale(1.5);
}

#mars-orbit {
    position: absolute;
    top: 100px;
    left: 500px;
    width: 350px;
    height: 350px;
    border: 2px #a09b9b dashed;
    border-radius: 100%;
    -webkit-animation: spin-right 5s linear infinite;
    animation: spin-right 40s linear infinite;
    z-index: 5;
}

#mars {
    position: absolute;
    top: 150px;
    left: -10px;
    height: 19px;
    width: 19px;
    border-radius: 100%;
    background: radial-gradient(circle at 50% 50%, #dda600, #bf7900);
    transition: transform .2s;
}

#mars:hover {
  transform: scale(1.5);
}

#jupiter-orbit {
    position: absolute;
    top: 50px;
    left: 460px;
    width: 450px;
    height: 450px;
    border: 2px #a09b9b dashed;
    border-radius: 100%;
    -webkit-animation: spin-right 5s linear infinite;
    animation: spin-right 66s linear infinite;
    z-index: 4;
}

#jupiter {
    position: absolute;
    top: 170px;
    left: -18px;
    height: 40px;
    width: 40px;
    border-radius: 100%;
    background: radial-gradient(circle at 50% 50%, #876e00, #bf7900);
    transition: transform .2s;
}

#jupiter:hover {
  transform: scale(1.5);
}

#saturn-orbit {
    position: absolute;
    top: -10px;
    left: 400px;
    width: 550px;
    height: 550px;
    border: 2px #a09b9b dashed;
    border-radius: 100%;
    -webkit-animation: spin-right 5s linear infinite;
    animation: spin-right 69s linear infinite;
    z-index: 3;
}

#saturn {
    position: absolute;
    top: 290px;
    left: -15px;
    height: 33px;
    width: 33px;
    border-radius: 100%;
    background: radial-gradient(circle at 5px 10px, #baa071, #ffdf54);
    transition: transform .2s;
}

#saturn-ring {
  position: absolute;
  top: 290px;
  left: -28px;
  width: 60px;
  height: 30px;
  border: 4px #876220 solid;
  border-radius: 100%;
  -webkit-animation: spin-right 5s linear infinite;
  animation: spin-right 69s linear infinite;
}

#saturn:hover {
  transform: scale(1.5);
}

#uranus-orbit {
    position: absolute;
    top: -100px;
    left: 300px;
    width: 750px;
    height: 750px;
    border: 2px #a09b9b dashed;
    border-radius: 100%;
    -webkit-animation: spin-right 5s linear infinite;
    animation: spin-right 73s linear infinite;
    z-index: 2;
}

#uranus {
    position: absolute;
    top: 170px;
    left: 28px;
    height: 40px;
    width: 40px;
    border-radius: 100%;
    background: radial-gradient(circle at 50% 50%, #7050fc, #48cec7);
    transition: transform .2s;
}

#uranus:hover {
  transform: scale(1.5);
}

#neptune-orbit {
    position: absolute;
    top: -170px;
    left: 250px;
    width: 900px;
    height: 900px;
    border: 2px #a09b9b dashed;
    border-radius: 100%;
    -webkit-animation: spin-right 5s linear infinite;
    animation: spin-right 80s linear infinite;
    z-index: 1;
}

#neptune {
    position: absolute;
    top: 170px;
    left: 60px;
    height: 40px;
    width: 40px;
    border-radius: 100%;
    background: radial-gradient(circle at 50% 50%, #df65f7, #8c51c6);
    transition: transform .2s;
}

#neptune:hover {
  transform: scale(1.5);
}

#pluto-orbit {
    position: absolute;
    top: -245px;
    left: 160px;
    width: 1100px;
    height: 1100px;
    border: 2px #a09b9b dashed;
    border-radius: 100%;
    -webkit-animation: spin-right 5s linear infinite;
    animation: spin-right 85s linear infinite;
    z-index: 0;
}

#pluto {
    position: absolute;
    top: 170px;
    left: 135px;
    height: 15px;
    width: 15px;
    border-radius: 100%;
    background: radial-gradient(circle at 50% 50%, #e5e1da, #d0b6f9);
    transition: transform .2s;
}

#pluto:hover {
  transform: scale(1.9);
}

#cosmos {
  background-size: 100%;
  background-image: url('../assets/Galaxy.jpg');
  position: fixed;
  height: auto;
  width: auto;
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
