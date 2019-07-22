<template>
	<div>
		<van-search
		  v-model="value"
		  placeholder="请输入搜索关键词"
		  show-action
		  shape="round"
		  @search="onSearch"
		>
		  <div slot="action" @click="onSearch">返回</div>
		</van-search>
		<div id='rel'>
			<ul>
				<li v-for="(item,i) in lists" :key='i'>
					<img :src="item.petImage"/>
					<div id="list">
						<p>{{item.petName}}</p>
						<p>{{item.petDetail}}</p>
						<p id='fotds'>{{item.petPrice}}</p>
					</div>
					
				</li>
			</ul>
		</div>
	</div>
	
</template>

<script>
	import axios from 'axios';
	export default{
		name:'Search',
		data(){
			return{
				value:'',
				lists:[]
			}
			
		},
		methods:{
			onSearch(){
				this.$router.go(-1);
			}
		},
		mounted(){
			var _this=this;
			axios({
				url:'http://renaaa.natapp1.cc/pet/animal/search',
				params:{petArea:_this.value}
			}).then((data)=>{
				console.log(data.data);
				this.lists=data.data;
				console.log(_this.value);
			})
		}
	}
</script>

<style scoped="">
	#rel{
		width: 100%;
		min-height: 265px;
	}
	#rel ul li{
		display: inline-block;
		width: 49%;
		background: #ffe;
		margin-top: 4px;
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
		margin-top: 16px;
		height: 20px;
		color: rgba(16,16,16,1);
		text-align: left;
	}
	#rel #list p:nth-child(2){
		margin-top: -16px;
		color: rgba(213,213,213,1);
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
		margin-top: -12px;
		height: 16px;
		font-size: 11px;
		text-align: left;
	}
</style>