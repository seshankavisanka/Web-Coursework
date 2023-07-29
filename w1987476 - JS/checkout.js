
function getItems(){
    const productListElement = document.getElementById("productList");
    const dataList = localStorage.getItem("productList");
    const productList = JSON.parse(dataList);
    var total = 0
    var count = 0

    productList.forEach((value)=>{
        let newDiv = document.createElement('div');
        if(value != null){
            newDiv.innerHTML = `<p><span>${value.name} </span><span class="price">$${value.price}</span></p>`
            total += value.price;
            count +=1;
            productListElement.appendChild(newDiv);

        }
    });
    document.getElementById("total").innerHTML = `<b>$${total}</b>`;
    document.getElementById("productsCount").textContent = count;
}
getItems()
