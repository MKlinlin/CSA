var obj1 = {name:"123"};
var obj2 = {};
//在obj1中遍历，将obj1的值依次赋值给obj2
for(x in obj1) {
    obj2[x] = obj1[x];
}