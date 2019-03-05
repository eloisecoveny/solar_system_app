<template lang="html">
  <div class="">
    <h1>Congratulations!</h1>

    <button v-on:click="goHome" type="button" name="buttonHome">Home</button>
  </div>
</template>

<script>
export default {
  name: "completed-quiz",
  methods: {
    goHome(){
      eventBus.$emit("return-home", (event))
    }
  }
}
</script>

<style lang="css" scoped>

h1 {
  color: white;
}

</style>
