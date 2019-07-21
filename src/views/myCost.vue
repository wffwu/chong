<template>
    <div id="mc">
        <van-nav-bar
        title="宠自白"
        left-text="返回"
        left-arrow
        
        @click-left="onClickLeft"
        :fixed='true'
        :border='false'
        />
        <div id="neir"></div>
        <div id="footer">
            <van-row>
            <van-col span="3">
            <van-icon name="add-o" id="add"/>
            </van-col>
            <van-col span="3">
            <van-icon name="smile-o" id="smile" />
            </van-col>
            <van-col span="13">
            <van-field v-model="value" placeholder="" />
            </van-col>
            <van-col span="5">
            <van-tag round type="success" size="large">发送</van-tag>
            </van-col>
            </van-row>
        </div>
    </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    name:'MyCost',
    data(){
        return{
            value:''
        }
    },
    methods:{
        onClickLeft() {
        Toast('返回');
        this.$router.go(-1)
        }
    }
}
</script>

<style>
    #mc{
        position: relative;
    }
    #neir{
        width: 375px;
        height: 560px;
        background:#e5e5e5;
        margin-top:40px;
    }
    #footer{
        font-size:30px;
        text-align: center;
    }
    #add{
        margin-top:8px;
    }
    #smile{
        margin-top:8px;
    }
    #footer .van-field__control{
        border:1px solid #e5e5e5;
    }
</style>
