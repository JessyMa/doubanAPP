<template>
  <div>
    <div class="bcont clearfix" v-for="item in bconts">
      <div class="bcont-left">
        <i></i>
      </div>
      <div class="bcont-right ">
        <div class="t">
          <div class="t-left">
            <h4>{{item.user}}</h4>
            <span>{{item.vis}}人关注</span>
          </div>
          <div class="t-right">
            <button type="button"  @click="item.bol=!item.bol"  class="guan" v-show='item.bol'>关注</button>
            <button type="button"  @click="item.bol=!item.bol"  class="qu" v-show='!item.bol'>取消关注</button>
          </div>
        </div>
        <p>
          {{item.text}}
        </p>
        <img :src="item.imge" alt="">
        <div class="bot">
          <i class="zan"></i><span>{{item.like}}</span><i class="gen"></i><span>{{item.comm}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['bconts'],
    data () {
      return {}
    },
    // methods:{
    //   show(i){
    //     this.bcont[i].bol=!this.bcont[i].bol;
    //   }
    // }
  }
</script>
<style>
  .bcont {
    width: 94%;
    margin: 0 auto;
    background: #fff;
    padding: 15px;
    margin-bottom: 10px
  }

  .clearfix:after {content: "";height: 0;line-height: 0;display: block;visibility: hidden;clear: both;}

  .bcont-left {
    float: left;
  }

  .bcont-left i {
    display: block;
    width: 36px;
    height: 36px;
    margin-right: 10px;
    background: url("../../assets/images/ic_user_info_birthday.png") no-repeat center center;
    display: block;
    float: left;
    background-size: cover;
  }

  .bcont-right {
    float: right;
    width: 85%
  }
  .bcont-right .t{height: 50px;}
  .bcont-right .t .t-left{float: left}
  .bcont-right .t .t-left h4{font-size: 15px;line-height: 22px}
  .bcont-right .t .t-left span{font-size: 0.8em;line-height: 12px;color: #ccc}

  .bcont-right .t .t-right{float: right}
  .bcont-right .t .t-right .guan{
    border: none;border-radius: 4px;width: 50px;
    font-size: 11px;
    text-align: center;line-height: 20px;height: 20px;color: #fff;background: #3bbe58;margin-top: 7px}
   .bcont-right .t .t-right .qu{
    border: none;border-radius: 4px;width: 70px;
    font-size: 11px;
    text-align: center;line-height: 20px;height: 20px;color: #fff;background: #ccc;margin-top: 7px} 
  .bcont-right img{width: 100%;margin-top: 5px}
  .bcont-right .bot{padding: 5px 5px;height: 35px;line-height: 40px;vertical-align: top}
  .bcont-right .bot i{height: 16px;width: 16px;display: inline-block;margin-right: 3px;background-size: cover;}
  .bcont-right .bot .zan{background: url("../../assets/images/ic_liked.png") no-repeat center center;background-size: cover;}
  .bcont-right .bot .gen{background: url("../../assets/images/ic_group_comment_0.png") no-repeat center center;background-size: cover;}
  .bcont-right .bot span{height: 16px;width: 16px;color: #ccc;margin-right: 10px}


</style>
