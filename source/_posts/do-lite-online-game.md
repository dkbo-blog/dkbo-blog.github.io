---
title: 陽春 Online Game 實作
date: 2015-09-02 16:28:00
category: 網頁設計
tag:
- socket.io
- 網頁
feature: images/feature/rpg.jpg
---
<a href="http://dkbo-rpg-online.herokuapp.com">Online 網址</a>

使用 Socket.io 及 Node.js 把原先的 RPG 網頁改成 online 多人互動的網頁

Server 端是架設在 heroku 的雲端上，缺點是美國連線速度比較慢。

這次 online 花最多時間在於 express 的 express.static，花了3/4的時間就是在找它，誰叫我英文爛呢。

在內容部分沒有做優化，只是把一些雙向溝通的程式加上去而已，有時後進去還會殘留人物在裡面，不過既然知道怎做了

就不用擔心了，<del>所以這網頁應該會擺到爛掉</del>

之後可能要先來慢慢修改原先單機的程式碼。

因為寫的太亂了
