
function addProduct(){
  console.log("addProduct funciton reached")

  let productId = document.querySelector("#productId").value 
  let productName = document.querySelector("#productName").value 
  let productSalePrice = document.querySelector("#productSalePrice").value 

  const dataObject = {
      // id: productId,
      name: productName,
      salePrice: productSalePrice,
      // transaction_transaction_id: 2
  };

  const url = "http://localhost:8080/products/"

  const otherPram = {
      headers: {
          "content-type" : "application/json;",
      },
      body : JSON.stringify(dataObject),
      method: "POST",
  };

  fetch(url, otherPram)
  .then(function(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then(data=>{return data.json})
  .then(res=>console.log(res))
  .catch(error=>console.log(error))
}

function getAllProducts(){
  console.log("getAllProducts funciton reached")

  const url = "http://localhost:8080/products/"

  fetch(url)
  .then(function(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then(res=>console.log(res))
  .catch(error=>console.log(error))
}

function getOneProduct(){
  console.log("getOneProduct funciton reached")

  let productId = document.querySelector("#productId").value

  const url = "http://localhost:8080/products/"

  console.log("url + id: " + url + productId)

  fetch(url + productId)
  .then((resp) => resp.json())
  .then(resp=>console.log(resp))
  .catch(error=>console.log(error))
}

function updateProduct(){

  let productId = document.querySelector("#productId").value 
  let productName = document.querySelector("#productName").value 
  let productSalePrice = document.querySelector("#productSalePrice").value 

  const dataObject = {
      id: productId,
      name: productName,
      salePrice: productSalePrice
  };

  const url = "http://localhost:8080/products/"

  const otherPram = {
      headers: {
          "content-type" : "application/json;",
      },
      body : JSON.stringify(dataObject),
      method: "PUT",
  };

  fetch(url + productId, otherPram)
  .then(function(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then(data=>{return data.json})
  .then(res=>console.log(res))
  .catch(error=>console.log(error))
}

function deleteProduct(){

  let productId = document.querySelector("#productId").value

  const url = "http://localhost:8080/products/"

  const otherPram = {
      headers: {
          "content-type" : "application/json;",
      },
      method: "DELETE",
  };

  fetch(url + productId, otherPram)
  .then(function(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then(data=>{return data.json})
  .then(res=>console.log(res))
  .catch(error=>console.log(error))
}