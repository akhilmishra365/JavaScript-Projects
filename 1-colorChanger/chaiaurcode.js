const buttons = document.querySelectorAll('.button'); // we will get Node list 
// const body = document.querySelector('body');

buttons.forEach(function(button)
{
  button.addEventListener('click' , function(anyname){
    //anyname is object of event aur  anyname.target event listener ka function hai jo button click hone pe value dega anyname.target dega hme kis target se click aya hai event.target likhte hi pta chl jayega ki event aa kha se rha hai;
     if(anyname.target.id === "grey")
     {
        document.body.style.backgroundColor = anyname.target.id;
     }
     if(anyname.target.id === "white")
     {
        document.body.style.backgroundColor = anyname.target.id;
     }
     if(anyname.target.id === "yellow")
     {
        document.body.style.backgroundColor = anyname.target.id;
     }
     if(anyname.target.id === "blue")
     {
        document.body.style.backgroundColor = anyname.target.id;
     }
  })
})

 



