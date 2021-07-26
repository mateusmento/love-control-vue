<template>
  <input-field v-model="text" @click="() => text">
    <template #prepend>
      <img alt="Vue logo" src="./assets/logo.png"/>
    </template>

    <template #append>
      <button>Send</button>
    </template>
  </input-field>

  {{selectedComments}}

  <ul class="comments" v-selection:multiple="selectedComments" ref="items">
    <li v-for="(comment, i) in comments.slice(0, -1)" :key="comment.id" v-selectable="comment">
      {{i+1}}. {{comment.email}}
    </li>

    <li v-for="comment in comments.slice(-1)" :key="comment.id" v-selectable="comment" v-intersection="appendNextCommentsPage">
      {{comments.length}} {{comment.email}}
    </li>
  </ul>

  <button class="outside" v-outside:click.btn3.items="log">Button 1</button>
  <button class="outside" ref="btn2">Button 2</button>
  <button class="outside" ref="btn3">Button 3</button>
  <button class="outside">Button 4</button>
</template>

<script>
import InputField from './components/InputField.vue'
import { comments } from './data/comments.js';
import { outside } from './directives/outside';
import { intersection } from './directives/intersection';
import { selection, selectable } from './directives/selection';
import { ref } from '@vue/reactivity';

export default {
  components: { InputField },
  name: 'App',
  directives: { outside, intersection, selection, selectable },
  data() {
    return {
      text: 'Hello',
      pageIndex: 1,
      pageSize: 20,
      comments: [],
    };
  },
  setup() {
    let selectedComments = ref([]);

    return {
      selectedComments,
    };
  },
  mounted() {
    this.comments = this.fetchComments();
  },
  methods: {
    log(e) {
      console.log(e);
    },
    appendNextCommentsPage() {
      this.comments = [...this.comments, ...this.fetchComments(++this.pageIndex)];
    },
    fetchComments(pageIndex = 1) {
      let start = (pageIndex-1) * this.pageSize;
      let end = start + this.pageSize;
      let results = comments.slice(start, end);
      return results;
      // return new Promise((res) => setTimeout(() => res(results), 500));
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
body {
  background: #ddd;
  margin: 0;
}
</style>

<style scoped>
.input-field {
  margin: auto;
}

img {
  display: block;
  height: 30px;
  padding: 5px;
  outline: none;
  box-sizing: border-box;
}

button {
  display: block;
  border: none;
  background-color: aquamarine;
  color: white;
  height: 100%;
}

.comments {
  margin: auto;
  margin-top: 300px;
  width: 340px;
  height: 300px;
  overflow-y: scroll;
  border: 1px solid grey;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  background: white;
}

ul {
  padding: 0;
  margin: 0;
}

li {
  display: block;
  padding: 10px 15px;
}

li:not(:last-of-type) {
  border-bottom: 1px solid grey;
}

button.outside {
  margin-bottom: 20px;
  padding: 10px;
}
</style>
