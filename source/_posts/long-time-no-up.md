---
title: 好一段時間沒更新了
date: 2016-11-20 00:02:00
category: 心情札記
tag:
- 日記
feature: images/feature/dkbo.jpg
---
[1]: http://ecshop.tw/
[2]: https://www.opencart.com/
[3]: https://www.oscommerce.com/
[4]: http://dkbo.github.io
[5]: https://laravel.com/
[6]: https://www.meteor.com/
[7]: https://github.com/koajs/koa
[8]: https://facebook.github.io/react/
[9]: https://facebook.github.io/react-native/
[10]: https://zh-tw.wordpress.com/create/
[11]: https://www.joomla.org/
可樂果已經兩歲了，回想當初剛被拔出來時，在琉璃台清洗的時，開始打拳時，開始爬時，開始叫爸爸媽媽的時，以及開始走時，竟只是轉眼瞬間而已。

顧著小孩雖然覺得有點累，沒辦法專心寫程式，只要一被中斷，思緒就好難去銜接起來，於是就開始用程序員最愛的邏輯方式去規劃，該怎樣做效率最高，
但最終還是敵不過玩遊戲的誘惑，我這個人啊只要一沉迷就不好去約束自己...。

WEB前端工程師在南部與北部，真的差異非常大，有個同事的經歷是，她的主管回她說，這裡工作是做網站的唷!不是在美工的。真的是壓低了前端工程師的技術門檻啊，
但無可奈何，畢竟我已經習慣於南部生活，應該也不會想北上去找工作及定居，不過最近有聽說南部前端工程師的職缺有比較多一點了

WEB前端工程師，雖然說要專精前端，但還是要懂一些後端語言及連接資料庫會比較好，為什麼這麼說呢?原因是因為有同事專門接案寫購物車系統，功能單純就是會員功能、商品上下架就 3萬，串金流加 5000，FB會員加 2000，我就在想...靠北 FB 會員..不就單純用FB API 抓到 uid 存到資料庫當帳號而已嗎...，串金流也只需要他們給 API 在串而已...，現在購物車系統框架也很多，[Wordpress][10] 有模組，[Joomla][11] 也有模組，或是其他單純的購物車框架 [ECShop][1]、[OpenCart][2] 、[osCommerce][3]，又或是已經自己寫好模板再改即可....所以要懂得賺錢，就不能完全依靠興趣，又或者說...錢一直來興趣就來啦!!

最近也花時間把之前[RPG履歷][4]給更新程式碼，雖然花了不少時間，但也完成了，不過在外人看來可能不知道我改了甚麼，而且還捨去了不少東西。

[React][8] 跟 [React Native][9] 現在可以說是全世界話題數最高，雖然當初有先投資一些時間去學習 React 不過最近重新學習時，發現改了非常多，在開發工具上我就換了不少，首先前端工程師無所不知的打包工具 Webpack，實在是太強大好用了。以下是一段sass/scss + postcss + css 的串接處理!!真的相當方便，最近也覺得 sass 是不是快被淘汰啦...畢竟 postcss 有點強大 precss 就幾乎可以取代掉 scss 了。

```javascript
{ test: /\.s?a?c?ss$/,
  loader: isProduction()
    ? ExtractTextPlugin.extract('style', 'css!postcss!sass')
    : 'style!css!postcss!sass'
}
```

回到剛剛說購物車的部分，最近也在迷茫中，聽到同事說購物車單子多到..接不完推掉，這感覺..就是叫我趕緊效仿他去接案多些生活津貼!，只是最近有些迷茫，我該專注在於 NodeJS 還是 PHP 呢! PHP 好處是~以前在公司有寫過沒安全性的網站...但沒學過框架~想開始去學學 [Laravel][5]，這款熱門度很高的 PHP Framework，還是說我要專注學 NodeJS 的 [meteor][6] 這款全端 Framework 又或者單純用 NodeJS + [Koa2][7] 來寫 Server 的部分就好，我個人比較偏向愛好 websocket 效果很讚，未來也許兩個都會學到，只是在於哪個要先學，哪個後學。

至於前端的部分依舊用 React + Redux 來當作 View ， 雖然現在 Vue/Vue2 也蠻多人推薦的。

至於 CSS 及 JS 函示庫~~ ==...直接套 BootStrap 跟 Lodash/ramda 就可以了...畢竟自己寫真的還要花時間去管跨相容性...真的沒那麼多時間去花了。

最後說一下...希望明年這月...我已經案子多到可以推掉了XD
