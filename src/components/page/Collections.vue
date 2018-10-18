<template>
  <div>
    <div class="img">
      <b-img src="../../static/img/hot.png"></b-img>
    </div>

    <b-row class="one">
      <b-col cols="4" v-for="topic in topicList" :key="topic.id" style="padding-top: 60px;margin-left: -20px">
        <div class="collecion-wrap">
            <img :src="topic.topicUrl" class="avatar-collection"/>
            <h5 class="name">
              {{topic.topicName}}
            </h5>
          <span class="summary">
            {{topic.summary}}
          </span>
          <p class="button">
            <b-button variant="success"  style=" border-radius: 20px;width: 100px;height: 40px;"> + 关注</b-button>
          </p>
          <hr style="width: 250px;padding-top: 10px"/>
          <p class="fans">
            <span>
              {{topic.articleCount}}篇文章
            </span>
            <span>
              ·{{topic.fans}}个关注
            </span>
          </p>
        </div>
      </b-col>

    </b-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        topicList: [
          {
            "id": 1,
            "topicName": "@IT·互联网",
            "topicUrl": "https://upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240",
            "summary": " 欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台...",
            "articleCount": 2312,
            "fans": 132,
          },
          {
            "id": 2,
            "topicName": "故事",
            "topicUrl": "https://upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
            "summary": " 故事专题，不论是旅行生活中亲身经历的真实故事，还是童话玄幻遐想的虚构故...",
            "articleCount": 2312,
            "fans": 132,
          },
          {
            "id": 3,
            "topicName": "读书",
            "topicUrl": "https://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
            "summary": "投稿须知:读书专题仅收录与读书有关的书评、读书笔记...",
            "articleCount": 2312,
            "fans": 132,
          },
          {
            "id": 4,
            "topicName": "手绘",
            "topicUrl": "https://upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
            "summary": " 欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台...",
            "articleCount": 2312,
            "fans": 132,
          },
          {
            "id": 5,
            "topicName": "摄影",
            "topicUrl": "https://upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
            "summary": " 欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台...",
            "articleCount": 2312,
            "fans": 132,
          },
          {
            "id": 6,
            "topicName": "简书电影",
            "topicUrl": "https://upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180",
            "summary": " 欢迎关注公众号简宝玉( 公众号ID : jianshu4321 )后台...",
            "articleCount": 2312,
            "fans": 132,
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .one{
    padding-left: 100px;
  }
  .img {
    padding-top: 20px;
    text-align: center;
  }
  .avatar-collection{
    width: 80px;height: 80px;
    margin-top: -40px;

  }
  .collecion-wrap{
    background-color: #f8f8f8;
    text-align: center;
    width: 300px;
    height: 280px;
  }
.name{
  font-weight: bold;
  padding-top: 20px;
}
  .summary{
    font-size: 14px;
    padding-left: 20px;
  }
  .fans{
    font-size: 14px;
  }
  .button{
    padding-top: 10px;
  }
</style>
