if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let o={};const t=e=>s(e,c),l={module:{uri:c},exports:o,require:t};i[c]=Promise.all(n.map((e=>l[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/auto-6adc87e8.js",revision:null},{url:"assets/index-4cfc6e06.css",revision:null},{url:"assets/index-88845bf9.js",revision:null},{url:"index.html",revision:"97c66c48304287626432730c71e8fb26"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.ico",revision:"ef8fc0ab3ae69d908309a885c4fbf776"},{url:"pwa-64x64.png",revision:"9862be27a8f4b21826cdedac03b78027"},{url:"pwa-192x192.png",revision:"076cad8bacabc0844c8c965bc51f6eca"},{url:"pwa-512x512.png",revision:"442368ad0a07854779a60f94935b137e"},{url:"maskable-icon-512x512.png",revision:"b15d8ec4a640a03ba582a9e5369dbdc3"},{url:"manifest.webmanifest",revision:"bf83ec2900c6c255b366713dc2b48233"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
