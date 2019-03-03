<template lang="html">
  <div id="quiz">
    <draggable v-model="quizValues" @start="drag=true" @end="drag=false">
      <div v-for="value in quizValues" :key="value.id">
        {{ value.name }}
      </div>
    </draggable>
    <p>{{ quizPlanet.name }}</p>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'planet-quiz',
  props: ['quizPlanet'],
  data(){
    return{
      quizValues: [
        "7 moons",
        "blizzard"
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
