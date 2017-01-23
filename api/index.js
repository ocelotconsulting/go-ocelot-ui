const express = require('express')

const router = express.Router()

// anything not handled needs a 404 - otherwise we fall through to the UI
router.use('/', ({method, originalUrl}, res) =>
  res.status(404).send(`cannot ${method} ${originalUrl}`)
)

module.exports = router
