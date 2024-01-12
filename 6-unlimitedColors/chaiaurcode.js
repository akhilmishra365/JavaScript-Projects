//first task is to generate random colors 
const randomColor = function(){
  // const hex creates a string containing all the possible hexadecimal digits (0-9 and A-F). These digits are used to represent color values in hexadecimal format.

  const hex = "0123456789ABCDEF" ;
  //const color = "#"; initializes a variable named color with a hash symbol (#), which is the standard prefix for hexadecimal color codes
  let color = "#"
/*
for(let i = 0; i < 6; i++) { ... } starts a loop that runs six times, once for each digit in the hexadecimal color code.
Inside the loop:
color += hex[Math.floor(Math.random() * 16)]; does three things:
Math.random() * 16 generates a random floating-point number between 0 (inclusive) and 16 (exclusive).
Math.floor(...) rounds down the random number to the nearest integer, resulting in a random number between 0 and 15.
hex[...] uses the random integer as an index to access a random character from the hex string, which is then added to the color variable.
*/








  for(let i = 0 ; i<6; i++)
  {
    color+= hex[Math.floor(Math.random()*16)];
  }
  return color
};
let IntervalId ; 
const startchangingColor = function(){
  //ye null check kiya hai taaki  hmne jo baad mevo null kiya hai na uske wajah se koi dikkat na ho 
  
  if(IntervalId == null){
    IntervalId = setInterval(changebgcolor,1000); 
  }
  
  function changebgcolor(){
    document.body.style.backgroundColor = randomColor()
  }
 
};
const stopchangingColor = function (){
  clearInterval(IntervalId); 
  //ye null bcz sirf hm ek acha aur cleaner code likh re hain 
  IntervalId = null ;


};

document.querySelector("#start").addEventListener('click',startchangingColor)
document.querySelector("#stop").addEventListener('click',stopchangingColor)

