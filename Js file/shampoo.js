var data = JSON.parse(localStorage.getItem("shampo"));
//console.log(data)

data.map(function(elem, index){
    var box = document.createElement("div");
    
    var img = document.createElement("img");
    img.setAttribute("src", elem.img);
    img.addEventListener("click", function(){
      
      addtoinfo(elem);
    })

    var head = document.createElement("h4");
    head.innerText = elem.title;

    var rating = document.createElement("h4");
    rating.innerText = elem.review;

    var price = document.createElement("h4");
    price.innerText = elem.price

    var btn = document.createElement("button");
    btn.innerText = "QUICK BUY";
    btn.addEventListener("click", function(){
      
      addToCard(elem);
    })
    
    box.append(img, head, rating, price, btn);
    document.querySelector("#product").append(box);
    
    document.querySelector("#num").innerText = index +1 + " " + "results";
    // var line = document.querySelector("#num");

  })

  var cartDetailsArr = JSON.parse(localStorage.getItem("cartDetails")) || [];
    
  function addtoc(elem){

    document.querySelector("#totalItem").innerText=cartDetailsArr.length;
    elem.quant = 1;
    cartarr.push(elem)
    localStorage.setItem("cartDetails", JSON.stringify(cartarr));
  }


  function addToCard(elem){

    document.querySelector("#totalItem").innerText=cartDetailsArr.length;
    elem.quant = 1;
    cartDetailsArr.push(elem);

    localStorage.setItem("cartDetails",JSON.stringify(cartDetailsArr));
  }


  