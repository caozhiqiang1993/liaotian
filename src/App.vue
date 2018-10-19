<template>
  <div id="app">
    <router-view :contentkey="contentIndex"></router-view>
  </div>
</template>

<script>
import './css/ionicons/ionicons.min.css'
export default {
  name: 'App',
  data(){
    return {
      contentIndex:1
    }
  },
  methods:{
    slip(slip_box,_this, left_range) {
      var startX,startY,moveEndX,moveEndY,X,Y;
      slip_box.addEventListener("touchstart", function(e) {

        startX = e.changedTouches[0].pageX,

        startY = e.changedTouches[0].pageY;

      });

      slip_box.addEventListener("touchmove", function(e) {

        moveEndX = e.changedTouches[0].pageX;

        moveEndY = e.changedTouches[0].pageY;

        X = moveEndX - startX;

        Y = moveEndY - startY;

        // if (Math.abs(X)<60) {break;}
        // if (Math.abs(Y)<50) {return false;}

        if (Math.abs(X) > Math.abs(Y) && X > 60) {
          if(_this.contentIndex != 0){
            _this.contentIndex--
          }
          console.log(_this);
          // console.log("left : right");

        } else if (Math.abs(X) > Math.abs(Y) && X < -60) {
          if(_this.contentIndex != 2){
            _this.contentIndex++
          }

          console.log(_this.contentIndex);
          // console.log("right : left");
        } else if (Math.abs(Y) > Math.abs(X) && Y > 0) {

          // console.log("top : bottom");

        } else if (Math.abs(Y) > Math.abs(X) && Y < 0) {

          // console.log("bottom : top");

        } else {

          // console.log("just touch");

        }

      });
    }
  },
  mounted(){
    // this.slip(document.body,this);
  }
}
</script>

<style>
#app{
  background: #eee;
}
</style>
