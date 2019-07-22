<template>
	<div id='stys'>
		<van-tabbar v-model="active" style="position: absolute;top: 10px;color: rgba(16,16,16,1);">
		  <van-tabbar-item to='/cat'>
		  	<img :src="imgs3"/>
		    <span>猫猫</span>
		  </van-tabbar-item>
		  <van-tabbar-item to='/dog'>
		  	<img :src="imgs2"/>
		    <span>狗狗</span>
		  </van-tabbar-item>
		  <van-tabbar-item to='/team'>
		  	<img :src="imgs1"/>
		    <span>拼团</span>
		  </van-tabbar-item>
		  <van-tabbar-item to='/word'>
		  	<img :src="imgs0"/>
		    <span>全球购</span>
		  </van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
	export default {
		name:'Recstoresy',
	  	data(){
	    	return {
	      		active: 0,
		        imgs3: 'http://img3.imgtn.bdimg.com/it/u=1017869465,394343110&fm=26&gp=0.jpg',
		        imgs2: 'http://img3.imgtn.bdimg.com/it/u=4160653038,723400735&fm=26&gp=0.jpg',
		        imgs1: 'http://img1.imgtn.bdimg.com/it/u=2601743399,741103394&fm=15&gp=0.jpg',
		        imgs0: 'http://img2.imgtn.bdimg.com/it/u=441757278,4264850484&fm=15&gp=0.jpg'
	    	}
	  	}
	}
</script>

<style scoped="">
	#stys{
		width: 100%;
		height: 78px;
		text-align: center;
		margin-bottom: 8px;
		position: relative;
		cursor: pointer;
	}
	#stys img{
		display: block;
		width: 40px;
		height: 40px;
		margin-bottom: 8px;
	}
</style>