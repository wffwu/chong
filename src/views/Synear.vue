<template>
	<div id='synhead'>
		<van-nav-bar
		  title="附近"
		  left-text="返回"
		  @click-left="onClickLeft"
		/>
	
		<van-dropdown-menu style="height: 35px;line-height: 20px;font-size:14px;">
		  <van-dropdown-item v-model="value1" :options="option1" @change='tap()'/>
		  <van-dropdown-item v-model="value2" :options="option2" @change='tap()'/>
		  <van-dropdown-item v-model="value3" :options="option3" />
		</van-dropdown-menu>
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
		<!--<v-list></v-list>-->
	</div>
</template>

<script>
	import RecList from './Reclist';
	import axios from 'axios';
	export default {
		name:'SyNear',
		data() {
		    return {
		      value1: 0,
		      value2: 0,
		      value3: 0,
		      a1:'',
		      a2:'',
		      option1: [
		        { text: '河南', value: 0 },
		        { text: '上海', value: 1 },
		        { text: '北京', value: 2 }
		      ],
		      option2: [
		        { text: '价格', value: 0 },
		        { text: '不限', value: 1 },
		        { text: '2000以下', value: 2 },
		        { text: '2001-5000', value: 3 },
		        { text: '5001-10000', value: 4 },
		        { text: '10001以上', value: 5 }
		      ],
		      option3: [
		        { text: '来源', value: 0 },
		        { text: '不限', value: 1 },
		        { text: '个人', value: 2 },
		        { text: '商户', value: 3 }
		      ],
		      lists:[]
		    }
		  },
		methods: {
		    onClickLeft() {
		      this.$router.go(-1);
		    },
		    tap(){
		    	this.a1=this.option1[this.value1].text;
		    	this.a2=parseInt(this.option2[this.value2].text);
		    	if(isNaN(this.a2)){
		    		this.a2=1;
		    	}
		    	console.log(this.a1);
		    	console.log(this.a2);
		    }
		},
		mounted(){
			var _this=this;
			axios({
				url:"http://renaaa.natapp1.cc/pet/animal/searchByCondition",
				params:{petArea:this.$route.params.a1,petPrice:this.$route.params.a2}
			}).then((data)=>{
				console.log(data.data);
				this.lists=data.data;
				console.log(this.a1);
		    	console.log(this.a2);
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