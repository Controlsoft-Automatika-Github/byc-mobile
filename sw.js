if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let o={};const c=e=>s(e,a),t={module:{uri:a},exports:o,require:c};i[a]=Promise.all(n.map((e=>t[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/auto-6adc87e8.js",revision:null},{url:"assets/index-9e724664.js",revision:null},{url:"assets/index-add9cf28.css",revision:null},{url:"index.html",revision:"91403fcfb59086b17460a384aa608f30"},{url:"registerSW.js",revision:"a741a509b55a8feed3b0a31658d29773"},{url:"favicon.ico",revision:"ef8fc0ab3ae69d908309a885c4fbf776"},{url:"pwa-64x64.png",revision:"9862be27a8f4b21826cdedac03b78027"},{url:"pwa-192x192.png",revision:"076cad8bacabc0844c8c965bc51f6eca"},{url:"pwa-512x512.png",revision:"442368ad0a07854779a60f94935b137e"},{url:"maskable-icon-512x512.png",revision:"b15d8ec4a640a03ba582a9e5369dbdc3"},{url:"manifest.webmanifest",revision:"ed7af1fab2b3a70efea101dccb0ae7db"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
