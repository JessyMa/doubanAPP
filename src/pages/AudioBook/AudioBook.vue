<template>
  <div  class='audiowrap'>
  	<m-header title="书影音">
  			<a href="javascript:;" slot="right"><img class="m-icon-img margin-right-10" src="../../assets/images/ic_actionbar_search_icon.png"/></a>
  			<a href="javascript:;" slot="right"><img class="m-icon-img" src="../../assets/images/ic_chat_green.png"/></a>
  	</m-header>
    <ul class='navl fix'>
      <li :class="{ac:now==1}" sel='1' @click='now=1'>
        <router-link to="/AudioBook/film">电影</router-link>
      </li>
      <li :class="{ac:now==2}"  sel='2' @click='now=2'>
        <router-link to="/AudioBook/read">读书</router-link>
      </li>
      <li :class="{ac:now==3}"  sel='3' @click='now=3'>
        <router-link to="/AudioBook/tv">电视</router-link>
      </li>
      <li :class="{ac:now==4}"  sel='4' @click='now=4'>
        <router-link to="/AudioBook/city">同城</router-link>
      </li>
      <li :class="{ac:now==5}"  sel='5' @click='now=5'>
        <router-link to="/AudioBook/music">音乐</router-link>
      </li>
    </ul>
    <div><router-view></router-view></div>
  </div>
</template>

<script>
  import mHeader from '../../components/header'

  export default {
    name: 'broadcast',
    components: {
      mHeader
    },
    data: function () {
      return {
        now: 1,
      }
    },
  }
</script>


<style type="text/css">
 .fix{height: 32px;line-height: 30px;border-bottom: 1px solid #E4E4E4;padding-bottom: 3px;background: #fff;position: fixed;top:44px;
    left:0; z-index: 9;width: 100%}
  .audiowrap .navl li{width: 20%;text-align: center;float: left;font-size: 14px;}
  .audiowrap ul li a{color: #939393;}
  .audiowrap ul .ac{border-bottom: 2px solid #42BD56;}
  .audiowrap ul .ac a{color: #42BD56;}
</style>
