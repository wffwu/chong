<template>
	<div id="scat">
		<van-nav-bar
		  title="狗狗"
		  left-text="返回"
		  @click-left="onClickLeft"
		/>
		<div> 
			<van-tabs v-model="active" line-width='0px'>
			  <van-tab title="分类">
			  	<v-fl></v-fl>
			  </van-tab>
			  <van-tab title="狗狗">
			  	<v-mam></v-mam>
			  </van-tab>
			</van-tabs>
		</div>
		
	</div>
</template>

<script>
	import DogFL from '@/views/RecstoreDogfl';
	import RecSCdd from '@/views/RecstoreDoggougou';
	export default{
		name:'RecstoreDog',
		data(){
			return{
				active:2
			}
		},
		components:{
			'v-fl':DogFL,
			'v-mam':RecSCdd
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