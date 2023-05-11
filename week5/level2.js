//分析以下代码输出顺序，将原因和结果注释到代码代码旁
//settimeout函数设置了延迟0，虽然延迟为0，但仍然需要等待任务栈清空后再执行，所以会在async1执行完毕后再执行
setTimeout(() => {
console.log('setTimeout start');//按顺序输出
new Promise((resolve) => {
console.log('promise1 start');//promise中先输出，再设为resolve
resolve();
}).then(() => {
console.log('promise1 end');//等待resolve完成得到resolve状态再输出
})
console.log('setTimeout end');//没有延时，直接输出
},0);
function promise2() {
return new Promise((resolve) => {
console.log('promise2');
resolve();
})
}
async function async1() {
console.log('async1 start');//没有任何异步，等待操作，直接输出
await promise2();//等待proimise2执行完毕
console.log('async1 end');//等待结束后输出async1 end，输出顺序在“script end"后
}
async1();
console.log('script end');//在async1等待时，加入任务栈，在promise2后输出（我猜的）