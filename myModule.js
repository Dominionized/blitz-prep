var myData = 1234;

module.exports = {
    exportedData : myData,
    sum : function (nb1, nb2) {
        return nb1 + nb2;
    },
    Car : Car
};


function Car(colour, year) {
    this.colour = colour;
    this.year = year;
}
