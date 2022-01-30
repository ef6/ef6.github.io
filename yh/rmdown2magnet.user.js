// ==UserScript==
// @name         rmdown2magnet 草榴转换磁力链
// @namespace    https://ef6.github.io
// @version      0.4
// @description  Automatically convert rmdown to magnet
// @author       ef6
// @include      http*://t66y.com/htm_data/*.html
// @include      http*://t66y.com/htm_mob/*.html
// @grant        none
// ==/UserScript==

(function() {
'use strict';
let node = document.querySelectorAll(".tpc_cont>a[href*=rmdown][href*=hash]");
for(let n of node){
	let magnet = 'magnet:?xt=urn:btih:' + n.href.split('=')[1].slice(3);
	console.log(magnet);
	n.innerText=magnet;
	n.href=magnet;
	n.className="h f18";
}
})();
