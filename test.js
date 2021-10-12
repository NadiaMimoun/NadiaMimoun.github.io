/*x=1;
var a=1;
var b=10;
var c=function(a,b,c){
    console.log(x);
    console.log(a);
    var f=function(a,b,c){
        b=a;
        console.log(b);
        b=c;
        var x=5;
    }
    f(a,b,c);
    console.log(b);
    var x=10;
}
c(8,9,10);
console.log(b);
console.log(x);


var x=9;
function myfunction(){
    return x*x;
}
console.log(myfunction());
x=5;
console.log(myfunction());

var foo=1;
function bar(){
    if(!foo){
        var foo=10;
    }
    alert(foo);
}
bar();*/

let CAR= (function(){
    let speed=0;
    let direction=0;
    return{
        gasPaddle:function(){
            if(speed+5>120){
                speed=120;
            }
            else{
                speed=speed+5;
            }
        },
        break:function(){
            if(speed-10<0){
                speed=0;
            }
            else{
                speed=speed-10;
            }
        },
        turnLeft:function(degree){
            direction-=degree;
        },
        turnRight:function(degree){
            direction+=degree;
        },
        status:function(){
            console.log("The car is driving direction " + direction + " at " + speed + "mph"
            )
        }
    }
})();


function computer(ram,cpu,storage){
    this.ram=ram;
    this.cpu=cpu;
    this.storage=storage;

}
computer.prototype.runProgram=function(program){
    console.log( "running: " + program);

};
function Laptop(ram,cpu,storage,battery){
    this.ram=ram;
    this.cpu=cpu;
    this.storage=storage;
    this.battery=battery;

}
Laptop.__proto__=computer.prototype;
Laptop.prototype.carryAround=function(){
    console.log( "carrying laptop:  cpu" + this.cpu +" ram: " + this.ram + " storage: " + this.storage + " battery: " + this.battery);

};