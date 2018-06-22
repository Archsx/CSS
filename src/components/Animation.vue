<template>
  <div id="box"></div>
</template>

<script>
/*
  这里需要注意 用@keyframes定义一个动画的关键帧，而动画的timeing-function则是统一的在animation中定义的
  这里区分各个关键帧的依据是时间，如下例的10%，表0.1t时的状态，中间的过渡是由animation所定义的
  animation:name duration timing-function delay iteration-count direction play-state fill-mode





*/
export default {

}
</script>

<style scoped>
  #box{
    height: 100px;
    width: 100px;
    border: 15px solid black;
    animation: changebox 5s ease-in-out 1s infinite alternate running forwards
  }
  #box:hover {
    animation-play-state: paused;
  }
  @keyframes changebox{
    10% {
      background: red;
    }
    50% {
      width: 80px;
    }
    70%{
      border: 15px solid yellow
    }
    100%{
      width: 180px;
      height: 180px;
    }
  }
</style>
