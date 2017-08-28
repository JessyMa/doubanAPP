<template>
	<div class="group_item clearfix">
		<div class="avatar">
			<img src="../../assets/images/media.jpg">
		</div>
		
		<div class="profile">
			<h3>冰与火之歌</h3>
			<p>winter is comming . 布兰说：“混沌是阶梯”</p>
		</div>
		
		<div class="focusedNum">45936</div>
		
		<div class="selected" @click="active=!active">
			<span v-show="!active"><img src="../../assets/images/ic_rating_sync_normal.png" /></span>
			<span v-show="active"><img src="../../assets/images/ic_rating_sync_checked.png" /></span>
		</div>
		
	</div>
</template>

<script>
	
	export default {
		name: 'group_item',
		props:[],
		data:function(){
			return {
				active:false
			}
		}
	 
	}
</script>

<style scoped>
	.group_item{padding: 12px 0;}
	.group_item .avatar{float:left; width: 52px; height: 52px; border-radius: 4px; overflow: hidden; margin-right: 10px;}
	.group_item .avatar img{width: 100%; height: 100%;}
	
	.group_item .profile{float:left; width: 220px;}
	.group_item .profile p{line-height: 15px; height: 30px; overflow: hidden; font-size: 14px; color: #a7a7a7;}
	
	.group_item .focusedNum{float: left; font-size: 13px; color: #cccccc;}
	.group_item .selected{float: left; height: 26px; margin-top: 15px; margin-left: 8px;} 
	.group_item .selected img{height: 100%;} 
</style>