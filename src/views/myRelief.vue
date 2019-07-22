<template>
    <div>
        <van-nav-bar
        title="免责声明"
        left-text="返回"
        left-arrow
        
        @click-left="onClickLeft"
        :fixed='true'
        :border='false'
        />
        <h2>宠-用户协议</h2>
        <div>
            <h4>一、协议的接受</h4>
            <p>1.爱上打开手机打卡了时间的卡洛手机奥断卡登记卡了手阿萨阿达
            阿萨德很骄做圣诞节刷开始登记卡时问可达机打开拉升阶阿达阿达
            段可垃圾收看了</p>
            <p>1.爱上打开手机打卡了时间的卡洛手机奥断卡登记卡了手阿萨阿达
            阿萨德很骄做圣诞节刷开始登记卡时问可达机打开拉升阶阿达阿达
            段可垃圾收看了</p>
            <p>1.爱上打开手机打卡了时间的卡洛手机奥断卡登记卡了手阿萨阿达
            阿萨德很骄做圣诞节刷开始登记卡时问可达机打开拉升阶阿达阿达
            段可垃圾收看了</p>
            <p>1.爱上打开手机打卡了时间的卡洛手机奥断卡登记卡了手阿萨阿达
            阿萨德很骄做圣诞节刷开始登记卡时问可达机打开拉升阶阿达阿达
            段可垃圾收看了</p>
        </div>
        <div>
            <h4>二、宠使用规则</h4>
            <p>1.爱上打开手机打卡了时间的卡洛手机奥断卡登记卡了手阿萨阿达
            阿萨德很骄做圣诞节刷开始登记卡时问可达机打开拉升阶阿达阿达
            段可垃圾收看了</p>
            <p>1.爱上打开手机打卡了时间的卡洛手机奥断卡登记卡了手阿萨阿达
            阿萨德很骄做圣诞节刷开始登记卡时问可达机打开拉升阶阿达阿达
            段可垃圾收看了</p>
            <p>1.爱上打开手机打卡了时间的卡洛手机奥断卡登记卡了手阿萨阿达
            阿萨德很骄做圣诞节刷开始登记卡时问可达机打开拉升阶阿达阿达
            段可垃圾收看了</p>
            <p>1.爱上打开手机打卡了时间的卡洛手机奥断卡登记卡了手阿萨阿达
            阿萨德很骄做圣诞节刷开始登记卡时问可达机打开拉升阶阿达阿达
            段可垃圾收看了</p>
        </div>
    </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    name:'MyRelief',
    methods:{
        onClickLeft() {
        Toast('返回');
        this.$router.go(-1)
        }
    }
}
</script>

<style scoped="">
    div h2{
        margin-left:-225px;
        margin-top:50px;
    }
    div h4{
        margin-left:-236px;
    }
    div p{
        margin-left:10px;
        text-align: left;
        font-size:14px;
        font-family: PingFangSC-regular;
    }
</style>
