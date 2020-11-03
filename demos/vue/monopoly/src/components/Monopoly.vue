<template>
    <div class="container">
    </div>
</template>

<style scoped>
    .container{
        position: relative;
        width:1000px;
        height:700px;
        margin:auto;
        display: grid;
        background: seagreen;
        grid-template-columns: 100px 100px 100px;
        grid-template-rows: 100px 100px 100px;
        grid-template-areas: 'a b c' 'd e f' 'g h i';
    }
     .item {
         text-align: center;
        border: 1px solid white;
    }
    .item-sp {
        background-color: #ef342a;
    }
    .item-1 {
        background-color: #f68f26;
        grid-column-start: 2;
        grid-column-end:5;
    }
    .item-2 {
         background-color: #4ba946;
         grid-column-start: 6;
         grid-column-end: 10;
         }
    .item-8 {
        background-color: #0376c2;
        grid-row-start: 2;
        grid-row-end: 5;
        }
    .item-3 {
        justify-content: end;
        grid-row-start: 2;
        grid-row-end: 4;
        background-color: #c077af; }
    .item-6 { background-color: #f8d29d; }
    .item-7 { background-color: #b5a87f; }
    .item-8 { background-color: #d0e4a9; }
    .item-9 { background-color: #4dc7ec; }

</style>

<script>
export default {
}
</script>
