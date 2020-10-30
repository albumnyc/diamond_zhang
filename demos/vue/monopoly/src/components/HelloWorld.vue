<template>
  <div id="app">
    <input type="button" @click="find()" value="initial game"/>
    <div id="infor-left">
      <ul id="listall">
      </ul>
      <ul id="user_one">
      </ul>
      <ul id="user_two">
      </ul>
    </div>
    <div id="box">
      <div id="top-box"></div>
      <div id="right-box"></div>
      <div id="down-box"></div>
      <div id="left-box"></div>
      <div id="center-box">
        <input type="button" value="假装是个骰子" @click="getStep()"/>
      </div>
    </div>
  </div>
</template>

 <style>
#infor-left {
  background-color: darkolivegreen;
  width: 400px;
  height: 700px;
  position: absolute;
  left: 20px;
  display: flex;
}
#listall{
  width:70px;
}
#user_one{
  width:80px;
}
#user_two{
  width:80px;
}
#box {
  background-color: seagreen;
  position: relative;
  width: 1000px;
  height: 700px;
  left:400px;
}
#top-box {
  position: relative;
  display: flex;
  width: 1000px;
  height: 100px;
}
#right-box {
  position: relative;
  float: right;
  height: 600px;
  width: 100px;
}
#down-box {
  display: flex;
  position: absolute;
  bottom: 0;
  width: 900px;
  height: 100px;
}
#left-box {
  position: relative;
  height: 500px;
  width: 100px;
}
#center-box{
  display: none;
  position: absolute;
  width:200px;
  height:200px;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.items {
  background-color: rosybrown;
  position: relative;
  width: 98px;
  height: 98px;
  border: 1px solid;
}
</style>

<script>
export default({
  data: function () {
    return {
      inital: false,
      dataInfor: [['用户名', '当前位置', '余额', '地雷', '保护卡', '升级星', '地产', '银行福利', '税款'], ['张漂亮', '1', '5000', '2', '2', '1', '0', '500', '100']]
    }
  },
  methods: {
    find: function () {
      if (!this.inital) {
        this.inital = true
        var top = document.getElementById('top-box')
        var right = document.getElementById('right-box')
        var down = document.getElementById('down-box')
        var left = document.getElementById('left-box')
        var list = document.getElementById('listall')
        var c = document.getElementById('center-box')
        c.style.display = 'block'
        for (let i = 1; i < 11; i++) {
          var buff = document.createElement('div')
          buff.className = 'items'
          buff.innerHTML = i
          buff.id = i
          top.appendChild(buff)
        }

        for (let i = 11; i < 17; i++) {
          let buff = document.createElement('div')
          buff.className = 'items'
          buff.innerHTML = i
          buff.id = i
          right.appendChild(buff)
        }
        for (let i = 25; i > 16; i--) {
          let buff = document.createElement('div')
          buff.className = 'items'
          buff.innerHTML = i
          buff.id = i
          down.appendChild(buff)
        }
        for (let i = 30; i > 25; i--) {
          let buff = document.createElement('div')
          buff.className = 'items'
          buff.innerHTML = i
          buff.id = i
          left.appendChild(buff)
        }
        var item = document.getElementsByClassName('items')
        for (let i = 0; i < item.length; i++) {
          item[i].setAttribute('owner', false)
          item[i].setAttribute('house', -1)
          item[i].setAttribute('price', 1000)
        }
        for (let i = 0; i < this.dataInfor[0].length; i++) {
          let node = document.createElement('p')
          let textnode = document.createTextNode(this.dataInfor[0][i])
          node.appendChild(textnode)
          list.appendChild(node)
        }
        this.reload()
      }
    },
    reload: function () {
      var one = document.getElementById('user_one')
      while (one.hasChildNodes()) {
        one.removeChild(one.firstChild)
      }
      for (let i = 0; i < this.dataInfor[1].length; i++) {
        let node = document.createElement('p')
        let textnode = document.createTextNode(this.dataInfor[1][i])
        node.appendChild(textnode)
        one.appendChild(node)
      }
    },
    getStep: function () {
      let steps = Math.floor(Math.random() * 6 + 1)
      let temp = steps + parseInt(this.dataInfor[1][1])
      if (temp > 30) {
        this.dataInfor[1][1] = temp - 30
      } else {
        this.dataInfor[1][1] = temp
      }
      this.reload()
      var item = document.getElementsByClassName('items')
      for (let i = 0; i < item.length; i++) {
        if (parseInt(item[i].id) === this.dataInfor[1][1]) {
          if (item[i].getAttribute('owner') === 'false') {
            if (parseInt(item[i].getAttribute('price')) <= this.dataInfor[1][2]) {
              let res = confirm('您现在在' + this.dataInfor[1][1] + '买下这块风水宝地吗？')
              if (res) {
                this.dataInfor[1][2] = this.dataInfor[1][2] - parseInt(item[i].getAttribute('price'))
                item[i].setAttribute('house', 0)
                item[i].setAttribute('owner', this.dataInfor[1][0])
                item[i].innerHTML += '<br>' + this.dataInfor[1][0] + '的地'
                this.reload()
              }
            }
          } else if (item[i].getAttribute('owner') === this.dataInfor[1][0]) {
            if (this.dataInfor[1][2] >= 200 && parseInt(item[i].getAttribute('house')) < 3) {
              let res = confirm('整个房子不？就200块')
              if (res) {
                this.dataInfor[1][2] = this.dataInfor[1][2] - 200
                this.dataInfor[1][6] = parseInt(this.dataInfor[1][6]) + 1
                item[i].setAttribute('house', (parseInt(item[i].getAttribute('house')) + 1))
                item[i].innerHTML += '<br>' + '有' + item[i].getAttribute('house') + '块地啦！'
                this.reload()
              }
            }
          }
        }
      }
    }
  }
})
</script>
