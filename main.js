const url = "https://api.quotable.io/random"; //api url
function generateQuote(){
   fetch(url)                                 //fetching api on running of function
  .then(function(data) {
         return data.json();
    })
    .then(function(data){    
    document.getElementById("quote").innerHTML = data.content; document.getElementById("author").innerHTML = "- " + data.author;
   })
 .catch(function(err) {
    console.log(err); 
    });
 }
 
