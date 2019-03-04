<template>
  <div class="row">
    <div class="col-3">
      <h3>Draggable 1</h3>
      <draggable class="list-group" :list="rootAnswers" group="answers" @change="log">
        <div
          class="list-group-item"
          v-for="(answer, index) in rootAnswers"
          :key="answer">
          {{ answer }}
        </div>
      </draggable>
    </div>

    <div class="col-3">
      <h3>Draggable 2</h3>
      <draggable class="list-group" :list="targetAnswers" group="answers" @change="log">
        <div
          class="list-group-item"
          v-for="(answer, index) in targetAnswers"
          :key="answer"
        >
          {{ answer }} {{ index }}
        </div>
      </draggable>
    </div>

    <div class="col-3" :value="rootAnswers" name="List 1"></div>

    <div class="col-3" :value="targetAnswers" name="List 2"></div>

  </div>
</template>
<script>
import draggable from "vuedraggable";
import { eventBus } from "../main.js"

export default {
  name: "quiz",
  display: "Two Lists",
  props: ["quizPlanet", "quizAnswers", "randomAnswers", "planetAnswers"],
  order: 1,
  components: {
    draggable
  },
  data() {
    return {
      rootAnswers: [],
      targetAnswers: []
    };
  },
  mounted(){
    this.compAnswers()
  },
  methods: {
    compAnswers(){
      this.rootAnswers = this.quizAnswers
    },
    add() {
      this.list.push({ name: "Juan" });
    },
    replace() {
      this.list = [{ name: "Edgard" }];
    },
    clone(el) {
      return {
        name: el.name + " cloned"
      };
    },
    log(evt) {
      window.console.log(evt);
    }
  }
};
</script>
