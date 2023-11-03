Car.prototype.name = 'BMW'
Car.prototype.lang = 4900
Car.prototype.height = 1400

function Car(owner,color){
    // this.name = 'BMW'
    // this.lang = 4900
    // this.height = 1400
    this.owner = owner
    this.color = color
}

var car = new Car('小米','red')
var car2 = new Car('小陈','black')


//Car.prototype.name = '红旗'
// delete car.name
delete Car.prototype.name

car2.name = '红旗'
console.log(car2.name);
console.log(car2);
console.log(car.name);