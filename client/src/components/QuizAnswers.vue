<template lang="html">
  <div>
    <h4>Answers</h4>
    <v-list class="list">
        <div v-for="(answer, index) in quizAnswers">
        <draggable :id="index" v-model="quizAnswers" :options="{group: { name:'quizAnswers', pull:'clone', put:'false'}}" @start="drag=true"
            @end="drag=false" :move="chooseAnswer">

            <v-card class="ma-2 pa-2">
            <v-card-title>
                <div class="headline">{{ answer }}</div>
            </v-card-title>
            </v-card>

        </draggable>
        </div>
    </v-list>
</div>

</template>

<script>
import { eventBus } from '../main.js'
import draggable from 'vuedraggable'

export default {
  name: "quiz-answers",
  props: ["quizAnswers", "quizPlanet"],
  data(){
    return {
      targetAnswer: null,
      targetField: null
    }
  },
  components: {
    draggable
  },
  created(){
    eventBus.$on('correctAnswerSelected', planet => {
      this.targetDay = day
      // console.log('daySelected ' + this.targetRecipe)
      this.sendAnswer(this.targetRecipe);
    });
  },
  methods: {
    chooseAnswer(event){
      // console.log('chooseRecipe ' + event.from.id);
      this.targetAnswer = event.from.id;
    },
    sendAnswer(id){
      // console.log('id ' + id)
      const myAnswer = this.quizPlanetAnswers.filter((answer) => {
        return answer.id == id;
      });
      const recipeData = {
        day: this.targetField,
        recipe: myAnswer
      }
      eventBus.$emit('sendingAnswer', recipeData);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
