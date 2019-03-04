<template>
  <div class="row">
    <div class="col-3">
      <h3>Pick 4 answers</h3>
      <draggable class="list-group" :list="rootAnswers" group="answers" @change="log">
        <div
          class="list-group-item"
          v-for="(answer, index) in rootAnswers"
          :key="`${answer.value}${answer.state}`">
          {{ answer.value }} : {{ answer.state }}
        </div>
      </draggable>
    </div>

    <div class="col-3">
      <h3>Place Here</h3>
      <draggable class="list-group" :list="targetAnswers" group="answers" @change="log">
        <v-card
          class="list-group-item"
          v-for="(answer, index) in targetAnswers"
          :key="`${answer.value}${answer.state}`">
          <v-card-title>{{ answer.value }} : {{ answer.state }}</v-card-title>
        </v-card>
      </draggable>
      <img :src="quizPlanet.image" :alt="quizPlanet.name">
    </div>

    <div class="col-3" :value="rootAnswers" name="rootAnswers"></div>

    <div class="col-3" :value="targetAnswers" name="targetAnswers"></div>

  </div>
</template>
<script>
import draggable from "vuedraggable";
import { eventBus } from "../main.js"

export default {
  name: "quiz",
  display: "Two Lists",
  props: ["quizPlanet", "quizAnswers", "randomAnswers", "planetAnswers"],
  order: 1,
  components: {
    draggable
  },
  data() {
    return {
      rootAnswers: [],
      targetAnswers: []
    };
  },
  mounted(){
    this.compAnswers()
  },
  methods: {
    compAnswers(){
      this.rootAnswers = this.quizAnswers
    },
    add() {
      this.list.push({ name: "Juan" });
    },
    replace() {
      this.list = [{ name: "Edgard" }];
    },
    clone(el) {
      return {
        name: el.name + " cloned"
      };
    },
    log(evt) {
      window.console.log(evt);
      if(this.evaluate(evt.added.element)){
      }

    },
    evaluate(newAnswer){
      this.planetAnswers.find((answer) => {
        return newAnswer.value === answer.value
        debugger;
        newAnswer["state"] = true
      })
    }
  }
};
</script>

<style lang="css" scoped>

img {
  height: 20px;
}

</style>
