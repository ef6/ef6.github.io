// ==UserScript==
// @name         rmdown2magnet 草榴转换磁力链
// @namespace
// @version      0.1
// @description  Automatically convert rmdown to magnet
// @author       ef6
// @include      http*://t66y.com/htm_data/*.html
// @include      http*://t66y.com/htm_mob/*.html
// @grant        none
// ==/UserScript==

(function() {
'use strict';

let tx = document.getElementsByTagName("a");
for(let i=0;i<tx.length;i++){
	if(tx[i].text.search("hash=")>0){
		let magnet = 'magnet:?xt=urn:btih:' + tx[i].href.split('=')[1].slice(3);
		console.log(magnet);
        tx[i].innerText=magnet;
		tx[i].href=magnet;
        tx[i].className="t_like"
	}
}

})();