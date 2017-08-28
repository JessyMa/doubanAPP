<template>
	<div class="chooseBox" v-if="bol">
		<div class="change clearfix">
			<img src="../assets/images/ic_reshare_flag.png">
			<span>换一批</span>
		</div>
		
		<div class="skip" @click="bol=false;">跳过</div>
		<div class="choosed">选好了，{{ txt }}</div>
	</div>
</template>

<script>
	
	export default {
	 	name: 'choose',
		props:["txt"],
		data:function(){
			return{
				bol:true
			}
		}
	  
	}
</script>

<style scoped>
	.chooseBox{position: fixed; bottom: 62px; width: 335px; height: 48px; line-height: 48px; font-size: 14px; padding:0 20px; background: #fff;
		box-shadow: 0 0 4px rgba(0,0,0,0.5);}
	.chooseBox .change{float: left; color: #49BC54; position: relative;}
	.chooseBox .change img{height: 18px; position: absolute; top: 15px;}
	.chooseBox .change span{margin-left: 20px;}
	
	.chooseBox .choosed{float: right; height: 30px; line-height: 30px; background: #49BC54; color: #fff; border-radius: 4px; padding: 0 10px;
		margin-top: 8px; margin-right: 15px;}
	.chooseBox .skip{float: right; color: #acacac;}
</style>