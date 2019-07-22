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
		name:'RecLb',
	  	data() {
		    return {
		      images: [
			        				'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3982167210,46709942&fm=15&gp=0.jpg',
				'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2083596383,1479978556&fm=26&gp=0.jpg',
				'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3835461084,2516316019&fm=15&gp=0.jpg',
				'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=66209164,3726750242&fm=26&gp=0.jpg',
				'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1159812177,2533301681&fm=26&gp=0.jpg',
				'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2371755679,11488868&fm=26&gp=0.jpg'
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