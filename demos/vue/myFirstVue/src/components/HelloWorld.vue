<template>
    <div class="hello">
        <h2>{{tip_one}}</h2>
        <img src="../assets/origin.jpg" />
        <h2>{{tip_two}}</h2>
        <ul class="workspace">
            <li
                v-for="(item, index) in img_store"
                :class="{'item':true,'item-empty':true}"
                :key="item.id"
                @click="()=>change(item,index)"
            >
                <img :src="item.url" alt />
                <!-- {{item.url}} -->
            </li>
        </ul>
    </div>
</template>

<script>
import * as img1 from '../assets/1.jpg';

export default {
    name: 'HelloWorld',
    data() {
        return {
            tip_one: '实现效果',
            tip_two: '拼图区',
            arr: [
                {
                    id: 1,
                    url: img1,
                },
            ],
            img_store: [
                {
                    id: 1,
                    url: img1,
                },
                {
                    id: 2,
                    url: require('../assets/2.jpg')
                },
                {
                    id: 3,
                    url: require('../assets/3.jpg')
                },
                {
                    id: 4,
                    url: require('../assets/4.jpg')
                },
                {
                    id: 5,
                    url: require('../assets/5.jpg')
                },
                {
                    id: 6,
                    url: require('../assets/6.jpg')
                },
                {
                    id: 7,
                    url: require('../assets/7.jpg')
                },
                {
                    id: 8,
                    url: require('../assets/8.jpg')
                },
                {
                    empty: true,
                    id: 9,
                    url: require('../assets/white.jpg')
                }
            ]
        }
    },
    mounted() {
        // this.shuffle()
    },
    methods: {
        // 重新洗牌哈
        shuffle() {
            let len = this.img_store.length
            let store = []
            while (len) {
                let j = Math.floor(Math.random() * len--);
                [store[j], store[len]] = [store[len], store[j]]
            }
            this.img_store = store
        },
        // 点点方块哈
        // 想法：获取当前index，判断空白格在哪，然后判断交换
        change(item, index) {
            let store = this.img_store
            let nowNum = store[index]
            let leftNum = store[index - 1]
            let rightNum = store[index + 1]
            let upNum = store[index - 3]
            let downNum = store[index + 3]
            let white = {
                empty: true,
                id: 9,
                url: require('../assets/white.jpg')
            }
            // 注意index是从0开始
            if (leftNum && leftNum.empty && index % 3) {
                this.$set(store, index - 1, nowNum)
                this.$set(store, index, white)
            } else if (rightNum && rightNum.empty && index % 3 !== 2) {
                this.$set(store, index + 1, nowNum)
                this.$set(store, index, white)
            } else if (upNum && upNum.empty) {
                this.$set(store, index - 3, nowNum)
                this.$set(store, index, white)
            } else if (downNum && downNum.empty) {
                this.$set(store, index + 3, nowNum)
                this.$set(store, index, white)
            }
            this.$nextTick(() => {
                if (this.img_store.every((item, index) => item.id === (index + 1)) && this.img_store[8]['empty']) {
                    alert('呜呜呜呜！祝贺你！！！')
                }
                return false
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$my_green: darkseagreen;
h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: repeat(3, auto);
}
li {
    display: inline-block;
    margin: 0 10px;
}
img {
    width: 200px;
    height: 150px;
}
a {
    color: $my_green;
}
.workspace {
    border: 2px solid $my_green;
    width: 750px;
    height: 563px;
    margin: 0 auto;
    overflow: hidden;
}
.workspace item {
    float: left;
    width: 250px;
    height: 187.5px;
    padding: 0;
    margin: 0;
    cursor: pointer;
    display: block;
    position: relative;
}
</style>
