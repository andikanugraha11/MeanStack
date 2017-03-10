const express	= require('express');
const router	= express.Router();
const passport	= require('passport');
const jwt		= require('jsonwebtoken');

const User 		= require('../models/userSchema');

//Users/register
router.post('/register', (req,res,next)=>{
	let newUser	= new User({
		name		: req.body.name,
		email		: req.body.email,
		username	: req.body.username,
		password	: req.body.password
	});

	User.addUser(newUser, (err,user)=>{
		if(err){
			res.json({
				success	: false,
				msg		: 'Pendaftaran gagal'
			});
		}else
		{
			res.json({
				success	: true,
				msg		: 'Pendaftaran sukses'
			});
		}
	});
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