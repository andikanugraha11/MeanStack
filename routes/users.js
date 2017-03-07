const express	= require('express');
const router	= express.Router();


//Users/register
router.post('/register', (req,res,next)=>{
	res.send('register');
});

//Users/profile
router.get('/profile', (req,res,next)=>{
	res.send('profile');
});

//Users/Authenticate
router.get('/authenticate', (req,res,next)=>{
	res.send('authenticate');
});

//Users/validate
router.get('/validate', (req,res,next)=>{
	res.send('validate');
});

module.exports = router;