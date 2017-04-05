<template lang="html">
  <div class="project-main-container">
    <div class="project-item" v-for="project in projectArr" @click="toMission(project.id,project.name)">
      <div class="project-icon-container">
        <i class="glyphicon glyphicon-inbox project-icon"></i>
      </div>
      <div class="project-text-container">
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

<style lang="scss" scoped>
.project-main-container{
  padding-top:15px;
  .project-item{
    height: 70px;
    border-bottom: solid 1px #f2f1f7;
    cursor:pointer;
    .project-icon-container{
      display: inline-block;
      line-height: 70px;
      width: 50px;
      .project-icon{
        color: rgb(60, 140, 173);
        font-size: 25px;
      }
    }
    .project-text-container{
      display: inline-block;
      position: relative;
      top:5px;
      .description{
        color:lighten(#000,50);
      }
    }
    &:hover{
      color:#da4f4a;
    }
  }
}
</style>
