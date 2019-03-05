<template lang="html">
  <div id="quiz">
    <h4>{{ quizPlanet.name }}</h4>
    <v-list class="list">
      <draggable
        v-model="answers"
        handle=".handle"
        v-on:start="drag=true"
        v-on:end="drag=false"
        :group="{ name: 'answers', pull: 'clone', put: false }"
        :move="returningAnswer">
          <v-card v-for="(answer, index) in answers" :key="index">
          <v-card-title>
            <div id="answer">{{ answer }}</div>
          </v-card-title>
        </v-card>
      </draggable>
    </v-list>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import { eventBus } from '../main.js'

export default {
  name: 'planet-quiz',
  props: ['quizPlanet', 'planetAnswers'],
  data(){
    return{
      answers: ["answer 1"]
    }
  },
  mounted() {
    eventBus.$on('moving-answer', (answer) => {
      this.answers.push(answer)
    });
    eventBus.$on('answer-returned', (answer) => {
      this.answerReturned(answer)
    });
  },
  components: {
    draggable
  },
  methods: {
    returningAnswer(answer, index) {
      eventBus.$emit('returning-answer', answer)
    },
    answerReturned(answer){
      const index = this.answers.indexOf(answer)
      this.answers.splice(index, 1)
    },
    newAnswer(answer) {
      this.answers.push(answer)
      eventBus.$emit('answer-selected', answer);
    }
  }
}
</script>

<style lang="css" scoped>

/* #answer {
  border: 1px solid black;
} */
</style>
