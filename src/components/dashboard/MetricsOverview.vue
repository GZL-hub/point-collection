<template>
    <div class="metrics-container">
      <div class="metric-card">
        <div class="metric-icon">👥</div>
        <div class="metric-content">
          <h3>Total Customers</h3>
          <div class="metric-value">{{ metrics.totalCustomers }}</div>
          <div class="metric-label">Registered Users</div>
        </div>
      </div>
  
      <div class="metric-card">
        <div class="metric-icon">⭐</div>
        <div class="metric-content">
          <h3>Total Points Issued</h3>
          <div class="metric-value">{{ metrics.totalPointsIssued }}</div>
          <div class="metric-label">Points</div>
        </div>
      </div>
  
      <div class="metric-card">
        <div class="metric-icon">🎯</div>
        <div class="metric-content">
          <h3>Points Redeemed</h3>
          <div class="metric-value">{{ metrics.totalPointsRedeemed }}</div>
          <div class="metric-label">Points Used</div>
        </div>
      </div>
  
      <div class="metric-card">
        <div class="metric-icon">💰</div>
        <div class="metric-content">
          <h3>Available Points</h3>
          <div class="metric-value">{{ metrics.pointsAvailable }}</div>
          <div class="metric-label">Ready to Redeem</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MetricsOverview',
    data() {
      return {
        metrics: {
          totalCustomers: 1250,
          totalPointsIssued: 45000,
          totalPointsRedeemed: 32000,
          pointsAvailable: 13000
        }
      }
    }
  }
  </script>
  
  <style>
  @import '@/assets/styles/metric.css';
  </style>
  