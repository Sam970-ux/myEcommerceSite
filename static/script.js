// SCRIPT for cart items

let itemIndex = 0;
let shopIndex = 0;
let cartItem = Array.from(document.getElementsByClassName("cart-Item"));

let shopItem = Array.from(document.getElementsByClassName("shop-Item"));

let shopName = document.getElementById("NameItem");
let shopPrice = document.getElementById("price");

let mainImage = document.getElementById('img');
let mainName = document.getElementById('NameItem');
let mainPrice = document.getElementById('price');

let items = [{ItemName:'Hoody' ,price:'Rs.250' ,coverpath:'1.png' },{ItemName:'Shirt' ,price:'Rs.200' ,coverpath:'2.png' },{ItemName:'Boots',price: 'Rs.850',coverpath: '3.png' },{ItemName: 'Plane book',price: 'Rs.60',coverpath: '4.png' },{ItemName: 'e-bike',price: 'Rs.15k',coverpath: '5.png' },{ItemName: 'Toy Car',price: 'Rs.500',coverpath: '6.png' }];

// function to create stock cards on homePage .
cartItem.forEach((element,i)=>{
	
// assigning items array values to cart-items or stock-Cards
// to render on Homepage
	element.getElementsByTagName('img')[0].src = items[i].coverpath;
	element.getElementsByClassName('NameItem')[0].innerText = items[i].ItemName;
	element.getElementsByClassName('price')[0].innerText = items[i].price;

// click event for cart-items when stck-card is
// clicked its color changes and the image of its
// item shows-up on banner card.

	element.addEventListener('click', (t)=>{

itemIndex = parseInt(t.target.id);
shopIndex = parseInt(t.target.id);
console.log(shopIndex);

			mainImage.src = items[itemIndex].coverpath;
			mainName.innerText = items[itemIndex].ItemName;
			mainPrice.innerText = items[itemIndex].price;

			element.style.backgroundColor = "red";
			
			setTimeout(()=>{
			element.style.backgroundColor = "#ece5ff";
						},500 )
			
			})

})

shopItem.forEach((element)=>{
// 	
	let shopIndex = parseInt(element.id); 
	element.getElementsByTagName('img')[0].src = items[shopIndex-1].coverpath;
	element.getElementsByClassName('NameItem')[0].innerText = items[shopIndex-1].ItemName;
	element.getElementsByClassName('priceItem')[0].innerText = items[shopIndex-1].price;

})

let formItem = Array.from(document.getElementsByClassName("buyForm"));
let formItemName = Array.from(document.getElementsByClassName("itmname"));


formItem.forEach((element)=>{
	let formIndex = parseInt(element.id);
	element.getElementsByClassName('formNameItem')[0].innerText = items[formIndex-1].ItemName;
})

formItemName.forEach((element)=>{
	let formNameIndex = parseInt(element.id);
	element[0].innerHTML = items[formNameIndex-1].ItemName;
})

//_________________________________________________________
// Server Page Shows orders or sales done and
// details of buyers starting from newest sales.

// defining no.of objects in database as integer.
let dataObj = parseInt(document.getElementById('i').innerHTML);
console.log(dataObj);


let ItemsDisplay = document.getElementsByClassName("Items_display_part").innerHTML;
let ItemsDisplayid = document.getElementById("Items_display_part").innerHTML;

// For loop to create data boxes for no.of 
// orders or sales of items in the database. 
for(let i=1; i<dataObj; i++)
{
	let obj = document.createElement("div");
	
	obj.classList.add("Items_box", "flex");
	obj.setAttribute("id", "i1");
	ItemsDisplayid = document.getElementById("Items_display_part");

	ItemsDisplayid.appendChild(obj);	
}

// Making an Array to define side-Heads in data boxes
let sideheads = [ {sidehead:'Quantity: ', num:'0'}, {sidehead:'CityName: ', num:'1'}, {sidehead:'Address: ', num:'2'}, {sidehead:'PhoneNumber: ', num:'3'}, ]
let con = document.getElementById('con');

// Re-defining no.of objects in database as integer
// in No_Of_Items.
let No_Of_Items = parseInt(document.getElementById('i').innerHTML);


// Making function for defining latest Data-box number
// for new orders, new order will have grater number
// in ascending Order.
let ItemsBox = Array.from(document.getElementsByClassName("Items_box"));
ItemsBox.forEach((element, i)=>{
	
	let DataNum = document.createElement("span");
	DataNum.classList.add("Items_box_Number", "flex");
	DataNum.textContent = `Order-Number: ${No_Of_Items-i}`;
	element.appendChild(DataNum);

// for loop to add side heads from sidehead array
// to every sale-data-box.	
	for(let i=0; i<4; i++)
	{
		var objData = document.createElement('div');
		objData.classList.add('item_data', `n${i}`);
		objData.setAttribute('className', `${i}`)   ;
		objData.textContent = sideheads[i].sidehead ;//+ dataBase ;
		element.appendChild(objData);
	}

							} 
			)


//_________________________________________________________
// ForEach functions to write/fill data for data-boxes 
// for every sideHeads.

let k = dataObj-1; // defining 'k' for using it to add data
// in ascending order in theirs respective data-boxes.
		
let el= Array.from(document.getElementsByClassName('n0'));
el.forEach((element, i)=>{

		let objDataR_0 = document.createElement('span');
		objDataR_0.classList.add('info')   ;
		objDataR_0.innerText = dataBase[k-i].quantity;
		element.appendChild(objDataR_0);
		
			}
			)
			
			
let el2= Array.from(document.getElementsByClassName('n1'));
el2.forEach((element, i)=>{
	
		let objDataR_1 = document.createElement('span');
		objDataR_1.classList.add('info')   ;
		objDataR_1.innerText = dataBase[k-i].CityName;
		element.appendChild(objDataR_1);
			}
			)
			
			
let el3= Array.from(document.getElementsByClassName('n2'));
el3.forEach((element, i)=>{

		let objDataR_2 = document.createElement('span');
		objDataR_2.classList.add('info')   ;
		objDataR_2.innerText = dataBase[k-i].address;
		element.appendChild(objDataR_2);
			}
			)
			
			
let el4= Array.from(document.getElementsByClassName('n3'));
el4.forEach((element, i)=>{

		let objDataR_3 = document.createElement('span');
		objDataR_3.classList.add('info')   ;
		objDataR_3.innerText = dataBase[k-i].PhoneNumber;
		element.appendChild(objDataR_3);
			}
			)
			
			
let el5= Array.from(document.getElementsByClassName('n4'));
el5.forEach((element, i)=>{

		let objDataR_4 = document.createElement('span');
		objDataR_4.classList.add('info')   ;
		objDataR_4.innerText = dataBase[k-i].quantity;
		element.appendChild(objDataR_4);
			}
			)			
			
//console.log(db);			