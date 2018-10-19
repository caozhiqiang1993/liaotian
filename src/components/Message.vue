<template>
  <div id="message">
    <div id="header" ref="header">
      <div class="header_img">
        <i class="iconfont icon-left" @click="handleRouter('')"></i>
      </div>
      <div class="header_text">
        <span v-text="title"></span>
      </div>
    </div>
    <div id="content">
      <div class="msg_info" ref="msg_info">
        <ul>
          <li class="">
            <div class="msg_user_info">
              <img src="//tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg">
              <span>纸飞机</span>
            </div>
            <div class="msg_msg">
              你好，我是主人的美女秘书，有什么事就跟我说吧，等他回来我会转告他的。
              <img src="http://res.layui.com/layui/dist/images/face/27.gif">
            </div>
          </li>
          <li class="">
            <div class="msg_user_info">
              <img src="//tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg">
              <span>纸飞机</span>
            </div>
            <div class="msg_msg">
              你好，
              <img src="http://res.layui.com/layui/dist/images/face/27.gif">
            </div>
          </li>
          <li class="interval_time">
            <span>07-07 14:28</span>
          </li>

          <li class="msg_info_li_right">
            <div class="msg_user_info msg_user_info_right">
              <img src="//tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg">
              <span class="msg_user_info_text_right">纸飞机</span>
            </div>
            <div class="msg_msg msg_msg_right">
              你好，我是主人的美女秘书，有什么事就跟我说吧，等他回来我会转告他的。
              <img src="http://res.layui.com/layui/dist/images/face/27.gif">
            </div>
          </li>
          <li class="msg_info_li_right">
            <div class="msg_user_info msg_user_info_right">
              <img src="//tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg">
              <span class="msg_user_info_text_right">纸飞机</span>
            </div>
            <div class="msg_msg msg_msg_right">
              你好，我是主人的美女秘书，有什么事就跟我说吧，等他回来我会转告他的。
              <img src="http://res.layui.com/layui/dist/images/face/27.gif">
            </div>
          </li>
          <li class="msg_info_li_right">
            <div class="msg_user_info msg_user_info_right">
              <img src="//tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg">
              <span class="msg_user_info_text_right">纸飞机</span>
            </div>
            <div class="msg_msg msg_msg_right">
              你好，我是主人的美女秘书，有什么事就跟我说吧，等他回来我会转告他的。
              <img src="http://res.layui.com/layui/dist/images/face/27.gif">
            </div>
          </li>
          <li class="msg_info_li_right">
            <div class="msg_user_info msg_user_info_right">
              <img src="//tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg">
              <span class="msg_user_info_text_right">纸飞机</span>
            </div>
            <div class="msg_msg msg_msg_right">
              你好，我是主人的美女秘书，有什么事就跟我说吧，等他回来我会转告他的。
              <img src="http://res.layui.com/layui/dist/images/face/27.gif">
            </div>
          </li>
        </ul>
      </div>
      <div class="input_box">
        <div class="input_text">
          <input type="text">
          <button>发送</button>
        </div>
        <div class="more_function">
          <span class="iconfont icon-smile"></span>
          <span class="iconfont icon-tupian"></span>
          <span class="iconfont icon-iconset0196"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { Indicator } from 'mint-ui';
export default {
  name: 'Message',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title: '',
      contentIndex: 2
    }
  },
  props:[''],
  methods:{
    handleRouter(url){
      router.push({path:'/'+url});
    }
  },
  mounted(){
    this.MintUI.Indicator.open();
    console.log(this.msgName)
    this.title = this.$route.query.name
    this.$nextTick(()=>{
      setTimeout(()=>{
        this.$refs.msg_info.scrollTo(1000,5000);
      },0)
      setTimeout(()=>{
        this.MintUI.Indicator.close();
      },1000)
    })
  },
  updated(){
    console.log(22)

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
#header{
  height: 2.2rem;
  line-height: 2.2rem;
  background: #36373C;
}
#header span{
  color: #fff;
  font-size: 0.8rem;
}
#header .header_img {
  position:absolute;
  left: 1.1rem;
}
#header .header_text {
  margin-left: -1.1rem;
  text-align: center;
}
#header i{
  color: #fff;
  font-size: 1.2rem;
}
#content .msg_info{
  height: calc(100vh - 2.2rem - 1.2rem - 1.7rem - 1.7rem - 0.5rem);
  padding: 0.7rem;
  overflow-y: scroll;
}
#content .msg_info ul li{
  min-height: 3rem;
  margin-bottom: 0.5rem;
  padding-left: 2.4rem;
  position: relative;
}

.msg_info_li_right{
  padding-right: 2.4rem;
  padding-left: 0 !important;
}

.msg_user_info_right{
  right: 0.1rem;
  left: auto;
  text-align: right;
}
.msg_user_info_text_right{
  text-align: right;
  right: 2.4rem;
  left: auto !important;
}
.msg_msg_right{
  background: #5FB878 !important;
}

#content .msg_info .msg_user_info{
  position: absolute;
  left: 0.1rem;
}
#content .msg_info .msg_user_info span{
  position: absolute;
  left: 2.4rem;
  top: 0;
  display: inline-block;
  width: 10rem;
  color: #999;
  font-size: 0.3rem;
}
#content .msg_info .msg_user_info img{
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
}
#content .msg_info .msg_msg{
  min-height: 1rem;
  line-height: 1rem;
  background: #fff;
  border-radius: 0.15rem;
  padding: 0.3rem 0.6rem;
  display: inline-block;
  margin-top: 0.9rem;
  font-size: 0.65rem;
  color: #333;
  position:relative;
}
#content .msg_info .interval_time{
  min-height: 0;
  padding-left: 0;
  text-align: center;
}
#content .msg_info .interval_time span{
  padding: 0 0.7rem;
  line-height: 1.45rem;
  display: inline-block;
  background: #ddd;
  border-radius: 3px;
  color: #fff;
  font-size: 0.6rem
}
.msg_msg:after {
    content: '';
    position: absolute;
    left: -0.43rem;
    top: 0.6rem;
    width: 0;
    height: 0;
    border-style: solid dashed dashed;
    border-color: #fff transparent transparent;
    overflow: hidden;
    border-width: 10px;
}
.msg_msg_right:after {
  right: -0.43rem;
  left:auto;
  border-color: #5FB878 transparent transparent;
}




.msg_left{
  text-align: left;
}

.msg_right{
  text-align: right;
}

#content .input_box .input_text{
  display: flex;
  height: 1.7rem;
  margin-top: 0.3rem;
}
#content .input_box .input_text input{
  background: #fff;
  flex: 1;
  height: 1.7rem;
  margin-left: 0.5rem;
  border-radius: 3px;
  padding-left: 0.2rem;
  outline:none;
}
#content .input_box .input_text button{
  padding: 0 1rem;
  margin:0 0.4rem;
  height: 1.7rem;
  color:#fff;
  background: #d2d2d2;
  border-radius: 3px;
  border:none;
  outline: none;
}
#content .input_box .more_function{
  height: 1.7rem;
  margin-left:0.8rem;
}
#content .input_box .more_function span{
  font-size: 1.3rem;
  margin:0 0.6rem;
}
</style>
