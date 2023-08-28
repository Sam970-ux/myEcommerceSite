/* SCRIPT for cart items

let cartItems = 1;
let cartItem = Array.from(document.getElementsByClassName("cart-Item"));

let items = [{ItemName: 'Truck',price: '10$',coverpath: '1.png' },{ItemName: 'shirt',price: '11$',coverpath: '2.png' },{ItemName: 'boots',price: '2$',coverpath: '3.png' },{ItemName: 'book',price: '5$',coverpath: '4.png' },{ItemName: 'bike',price: '20$',coverpath: '5.png' },{ItemName: 'plane',price: '70$',coverpath: '6.png' }];

cartItem.forEach((element,i)=>{
	element.getElementsByTagName('img')[0].src = items[i].coverpath;
	element.getElementsByTagName('NameItem')[0].innerText = items[i].ItemName;
	element.getElementsByTagName('price')[0].innerText = items[i].price;
})*/