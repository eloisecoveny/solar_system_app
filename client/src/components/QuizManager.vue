<template lang="html">
  <div id="quiz-index">
    <h1>You're ready to take the test on:</h1>
    {{ generateAnswers }}
    <p>{{ quizPlanet.name }}</p>
      <quiz
        :quizAnswers="quizAnswers"
        :quizPlanet="quizPlanet"
        :randomAnswers="randomAnswers" :planetAnswers="planetAnswers"></quiz>
    <button v-on:click="goHome(quizPlanet._id)" type="button" name="buttonHome">Home</button>
  </div>

</template>

<script>
import Quiz from './Quiz.vue'
import { eventBus } from '../main.js'

export default {
  name: "quiz-manager",
  props: ["shuffledPlanets", "quizPlanet", "quizPlanetIndex"],
  data(){
    return{
      planetAnswers: [],
      randomAnswers: [],
      quizAnswers: [],
      reserves: []
    }
  },
  components: {
    Quiz
  },
  // watch: {
    // planetAnswers(){
    //   this.reserves = []
    // }
  // },
  computed: {
    generateAnswers(){
      const answers = Object.values(this.quizPlanet.quizFacts)
      answers.sort((a, b) => 0.5 - Math.random())
      answers.splice(3, (answers.length - 3))
      answers.push(this.quizPlanet.name)
      this.planetAnswers = answers
      this.generateRandom()
      this.compileQuizAnswers()
    }
  },
  methods: {
    goHome(id){
      eventBus.$emit("go-home", id)
    },
    generateRandom(){
      const allValues = this.shuffledPlanets.map((planet) => {
        return Object.values(planet.quizFacts)
      });
      allValues.push(this.shuffledPlanets.map(planet => planet.name))
      const singleArr = allValues.reduce((a, b) => a.concat(b), []);
      singleArr.sort((a, b) => 0.5 - Math.random())
      this.reserves = singleArr.slice(0, 10)
      this.randomAnswers = singleArr.slice(0, 6)
    },
    compileQuizAnswers(){
       const answers = this.planetAnswers.concat(this.randomAnswers);
       answers.sort((a, b) => 0.5 - Math.random());
       this.remDuplicates(answers)
    },
    remDuplicates(array){
      const uniq = this.returnUniq(array)
      if(uniq.length < 10){
        uniq.push(this.reserves[0])
        this.remDuplicates(uniq)
      } else {
        const objects = uniq.map(answer => {
          let obj = {}
          obj["value"] = answer
          obj["state"] = false
          return obj
        })
        this.quizAnswers = objects
      };
    },
    returnUniq(array){
      // return [...new Set(array.map(answer => answer))];
      let results = [];
      array.forEach(answer => {
        if (!results.includes(answer)){
          results.push(answer)
        }});
      return results;
    }
  }
}
</script>

<style lang="css" scoped>
</style>
