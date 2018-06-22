<template>
  <div id="box">

  </div>
</template>

<script>
/*
  这里总结一下 简单的动画 直接使用transition即可 transition表示过渡 是控制动画的 比如动画持续的时间以及贝塞尔曲线等等 
  transition : transform 等等
  然后是transfrom(变形),表示动画具体是怎么样的 它后面跟的值可以是translate(移动) rotate(旋转)以及缩放或者倾斜 等等等等
  最重要的是，这个transform常常需要其他条件的触发,比如:hover :focus 或者媒体查询 或者JavaScript(比如动态的添加一个class)
  但是在用transform:translate定位的时候则没有外界条件的触发
  还有一点，如下例所示，box元素在hover的时候会产生动画 但在鼠标离开box之后，又会回到最开始的状态
  还有一点，hover不是moseIn，需要一直放在元素上才能触发
  还有，这里的逻辑关系是这样的。我们先用transition给元素设置的过渡属性是transform,当鼠标hover元素时，元素的
  transform发生了变化，这时候触发了transition，产生动画。而鼠标移出元素的时候，transform又发生了变化，这时候又触发了transition产生了动画。
  故transition产生动画的条件是transition设置的property发生了变化，这种动画的特点是需要“一个外力去触发”
  (在下面的例子中就是transform变化-->触发transition--》产生动画)
  缺点为：
  1.需要事件触发，所以没法在网页加载时自动发生
  2.是一次性的，不能重复发生，除非一再触发
  3.只能定义开始状态和结束状态，不能定义中间状态，也就是说只有两个状态
  4.一条transition规则，只能定义一个属性的变化，不能涉及多个属性。

  transition:property duration timing-function delay
*/ 
export default {

}
</script>



<style scoped>
  #box{
    width: 100px;
    height: 100px;
    background: green;
    transition: transform 1s ease-in 1s
  }

  #box:hover{
    transform: rotate(180deg) scale(.5, .5)
  }
</style>
