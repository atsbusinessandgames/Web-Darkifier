// ==UserScript==
// @name         Web Darkifier
// @namespace    web-darkifier
// @version      0.5
// @author       ATS Business and Games
// @description  This userscript aims to make the web easier on your eyes by making websites have darker backgrounds.
// @homepage     https://github.com/atsbusinessandgames/Web-Darkifier
// @downloadURL  https://raw.githubusercontent.com/atsbusinessandgames/Web-Darkifier/master/Web-Darkifier.js
// @supportURL   https://github.com/atsbusinessandgames/Web-Darkifier/issues
//@include /(http|https):\/\/(www\.)?(cnet|instagram|ketv|snopes|thatsnonsense|thehackernews|thewindowsclub|zdnet)\.com\/.*

// @grant        GM_addStyle
// ==/UserScript==

//Change any of the below to false to disable changes for that site (useful if a site is improperly displaying and you don't want to repetedly dis/en able this userscript.
var cnet = true;
var instagram = true;
var ketv = true;
var snopes = true;
var thatsnonsense = true;
var thehackernews = true;
var thewindowsclub = true;
var zdnet = true;

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

//cnet
if (window.location.host == "www.cnet.com" && cnet)
{
    addGlobalStyle('body {background:#443d3d !important; }');
    addGlobalStyle('#article-headline--title {color:#414141 !important; }');

}

//instagram
if (window.location.host == "www.instagram.com" && instagram)
{
    addGlobalStyle('footer {background-color:#555555 !important; }');
    addGlobalStyle('main {background-color:#555555 !important; }');
    addGlobalStyle('._f9sjj {background-color:#555555 !important; }');
    addGlobalStyle('p {color:white !important; }');
    addGlobalStyle('a {color:white !important; }');
    addGlobalStyle('._pqycz {color:white !important; }');
    addGlobalStyle('._gexxb {background:#999 !important; }');
    addGlobalStyle('._gexxb {border-color:white !important; }');
    addGlobalStyle('._8na73 {background-color:#555555 !important; }');
    addGlobalStyle('._m3m1c {color:#555555 !important; }');
    addGlobalStyle('input {color:white !important; }');
    addGlobalStyle('._h9luf {color:white !important; }');
    addGlobalStyle('._fd86t {color:#999 !important; }');
    addGlobalStyle('._tb97a {color:#999 !important; }');
    addGlobalStyle('._622au {background-color:#999 !important; }');
    addGlobalStyle('._epyes {background:#999 !important; }');
    addGlobalStyle('._epyes {border-color:white !important; }');
    addGlobalStyle('._5nb98 {display: none; }');
    addGlobalStyle('._cwgrh {background:#999 !important; }');
    addGlobalStyle('._49rz2 {color:white !important; }');
    addGlobalStyle('._9mmn5 {color:#555555 !important; }');
    addGlobalStyle('._1qj9z {display:none; }');
    addGlobalStyle('h1, h2 {color:white; }');
    addGlobalStyle('input[type=text] {background-color:#555555; }');
    addGlobalStyle('._jcvs2 {background-color:#555555; }');
    addGlobalStyle('._dv59m {background-color:#999; }');
    addGlobalStyle('._sgi9z {color:white; }');
    addGlobalStyle('._sayjy {color:#555555; }');
    addGlobalStyle('._gimca {background-color:#999; }');
    addGlobalStyle('._qv64e {color: #white; }');
}

//ketv
if (window.location.host == "www.ketv.com" && ketv)
{
    addGlobalStyle('body {background:#111111 !important; }');
    addGlobalStyle('#article-headline--title {color:#414141 !important; }');
}

//snopes
if (window.location.host == "www.snopes.com" && snopes)
{
    addGlobalStyle('header {background:black !important; }');
    addGlobalStyle('header {color:#555555 !important; }');
    addGlobalStyle('.content-wrapper-main {background:black !important; }');
    addGlobalStyle('blockquote {background:black !important; }');
    addGlobalStyle('p {color:#555555 !important; }');
    addGlobalStyle('footer {background:black !important; }');
    addGlobalStyle('.footer #bottom-siteMap a {color:#555555 !important; }');
    addGlobalStyle('#bottom-legalText {color:#555555 !important; }');
}

//thatsnonsense
if (window.location.host == "www.thatsnonsense.com" && thatsnonsense)
{
    addGlobalStyle('body {background:#1e1f33 !important; }');
    addGlobalStyle('#cookie-law-info-bar {background:#33344c !important; }');
    addGlobalStyle('.wrap, .aside, .rpwe-li, .widget-area, .widget, #authorbox {background-color:#1e1f33 !important; }');
    addGlobalStyle('.content {background-color:#171823 !important; }');
    addGlobalStyle('h1, h2, h3, h4, h5, h6, .widgettitle {color:#3c3232 !important; }');
    addGlobalStyle('a {color:#363ba0 !important; }');
    addGlobalStyle('.footer-widgets {color:#404048 !important; }');
}

//thehackernews
if (window.location.host == "thehackernews.com" && thehackernews)
{
    addGlobalStyle('.menu-box {background:#003941 !important; }');
    addGlobalStyle('body {background:#1e1f33 !important; }');
    addGlobalStyle('.main {background:#003941 !important; }');
    addGlobalStyle('.home-title {background:#113e44 !important; }');
    addGlobalStyle('.below-post {background:#003941 !important; }');
    addGlobalStyle('.deal-box {background:#243252 !important; }');
    addGlobalStyle('.footer {background:#243252 !important; }');
}

//thewindowsclub
if (window.location.host == "www.thewindowsclub.com" && thewindowsclub)
{
    addGlobalStyle('body {background:#111111 !important; }');
    addGlobalStyle('body {color:#555555 !important; }');
    addGlobalStyle('p {color:#555555 !important; }');
    addGlobalStyle('#updates {background-color:black !important; }');
    addGlobalStyle('.side-panel {background:black !important; }');
    addGlobalStyle('#logo-left {filter: invert(100%); }');
}

//zdnet
//cnet
if (window.location.host == "www.zdnet.com" && zdnet)
{
    addGlobalStyle('body {background:#443d3d !important; }');
    addGlobalStyle('.article {background-color:#4e4e4e !important; }');
    addGlobalStyle('.storyBody {background-color:#4e4e4e !important; }');
    addGlobalStyle('.contentWrapper>.container {background-color:#4e4e4e !important; }');
    addGlobalStyle('.topContent {background-color:#4e4e4e !important; }');
}
