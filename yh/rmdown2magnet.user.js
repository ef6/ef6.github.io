// ==UserScript==
// @name         rmdown2magnet
// @description  草榴rmdown转换磁力链 2022-02-10
// @author       ef6
// @namespace    https://ef6.github.io
// @license      GPL3.0
// @date         2022.01.18
// @modified     2022.02.10
// @version      1.0.1
// @icon         https://rmdown.com/favicon.ico
// @match        http*://t66y.com/htm_data/*.html
// @match        http*://t66y.com/htm_mob/*.html
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
'use strict';
let node = document.querySelectorAll(".tpc_cont a[href*=rmdown][href*=hash]");
for(let n of node){
	let magnet = 'magnet:?xt=urn:btih:' + n.href.split('=')[1].slice(3);
	console.log(magnet);
	n.innerText=magnet;
	n.href=magnet;
	n.className="h f18";
}
})();
