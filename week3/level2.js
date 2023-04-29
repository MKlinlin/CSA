//循环做法
const factorial = n => {
    let result=1;
    for (i = 1; i <=n; i++) {
        result *=i;
    }
    return result;
}
console.log(factorial(10))

//递归做法
const factorial1 = n => {
    if (n == 0)
        return 1;
    else
        return n * factorial1(n - 1)
}
console.log(factorial1(10))