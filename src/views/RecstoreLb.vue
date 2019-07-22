<template>
	<div>
		<van-swipe :autoplay="3000">
		  <van-swipe-item v-for="(image, index) in images" :key="index">
		    <img v-lazy="image" />
		  </van-swipe-item>
		</van-swipe>
	</div>
</template>

<script>
	export default {
		name:'Recstorelb',
	  	data() {
		    return {
		      images: [
			    'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1088325478,2570335309&fm=26&gp=0.jpg',
				'https://f12.baidu.com/it/u=3456692867,3836972449&fm=72',
				'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=199499870,2870455232&fm=26&gp=0.jpg',
				'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=206967550,417887729&fm=15&gp=0.jpg',
				'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=769270829,2124299004&fm=26&gp=0.jpg'
		      ]
		    }
	  	}
	}
</script>

<style scoped="">
	img{
		display: block;
		width: 100%;
		height: 142px;
		text-align: center;
	}
</style>