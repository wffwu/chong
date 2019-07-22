<template>
    <div>
        <!-- <van-nav-bar
        title="编辑地址"
        left-text="返回"
        left-arrow
        
        @click-left="onClickLeft"
        :fixed='true'
        :border='false'
        />
        <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
        /> -->
<van-nav-bar
        title="编辑地址"
        left-text="返回"
        left-arrow
        
        @click-left="onClickLeft"
        :fixed='true'
        :border='false'
        />
<van-address-edit
        style="margin-top:45px"
  :area-list="areaList"
  show-postal
  show-delete
  show-set-default
  show-search-result
  :search-result="searchResult"
  @save="onSave"
  @delete="onDelete"
  @change-detail="onChangeDetail"
/>
    </div>
</template>

<script>
import { Toast } from 'vant';
import axios from 'axios';
import qs from 'Qs';
import province_list from '../addresslist/list'
export default {
    name:'MyAdresx',
    data() {
        return {
        areaList:province_list,
        searchResult: []
        }
    },
    methods:{
        onClickLeft() {
        Toast('返回');
        this.$router.go(-1)
        },
        onSave(content) {
            console.log(content)
            // axios({
            //     method:'post',
            //     url:"http://renaaa.natapp1.cc/pet/user/insertAddress",
            //     data:qs.stringify({name:this.username})
            // }).then((data)=>{
            //     console.log(data)
            // })
        },
        onDelete() {
        Toast('delete');
        },
        onChangeDetail(val) {
        if (val) {
            this.searchResult = [{
            name: '黄龙万科中心',
            address: '杭州市西湖区'
            }];
        } else {
            this.searchResult = [];
        }
        }
    }
}
</script>

<style scoped="">

</style>
