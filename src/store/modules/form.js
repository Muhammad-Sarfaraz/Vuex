export default {
    namespaced: true,
    state: {
        data: {
            title:'This is a title',
            statue:'active'
        },
    },
    getters: {
        getTitle(){
            return state.data.title;
        }
    },
    actions: {
        async getData({commit }) {
            const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            commit('SET_DATA', await data.json());
        },
    },
    mutations: {
        SET_DATA(state, data) {
            state.data = data;
        },
        SET_TITLE(state,data){
            state.data.title = data
        }
    }
}