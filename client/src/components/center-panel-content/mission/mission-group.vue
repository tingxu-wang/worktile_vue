<template lang="html">
  <div>
    <mission-group-item :task-group="taskGroup" :key="index" v-for="(taskGroup,index) in taskGroups"></mission-group-item>
    <create-mission-group :project-id="projectId" :project-name="projectName" :task-group-length="taskGroupLength" v-on:taskGroupCreated="addTaskGroup"></create-mission-group>
  </div>
</template>

<script>
import missionGroupItem from './mission-group-item'
import createMissionGroup from './create-mission-group'

export default {
  data (){
    return {
    }
  },
  computed:{
    taskGroupLength (){
      if(this.taskGroups){
        return this.taskGroups.length
      }else{
        return 0
      }
    }
  },
  methods:{
    addTaskGroup (taskGroup){
      // this.innerTaskGroups.push(taskGroup)
      this.$emit('taskGroupCreated',taskGroup)
    }
  },
  components:{missionGroupItem,createMissionGroup},
  props:['projectId','projectName','taskGroups']
}
</script>

<style lang="scss" scoped>
</style>
