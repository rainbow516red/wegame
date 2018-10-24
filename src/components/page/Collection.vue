<template>
  <div>
    <b-row>

      <b-col cols="8">
        <b-media vertical-align="center" class="article-box">
          <div class="one">
            <div class="avatar">
              <img :src="topic.topicUrl" class="article-thumbnail"/>
            </div>
            <div class="two">
              <h5 class="title">{{topic.topicName}}</h5>
              <p class="abstract">
                <span>收藏了{{topic.articleCount}}篇文章,{{topic.fans}}关注</span>
              </p>
            </div>
            <div class="three">
              <p class="button">
                <b-button class="tg">投稿</b-button>
              </p>
              <p class="button" style="padding-left: 18px">
                <b-button variant="success"> + 关注</b-button>
              </p>
            </div>
          </div>
          <div class="new">
            <b-img src="../../static/img/new.png"></b-img>
          </div>

          <div v-for="articleList in topic.articleList" class="article">
            <b-card class="card">
              <div class="cd" style="display: flex">
                <div>
                  <p class="card-title">{{articleList.title}}</p>
                  <p class="card-text" style="padding-right: 35px">
                    {{articleList.summary}}
                  </p>
                  <span class="meta">
        <a class="card-text" target="_blank" style="color: gray">{{articleList.nickname}}</a>
        <a target="_blank">
          <i class="card-text">
            <b-img clss="img" style="opacity:0.5;
    filter:alpha(opacity=50);" src="../../static/img/remake.png"/>{{articleList.comments}}</i>
        </a>
        <span style="padding-left: 8px"><i class="card-text">
          <b-img class="img" src="../../static/img/like.png"/>{{articleList.likes}}</i>
        </span>
      </span>
                </div>
                <div v-for="articleList in topic.articleList">
                  <img :src="articleList.thumbnail" class="article-thumbnail"
                    style="height:100px;width: 120px;"/>

                </div>
              </div>
            </b-card>
            <hr style="width: 620px;"/>
            <b-card class="card">
              <div class="cd" style="display: flex">
                <div>
                  <p class="card-title">{{articleList.title}}</p>
                  <p class="card-text" style="padding-right: 35px">
                    {{articleList.summary}}
                  </p>
                  <span class="meta">
        <a class="card-text" target="_blank" style="color: gray">{{articleList.nickname}}</a>
        <a target="_blank">
          <i class="card-text">
            <b-img clss="img" style="opacity:0.5;
    filter:alpha(opacity=50);" src="../../static/img/remake.png"/>{{articleList.comments}}</i>
        </a>
        <span style="padding-left: 8px"><i class="card-text">
          <b-img class="img" src="../../static/img/like.png"/>{{articleList.likes}}</i>
        </span>
      </span>
                </div>
                <div v-for="articleList in topic.articleList">
                  <img :src="articleList.thumbnail" class="article-thumbnail"
                       style="height:100px;width: 120px;"/>

                </div>
              </div>
            </b-card>
            <hr style="width: 620px;"/>
            <b-card class="card">
              <div class="cd" style="display: flex">
                <div>
                  <p class="card-title">{{articleList.title}}</p>
                  <p class="card-text" style="padding-right: 35px">
                    {{articleList.summary}}
                  </p>
                  <span class="meta">
        <a class="card-text" target="_blank" style="color: gray">{{articleList.nickname}}</a>
        <a target="_blank">
          <i class="card-text">
            <b-img clss="img" style="opacity:0.5;
    filter:alpha(opacity=50);" src="../../static/img/remake.png"/>{{articleList.comments}}</i>
        </a>
        <span style="padding-left: 8px"><i class="card-text">
          <b-img class="img" src="../../static/img/like.png"/>{{articleList.likes}}</i>
        </span>
      </span>
                </div>
                <div v-for="articleList in topic.articleList">
                  <img :src="articleList.thumbnail" class="article-thumbnail"
                       style="height:100px;width: 120px;"/>
                </div>
              </div>
            </b-card>
            <hr style="width: 620px;"/>
            <b-card class="card">
              <div class="cd" style="display: flex">
                <div>
                  <p class="card-title">{{articleList.title}}</p>
                  <p class="card-text" style="padding-right: 35px">
                    {{articleList.summary}}
                  </p>
                  <span class="meta">
        <a class="card-text" target="_blank" style="color: gray">{{articleList.nickname}}</a>
        <a target="_blank">
          <i class="card-text">
            <b-img clss="img" style="opacity:0.5;
    filter:alpha(opacity=50);" src="../../static/img/remake.png"/>{{articleList.comments}}</i>
        </a>
        <span style="padding-left: 8px"><i class="card-text">
          <b-img class="img" src="../../static/img/like.png"/>{{articleList.likes}}</i>
        </span>
      </span>
                </div>
                <div v-for="articleList in topic.articleList">
                  <img :src="articleList.thumbnail" class="article-thumbnail"
                       style="height:100px;width: 120px;"/>

                </div>
              </div>
            </b-card>
            <hr style="width: 620px;"/>
          </div>
          <!--<hr style="width: 620px;"/>-->
        </b-media>
      </b-col>
    <b-col cols="4">
      <div>
      <div  >
        <p class="special">专题公告</p>
      </div>
      <div v-for="specialList in topic.specialList">
        <p style="font-size: 14px">{{specialList.special}}</p>
      </div>
        <div >
          <p style="font-size: 14px;color: #b1b1b1">展开描述</p>
          <hr style="width: 352px;"/>
          <b-img src="../../static/img/share.png"></b-img>
          <hr style="width: 352px;"/>
        </div>
        <div>
          <p class="special">管理员</p>
        </div>
        <div style="display: flex" v-for="fans in topic.fansList">
          <div >
            <img style="width: 33px;height: 33px;border-radius: 20px;":src="fans.avatar">
          </div>
          <div >
            <p style="font-size: 13px;padding-top: 6px;padding-left: 5px">{{fans.name}}</p>
          </div>
        </div>
        <p style="font-size: 14px;color: #b1b1b1">展开更多</p>

        <b-img src="../../static/img/people.png"></b-img>
      </div>
    </b-col>
    </b-row>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        id: this.$route.params.id,
        topic: {},
        articleList: [],
        fansList: [],
        specialList:[]
      }
    },
    activated() {
      this.id = this.$route.params.id;
      console.log(this.id);
      if (this.id == 1) {
        var t = {

          "id": 1,
          "topicName": "读书",
          "topicUrl": "https://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240",
          "summary": "读书读书读书读书读书读书读书读书",
          "articleCount": 49535,
          "fans": 1601,
          "description": "fdfdf",
          "creator": "简书",
          "articleList": [
            {
              "id": 1,
              "title": "《天才在左，疯子在右》读后感",
              "summary": "心理承受能力较弱者谨慎点开～ 你想看见一个不一样的世界吗？在这个世界，有人认为自己是一部小说的主角，某些与他有关联的人是他创造的配角，而...",
              "thumbnail": "https://upload-images.jianshu.io/upload_images/13581594-e06bcdb7c95b9a4a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
              "authorId": 2,
              "nickname": "缕芗欲语",
              "comments": 7,
              "likes": 7,
            },
            {
              "id": 2,
              "title": "《天才在左，疯子在右》读后感",
              "summary": "心理承受能力较弱者谨慎点开～ 你想看见一个不一样的世界吗？在这个世界，有人认为自己是一部小说的主角，某些与他有关联的人是他创造的配角，而...",
              "thumbnail": "https://upload-images.jianshu.io/upload_images/13581594-e06bcdb7c95b9a4a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
              "authorId": 2,
              "nickname": "缕芗欲语",
              "comments": 7,
              "likes": 7,
            }
          ],
          "fansList": [
            {
              "authorId": 1,
              "name":"简书",
              "avatar": "https://upload.jianshu.io/users/upload_avatars/259/5210859b-fc54-4cf8-908f-830f0237926a.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
            },
            {
              "authorId": 2,
              "name":"削寒",
              "avatar": "https://upload.jianshu.io/users/upload_avatars/41086/77cfbdc5a489.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
            },
            {
              "authorId": 3,
              "name":"小红楼",
              "avatar": "https://upload.jianshu.io/users/upload_avatars/2854645/9f85d659-519d-4141-aab8-0ccc623106ea.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
            },
            {
              "authorId": 4,
              "name":"萧艺语",
              "avatar": "https://upload.jianshu.io/users/upload_avatars/7093096/fd7e761d-cfaf-4053-84b4-498c9b6af687.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
            },
            {
              "authorId": 5,
              "name":"铅笔",
              "avatar": "https://upload.jianshu.io/users/upload_avatars/1804456/b0d8fe6d-3c2f-4f8a-bc8d-b6086dbfd3c7.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
            },
            {
              "authorId": 6,
              "name":"江流",
              "avatar": "https://upload.jianshu.io/users/upload_avatars/9280207/c895654b-b31a-4d5c-92d1-9cc81b458eb3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
            },

          ],
          "specialList":[
            {
              "id":1,
              "special":"投稿须知: \n" +
              "读书专题仅收录与读书有关的书评、读书笔记、阅读方法、读书清单等文章。 \n" +
              "文中不得出现非简书的链接;包括但不限于公众号、二维码、头条号、微博、一点资源等带有广告性质的信息; 配图不能带有水印。 \n" +
              "文章收录字数1000字起( 大神请忽略此限制)，请不要直接摘抄原文的话就来投稿。请注意排版美观、请不要密集投稿。 \n" +
              "投稿请查看投稿须知：https://www.jianshu.com/p/2a4cc9232f37 \n" +
              "进群请添加主编微信: MYH561..."
            },
            {
              "id":2,
              "special":""
            }
          ]
        };

        this.topic = t;
      } else {
        this.topic = {};
      }
    },


    computed: function () {
      return this.topic;
    }
  }
</script>

<style scoped>
  .avatar img {
    border-radius: 10px;
    width: 80px;
    height: 80px;
  }

  .one {
    display: flex;
    padding-top: 32px;
    padding-left: 80px;
  }

  .title {
    font-weight: bold;
  }

  .abstract {
    color: gray;
    font-size: 14px;
  }

  .two {
    padding-top: 14px;
    padding-left: 20px;
  }

  .three {
    display: flex;
    padding-top: 20px;
    padding-left: 75px;
  }

  .tg {
    color: #00c300;
    background-color: white;
    border-color: #00c300;
    font-size: 15px;
  }

  .button button {
    border-radius: 20px;
    width: 100px;
    height: 40px;
  }

  .new img {
    padding-left: 80px;
    padding-top: 20px;
  }

  .card {
    width: 630px;
    border-style: solid;
    border-width: 5px;
    border-color: white;
  }

  .card-title {
    font-size: 18px;
    font-weight: bold;
  }

  .card-text {
    font-size: 13px;
    color: gray;
  }

  .img {
    opacity: 0.5;
    filter: alpha(opacity=50);
  }

  .icp img {
    width: 44px;
    height: 32px;
  }
  .article{
    padding-left: 54px;
  }
  .special{
    padding-top: 30px;
    font-size: 14px;
    color: #a4a4a4;
    margin-top: -18px;
  }

</style>
