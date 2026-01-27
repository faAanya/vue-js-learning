<script>
export default{
  data(){
    return{
      name: 'Vue Jobs', 
      status: 'active',
      tasks: ['Task One', 'Task Two', 'Task Three'],
      link:"https://vuejs.org"
    }
  },
  methods:{
    toggleStatus(){
      if(this.status === 'active'){
        this.status = 'pending'
      } else if(this.status === 'pending'){
        this.status = 'inactive'
      } else {
        this.status = 'active'
      }
    }
  }
}
</script>

<template>
  <h1>{{ name }}</h1> 
  <p v-if="status === 'active'">Status is active</p>
  <p v-else-if="status === 'pending'">Status is pending</p>
  <p v-else>Status is inactive</p>

<h3>Tasks:</h3>
<ul>
  <li v-for="task in tasks" :key="task">{{ task }}</li>
</ul>

<a v-bind:href="link">Click for Vue.js</a><br>
<a :href="link">Click for Vue.js</a><br>
<button @:click="toggleStatus">Change status</button>
</template>
