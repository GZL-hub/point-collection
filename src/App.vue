<template>
  <div class="app">
    <Navigation />
    <main class="main-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Navigation from './components/dashboard/Navigation.vue'
import { getPoints } from './services/api'

export default {
  name: 'App',
  components: {
    Navigation
  },
  data() {
    return {
      points: []
    }
  },
  async created() {
    try {
      this.points = await getPoints()
    } catch (error) {
      console.error('Error fetching points:', error)
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  line-height: 1.6;
  background-color: #f9f9f9;
}

.main-content {
  padding: 2rem;
}
</style>