<template>
  <div class="box">
      <div v-for="card in cards" :key="card">
          <p>{{card.title}}</p>
      </div>
      <!--my-item v-for="item in itemlists" :key="item" v-bind="item">
      </my-item>-->
  </div>
</template>
<script>
import { defineComponent ,reactive } from '@vue/composition-api';
//import { itemData } from './itemData.ts';
import MyItem from './MyItem.vue';
export default defineComponent({
    name:'HelloWorld',
    components:{
        MyItem,
    },
    
    setup(props,context){
        const cards=[
        {
            title:'1',
            className:'box',
        },
        {
            title:'2',
            className:'box',
        }
        ];
    return {
        cards,
    };
    }
});
</script>

<style>
.box{
  display: grid;
  grid-template-columns:repeat(12, 100px);
  grid-template-rows:repeat(10, 100px);

}
.card{
    background: grey;
    text-align: center;
}
.hi{
    background: cornflowerblue;
}
</style>