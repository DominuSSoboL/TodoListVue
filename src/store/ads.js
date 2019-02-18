export default {
    state: {
        todos: [
            {
                todoTotle: 'For home',
                colorScheme: '',
                id: 0,
                tasks: [
                    {
                        mark: false,
                        taskTitle: '1 - 01',
                        deadline: '19.02.2019',
                        id: '01'
                    },            
                    {
                        mark: false,
                        taskTitle: '1 - 02',
                        deadline: '19.02.2019',
                        id: '02'
                    },                            
                    {
                        mark: false,
                        taskTitle: '1 - 03',
                        deadline: '19.02.2019',
                        id: '03'
                    }
                ]
            }
          ]
    },
    mutations: {},
    actions: {},
    getters: {
        ads (state) {
            return state.todos
        },
        adTaskDetails (state) {
            return adId => {
                for(let i = 0; i < state.todos.length; i++){
                    for(let m = 0; m < state.todos[i].tasks.length; m++){
                        if(state.todos[i].tasks[m].id == adId){
                            return state.todos[i].tasks[m]
                        }
                    }
                }           
            }
        }
    }
}