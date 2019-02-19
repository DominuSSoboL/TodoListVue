import * as fb from 'firebase';

class User {
    constructor(){
        this.id = id
    }
}

export default {
    state: {
        uder: null
    },
    mutations: {
        setUser (state, payload){
            state.user = payload
        }
    },
    action: {
        registerUser ({commit}, {email, password}) {
            fb.auth().createUserWithEmailAndPassword(email, password)
            .then(user => {
                commit('setUser', new User(user.uid))
            })
        }
    },
    getters: {
        user (state) {
            return state.user
        }
    }
}