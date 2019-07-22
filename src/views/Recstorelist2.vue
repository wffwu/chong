<template>
	<div id='rel'>
		<p>免税直邮</p>
		<ul>
			<li v-for="(item,i) in lists" :key='i'>
				<img :src="item.petImage"/>
				<div id="list">
					<p>{{item.petName}}</p>
					<p>3人团  ￥9.9</p>
					<p id='fotds'>单价买  {{item.petPrice}}</p>
				</div>
				
			</li>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios';
	export default{
		name:'RecstoreList2',
		data(){
			return{
				lists:[]
			}
		},
		mounted(){
			axios({
				url:"http://renaaa.natapp1.cc/pet/animal/showAllDog"
			}).then((data)=>{
				console.log(data.data);
				this.lists=data.data;
			})
		}
	}
</script>

<style scoped="">
	#rel{
		width: 100%;
		min-height: 265px;
		margin-bottom: 4px;
	}
	#rel p{
		margin-left: 14px;
		height: 20px;
		color: rgba(16,16,16,1);
		text-align: left;
	}
	#rel ul{
		width: 100%;
		min-height: 265px;
	}
	#rel ul li{
		display: inline-block;
		width: 49%;
	}
	#rel ul li:nth-child(2n+1){
		margin-right: 2%;
	}
	#rel img{
		display: block;
		width: 100%;
		height: 150px;
	}
	#rel #list{
		width:100%;
		height: 68px;
		line-height: 20px;
		font-size: 14px;
		text-align: center;
		color: rgba(243,241,241,1);
		position: relative;
	}
	#rel #list p{
		margin-left: 14px;
		margin-top: 6px;
		height: 20px;
		color: rgba(16,16,16,1);
		text-align: left;
	}
	#rel #list p:nth-child(2){
		margin-top: -6px;
		height: 16px;
		font-size: 11px;
		text-align: left;
		width: 84px;
		width: 50%;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	#rel #list #fotds{
		color: rgba(213,213,213,1);
		margin-top: -12px;
		height: 16px;
		font-size: 11px;
		text-align: left;
	} 
	
</style>