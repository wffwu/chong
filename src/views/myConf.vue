<template>
    <div>
        <van-nav-bar
        title="宠自白"
        left-text="返回"
        left-arrow
        
        @click-left="onClickLeft"
        :fixed='true'
        :border='false'
        />
        <div id="mg">
            <img src="../assets/hehao1.jpg" />
            <p>又萌又好玩的APP</p>
        </div>
        <div id="zb">
            <p>宠是一款专门为养宠爱宠星人量身打造的宠物社交app。
买卖宠物，就上宠app。</p>
            <p>宠是一款专门为养宠爱宠星人量身打造的宠物社交app。
            买卖宠物，就上宠app。</p>
            <p>宠是一款专门为养宠爱宠星人量身打造的宠物社交app。
            买卖宠物，就上宠app。</p>
            <p>爪着我的手，你是我的好朋友。</p>
        </div>
    </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    name:'MyConf',
    methods:{
        onClickLeft() {
        Toast('返回');
        this.$router.go(-1)
        }
    }
}
</script>

<style>
    #mg{
        width:375px;
        height:234px;
        background:#e5e5e5;
    }
    #mg img{
        width:178px;
        height:120px;
        margin-top: 40px;
    }
    #zb{
       width:375px;
       height:367px; 
    }
    #zb p{
        font-size:14px;
        line-height: 46px;
        text-align: left;
        margin-left:10px;
    }
</style>
