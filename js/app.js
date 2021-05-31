'use strict';

let myForm = document.getElementById('myForm');
let tableEl = document.getElementById('flowerTable');

let tableHeaderEl = document.createElement('thead');
tableEl.appendChild(tableHeaderEl);

let tableBodyEl = document.createElement('tbody');
tableEl.appendChild(tableBodyEl);

let flowerArray = [];
let flowerImages = ['flower1.jpg', 'flower2.jpg', 'flower3.jpg','flower4.jpg', 'flower5.jpg'];

function Flower(flowerName, quantity,price,img,dileveryAmount) {
    this.flowerName = flowerName;
    this.quantity = quantity;
    this.price = price ;
    this.img = 'img/'+ img;
    this.dileveryAmount =  dileveryAmount;
    

    flowerArray.push(this);
    settingItems();

render();
}
function random(min, max) {
    
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }


function randomImage() {

    return Math.floor(Math.random() * flowerImages.length);
}

myForm.addEventListener('submit', handleSubmit);
function handleSubmit(event) {

    event.preventDefault();

    let flowerName = event.target.flowerName.value;
    let quantity = event.target.quantity.value;
    let price = random(20,100);
    let dileveryAmount = dilevery(price);
    let img = randomImage();
  


    new Flower(flowerName, quantity,price,flowerImages[img],dileveryAmount);

    render();

}


function dilevery(value) {
    if (value <= 50) {
        return '2JD Delivery';
    } else if(value > 50){
        return 'free Delivery';
    }
}


let headerArray = ['Flower Name', 'Quantity', 'Price', 'Flower Image', 'Dilevery']

function tableHeader() {


    for (let i = 0; i < headerArray.length; i++) {

        let tableData = document.createElement('th');
        tableHeaderEl.appendChild(tableData);
        tableData.textContent = headerArray[i];

    }

}
tableHeader();

function render() {

    tableBodyEl.textContent = "";

    for (let i = 0; i < flowerArray.length; i++) {

        let tableRow = document.createElement('tr');
        tableBodyEl.appendChild(tableRow);

        let tableData1 = document.createElement('td');
        tableRow.appendChild(tableData1);
        tableData1.textContent = `${flowerArray[i].flowerName}`;

        let tableData2 = document.createElement('td');
        tableRow.appendChild(tableData2);
        tableData2.textContent = `${flowerArray[i].quantity}`;

        let tableData3 = document.createElement('td');
        tableRow.appendChild(tableData3);
        tableData3.textContent = `${flowerArray[i].price}`;

        let imgEl = document.createElement('img');
        tableRow.appendChild(imgEl);
        imgEl.setAttribute ('src',flowerArray[i].img);

        let tableData5 = document.createElement('td');
        tableRow.appendChild(tableData5);
        tableData5.textContent = `${flowerArray[i].dileveryAmount}`;


    }


}

function settingItems(){
    let data = JSON.stringify(flowerArray);
    localStorage.setItem('flower',data);
}

function gettingItems(){

    let stringObj = localStorage.getItem('flower');
    let normalObj = JSON.parse(stringObj);

    if ( normalObj !== null){

        flowerArray = normalObj ;

    }
    render();
}
gettingItems();



