<template>
	<div>
		<van-nav-bar
		  title="宝宝热评"
		  left-text="返回"
		  @click-left="onClickLeft"
		/>
		<div id="gr">
			<img src="../assets/cg2.jpg"/>
			<p>111</p>
			<p class='bbr'>222</p>
			<div class="grs">
				<span>已关注</span>
				<span>私信</span>
			</div>
			<div class="grgz">
				<dl>
					<dt>1</dt>
					<dd>关注</dd>
				</dl>
				<dl>
					<dt>1</dt>
					<dd>粉丝</dd>
				</dl>
				<dl>
					<dt>0</dt>
					<dd>帖子</dd>
				</dl>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Recbabygr',
		methods:{
			onClickLeft() {
		      this.$router.go(-1);
		    }
		}
	}
</script>

<style scoped="">
	#gr{
		width: 100%;
		height: auto;
		text-align: center;
		margin-top: 10px;
	}
	#gr img{
		width: 50px;
		height: 50px;
		border-radius: 50%;
	}
	#gr p{
		font-size: 14px;
		color: rgba(16,16,16,1);
		margin-top: 8px;
	}
	#gr .bbr{
		font-size: 12px;
		color: rgba(100,100,100,1);
		margin-top: -12px;
	}
	#gr .grs{
		margin-top: 12px;
		text-align: center;
		height: 20px;
		width: 100%;
	}
	#gr .grs span{
		display: inline-block;
		width: 40px;
		height: 20px;
		font-size: 12px;
		color: rgba(100,100,100,1);
		background: #ccc;
		margin:0px 22px;
		text-align: center;
		line-height: 20px;
	}
	#gr .grgz{
		margin-top: 12px;
		width: 100%;
		height: 30px;
		padding: 0px 46px;
	}
	#gr .grgz dl{
		width: 24px;
		height: 30px;
		text-align: center;
		margin: 0px 26px;
		float: left;
	}
	#gr .grgz dl dt{
		text-align: center;
		font-size: 14px;
		color: rgba(16,16,16,1);
	}
	#gr .grgz dl dd{
		font-size: 12px;
		color: rgba(100,100,100,1);
		text-align: center;
		margin-left: -2px;
	}
</style>