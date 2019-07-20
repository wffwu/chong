<template>
    
        <div>
             <div v-for="(item,i) in list" :key="i" id="inner1">
             <img :src='item.petImage' alt="" id="pic" >
             <h5 class="name">{{item.petName}}</h5>
             </div>
        </div>
        <!-- <h2>hello</h2> -->
   
</template>

<script>
import axios from 'axios'
export default {
  name:'Cat',
  data(){
   return {
       list:[]
   }
  },
  mounted(){
      axios({
          url:"http://renaaa.natapp1.cc/pet/animal/showAllCat"
      }).then((data)=>{
          console.log(data.data)
          this.list=data.data
      }) 
  },
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0
}

#pic{
  width: 67px;
  height: 67px;
  display: block;
  /* margin: 10px 0 0 10px */
  border-radius: 50%
}

#inner1{
  width: 25%;
  height: 80px;
  float: left;
  padding: 10px;
  
}
</style>
