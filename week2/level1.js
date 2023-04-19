
//第一种方法：object构造函数
let pp=new Object();
pp.heigth=170;
pp.weight=55;
console.log(pp);


//第二种方法：先构造再调用
function person(){
    this.name='MKlinlin';
    this.age=19;
}
let a= new person();
console.log(a);

//第三种方法:字面量
let obj={
    Name:'MKlinlin',
    age:19
}
console.log(obj)