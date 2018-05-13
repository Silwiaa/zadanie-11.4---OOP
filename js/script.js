//create construction class
function Phone(brand, price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
}

//create metod
Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
};

//create objects
var iPhone6S = new Phone("Apple", 2250, "silver");
var samsungGalaxyS6 = new Phone("Samsung", 899, "golden");
var onePlusOne = new Phone("Oneplus", 2100, "black");

//results
iPhone6S.printInfo();
samsungGalaxyS6.printInfo();
onePlusOne.printInfo();