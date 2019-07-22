<template>
	<div id='cat'>
		<div id="cath">
			<p>买猫猫</p>
			<span>放心交易，大猫30天健康保障</span>
		</div>
		<ul>
			<li v-for='(item,i) in list' :key='i'>
				<img :src="item.petImage"/>
				<div id="cons">
					<p>{{item.petName}}</p>
					<p>{{item.petDetail}}</p>
					<p id='fot'>{{item.petPrice}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios';
	export default{
		name:'RecCat',
		data(){
			return{
				list:[]
			}
		},
		mounted(){
			axios({
				url:"http://renaaa.natapp1.cc/pet/animal/showAllCat"
			}).then((data)=>{
				console.log(data.data);
				this.list=data.data;
			})
		}
	}
</script>

<style scoped="">
	#cat{
		position: relative;
		margin-top: 74px;
		min-height: 72px;
		width: 100%;
	}
	#cat #cath{
		margin-left: 15px;
		height: 20px;
		font-size: 14px;
		text-align: left;
		color:rgba(16,16,16,1);
	}
	#cath p{
		width: 42px;
		float: left;
	}
	#cath span{
		display: inline-block;
		width: 159px;
		height: 17px;
		color: rgba(213,213,213,1);
		font-size: 12px;
		position: absolute;
		left: 62px;
		top: 15px;
	}
	#cat ul{
		margin-top: 28px;
	}
	#cat ul li{
		margin-left: 15px;
		height: 72px;
		margin-bottom: 28px;
	}
	#cat ul li img{
		width: 72px;
		height: 72px;
	}
	#cat ul li #cons{
		position: absolute;
		left: 98px;
		width: 220px;
		height: 12px;
		border-bottom: 1px solid rgba(213,213,213,1)
	}
	#cat ul li:last-child #cons{
		border: none;
	}
	#cat ul li #cons p{
		position: absolute;
		top: -84px;
		height: 20px;
		font-size: 14px;
		color: rgba(16,16,16,1);
		text-align: left;
	}
	#cat ul li #cons p:nth-child(2){
		top: -64px;
		font-size: 12px;
		color:rgba(213,213,213,1);
	}
	#cat ul li #cons #fot{
		top: -42px;
		font-size: 12px;
	}
</style>