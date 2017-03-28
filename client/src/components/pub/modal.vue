<template lang="html">
  <div class="modal fade" role="dialog" ref="modal">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title">
            <slot name="title"></slot>
          </h4>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  watch:{
    hook (curVal){
      let modal=this.$refs.modal,
        $modal=$(modal)
      //if(curVal){
        $modal.modal('show')
        $modal.after($('.modal-backdrop'))
      //}
      // console.log('run')
      // $modal.on('hidden.bs.modal',()=>{
      //   this.$emit(this.emitName)
      //   $modal.off()
      // })
    }
  },
  props:['hook']
}
</script>

<style lang="scss" scoped>

</style>
