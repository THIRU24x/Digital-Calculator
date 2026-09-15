const num=document.getElementById("num");
function display( input){
num.value += input;
}
function calculate(){
    try{num.value=eval(num.value);}
    catch(error){
      num.value="INVALID SYNTAX ";  
    }
    

}
function clearf(){
    num.value="";

}
