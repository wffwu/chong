<template>
    <div >
        <van-nav-bar
        title="绑定手机号"
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
                    :error-message="emsgp"
                    @change="tap"
                />
                <van-field
                    v-model="phone"
                    required
                    clearable
                    label="手机"
                    right-icon="question-o"
                    placeholder="请输入手机号"
                    @click-right-icon="$toast('请输入正确的手机格式')"
                    :error-message="emsgps"
                    @change="tep"
                />
                 <div id="yzm">
                    <div id="yzm1">
                        <span>验证码</span>
                    </div>
                    <div id="yzm2">
                        <input type="text" placeholder="请输入验证码" v-model="inp" :error-message="inps" @change="isp"> 
                        <span>{{item}}</span>
                        <button @click="yzm">获取验证码</button>
                    </div> 
                    
                </div>

                <van-field
                    v-model="password"
                    type="password"
                    label="密码"
                    placeholder="请输入密码"
                    required
                    :error-message="emsgpd"
                    @change="tpd"
                />
                </van-cell-group>
        </div>
        <div id="mr">
            <van-button type="info" size="large" @click="reg">注册</van-button>
        </div>
    </div>
</template>

<script>
import { Toast } from 'vant';
import axios from 'axios';
import qs from 'Qs';
export default {
    name:'MyRegister',
    data(){
        return{
            username:'',
            password:'',
            phone:'',
            inp:'',
            item:'',
            vcode:'',
            emsgp:'',
            emsgps:'',
            emsgpd:'',
            inps:''
        } 
    },
    methods: {
    onClickLeft() {
      Toast('返回');
      this.$router.go(-1)
    },
    tap(){
        if(this.username === ""){
            this.emsgp = "用户名不能为空";
        }else if(!/^[a-z0-9_-]{4,20}$/gi.test(this.username)){//正则验证不通过，格式不正确
                   this.emsgp="请输入正确的用户名,用户名应为4-20位字符";
        }else{
            this.emsgp="";
        }
    },
    tep(){
        if(this.phone === ""){
            this.emsgps = "手机号不能为空";
        }else if(!/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/.test(this.phone)){//正则验证不通过，格式不正确
                   this.emsgps="请输入正确的手机号";
        }else{
            this.emsgps="";
        }
    },
    yzm(){
        var str="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var code="";
			for(var i=0;i<4;i++){
				var st=parseInt(Math.random()*str.length);
				code+=str[st];
			}
        this.item=code
    },
    isp(){
        if(this.inp!=this.item){
            alert("验证码不正确")
        }else{
            this.inps='';
        }
    },
    tpd(){
        if(this.password === ""){
            this.emsgpd = "密码不能为空";
        }else if(!/^(?!\d+$)(?![A-Za-z]+$)[a-zA-Z0-9]{6,20}$/.test(this.password)){//正则验证不通过，格式不正确
                   this.emsgpd="密码格式不正确";
        }else{
            this.emsgpd="";
        }
    },

    reg(){
        axios({
            method:'post',
            url:"http://renaaa.natapp1.cc/pet/user/validateName",
            data:qs.stringify({name:this.username})
        }).then((data)=>{
            //console.log(data)
            if(data.data==0){
                this.emsgp = "用户名已注册！";
            }else{
                axios({
                    method:'post',
                    url:'http://renaaa.natapp1.cc/pet/user/register',
                    data:qs.stringify({name:this.username,password:this.password,phoneNumber:this.phone})
                }).then((data)=>{
                    //console.log(data.data);
                    alert("注册成功")
                    this.$router.push('/login')
                })
            }
        })
        
    }
  }
}
</script>

<style scoped="">
#inner{
    margin-top: 50px;
}
#mr{
    margin-top: 15px;
}
#yam{
    width:100%;
    height:4.4rem;
    border-bottom: 1px solid #ebedf0;
    position: relative;
}
#yzm1{
    width:3rem;
    height:1.4rem;
    line-height:1.4rem;
    position: absolute;
    left:2.4rem;
    font-size:14px;
    color:#323233;
}
#yzm2{
    margin-left: 100px;
}
#yzm2 input{
    width: 6rem;
   font-size:14px;
    border: none;
}
#yzm2 span{
    display: inline;
    font-size:14px;
    margin:0 15px;
}
#yzm2 button{
    font-size:14px;
    border: none;

}
</style>
