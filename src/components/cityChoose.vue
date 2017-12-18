<template>
  <div>
    <el-row>
      <el-col :span="10">
        <div class="grid-content bg-purple">
          <el-select v-model="province" placeholder="选择省" @change="changeProv">
            <el-option
              v-for="val in data"
              :key="val.name"
              :value="val.name">
            </el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :span="10">
        <div class="grid-content bg-purple">
          <el-select v-model="city" :placeholder="'选择市'" @change="changeCity">
            <el-option
              v-for="val in cityList"
              :key="val.value"
              :value="val.name">
            </el-option>
          </el-select>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <div class="grid-content bg-purple">
          <el-select v-model="area" :placeholder="'选择区'" @change="changeArea">
            <el-option
              v-for="val in areaList"
              :key="val.value"
              :value="val">
            </el-option>
          </el-select>
        </div> 
    </el-row>
</div>
</template>
<script>
export default {
  name: 'chooseCity',
  props: {
      data: {
          
      }
  },
  data () {
      return {
        province:'',
        city:'',
        cityList:[],
        area:'',
        areaList:[],
        door:'',
        value: '',
        str: ''
      }
  },
  methods: {
    changeProv (val) {
     
      this.data.forEach((item,index)=>{
        if(item.name == val){
          this.cityList = item.city
        }
      })

      this.city='';
      this.area='';

    },
    changeCity (val) {
      this.cityList.forEach((item,index)=>{
        if(item.name == val){
          this.areaList = item.area
        }
      })
      this.area='';
    },
    changeArea (val) {
      this.area = val;
      this.collectInfo();
    },
    collectInfo(){
      if(this.province && this.city && this.area){
        this.$emit('info',{
          prov:this.province,
          city:this.city,
          area:this.area
        })
      }
    }
  }
}
</script>
<style scoped>

</style>
