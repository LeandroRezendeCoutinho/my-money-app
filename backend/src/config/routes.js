const express = require('express')

module.exports = function (server) {

  // define base to all routes
  const router = express.Router()
  server.use('/api', router)

  // payments routes
  const BillingCycle = require('../api/billingCycle/billingCycleService')
  BillingCycle.register(router, '/billingCycles')
}