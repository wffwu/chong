<template>
	<div id="yhjx">
		<van-nav-bar
		  title="优惠券"
		  left-text="返回"
		  @click-left="onClickLeft"
		/>
		<div id="yh">
			<p>10元</p>
			<p>满98元可用</p>
			<p>送您一张优惠券</p>
		</div>
		<div id="yhp">
			<input type="text" value="请输入手机号" />
		</div>
		<div id="yhl">领取优惠券</div>
		<div id="yhs">使用说明</div>
		<div id="foot">
			<p>宠</p>
			<van-icon name="thumb-circle-o" id='ico'/>
			<span>有赞提供技术支持</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Recsyd',
		methods: {
		    onClickLeft() {
		      this.$router.go(-1);
		    }
		}
	}
</script>

<style scoped="">
	#yh{
		margin:42px auto 0px;
		width: 170px;
		height: 200px;
		line-height: 20px;
		text-align: center;
		background:url(http://img1.imgtn.bdimg.com/it/u=2311247745,3631045874&fm=26&gp=0.jpg) no-repeat center;
		position: relative;
	}
	#yh p{	
		height: 20px;
		color: rgba(16, 16, 16, 1);
		font-size: 14px;
		text-align: center;
		font-family: PingFangSC-regular;
		position: absolute;
	}
	#yh p:first-child{
		top:32px;
		left: 68px;
	}
	#yh p:nth-child(2){
		top:64px;
		left: 54px;
		font-size: 11px;
		color: rgba(231, 231, 231, 1);
	}
	#yh p:last-child{
		top:116px;
		left: 30px;
		font-size: 16px;
	}
	#yhp,#yhl{
		background: #bcbcbc;
		width: 260px;
		height: 40px;
		margin:20px auto;
		font-size: 12px;
		text-align: center;
		line-height: 40px;
		color: rgba(241, 241, 241, 1);
		border-radius: 10px;
	}
	#yhp{
		margin-top: 15px;
	}
	#yhp input{
		border: none;
		height: 38px;
		background:#bcbcbc;
		color: rgba(241, 241, 241, 1);
		width: 240px;
	}
	#yhs{
		margin: 30px auto;
		text-align: center;
		font-size: 14px;
	}
	#foot{
		margin-top: 40px;
		text-align: center;
		font-size: 12px;
		position: relative;
	}
	#foot p{
		position: absolute;
		font-size: 14px;
		top: 10px;
		left: 154px;
	}
	#foot #ico{
		position: absolute;
		top: 46px;
		left: 96px;
		font-size:24px ;
	}
	#foot span{
		position: absolute;
		top: 48px;
		left: 126px;
	}
</style>