console.log("customerCrud reached")

function getInputValues(){
  let customerId = document.querySelector("#customerId").value 
  let customerFirstName = document.querySelector("#customerFirstName").value 
  let customerLastName = document.querySelector("#customerLastName").value 
  let customerPhoneNumber = document.querySelector("#customerPhoneNumber").value 
  let customerAddress = document.querySelector("#customerAddress").value

  const dataObject = {
    id: customerId,
    firstName: customerFirstName,
    lastName: customerLastName,
    phoneNum: customerPhoneNumber,
    address: customerAddress
  };

  return dataObject;
}

const url = "http://localhost:8080/customers/"

function makeFetch(url, otherPram){
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

function makeIdFetch(url){
  let customerId = document.querySelector("#customerId").value 

  console.log("url + id: " + url + " " + id)

  fetch(url + customerId)
  .then((resp) => resp.json())
  .then(resp=>console.log(resp))
  .catch(error=>console.log(error))
}

function addCustomer(){
  console.log("addCustomer funciton reached")

  document.querySelector("#customerId").addEventListener("click", function(event){
    event.preventDefault()
  });

  const otherPram = {
    headers: {
        "content-type" : "application/json;",
    },
    body : JSON.stringify(getInputValues()),
    method: "POST",
  };

  makeFetch(url, otherPram);
}

function getCustomer(){
  console.log("getCustomer funciton reached")

  document.querySelector("#customerId").addEventListener("click", function(event){
    event.preventDefault()
  });

  makeIdFetch(url)
}

function getAllCustomers(){
  console.log("getAllCustomers funciton reached")

  document.querySelector("#customerId").addEventListener("click", function(event){
    event.preventDefault()
  });

  fetch(url)
  .then((resp) => resp.json())
  .then(resp=>console.log(resp))
  .catch(error=>console.log(error))
}

function updateCustomer(){
  console.log("updateCustomer funciton reached")

  document.querySelector("#customerId").addEventListener("click", function(event){
    event.preventDefault()
  });
  
  const otherPram = {
    headers: {
        "content-type" : "application/json;",
    },
    body : JSON.stringify(getInputValues()),
    method: "PUT",
  };

  // makeIdFetch(url, otherPram);

  let customerId = document.querySelector("#customerId").value 

  // console.log("url + id: " + url + " " + id)

  fetch(url + customerId, otherPram)
  .then((resp) => resp.json())
  .then(resp=>console.log(resp))
  .catch(error=>console.log(error))
}

function deleteCustomer(){
  console.log("deleteCustomer funciton reached")

  document.querySelector("#customerId").addEventListener("click", function(event){
    event.preventDefault()
  });
  
  const otherPram = {
    headers: {
        "content-type" : "application/json;",
    },
    // body : JSON.stringify(getInputValues()),
    method: "DELETE",
  };

  // makeIdFetch(url, otherPram);

  let customerId = document.querySelector("#customerId").value 

  // console.log("url + id: " + url + " " + id)

  fetch(url + customerId, otherPram)
  .then((resp) => resp.json())
  .then(resp=>console.log(resp))
  .catch(error=>console.log(error))
}