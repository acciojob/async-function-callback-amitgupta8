const url = "https://jsonplaceholder.typicode.com/posts/1"; 
  
 //your JS code here. If required. 
  
 async function fetchData(callback) { 
   const response = await fetch("https://jsonplaceholder.typicode.com/posts/1"); 
   const data = await response.json(); 
   callback(data); 
 } 
  
 function displayMessage(data) { 
         document.getElementById("output").innerText = data.title; 
 } 
  
 // fetchData(displayMessage); 
 // let sample = fetchData(displayMessage); 
 // let btn1 = document.querySelector("#btn"); 
 // btn1.addEventListener("click", displayMessage);