'use strict'

const question = prompt('日本の首都は？');

while(true) {
  if(question === '東京') {
    console.log('正解です！');
  } else {
    console.log('不正解です！');
    continue;
  }
}