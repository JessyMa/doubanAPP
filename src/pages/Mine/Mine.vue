<template>
  <div>
  	<m-header title="我的" fixed>
  			<a href="javascript:;" slot="right"><img class="m-icon-img" src="../../assets/images/ic_settings.png"/></a>
  	</m-header>
    <div class="load">
      登录 || 注册
    </div>
    <m-cell title="提醒" icon>
    <img src="../../assets/images/ic_mine_notification.png" slot="icon">
    <a href="javascript:;" slot="cell-right"><img src="../../assets/images/ic_arrow_gray_small.png" alt=""></a>
    </m-cell>
    <m-cell title="设置">
    <a href="javascript:;" slot="cell-right"><img src="../../assets/images/ic_settings.png" alt=""></a>
    </m-cell>
    <div class="connav clearfix">
      <Navlist con="喜欢"><img src="../../assets/images/ic_photo_liked.png" alt=""></Navlist>
      <Navlist con="日记"><img src="../../assets/images/ic_my_note.png" alt=""></Navlist>
      <Navlist con="相册"><img src="../../assets/images/ic_my_album.png" alt=""></Navlist>
      <Navlist con="我的广播"><img src="../../assets/images/ic_my_status.png" alt=""></Navlist>
      <Navlist con="电影.电视"><img src="../../assets/images/ic_my_movies_tvs.png" alt=""></Navlist>
      <Navlist con="读书"><img src="../../assets/images/ic_my_books.png" alt=""></Navlist>
      <Navlist con="音乐"><img src="../../assets/images/ic_my_music.png" alt=""></Navlist>
      <Navlist con="同城活动"><img src="../../assets/images/ic_my_events.png" alt=""></Navlist>
      <Navlist con="豆瓣时间"><img src="../../assets/images/ic_latest_group_topics.png" alt=""></Navlist>
      <Navlist con="豆列"><img src="../../assets/images/ic_photo_liked.png" alt=""></Navlist>
      <Navlist con="订单"><img src="../../assets/images/ic_my_orders.png" alt=""></Navlist>
      <Navlist con="钱包"><img src="../../assets/images/ic_my_wallet.png" alt=""></Navlist>
    </div>
  </div>
</template>

<script>
  import mHeader from '../../components/header'
  import mCell from '../../components/cell'
  import Navlist from './navitem'

  export default {
    name: 'mine',
    components: {
      mHeader,
      mCell,
      Navlist
    },
    data() {
      return {
      }
    },
  }
</script>


<style lang="less">
.load{margin-top: 43px;height: 110px;line-height: 110px;text-align: center;color: #fff;background: #42bd56;}
.clearfix:after {content: "";height: 0;line-height: 0;display: block;visibility: hidden;clear: both;}
.connav{background: #fff;margin-top: 15px;margin-bottom: 60px;padding-top: 10px}
</style>
