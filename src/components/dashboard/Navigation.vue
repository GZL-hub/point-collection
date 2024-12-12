<template>
    <nav class="navigation">
      <div class="nav-brand">
        <h2>Point System</h2>
      </div>
      <ul class="nav-links">
        <li>
          <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
        </li>
        <li>
          <router-link to="/points" class="nav-link">Point Collection</router-link>
        </li>
        <li>
          <router-link to="/customers" class="nav-link">Customer Management</router-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navigation'
  }
  </script>
  
  <style>
  @import '@/assets/styles/nav.css';
  </style>
  