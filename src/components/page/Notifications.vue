<template>
  <b-container class="bv-example-row">
    <br>
    <b-row>
      <b-col cols="4">
        <b-list-group>
          <b-list-group-item >
            <router-link to="/comment">
              <b-media>
                <b-img slot="aside" rounded width="32" height="32" src="../../static/img/comment.png?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32"  alt="img" class="m-1" />
                <h6 class="mt-sm-2">评论</h6>
              </b-media>
            </router-link>
          </b-list-group-item>
          <b-list-group-item>
            <router-link to="/letter">
              <b-media>
                <b-img slot="aside" rounded width="32" height="32" src="../../static/img/xinjian.png?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32"  alt="img" class="m-1" />
                <h6 class="mt-sm-2">简信</h6>
              </b-media>
            </router-link>
          </b-list-group-item>
          <b-list-group-item>
            <router-link to="/submission">
              <b-media>
                <b-img slot="aside" rounded width="32" height="32" src="../../static/img/tougao.png?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32"  alt="img" class="m-1" />
                <h6 class="mt-sm-2">投稿请求</h6>
              </b-media>
            </router-link>
          </b-list-group-item>
          <b-list-group-item>
            <router-link to="/likeAndPraise">
              <b-media>
                <b-img slot="aside" rounded width="32" height="32" src="../../static/img/xihuan.png?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32"  alt="img" class="m-1" />
                <h6 class="mt-sm-2">喜欢和赞</h6>
              </b-media>
            </router-link>
          </b-list-group-item>
          <b-list-group-item>
            <router-link to="/likeAndPraise">
              <b-media>
                <b-img slot="aside" rounded width="32" height="32" src="../../static/img/guanzhu-red.png?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32"  alt="img" class="m-1" />
                <h6 class="mt-sm-2">关注</h6>
              </b-media>
            </router-link>
          </b-list-group-item>
          <b-list-group-item>
            <router-link to="/likeAndPraise">
              <b-media>
                <b-img slot="aside" rounded width="32" height="32" src="../../static/img/zanshang.png?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32"  alt="img" class="m-1" />
                <h6 class="mt-sm-2">赞赏和付费</h6>
              </b-media>
            </router-link>
          </b-list-group-item>
          <b-list-group-item>
            <router-link to="/likeAndPraise">
              <b-media>
                <b-img slot="aside" rounded width="32" height="32" src="../../static/img/qita.png?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32"  alt="img" class="m-1" />
                <h6 class="mt-sm-2">其他</h6>
              </b-media>
            </router-link>
          </b-list-group-item>
        </b-list-group>
      </b-col>
      <b-col cols="8">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </b-col>
    </b-row>
  </b-container>
</template>

      <script>
    export default {
      name: "Notifications"
    }
</script>

<style scoped>
  .row {
    padding: 30px 0;
  }
  .set{
    margin-left: 33.33333%;
  }
  /*.bac{*/
    /*text-align: left;*/
    /*background-color: white;*/
    /*width: 263px;*/
    /*height: 50px;*/
    /*border: none;*/
     /*}*/

  .bac{
    width: 263px;
    height: 50px;
    background:#000;
    text-align: left;
    background-color: white;
    border: none;
  }
  .bac:hover{
    background: #f0f0f0;
  }
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
