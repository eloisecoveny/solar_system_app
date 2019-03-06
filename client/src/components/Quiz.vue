<template>
  <div id="quiz-wrapper">

    <div id="quiz">

    <div id="flex">
      <h3>What planet is this?</h3>
      <img :src="quizPlanet.image" :alt="quizPlanet.name">
    </div>

    <div id="target-answers">
      <h3>Drop your answers here</h3>
      <draggable class="list-group" :list="targetAnswers" group="answers" v-on:change="log">
        <v-card
          id="list-group-item"
          :class="{ correct: answer.state, incorrect: !answer.state }"
          v-for="(answer, index) in targetAnswers"
          :key="`${answer.value}${answer.state}`">
          <v-card-title>{{ answer.value }}</v-card-title>
        </v-card>
      </draggable>
    </div>

    <div id="root-answers">
      <h3>Guess which four are correct</h3>
      <draggable class="list-group" :list="rootAnswers" group="answers" v-on:change="log">
        <v-card
          id="list-group-item"
          v-for="(answer, index) in rootAnswers"
          :key="`${answer.value}${answer.state}`">
          <v-card-title>{{ answer.value }}</v-card-title>
        </v-card>
      </draggable>
    </div>

    <div class="col-3" :value="rootAnswers" name="rootAnswers"></div>

    <div class="col-3" :value="targetAnswers" name="targetAnswers"></div>

    </div>
    <div id="button">
      <button v-if="nextQuizBtn" v-on:click="nextQuiz" type="button" name="next-quiz">Continue Space Training >>></button>
    </div>

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
  flex-wrap: wrap;
  height: 38rem;
}

#root-answers, #target-answers {
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 10px;
  padding: 15px;
  width: 25%;
}

#list-group-item.v-card {
  border-radius: 10px;
  cursor: move;
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
}

#list-group-item.v-card:active {
  cursor: grabbing;
  cursor: -moz-grabbing;
  cursor: -webkit-grabbing;
  background-color: orange;
}

#flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 27px;
  margin-left: 30px;
}

div.v-card__title {
  margin: 5px;
  padding: 15px;
  /* border-radius: 50px; */
  font-family: 'Mukta', sans-serif;
}

img {
  height: 200px;
  margin-top: 20px;
}

h3 {
  font-family: 'ZCOOL QingKe HuangYou', cursive;
  color: rgb(98, 135, 193);
  font-size: 40px;
}

button {
  color: white;
  font-family: 'ZCOOL QingKe HuangYou', cursive;
  font-size: 40px;
}

#button {
  display: flex;
  justify-content: flex-end;
  margin-right: 40px;
}

.correct {
  background-color: rgb(47, 124, 59);
}

.incorrect {
  background-color: rgb(142, 31, 49);
}

.list-group {
  margin-top: 20px;
}

</style>
