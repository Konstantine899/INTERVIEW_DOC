console.log('Start');

function timeout2sec() {
  console.log('timeout2sec');
}

window.setTimeout(function () {
  console.log('Inside timeout, after 2000 seconds');
}, 2000);

setTimeout(timeout2sec, 2000);

console.log('End');
