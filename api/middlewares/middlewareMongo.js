const express = require("express")
const { errorHandle } = require("../helpers/handleMessage.helper");
const router = express.Router()
const { MongoClient } = require("mongodb")
const { mongodbUri } = require("../configs/app")
let connection = null

router.use("*", async (req, res, next) => {
  if (connection !== null) {
    req["mgdb"] = connection
    return next()
  }

  try {
    connection = await MongoClient.connect(mongodbUri)
    console.log("Connect MongoDB Success!!!!!")
    req["mgdb"] = connection

    return next()
  } catch (err) {
    return errorHandle(err.message)
  }
})
module.exports = router
