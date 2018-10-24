import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      //首页组件
      path: '/',
      redirect: '/index',
      component: resolve => require(['../components/commons/Home.vue'], resolve),
      meta: {title: '首页'},
      children: [
        {
          path: '/index',
          component: resolve => require(['../components/page/Index.vue'], resolve),
          meta: {title: '关注'}
        },
        {
          //关注组件
          path: '/subscriptions',
          component: resolve => require(['../components/page/Subscriptions.vue'], resolve),
          meta: {title: '关注'}
        },
        {
          //消息组件
          path: '/notifications',
          component: resolve => require(['../components/page/Notifications.vue'], resolve),
          meta: {title: '消息'},
          children: [
            {
              path: '/comment',
              component: resolve => require(['../components/notifications/Comment.vue'],resolve),
              meta: {title:'个人用户评论'}
            },
            {
              path: '/letter',
              component: resolve => require(['../components/notifications/Letter.vue'],resolve),
              meta: {title:'简信'}
            },
            {
              path: '/likeAndPraise',
              component: resolve => require(['../components/notifications/LikeAndPraise.vue'],resolve),
              meta: {title:'喜欢和赞'}
            },
            {
              path: '/submission',
              component: resolve => require(['../components/notifications/Submission.vue'],resolve),
              meta: {title:'投稿请求'}
            },
          ]
        },
        {
          //所有用户组件
          path: '/users',
          component: resolve => require(['../components/page/Users.vue'], resolve),
          meta: {title: '所有用户'}
        },
        {
          //所有专题组件
          path: '/colletions',
          component: resolve => require(['../components/page/Collections.vue'], resolve),
          meta: {title: '所有专题'}
        },
        {
          path:'/c/:id',
          component: resolve => require(['../components/page/Collection.vue'], resolve),
          meta: {title: '专题详情'}
        },
        {
          // 个人中心组件
          path: '/u',
          component: resolve => require(['../components/page/User.vue'], resolve),
          meta: {title: '个人中心'}
        },
       // 文章详情页
        {
          path: '/sign_in',
          component: resolve => require(['../components/page/SignIn.vue'], resolve),
          meta: {title: '登录界面'}
        },
        {
          path: '/',
          component: resolve => require(['../components/page/HotUsers.vue'], resolve),
          meta: {title: 'hotusers'}
        },
        {
          path: '/d/:id',
          component: resolve => require(['../components/page/Content.vue'], resolve),
          meta: {title: '文章详情页'}
        }
      ]
    },

    {
      // 写文章
      path: '/write',
      component: resolve => require(['../components/page/Write.vue'], resolve),
      meta: {title: '写文章'}
    }


  ]
})
