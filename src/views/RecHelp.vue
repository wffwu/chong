<template>
	<div id="help">
		<van-nav-bar
		  title="求助问答"
		  left-text="返回"
		  @click-left="onClickLeft"
		/>
		<div id="bbyy">
			<img src="../assets/cg1.jpg"/>
			<p class='bbws'>
				<span>求助问答</span>
				<span>成员522927 帖子151591</span>
				<span>></span>
			</p>
			<div id="pp">
				<i>全部</i>
				<i>精华</i>
				<i>犬瘟细小</i>
				<i>按回复时间排序</i>
			</div>
		</div>
		<ul class='babypl'>
			<li v-for="item in lists" :key='item.pid'>
				<div id="bbyh">
					<img :src="item.pimg"/>
					<p class='bbw'>
						<span>{{item.pname}}</span>
						<span>{{item.pdesc}}</span>
					</p>
					<p class='bbs'>小猫很可爱，卖家人很好</p>
					<div class='cimg'>
							<img src="../assets/cg1.jpg"/>
					</div>
				</div>
				<div id="huif">
					<span>回复</span>
					<span>喜欢</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios';
	export default{
		name:'RecHelp',
		data(){
			return{
				lists:''
			}
		},
		methods: {
		    onClickLeft() {
		      this.$router.go(-1);
		    }
		},
		mounted(){
			axios({
				url:"http://jx.xuzhixiang.top/ap/api/productlist.php"
			}).then((data)=>{
				console.log(data.data.data);
				this.lists=data.data.data;
			})
		}
	}
</script>

<style scoped="">
	#bbyy img{
		width: 34px;
		height: 34px;
		border-radius: 50%;
		line-height: 20px;
		background: #ccc;
	}
	#bbyy .bbws span{
		font-size: 12px;
		color: rgba(100,100,100,1);
	}
    #bbyy .bbws span:first-child{
		display: block;
		color: rgba(16,16,16,1);
		font-size: 14px;
	}
	#bbyy .bbws span:last-child{
		display: inline-block;
		width: 40px;
		height: 20px;
		background: #ccc;
		border-radius: 8px;
		text-align: center;
		position: absolute;
		left: 208px;
		top: 8px;
	}
	#bbyy .bbws{
		position: absolute;
		left: 54px;
		top: -12px;
	}
	 #bbyy .bbws span:last-child{
		background: #fff;
		font-size: 18px;
		text-align: right;
	}
	#bbyy img{
		border-radius: 0px;
	}
	#bbyy{
		margin-bottom: 10px;
		height: 60px;
		padding: 8px 14px;
		position: relative;
	}
	#bbyy #pp{
		margin-top: 8px;
	}
	#bbyy #pp i{
		font-style: normal;
		font-size: 14px;
		color:rgba(16,16,16,1);
		margin-right: 10px;
		display: inline-block;
		width: 39px;
		height: 22px;
	}
	#bbyy #pp i:first-child{
		background: #ccc;
	}
	#bbyy #pp i:nth-child(3){
		width: 60px;
		text-align: center;
	}
	#bbyy #pp i:last-child{
		font-size: 12px;
		width: 98px;
		text-align: center;
		margin-left: 0px;
		color: rgba(100,100,100,1);
	}
	.babypl{
		width:100%;
		height: 100%;
		padding: 14px;
	}
	.babypl li{
		width: 100%;
		margin-bottom:14px;
	}
	.babypl li #bbyh img{
		width: 34px;
		height: 34px;
		border-radius: 50%;
		line-height: 20px;
		background: #ccc;
	}
	.babypl li .bbw{
		position: relative;
		left: 40px;
		top: -58px;
	}
	.babypl li .bbw span{
		font-size: 12px;
		color: rgba(100,100,100,1);
	}
	.babypl li .bbw span:first-child{
		display: block;
		color: rgba(16,16,16,1);
		font-size: 14px;
	}
	.babypl li #bbyh .cimg img{
		display: block;
		width: 292px;
		height: 220px;
		border-radius: 0;
		margin-top: 13px;
	}
	.babypl li .bbs{
		margin-top: -62px;
		font-size: 14px;
		color: rgba(16,16,16,1);
	}
	#huif{
		margin-top: 8px;
		width: 100%;
		height: 36px;
		line-height: 36px;
	}
	#huif span{
		display: inline-block;
		width: 45%;
		height: 36px;
		line-height: 36px;
		text-align: center;
		background:#ccc;
	}
</style>