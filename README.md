# setTimeout_setInterval_learn
You don't kwon setInterval setTimeout

## 引用介绍 

`Note that while mouse click handler is executing the first interval callback executes. As with the timer its handler is queued for later execution. However, note that when the interval is fired again (when the timer handler is executing) this time that handler execution is dropped. If you were to queue up all interval callbacks when a large block of code is executing the result would be a bunch of intervals executing with no delay between them, upon completion. Instead browsers tend to simply wait until no more interval handlers are queued (for the interval in question) before queuing more.`


http://www.cnblogs.com/zichi/p/4604053.html
https://johnresig.com/blog/how-javascript-timers-work/
http://www.ruanyifeng.com/blog/2014/10/event-loop.html
http://www.cnblogs.com/dojo-lzz/p/4606448.html
