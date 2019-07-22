<template>
	<div id='zsj'> 
		<span class="imgs">
			<img src="../assets/zsj.jpg"/>
		</span>
		<p>{{tit}}</p>
		<p>{{desc}}</p>
	</div>
	
</template>

<script>
	export default{
		name:'RecZsj',
		data(){
			return{
				tit:'爪事件',
				desc:'萌宠逗趣欢乐日常'
//				imgs: require('../../assets/zsj.jpg')
			}
		}
	}
</script>

<style scoped="">
	#zsj{
		position: relative;
		top:80px;
		left: 0;
		width: 100%;
		height: 54px;
		line-height: 20px;
		text-align: center;
		margin: 10px 0px;
	}
	#zsj .imgs img{
		width: 40px;
		height: 40px;
		position: absolute;
		left: 16px;
	}
	#zsj p{
		position: absolute;
		left: 68px;
		top: -14px;
		height: 20px;
		font-size: 14px;
		color: rgba(16,16,16,1);
		text-align: left;
	}
	#zsj p:last-child{
		top: 4px;
		font-size: 12px;
		color: rgba(213,213,213,1);
	}
</style>