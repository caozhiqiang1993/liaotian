// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
window.router = router;

import Resource from 'vue-resource'
Vue.use(Resource)
window.resource = Resource;
// console.log(resource("get"))

import i_cookie from './js/i_cookie.js'
Vue.prototype.i_cookie=i_cookie

import sessionStorage from './js/sessionStorage.js'
Vue.prototype.sessionStorage=sessionStorage

import storage from './js/storage.js'
Vue.prototype.storage=storage

import socket from './js/socket.js'
// Vue.use(socket)
Vue.prototype.socket=socket


// Vue.http.headers.common['token'] = 'YXBpOnBhc3N3b3Jk';

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// import './css/my-mint.css'
Vue.use(MintUI)

Vue.prototype.MintUI = MintUI;

//跳转判断
router.beforeEach((to, from, next) => {
	console.log(to)
  //根据字段判断是否路由过滤
  if (to.meta.auth) {
    if (storage.get('key').length > 0) {
		next()
		return
    } else {
        next({path:'/login'});
        return
    }
  } else {
    next()//若点击的是不需要验证的页面,则进行正常的路由跳转
  }
});

/*Vue.http.interceptors.push((request,next)=>{
 //request.credentials = true; // 接口每次请求会跨域携带cookie
 //request.method= 'POST'; // 请求方式（get,post）
 //request.headers.set('token','111') // 请求headers携带参数
// request.credentials = true;
// request.method= 'JSONP';
// request.headers.set('Test','111')
console.log(request)
 next(function(response){

  console.log(response)
  return response;
 });
})*/

Vue.prototype.msgName = '1';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
