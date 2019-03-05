<template lang="html">
  <div id="flex-box">
    <h1>Congratulations!</h1>
    <h3>Your Space Training is complete</h3>

    <button v-on:click="goHome" type="button" name="buttonHome"> <<< Ready for launch</button>
  </div>
</template>

<script>
import { eventBus } from "../main.js"

export default {
  name: "completed-quiz",
  methods: {
    goHome(){
      eventBus.$emit("return-home", (event))
    }
  }
}
</script>

<style lang="css" scoped>

#flex-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 130px;
}

h1 {
  color: white;
  font-family: 'ZCOOL QingKe HuangYou', cursive;
  font-size: 80px;
  padding: 20px;
  margin: 10px;
}

h3 {
  color: orange;
  font-family: 'ZCOOL QingKe HuangYou', cursive;
  font-size: 40px;
  padding: 20px;
  margin: 0px;
}

button {
  font-family: 'ZCOOL QingKe HuangYou', cursive;
  color: rgb(98, 135, 193);
  font-size: 30px;
  padding: 20px;
  margin-top: 65px;
}

</style>
