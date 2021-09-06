//function statement
function a(){
    console.log("Md Adil Alam");
}
a();
//function Expression
var b=function(){
    console.log("function Expression");
}
b();
//Anonymous function without function is called anonymous function

var c=function (){
    console.log("Anonymous function");

}
c();
//Named function Expression
var d=function xyz(){
    console.log(xyz);
}
d();
//Difference between Parameter & Argument
var e=function (param1,param2){ //Parameter
    console.log("Diffrence between Parameter and Argument");
}
e(1,3); //Argument

//First class Function
 var f=function a(param1){
   return function abc(){

   }
  }
  console.log(f());
   