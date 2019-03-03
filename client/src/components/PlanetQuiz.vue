<template lang="html">
  <div id="quiz">
    <p>{{ quizPlanet.name }}</p>
    <draggable v-model="answerFields">
      <transition-group>
        <div v-for="value in answerFields" :key="value.id">
          {{ value }}
        </div>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'planet-quiz',
  props: ['quizPlanet'],
  data(){
    return{
      answerFields: [
      ]
    }
  },
  components: {
    draggable
  },
  computed: {
    evaluate(){

    }
  }
}
</script>

<style lang="css" scoped>
</style>
