---
title: Web RPG Resume (實作線上 RPG 履歷)
date: 2015-08-12 20:52:00
category: 網頁設計
tag:
- React
- 網頁
- RPG
feature: images/feature/rpg.jpg
---
Web RPG 履歷表、透過從以前到現在都流行的 RPG Marker(RPG 製作大師)所擁有的風格，並在網頁上呈現，實作過程中比想像中的容易，這裡不討論也不張貼程式碼，因為 DK 寫的也沒多漂亮。DK 已經把履歷已經放在 GitHub 了。如果不怕傷眼睛的話可以看看。

這次利用 React 搭配少量的 Jquery 來實作，其實只需要用到原生 JavaScript 來寫即可，不然多佔了讀取時間。

純粹用 DIV 的方式來實作，在物件多的時候整個就跑不太起來了，好在可以利用 React 的 State 方式來選取地圖及物件，不用全部載入。雖然如此，在平板及手機 Play 時，速度還是很慢，最後 DK 會再把這些 DIV 轉成 Canvas 的方式去 Draw ，簡單來說就是把千萬個物件畫成一張圖，這樣網頁自然就會快捷許多了。

廢話不多說放上連結

<a href="http://dkbo.github.io/">DKBO"s RPG Resume</a>

DK 還沒把這場景給布置好! 並非完成品
