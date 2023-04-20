let a= [1,2,3];
console.log(a);
    Array.prototype.newPush=function(){
        var arglen=arguments.length;//参数个数
        var arrlen=this.length;//原数组的个数
        for(let i=0;i<arglen;i++){//在原数组的末尾依次添加新的元素值
            this[arrlen+i]=arguments[i];
        }
        return arglen+arrlen;
    }
    var arr=[1,2,6,5,8,9];
    var newArr=arr.newPush(88,99,66);
    console.log(arr);
    console.log(newArr);