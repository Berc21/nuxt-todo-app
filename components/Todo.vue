<template>
<div>
  <ul class="list">
    <li v-for="item in list" :key="item.id"> {{item.title}} <span class="delete" @click="removeData(item.id)" >&#10006;</span> </li>
  </ul>


</div>
</template>

<style>

.list {
  list-style-type: none;
}
.list li {
   margin-bottom: 1rem;
   background: orange;
   padding: 1rem 2rem;
   border-radius: 1rem;
   position: relative;
   font-size: 1.5rem;
   font-weight: bold;
}

.delete {
  position: absolute;
  right: 12px;
  cursor: pointer;
}
</style>

<script>
export default {
  computed: {
    list() {
      return this.$store.state.list;
    }
  },
  created() {
    this.$store.commit('getData');
  },
  methods: {
     removeData(id) {
      this.$store.commit('removeData', id)
    }
  }
}
</script>
