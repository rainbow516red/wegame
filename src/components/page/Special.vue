<template>
  <b-special
  id="special">
  <div class="recommend-collection">
<div class="two" >

    <a class="collection" id="1" target="_blank" >
      <router-link :to="'/c/'+ 1">
      <img class="img"  src="//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64" />
  </router-link>
      <div class="name">摄影</div>
    </a>

    <a class="collection" id="2" target="_blank" >
    <img class="img"  src="//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64" />
    <div class="name">读书</div>
  </a>
    <a class="collection" id="3" target="_blank" >
    <img class="img"  src="//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64" />
    <div class="name1">简书电影</div>
  </a>
    <a class="collection" id="4" target="_blank" >
    <img class="img" src="//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64" />
    <div class="name">故事</div>
  </a>
    <a class="collection" id="5" target="_blank">
    <img class="img" src="//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64" />
    <div class="name">手绘</div>
  </a>
  </div>
<div class="two" style="padding-top: 10px">

    <a class="collection" id="6" target="_blank" >
    <img class="img" src="//upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64" />
    <div class="name1">@IT·互联网</div>
  </a>

    <a class="collection" id="7" target="_blank" >
    <img class="img" src="//upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64" />
    <div class="name1">自然科普</div>
  </a>
  <router-link to="/colletions">
    <a class="collection" target="_blank"><div class="name2">
      更多热门专题<<</div> <i class="iconfont ic-link"></i>
    </a> </router-link>   </div>    </div>
  <div class="split-line"></div>
    <hr style="width: 630px;"/>
  </b-special>

</template>

<script>
    export default {
        name: "Special"
    }
</script>

<style scoped>
.recommend-collection{
  margin-bottom: 20px;
padding-top: 20px;
}
a{
  padding-left: 20px;
  display: inline-flex;

}
.name{
  font-size:14px; ;
  background-color: #f7f7f7;
  height:32px ;
  width: 53px;
  text-align: center;
  padding-top: 5px;
}
.name1{
  font-size:14px; ;
  background-color: #f7f7f7;
  height:32px ;
  width: 100px;
  text-align: center;
  padding-top: 5px;
}
  .img{
    height:32px ;
    width: 32px;

    border-radius:5px;
  }
  .two{
    display: flex;
  }
  .name2{
    font-size:14px; ;
    background-color: #ffffff;
    height:32px ;
    width: 110px;
    text-align: center;
    padding-top: 5px;
    color: #a1a1a1;
  }
  /*body{*/
    /*font-family: Helvetica Neue,Helvetica,Arial,sans-serif;*/
    /*font-size: 14px;*/
    /*line-height: 1.42857;*/
    /**/
  /*}*/
</style>
