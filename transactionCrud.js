function addTransaction(){
    console.log("addTransaction funciton reached")
  
    let transactionId = document.querySelector("#transactionId").value 
    let transactionDateTime = document.querySelector("#transactionDateTime").value 
    let customerId = document.querySelector("#customerId").value 
    // let productsOfTransaction = document.querySelector("#productsOfTransaction").value 

    let productOfTransaction = {
      id: "P1",
      name: "Product 1",
      salePrice: 1
    };

    const dataObject = {
        transactionId: transactionId,
        transactionDateTime: transactionDateTime,
        customerId: customerId,
        // productsOfTransaction: productsOfTransaction
        // productsOfTransaction: productOfTransaction
    };
  
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
