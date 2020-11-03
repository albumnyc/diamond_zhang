<template>
    <div class="className">{{title}}</div>
</template>

<script>
import {defineComponent} from '@vue/composition-api';
export default defineComponent({
    name:'MyItem',
    props:{
        title:{
            type:'String',
        },
        className:{
            type:'String',
        }
    },

})
</script>