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
import { getPoints } from '@/services/api'

export default {
  name: 'MetricsOverview',
  data() {
    return {
      metrics: {
        totalCustomers: 0,
        totalPointsIssued: 0,
        totalPointsRedeemed: 0,
        pointsAvailable: 0
      }
    }
  },
  async created() {
    try {
      const data = await getPoints()
      this.metrics = {
        totalCustomers: data.totalCustomers || 0,
        totalPointsIssued: data.totalPointsIssued || 0,
        totalPointsRedeemed: data.totalPointsRedeemed || 0,
        pointsAvailable: data.pointsAvailable || 0
      }
    } catch (error) {
      console.error('Error fetching metrics:', error)
    }
  }
}
</script>

<style>
@import '@/assets/styles/metric.css';
</style>
