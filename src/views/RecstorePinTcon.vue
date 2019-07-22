<template>
	<div id="PinT">
		<div id="con" v-for='i in num'>
			<img src="../assets/zsj.jpg"/>
			<span>距结束：00.18.34</span>
			<p>【直降10元 改善厌食挑食 消化不良】麦德氏INBASIC消食片 益生菌 调整肠胃 150片/瓶</p>
			<span class='tu'>2人团/￥25.5</span>
			<em>开团去</em>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Tcon',
		data(){
			return{
				num:3
			}
		}
	}
</script>

<style scoped="">
	#con{
		width: 100%;
		height: 300px;
		line-height: 20px;
		color: rgba(16,16,16,1);
		text-align: center;
		padding-top: 24px;
		font-size: 14px;
		margin-bottom: 5px;
		padding-bottom: 20px;
		border-bottom: 1px solid #ccc;
	}
	#con img{
		width: 140px;
		height: 190px;
	}
	#con span{
		display: block;
		margin-top: 24px;
		font-size: 13px;
		color: rgba(100,100,100,1);
	}
	#con span,#con p{
		text-align: left;
		padding-left: 16px;
	}
	#con .tu{
		margin-top: 8px;
	}
	#con p{
		margin:2px;
	}
	#con em{
		color: rgba(100,100,100,1);
		font-style: normal;
	}
	#con em{
		display: inline-block;
		width: 64px;
		height: 22px;
		position: relative;
		top: -20px;
		right: -106px;
		background:#ccc;
		border-radius: 10px;
	}
</style>