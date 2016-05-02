---
title: 部落格搬家啦~使用的是Hexo
date: 2016-05-02T21:23:00.000Z
category: 網頁設計
tag:
  - Compass
  - Gulp
  - Jade
  - JavaScript
  - Node.js
  - Sass
  - Susy
  - 網頁
feature: images/feature/blog-move.jpg
---

## 前言

好長好長一段沒好好寫心得~~廢~~文了 直接開門見山的說吧..... 上一個作品應該是**流亡黯道**這款遊戲，玩遊戲要厲害除了手感...就是計算了，所以小弟就做了一個計算網頁，[POE 弓類傷害計算機](https://dkbo.github.io/poe-calc)，這網頁運用到 React 這種以周期~組件~虛擬DOM 的方式快速開發，但在小弟手中......廢話就不多說了，主要是模仿遊戲的 DPS 計算機制，直接在左邊填入數據後，右方即時操作，並且還加入了存檔及讀取的功能，或是用超連結的方式直接看到計算數據，不過後來改版就沒再做更新了!

## 搬家構思

在網站要搬家前其實也做了不少功課，老師當然是G大神。看到了一些不錯的雲端服務。 也當局者迷~到底要不要續用部落格呢?還有要續用網域嗎?

一段時日後又回去看了以前寫的 **ReactJS** 程式碼，並研究了一下 **Redux**，也發現了 **React-route**，開始有了用靜態網站作部落格的想法，但是想一想不對啊!要是我文章一多，**Webpack** 所產出的 .js 檔案不就超大..，於是又想了 AJAX 的方式，但這樣就要自己做好 JSON 的結構表，正當想放棄時..又想到了用 PHP 直接輸出靜態網頁在上傳，也是不錯的方案。只是以小弟的才能只能寫個很陽春的工具出來。最後自然是上網查了一下
<mark>靜態部落格</mark>，叮咚..**Hugo**、**Hexo**跑出來啦。

## 挫折過程

一開始先用 **Hugo**，看著教學文章建置了~~很快的靜態網站就出來。只是要怎上傳?要怎修改背景?要怎修改$%$#一概不知，爬了文也花了很多時間。於是就先放棄了。

**Hexo**是用 Node.JS 所建置的，所以也有了興趣去試試看，跟 **Hugo** 一樣都是簡單幾個步驟就可以產出靜態頁面，接下來呢..我一樣不知道怎改主題樣式，一樣不知道!#$#@$@，但有了前次的經驗後，我還是龜毛一點開始研究....ejs、styl、yal.....恩腦中浮出了，這啥....，就這樣惡夢開始了。

### 主題樣式

首先當然是所改主題，改成跟原本部落格一樣，只是要怎改呢?上網找了 Hexo 說明文件，其實就寫了很清楚...如何套用 config 的變數，如何使用 **Layout** 來快速開發模板，如和利用官方預設的 Helper、Tag 等等..又或者自己寫一個 Helper、Tag，如何加入 ""Feature""，以及如何......，這過程中我經歷了不少循環挫折，例如少了符號，或是大小寫這種無厘頭的錯誤。

### 佈署到 Github

老實說...當知道怎佈署後就會覺得之前跟白癡一樣，一開始我是用 **Github Desktop** 直接.. push 上去，又來發現只要在 config 建立好

```yml
deploy:
  type: git
  repo: xxx
  branch: xxx
  message: Uplate
```

之後再到命令列打 deploy --generate 就會自動幫你把靜態文件 Push 到 Github 了，這過程自然是苦不堪言。

### 怎用 Sass 來寫主題背景

原本還要下載 Ruby 等動作來使用 Sass 的，不過還是查了一下發現已經有 Node 的版本了，產出 CSS 速度比以前快太多，只是在之前...我還是不知道怎用，然後開始想辦法移植 susy? compass?，只是還冒出了 postcss，看來是一個不得了的好東西!!，簡單來說就是用 JavaScript 來讀 CSS 並覆寫。詳情等我以後研究再說吧...!

## 怎用 Gulp 來控管

以前都是用 **Gulp** 來執行網頁任務的~~只是久沒用真的都忘的差不多了，所以只能先參考別人的了~~，git clone..，哇~~

```JavaScript
//開始本地端伺服器
gulp.task('server', function() {
	hexo.init().then(function() {
		return hexo.call('server', {});
	}).catch(function(err) {
		console.log(err);
    });

});

gulp.task('deploy', function() {
//佈署靜態文件到遠端伺服器
	hexo.init().then(function() {
		return hexo.call('deploy', {generate: true});
	}).catch(function(err) {
		console.log(err);
	});

});

```

## 如何備份開發檔案

deploy 上去的只有靜態文件檔，但是哪天電腦掛了不就好笑了...，原本小弟是想用Dropbox 來同步的，只是這樣連 node_modules 資料夾 及不需要備份到的資料，都會被同步到，於是查了一下，原來 git 有 .gitignore 這個檔案，只要在裡面建入不需要的檔案名稱就好例如以下

```
/.deploy_git

/public

node_modules

```
這樣就可以排除靜態文件及 node 模組了。

## 後續還需努力

上方有提到了 **Postcss** 其實小弟還蠻感興趣的...，會再慢慢研究。

相信前端工程師都會有自己的 CSS Framework，小弟也只能再慢慢的改善。

目前部落格的搬移工程也只有完成80%。

這主題只適用於小弟自己，因為很多都寫死的。

有興趣的可以來小弟的[備份包](https://github.com/dkbo-blog/dkbo-blog.github.io/tree/gh-pages)
