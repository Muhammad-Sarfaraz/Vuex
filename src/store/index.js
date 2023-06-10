import Vue from "vue";
import Vuex from "vuex";
import jokes from './modules/jokes'
import form from './modules/form'



Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    jokes,
    form
},
  state: {
    mapState:"Yes, this is a mapState",
    lists: [
      {
        id: 1,
        name: "Name A",
        items:[{
          id:1,
          text:"This is a text from first list",
          status:'active'
        }]
      },
      {
        id: 2,
        name: "Name B",
        items:[{
          id:1,
          text:"This is a text from second list",
          status:'active'
        }]
      },
    ],
    select: -1,
    action:false,
  },
  getters: {
    selectedIltems(state){
      let list = state.lists.find(l => l.id === state.select);
      console.log(list)
      if(list){
          return list.items;
      }
      return [];
     }
  },
  mutations: {
    select(state, payload) {
      state.select = payload;
    },
    action(state,payload){
      console.log(payload);
    }
  },
  actions: {
   init({commit}){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => commit('action',"ajax call"))
   }
  },
});
