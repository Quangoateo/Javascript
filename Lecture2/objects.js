// var person ={
//     name:"quang",
//     age :13,
//     favcolor : "blue",
//     height : 175 ,

// };
// var x = person.age;
// var y=  person['age'];
// console.log(x);
// console.log(y);

function person(name,age,favcolor ,  height )
{
    this.name = name ;
    this.age  =  age ;
    this.favcolor =  favcolor ;
    this.height = height ;


    this.changename = function (name)
    {
        this.name = name ;

    }
}
var p1 = new person("quangvu",123,"blue ",175);
var p2  = new person("tuan",13,"red",175);
p1.changename("john")
console.log(p1);
console.log(p2);
