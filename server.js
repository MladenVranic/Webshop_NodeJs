// create express app
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//router import
const registerPage = require('./router/registerRoute');
const shopPage = require('./router/shopRoute');
const loginPage = require('./router/loginRoute');
const cartPage = require('./router/cartRoute');
const userPage = require('./router/userRoute');
 //db cursor
const dbConn = require('./models/database.js')
//body parser for the data we get from the Forms in the template
const urlencodedParser = bodyParser.urlencoded({ extended: false})


app.use(express.json())
app.use(express.urlencoded({ extended: false}))

//set static path for styles, asstest, scripts , controllers(routers)
app.use("/style",express.static(__dirname + '/style'));
app.use("/script",express.static(__dirname + '/script'));
app.use("/router",express.static(__dirname + '/router'));
app.use("/assets",express.static(__dirname + '/assets'));

//use function to render routers
app.use('/register', registerPage)
app.use('/index', shopPage)
app.use('/login', loginPage)
app.use('/cart', cartPage)
app.use('/user', userPage)

//set view engine
app.set('view-engine', 'ejs')

////////##########  Middleware functions

//render "register" as default page
app.get('/', (req,res,next) =>{
    res.render('register.ejs')
})

//Save register Data in DB after submitting
app.post('/register', (req,res, next)=>{
    let username = req.body.username;
    let first_name = req.body.firstName;
    let last_name = req.body.lastName;
    let email = req.body.email;
    let password = req.body.password;

    let insertValues = `INSERT INTO user(username, first_name, last_name, email, password) VALUES("${username}","${first_name}","${last_name}", "${email}","${password}")`

    dbConn.query(insertValues, function(err){
        if(err) throw err;
        console.log("records inserted")
        res.redirect('/login')
    })

})

//login Authentication with MySQL
app.post('/login',urlencodedParser, (req,res,next)=>{
    let username = req.body.name
    let password = req.body.password

    dbConn.query("SELECT username, password FROM user WHERE username = ? AND password = ?", [username, password], (err,result) => {
        if(err) throw "error";

        if(result.length > 0){
            res.redirect("/index");
        }else{
            res.redirect('/login')
        }
    })
})

//port
const port = 3000
app.listen(port)

console.log(`Server Listening to Port ${port}`)