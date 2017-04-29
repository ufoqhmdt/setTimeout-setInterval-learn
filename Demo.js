
var begin = +new Date;
var count = 0;

//通过事件设置10秒的阻塞时间
document.getElementById('main').addEventListener('click', function() {
  console.log('\nclick start',logTime());
  waitWiths(10);
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
}, 10);

//然后让interval运行十次，且总时间不超过阻塞时间的10秒
var ufo = setInterval(function() {
  console.log('\n第',count,'次interval运行-------');
  console.log('interval callback start',logTime());
  console.log('world');
  console.log('interval callback end',logTime());
  count++;
  if(count === 10) clearInterval(ufo);
}, 10);

// some code

document.getElementById('main').click();