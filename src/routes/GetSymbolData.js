const {getSymbolData} = require("../controller/GetSymbolData");
const {authMiddleware} = require("../utils/authMiddleware")
const express = require('express')
const router = express.Router()

router.get("/",getSymbolData);

module.exports = router;