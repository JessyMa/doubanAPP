<template>
	<div class="groupClassify">
		<div class="title">{{ title }}</div>
		<group-item></group-item>
		<group-item></group-item>
		<group-item></group-item>
	</div>
</template>

<script>
	import groupItem from './group_item';
	
	export default {
		
		name: 'group_classify',
		props:["title"],
		data:function(){
	 		return{
	 			
	 		}
	 	},
		components:{
			groupItem
	  	}
	 
	}
</script>

<style scoped>
	.groupClassify{margin: 0 15px; border-top: 1px solid #e8e8e8; position: relative; margin-top: 20px; padding-top: 10px;}
	.groupClassify .title{width:90px; position: absolute; top: -10px; margin: 0 auto;  left:0; right:0; text-align: center; background: #f7f7f7;font-size: 15px;}
</style>