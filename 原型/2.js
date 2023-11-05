Car.prototype.name = 'BMW'
Car.prototype.lang = 4900
Car.prototype.height = 1400

//构造函数
function Car(owner,color){
    this.name = 'BMW'
    this.lang = 4900
    this.height = 1400
    this.owner = owner
    this.color = color
}
//创建实例对象
var car = new Car('BMW','red')
var car2 = new Car('宝马','black')

console.log(car);
console.log(car2);
//Car.prototype.name = '红旗'
// delete car.name
// delete Car.prototype.name

// car2.name = '红旗'
// console.log(car2.name);
// console.log(car2);
// console.log(car.name);