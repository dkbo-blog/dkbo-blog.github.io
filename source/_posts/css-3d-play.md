---
title: CSS 3D 實在好玩
date: 2015-07-25 19:05:00
category: 網頁設計
tag:
- 3D
- CSS3
- 網頁
feature: images/feature/3d.jpg
---
再弄懂了CSS 3D 屬性之後，就開始實作出 3D 物件，實作的過程中，走走路都會想到 perspective 及 translataZ 這兩個屬性，轉個彎呢就會聯想到 rotateY 這個屬性，<del>也不知道是不是走火入魔了</del>。

再寫這個 Pen 之前本來只是照著旋轉木馬幻燈片的方式去做，做到後來想要把幻燈片換成有立體感的，就去找了牆壁背景，調了調去的就調成現在這個樣子了!

變成這個樣子，就開始聯想到一個浮空的齒輪，原來是這樣做的啊!恩不知道往這塊 3D WEB ? 有沒有發展性質。雖然現在大概知道怎做出一些 3D 物件出來，但還不知道怎 快速的 RWD3D 及最佳化。

translate 有 X 、 Y 、 Z
X 的部分就當作 左移、右移
Y 的部分就當作 上升、下降
Z 的部分就當作 前進、後退

rotate 有 X 、 Y 、 Z  
X 的部分就當作 繞著 X 順轉、逆轉
Y 的部分就當作 繞著 Y 順轉、逆轉
Z 的部分就當作 繞著 Z 順轉、逆轉

以下就是剛剛用出的一個範例;
<iframe height='600' width='100%' scrolling='no' src='//codepen.io/dkbo/embed/MwPpKa/?height=600&theme-id=4234&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' >See the Pen <a href='http://codepen.io/dkbo/pen/MwPpKa/'>zGmrEd</a> by dkbo (<a href='http://codepen.io/dkbo'>@dkbo</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>
