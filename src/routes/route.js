const express = require('express');
const router = express.Router();///test-you
//importing a custom module
const xyz = require('../logger')
const abc = require('../logger/logger.js')
const out = require('../util/helper.js')
const mno = require('../validator/formatter.js')
const loda = require('../lodash/lodash.js')
//importing external package
const underscore = require('underscore')

router.get('/test-me', function (req, res) {
    //Calling the components of a different custom module
    console.log("Calling my function ",xyz.myFunction())
    console.log("The value of the constant is ",xyz.myUrl)
    //calling the function
    abc.welcome();
    out.getBatchInfo();
    mno.formate();
    loda.lodash();
    //Trying to use an external package called underscore
    let myArray = ['Akash', 'Pritesh', 'Sabiha']
    let result = underscore.first(myArray)
    console.log("The result of underscores examples api is : ", result)
    
    res.send('My first ever api!')

    //To be tried what happens if we send multiple response
    // res.send('My second api!')
});

module.exports = router;

