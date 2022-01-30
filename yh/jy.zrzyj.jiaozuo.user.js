// ==UserScript==
// @name         焦作市自然资源网上交易系统显示单价
// @namespace    https://ef6.github.io
// @version      0.1
// @description  焦作市自然资源网上交易系统显示单价
// @author       ef6
// @match        http*://jy.zrzyj.jiaozuo.gov.cn*/trade-engine/trade/resources*
// @match        http*://jy.zrzyj.jiaozuo.gov.cn*/trade-engine/trade/collectiveresources*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.setInterval(function() {
        if(document.querySelectorAll(".dj-tag").length==0){
            let rlst=document.querySelectorAll(".resource-list");
            for(let n of rlst){
                let mj=n.querySelector("span[ng-bind*=CRMJ]").innerText;
                let jg=n.querySelector("span[ng-bind*=ZGBJ]").innerText.slice(1);
                let dj=(jg*10000)/mj/15;
                let el = document.createElement("a");
                el.className="dj-tag color-red font-bold";
                el.innerText=String.format("{0}万元/亩",dj.toFixed(2));
                n.querySelector(".resource-list-header").append(el)
            }
        }
    },1500);
})();