const express		= require('express');
const path			= require('path');
const bodyParser	= require('body-parser');
const cors			= require('cors');
const passport		= require('passport');
const mongoose		= require('mongoose');
const app			= express();
const config		= require('./config/database');

//Database configuration
mongoose.connect(config.database);

//On connect Database
mongoose.connection.on('connected', ()=>{
	console.log(`database terhubung dengan ${config.database}`);
});

//On Error database
mongoose.connection.on('error', (err)=>{
	console.log(`Error : ${err}`);
});

//Port Number
const port = 3000;

//CORS Middleware
app.use(cors());

//Body Parser Middleware
app.use(bodyParser.json());

//Passpoert Middlewar
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Users route
const users = require('./routes/users');
app.use('/users', users);

//Index Route
app.get('/', (req,res)=> {
	res.send('Hello PI');
});

app.get('*', (req,res)=> {
	res.sendFile(path.join(__dirname, 'public/index.html'));
});


//Start Server
app.listen(port, ()=> {
	console.log(`Server berjalan pada port ${port}`);
})