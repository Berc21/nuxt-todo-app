import Vuex from 'vuex'

import axios from 'axios'

axios.defaults.baseURL = 'http://crud.test/api'

const createStore = () => {
  return new Vuex.Store({
    state: {
      list: []
    },
    mutations: {
      getData (state) {
        axios.get('/todos').then( response => {
          state.list = response.data;
        })
      },
      addData (state, data) {
        axios.post('/todos', data).then( response => {

          state.list.push(response.data)
          console.log(response);
        })
      },
      removeData(state, id) {
        axios.delete('/todos/' + id).then( response => {

          let index = state.list.map(item => item.id).indexOf(id) // find index of your object
         state.list.splice(index, 1)
          console.log(response);
        })
      }
    }
  })
}

export default createStore
