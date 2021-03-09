var result = localStorage.getItem("data")

document.getElementById("schezwanDescription").innerHTML = result

backToHome=()=>{
    window.location.href="http://localhost:5500/index.html"
}
addToFav=()=>{
    
    var msg = document.getElementById('schezwanDescription');
    msg.innerHTML = 'Congrats! you have added this item to your favourite list &#9786;'
    localStorage.setItem("noodlesfavcount",1)
    document.getElementById("button").disabled=true
  
    
    console.log("to add favourites")
}