<template lang="html">
  <div>
    <div class="item" v-for="project in projectArr" @click="toMission(project.id,project.name)">
      <div class="icon-container">
        <i class="glyphicon glyphicon-inbox icon"></i>
      </div>
      <div class="text-container">
        <div>
          {{ project.name }}
        </div>
        <div class="description">
          {{ project.description}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    toMission (projectId,projectName){
      this.$router.push({name:'project',params:{projectId,projectName}})
    }
  },
  props:['projectArr']
}
</script>

<style lang="scss">

</style>
