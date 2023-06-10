<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <List :lists="$store.state.lists"></List>


    <div>
      <button @click="jokeData">Get Jokes</button>

    </div>
    <!-- <h1>{{ $store.state.appbar.title }}</h1> -->

    <h1>asd{{ jokes  }}</h1>

 <br />
 <br />
 <br />

 <h1>Form:</h1>
 {{ $store.state.form.data.title }}

 <input v-model="title" @change="updateTitle">


  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import List from '@/components/List.vue';
import {mapState, mapGetters} from 'vuex'

export default {
  name: 'HomeView',
  components: {
    List
  },
  computed: {
    ...mapState(["jokes"]),
  },
  data() {
        return {
            title:""
        }
    },
    methods:{
      jokeData() {
       this.$store.dispatch("jokes/getData");
    },

    updateTitle() {
      this.$store.commit('form/SET_TITLE', this.title);
    }
    },

    created() {
      this.$store.dispatch('init')
    },
}
</script>
