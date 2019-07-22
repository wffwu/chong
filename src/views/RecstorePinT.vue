<template>
	<div id="pint">
		<van-nav-bar
		  title="超值拼团"
		  left-text="返回"
		  @click-left="onClickLeft"
		/>
		<div> 
			<van-tabs v-model="active" line-width='0px'>
			  <van-tab title="精选商品">
			  	<v-fd></v-fd>
			  </van-tab>
			  <van-tab title="我的拼团">
			  	<v-fd></v-fd>
			  </van-tab>
			</van-tabs>
		</div>
	</div>
</template>

<script>
	import Tcon from './RecstorePinTcon';
	export default{
		name:'RecSPint',
		data(){
			return{
				active:2
			}
		},
		components:{
			'v-fd':Tcon
		},
		methods: {
		    onClickLeft() {
		      this.$router.go(-1);
		    }
		}
	}
</script>

<style scoped="">
</style>