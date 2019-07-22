<template>
	<div id='dog'>
		<div id="dogh">
			<p>买狗狗</p>
			<span>放心交易，大猫30天健康保障</span>
		</div>
		<ul>
			<li v-for='(item,i) in list' :key='i'>
				<img :src="item.petImage"/>
				<div id="consd">
					<p>{{item.petName}}</p>
					<p>{{item.petDetail}}</p>
					<p id='fotd'>{{item.petPrice}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios';
	export default{
		name:'RecDog',
		data(){
			return{
				list:[]
			}
		},
		mounted(){
			axios({
				url:"http://renaaa.natapp1.cc/pet/animal/showAllDog"
			}).then((data)=>{
				console.log(data.data);
				this.list=data.data;
			})
		}
	}
</script>

<style scoped="">
	#dog{
		position: relative;
		top:60px;
		min-height: 72px;
		width: 100%;
	}
	#dog #dogh{
		margin-left: 15px;
		height: 20px;
		font-size: 14px;
		text-align: left;
		color:rgba(16,16,16,1);
	}
	#dogh p{
		width: 42px;
		float: left;
	}
	#dogh span{
		display: inline-block;
		width: 159px;
		height: 17px;
		color: rgba(213,213,213,1);
		font-size: 12px;
		position: absolute;
		left: 62px;
		top: 15px;
	}
	#dog ul{
		margin-top: 28px;
	}
	#dog ul li{
		margin-left: 15px;
		height: 72px;
		margin-bottom:28px;
	}
	#dog ul li img{
		width: 72px;
		height: 72px;
	}
	#dog ul li #consd{
		position: absolute;
		left: 98px;
		width: 220px;
		height: 12px;
		border-bottom: 1px solid rgba(213,213,213,1)
	}
	#dog ul li:last-child #consd{
		border: none;
	}
	#dog ul li #consd p{
		position: absolute;
		top: -84px;
		height: 20px;
		font-size: 14px;
		color: rgba(16,16,16,1);
		text-align: left;
	}
	#dog ul li #consd p:nth-child(2){
		top: -64px;
		font-size: 12px;
		color:rgba(213,213,213,1);
	}
	#dog ul li #consd #fotd{
		top: -42px;
		font-size: 12px;
	}
</style>