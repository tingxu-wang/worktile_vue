<template lang="html">
  <modal :hook="docHook">
    <template slot="title">
      文档信息详情
    </template>
    <template>
      <div class="form">
        <div class="form-group">
          文档名称：{{ docModalInfo.title }}
        </div>
        <div class="form-group" v-html="docModalInfo.content">
        </div>
      </div>
    </template>
    <template slot="footer">
      <button type="button" class="btn btn-primary" data-dismiss="modal">确定</button>
    </template>
  </modal>
</template>

<script>
import modal from '@pub/modal'
export default {
  components:{modal},
  props:['docModalInfo','docHook']
}
</script>

<style lang="css">
</style>
