
function Phone(brand ,color ,memory ,price) {
	this.brand = brand;
	this.price = price;
	this.memory = memory;
	this.color = color;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " memory: " + this.memory + " GB " + " and the price is " + this.price + ".");
}

var samsungGalaxyS6 = new Phone("Samsung" ,"black" , 32 , 2000);
var iPhone6S = new Phone("Apple","silver" ,64 ,2250 );
var onePlusOne = new Phone("OnePlus" ,"Green" ,16 ,1800);
var nokiaX6 = new Phone("Nokia" ,"Black" ,16 ,1300);

iPhone6S.printInfo();
samsungGalaxyS6.printInfo();
nokiaX6.printInfo();