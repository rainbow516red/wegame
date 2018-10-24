<template class="all">
  <div style="background-color: #434343;padding-top: 30px;padding-left: 20px ;width: 230px;height: 600px">
    <router-link to="/index">
    <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="回首页"
                  style="border-color: tomato;text-align: center; "></b-form-input></router-link>
    <div style="display: flex;padding-top: 18px">
      <div>
        <b-img src="../../static/img/plus.png"></b-img>
      </div>
      <div style="font-size:14px;color: white;padding-top: 3px">
        新建文集
      </div>
    </div>
    <div style="font-size:15px;color: white;padding-top: 10px">
      日记本
    </div>
    <div style="font-size:15px;color: white;padding-top: 10px">
      随笔
    </div>
  </div>
</template>

<script>

  export default {
    name: "Writer1"
  }
</script>

<style scoped>
  .mr-sm-2 {
    width: 194px;
    height: 43px;
    border-radius: 25px;
    background-color: #434343;
  }

</style>
