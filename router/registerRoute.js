const express = require('express');
const router = express.Router();

router.get("/", (req,res)=>{
    res.render('../views/register.ejs');
})

module.exports = router;
