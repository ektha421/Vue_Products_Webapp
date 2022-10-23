import {createStore} from 'vuex'
import persistedstate from 'vuex-persistedstate';

const store = createStore({
    state(){
        return{
            user:{}
        }
    },
    mutations:{
        user(state, data){
            state.user = data;
        }
    },
    plugins: [
        //state값이 새로고침해도 유지됨
       persistedstate({
        paths:['user']
       }) 
    ]
});

export default store;