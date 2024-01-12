// we will here go for submit event bcz it is a submit button
const form = document.querySelector('form');

//let height = parseInt(document.querySelector('#height').value)
//if we will use hieght out of form then it will give us empty values bcz value daalne se pehle page load hoga to script run kr jayegi

form.addEventListener('submit',function(event) {
  event.preventDefault();
  let height = parseInt(document.querySelector('#height').value)
  let weight =  parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#results');
  const category = document.querySelector('#Category')
  if(height == 0 || height<0 || isNaN(height)){
    result.innerHTML="please give a valid height";
  }
  else if( weight == 0 || weight<0 || isNaN(weight))
  {
    result.innerHTML="please give a valid weight";
  }
  else{
    const answer = (weight/((height*height)/10000)).toFixed(2) 
    if(answer>24.9)
    {
      category.innerHTML = "you are overweight";
    }
    else if (answer>=18.6 && answer<=24.9 )
    {
      category.innerHTML= "You are normal weight";
    }
    else {
      category.innerHTML="you are Under weight";
    }
    result.innerHTML= `<span> ${answer}</span>`
  }
 
  





})