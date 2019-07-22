<template>
	<div id="baby">
		<van-nav-bar
		  title="宝宝热评"
		  left-text="返回"
		  @click-left="onClickLeft"
		/>
		<ul class='babypl'>
			<li v-for="item in lists" :key='item.pid'>
				<div id="bbyh">
					<div @click='tap()'>
						<img src="../assets/cg1.jpg"/>
						<p class='bbw'>
							<span>{{item.pname}}</span>
							<span>{{item.pdesc}}</span>
						</p>
					</div>
					<div class='cimg'>
						<img :src="item.pimg"/>
					</div>
					<p class='bbs'>小猫很可爱，卖家人很好</p>
				</div>
				<div id="bbyy">
					<img src="../assets/cg1.jpg"/>
					<p class='bbws'>
						<span>想拥有同款萌宠</span>
						<span>前往该宠物的购买用户</span>
						<span>></span>
					</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios';
	export default{
		name:'RecBaby1',
		data(){
			return{
				lists:[]
			}
		},
		methods: {
		    onClickLeft() {
		      this.$router.go(-1);
		    },
		    tap(){
		    	this.$router.push('/babygr');
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
	.babypl{
		width:100%;
		height: 100%;
		padding: 14px;
	}
	.babypl li{
		width: 100%;
		margin-bottom:14px;
	}
	.babypl li #bbyh img,.babypl li #bbyy img{
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
	.babypl li .bbw span,.babypl li #bbyy .bbws span{
		font-size: 12px;
		color: rgba(100,100,100,1);
	}
	.babypl li .bbw span:first-child,.babypl li #bbyy .bbws span:first-child{
		display: block;
		color: rgba(16,16,16,1);
		font-size: 14px;
	}
	.babypl li #bbyy .bbws span:last-child{
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
	.babypl li #bbyh .cimg img{
		display: block;
		width: 292px;
		height: 220px;
		border-radius: 0;
		margin-top: 13px;
	}
	.babypl li .bbs{
		margin-top: 12px;
		font-size: 14px;
		color: rgba(16,16,16,1);
	}
	.babypl li #bbyy{
		height: 60px;
		padding: 8px 0px;
		position: relative;
	}
	.babypl li #bbyy .bbws{
		position: absolute;
		left: 44px;
		top: -12px;
	}
	.babypl li #bbyy .bbws span:last-child{
		background: #fff;
		font-size: 18px;
		text-align: right;
	}
	.babypl li #bbyy img{
		border-radius: 0px;
	}
	#bbyy{
		margin-bottom: 10px;
	}
</style>