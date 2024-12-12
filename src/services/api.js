import axios from 'axios'

const api = axios.create({
  baseURL: 'YOUR_API_BASE_URL', // Replace with API URL
  headers: {
    'Authorization': 'Bearer SAMPLE', // Replace with API KEY
    'Content-Type': 'application/json'
  }
})

export const getPoints = async () => {
  try {
    const response = await api.get('/points')
    return response.data
  } catch (error) {
    throw error
  }
}

export const addPoints = async (pointData) => {
  try {
    const response = await api.post('/points', pointData)
    return response.data
  } catch (error) {
    throw error
  }
}
