<template>
    <div class="container">
        <div v-for="item in list" 
            :key="item.value"
            :data-data="JSON.stringify(item)"
            class="item" 
            :class="`item-${item.id}`" 
            :style="`grid-area: item_${item.id}`"
        >
            {{item.value}}
        </div>
    </div>
</template>

<style scoped>
.container {
  width: 1000px;
  height: 700px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  grid-template-rows: repeat(auto-fill, 100px);
  align-content: space-between;
  justify-content: space-between;
  grid-template-areas: "item_start item_1 item_2 item_3 item_4 item_store item_bank" "item_lucky item_1 item_2 item_3 item_4 item_store item_bank";
}

.item {
}
.item-start {
  background-color: #4dc7ec;
}
.item-1 {
  background-color: #f68f26;
  /* grid-column-start: 2;
  grid-column-end: 5; */
}
.item-2 {
  background-color: #4ba946;
  /* grid-column-start: 6;
  grid-column-end: 10; */
}
.item-8 {
  background-color: #0376c2;
  /* grid-row-start: 2;
  grid-row-end: 5; */
}
.item-3 {
  /* grid-column-start: 4;
  grid-row-end: 4; */
  background-color: #c077af;
}
.item-lucky {
  background-color: #f8d29d;
}
.item-store {
  background-color: #b5a87f;
}
.item-bank {
  background-color: #d0e4a9;
}
</style>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: "start",
          value: "起点"
        },
        {
          id: "1",
          value: "一号地"
        },
        {
          id: "bank",
          value: "银行"
        },
        {
          id: "2",
          value: "二号地"
        },
        {
          id: "store",
          value: "超市"
        },
        {
          id: "8",
          value: "八号地"
        },
        {
          id: "lucky",
          value: "运气"
        },
        {
          id: "3",
          value: "三号地"
        }
      ]
    };
  }
};
</script>
