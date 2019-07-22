<template>
	<div id="mk">
		<p @click='tap()'>查看更多></p>
	</div>
</template>

<script>
	export default{
		name:'RecMk',
		methods:{
			tap(){
				this.$router.push('/buy');
			}
		}
	}
</script>

<style scoped="">
	#mk{
		margin-top: 10px;
		width: 100%;
		height: 45px;
		font-size: 14px;
		text-align: center;
		line-height: 20px;
	}
	#mk p{
		text-decoration: none;
		color: rgba(16,16,16,1);
	}
</style>