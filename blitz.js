var array = [
    {
        name: "Dom",
        age: 19,
        occupation: "Programmer"
    },
    {
        name: "Viktor",
        age: 14214,
        occupation: "Programmer"
    },
    {
        name: "Tony",
        age: 231321,
        occupation: "Programmer"
    }

];

console.log(array);

var mapped = array.map(function (element) {
    return element.age;
});
console.log("Mapped:" + mapped);

var reduced = mapped.reduce(function (element1, element2) {
    return element1 + element2;
});

console.log("Reduced :" + reduced);


