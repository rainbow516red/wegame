<template>

  <div class="one">
    <b-Qr>
      <div>
        <b-img src="../../static/img/QR.png"></b-img>
      </div>
      <div style="display: flex;width: 290px">
        <p class="txt" style=" font-size: 14px;
    color: gray;padding-top: 3px">推荐作者</p>
        <p style="padding-left:160px ">
          <b-img style="opacity: 0.5;
    filter: alpha(opacity=50);" src="../../static/img/sx.png"></b-img>
        </p>
        <p class="txt" style=" font-size: 14px;
    color: gray;padding-top: 3px">换一批</p>
      </div>
    </b-Qr>
  </div>


</template>

<script>
  export default {
    name: "QR"
  }
</script>

<style scoped>
  .one {

    padding-top: 10px;
  }
</style>
