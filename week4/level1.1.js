var funcs = []
for (var i = 0; i < 10; i++) {
(function(i){
funcs.push(function() {
    console.log(i)
})
})
}
// 执行多个函数，输出 0、1、2、3、4、5、6、7、8、9
funcs.forEach(function(func) {func()})