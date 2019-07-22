<template>
   <div>
        <van-nav-bar
        title="登录"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        :fixed='true'
        :border='false'
        />
        <div id="inner">
            <van-cell-group>
                <van-field
                    v-model="username"
                    required
                    clearable
                    label="用户名"
                    right-icon="question-o"
                    placeholder="请输入用户名"
                    @click-right-icon="$toast('用户名格式为字母数字下划线组合')"
                />
               

                <van-field
                    v-model="password"
                    type="password"
                    label="密码"
                    placeholder="请输入密码"
                    required
                />
                
            </van-cell-group>
            <div id="ml">
               <van-button type="info" size="large" @click="log">登录</van-button>
            </div>
            
            <van-button type="primary" size="small" to="/register">快速注册</van-button>
            <van-button type="warning" size="small" to="/cpassword">忘记密码</van-button>
           
            
        </div>
   </div>
</template>

<script>
import { Toast } from 'vant';
import axios from 'axios';
import qs from 'Qs';
export default {
    name:'myLogin',
    data(){
        return{
            username:'',
            password:''
        } 
    },
    methods: {
    onClickLeft() {
      Toast('返回');
      this.$router.go(-1)
    },
    log(){
        axios({
         method:'post',
         url:'http://renaaa.natapp1.cc/pet/user/login',
         data:qs.stringify({name:this.username,password:this.password})  
        }).then((data)=>{
            console.log(data);
            if(data.data == 0){
                alert('用户名或密码错误，请重新输入！')
            }else{
                //this.$router.push('/index')
                setCookie("lid",data.data.token,2)
                alert('aa')
            }
        })
    }
  }
}
</script>

<style>
    #inner{
        margin-top:50px;
    }
    #ml{
        margin-top:50px;
    }
</style>
