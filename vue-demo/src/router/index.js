import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Head from '@/components/Head'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hell', // 对应的路由地址
      name: 'HelloWorld', // 对应的组件名
      component: HelloWorld // 对应的组件名称
    },{
      path: '/head',
      name: 'Head',
      component: Head
    }
  ]
})

/*
 第二中配置路由的方式
// 定义路由地址
let baseRoute = [ {
  path: '/hell',
  name: 'HelloWorld',
  component: HelloWorld
},{
  path: '/head',
  name: 'Head',
  component: Head
}];

// 创建路由实例
let router = new Router({
  routes: baseRoute
});
//
export default router;
*/
