<template>
  <div class="about">
    <h1>{{ $store.state.about.data.title }}</h1>
    <form>
      <input type="text" v-model="title">
      <button @click.prevent="setTitle(title)">Set title</button>
      <button @click.prevent="del()">Remove Title</button>
      
    </form>
  </div>
</template>

<script>

import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  data() {
    return {
      id: 10,
      title: "Set title manually"

    }
  },
  computed: {
    ...mapState('about', ['data']),
    ...mapGetters('about', ['getTitle']),
  },
  methods: {
    actionWithData() {
      this.$store.dispatch('about/actionWithData', { transfer: "This is a object transfer" });
    },
    del() {
      this.$store.dispatch('about/deleteTitle', this.id)
    },
    ...mapMutations('about', ['setTitle']),
  },
  created() {
    this.actionWithData();
    this.$store.dispatch('about/getTitle')
  }
}
</script>