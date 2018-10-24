<template>
  <div class="all">
    <b-row>

      <b-col cols="">
        <b-media vertical-align="center" class="article-box">

          <div class="one">
            <h2 class="title">{{topic.topicName}}</h2>
            <div class="three">
              <div class="avatar">
                <img :src="topic.topicUrl" class="article-thumbnail"/>
              </div>
              <div style="display: inline;padding-left: 10px">
                <span>
                <p>{{topic.creator}}</p>
                  <p>
                  <b-img class="button" src="../static/img/button.png"></b-img>
                  </p>
                  </span>
                <p class="abstract">
                  <span>{{topic.time}}&nbsp字数{{topic.articleCount}}&nbsp阅读{{topic.fans}}&nbsp评论{{topic.remake}}&nbsp喜欢{{topic.number}}</span>
                </p>
              </div>
            </div>
          </div>
          <div style="padding-left: 78px;padding-top: 50px">
            <p>
              <b-img :src="topic.comment"/>
            </p>
          </div>
          <div style="padding-left: 310px;padding-top: 30px">
            <b-button style="background-color: tomato; border-radius: 20px;width: 100px;height: 40px;"> 赞赏支持</b-button>
          </div>
          <div style="padding-left: 78px;padding-top: 90px">
  <b-img src="../../static/img/banquan.png"></b-img>
          </div>
          <div style="padding-left: 78px">
          <b-card class="card" style="background-color: #f8f8f8;border-color: #bcbcbc;">
            <div class="cd" style="display: flex">
              <div class="">
                <b-img
                  :src="topic.topicUrl"
                  style="height:46px;width: 46px;border-radius:30px">
                </b-img>
              </div>
              <div style="padding-left: 6px">
                <p class="" style="font-size: 16px">{{topic.creator}}</p>
                <p class="card-text" style="font-size: 12px ;color: gray;line-height: 1px">
                  写了238k字 · 706喜欢</p>
              </div>
              <div style="padding-left: 310px;">
                <b-button style="background-color: #3db92e; border-radius: 20px;width: 100px;height: 40px;">+关注</b-button>
              </div>
            </div>
            <hr style="width: 580px;"/>
            <div>
              <p style="font-size: 12px ;color: gray;line-height: 1px">{{topic.news}}</p>
            </div>
          </b-card>
            <div style="padding-right: 30px">
              <b-img src="../../static/img/share1.png"></b-img>
            </div>
          </div>
          <!--<div v-for="articleList in topic.articleList" class="article">-->
          <!--<hr style="width: 620px;"/>-->
          <!--</div>-->

        </b-media>
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
        specialList: []
      }
    },
    activated() {
      this.id = this.$route.params.id;
      console.log(this.id);
      if (this.id == 1) {
        var t = {
          "id": 1,
          "time": "2018.07.20 17:26",
          "number": "593",
          "remake": "6",
          "topicName": "喜欢独处但又很有才华的三大星座，看看你上榜了吗",
          "topicUrl": "https://upload.jianshu.io/users/upload_avatars/12873334/1c66d77c-a9b9-48e2-9234-89d1c4e81595.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96",
          "summary": "每一个星座的个性都是不一样的， 所以往往会产生很多的不同之处，其中，便有几个星座是比较特殊，他们比较喜欢独来独往，但同时他们又很优秀，那么这几个星座都是哪些呢",
          "articleCount": 49535,
          "fans": 1601,
          "description": "fdfdf",
          "creator": "暮时说势",
          "news":"分享各种星座运势、开运方法、占星命理，一起探索“神奇的力量”",
          "comment": "../../static/img/comment1.png",
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
              "name": "简书",
              "avatar": "https://upload.jianshu.io/users/upload_avatars/259/5210859b-fc54-4cf8-908f-830f0237926a.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
            },
            {
              "authorId": 2,
              "name": "削寒",
              "avatar": "https://upload.jianshu.io/users/upload_avatars/41086/77cfbdc5a489.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
            },
            {
              "authorId": 3,
              "name": "小红楼",
              "avatar": "https://upload.jianshu.io/users/upload_avatars/2854645/9f85d659-519d-4141-aab8-0ccc623106ea.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
            },
            {
              "authorId": 4,
              "name": "萧艺语",
              "avatar": "https://upload.jianshu.io/users/upload_avatars/7093096/fd7e761d-cfaf-4053-84b4-498c9b6af687.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
            },
            {
              "authorId": 5,
              "name": "铅笔",
              "avatar": "https://upload.jianshu.io/users/upload_avatars/1804456/b0d8fe6d-3c2f-4f8a-bc8d-b6086dbfd3c7.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
            },
            {
              "authorId": 6,
              "name": "江流",
              "avatar": "https://upload.jianshu.io/users/upload_avatars/9280207/c895654b-b31a-4d5c-92d1-9cc81b458eb3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
            },

          ],
          "specialList": [
            {
              "id": 1,
              "special": "投稿须知: \n" +
              "读书专题仅收录与读书有关的书评、读书笔记、阅读方法、读书清单等文章。 \n" +
              "文中不得出现非简书的链接;包括但不限于公众号、二维码、头条号、微博、一点资源等带有广告性质的信息; 配图不能带有水印。 \n" +
              "文章收录字数1000字起( 大神请忽略此限制)，请不要直接摘抄原文的话就来投稿。请注意排版美观、请不要密集投稿。 \n" +
              "投稿请查看投稿须知：https://www.jianshu.com/p/2a4cc9232f37 \n" +
              "进群请添加主编微信: MYH561..."
            },
            {
              "id": 2,
              "special": ""
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
  .all {
    padding-left: 160px;
    width: 630px;
  }

  .avatar img {
    border-radius: 10px;
    width: 50px;
    height: 50px;
  }

  .one {

    padding-top: 32px;
    padding-left: 80px;
  }

  .title {
    font-weight: bold;
  }

  .abstract {
    color: gray;
    font-size: 12px;
    margin-top: -54px
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

  .article {
    padding-left: 54px;
  }

  .three {
    display: flex;
  }

  .button {
    margin-top: -84px;
    margin-left: 70px;
  }
</style>
