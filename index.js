
function a(){
    var abc=10;
    function c(){
        console.log(abc);
    }
    return c;

}
var cba=a();
 console.log(cba);

 cba();