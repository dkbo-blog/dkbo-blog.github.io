---
title: 後面還有很多路要走~
date: 2015-09-01 15:32:00
category: 網頁設計
tag:
- 日記
feature: images/feature/busy.jpg
---
從無到有過程中，在旁人眼裡就只是盯著螢幕敲鍵盤，但在我的眼中，卻有無數的IF ELSE ，講白一點就是此路通不通，好在在電腦世界裡頭，死個千千萬萬次，還是可以繼續試。以前看來很複雜的文件，現在看卻是覺得很容易。這就是所謂的升等打怪不痛了。

最近試著寫的 RPG 網頁，本來只是透過大量的 DIV 構造場景，但大量 DIV 下場就是吃很多的效能，在電腦也許感受不到，行動裝置就非常明顯，雖然也是做得出來。後來就轉換到用畫布的方式，一張圖就好過整個 DIV 了吧!透過畫好的圖，再用 CSS 造成位移。在這裡有個問題點就是!我並不清楚 Canvas 一直畫造成位移效果的效能比較好，還是畫好一整個畫面在用 CSS 的 translate3D 來位移的效能比較好，哪種效能比較優呢? 並沒有花時間去做測試。

以前因老闆有需求，做一個即時聊天的功能網頁。那時我就有查一些資訊，Socket.io ，但那時我壓根看不懂怎去使用這玩樣兒。現在呢!突然有個 Online Game 的想法在，又查到了 Socket.io，這次查就跟以前不同啦!程式碼看得懂 XD 。 然後試一下 把 JSON 資訊利用Console.log 顯示在各 Clinet 端，恩莫名的成就來了。透過 JSON 只要想好 Server 端所具備的資料，及要呈現在 Client 端的資訊，很多互動的工具就可以做出來了!

最近也終於到達門檻可以學習 Node.js 了，ES6 就在等等吧! angular 2.0 再看看吧!
