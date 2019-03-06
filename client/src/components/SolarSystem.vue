<template lang="html">
<div id="cosmos-wrapper">

  <div id="title">
    <h1>Explore our Solar System</h1>
  </div>

    <div id="planetIndex">
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
        <div id="moon-orbit">
          <div id="earth-moon">
            </div>
          </div>
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

#title {
  width: 50px;
  color: white;
  transition: transform .2s;
  margin-top: -140px;
  margin-left: 50px;
  float: left;
  transform: rotate3d(0, 0, 0, -53deg);
  font-size: 30px;
  font-family: 'ZCOOL QingKe HuangYou', cursive;
  /* transform: rotate(-90deg); */
}
/*
h1:hover {
  transform: scale(1.4);
} */


#planetIndex {
  align-items: center;
  margin-top: 100px;
  width: 500px;
  height: 500px;
  transform: rotate3d(1, 0, 0, 46deg);
  display: flex;
  justify-content: center;
}


#sun-rotate {
  position: absolute;
  top: 210px;
  left: 665px;
}

#sun {
  position: absolute;
  top: 36px;
  left: -26px;
  height: 80px;
  width: 93px;
  border-radius: 100%;
  background: radial-gradient(circle at 50% 50%, #ffd000, #ff6702);
  transition: transform .2s;
  z-index: 9;
  transform: rotate3d(0, 1, 0, -53deg);
  cursor: pointer;
}

#sun:hover {
  transform: scale(1.2) rotate3d(0, 1, 0, -53deg);
}


#mercury-orbit {
    position: absolute;
    top: 230px;
    left: 630px;
    width: 110px;
    height: 110px;
    border: 2px #a09b9b solid;
    border-radius: 100%;
    -webkit-animation: spin-left 10s linear infinite;
    animation: spin-left 12s linear infinite;
    z-index: 8;
}

#mercury {
  position: absolute;
  top: 45px;
  left: -7px;
  height: 15px;
  width: 15px;
  border-radius: 100%;
  background: radial-gradient(circle at 50% 50%, #ffe526, #e29b28);
  transition: transform .2s;
  cursor: pointer;
}

#mercury:hover {
  transform: scale(1.8);
}

#venus-orbit {
    position: absolute;
    top: 200px;
    left: 603px;
    width: 165px;
    height: 173px;
    border: 2px #a09b9b dashed;
    border-radius: 100%;
    -webkit-animation: spin-left 5s linear infinite;
    animation: spin-left 20s linear infinite;
    z-index: 7;
}

#venus {
    position: absolute;
    top: 80px;
    left: -13px;
    height: 28px;
    width: 28px;
    border-radius: 100%;
    background: radial-gradient(circle at 50% 50%, #ffa11e, #f76516);
    transition: transform .2s;
    cursor: pointer;
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
    border: 2px #a09b9b solid;
    border-radius: 100%;
    -webkit-animation: spin-left 5s linear infinite;
    animation: spin-left 30s linear infinite;
    z-index: 6;
}

#earth {
    position: absolute;
    top: 158px;
    left: -5px;
    height: 31px;
    width: 31px;
    border-radius: 100%;
    background: radial-gradient(circle at 50% 50%, #69b1f4, #00ad62);
    transition: transform .2s;
    cursor: pointer;
}

#earth-moon {
  position: absolute;
  top: 10px;
  left: -2px;
  width: 6.5px;
  height: 6.5px;
  border-radius: 100%;
  background: radial-gradient(circle at 50% 50%, #e8e3e3, #b5b5b5);
  -webkit-animation: spin-left 5s linear infinite;
  animation: spin-left 75s linear infinite;
}

#moon-orbit {
    position: absolute;
    top: 152px;
    left: -15px;
    width: 50px;
    height: 45px;
    border-radius: 100%;
    -webkit-animation: spin-left 5s linear infinite;
    animation: spin-left 6s linear infinite;
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
    -webkit-animation: spin-left 5s linear infinite;
    animation: spin-left 55s linear infinite;
    z-index: 5;
}

#mars {
    position: absolute;
    top: 130px;
    left: -10px;
    height: 23px;
    width: 23px;
    border-radius: 100%;
    background: radial-gradient(circle at 50% 50%, #dd0202, #ff9035);
    transition: transform .2s;
    cursor: pointer;
}

#mars:hover {
  transform: scale(1.5);
}

#jupiter-orbit {
    position: absolute;
    top: 28px;
    left: 428px;
    width: 500px;
    height: 500px;
    border: 2px #a09b9b solid;
    border-radius: 100%;
    -webkit-animation: spin-left 5s linear infinite;
    animation: spin-left 70s linear infinite;
    z-index: 4;
}

#jupiter {
    position: absolute;
    top: 165px;
    left: -18px;
    height: 50px;
    width: 50px;
    border-radius: 100%;
    background: radial-gradient(circle at 50% 50%, #876e00, #bf7900);
    transition: transform .2s;
    cursor: pointer;
}

#jupiter:hover {
  transform: scale(1.5);
}

#saturn-orbit {
    position: absolute;
    top: -50px;
    left: 356px;
    width: 660px;
    height: 660px;
    border: 2px #a09b9b dashed;
    border-radius: 100%;
    -webkit-animation: spin-left 5s linear infinite;
    animation: spin-left 105s linear infinite;
    z-index: 3;
}

#saturn {
    position: absolute;
    top: 247px;
    left: -15px;
    height: 41px;
    width: 41px;
    border-radius: 100%;
    background: radial-gradient(circle at 5px 10px, #baa071, #ffdf54);
    transition: transform .2s;
    cursor: pointer;
}

#saturn-ring {
  position: absolute;
  top: 253px;
  left: -30px;
  width: 70px;
  height: 30px;
  border: 4px #876220 solid;
  border-radius: 100%;
  -webkit-animation: spin-left 5s linear infinite;
  animation: spin-left 105s linear infinite;
}

#saturn:hover {
  transform: scale(1.5);
}

#uranus-orbit {
    position: absolute;
    top: -120px;
    left: 285px;
    width: 800px;
    height: 800px;
    border: 2px #a09b9b solid;
    border-radius: 100%;
    -webkit-animation: spin-left 5s linear infinite;
    animation: spin-left 125s linear infinite;
    z-index: 2;
}

#uranus {
    position: absolute;
    top: 182px;
    left: 23px;
    height: 50px;
    width: 50px;
    border-radius: 100%;
    background: radial-gradient(circle at 50% 50%, #7050fc, #48cec7);
    transition: transform .2s;
    cursor: pointer;
}

#uranus:hover {
  transform: scale(1.5);
}

#neptune-orbit {
    position: absolute;
    top: -185px;
    left: 226px;
    width: 950px;
    height: 950px;
    border: 2px #a09b9b dashed;
    border-radius: 100%;
    -webkit-animation: spin-left 5s linear infinite;
    animation: spin-left 145s linear infinite;
    z-index: 1;
}

#neptune {
    position: absolute;
    top: 160px;
    left: 70px;
    height: 50px;
    width: 50px;
    border-radius: 100%;
    background: radial-gradient(circle at 50% 50%, #df65f7, #8c51c6);
    transition: transform .2s;
    cursor: pointer;
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
    border: 2px #a09b9b solid;
    border-radius: 100%;
    -webkit-animation: spin-left 5s linear infinite;
    animation: spin-left 185s linear infinite;
    z-index: 0;
}

#pluto {
    position: absolute;
    top: 165px;
    left: 135px;
    height: 20px;
    width: 20px;
    border-radius: 100%;
    background: radial-gradient(circle at 50% 50%, #e5e1da, #d0b6f9);
    transition: transform .2s;
    cursor: pointer;
}

#pluto:hover {
  transform: scale(1.9);
}

@-webkit-keyframes spin-left {
  100% {
    -webkit-transform: rotate(-360deg);
    -moz-transform: rotate(-360deg);
    -ms-transform: rotate(-360deg);
    -o-transform: rotate(-360deg);
  }
}

</style>
