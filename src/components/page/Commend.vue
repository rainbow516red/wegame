<template>

  <div class="one">
  <b-commend id="commend">
    <div class="col-xs-7 col-xs-offset-1 aside">
      <div class="board">
        <a target="_blank" ><img src="//cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png" alt="Banner s 3" /></a>
        <a target="_blank" ><img src="//cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png" alt="Banner s 4" /></a>
        <a utm_medium="index-banner-s" target="_blank" ><img src="//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png" alt="Banner s 7" /></a>
        <a utm_medium="index-banner-s" target="_blank" ><img src="//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png" alt="Banner s 5" /></a>
        <a target="_blank" ><img src="//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png" alt="Banner s 6" /></a>
      </div>
    </div>
  </b-commend>
  </div>
</template>

<script>
    export default {
        name: "Commend",

    }
</script>

<style scoped>
.one{
  padding-top: 24px;
  padding-right: 30px;
}
.board{
  width: 100%;
  min-height: 50px;
  margin-bottom: 6px;
  border-radius: 4px;
  min-height: 30px;
}
a{
  cursor: pointer;
  color: #333;

}
img{
  width: 90%;
  min-height: 45px;
  margin-bottom: 6px;
  border-radius: 4px;
  height: 51px;

}
</style>
