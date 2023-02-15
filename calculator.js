let input=document.getElementById("input")

 let buttons=(number)=>{
    input.value+=number  
}

let equals=()=>{
  input.value=eval(input.value); 
}

let clrs=()=>{
    input.value=""
}

