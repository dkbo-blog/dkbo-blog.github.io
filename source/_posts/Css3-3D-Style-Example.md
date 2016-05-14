---
title: Css3 3D Style Example
date: 2016-05-12 22:36:00
category: 網頁設計
tag:
- 3D
- CSS3
- 網頁
feature: images/feature/3d.jpg
---
<style>
* {
-moz-box-sizing: border-box;
-webkit-box-sizing: border-box;
box-sizing: border-box;
}

.crmera {
-moz-perspective: 500px;
-webkit-perspective: 500px;
perspective: 500px;
-moz-perspective-origin: center center;
-webkit-perspective-origin: center center;
perspective-origin: center center;
}
.crmera .single, .crmera .double {
position: relative;
}
.crmera .single .space, .crmera .double .space {
-moz-transform-style: perserve-3d;
-webkit-transform-style: perserve-3d;
transform-style: perserve-3d;
border: 1px dashed black;
-moz-backface-visibility: hidden;
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
-moz-perspective: 1000;
-webkit-perspective: 1000;
perspective: 1000;
}
.crmera .single .space .box, .crmera .double .space .box {
cursor: pointer;
display: inline-block;
width: 100%;
height: 100%;
background: #b0c3ff;
text-align: center;
vertical-align: middle;
-moz-box-shadow: 10px 10px 10px #969494;
-webkit-box-shadow: 10px 10px 10px #969494;
box-shadow: 10px 10px 10px #969494;
-moz-transition: -moz-transform 0.5s;
-o-transition: -o-transform 0.5s;
-webkit-transition: -webkit-transform 0.5s;
transition: transform 0.5s;
}
.crmera .single .space .box span, .crmera .double .space .box span {
position: absolute;
font-size: 10px;
top: 50%;
left: 50%;
width: 100%;
margin-left: -50%;
}
.crmera .single:nth-child(1) .box {
-moz-transform: translateX(20px);
-ms-transform: translateX(20px);
-webkit-transform: translateX(20px);
transform: translateX(20px);
}
.crmera .single:nth-child(2) .box {
-moz-transform: translateY(20px);
-ms-transform: translateY(20px);
-webkit-transform: translateY(20px);
transform: translateY(20px);
}
.crmera .single:nth-child(3) .box {
-moz-transform: translateZ(20px);
-ms-transform: translateZ(20px);
-webkit-transform: translateZ(20px);
transform: translateZ(20px);
}
.crmera .single:nth-child(4) .box {
-moz-transform: translate3d(20px, 20px, 20px);
-ms-transform: translate3d(20px, 20px, 20px);
-webkit-transform: translate3d(20px, 20px, 20px);
transform: translate3d(20px, 20px, 20px);
}
.crmera .single:nth-child(5) .box {
-moz-transform: rotateX(20deg);
-ms-transform: rotateX(20deg);
-webkit-transform: rotateX(20deg);
transform: rotateX(20deg);
}
.crmera .single:nth-child(6) .box {
-moz-transform: rotateY(20deg);
-ms-transform: rotateY(20deg);
-webkit-transform: rotateY(20deg);
transform: rotateY(20deg);
}
.crmera .single:nth-child(7) .box {
-moz-transform: rotateZ(20deg);
-ms-transform: rotateZ(20deg);
-webkit-transform: rotateZ(20deg);
transform: rotateZ(20deg);
}
.crmera .single:nth-child(8) .box {
-moz-transform: rotate3d(1, 1, 1, 20deg);
-ms-transform: rotate3d(1, 1, 1, 20deg);
-webkit-transform: rotate3d(1, 1, 1, 20deg);
transform: rotate3d(1, 1, 1, 20deg);
}
.crmera .single:nth-child(9) .box {
-moz-transform: scaleX(1.2);
-ms-transform: scaleX(1.2);
-webkit-transform: scaleX(1.2);
transform: scaleX(1.2);
}
.crmera .single:nth-child(10) .box {
-moz-transform: scaleY(1.2);
-ms-transform: scaleY(1.2);
-webkit-transform: scaleY(1.2);
transform: scaleY(1.2);
}
.crmera .single:nth-child(11) .box {
-moz-transform: scaleZ(1.2);
-ms-transform: scaleZ(1.2);
-webkit-transform: scaleZ(1.2);
transform: scaleZ(1.2);
}
.crmera .single:nth-child(12) .box {
-moz-transform: scale3d(1.2, 1.2, 1.2);
-ms-transform: scale3d(1.2, 1.2, 1.2);
-webkit-transform: scale3d(1.2, 1.2, 1.2);
transform: scale3d(1.2, 1.2, 1.2);
}
.crmera .single:hover .box {
-moz-transform: translate3d(0, 0, 0);
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}
.crmera .double:nth-child(1) .box {
-moz-transform: translateX(20px) rotate3d(1, 1, 1, 90deg);
-ms-transform: translateX(20px) rotate3d(1, 1, 1, 90deg);
-webkit-transform: translateX(20px) rotate3d(1, 1, 1, 90deg);
transform: translateX(20px) rotate3d(1, 1, 1, 90deg);
}
.crmera .double:nth-child(2) .box {
-moz-transform: translateY(20px) rotate3d(1, 1, 1, 90deg);
-ms-transform: translateY(20px) rotate3d(1, 1, 1, 90deg);
-webkit-transform: translateY(20px) rotate3d(1, 1, 1, 90deg);
transform: translateY(20px) rotate3d(1, 1, 1, 90deg);
}
.crmera .double:nth-child(3) .box {
-moz-transform: translateZ(20px) rotate3d(1, 1, 1, 90deg);
-ms-transform: translateZ(20px) rotate3d(1, 1, 1, 90deg);
-webkit-transform: translateZ(20px) rotate3d(1, 1, 1, 90deg);
transform: translateZ(20px) rotate3d(1, 1, 1, 90deg);
}
.crmera .double:nth-child(4) .box {
-moz-transform: translate3d(20px, 20px, 20px) rotate3d(1, 1, 1, 90deg);
-ms-transform: translate3d(20px, 20px, 20px) rotate3d(1, 1, 1, 90deg);
-webkit-transform: translate3d(20px, 20px, 20px) rotate3d(1, 1, 1, 90deg);
transform: translate3d(20px, 20px, 20px) rotate3d(1, 1, 1, 90deg);
}
.crmera .double:nth-child(5) .box {
-moz-transform: scaleX(1.2) rotate3d(1, 1, 1, 90deg);
-ms-transform: scaleX(1.2) rotate3d(1, 1, 1, 90deg);
-webkit-transform: scaleX(1.2) rotate3d(1, 1, 1, 90deg);
transform: scaleX(1.2) rotate3d(1, 1, 1, 90deg);
}
.crmera .double:nth-child(6) .box {
-moz-transform: scaleY(1.2) rotate3d(1, 1, 1, 90deg);
-ms-transform: scaleY(1.2) rotate3d(1, 1, 1, 90deg);
-webkit-transform: scaleY(1.2) rotate3d(1, 1, 1, 90deg);
transform: scaleY(1.2) rotate3d(1, 1, 1, 90deg);
}
.crmera .double:nth-child(7) .box {
-moz-transform: scaleZ(1.2) rotate3d(1, 1, 1, 90deg);
-ms-transform: scaleZ(1.2) rotate3d(1, 1, 1, 90deg);
-webkit-transform: scaleZ(1.2) rotate3d(1, 1, 1, 90deg);
transform: scaleZ(1.2) rotate3d(1, 1, 1, 90deg);
}
.crmera .double:nth-child(8) .box {
-moz-transform: scale3d(1.2, 1.2, 1.2) rotate3d(1, 1, 1, 90deg);
-ms-transform: scale3d(1.2, 1.2, 1.2) rotate3d(1, 1, 1, 90deg);
-webkit-transform: scale3d(1.2, 1.2, 1.2) rotate3d(1, 1, 1, 90deg);
transform: scale3d(1.2, 1.2, 1.2) rotate3d(1, 1, 1, 90deg);
}
.crmera .double:hover .box {
-moz-transform: translate3d(0, 0, 0);
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
}

</style>

<div class="row">
  <h2 class="xx-p">前言</h2>
  <p class="xx-p">昨天花了一天把 3D 屬性的使用方法及觀念給弄個大概，後悔以前沒有學好線性代數、立體公式、角度等等..找時間要翻出來在算一算了。現今比較新的瀏覽器雖然支援這些屬性，但是每種瀏覽器看的效果又有一些不同，這絕對是被客戶給否定的。更別說還有很多骨董電腦的存在了!</p>
  <h2 class="xx-p xx-ng">單一屬性</h2>
  <p class="xx-p">以下是使用了 translate3d(位移)、rolate3d(旋轉)、scale3d(縮放)的屬性及其單一屬性X、Y、Z，滑鼠移過去可以看到原始位置</p>
  <div class="crmera clearfix">
    <div class="single col xx6 s3 xx-p">
      <div class="space xx-p">
        <div class="box"> <span>1.translateX(20px)</span></div>
      </div>
    </div>
    <div class="single col xx6 s3 xx-p">
      <div class="space xx-p">
        <div class="box"> <span>2.translateY(20px)</span></div>
      </div>
    </div>
    <div class="single col xx6 s3 xx-p">
      <div class="space xx-p">
        <div class="box"> <span>3.translateZ(20px)</span></div>
      </div>
    </div>
    <div class="single col xx6 s3 xx-p">
      <div class="space xx-p">
        <div class="box"> <span>4.translate3d(20px,20px,20px)</span></div>
      </div>
    </div>
    <div class="single col xx6 s3 xx-p">
      <div class="space xx-p">
        <div class="box"> <span>5.rotateX(20px)</span></div>
      </div>
    </div>
    <div class="single col xx6 s3 xx-p">
      <div class="space xx-p">
        <div class="box"> <span>6.rotateY(20px)</span></div>
      </div>
    </div>
    <div class="single col xx6 s3 xx-p">
      <div class="space xx-p">
        <div class="box"> <span>7.rotateZ(20px)</span></div>
      </div>
    </div>
    <div class="single col xx6 s3 xx-p">
      <div class="space xx-p">
        <div class="box"> <span>8.rolate3d(1,1,1,45deg)</span></div>
      </div>
    </div>
    <div class="single col xx6 s3 xx-p">
      <div class="space xx-p">
        <div class="box"> <span>9.scaleX(1.2)</span></div>
      </div>
    </div>
    <div class="single col xx6 s3 xx-p">
      <div class="space xx-p">
        <div class="box"> <span>10.scaleY(1.2)</span></div>
      </div>
    </div>
    <div class="single col xx6 s3 xx-p">
      <div class="space xx-p">
        <div class="box"> <span>11.scaleZ(1.2)</span></div>
      </div>
    </div>
    <div class="single col xx6 s3 xx-p">
      <div class="space xx-p">
        <div class="box"> <span>12.scale3d(1.2,1.2,1.2)</span></div>
      </div>
    </div>
  </div>
  <h2 class="xx-p xx-ng">雙重屬性(一)</h2>
  <p class="xx-p">如果運用了兩種不同的屬性呢?效果會變成如何呢?以下幾個 Box 在第一個屬性作用後再追加旋轉 90deg</p>
  <div class="area clearfix">
    <div class="crmera">
      <div class="double col xx6 s3 xx-p">
        <div class="space xx-p">
          <div class="box"> <span>1.translateX(20px) rolate3d(20px,20px,20px,90deg)</span></div>
        </div>
      </div>
      <div class="double col xx6 s3 xx-p">
        <div class="space xx-p">
          <div class="box"> <span>2.translateY(20px) rolate3d(20px,20px,20px,90deg)</span></div>
        </div>
      </div>
      <div class="double col xx6 s3 xx-p">
        <div class="space xx-p">
          <div class="box"> <span>3.translateZ(20px) rolate3d(20px,20px,20px,90deg)</span></div>
        </div>
      </div>
      <div class="double col xx6 s3 xx-p">
        <div class="space xx-p">
          <div class="box"> <span>4.translate3d(20px,20px,20px) rolate3d(20px,20px,20px,90deg)</span></div>
        </div>
      </div>
      <div class="double col xx6 s3 xx-p">
        <div class="space xx-p">
          <div class="box"> <span>5.scaleX(1.2) rolate3d(20px,20px,20px,90deg)</span></div>
        </div>
      </div>
      <div class="double col xx6 s3 xx-p">
        <div class="space xx-p">
          <div class="box"> <span>6.scaleY(1.2) rolate3d(20px,20px,20px,90deg)</span></div>
        </div>
      </div>
      <div class="double col xx6 s3 xx-p">
        <div class="space xx-p">
          <div class="box"> <span>7.scaleZ(1.2) rolate3d(20px,20px,20px,90deg)</span></div>
        </div>
      </div>
      <div class="double col xx6 s3 xx-p">
        <div class="space xx-p">
          <div class="box"> <span>8.scale3d(1.2,1.2,1.2) rolate3d(20px,20px,20px,90deg)</span></div>
        </div>
      </div>
    </div>
  </div>
</div>
<script>
space = document.getElementsByClassName('space');
var  init = function () {
  for(var i = 0; i < space.length; i++ ) {
    space[i].setAttribute("style","height: "+ space[i].clientWidth+"px;");
  }
}
window.addEventListener('resize',init);
init();
</script>
