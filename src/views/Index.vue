<template>
	<div>
		<van-nav-bar title="宠"  @click-right="onClickRight" :fixed="true">
	  		<van-icon name="search" slot="right"/>
		</van-nav-bar>
		<div id="comm" style="margin-top: 46px;margin-bottom: 50px;">
			<v-banner></v-banner>
			<v-nav></v-nav>
			<v-zsj></v-zsj>
			<v-recdog></v-recdog>
			<v-reccat></v-reccat>
			<v-mk></v-mk>
		</div>
			<van-tabbar v-model="active">
			  <van-tabbar-item icon="wap-home" to="/index">首页</van-tabbar-item>
			  <van-tabbar-item icon="shop-o" to="/cmt">社区</van-tabbar-item>
			  <van-tabbar-item icon="cash-back-record" to="/buy">购宠</van-tabbar-item>
			  <van-tabbar-item icon="chat-o" to="/new">消息</van-tabbar-item>
			  <van-tabbar-item icon="friends-o" to="/my">我的</van-tabbar-item>
			</van-tabbar>
	</div>
</template>
	
<script>
	import RecLb from './RecLb';
	import RecSy from './Recsy';
	import RecZsj from './Reczsj';
	import RecDog from './Recdog';
	import RecCat from './Reccat';
	import RecMk from './Recmk';
	export default{
		name:'Index',
		data(){
			return{
				active:0
			}
		},
		components:{
			'v-banner':RecLb,
			'v-nav':RecSy,
			'v-zsj':RecZsj,
			'v-recdog':RecDog,
			'v-reccat':RecCat,
			'v-mk':RecMk
		},
		methods:{
			onClickRight(){
				this.$router.push('/search');
			}
		}
	}
</script>

<style scoped="">
	
</style>