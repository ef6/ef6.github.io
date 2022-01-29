// ==UserScript==
// @name         rmdown2magnet 草榴转换磁力链
// @namespace    https://ef6.github.io
// @version      0.3
// @description  Automatically convert rmdown to magnet
// @author       ef6
// @include      http*://t66y.com/htm_data/*.html
// @include      http*://t66y.com/htm_mob/*.html
// @grant        none
// ==/UserScript==

(function() {
'use strict';

let nd = document.querySelectorAll(".tpc_cont>a");
for(let i=0;i<nd.length;i++){
	if(nd[i].text.search("hash=")>0){
		let magnet = 'magnet:?xt=urn:btih:' + nd[i].href.split('=')[1].slice(3);
		console.log(magnet);
		nd[i].innerText=magnet;
		nd[i].href=magnet;
		nd[i].className="h f18"
	}
}

})();
