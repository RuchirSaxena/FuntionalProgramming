

var tripple=function (x) {
    return x * 3;
}

var animals = [
{ name: "black cat", species: "cat" },
{ name: "bull dog", species: "dog" },
{ name: "Labradoor", species: "dog" },
{ name: "white cat", species: "cat" }

];

//Filter function

var dogs = animals.filter(function(animal) {
    return animal.species === "dog";
});

document.write(JSON.stringify(dogs)); //[{"name":"bull dog","species":"dog"},{"name":"Labradoor","species":"dog"}]

//Map function
var names = animals.map(function(animal) {
    return animal.name;
});

document.write(names);//[black cat,bull dog,Labradoor,white cat]

var orders = [
{ amount: 200 },
{ amount: 300 },
{ amount: 400 },
{ amount: 500 },
{ amount: 600 }
];

var totalOrderAmount = orders.reduce(function (sum, order) {
    console.log(sum);
    return sum + order.amount;
}, 0); //here 0 is the starting amount ie.sum argument value

document.write(totalOrderAmount);//2000