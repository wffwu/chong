<template>
	<div id="fl">
		<ul id='ml'>
		  <li @click='tap()'>
		  	<span>不限</span>
		  	<div class="maoliang1" v-show='shows'>
		  		<v-ml></v-ml>
		  	</div>
		  	
		  </li>
		  <li @click='tap()'>
		  	<span>主粮</span>
		  	<div class="maoliang1" v-show='shows'>
		  		<v-ml></v-ml>
		  	</div>
		  </li>
		  <li @click='tap()'>
		  	<span>窝垫</span>
		  	<div class="maoliang1" v-show='shows'>
		  		<v-ml></v-ml>
		  	</div>
		  </li>
		  <li @click='tap()'>
		  	<div class="maoliang1" v-show='shows'>
		  		<v-ml></v-ml>
		  	</div>
		  </li>
		  <li @click='tap()'>
		  	<span>零食</span>
		  	<div class="maoliang1" v-show='shows'>
		  		<v-ml></v-ml>
		  	</div>
		  </li>
		  <li @click='tap()'>
		  	<span>玩具</span>
		  	<div class="maoliang1" v-show='shows'>
		  		<v-ml></v-ml>
		  	</div>
		  </li>
		  <li @click='tap()'>
		  	<span>保健</span>
		  	<div class="maoliang1" v-show='shows'>
		  		<v-ml></v-ml>
		  	</div>
		  </li>
		  <li @click='tap()'>
		  	<span>护理</span>
		  	<div class="maoliang1" v-show='shows'>
		  		<v-ml></v-ml>
		  	</div>
		  </li>
		  <li @click='tap()'>
		  	<span>生活</span>
		  	<div class="maoliang1" v-show='shows'>
		  		<v-ml></v-ml>
		  	</div>
		  </li>
		  <li @click='tap()'>
		  	<span>索引</span>
		  	<div class="maoliang1" v-show='shows'>
		  		<v-ml></v-ml>
		  	</div>
		  </li>
		  <li @click='tap()'>
		  	<span>内容</span>
		  	<div class="maoliang1" v-show='shows'>
		  		<v-ml></v-ml>
		  	</div>
		  </li>
		</ul>
	</div>
</template>

<script>
	import RecSCM from '@/views/RecstoreCatml';
	export default{
		name:'CatFL',
		data() {
		    return {
		      active: 1,
		      shows:false
		    }
		},
		components:{
			'v-ml':RecSCM
		},
		methods:{
			tap(){
				this.shows=true;
			}
		}
	}
</script>

<style scoped="">
	#fl{
		width: 100%;
		height:100%;
		text-align: center;
		color: rgba(16,16,16,1);
		line-height: 20px;
		font-size:13px;
		border-top: 1px solid #cdcdcd;
		position: relative;
	}
	#fl ul{
		width: 35px;
		padding: 3px 10px;
		height: auto;
		text-align: center;
		border-right: 1px solid #cdcdcd;
	}
	#fl ul li{
		margin-top: 20px;
	}
	#fl ul li .maoliang1{
		width: 260px;
		position: absolute;
		left: 60px;
		top: 14px;
	}
</style>