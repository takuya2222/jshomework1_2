'use strict'

const question = window.prompt('日本の首都は？');

while(true) {
  if(question === '東京') {
    window.alert('正解です！');
  } else {
    window.alert('不正解です！');
  }
}