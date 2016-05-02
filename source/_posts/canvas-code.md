---
title: Canvas 畫布 code
date: 2015-07-15 11:51:00
category: 網頁設計
tag:
- Canvas
- HTML5
- JavaScript
feature: images/feature/canvas.jpg
---
在EXCEL做些資料的蒐集，有時會用些長條圖、圓餅圖、折線圖等，把數據圖片化能有效的分析資訊並做出決策。因這個概念萌生出一些念頭，把之前懶得學的 html5 canvas 重新看了一遍並實作出來。不過現在還不是很懂得如何去畫~開始後悔之前沒學好數學。目前只寫了一個簡單的CodePen，但因為不成熟還是花了不少時間去寫。

<iframe height='600' width='100%' scrolling='no' src='//codepen.io/dkbo/embed/Qbxjqb/?height=600&theme-id=4234&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' >See the Pen <a href='http://codepen.io/dkbo/pen/Qbxjqb/'>Qbxjqb</a> by dkbo (<a href='http://codepen.io/dkbo'>@dkbo</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

以上的程式寫的是隨機數據，並搭配已設好的10種顏色隨機指派。形狀則分為長條塗及圓餅圖。所以每次看到時都會出現不同結果。
如果想把Canvas 用到很神的話就來<a href="http://cheatsheetworld.com/programming/html5-canvas-cheat-sheet/">cheatsheetworld</a>這網站慢慢學習吧!

以下為學習筆記
arc(x,y,r,startangle,endangle,clockwise)
x : X座標
y : Y座標
r : 半徑
startangle : 弧度起始位置
endangle : 弧度結束位置
clockwise : true 順向 false 逆向

rect(x,y,width,height)
方形
x : X座標
y : Y座標
width : 寬度
height : 高度

meveTo(x,y)
移動到該座標
X: X座標
y: y座標

lineTo(x,y)
畫條線至該座標
X: X座標
y: Y座標
