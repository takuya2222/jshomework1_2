'use strict'

const que = window.prompt('日本の首都は？');
const ans = true;

while(ans) {
  if(que === '東京') {
    window.alert('正解です！');
  } else {
    window.alert('不正解です！');
  }
}

// const que = window.prompt('日本の首都は？');
// const ans = true;

// while(ans){
//   if(!que == "東京") {
//   alert("不正解です！");
//   continue;
//   }
//   alert("正解です！");
//   }
  