<template lang="html">
  <div>
    <h4>Answers</h4>
    <v-list class="list">
      <draggable v-model="remAnswers" @start="drag=true" @end="drag=false" :move="answerSelected">
        <v-card v-for="(answer, index) in remAnswers"
        :key="index">
          <v-card-title>
            <div id="answer">{{ answer }}</div>
          </v-card-title>
        </v-card>
      </draggable>
    </v-list>
  </div>
</template>

<script>
import { eventBus } from '../main.js'
import draggable from 'vuedraggable'

export default {
  name: "quiz-answers",
  props: ["quizAnswers"],
  data(){
    return {
      targetAnswer: "",
      targetAnswerIndex: null,
      remAnswers: []
    }
  },
  computed: {
  },
  components: {
    draggable
  },
  mounted(){
    this.compAnswers()

    eventBus.$on('answer-selected', answer => {
      this.remAnswers.splice(targetAnswerIndex, 1)
    });

    eventBus.$on('returning-answer', answer => {
      this.remAnswers.push(answer)
    });
  },
  methods: {
    compAnswers(){
      this.remAnswers = this.quizAnswers
    },
    answerSelected(event, originalEvent){
      console.log(event);
      console.log(originalEvent);
      this.targetAnswer = event.draggedContext.element
      this.targetAnswerIndex = event.draggedContext.index
      // eventBus.$emit('moving-answer', this.targetAnswer);
    },
    newAnswer(answer){
      this.answers.push(answer)
      // eventBus.$emit('answer-returned', answer);
    }
  }
}
</script>

<style lang="css" scoped>

#answer {
  border: 1px solid black;
}

</style>
