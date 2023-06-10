<template>
    <div>
        <li v-for="(list, index) in lists" :key="index">
            <a href="#" :class="{active: $store.state.select == list.id}" @click.prevent="select(list.id)">
                {{ list.name }}
            </a>
        </li>

        <Item></Item>

        <h1>id : {{ $store.state.select  }}</h1>

        <br>
        <h3>Map Mutations :</h3>
        <button @click="action('ok')" >Call Action</button>       
        <br>
        <h3>Map Getters : {{ selectedIltems }}</h3>
        <br>
        <h3>Map State : {{ mapState }}</h3>
       
    </div>
</template>

<script>

import Item from '@/components/Item.vue';
import {mapState,mapMutations,mapGetters} from 'vuex'

export default {
    props:['lists'],
    computed:{
        ...mapState([
            'mapState'
        ]),
        ...mapGetters([
            'selectedIltems'
        ])
    },
    components:{
        Item
    },
    methods: {
        foo(){
            alert('ok');
        },
        ...mapMutations([
            'select','action'
        ])
    },
}

</script>

<style scoped>
.active{
    color:red;
    background: green;
}
</style>