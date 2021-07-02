// ==UserScript==
// @name         Yahoo!テレビ - Hide overlay ads
// @namespace    http://iwamot.com/
// @version      1.0.1
// @author       IWAMOTO Takashi <hello@iwamot.com> http://iwamot.com/
// @description  Yahoo!テレビのオーバーレイ広告を非表示にします。
// @include      https://tv.yahoo.co.jp/*
// @homepage     https://github.com/iwamot/tvyahoojp-hide-overlay-ads
// @updateURL    https://github.com/iwamot/tvyahoojp-hide-overlay-ads/raw/master/tvyahoojp-hide-overlay-ads.user.js
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle('aside {display: none;}');
