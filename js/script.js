var iPhone6S = new Phone("Apple", 2250, "silver", 146);
var SamsungGalaxyS6 = new Phone("Samsung", 2789, "black", 138);
var OnePlusOne = new Phone("OnePlus", 1800, "white", 162);

function Phone(brand, price, color, weight) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.weight = weight;
}

Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " , the price is " + this.price + " and it's weight is " + this.weight + ".");
}

iPhone6S.printInfo ();
SamsungGalaxyS6.printInfo ();
OnePlusOne.printInfo ();