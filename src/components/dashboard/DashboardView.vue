<template>
    <div class="dashboard">
      <h1>Dashboard Overview</h1>
      <MetricsOverview />
    </div>
  </template>
  
  <script>
  import MetricsOverview from './MetricsOverview.vue'
  
  export default {
    name: 'DashboardView',
    components: {
      MetricsOverview
    }
  }
  </script>
  
  <style>
  .dashboard {
    padding: 1rem;
  }
  
  .dashboard h1 {
    margin-bottom: 2rem;
    color: #2c3e50;
  }
  </style>
  