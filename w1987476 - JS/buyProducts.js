localStorage.clear();
let openShopping = document.querySelector('.cart');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
    
});

closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
});

let products = [
    {
        id: 1,
        name: 'Fire Deamon',
        image: 'imgs/deamons/flameDeamon.png',
        price: 40,
        quantity:0
    },
    {
        id: 2,
        name: 'Cobra Deamon',
        image: 'imgs/deamons/cobraDeamon.png',
        price: 40,
        quantity:0

    },
    {
        id: 3,
        name: 'Peacock Deamon',
        image: 'imgs/deamons/peacockDeamon.png',
        price: 40,
        quantity:0

    },
    {
        id: 4,
        name: 'Gurula Deamon',
        image: 'imgs/deamons/gurulaDeamon.png',
        price: 40
    },
    {
        id: 5,
        name: 'Coconut Tea Cups',
        image: 'imgs/coconuCrafts/coconutTeaCups.jpg',
        price: 5,
        quantity:0

    },
    {
        id: 6,
        name: 'Coconut Shell Spoons',
        image: '6.PNG',
        price: 2,
        quantity:0

    },    {
        id: 7,
        name: 'Coconut Leaf Baskets',
        image: 'imgs/deamons/cobraDeamon.png',
        price: 2,
        quantity:0

    },
    {
        id: 8,
        name: 'Coconut Bamboo Stick',
        image: 'imgs/deamons/peacockDeamon.png',
        price: 5,
        quantity:0

    },
    {
        id: 9,
        name: 'Sri Lanka Map',
        image: 'imgs/wallArts/wallArt1.webp',
        price: 15,
        quantity:0

    },
    {
        id: 10,
        name: 'Galle, Sri Lanka',
        image: 'imgs/wallArts/galle.webp',
        price: 5,
        quantity:0

    },
    {
        id: 11,
        name: 'Sri Lanka Poster',
        image: 'imgs/wallArts/srianka.webp',
        price: 2,
        quantity:0

    },    {
        id: 12,
        name: 'Sigiriya, Sri Lanka',
        image: 'imgs/wallArts/sigiriya.webp',
        price: 5,
        quantity:0

    }
  
];
let listCards  = [];

function addToCard(key){
        // copy product form list to list card
        listCards.push(JSON.parse(JSON.stringify(products[key])))
        listCards[key].quantity = 1;
    
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    if(count >= 0){
        quantity.innerText = count;
    }else{
        quantity.innerText = 0;
    }
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

function checkOut(key){
    listCards[0] = JSON.parse(JSON.stringify(products[key]));
    const data =JSON.stringify(listCards);
    localStorage.setItem("productList",data);

}
function checkOutCart(){
    const dataList =JSON.stringify(listCards);
    localStorage.setItem("productList",dataList);
    console.log("checkOutCart triggered");
}

