'use strict'

const question = window.prompt('日本の首都は？');

while(true) {
  if(question === '東京') {
    alert('正解です！');
    continue;
  } else {
    alert('不正解です！');
  }
}