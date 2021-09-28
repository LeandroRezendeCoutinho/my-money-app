import axios from "axios"
const BASE_URL = 'http://localhost:3000/api'
// localhost: 3000 / api / billingCycles
export function getSummary() {
  const request = axios.get(`${BASE_URL}/billingCycles/summary`)
  return {
    type: 'BILLING_SUMMARY_FETCHED',
    payload: request
  }
}