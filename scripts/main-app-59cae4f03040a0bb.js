(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1744],{18615:function(e,r,t){Promise.resolve().then(t.t.bind(t,89562,23)),Promise.resolve().then(t.t.bind(t,5685,23)),Promise.resolve().then(t.t.bind(t,51395,23)),Promise.resolve().then(t.t.bind(t,78703,23)),Promise.resolve().then(t.t.bind(t,93112,23)),Promise.resolve().then(t.t.bind(t,53751,23))},36639:function(e,r,t){"use strict";var n,o=t(17957),i=t(11512),s=t(74017),a=t(68571),l=window;l.__sentryRewritesTunnelPath__="/sentry",l.SENTRY_RELEASE={id:"6ef54c4588ade4d3696b6f9da6f726bd007c98f0"},l.__rewriteFramesAssetPrefixPath__="",n="https://58e9b9d0fc244061a1b54fe288b0e483@o1158394.ingest.sentry.io/4504646202490880",o.S1({environment:"production",release:a.env.RELEASE_SHA,dsn:n,replaysSessionSampleRate:0,replaysOnErrorSampleRate:.1,tracesSampleRate:0,enabled:!0,integrations:[new s.S({depth:4}),new i.U],sampleRate:.1,beforeBreadcrumb:e=>{var r;return"console"===e.category&&(null===(r=e.message)||void 0===r?void 0:r.includes("https://anthropic.com/careers"))?null:e},ignoreErrors:["ResizeObserver loop limit exceeded","ResizeObserver loop completed with undelivered notifications.","Failed to execute 'animate' on 'Element': Partial keyframes are not supported."],beforeSend:(e,r)=>{var t;let n=e.exception.values;if(null==n?void 0:n.some(e=>{var r,t;return null===(t=e.stacktrace)||void 0===t?void 0:null===(r=t.frames)||void 0===r?void 0:r.some(e=>{var r;return"userscript"===e.module||(null===(r=e.filename)||void 0===r?void 0:r.startsWith("app:///userscript.html"))})}))return null;if((null==n?void 0:n.length)===1){let e=n[0].value;if("Non-Error promise rejection captured with value: Timeout"===e||"Failed to execute 'has' on 'CacheStorage': Unexpected internal error."===e)return null}return(null===(t=e.message)||void 0===t?void 0:t.startsWith("AbortError: Failed to register a ServiceWorker"))&&["Operation has been aborted","An unknown error occurred when fetching the script.","The user denied permission to use Service Worker."].some(r=>e.message.endsWith(r))?null:e}})}},function(e){var r=function(r){return e(e.s=r)};e.O(0,[1293,1362,693],function(){return r(36639),r(15391),r(18615)}),_N_E=e.O()}]);