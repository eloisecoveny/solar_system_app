<template>
  <div id="quiz">

    <div id="root-answers">
      <h3>Pick 4 answers</h3>
      <draggable class="list-group" :list="rootAnswers" group="answers" v-on:change="log">
        <v-card
          class="list-group-item"
          v-for="(answer, index) in rootAnswers"
          :key="`${answer.value}${answer.state}`">
          <v-card-title>{{ answer.value }} : {{ answer.state }}</v-card-title>
        </v-card>
      </draggable>
    </div>

    <div id="target-answers">
      <h3>Place Here</h3>
      <draggable class="list-group" :list="targetAnswers" group="answers" v-on:change="log">
        <v-card
          class="list-group-item"
          v-for="(answer, index) in targetAnswers"
          :key="`${answer.value}${answer.state}`">
          <v-card-title>{{ answer.value }} : {{ answer.state }}</v-card-title>
        </v-card>
      </draggable>
    </div>

    <img :src="quizPlanet.image" :alt="quizPlanet.name">

    <div class="col-3" :value="rootAnswers" name="rootAnswers"></div>

    <div class="col-3" :value="targetAnswers" name="targetAnswers"></div>

    <button v-if="nextQuizBtn" v-on:click="nextQuiz" type="button" name="next-quiz">Next Quiz</button>

  </div>
</template>
<script>
import draggable from "vuedraggable";
import { eventBus } from "../main.js";
import { deepEqual } from "../lib/DeepEqual.js"

export default {
  name: "quiz",
  display: "Two Lists",
  props: ["quizPlanet", "quizAnswers", "randomAnswers", "planetAnswers", "quizPlanetIndex"],
  order: 1,
  components: {
    draggable
  },
  data() {
    return {
      rootAnswers: [],
      targetAnswers: [],
      nextQuizBtn: false
    };
  },
  watch: {
    quizAnswers: function(newQuizAnswers, oldQuizAnswers){
      if(!deepEqual(newQuizAnswers, oldQuizAnswers)){
        this.targetAnswers = []
      }
      this.nextQuizBtn = false
      this.rootAnswers = []
      this.compAnswers()
      // if(newQuizAnswers !== oldQuizAnswers){
        // this.targetAnswers = []
      // }
    }
  },
  mounted(){
    this.compAnswers()
  },
  methods: {
    compAnswers(){
      this.rootAnswers = this.quizAnswers
    },
    log(evt) {
      if(evt.added){
        window.console.log(evt);
        this.evaluate(evt.added.element);
        if(this.targetAnswers.length === 4){
          if(this.targetAnswers.every(answer => {
            return answer.state === true
          })){
            this.nextQuizBtn = true
          }
        }
      }
    },
    evaluate(newAnswer){
      let score = (this.planetAnswers.includes(newAnswer.value))
      return newAnswer.state = score
    },
    nextQuiz(){
      // console.log("On to the next quiz!");
      eventBus.$emit("next-quiz", (event))
    }
  }
};
</script>

<style lang="css" scoped>

#quiz {
  display: flex;
  justify-content: space-around;
  margin: 0;
}

#root-answers, #target-answers {
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 30px;
  padding: 20px;
  width: 25%;
  radius: 10%;
}

div.v-card__title {
  margin: 5px;
}

img {
  height: 150px;
}

h3 {
  color: white;
}

button {
  color: white;
}


</style>
