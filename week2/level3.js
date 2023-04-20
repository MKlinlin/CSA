//第一种方法：tostring方法转成字符串再split分5，最后用map转成数组
let arr = [[1, [2, 3], 4], [5, [6, 7], 8, 9]];
let newarr = arr.toString();
newarr = newarr.split(',').map(Number);
console.log(newarr);

//第二种方法:思路与第一种方法一样，只是转用join来转换数组
let a = [[1, [2, 3], 4], [5, [6, 7], 8, 9]];
let newa = a.join();
newa = newa.split(',').map(Number);
console.log(newa);

//递归，如果多维数组的第i个元素仍然是数组，则继续调用fun函数递归，直至不是数组，则push到新数组b1后面。
var b = [[1, [2, 3], 4], [5, [6, 7], 8, 9]];
var b1 = [];

function fun(b) {
    for (var i = 0; i < b.length; i++) {
        if (Array.isArray(b[i])) {
            fun(b[i]);
        } else {
            b1.push(b[i]);
        }
    }
}
fun(b);
console.log(b1);