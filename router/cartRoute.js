const express = require('express');
const router = express.Router();
const dbConn = require('../models/database')

router.get("/", (req,res,next)=>{
    let select = "SELECT artikel AS name, preis, anzahl FROM warenkorb"

    dbConn.query(select, (err,result)=>{
        if(err) throw err;
        console.log(result)
        res.render('../views/cart.ejs', {items:result });
    })

})

module.exports = router;