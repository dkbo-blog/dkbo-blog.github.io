---
title: 利用網格系統模仿網站排版
date: 2015-06-21 15:23:00
category: 心情札記
tag:
- 日記
- CSS
- Grid System
- HTML
- Wordpress
- 網頁
feature: images/feature/do-themes.jpg
---
這兩天利用了時間用了自己寫的網格系統並模仿了 2 個 Wordpress Themes <a href="http://demo.themegrill.com/colormag/">colormag</a>、 <a href="https://wordpress.org/themes/skt-corp/">Sktcorp</a>

在觀察 Themes 時，都覺得很容易，但在實作時，就會發現自己的簡易格線系統有一些不足並逐一修正。在一些細節上..因為時間上的問題也沒特別去調整，用的差不多就好。

首先來看看第一個 Themes <a href="http://demo.themegrill.com/colormag/">colormag</a>再來看看以下我模擬的部分..
<iframe height='600' width='100%' src="//codepen.io/dkbo/embed/oXGyMK/?height=600&amp;theme-id=4234&amp;default-tab=result"  frameborder="no" scrolling="no" allowfullscreen="allowfullscreen">See the Pen <a href="http://codepen.io/dkbo/pen/oXGyMK/">Themes two</a> by dkbo (<a href="http://codepen.io/dkbo">@dkbo</a>) on <a href="http://codepen.io">CodePen</a>.
</iframe>

其實蠻有趣的，整齊的排版加上順眼的眼色，就能吸引住訪客的眼睛，此 Themes 就因為吸引到我眼睛，所以我拿來試作玩玩看。這個 Themes 讓我在格線系統裡在加上 .full 這個選擇器主要是為了應付滿版及非滿版的框架。

再來看看第二個 Themes <a href="https://wordpress.org/themes/skt-corp/">Sktcorp</a>再來看看以下我模擬的部分..
<iframe height='600' width='100%' src="//codepen.io/dkbo/embed/mJBLLa/?height=600&amp;theme-id=4234&amp;default-tab=result"  frameborder="no" scrolling="no" allowfullscreen="allowfullscreen">See the Pen <a href="http://codepen.io/dkbo/pen/mJBLLa/">themes one</a> by dkbo (<a href="http://codepen.io/dkbo">@dkbo</a>) on <a href="http://codepen.io">CodePen</a>.
</iframe>

這 Themes 算是沒放入資料的初始版本，所以版面很空，正因為如此來排板來玩玩看。排版時發現到在格線系統內未放入 hide，show 的部分，於是...就其他的border shadow radius text-shadow 等..也都放進去。雖然會增加CSS 檔案的容量啦!...

在觀看完以上正 Themes 跟仿 Themes 後，能有效發現點、線、面，如果有做到適當的間距、大小、顏色，觀感都不差，反觀..我在試作時，沒去注意細節。那些間距、顏色、大小，就毀了一個Themes了。
