<template>
	<div id="yhj">
		<ul class="yh1">
			<li @click='tap()'> 
				<p>5元</p>
				<p>满68元可用</p>
			</li>
			<li @click='tap()'>
				<p>10元</p>
				<p>满98元可用</p>
			</li>
			<li @click='tap()'>
				<p>30元</p>
				<p>满288元可用</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'Recstoreyhj',
		methods:{
			tap(){
				this.$router.push('/yhj');
			}
		}
	}
</script>

<style scoped="">
	#yhj{
		width: 100%;
		height: 82px;
		padding: 8px 6px;
		margin-bottom: 8px;
	}
	#yhj .yh1 li{
		width: 29%;
		height: 82px;
		float: left;
		text-align: center;
		margin:0px 5px;
		background: url(http://img1.imgtn.bdimg.com/it/u=2311247745,3631045874&fm=26&gp=0.jpg) no-repeat center;
		background-size: 100% 100%;
	}
	#yhj .yh1 li p{
		color: rgba(16,16,16,1);
		font-size: 14px;
		margin-top: 24px;
	}
	#yhj .yh1 li p:last-child{
		color: rgba(111,111,111,1);
		font-size: 12px;
		margin-top: -16px;
	}
</style>