import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    correctTodosId: 100,
    todos: [
      {
          todoTotle: 'For home',
          colorScheme: '',
          id: 0,
          tasks: [
              {
                  mark: false,
                  taskTitle: 'Learn Vue',
                  deadline: '19.02.2019',
                  url: '',
                  id: 11
              },                            
              {
                  mark: false,
                  taskTitle: 'Learn Vuex',
                  deadline: '19.02.2019',
                  url: '',
                  id: 12
              },                            
              {
                  mark: false,
                  taskTitle: 'Learn vuetify',
                  deadline: '19.02.2019',
                  url: '',
                  id: 13
              }
          ]
      }
    ]
  },
  mutations: {

  },
  actions: {

  }
})
