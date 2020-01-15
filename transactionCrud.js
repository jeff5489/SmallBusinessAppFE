    // ADD MULTIPLE PRODUCT OBJECTS TO ARRAY OF OBJECTS

    // ONLY SINGLE PRODUCT WITH ALL ITS FIELDS
    // Get product id, name and salePrice from inputs and create object
    // Add object to productsOfTransaction

    // ONLY SINGLE PRODUCT ID
    // Get product id from input field
    // GET request to all products in DB
    // Add product info that matches product id to object
    // Add object to productsOfTransaction

    // MULTIPLE PRODUCTS WITH ONLY ID AND QUANTITY
    // Get single product id and quantity from input field 
    // That single id and quantity is added to as an object to array on click
    // Continue adding individual product ids and quantities at a time to array
    // Array is sent with POST request 

    // MULTIPLE PRODUCTS WITH ONLY ID AND QUANTITY BY CIRCLE BUTTON NEXT TO LIST OF PRODUCTS
    // On page load fire a GET request for all products
    // All products will be displayed on page with circle button to indicate intent to buy product
        // along with input to enter quantity desired
    // Click circle next to product info you want and enter quantity in input
    // On click that single id and quantity is added to as an object to array
    // Repeatably add objects to array
    // Array is sent with POST request to back end where list of pairs is iterated through 
        // and added to transaction arrayList of products as a product

const productsToBeAdded = []  

function addToProductsToBeAdded(){
  let addProductId = document.querySelector("#addProductId").value 
  let addProductQuantity = document.querySelector("#addProductQuantity").value 

  let productToAdd = {
    id: addProductId,
    // productQuantity: addProductQuantity
  }

  productsToBeAdded.push({id: addProductId})

  // console.log(productsOfTransaction)
}

function showProductsToBeAdded(){
  console.log("productsToBeAdded below")
  console.log(productsToBeAdded)

}

function addTransaction(){
    let customerIdText = document.querySelector("#customerId").value    

    const dataObject = {
        transactionDateTime: null,
        customerId: "C1",
        transactionAmount: null,
        productsOfTransaction: 
        // productsToBeAdded
        [{
          id: 2,
          name: "Product 1"
        },
        {
          id: 3,
          name: "Product 2"
        }]
          // [{
          //   productId: 1,
          //   productName: "Product 1"
          // },
          // {
          //   productId: 2,
          //   productName: "Product 2"
          // }]
    };

    // console.log(dataObject)

  
    const url = "http://localhost:8080/transactions/"
  
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

  function getTransaction(){
    let transactionId = document.querySelector("#transactionId").value 
    const url = "http://localhost:8080/transactions/"

    fetch(url + transactionId)
    .then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    // .then(data=>{return data.json})
    .then(res=>console.log(res))
    .catch(error=>console.log(error))

  }

  function getAllTransactions(){
    const url = "http://localhost:8080/transactions/"

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

  function updateTransaction(){
    // Should this be an option?
  }

  function deleteTransaction(){
    let transactionId = document.querySelector("#transactionId").value 

    const url = "http://localhost:8080/transactions/"
  
    const otherPram = {
        headers: {
            "content-type" : "application/json;",
        },
        method: "DELETE",
    };
  
    fetch(url + transactionId, otherPram)
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
