window.addEventListener("load", () => {
  console.log("hello")
  caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  capsArray = caps.split('')
  
  lowers = "abcdefghijklmnopqrstuvwxyz"
  lowersArray = lowers.split('')
  
  specials = "!#$%&()*+,-./:;<=>?@[\]^_{|}~"
  specialsArray = specials.split('')
  
  //start your code here
  const button = document.querySelector("#button")
  const output = document.querySelector("output")
  const newPass = []
  
  button.addEventListener("click", () =>{
    input = parseInt(document.querySelector("#input").value)
    for (i=0; i<= input; i++){
      
    }
  })
});
