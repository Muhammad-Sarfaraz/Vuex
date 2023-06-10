<template>
    <div>
        Hello
        <p v-for="(item,index) in $store.getters.selectedIltems" :key="index">
            {{ item.text }}
        </p>

        <button @click.prevent="action('ok')" >Call Action</button>
    </div>
</template>

<script>

import {mapState,mapMutations} from 'vuex'

export default {
    methods: {
        foo(){
            alert('ok');
        },
        ...mapMutations([
            'select','action'
        ])
    },
    // computed:{
    //     selectedList(state){
    //   let list = this.$store.state.lists.find(l => l.id === this.$store.state.select);
    //   console.log(list)
    //   if(list){
    //       return list.items;
    //   }
    //   return [];
    //  }
    // }
}
</script>