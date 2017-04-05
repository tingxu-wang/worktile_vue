<template lang="html">
  <div>
    <mission-group :project-id="$route.params.projectId" :task-groups="taskGroups" v-on:taskGroupCreated="taskGroupCreated"></mission-group>
  </div>
</template>

<script>
import missionGroup from '../mission/mission-group'

export default {
  created (){
    const projectId=this.$route.params.projectId
    this.$filterGet('/api/Task_groups',{project_id:projectId})
      .then(body=>{
        this.taskGroups=body
      })
  },
  data (){
    return {
      taskGroups:[]
    }
  },
  methods:{
    taskGroupCreated (taskgroup){
      console.log(taskgroup)
      this.taskGroups.push(taskgroup)
    }
  },
  components:{missionGroup}
}
</script>

<style lang="scss" scoped>
</style>
