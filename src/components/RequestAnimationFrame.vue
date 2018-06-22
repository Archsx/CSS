<template>
  <div>
    <div id="myDiv" :style="{width:dynamic + 'px'}">
      {{init}}
    </div>
    <button id="btn" @click="run">run</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      // init: "0%",
      timer: null,
      dynamic: 0
    };
  },
  computed:{
    init:function(){
      return this.dynamic + '%'
    }
  },
  methods: {
    // run(){
    //   let self = this
    //   clearInterval(this.timer)
    //   this.dynamic = 0;
    //   this.timer = setInterval(function(){
    //     if(parseInt(self.dynamic) < 100){
    //       self.dynamic += 1
    //       self.init = self.dynamic + '%'
    //     }else{
    //       clearInterval(self.timer)
    //     }
    //   },1000)

    // }
    // run() {
    //   let self = this;
    //   clearTimeout(this.timer);
    //   this.dynamic = 0;
    //   this.timer = setTimeout(this.rec,16)
    // },
    // rec() {
    //   // console.log(this)这里需要注意 vue内methods里面的第一层函数似乎默认绑定的this为vue实例，所以这里不会像你不知道的js一书中所提即的那样(关心函数的执行方式，this.rec为一个引用。。。你知道我说的是哪里)出现问题
    //   setTimeout(() => {
    //     if (parseInt(this.dynamic) < 100) {
    //       // console.log(this.dynamic);
    //       this.dynamic += 1;
    //       this.rec();
    //     } else {
    //       clearTimeout(this.timer);
    //     }
    //   }, 16);
    // }

    // run(){
    //   let self = this
    //   this.dynamic = 0
    //   clearTimeout(this.timer)
    //   setTimeout(function fn(){
    //     if(parseInt(self.dynamic) < 100){
    //       self.dynamic += 1
    //       self.timer =  setTimeout(fn,16)
    //     }else{
    //       clearTimeout(self.timer)
    //     }
    //   },16)
    // },




    /*
      总结：requestAnimationFrame用法很像setTimeout用法，
           关键是 有一个类似于全局变量作用的东西（这里是this.dynamic）
           然后通过递归的改变这个全局变量的值（同时这个值往往也是动画变化规律和结束动画条件）
           然后这里的递归很有意思，用的是具名函数表达式，我之前一直在想怎么对这个递归函数做封装
           然后这里的方式很讨巧
           另外还要注意的是，每次写递归我可能都会陷入函数调用栈的思考
           总会陷入嵌套的想象fn(fn(fn(fn)))类似长这样的
           函数的调用栈是这样的没错，但是这个和我们写业务逻辑（？暂时叫这个名字）无关
           requestAnimationFrame(fn)-->this.dynamic改变-->requestAnimationFrame(fn)-->this.dynamic改变。
           这里其实有个中间变量this.timer，每次执行运行requestAnimationFrame都会给它赋新值
           


           requestAnimationFrame的用法与settimeout很相似，
           只是不需要设置时间间隔而已(浏览器内核已经设置好最佳时间)。
           requestAnimationFrame使用一个回调函数(一般在这个函数写动画变换规律和结束动画条件)作为参数，
           这个回调函数会在浏览器重绘之前调用。它自动返回一个整数，表示定时器的编号，
           这个值可以传递给cancelAnimationFrame用于取消这个函数的执行。
    
     */
    run(){
      let self = this
      this.dynamic = 0;
      cancelAnimationFrame(this.timer)
      this.timer = requestAnimationFrame(function fn(){
        if(parseInt(self.dynamic) < 100){
          self.dynamic += 1
          self.timer = requestAnimationFrame(fn)
        }else{
          cancelAnimationFrame(self.timer)
        }
      })
    }
  },
  mounted() {}
};
</script>

<style scoped>
#myDiv {
  background-color: pink;
  width: 0;
  height: 30px;
  line-height: 30px;
}
</style>
