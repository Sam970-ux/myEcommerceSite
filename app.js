const express = require("express");
const fs = require("fs");
const http = require("http");
const app = express();
const port = 80;
const path = require("path");

const mongoose = require('mongoose');
const bodyparser = require("body-parser");
mongoose.connect('mongodb://localhost/Shoppingkart', {useNewUrlParser: true, useUnifiedTopology: true});

let data = {};


let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function(){
	console.log("we are connected..")
});	

var OrderSchema = new mongoose.Schema({
	name: String,
	quantity: String,
	CityName: String,
	address: String,
	PhoneNumber: String
	
}) ;

var Order = mongoose.model("order",OrderSchema);


app.use('/static', express.static('static'));

//using img directory that has images to access them.
app.use(express.static('img'));

app.set('view engine', 'pug');
app.use(express.urlencoded())

app.set('views', path.join(__dirname, 'views'));

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

app.get('/cart', (req,res)=>{
	res.render("cart.pug");	
})

app.get('/serverPage', (req,res)=>{
	res.render("serverPage.pug");	
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

app.get('/DataBase', (req,res)=>{
	
	res.render("DataBase.pug");	
})

/*
 if(data.length){
			   
	for(var i=0; i=data.length; i++)
	{
			
		(i+1) 
		data[i].quantity 
		data[i].CityName 
		data[i].address 
		data[i].PhoneNumber 
	}
			   
				}
		else{
			No Orders
			}
*/

//__________________________________________________
// Post REQUESTS
app.post('/shopPage', (req,res)=>{
	
	var OrderData = new Order(req.body);
	
	OrderData.save().then(()=>{
		res.send('Your order has successfully submitted');
	
	//	res.render("shopCounterPage.pug");	
		
	}).catch(()=>{
		res.status(400).send("This item has not been save in database.");
	})

});

//____________________________________________________________
app.get('/shopCounterPage', (req,res)=>{
/*
	//res.render("shopPage-6.pug");	
	
			quantity
			cityName
			address
			phoneNumber
			Name	
	*/		
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

	let i = 3;
	let j = 1;
	let divs = `5`*i;
	
	var params = {'id2': data[j].quantity, 'id': data[i].quantity, "title":'My Shop ShopCounter', "objects":data.length, "divs":divs, "content": data[i], "quantity": data[i].quantity, "cityName": data[i].CityName, "address": data[i].address, "phoneNumber": data[i].PhoneNumber}; //result}

		res.render( "shopCounterPage.pug",params);
		fs.writeFileSync('./static/DataBasePage.js', dataf);

	}).catch((err)=>{
		console.log(`No result shown.error`);
	})
})

//_________________________________________________
app.listen(port,()=>{
	console.log(`app started successfully at port ${port}`);
})