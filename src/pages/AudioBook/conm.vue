<template>
  <div>
    <div  class="comts" v-for="item in comitem">
      <div class="comts-left">
        <h4>{{item.tit}}</h4>
        <p>{{item.words}}</p>
        <span>{{item.aut}}</span>
      </div>
      <div class="comts-right " :style="{'background-image':'url('+item.imge+')'}">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['comitem'],
    data () {
      return {

      }
    }
  }
</script>

<style>
  .comts{height: 100px;background: #fff;margin-bottom: 15px;}
  .comts-left{
    float: left;
    padding-right: 20px;
    width: 70%;
  }
  .comts-left h4{font-size: 16px;line-height: 22px;font-weight: normal;padding-bottom: 5px;}
  .comts-left p{font-size: 10px;color: darkgray;line-height: 17px;margin-bottom: 10px;height: 36px;overflow: hidden;
    text-overflow: ellipsis;}
  .comts-left span{font-size: 10px;color: darkgray;line-height: 17px;}
  .comts-right{
    float: right;
    width: 74px;
    height: 95px;
    overflow: hidden;
    background-position: center center;
    background-size: cover;
    margin-right: 20px;
  }
</style>
