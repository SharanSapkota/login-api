const express = require("express");

const router = express.Router()

router.get('/', (req, res) => {
    console.log("This is login")

})

router.post('/', async (req, res) => {
    const { email, password } = req.body
    
})

module.exports = router;