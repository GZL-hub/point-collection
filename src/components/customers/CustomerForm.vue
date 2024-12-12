<template>
    <div class="customer-form">
      <h2>Customer Registration</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label>Full Name</label>
          <input 
            v-model="customer.name" 
            type="text" 
            required
            class="form-input"
          >
        </div>
  
        <div class="form-group">
          <label>Email</label>
          <input 
            v-model="customer.email" 
            type="email" 
            required
            class="form-input"
          >
        </div>
  
        <div class="form-group">
          <label>Phone Number</label>
          <input 
            v-model="customer.phone" 
            type="tel" 
            required
            class="form-input"
          >
        </div>
  
        <div class="form-group">
          <label>Address</label>
          <input 
            v-model="customer.address" 
            type="text"
            class="form-input address-input"
          >
        </div>
  
        <button type="submit" class="submit-button">Register Customer</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CustomerForm',
    data() {
      return {
        customer: {
          name: '',
          email: '',
          phone: '',
          address: ''
        }
      }
    },
    methods: {
      submitForm() {
        console.log('Customer data:', this.customer)
        // Will implement API call later
      }
    }
  }
  </script>
  
  <style>
    @import '@/assets/styles/customerform.css';
  </style>
  