<template lang="html">
  <div id="quiz">
    <p>{{ quizPlanet.name }}</p>
  </div>
</template>

<script>
export default {
  name: 'planet-quiz',
  props: ['quizPlanet'],
  data(){
    return{
    }
  },
  computed: {
    evaluate(){

    }
  }
}
</script>

<style lang="css" scoped>
</style>
