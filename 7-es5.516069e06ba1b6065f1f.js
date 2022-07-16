function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,o=void 0;try{for(var u,a=e[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(l){i=!0,o=l}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _get(e,t,n){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=_superPropBase(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function _superPropBase(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_getPrototypeOf(e)););return e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var n,r=_getPrototypeOf(e);if(t){var i=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}/*! For license information please see 7-es2015.516069e06ba1b6065f1f.js.LICENSE.txt */(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{QnN4:function(e,t,n){"use strict";n.r(t);var r,i=n("8Y7J"),o=function e(){_classCallCheck(this,e)},u=n("pMnS"),a=n("SVse"),l=function e(t){_classCallCheck(this,e),this.payload=t,this.type="[FAVORITE] Add"},c=function e(t){_classCallCheck(this,e),this.payload=t,this.type="[FAVORITE] Remove"},s=function(){function e(t){_classCallCheck(this,e),this.store=t,this.favorites=t.select("favorite")}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"addFavorite",value:function(e,t){this.store.dispatch(new l({name:e,url:t}))}},{key:"delFavorite",value:function(e){this.store.dispatch(new c(e))}}]),e}(),h=n("2Vo4"),f=n("HDdC"),y=n("XNiG"),d=function(e){_inherits(n,e);var t=_createSuper(n);function n(e,r){var i;return _classCallCheck(this,n),(i=t.call(this,e,r)).scheduler=e,i.work=r,i}return _createClass(n,[{key:"schedule",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t>0?_get(_getPrototypeOf(n.prototype),"schedule",this).call(this,e,t):(this.delay=t,this.state=e,this.scheduler.flush(this),this)}},{key:"execute",value:function(e,t){return t>0||this.closed?_get(_getPrototypeOf(n.prototype),"execute",this).call(this,e,t):this._execute(e,t)}},{key:"requestAsyncId",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return null!==r&&r>0||null===r&&this.delay>0?_get(_getPrototypeOf(n.prototype),"requestAsyncId",this).call(this,e,t,r):e.flush(this)}}]),n}(function(e){_inherits(n,e);var t=_createSuper(n);function n(e,r){var i;return _classCallCheck(this,n),(i=t.call(this,e,r)).scheduler=e,i.work=r,i.pending=!1,i}return _createClass(n,[{key:"schedule",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(this.closed)return this;this.state=e;var n=this.id,r=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(r,n,t)),this.pending=!0,this.delay=t,this.id=this.id||this.requestAsyncId(r,this.id,t),this}},{key:"requestAsyncId",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return setInterval(e.flush.bind(e,this),n)}},{key:"recycleAsyncId",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(null!==n&&this.delay===n&&!1===this.pending)return t;clearInterval(t)}},{key:"execute",value:function(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var n=this._execute(e,t);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}},{key:"_execute",value:function(e,t){var n=!1,r=void 0;try{this.work(e)}catch(i){n=!0,r=!!i&&i||new Error(i)}if(n)return this.unsubscribe(),r}},{key:"_unsubscribe",value:function(){var e=this.id,t=this.scheduler,n=t.actions,r=n.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==r&&n.splice(r,1),null!=e&&(this.id=this.recycleAsyncId(t,e,null)),this.delay=null}}]),n}(function(e){_inherits(n,e);var t=_createSuper(n);function n(e,r){return _classCallCheck(this,n),t.call(this)}return _createClass(n,[{key:"schedule",value:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this}}]),n}(n("quSY").a))),v=function(){var e=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.now;_classCallCheck(this,e),this.SchedulerAction=t,this.now=n}return _createClass(e,[{key:"schedule",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2?arguments[2]:void 0;return new this.SchedulerAction(this,e).schedule(n,t)}}]),e}();return e.now=function(){return Date.now()},e}(),p=new(function(e){_inherits(n,e);var t=_createSuper(n);function n(){return _classCallCheck(this,n),t.apply(this,arguments)}return n}(function(e){_inherits(n,e);var t=_createSuper(n);function n(e){var r,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v.now;return _classCallCheck(this,n),(r=t.call(this,e,(function(){return n.delegate&&n.delegate!==_assertThisInitialized(r)?n.delegate.now():i()}))).actions=[],r.active=!1,r.scheduled=void 0,r}return _createClass(n,[{key:"schedule",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2?arguments[2]:void 0;return n.delegate&&n.delegate!==this?n.delegate.schedule(e,t,r):_get(_getPrototypeOf(n.prototype),"schedule",this).call(this,e,t,r)}},{key:"flush",value:function(e){var t=this.actions;if(this.active)t.push(e);else{var n;this.active=!0;do{if(n=e.execute(e.state,e.delay))break}while(e=t.shift());if(this.active=!1,n){for(;e=t.shift();)e.unsubscribe();throw n}}}}]),n}(v)))(d),b=n("7o/Q"),_=n("EY2u"),g=n("LRne"),k=((r=function(){function e(t,n,r){_classCallCheck(this,e),this.kind=t,this.value=n,this.error=r,this.hasValue="N"===t}return _createClass(e,[{key:"observe",value:function(e){switch(this.kind){case"N":return e.next&&e.next(this.value);case"E":return e.error&&e.error(this.error);case"C":return e.complete&&e.complete()}}},{key:"do",value:function(e,t,n){switch(this.kind){case"N":return e&&e(this.value);case"E":return t&&t(this.error);case"C":return n&&n()}}},{key:"accept",value:function(e,t,n){return e&&"function"==typeof e.next?this.observe(e):this.do(e,t,n)}},{key:"toObservable",value:function(){switch(this.kind){case"N":return Object(g.a)(this.value);case"E":return e=this.error,new f.a((function(t){return t.error(e)}));case"C":return Object(_.b)()}var e;throw new Error("unexpected notification kind value")}}],[{key:"createNext",value:function(t){return void 0!==t?new e("N",t):e.undefinedValueNotification}},{key:"createError",value:function(t){return new e("E",void 0,t)}},{key:"createComplete",value:function(){return e.completeNotification}}]),e}()).completeNotification=new r("C"),r.undefinedValueNotification=new r("N",void 0),r),m=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;_classCallCheck(this,e),this.scheduler=t,this.delay=n}return _createClass(e,[{key:"call",value:function(e,t){return t.subscribe(new C(e,this.scheduler,this.delay))}}]),e}(),C=function(e){_inherits(n,e);var t=_createSuper(n);function n(e,r){var i,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return _classCallCheck(this,n),(i=t.call(this,e)).scheduler=r,i.delay=o,i}return _createClass(n,[{key:"scheduleMessage",value:function(e){this.destination.add(this.scheduler.schedule(n.dispatch,this.delay,new w(e,this.destination)))}},{key:"_next",value:function(e){this.scheduleMessage(k.createNext(e))}},{key:"_error",value:function(e){this.scheduleMessage(k.createError(e)),this.unsubscribe()}},{key:"_complete",value:function(){this.scheduleMessage(k.createComplete()),this.unsubscribe()}}],[{key:"dispatch",value:function(e){var t=e.notification,n=e.destination;t.observe(n),this.unsubscribe()}}]),n}(b.a),w=function e(t,n){_classCallCheck(this,e),this.notification=t,this.destination=n},O=n("l7GE"),A=n("ZUHj"),x=function(){function e(t,n){_classCallCheck(this,e),this.observables=t,this.project=n}return _createClass(e,[{key:"call",value:function(e,t){return t.subscribe(new S(e,this.observables,this.project))}}]),e}(),S=function(e){_inherits(n,e);var t=_createSuper(n);function n(e,r,i){var o;_classCallCheck(this,n),(o=t.call(this,e)).observables=r,o.project=i,o.toRespond=[];var u=r.length;o.values=new Array(u);for(var a=0;a<u;a++)o.toRespond.push(a);for(var l=0;l<u;l++){var c=r[l];o.add(Object(A.a)(_assertThisInitialized(o),c,c,l))}return o}return _createClass(n,[{key:"notifyNext",value:function(e,t,n,r,i){this.values[n]=t;var o=this.toRespond;if(o.length>0){var u=o.indexOf(n);-1!==u&&o.splice(u,1)}}},{key:"notifyComplete",value:function(){}},{key:"_next",value:function(e){if(0===this.toRespond.length){var t=[e].concat(_toConsumableArray(this.values));this.project?this._tryProject(t):this.destination.next(t)}}},{key:"_tryProject",value:function(e){var t;try{t=this.project.apply(this,e)}catch(n){return void this.destination.error(n)}this.destination.next(t)}}]),n}(O.a),R=n("Kqap"),I=n("lJxs"),j=function(){function e(t,n){_classCallCheck(this,e),this.compare=t,this.keySelector=n}return _createClass(e,[{key:"call",value:function(e,t){return t.subscribe(new P(e,this.compare,this.keySelector))}}]),e}(),P=function(e){_inherits(n,e);var t=_createSuper(n);function n(e,r,i){var o;return _classCallCheck(this,n),(o=t.call(this,e)).keySelector=i,o.hasKey=!1,"function"==typeof r&&(o.compare=r),o}return _createClass(n,[{key:"compare",value:function(e,t){return e===t}},{key:"_next",value:function(e){var t;try{var n=this.keySelector;t=n?n(e):e}catch(i){return this.destination.error(i)}var r=!1;if(this.hasKey)try{r=(0,this.compare)(this.key,t)}catch(i){return this.destination.error(i)}else this.hasKey=!0;r||(this.key=t,this.destination.next(e))}}]),n}(b.a),F="@ngrx/store/init",T=function(e){_inherits(n,e);var t=_createSuper(n);function n(){return _classCallCheck(this,n),t.call(this,{type:F})}return _createClass(n,[{key:"next",value:function(e){if("function"==typeof e)throw new TypeError("\n        Dispatch expected an object, instead it received a function.\n        If you're using the createAction function, make sure to invoke the function\n        before dispatching the action. For example, someAction should be someAction().");if(void 0===e)throw new TypeError("Actions must be objects");if(void 0===e.type)throw new TypeError("Actions must have a type property");_get(_getPrototypeOf(n.prototype),"next",this).call(this,e)}},{key:"complete",value:function(){}},{key:"ngOnDestroy",value:function(){_get(_getPrototypeOf(n.prototype),"complete",this).call(this)}}]),n}(h.a),E=new i.o("@ngrx/store Internal Root Guard"),N=new i.o("@ngrx/store Internal Initial State"),M=new i.o("@ngrx/store Initial State"),z=new i.o("@ngrx/store Reducer Factory"),D=new i.o("@ngrx/store Internal Reducer Factory Provider"),H=new i.o("@ngrx/store Initial Reducers"),V=new i.o("@ngrx/store Internal Initial Reducers"),q=new i.o("@ngrx/store Internal Store Reducers"),L=new i.o("@ngrx/store User Provided Meta Reducers"),J=new i.o("@ngrx/store Meta Reducers"),U=new i.o("@ngrx/store Internal Resolved Meta Reducers"),B=new i.o("@ngrx/store User Runtime Checks Config"),G=new i.o("@ngrx/store Internal User Runtime Checks Config"),K=new i.o("@ngrx/store Internal Runtime Checks");function W(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object.keys(e),r={},i=0;i<n.length;i++){var o=n[i];"function"==typeof e[o]&&(r[o]=e[o])}var u=Object.keys(r);return function(e,n){e=void 0===e?t:e;for(var i=!1,o={},a=0;a<u.length;a++){var l=u[a],c=e[l],s=(0,r[l])(c,n);o[l]=s,i=i||s!==c}return i?o:e}}function Y(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){if(0===t.length)return e;var n=t[t.length-1];return t.slice(0,-1).reduceRight((function(e,t){return t(e)}),n(e))}}function $(e,t){return Array.isArray(t)&&t.length>0&&(e=Y.apply(null,[].concat(_toConsumableArray(t),[e]))),function(t,n){var r=e(t);return function(e,t){return r(e=void 0===e?n:e,t)}}}var Q,X=function(e){_inherits(n,e);var t=_createSuper(n);function n(){return _classCallCheck(this,n),t.apply(this,arguments)}return n}(f.a),Z=function(e){_inherits(n,e);var t=_createSuper(n);function n(){return _classCallCheck(this,n),t.apply(this,arguments)}return n}(T),ee=function(e){_inherits(n,e);var t=_createSuper(n);function n(e,r,i,o){var u;return _classCallCheck(this,n),(u=t.call(this,o(i,r))).dispatcher=e,u.initialState=r,u.reducers=i,u.reducerFactory=o,u}return _createClass(n,[{key:"addFeature",value:function(e){this.addFeatures([e])}},{key:"addFeatures",value:function(e){var t=e.reduce((function(e,t){var n=t.reducers,r=t.reducerFactory,i=t.metaReducers,o=t.initialState,u=t.key,a="function"==typeof n?function(e){var t=Array.isArray(e)&&e.length>0?Y.apply(void 0,_toConsumableArray(e)):function(e){return e};return function(e,n){return e=t(e),function(t,r){return e(t=void 0===t?n:t,r)}}}(i)(n,o):$(r,i)(n,o);return e[u]=a,e}),{});this.addReducers(t)}},{key:"removeFeature",value:function(e){this.removeFeatures([e])}},{key:"removeFeatures",value:function(e){this.removeReducers(e.map((function(e){return e.key})))}},{key:"addReducer",value:function(e,t){this.addReducers(_defineProperty({},e,t))}},{key:"addReducers",value:function(e){this.reducers=Object.assign({},this.reducers,e),this.updateReducers(Object.keys(e))}},{key:"removeReducer",value:function(e){this.removeReducers([e])}},{key:"removeReducers",value:function(e){var t=this;e.forEach((function(e){var n,r;t.reducers=(n=t.reducers,r=e,Object.keys(n).filter((function(e){return e!==r})).reduce((function(e,t){return Object.assign(e,_defineProperty({},t,n[t]))}),{}))})),this.updateReducers(e)}},{key:"updateReducers",value:function(e){this.next(this.reducerFactory(this.reducers,this.initialState)),this.dispatcher.next({type:"@ngrx/store/update-reducers",features:e})}},{key:"ngOnDestroy",value:function(){this.complete()}}]),n}(h.a),te=function(e){_inherits(n,e);var t=_createSuper(n);function n(){return _classCallCheck(this,n),t.apply(this,arguments)}return _createClass(n,[{key:"ngOnDestroy",value:function(){this.complete()}}]),n}(y.a),ne=function(e){_inherits(n,e);var t=_createSuper(n);function n(){return _classCallCheck(this,n),t.apply(this,arguments)}return n}(f.a),re=((Q=function(e){_inherits(n,e);var t=_createSuper(n);function n(e,r,i,o){var u;_classCallCheck(this,n),u=t.call(this,o);var a={state:o},l=e.pipe(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(n){return n.lift(new m(e,t))}}(p)).pipe(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){var n;return"function"==typeof t[t.length-1]&&(n=t.pop()),e.lift(new x(t,n))}}(r)).pipe(Object(R.a)(ie,a));return u.stateSubscription=l.subscribe((function(e){var t=e.state,n=e.action;u.next(t),i.next(n)})),u}return _createClass(n,[{key:"ngOnDestroy",value:function(){this.stateSubscription.unsubscribe(),this.complete()}}]),n}(h.a)).INIT=F,Q);function ie(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{state:void 0},t=arguments.length>1?arguments[1]:void 0,n=_slicedToArray(t,2),r=n[0],i=n[1],o=e.state;return{state:i(o,r),action:r}}var oe=function(e){_inherits(n,e);var t=_createSuper(n);function n(e,r,i){var o;return _classCallCheck(this,n),(o=t.call(this)).actionsObserver=r,o.reducerManager=i,o.source=e,o}return _createClass(n,[{key:"select",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return ue.call.apply(ue,[null,e].concat(n))(this)}},{key:"lift",value:function(e){var t=new n(this,this.actionsObserver,this.reducerManager);return t.operator=e,t}},{key:"dispatch",value:function(e){this.actionsObserver.next(e)}},{key:"next",value:function(e){this.actionsObserver.next(e)}},{key:"error",value:function(e){this.actionsObserver.error(e)}},{key:"complete",value:function(){this.actionsObserver.complete()}},{key:"addReducer",value:function(e,t){this.reducerManager.addReducer(e,t)}},{key:"removeReducer",value:function(e){this.reducerManager.removeReducer(e)}}]),n}(f.a);function ue(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return function(n){var i;if("string"==typeof e){var o=[t].concat(r).filter(Boolean);i=n.pipe((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t.length;if(0===r)throw new Error("list of properties cannot be empty.");return function(e){return Object(I.a)(function(e,t){return function(n){for(var r=n,i=0;i<t;i++){var o=r[e[i]];if(void 0===o)return;r=o}return r}}(t,r))(e)}}).apply(void 0,[e].concat(_toConsumableArray(o))))}else{if("function"!=typeof e)throw new TypeError("Unexpected type '".concat(typeof e,"' in select operator, expected 'string' or 'function'"));i=n.pipe(Object(I.a)((function(n){return e(n,t)})))}return i.pipe((function(e){return e.lift(new j(void 0,void 0))}))}}function ae(e){return void 0===e}function le(e){return null===e}function ce(e){return Array.isArray(e)}function se(e){return"object"==typeof e&&null!==e}function he(e){return"function"==typeof e}function fe(e){Object.freeze(e);var t=he(e);return Object.getOwnPropertyNames(e).forEach((function(n){if(function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}(e,n)&&(!t||"caller"!==n&&"callee"!==n&&"arguments"!==n)){var r=e[n];!se(r)&&!he(r)||Object.isFrozen(r)||fe(r)}})),e}function ye(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return(ae(e)||le(e))&&0===t.length?{path:["root"],value:e}:Object.keys(e).reduce((function(n,r){if(n)return n;var i=e[r];return!(ae(i)||le(i)||function(e){return"number"==typeof e}(i)||function(e){return"boolean"==typeof e}(i)||function(e){return"string"==typeof e}(i)||ce(i))&&(function(e){if(!function(e){return se(e)&&!ce(e)}(e))return!1;var t=Object.getPrototypeOf(e);return t===Object.prototype||null===t}(i)?ye(i,[].concat(_toConsumableArray(t),[r])):{path:[].concat(_toConsumableArray(t),[r]),value:i})}),!1)}function de(e,t){if(!1!==e){var n=e.path.join("."),r=new Error("Detected unserializable ".concat(t,' at "').concat(n,'"'));throw r.value=e.value,r.unserializablePath=n,r}}function ve(e){return Object(i.T)()?(void 0===e&&console.warn("@ngrx/store: runtime checks are currently opt-in but will be the default in the next major version with the possibility to opt-out, see https://ngrx.io/guide/migration/v8 for more information."),Object.assign({strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!1,strictActionImmutability:!1},e)):{strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!1,strictActionImmutability:!1}}function pe(e){return e}var be=function e(t,n,r,i,o){_classCallCheck(this,e)};function _e(e,t){return t instanceof i.o?e.get(t):t}function ge(e){return"function"==typeof e?e():e}function ke(e,t){return e.concat(t)}function me(e){if(e)throw new TypeError("StoreModule.forRoot() called twice. Feature modules should use StoreModule.forFeature() instead.");return"guarded"}var Ce=i.nb({encapsulation:0,styles:[[""]],data:{}});function we(e){return i.Hb(0,[(e()(),i.pb(0,0,null,null,4,"li",[],null,null,null,null,null)),(e()(),i.pb(1,0,null,null,1,"a",[["target","_blank"]],[[8,"href",4]],null,null,null,null)),(e()(),i.Fb(2,null,["",""])),(e()(),i.pb(3,0,null,null,1,"button",[["style","\n          position: relative;\n          left: 30px;\n      "]],null,[[null,"click"]],(function(e,t,n){var r=!0;return"click"===t&&(r=!1!==e.component.delFavorite(e.context.index)&&r),r}),null,null)),(e()(),i.Fb(-1,null,["Delete"]))],null,(function(e,t){e(t,1,0,t.context.$implicit.url),e(t,2,0,t.context.$implicit.name)}))}function Oe(e){return i.Hb(0,[(e()(),i.pb(0,0,null,null,5,"div",[["class","right"]],null,null,null,null,null)),(e()(),i.pb(1,0,null,null,1,"h3",[["class","my-3"]],null,null,null,null,null)),(e()(),i.Fb(-1,null,["Favorite websites"])),(e()(),i.eb(16777216,null,null,2,null,we)),i.ob(4,278528,null,0,a.i,[i.M,i.J,i.q],{ngForOf:[0,"ngForOf"]},null),i.Bb(131072,a.b,[i.h])],(function(e,t){var n=t.component;e(t,4,0,i.Gb(t,4,0,i.zb(t,5).transform(n.favorites)))}),null)}function Ae(e){return i.Hb(0,[(e()(),i.eb(16777216,null,null,1,null,Oe)),i.ob(1,16384,null,0,a.j,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(e()(),i.pb(2,0,null,null,4,"div",[["class","left"]],null,null,null,null,null)),(e()(),i.pb(3,0,[["name",1]],null,0,"input",[["placeholder","name"],["type","text"]],null,null,null,null,null)),(e()(),i.pb(4,0,[["url",1]],null,0,"input",[["placeholder","url"],["type","text"]],null,null,null,null,null)),(e()(),i.pb(5,0,null,null,1,"button",[],null,[[null,"click"]],(function(e,t,n){var r=!0;return"click"===t&&(r=!1!==e.component.addFavorite(i.zb(e,3).value,i.zb(e,4).value)&&r),r}),null,null)),(e()(),i.Fb(-1,null,["Add a Favorite"]))],(function(e,t){e(t,1,0,t.component.favorites)}),null)}var xe=i.lb("app-favorite",s,(function(e){return i.Hb(0,[(e()(),i.pb(0,0,null,null,1,"app-favorite",[],null,null,null,Ae,Ce)),i.ob(1,114688,null,0,s,[oe],null,null)],(function(e,t){e(t,1,0)}),null)}),{},{},[]),Se=n("iInd"),Re=function e(){_classCallCheck(this,e)},Ie={name:"Initial favorite website: google",url:"http://google.com"};function je(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[Ie],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"[FAVORITE] Add":return[].concat(_toConsumableArray(e),[t.payload]);case"[FAVORITE] Remove":return e.splice(t.payload,1),e;default:return e}}n.d(t,"FavoriteModuleNgFactory",(function(){return Pe}));var Pe=i.mb(o,[],(function(e){return i.xb([i.yb(512,i.j,i.X,[[8,[u.a,xe]],[3,i.j],i.v]),i.yb(4608,a.l,a.k,[i.s,[2,a.r]]),i.yb(1073742336,Se.m,Se.m,[[2,Se.r],[2,Se.k]]),i.yb(1073742336,Re,Re,[]),i.yb(1073742336,a.c,a.c,[]),i.yb(131584,T,T,[]),i.yb(2048,Z,null,[T]),i.yb(256,N,void 0,[]),i.yb(1024,M,ge,[N]),i.yb(256,V,{favorite:je},[]),i.yb(2048,q,null,[V]),i.yb(1024,H,_e,[i.p,V,q]),i.yb(256,D,W,[]),i.yb(256,G,void 0,[]),i.yb(1024,B,pe,[G]),i.yb(1024,K,ve,[B]),i.yb(1024,J,(function(e,t){return[(o=e,u=o.strictActionImmutability,a=o.strictStateImmutability,function(e){return u||a?function(e,t){return function(n,r){var i=t.action?fe(r):r,o=e(n,i);return t.state?fe(o):o}}(e,{action:u,state:a}):e}),(n=t,r=n.strictActionSerializability,i=n.strictStateSerializability,function(e){return r||i?function(e,t){return function(n,r){t.action&&de(ye(r),"action");var i=e(n,r);return t.state&&de(ye(i),"state"),i}}(e,{action:r,state:i}):e})];var n,r,i,o,u,a}),[K,K]),i.yb(256,L,[],[]),i.yb(1024,U,ke,[J,L]),i.yb(1024,z,$,[D,U]),i.yb(131584,ee,ee,[Z,M,H,z]),i.yb(2048,X,null,[ee]),i.yb(131584,te,te,[]),i.yb(131584,re,re,[T,X,te,M]),i.yb(2048,ne,null,[re]),i.yb(512,oe,oe,[ne,T,ee]),i.yb(1024,E,me,[[3,oe]]),i.yb(1073742336,be,be,[T,X,te,oe,[2,E]]),i.yb(1073742336,o,o,[]),i.yb(1024,Se.i,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);