<template>
	<div class="group">
		<m-header title="小组" fixed>
  			<a href="javascript:;" slot="right"><img class="m-icon-img margin-right-10" src="../../assets/images/ic_group_search.png"/></a>
  			<a href="javascript:;" slot="right"><img class="m-icon-img" src="../../assets/images/ic_chat_green.png"/></a>
  		</m-header>
  		<div class="groui">
  			<img class="groupTop" src="../../assets/images/ic_group_banner.png"/>			
			<img class="type" src="../../assets/images/ic_rec_group_banner_5.png"/>
			<h3>421238个小组等你来玩<br><span>立即选择加入</span></h3>
			<p>精选推荐</p>
  		</div>		
		<group-classify title="影视"></group-classify>
		<group-classify title="音乐"></group-classify>
		<group-classify title="读书"></group-classify>
		
		<choose txt="进入小组"></choose>
	</div>
</template>

<script>
	import mHeader from '../../components/header'
	import choose from '../../components/choose'
	import groupClassify from './group_classify'
	
	export default {
		
		name: 'group',
		components:{
			mHeader,choose,groupClassify
	  	}
	 
	}
</script>

<style scoped>
.groui{position: relative;}
	.group{margin-top: 44px; margin-bottom: 62px;}
	.group .groupTop{width: 100%;}
	.group .type{width:100%;padding: 0 6px;}
	h3{position: absolute;font-size: 18px;text-align: center;top:20%;left: 25%;font-weight: bold;}
	h3 span{font-size: 13px;font-weight: normal;color: #666}
	.groui p{position: absolute;font-size: 13px;font-weight: normal;color: #fff;bottom:5%;left: 5%;}
</style>