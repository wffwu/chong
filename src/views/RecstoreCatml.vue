<template>
	<div id="maoliang">
		<ul>
			<li v-for="(item,i) in lists" :key='i'>
				<img :src="item.foodImage"/>
				<p>{{item.foodName}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios';
	export default{
		name:'RecSCM',
		data(){
			return{
				lists:[]
			}
		},
		mounted(){
			axios({
				url:"http://renaaa.natapp1.cc/pet/food/showAllFood"
			}).then((data)=>{
				console.log(data.data);
				this.lists=data.data;
			})
		}
	}
</script>

<style scoped="">
	#maoliang ul{
		width: 100%;
	}
	#maoliang li{
		float: left;
		width: 67px;
		margin: 8px 9px 0px 9px;
		text-align: center;
	}
	#maoliang li img{
		width: 67px;
		height: 67px;
		border-radius: 50%;
	}
	#maoliang li p{
		margin-top: 2px;
		font-size: 12px;
		color: rgba(111,111,111,1);
	}
</style>