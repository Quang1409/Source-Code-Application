const express = require('express')
const { insertObject } = require('../databaseHandler')
const router = express.Router()

router.get('/',(req,res)=>{
    res.render('adminIndex')
})

router.get('/addUser',(req,res)=>{
    res.render('addUser')
})

router.post('/add',(req,res)=>{
    const name = req.body.txtName
    const role = req.body.Role
    const pass= req.body.txtPassword
    const objectToInsert = {
        userName: name,
        role:role,
        password: pass
    }

    insertObject("User",objectToInsert)
    res.render('adminIndex')
})
module.exports = router;