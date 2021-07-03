let Parent = function(name) {
    this.name = name;
}

let Child = function(name, age) {
    Parent.call(this, name);
    this.age = age;
}

Child.prototype = new Parent();

var details = new Child("Manikandan", 20);

console.log(details.name);