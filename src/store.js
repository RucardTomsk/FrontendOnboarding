import  {createStore, state} from "vuex";

export  const store = createStore({
    state: ()=> ({
        globalVariable: 'ссылка на API'

    }),
    mutations:{
        set(state, value){
            state.globalVariable = value
        }
    },
    actions: {
        update({commit},value){
            commit('set',value)
        }
    }
})