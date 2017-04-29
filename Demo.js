
var begin = +new Date;
var count = 0;

function block(){
  console.log('\nclick start',logTime());
  waitWiths(5);
  console.log('click over',logTime());
}

function logTime(){
  var rtn = '第'+(+new Date - begin)/1000;
  return rtn;
}

function waitWiths(s) {
  var startTime = +new Date;
  while (+new Date - startTime < s * 1000) {};
}

block();

//换一下setTimeout和setInterval的位置，会有不同的效果
// setTimeout(function() {
//   console.log('\nsetTimeout callback start',logTime());
//   console.log('hello');
//   console.log('setTimeout callback end',logTime());
// }, 1000);

//修改不同的时间节点也会有不同的效果
var ufo = setInterval(function() {
  console.log('\n第',count,'次interval运行-------');
  console.log('interval callback start',logTime());
  console.log('world');
  console.log('interval callback end',logTime());
  count++;
  if(count === 10) clearInterval(ufo);
}, 1000);