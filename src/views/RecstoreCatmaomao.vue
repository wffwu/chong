<template>
	<div id="maom">
		<ul>
			<li v-for="(item,i) in lists" :key='i'>
				<img :src="item.petImage"/>
				<p>{{item.petName}}</p>
				<p>{{item.petDetail}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios';
	export default{
		name:'RecSCmm',
		data(){
			return{
				lists:[]
			}
		},
		mounted(){
			axios({
				url:"http://renaaa.natapp1.cc/pet/animal/showAllCat"
			}).then((data)=>{
				//console.log(data.data);
				this.lists=data.data;
			})
		}
	}
</script>

<style scoped="">
	#maom ul{
		width: 100%;
		border-top: 1px solid #cdcdcd;
	}
	#maom li{
		float: left;
		width: 90px;
		margin: 8px 8px 0px 8px;
		text-align: center;
	}
	#maom li img{
		width: 90px;
		height: 70px;
	}
	#maom li p{
		margin-top: 2px;
		line-height: 18px;
		font-size: 12px;
		color: rgba(36,36,36,1);
	}
	#maom li p:last-child{
		margin-top: -12px;
		color: rgba(111,111,111,1);
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
</style>