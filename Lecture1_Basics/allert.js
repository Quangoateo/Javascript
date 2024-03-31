// var result = confirm("Bạn có muốn rời trang?");
// if (result == true) {
//   alert("Cám ơn đã truy cập!");
// }
// else {
//   alert("Cảm ơn đã ở lại!");
// }



function person (name,age,color){
    this.name = name;
    this.age = age;
    this.color = color;
}

var p1 = new person("John", 42, "green");   // tạo đối tượng
var p2 = new person("Amy", 21, "red");      // tạo đối tượng
// console.log(person);
// document.write(person.name);
document.write(p1.age);                     // Outputs 42
document.write(p2.name); 