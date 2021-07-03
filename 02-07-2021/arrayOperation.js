let a = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

console.log([...new Set(a)]);

let remove_duplicate = a.filter((c, index) => {
    return a.indexOf(c) == index;
});

console.log(remove_duplicate);

let b = [1, 2, 3, 4, 5];
console.log(b.slice(1, 3));

console.log(b.toString());

console.log(b.join("*"));

console.log("Var variable :" + var_var);
//console.log("Let variable :" + var_let);

var var_var;
let var_let;