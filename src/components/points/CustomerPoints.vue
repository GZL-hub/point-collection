


Context
— none fetched
Claude 3.5 Sonnet (New)
Let's enhance the CustomerPoints component with more customer details and add phone number search functionality:

<template>
  <div class="customer-points">
    <div class="search-section">
      <div class="search-group">
        <input 
          v-model="searchQuery" 
          type="text" 
          placeholder="Search by name..."
          class="search-input"
        >
      </div>
      <div class="search-group">
        <input 
          v-model="phoneSearch" 
          type="tel" 
          placeholder="Search by phone number..."
          class="search-input"
        >
      </div>
      <button @click="searchCustomer" class="search-button">Search</button>
    </div>

    <div v-if="customer" class="customer-info">
      <div class="header-section">
        <h2>Customer Details</h2>
        <button @click="closeCustomerDetails" class="close-button">×</button>
      </div>

      <div class="customer-details">
        <div class="detail-row">
          <span class="detail-label">Name:</span>
          <span class="detail-value">{{ customer.name }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Phone:</span>
          <span class="detail-value">{{ customer.phone }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Email:</span>
          <span class="detail-value">{{ customer.email }}</span>
        </div>
      </div>

      <div class="info-card">
        <div class="info-item">
          <h3>Total Visits</h3>
          <span class="count">{{ customer.totalVisits }}</span>
        </div>
        <div class="info-item">
          <h3>Total Points</h3>
          <span class="count">{{ customer.totalPoints }}</span>
        </div>
        <div class="info-item">
          <h3>Remaining Points</h3>
          <span class="count">{{ customer.remainingPoints }}</span>
        </div>
      </div>

      <div class="actions">
        <button @click="addPoints" class="action-button">Add Points</button>
        <button @click="redeemPoints" class="action-button redeem">Redeem Points</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomerPoints',
  data() {
    return {
      searchQuery: '',
      phoneSearch: '',
      customer: null
    }
  },
  methods: {
    searchCustomer() {
      // Simulated customer data - will be replaced with API call
      this.customer = {
        name: 'John Doe',
        phone: '+60123456789',
        email: 'john.doe@email.com',
        totalVisits: 15,
        totalPoints: 1500,
        remainingPoints: 750
      }
    },
    closeCustomerDetails() {
      this.customer = null
      this.searchQuery = ''
      this.phoneSearch = ''
    },
    addPoints() {
      // Points addition logic
    },
    redeemPoints() {
      // Points redemption logic
    }
  }
}
</script>
  
  <style>
  @import '@/assets/styles/points.css';
  </style>
  