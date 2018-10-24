<template>
  <div class="recommended-authors">
    <div class="title">
      <span>推荐作者</span>
      <a class="change-page" href="#">换一批</a>
    </div>
    <br/>
    <div>
      <b-media v-for="hotUser in hotUsers" :key="hotUser.userId" class="author-box">
        <!--<b-img slot="aside" :src="user.avatar" class="avatar"/>-->
        <router-link :to="'/u/'+hotUser.userId">
          <img :src="hotUser.avatar" class="avatar"/>
        </router-link>
        <div class="author-info">
          <h6>{{hotUser.nickname}}</h6>
          <span>写了{{hotUser.wordsCount}}个字，{{hotUser.likeCount}}喜欢</span>
        </div>
        <span class="follow">关注</span>
      </b-media>
      <b-list-group>
        <b-list-group-item variant="dark" class="view-all">查看全部></b-list-group-item>
      </b-list-group>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Authors",
    data() {
      return {
        hotUsers: []
      }
    },
    created() {
      var that = this
      this.$http
        .get('http://localhost:8080/user/hot')
        .then(function (response) {
          // alert(JSON.stringify(response.data.data));
          that.hotUsers = response.data.data;
        })
    }
  }
</script>

<style scoped>
  .recommended-authors {
    margin-bottom: 20px;
    padding-top: 0;
    font-size: 13px;
    text-align: center;
  }

  .recommended-authors .title {
    text-align: left;
    margin-left: 20px;
  }

  .change-page {
    float: right;
    margin-right: 70px;
    display: inline-block;
    font-size: 14px;
    color: #969696;
  }

  .author-box {
    clear: both;
    margin-bottom: 10px;
    padding-left: 10px;
  }

  .author-info {
    margin-left: 60px;
    font-size: 11px;
    text-align: left;
    color: #999;
    margin-bottom: 10px;
    padding-right: 20px;
  }

  .author-info h6 {
    font-size: 12px;
    color: #111;
  }

  .avatar {
    width: 40px;
    height: 40px;
    float: left;
    border-radius: 20px;
  }

  .follow {
    clear: both;
    float: right;
    margin-top: -30px;
    margin-right: 60px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
  }

  .view-all {
    background-color: #EFEFEF;
    width: 80%;
    margin-left: 20px;
    height: 30px;
    text-align: center;
    vertical-align: center;
    padding: 1px;
  }
</style>
