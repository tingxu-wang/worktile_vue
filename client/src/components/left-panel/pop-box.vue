<template lang="html">
  <div class="popbox mission-box" v-show="popBoxIsShow">
    <div class="popbox-body">
      <ul class="popbox-menu">
        <li v-for="popboxItem in popboxItems" :class="{divider:popboxItem.isLine}" class="popbox-li">
          <i class="glyphicon" :class="popboxItem.iconName"></i>
          <span>{{ popboxItem.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data (){
    return {
      popboxItems:[
        {iconName:'glyphicon-user',name:'团队'},
        {iconName:'glyphicon-inbox',name:'项目'},
        {iconName:'',name:'',isLine:true},
        {iconName:'glyphicon-tasks',name:'任务'},
        {iconName:'glyphicon-list-alt',name:'日程'},
        {iconName:'glyphicon-file',name:'文件'},
      ]
    }
  },
  methods:{
    empty (){
      consoel.log('empty')
    }
  },
  props:['popBoxIsShow']
}
</script>

<style lang="scss" scoped>
.mission-box{
  bottom: 60px;
}
</style>
