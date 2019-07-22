<template>
	<div id="scat">
		<van-nav-bar
		  title="猫猫"
		  left-text="返回"
		  @click-left="onClickLeft"
		/>
		<div> 
			<van-tabs v-model="active" line-width='0px'>
			  <van-tab title="分类">
			  	<v-fl></v-fl>
			  </van-tab>
			  <van-tab title="猫猫">
			  	<v-mam></v-mam>
			  </van-tab>
			</van-tabs>
		</div>
		
	</div>
</template>

<script>
	import CatFL from '@/views/RecstoreCatfl';
	import RecSCmm from '@/views/RecstoreCatmaomao';
	export default{
		name:'RecstoreCat',
		data(){
			return{
				active:2
			}
		},
		components:{
			'v-fl':CatFL,
			'v-mam':RecSCmm
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