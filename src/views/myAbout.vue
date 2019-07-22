<template>
    <div>
        <van-nav-bar
        title="关于宠"
        left-text="返回"
        left-arrow
        
        @click-left="onClickLeft"
        :fixed='true'
        :border='false'
        />
        <div id="box">
            <div class="logo">
                <img src="../assets/xiaogou.jpeg" >
            </div>
            <p>logo</p>
        </div>
        <div id="bom">
            <ul>
                <li @click="mian">免责声明</li>
                <li @click="wo">握爪自白</li>
                <li>给个好评吧</li>
                <li @click="ke">在线客服</li>
                <li>电话客服</li>
            </ul>

        </div>
    </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    name:'MyAbout',
    methods:{
        onClickLeft() {
        Toast('返回');
        this.$router.go(-1)
        },
        mian(){
            this.$router.push("/relief")
        },
         wo(){
            this.$router.push("/conf")
        },
        ke(){
            this.$router.push("/cost")
        }
       
       
    }
}
</script>

<style scoped="">
    #box{
        width:375px;
        height:109px;
        background:url(../assets/caodi.jpg) no-repeat;
        background-size: 375px 159px;
        opacity:1;
        padding-top:50px;
    }
    #box .logo{
        width:67px;
        height:67px;
        overflow: hidden;
        margin-left: 154px;
       border-radius: 50%;
    }
    .logo img{
        width:67px;
        height:67px;
    }
    #box p{
        width:32px;
        height:22px; 
        text-align: center;
        line-height:32px;
        margin-top:3px;
        margin-left: 172px;
    }
    #bom{
        width:375px;
        height:220px;
    }
    #bom li{
        width:365px;
        height:38px;
        margin-left: 10px;
        text-align: left;
        line-height: 38px;
        border-bottom:1px solid #e5e5e5;
    }
</style>
