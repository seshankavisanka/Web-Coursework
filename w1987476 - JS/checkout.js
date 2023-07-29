
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

function validateForm(){
    let fname = document.forms["checkoutForm"]["fname"].value;
    let email = document.forms["checkoutForm"]["email"].value;
    let adr = document.forms["checkoutForm"]["adr"].value;
    let city = document.forms["checkoutForm"]["city"].value;
    let state = document.forms["checkoutForm"]["state"].value;
    let zip = document.forms["checkoutForm"]["zip"].value;
    let cname = document.forms["checkoutForm"]["cname"].value;
    let ccnum = document.forms["checkoutForm"]["ccnum"].value;
    let expmonth = document.forms["checkoutForm"]["expmonth"].value;
    let expyear = document.forms["checkoutForm"]["expyear"].value;
    let cvv = document.forms["checkoutForm"]["cvv"].value;

    if(fname == "" ||
        email == "" ||
        adr == "" || 
        city == "" ||
        state == "" ||
        zip == "" ||
        cname == "" ||
        ccnum == "" ||
        expmonth == "" ||
        expyea == "" ||
        cvv == ""){
        alert("Please fill all the fields!")
    }else{
        alert("Payment Successfull!")
    }
    if(fname == ""){
        document.getElementById("fname").style.borderColor = "red";
    }
    if(email == ""){
        document.getElementById("email").style.borderColor = "red";
    }
    if(adr == ""){
        document.getElementById("adr").style.borderColor = "red";
    }
    if(city == ""){
        document.getElementById("city").style.borderColor = "red";
    }
    if(state == ""){
        document.getElementById("state").style.borderColor = "red";
    }
    if(zip == ""){
        document.getElementById("zip").style.borderColor = "red";
    }
    if(cname == ""){
        document.getElementById("cname").style.borderColor = "red";
    }
    if(ccnum == ""){
        document.getElementById("ccnum").style.borderColor = "red";
    }
    if(expmonth == ""){
        document.getElementById("expmonth").style.borderColor = "red";
    }
    if(expyear == ""){
        document.getElementById("expyear").style.borderColor = "red";
    }
    if(cvv == ""){
        document.getElementById("cvv").style.borderColor = "red";
    }   
}