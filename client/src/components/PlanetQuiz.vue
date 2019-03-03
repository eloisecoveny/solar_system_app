<template lang="html">
  <div id="quiz">
    <h4>{{ quizPlanet.name }}</h4>
        <v-container grid-list-md>
            <v-layout row wrap>
                <v-flex md6 v-for="(value, key) in answerFields">
                    <v-card class="ma-2 pa-2">
                        <draggable :id="key" v-model="answers" :options="{group:'answers'}" @start="drag=true"
                            @end="drag=false" @add="newRecipe">
                            <v-card-title class="headline">
                                {{ capLetter(key) }}
                            </v-card-title>
                        </draggable>
                        <v-card v-for="answer in value">
                            <v-card-title class="headline">
                                {{ answer[0] }}
                            </v-card-title>
                        </v-card>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>


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
import { eventBus } from '../main.js'

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
