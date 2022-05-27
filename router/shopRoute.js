const express = require('express');
const router = express.Router();
const dbConn = require('../models/database')



router.get("/", (req,res, next)=>{
    //global variables inside get
    let artikelOne = "SELECT artikel_name AS name, preis, beschreibung FROM artikel"

    //QUERIES start here
    dbConn.query(artikelOne, (err,result) => {
        if(err) throw err;

         for(let i = 0; i < result.length; i++){
             let artikel = result[0]
             let artikelTwo = result[1]
             let artikelThree = result[2]
             let artikelFour = result[3]
             let artikelFive = result[4]
             let artikelSix = result[5]
             let artikelSeven = result[6]
             let artikelEight = result[7]
             let artikelNine = result[8]


            // console.log(result)
            res.render('../views/index.ejs', {artikelOne_name: artikel.name, artikelOne_preis: artikel.preis, artikelOne_des: artikel.beschreibung,
            artikelTwo_name: artikelTwo.name, artikelTwo_preis: artikelTwo.preis,artikelTwo_des: artikelTwo.beschreibung, artikelThree_name: artikelThree.name, artikelThree_preis: artikelThree.preis,
            artikelThree_des: artikelThree.beschreibung,artikelfour_name: artikelFour.name, artikelfour_preis: artikelFour.preis,artikelFour_des: artikelFour.beschreibung, artikelFive_name: artikelFive.name,
            artikelFive_preis: artikelFive.preis,artikelFive_des: artikelFive.beschreibung, artikelSix_name: artikelSix.name, artikelSix_preis: artikelSix.preis,artikelSix_des: artikelSix.beschreibung, artikelSeven_name: artikelSeven.name,
            artikelSeven_preis: artikelSeven.preis, artikelSeven_des: artikelSeven.beschreibung, artikelEight_name: artikelEight.name, artikelEight_preis: artikelEight.preis,artikelEight_des: artikelEight.beschreibung,
            artikelNine_name: artikelNine.name, artikelNine_preis: artikelNine.preis,artikelNine_des: artikelNine.beschreibung, });
            //nachdem die results gerendert wurden, soll kein response mehr gesendet werden, deshalb "retrurn"
            return;
         }
         return next();

    });
});



//POST controller to insert selected items in the databas
router.post("/", (req, res)=>{
    let artikel_name = req.body.artikelName
    let artikel_preis = req.body.artikelPreis
    let insertWK = `INSERT INTO warenkorb(artikel,preis,anzahl) VALUES("${artikel_name}", ${artikel_preis},1)`
    //console.log(artikel_name,artikel_preis)

    dbConn.query(insertWK ,(err, result)=>{
        if(err) throw err;
        console.log("records inserted")
        res.redirect('/index')
        return;
    });
});



module.exports = router;
