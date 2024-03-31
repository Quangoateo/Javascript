var i =0;
var id = setInterval (myAlert,3000);
function myAlert()
{
    i++ ;
    alert("Hi"+ i);
    if( i == 5 )
    {
        clearInterval(id);
    }
}