<template>
    <div>
         <van-nav-bar
        title="找回密码"
        left-text="返回"
        left-arrow
        
        @click-left="onClickLeft"
        :fixed='true'
        :border='false'
        />
        <div>
             <van-cell-group>
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
                    <van-field
                    v-model="password"
                    type="password"
                    label="新密码"
                    placeholder="请输入密码"
                    required
                    :error-message="emsgpd"
                    @change="tpd"
                />   
                <van-field
                    v-model="password1"
                    type="password"
                    label="重新输入密码"
                    placeholder="请输入密码"
                    required
                    :error-message="emsgpds"
                /> 
             </van-cell-group>
                  
        </div>
        <div id="mr">
            <van-button type="info" size="large" @click="cpass">提交</van-button>
        </div>
    </div>
    
</template>

<script>
import { Toast } from 'vant';
import axios from 'axios';
import qs from 'Qs';
export default {
    name:'MyCpassword',
    data(){
        return{
            phone:'',
            password:'',
            password1:'',
            emsgps:'',
            emsgpd:'',
            emsgpds:''
        }
    },
    methods:{
        onClickLeft() {
        Toast('返回');
        this.$router.go(-1)
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
        tpd(){
            if(this.password === ""){
                this.emsgpd = "密码不能为空";
            }else if(!/^(?!\d+$)(?![A-Za-z]+$)[a-zA-Z0-9]{6,20}$/.test(this.password)){//正则验证不通过，格式不正确
                    this.emsgpd="密码格式不正确";
            }else{
                this.emsgpd="";
            }
        },
        cpass(){
            axios({
                method:'post',
                url:"http://renaaa.natapp1.cc/pet/user/updatePassword",
                data:qs.stringify({password:this.password1,phoneNumber:this.phone})
            }).then((data)=>{
                if(this.password1!=this.password){
                    this.emsgpds = "两次输入密码不一致";
                }else{
                    this.emsgpds = "";
                    alert("修改成功")
                    this.$router.push('/login')
                }
            })
        }
    }   
}
</script>

<style>

</style>
