<template>
<section class="container">
  <div>
    <Todo/>

    <input class="input" @keyup.enter="addTodo" type="text" v-model="input" placeholder="add todo item">

  </div>
</section>
</template>

<script>
import Todo from '@/components/Todo'

export default {
  components: {
    Todo
  },
  data() {
    return {
      input: '',
    }
  },
  computed: {
    list() {
      return this.$store.state.list;
    }
  },
  methods: {
    addTodo() {
      const data = {
          'title': this.input,
          'completed': false
       }
        this.$store.commit('addData', data);

        this.input = '';
    }
  },
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.input 				{
  font-size:18px;
  padding:10px 10px 10px 5px;
  display:block;
  width:300px;
  border:none;
  border-bottom:1px solid #757575;
  margin-top: 2rem;
}
.input:focus 		{ outline:none; }
</style>
