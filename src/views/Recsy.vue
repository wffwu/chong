<template>
	<div>
		<van-tabbar v-model="active" id="nav" style="z-index: 0;">
		  <van-tabbar-item icon="location-o" to='/near'>附近</van-tabbar-item>
		  <van-tabbar-item icon="hotel-o" to='/store'>商城</van-tabbar-item>
		  <van-tabbar-item icon="thumb-circle-o" to='/baby'>宝宝热评</van-tabbar-item>
		  <van-tabbar-item icon="records" to='/help'>求助问答</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
	export default {
		name:'RecSy',
	  	data(){
	    	return {
	      		active: 0
	    	}
	  	}
	}
</script>

<style scoped="">
	#nav{
		position: absolute;
		top:190px;
		left: 0;
		width: 100%;
		height: 74px;
		line-height: 20px;
		text-align: center;
	}
</style>