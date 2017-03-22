<template lang="html">
  <div class="popbox user-setting-box" v-show="userBoxIsShow">
    <div class="popbox-body">
      <ul class="popbox-menu">
        <li class="popbox-li" :class="{divider:userSettingItem.isLine,'text-danger':userSettingItem.isRed}" v-for="userSettingItem in userSettingItems">
          <span>{{ userSettingItem.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data (){
    return {
      userSettingItems:[
        {name:'个人偏好设置'},
        {name:'账号资料设置'},
        {name:'提交反馈'},
        {isLine:true},
        {name:'退出登录',isRed:true}
      ]
    }
  },
  props:['userBoxIsShow']
}
</script>

<style lang="scss" scoped>
.user-setting-box{
  bottom:5px;
}
</style>
