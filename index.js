const express = require("express");
const fs = require("fs");
const http = require("http");
const app = express();
const path = require("path");

const dotenv = require("dotenv");

dotenv.config({ path: './config.env' });

const DB = process.env.Mongo_dataBase1;
const PORT = process.env.Port_key1;

// const { MongoClient } = require('mongodb');
 // const DB = 'mongodb+srv://adminEcom:admindb123@cluster0.z0slj6o.mongodb.net/Shoppingkart?retryWrites=true&w=majority'

/*
MongoClient.connect(mongoUri, (err, client)=>{
	if(err){
		throw err;
}
	console.log('connected to DataBase...');
})
*/
	const mongoose = require('mongoose');
const bodyparser = require("body-parser");
// mongoose.connect('mongodb://localhost/Shoppingkart', {useNewUrlParser: true, useUnifiedTopology: true});

let data = {};

mongoose.connect(DB, {
	 useNewUrlParser: true,
	// useCreateIndex: true,
	// useUnifiedTopology: true,
	// useFindAndModify: false
	 });

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function(){
	console.log("we are connected..")
})
/*
db.then(()=>{
	console.log("connection is successfull to database with mongoose");
}).catch((err) => {
	console.log("no connection");
});*/


//let db = MongoClient.connection;
// let db = MongoClient.connect;

//db.on('error', console.error.bind(console, 'connection error: '));
/*db.once('open', function(){
	console.log("we are connected..")
});	
*/
 var OrderSchema = new mongoose.Schema({
	 
// var OrderSchema = new MongoClient({
	name: String,
	quantity: String,
	CityName: String,
	address: String,
	PhoneNumber: String
	
}) ;

var Order = mongoose.model("orderSales",OrderSchema);

app.use(express.static('static'));

//using img directory that has images to access them.
app.use(express.static('img'));

app.set('view engine', 'pug');
app.use(express.urlencoded())
app.set(path.join(__dirname, 'views'));

//___________________________________________________________
// EXPRESS GET REQUESTS for loading pages.
app.get('/', (req,res)=>{
	res.render("index.pug");
})
app.get('/about', (req,res)=>{
	res.render("about.pug");	
})

app.get('/contact', (req,res)=>{
	res.render("contact.pug");
})


//__________________________________________________
// SHOP PAGES FOR ORDERING ITEMS

app.get('/shopPage', (req,res)=>{
	res.render("shopPage.pug");	
})

app.get('/shopPage-2', (req,res)=>{
	res.render("shopPage-2.pug");	
})

app.get('/shopPage-3', (req,res)=>{
	res.render("shopPage-3.pug");	
})

app.get('/shopPage-4', (req,res)=>{
	res.render("shopPage-4.pug");	
})

app.get('/shopPage-5', (req,res)=>{
	
	res.render("shopPage-5.pug");	
})

app.get('/shopPage-6', (req,res)=>{
	
	res.render("shopPage-6.pug");	
})

//__________________________________________________
// Post REQUESTS
app.post('/shopPage', (req,res)=>{
	
	var OrderData = new Order(req.body);	
	OrderData.save().then(()=>{

		res.send('Your order has successfully submitted');

	}).catch(()=>{
		res.status(400).send("This item has not been save in database.");
	})
});

//____________________________________________________________
app.get('/shopCounterPage', (req,res)=>{

	Order.find().then((result)=>{
	// storing database data into object to render it
	// on webpage as a list of orders made
	data = result;

	dataf = `
class ObjectId{
	constructor(id){
		this.name = id;
	//	console.log(this.name);
	}
};
	let dataBase = [${result}]; 
`;

console.log(result);
	let i = 3;
	let j = 1;
	let divs = `5`*i;
	
	var params = {"title":'My Shop ShopCounter', "objects":data.length, "divs":divs, "content": data[i], }; //result}

		fs.writeFileSync('./static/DataBasePage.js', dataf);
	 	res.render( "shopCounterPage.pug",params);
		
}).catch((err)=>{
	console.log(`No result shown.error`);
	console.log(err);
	})
})

//_________________________________________________
app.listen(PORT,()=>{
	console.log(`app started successfully at port ${PORT}`);
})