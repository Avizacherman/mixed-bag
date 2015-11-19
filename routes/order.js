var express = require('express')
var uuid = require('node-uuid')
var websockets = require('websockets')

var router = express.Router()

router.get('/', (req, res)=>{
  res.json({test: uuid.v1() + uuid.v4()})
})

module.exports = router
