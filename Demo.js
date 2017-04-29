
var begin = +new Date;

document.getElementById('main').addEventListener('click', function() {
  console.log('\nclick start',logTime());
  waitWiths(5);
  console.log('click over',logTime());
})

function logTime(){
  var rtn = '第'+(+new Date - begin)/1000;
  return rtn;
}

function waitWiths(s) {
  var startTime = +new Date;
  while (+new Date - startTime < s * 1000) {};
}

//换一下setTimeout和setInterval的位置，会有不同的效果
setTimeout(function() {
  console.log('\nsetTimeout callback start',logTime());
  console.log('hello');
  console.log('setTimeout callback end',logTime());
}, 2000);

//修改不同的时间节点也会有不同的效果
var ufo = setInterval(function() {
  console.log('\ninterval callback start',logTime());
  console.log('world');
  console.log('interval callback end',logTime());
}, 1000);


// some code

document.getElementById('main').click();