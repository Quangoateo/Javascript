// var obj= {
//     age : 0 ,
//     set ageinfo(age)
//     {
//         console.log('ssetter' + age);
//         this.age = age ;
//     }   ,
//     get ageinfo()
//     {
//         console.log('getter');
//         return "age info" + this.age ;

//     }
// };

// obj.ageinfo = 25; //we call set method by assigning the values to the variables
// alert(obj.ageinfo);




//******************************************* */


function person(age )
{
    this.age =  0;
    Object.defineProperty(this,'ageinfo',{
        set : function(age )
        {
            console.log('setter'+ age);
            this.age = age ;
        },
        get : function()
        {
            console.log ('getter'+ age );
            return "age info "+ this.age ;
        }
    });
}
var obj = new person(0);
obj.ageinfo =25;
alert(obj.ageinfo);