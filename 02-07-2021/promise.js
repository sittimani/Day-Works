console.log("Started")
var promise = new Promise(function(resolve, reject) {
    let a = 1000000000;
    var sum;
    for (var i = 0; i < a - 1; i++) {
        sum = i;
    }
    if (a === sum) {
        resolve("Same");
    } else {
        reject("Not same");
    }
});

promise.then(function(msg) {
    console.log(msg);
}, function(msg) {
    console.log(msg);
}).catch(function() {
    console.log('Some error has occured');
});
console.log("ended");


