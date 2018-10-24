<template>
  <div>
    <div class="menu ">收到的评论</div>
    <p class="center">这里还木有内容哦~</p>
    <!--<font-awesome-icon icon="fa-mars-stroke " />-->
    <!--<font-awesome-icon icon="coffee" />-->
  </div>
</template>

<script>
    export default {
        name: "Comment"
    }
</script>

<style scoped>
  .menu {
    margin-bottom: 20px;
    font-size: 14px;
    font-weight: 700;
  }
  .center{
    text-align: center;        /*文字水平居中对齐*/
    line-height: 200px;        /*设置文字行距等于div的高度*/
  }
</style>
