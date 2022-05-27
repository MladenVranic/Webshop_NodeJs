const express = require('express');
const router = express.Router();
const dbConn = require('../models/database')

router.get("/", (req,res)=>{

    dbConn.query('SELECT * FROM user', (err, results)=>{
        if(err) throw err;
        console.log(results)
        for(let i = 0; i< results.length; i++){
            let user = results[0]
            res.render('../views/user.ejs' , {username: user.username, fName: user.first_name, lName: user.last_name ,
            email: user.email});

        }
    })
})

module.exports = router;
