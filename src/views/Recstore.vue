<template>
	<div>
		<van-nav-bar title="商城" left-text="返回" @click-left="onClickLeft">
		  <van-icon name="search" slot="right" @click="onClickRight"/>
		</van-nav-bar>
		<div id="comm" style="margin-bottom: 50px;">
			<v-banner></v-banner>
			<v-yhj></v-yhj>
			<v-sy></v-sy>
			<v-slist></v-slist>
			<v-slist1></v-slist1>
			<v-slist2></v-slist2>
		</div>
	</div>
</template>
	
<script>
	import Recstorelb from './RecstoreLb';
	import Recstoreyhj from './Recstoreyhj';
	import Recstoresy from './Recstoresy'
	import RecstoreList from './Recstorelist'
	import RecstoreList1 from './Recstorelist1'
	import RecstoreList2 from './Recstorelist2'
	export default{
		name:'Recstore',
		data(){
			return{
				active:0
			}
		},
		components:{
			'v-banner':Recstorelb,
			'v-yhj':Recstoreyhj,
			'v-sy':Recstoresy,
			'v-slist':RecstoreList,
			'v-slist1':RecstoreList1,
			'v-slist2':RecstoreList2
		},
		methods:{
			onClickRight(){
				this.$router.push('/search');
			},
			onClickLeft() {
		    	this.$router.go(-1)
		    }
		}
	}
</script>

<style scoped="">
	
</style>