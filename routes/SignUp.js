

const express = require("express")
const router = express.Router()
const SignUpModel = require('../models/SignUp')
const argon2 = require('argon2')

router.get('/', async (req, res) => {
    console.log("This is the sign up route")
})
router.post('/', async (req, res) => {
   
    const { username, password, phone_number, email } = req.body
        const userDestructure = {}
    try{
    const hash = await argon2.hash(password)
        
    if (username && password && email) {
        userDestructure.username = username
    
        userDestructure.password = hash

        userDestructure.phone_number = phone_number
   
        userDestructure.email = email
        }
    else {
        return res.status(201).json({message: "enter all fields"})
        }
console.log(userDestructure)
     const addUser = await new SignUpModel(userDestructure)
     addUser.save()
        res.status(200).json({ success: true, addUser })
        
    console.log("success")
    }
catch (e) {
    res.status(400).json({message: e.message})
    }
    
})

module.exports = router