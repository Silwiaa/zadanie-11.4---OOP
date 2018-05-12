//create construction class
function Phone(brand, price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
}

//create metod
Phone.prototype.printInfo = function() {
    colsole.log ("The phone brand is " + this.brand + ", color is " this.color + " and the price is " this.price + ".");
}