(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{vnES:function(e,t,i){"use strict";i.r(t),i.d(t,"ion_nav",(function(){return d})),i.d(t,"ion_nav_link",(function(){return v}));var n=i("A36C"),s=i("Zgba"),o=i("OMvp"),r=i("fYWy"),a=i("bC4P"),c=i("ZaV5");class h{constructor(e,t){this.component=e,this.params=t,this.state=1}async init(e){if(this.state=2,!this.element){const t=this.component;this.element=await Object(c.a)(this.delegate,e,t,["ion-page","ion-page-invisible"],this.params)}}_destroy(){Object(o.i)(3!==this.state,"view state must be ATTACHED");const e=this.element;e&&(this.delegate?this.delegate.removeViewFromDom(e.parentElement,e):e.remove()),this.nav=void 0,this.state=3}}const u=(e,t,i)=>{if(!e)return!1;if(e.component!==t)return!1;const n=e.params;if(n===i)return!0;if(!n&&!i)return!0;if(!n||!i)return!1;const s=Object.keys(n),o=Object.keys(i);if(s.length!==o.length)return!1;for(const r of s)if(n[r]!==i[r])return!1;return!0},l=(e,t)=>e?e instanceof h?e:new h(e,t):null,d=class{constructor(e){Object(n.o)(this,e),this.ionNavWillLoad=Object(n.g)(this,"ionNavWillLoad",7),this.ionNavWillChange=Object(n.g)(this,"ionNavWillChange",3),this.ionNavDidChange=Object(n.g)(this,"ionNavDidChange",3),this.transInstr=[],this.animationEnabled=!0,this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.animated=!0}swipeGestureChanged(){this.gesture&&this.gesture.enable(!0===this.swipeGesture)}rootChanged(){void 0!==this.root&&(this.useRouter||this.setRoot(this.root,this.rootParams))}componentWillLoad(){if(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]"),void 0===this.swipeGesture){const e=Object(s.b)(this);this.swipeGesture=s.c.getBoolean("swipeBackEnabled","ios"===e)}this.ionNavWillLoad.emit()}async componentDidLoad(){this.rootChanged(),this.gesture=(await i.e(2).then(i.bind(null,"xaHa"))).createSwipeBackGesture(this.el,this.canStart.bind(this),this.onStart.bind(this),this.onMove.bind(this),this.onEnd.bind(this)),this.swipeGestureChanged()}disconnectedCallback(){for(const e of this.views)Object(r.h)(e.element,r.e),e._destroy();this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.transInstr.length=this.views.length=0,this.destroyed=!0}push(e,t,i,n){return this.queueTrns({insertStart:-1,insertViews:[{component:e,componentProps:t}],opts:i},n)}insert(e,t,i,n,s){return this.queueTrns({insertStart:e,insertViews:[{component:t,componentProps:i}],opts:n},s)}insertPages(e,t,i,n){return this.queueTrns({insertStart:e,insertViews:t,opts:i},n)}pop(e,t){return this.queueTrns({removeStart:-1,removeCount:1,opts:e},t)}popTo(e,t,i){const n={removeStart:-1,removeCount:-1,opts:t};return"object"==typeof e&&e.component?(n.removeView=e,n.removeStart=1):"number"==typeof e&&(n.removeStart=e+1),this.queueTrns(n,i)}popToRoot(e,t){return this.queueTrns({removeStart:1,removeCount:-1,opts:e},t)}removeIndex(e,t=1,i,n){return this.queueTrns({removeStart:e,removeCount:t,opts:i},n)}setRoot(e,t,i,n){return this.setPages([{component:e,componentProps:t}],i,n)}setPages(e,t,i){return null==t&&(t={}),!0!==t.animated&&(t.animated=!1),this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},i)}setRouteId(e,t,i,n){const s=this.getActiveSync();if(u(s,e,t))return Promise.resolve({changed:!1,element:s.element});let o;const r=new Promise(e=>o=e);let a;const c={updateURL:!1,viewIsReady:e=>{let t;const i=new Promise(e=>t=e);return o({changed:!0,element:e,markVisible:async()=>{t(),await a}}),i}};if("root"===i)a=this.setRoot(e,t,c);else{const s=this.views.find(i=>u(i,e,t));s?a=this.popTo(s,Object.assign(Object.assign({},c),{direction:"back",animationBuilder:n})):"forward"===i?a=this.push(e,t,Object.assign(Object.assign({},c),{animationBuilder:n})):"back"===i&&(a=this.setRoot(e,t,Object.assign(Object.assign({},c),{direction:"back",animated:!0,animationBuilder:n})))}return r}async getRouteId(){const e=this.getActiveSync();return e?{id:e.element.tagName,params:e.params,element:e.element}:void 0}getActive(){return Promise.resolve(this.getActiveSync())}getByIndex(e){return Promise.resolve(this.views[e])}canGoBack(e){return Promise.resolve(this.canGoBackSync(e))}getPrevious(e){return Promise.resolve(this.getPreviousSync(e))}getLength(){return this.views.length}getActiveSync(){return this.views[this.views.length-1]}canGoBackSync(e=this.getActiveSync()){return!(!e||!this.getPreviousSync(e))}getPreviousSync(e=this.getActiveSync()){if(!e)return;const t=this.views,i=t.indexOf(e);return i>0?t[i-1]:void 0}async queueTrns(e,t){if(this.isTransitioning&&null!=e.opts&&e.opts.skipIfBusy)return Promise.resolve(!1);const i=new Promise((t,i)=>{e.resolve=t,e.reject=i});if(e.done=t,e.opts&&!1!==e.opts.updateURL&&this.useRouter){const t=document.querySelector("ion-router");if(t){const i=await t.canTransition();if(!1===i)return Promise.resolve(!1);if("string"==typeof i)return t.push(i,e.opts.direction||"back"),Promise.resolve(!1)}}return e.insertViews&&0===e.insertViews.length&&(e.insertViews=void 0),this.transInstr.push(e),this.nextTrns(),i}success(e,t){if(this.destroyed)this.fireError("nav controller was destroyed",t);else if(t.done&&t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction),t.resolve(e.hasCompleted),!1!==t.opts.updateURL&&this.useRouter){const t=document.querySelector("ion-router");t&&t.navChanged("back"===e.direction?"back":"forward")}}failed(e,t){this.destroyed?this.fireError("nav controller was destroyed",t):(this.transInstr.length=0,this.fireError(e,t))}fireError(e,t){t.done&&t.done(!1,!1,e),t.reject&&!this.destroyed?t.reject(e):t.resolve(!1)}nextTrns(){if(this.isTransitioning)return!1;const e=this.transInstr.shift();return!!e&&(this.runTransition(e),!0)}async runTransition(e){try{this.ionNavWillChange.emit(),this.isTransitioning=!0,this.prepareTI(e);const t=this.getActiveSync(),i=this.getEnteringView(e,t);if(!t&&!i)throw new Error("no views in the stack to be removed");i&&1===i.state&&await i.init(this.el),this.postViewInit(i,t,e);const n=(e.enteringRequiresTransition||e.leavingRequiresTransition)&&i!==t;n&&e.opts&&t&&("back"===e.opts.direction&&(e.opts.animationBuilder=e.opts.animationBuilder||i&&i.animationBuilder),t.animationBuilder=e.opts.animationBuilder);const s=n?await this.transition(i,t,e):{hasCompleted:!0,requiresTransition:!1};this.success(s,e),this.ionNavDidChange.emit()}catch(t){this.failed(t,e)}this.isTransitioning=!1,this.nextTrns()}prepareTI(e){const t=this.views.length;if(e.opts=e.opts||{},void 0===e.opts.delegate&&(e.opts.delegate=this.delegate),void 0!==e.removeView){Object(o.i)(void 0!==e.removeStart,"removeView needs removeStart"),Object(o.i)(void 0!==e.removeCount,"removeView needs removeCount");const t=this.views.indexOf(e.removeView);if(t<0)throw new Error("removeView was not found");e.removeStart+=t}void 0!==e.removeStart&&(e.removeStart<0&&(e.removeStart=t-1),e.removeCount<0&&(e.removeCount=t-e.removeStart),e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===t),e.insertViews&&((e.insertStart<0||e.insertStart>t)&&(e.insertStart=t),e.enteringRequiresTransition=e.insertStart===t);const i=e.insertViews;if(!i)return;Object(o.i)(i.length>0,"length can not be zero");const n=i.map(e=>e instanceof h?e:"component"in e?l(e.component,null===e.componentProps?void 0:e.componentProps):l(e,void 0)).filter(e=>null!==e);if(0===n.length)throw new Error("invalid views to insert");for(const s of n){s.delegate=e.opts.delegate;const t=s.nav;if(t&&t!==this)throw new Error("inserted view was already inserted");if(3===s.state)throw new Error("inserted view was already destroyed")}e.insertViews=n}getEnteringView(e,t){const i=e.insertViews;if(void 0!==i)return i[i.length-1];const n=e.removeStart;if(void 0!==n){const i=this.views,s=n+e.removeCount;for(let e=i.length-1;e>=0;e--){const o=i[e];if((e<n||e>=s)&&o!==t)return o}}}postViewInit(e,t,i){Object(o.i)(t||e,"Both leavingView and enteringView are null"),Object(o.i)(i.resolve,"resolve must be valid"),Object(o.i)(i.reject,"reject must be valid");const n=i.opts,s=i.insertViews,a=i.removeStart,c=i.removeCount;let h;if(void 0!==a&&void 0!==c){Object(o.i)(a>=0,"removeStart can not be negative"),Object(o.i)(c>=0,"removeCount can not be negative"),h=[];for(let i=0;i<c;i++){const n=this.views[i+a];n&&n!==e&&n!==t&&h.push(n)}n.direction=n.direction||"back"}const u=this.views.length+(void 0!==s?s.length:0)-(void 0!==c?c:0);if(Object(o.i)(u>=0,"final balance can not be negative"),0===u)throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(s){let e=i.insertStart;for(const t of s)this.insertViewAt(t,e),e++;i.enteringRequiresTransition&&(n.direction=n.direction||"forward")}if(h&&h.length>0){for(const e of h)Object(r.h)(e.element,r.c),Object(r.h)(e.element,r.d),Object(r.h)(e.element,r.e);for(const e of h)this.destroyView(e)}}async transition(e,t,i){const n=i.opts,o=n.progressAnimation?e=>this.sbAni=e:void 0,a=Object(s.b)(this),c=e.element,h=t&&t.element,u=Object.assign({mode:a,showGoBack:this.canGoBackSync(e),baseEl:this.el,animationBuilder:this.animation||n.animationBuilder||s.c.get("navAnimation"),progressCallback:o,animated:this.animated&&s.c.getBoolean("animated",!0),enteringEl:c,leavingEl:h},n),{hasCompleted:l}=await Object(r.j)(u);return this.transitionFinish(l,e,t,n)}transitionFinish(e,t,i,n){const s=e?t:i;return s&&this.cleanup(s),{hasCompleted:e,requiresTransition:!0,enteringView:t,leavingView:i,direction:n.direction}}insertViewAt(e,t){const i=this.views,n=i.indexOf(e);n>-1?(Object(o.i)(e.nav===this,"view is not part of the nav"),i.splice(t,0,i.splice(n,1)[0])):(Object(o.i)(!e.nav,"nav is used"),e.nav=this,i.splice(t,0,e))}removeView(e){Object(o.i)(2===e.state||3===e.state,"view state should be loaded or destroyed");const t=this.views,i=t.indexOf(e);Object(o.i)(i>-1,"view must be part of the stack"),i>=0&&t.splice(i,1)}destroyView(e){e._destroy(),this.removeView(e)}cleanup(e){if(this.destroyed)return;const t=this.views,i=t.indexOf(e);for(let n=t.length-1;n>=0;n--){const e=t[n],s=e.element;s&&(n>i?(Object(r.h)(s,r.e),this.destroyView(e)):n<i&&Object(r.i)(s,!0))}}canStart(){return!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.animationEnabled&&this.canGoBackSync()}onStart(){this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:!0}},void 0)}onMove(e){this.sbAni&&this.sbAni.progressStep(e)}onEnd(e,t,i){if(this.sbAni){this.animationEnabled=!1,this.sbAni.onFinish(()=>{this.animationEnabled=!0},{oneTimeCallback:!0});let n=e?-.001:.001;e?n+=Object(a.a)([0,0],[.32,.72],[0,1],[1,1],t)[0]:(this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"),n+=Object(a.a)([0,0],[1,0],[.68,.28],[1,1],t)[0]),this.sbAni.progressEnd(e?1:0,n,i)}}render(){return Object(n.j)("slot",null)}get el(){return Object(n.k)(this)}static get watchers(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}}};d.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";const v=class{constructor(e){Object(n.o)(this,e),this.routerDirection="forward",this.onClick=()=>((e,t,i,n,s)=>{const o=this.el.closest("ion-nav");if(o)if("forward"===t){if(void 0!==i)return o.push(i,n,{skipIfBusy:!0,animationBuilder:s})}else if("root"===t){if(void 0!==i)return o.setRoot(i,n,{skipIfBusy:!0,animationBuilder:s})}else if("back"===t)return o.pop({skipIfBusy:!0,animationBuilder:s});return Promise.resolve(!1)})(0,this.routerDirection,this.component,this.componentProps,this.routerAnimation)}render(){return Object(n.j)(n.c,{onClick:this.onClick})}get el(){return Object(n.k)(this)}}}}]);