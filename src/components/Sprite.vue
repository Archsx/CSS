<template>
  <div>
    <ul class="wrapper">
      <li v-for="(item, index) in items"   :key="index">
        <i class="sprite" :class="item.class"></i>
        <h3>{{item.name}}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      items: [
        {
          class: "li-1",
          name: "Github"
        },
        {
          class: "li-2",
          name: "Gmail"
        },
        {
          class: "li-3",
          name: "Twitter"
        },
        {
          class: "li-4",
          name: "Linkedin"
        },
        {
          class: "li-5",
          name: "Stackoverflow"
        },
        {
          class: "li-6",
          name: "Ins"
        }
      ]
    };
  }
};
</script>

<style scoped>
  *{
    margin: 0 ;
    padding: 0;
    box-sizing: border-box;
  }
  h3{
    line-height: 50px;
  }
  ul,ol{
    list-style: none;
  }
  .wrapper{

  }
  .sprite{
    background: url('../assets/spritesheet.png');
    background-repeat: no-repeat;
  }
  li{
    display: flex;
  }
  li i{
    display: block;/*这句十分关键 似乎行内元素设置宽高是无效的*/
    width:50px;
    height: 50px;
    /* border: 1px solid red; */
  }
  .li-1{
    background-position:  5px 5px;
  }
  .li-2{
    background-position: -35px 5px
  }
  .li-3{
    background-position: -75px 5px
  }
  .li-4{
    background-position: 5px -35px
  }
  .li-5{
    background-position: -35px -35px
  }
  .li-6{
    background-position: -75px -35px
  }




</style>
