<template>
  <div id="app">
   <h1>{{title_msg}}</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      title_msg: '拼图冲一冲'
    }
  }
}
</script>

<style>
#app {
  text-align: center;
  color:darkseagreen;
  margin-top: 60px;
}
</style>
