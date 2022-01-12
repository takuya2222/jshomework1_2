'use strict'

const question = prompt('日本の首都は？');

while(true) {
  if(question === '東京') {
    console.log('正解です！');
    break;
  } else {
    console.log('不正解です！');
    continue;
  }
}


// 「日本の首都は？」という質問がでる。
// ①正解の場合
// 「東京」と答える。
// →「正解！」という表記が出る。
// →OKを押すと処理が終了する。

// ②不正解の場合
// 「東京」以外の回答をする。
// →「不正解！」という表記が出る。
// →OKを押すと「日本の首都は？」の質問に戻る