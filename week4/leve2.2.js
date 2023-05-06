function red() {
    console.log('red');
  }
  
  function green() {
    console.log('green');
  }
  
  function yellow() {
    console.log('yellow');
  }
  
  function light(timer, fn) {
    return new Promise(resolve => {
      setTimeout(() => {//经过多少秒后，执行回调函数fn
        fn();
        resolve();//将promise对象标记为已完成
      }, timer);
    });
  }
  
  function step() {
    light(3000, red)
      .then(() => light(1000, green))
      .then(() => light(2000, yellow))
      .then(() => step());
  }
  
  step();
  