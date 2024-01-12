const clock = document.getElementById('clock')
// above and below both are different ways of getting element
// document.querySelector ('#clock')
let date = new Date() ;
console.log(date.toLocaleTimeString()) ;

// ab dekho jo above hai vo hr baar jb page reload hoga tha 
// tbhi nyi time ayega but we want ki hr baar time updated chahiye is kaaran hm setInterval ka use krenge

setInterval(function(){
  let date =  new Date();
  clock.innerHTML= date.toLocaleTimeString();
  
},1000)