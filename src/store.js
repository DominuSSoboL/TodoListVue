import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
                  id: 1111
              },                            
              {
                  mark: false,
                  taskTitle: 'Learn Vuex',
                  deadline: '19.02.2019',
                  url: '',
                  id: 121111
              },                            
              {
                  mark: false,
                  taskTitle: 'Learn vuetify',
                  deadline: '19.02.2019',
                  url: '',
                  id: 13111
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
