let imgs = document.querySelectorAll('ul>li');
let points = document.querySelectorAll('ol>li');
let banner = document.getElementsByClassName('banner');

//准备一个变量，表示当前是第几张轮播图，默认第一张
let index = 0;

function changeOne(type) {
  //让当前页面消失，清空类名
  imgs[index].className = '';
  points[index].className = '';
  //根据type传递的参数，来切换index的值
  if (type === true) {
    index++;
  } else if (type === false) {
    index--;
  } else {
    if (typeof type == "number")
      index = type;
  }
  if (index >= imgs.length) {
    index = 0; //如果index大于数组长度，则切换到第一张
  }
  if (index < 0) {
    index = imgs.length - 1; //如果index小于零，就相当于向左切换到末尾，转到最后一张
  }
  //重新赋classname实现跳转
  imgs[index].className = 'active';
  points[index].className = 'active';
}

banner[0].addEventListener('click', function (e) {
  if (e.target.className === 'left') {
    changeOne(false);
  }
  if (e.target.className === 'right') {
    changeOne(true);
  }
  if (e.target.dataset.name === 'p') {
    let i = parseInt(e.target.dataset.i, 10);//转换为数字类型
    changeOne(i);
  }
});