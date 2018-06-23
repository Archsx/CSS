<template>
  <div>
    <div class="box1 box"></div>
    <div class="box2 box"></div>
    <div class="box3 box"></div>
    <div class="box4 box"></div>
  </div>
</template>

<script>
export default {
  name:'BackgroundPosition'
};
</script>

<style scoped>
  .box{
    height: 400px;
    width: 550px;
    float: left;
    margin: 20px;
    border: 1px solid red;
    background: url('../assets/images.jpeg');
    background-repeat: no-repeat;
  }
  .box1{
    /* background-position: right bottom */
  }
  .box2{
    /* background-position: left bottom */
    background-position: -100px -100px;
  }
  .box3{
    /* background-position: center center */
    background-position: 100px 100px;
  }
  .box4{
    /* background-position: center bottom */
    background-position: 100px -100px; 
  }
</style>
