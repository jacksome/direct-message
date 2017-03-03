webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _router = __webpack_require__(1);

	var _router2 = _interopRequireDefault(_router);

	var _store = __webpack_require__(30);

	var _store2 = _interopRequireDefault(_store);

	var _vuexRouterSync = __webpack_require__(39);

	var _vue = __webpack_require__(2);

	var _vue2 = _interopRequireDefault(_vue);

	var _vueResource = __webpack_require__(40);

	var _vueResource2 = _interopRequireDefault(_vueResource);

	var _Home = __webpack_require__(41);

	var _Home2 = _interopRequireDefault(_Home);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _vuexRouterSync.sync)(_store2.default, _router2.default);

	_vue2.default.use(_vueResource2.default);

		_router2.default.start(_Home2.default, '#app');

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vue = __webpack_require__(2);

	var _vue2 = _interopRequireDefault(_vue);

	var _vueRouter = __webpack_require__(4);

	var _vueRouter2 = _interopRequireDefault(_vueRouter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_vue2.default.use(_vueRouter2.default);
	var router = new _vueRouter2.default({
	  history: false
	});

	router.map({

	  '/': {
	    name: 'landing',
	    component: __webpack_require__(5)
	  },

	  '/register': {
	    name: 'register',
	    component: __webpack_require__(15)
	  },

	  '/friend': {
	    name: 'friend',
	    component: __webpack_require__(20)
	  },

	  '/message': {
	    name: 'message',
	    component: __webpack_require__(27)
	  }

	});

	router.redirect({
	  '*': "/"
	});

		exports.default = router;

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(6)
	__vue_script__ = __webpack_require__(10)
	__vue_template__ = __webpack_require__(14)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jacksome/Projects/direct-message/landing/templates/src/components/login/Login.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-7980dd8e&file=Login.vue!../../../node_modules/autoprefixer-loader/index.js!../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Login.vue", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-7980dd8e&file=Login.vue!../../../node_modules/autoprefixer-loader/index.js!../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Login.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9sb2dpbi9Mb2dpbi52dWUifQ== */", ""]);

	// exports


/***/ },
/* 8 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _router = __webpack_require__(1);

	var _router2 = _interopRequireDefault(_router);

	var _actions = __webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//
	// <div class="container col-sm-3 col-sm-offset-4">
	//
	//   <form class="form-signin" @submit.prevent="accountLogin()">
	//     <h2 class="form-signin-heading">Login <small>登录</small></h2>
	//     <label for="inputEmail" class="sr-only">Email</label>
	//     <input type="email" class="form-control" placeholder="Email" maxLength="255" required="" autofocus="" v-model="inputEmail">
	//     <label for="inputPassword" class="sr-only">Password</label>
	//     <input type="password" class="form-control" placeholder="Password" required="" v-model="inputPassword">
	//     <p class="bg-danger" v-show="reason != 'OK'">{{ reason }}</p>
	//     <button class="btn btn-lg btn-primary btn-block" type="submit">登录</button>
	//     <a v-link="{path: '/register'}" class="btn btn-link active">没有帐号，免费注册</a>
	//   </form>
	//
	// </div>
	//
	// </template>
	//
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      inputEmail: "",
	      inputPassword: "",
	      reason: ""
	    };
	  },


	  vuex: {
	    getters: {},

	    actions: {
	      accountLogin: function accountLogin(_ref) {
	        var _this = this;

	        var dispatch = _ref.dispatch;

	        (0, _actions.login)({ dispatch: dispatch }, this.inputEmail, this.inputPassword, function (reason) {
	          _this.reason = reason;
	          if (_this.reason == 'OK') {
	            _router2.default.go({ name: 'friend' });
	          }
	        });
	      }
	    }
	  }

	};
	// </script>
	//
	// <style>
	// </style>
	//
	//
	/* generated by vue-loader */

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.logout = exports.register = exports.auth = exports.login = undefined;

	var _account = __webpack_require__(12);

	var _account2 = _interopRequireDefault(_account);

	var _mutationTypes = __webpack_require__(13);

	var types = _interopRequireWildcard(_mutationTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var login = exports.login = function login(_ref, username, password, cb) {
	  var dispatch = _ref.dispatch;

	  _account2.default.login(username, password, function (data, reason) {
	    dispatch(types.LOGIN, data);
	    cb(reason);
	  }, function (reason) {
	    return cb(reason);
	  });
	};

	var auth = exports.auth = function auth(_ref2, cb, errorCb) {
	  var dispatch = _ref2.dispatch;

	  _account2.default.auth(function (data) {
	    dispatch(types.LOGIN, data);
	    cb();
	  }, function (reason) {
	    return errorCb();
	  });
	};

	var register = exports.register = function register(_ref3, username, password, cb) {
	  var dispatch = _ref3.dispatch;

	  _account2.default.register(username, password, function (data, reason) {
	    dispatch(types.LOGIN, data);
	    cb(reason);
	  }, function (reason) {
	    cb(reason);
	  });
	};

	var logout = exports.logout = function logout(_ref4) {
	  var dispatch = _ref4.dispatch;

	  console.log("logout");
	  _account2.default.logout(function () {
	    return dispatch(types.LOGOUT);
	  });
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vue = __webpack_require__(2);

	var _vue2 = _interopRequireDefault(_vue);

	var _router = __webpack_require__(1);

	var _router2 = _interopRequireDefault(_router);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _publicKey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+OUp1Acivh/N4n+mAbdhVT68IBdet6q8PuIMq8XBLrhBMYm9axnDMtS77b7t+nlJsVW14G0NwQ5BOyML/L75QsbuScLJsKuVWXm+VGj0xp6avKbcQqA/yVhtr0p7henD2q8OI6WQTDsvb9dLuZtar89qE6+W4Rpnj6NSfn7pLZQIDAQAB";

	exports.default = {
	  generateSalt: function generateSalt() {
	    var salt = "";
	    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	    for (var i = 0; i < 32; i++) {
	      salt += possible.charAt(Math.floor(Math.random() * possible.length));
	    }
	    return salt;
	  },
	  encrypt: function encrypt(password) {
	    // md5(password) + salt
	    var passhash = md5(password);
	    var salt = this.generateSalt();
	    // console.log(salt);
	    var passjoin = salt.concat(passhash);

	    // Encrypt with the public key
	    var encryptor = new JSEncrypt();
	    encryptor.setPublicKey(_publicKey);
	    var passencrypt = encryptor.encrypt(passjoin);
	    return passencrypt;
	  },
	  login: function login(username, password, cb, errorCb) {
	    var passencrypt = this.encrypt(password);

	    // POST
	    _vue2.default.http.options.emulateJSON = true;
	    _vue2.default.http.post('/login/', {
	      username: username,
	      password: passencrypt }).then(function (response) {
	      console.log(response);
	      var res = response.json();
	      if (response.status == 200 && res['ret'] == 0) {
	        // 登录成功
	        cb(res.data, res.reason);
	      } else {
	        errorCb(res.reason);
	      }
	    }, function (response) {
	      // error callback
	      errorCb('timeout');
	    });
	  },
	  auth: function auth(cb, errorCb) {
	    // POST
	    _vue2.default.http.options.emulateJSON = true;
	    _vue2.default.http.post('/auth/', {}).then(function (response) {
	      console.log(response);
	      var res = response.json();
	      if (response.status == 200 && res['ret'] == 0) {
	        // 登录成功
	        cb(res.data, res.reason);
	      } else {
	        errorCb(res.reason);
	      }
	    }, function (response) {
	      // error callback
	      errorCb('timeout');
	    });
	  },
	  register: function register(username, password, cb, errorCb) {
	    var passencrypt = this.encrypt(password);

	    // POST
	    _vue2.default.http.options.emulateJSON = true;
	    _vue2.default.http.post('/register/', {
	      username: username,
	      password: passencrypt }).then(function (response) {
	      console.log(response);
	      var res = response.json();
	      if (response.status == 200 && res['ret'] == 0) {
	        // 登录成功
	        cb(res.data, res.reason);
	      } else {
	        errorCb(res.reason);
	      }
	    }, function (response) {
	      // error callback
	      errorCb('timeout');
	    });
	  },
	  logout: function logout(cb) {
	    _vue2.default.http.get('/logout/').then(function (response) {
	      console.log(response);
	      var res = response.json();
	      if (response.status == 200 && res['ret'] == 0) {
	        cb();
	      } else {}
	    }, function (response) {
	      // error callback
	    });
	  }
		};

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var LOGIN = exports.LOGIN = 'LOGIN';
	var LOGOUT = exports.LOGOUT = 'LOGOUT';

	var GET_FRIEND = exports.GET_FRIEND = 'GET_FRIEND';
	var ADD_FRIEND = exports.ADD_FRIEND = 'ADD_FRIEND';
	var DEL_FRIEND = exports.DEL_FRIEND = 'DEL_FRIEND';
	var MOD_FRIEND = exports.MOD_FRIEND = 'MOD_FRIEND';

	var GET_MESSAGE = exports.GET_MESSAGE = 'GET_MESSAGE';
	var ADD_MESSAGE = exports.ADD_MESSAGE = 'ADD_MESSAGE';
	var ADD_MULTI_MESSAGE = exports.ADD_MULTI_MESSAGE = 'ADD_MULTI_MESSAGE';
	var DEL_MESSAGE = exports.DEL_MESSAGE = 'DEL_MESSAGE';

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "\n\n<div class=\"container col-sm-3 col-sm-offset-4\">\n\n  <form class=\"form-signin\" @submit.prevent=\"accountLogin()\">\n    <h2 class=\"form-signin-heading\">Login <small>登录</small></h2>\n    <label for=\"inputEmail\" class=\"sr-only\">Email</label>\n    <input type=\"email\" class=\"form-control\" placeholder=\"Email\" maxLength=\"255\" required=\"\" autofocus=\"\" v-model=\"inputEmail\">\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n    <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required=\"\" v-model=\"inputPassword\">\n    <p class=\"bg-danger\" v-show=\"reason != 'OK'\">{{ reason }}</p>\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">登录</button>\n    <a v-link=\"{path: '/register'}\" class=\"btn btn-link active\">没有帐号，免费注册</a>\n  </form>\n\n</div>\n\n";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(16)
	__vue_script__ = __webpack_require__(18)
	__vue_template__ = __webpack_require__(19)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jacksome/Projects/direct-message/landing/templates/src/components/login/Register.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-3987a88e&file=Register.vue!../../../node_modules/autoprefixer-loader/index.js!../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Register.vue", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-3987a88e&file=Register.vue!../../../node_modules/autoprefixer-loader/index.js!../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Register.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9sb2dpbi9SZWdpc3Rlci52dWUifQ== */", ""]);

	// exports


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _router = __webpack_require__(1);

	var _router2 = _interopRequireDefault(_router);

	var _actions = __webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//
	// <div class="container col-sm-3 col-sm-offset-4">
	//
	//   <form class="form-signin" @submit.prevent="accountRegister()">
	//     <h2 class="form-signin-heading">Sign up <small>注册</small></h2>
	//     <label for="inputEmail" class="sr-only">Email</label>
	//     <input type="email" class="form-control" placeholder="Email" maxLength="255" required="" autofocus="" v-model="inputEmail">
	//     <label for="inputPassword" class="sr-only">Password</label>
	//     <input type="password" class="form-control" placeholder="Password" required="" v-model="inputPassword">
	//     <label for="inputPasswordConfirm" class="sr-only">Password</label>
	//     <input type="password" class="form-control" placeholder="Password Again" required="" v-model="inputPasswordConfirm">
	//     <p class="bg-danger" v-show="reason != 'OK'">{{ reason }}</p>
	//     <button class="btn btn-lg btn-primary btn-block" type="submit">注册</button>
	//     <a v-link="{path: '/'}" class="btn btn-link active">已有帐号，直接登录</a>
	//   </form>
	//
	// </div>
	//
	// </template>
	//
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      inputEmail: "",
	      inputPassword: "",
	      inputPasswordConfirm: "",
	      reason: ""
	    };
	  },


	  vuex: {
	    getters: {
	      account: function account(_ref) {
	        var user = _ref.user;
	        return user.account;
	      }
	    },

	    actions: {
	      register: _actions.register,

	      accountRegister: function accountRegister(_ref2) {
	        var _this = this;

	        var dispatch = _ref2.dispatch;

	        if (this.inputPassword != this.inputPasswordConfirm) {
	          this.reason = "The two passwords differ";
	          return;
	        }

	        (0, _actions.register)({ dispatch: dispatch }, this.inputEmail, this.inputPassword, function (reason) {
	          _this.reason = reason;
	          console.log(_this.reason);
	          if (_this.reason == 'OK') {
	            _router2.default.go({ name: 'friend' });
	          }
	        });
	      }
	    }
	  },

	  ready: function ready() {}
	};
	// </script>
	//
	// <style>
	// </style>
	//
	//
	/* generated by vue-loader */

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "\n\n<div class=\"container col-sm-3 col-sm-offset-4\">\n\n  <form class=\"form-signin\" @submit.prevent=\"accountRegister()\">\n    <h2 class=\"form-signin-heading\">Sign up <small>注册</small></h2>\n    <label for=\"inputEmail\" class=\"sr-only\">Email</label>\n    <input type=\"email\" class=\"form-control\" placeholder=\"Email\" maxLength=\"255\" required=\"\" autofocus=\"\" v-model=\"inputEmail\">\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n    <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required=\"\" v-model=\"inputPassword\">\n    <label for=\"inputPasswordConfirm\" class=\"sr-only\">Password</label>\n    <input type=\"password\" class=\"form-control\" placeholder=\"Password Again\" required=\"\" v-model=\"inputPasswordConfirm\">\n    <p class=\"bg-danger\" v-show=\"reason != 'OK'\">{{ reason }}</p>\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">注册</button>\n    <a v-link=\"{path: '/'}\" class=\"btn btn-link active\">已有帐号，直接登录</a>\n  </form>\n\n</div>\n\n";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(21)
	__vue_template__ = __webpack_require__(26)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jacksome/Projects/direct-message/landing/templates/src/components/friend/Friend.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _router = __webpack_require__(1);

	var _router2 = _interopRequireDefault(_router);

	var _actions = __webpack_require__(22);

	var _actions2 = __webpack_require__(24);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    return {
	      inputEmail: null,
	      reason: ""
	    };
	  },


	  vuex: {
	    getters: {
	      friends: function friends(_ref) {
	        var friend = _ref.friend;
	        return friend.all;
	      },
	      last_ts: function last_ts(_ref2) {
	        var friend = _ref2.friend;
	        return friend.last_ts;
	      }
	    },

	    actions: {
	      getAllFriends: _actions.getAllFriends,
	      getFriendsChanged: _actions.getFriendsChanged,
	      addFriend: _actions.addFriend,
	      delFriend: _actions.delFriend,

	      addNewFriend: function addNewFriend(_ref3, name) {
	        var _this = this;

	        var dispatch = _ref3.dispatch;

	        this.reason = "";
	        (0, _actions.addFriend)({ dispatch: dispatch }, name, function (ret) {
	          _this.reason = ret;
	          _this.inputEmail = null;
	        });
	      },
	      deleteOldFriend: function deleteOldFriend(_ref4, f) {
	        var dispatch = _ref4.dispatch;

	        (0, _actions.delFriend)({ dispatch: dispatch }, f, function () {});
	      },
	      readMessage: function readMessage(_ref5, f) {
	        var dispatch = _ref5.dispatch;

	        (0, _actions2.getAllMessages)({ dispatch: dispatch }, f, function () {
	          return _router2.default.go({ name: 'message' });
	        });
	      }
	    }
	  },

	  created: function created() {
	    this.getAllFriends();
	  },
	  ready: function ready() {
	    var _this2 = this;

	    this.interval_friends = setInterval(function () {
	      _this2.getFriendsChanged(_this2.last_ts);
	    }, 5000);
	  },
	  beforeDestroy: function beforeDestroy() {
	    clearInterval(this.interval_friends);
	  }
	};
	// </script>
	//
	//
	//
	/* generated by vue-loader */
	// <template>
	//
	// <h1 class="page-header">联系人</h1>
	//
	// <div class="panel panel-default">
	//   <div class="panel-heading">添加联系人</div>
	//   <div class="panel-body">
	//     <form class="form-signin" @submit.prevent="addNewFriend(inputEmail)">
	//       <label for="inputEmail" class="col-sm-2 sr-only">Email</label>
	//       <input type="email" class="form-control" placeholder="Email" maxLength="255" required="" v-model="inputEmail">
	//       <p class="bg-danger" v-show="reason != 'OK'">{{ reason }}</p>
	//       <button class="btn btn-sm btn-success" :disabled="!inputEmail || inputEmail == ''" type="submit">添加</button>
	//     </form>
	//   </div>
	// </div>
	//
	// <div class="panel panel-default">
	//   <div class="panel-heading">现有联系人</div>
	//
	//   <table class="table table-striped">
	//     <thead>
	//       <tr>
	//         <th>Email</th>
	//         <th>未读消息数</th>
	//         <th>查看消息</th>
	//         <th>删除联系人</th>
	//       </tr>
	//     </thead>
	//
	//     <tbody>
	//       <tr v-for="f in friends">
	//         <td>{{ f.friend_name }}</td>
	//         <td>{{ f.unread_msg_num }}</td>
	//         <td><button class="btn btn-sm btn-info" v-on:click="readMessage(f)">查看</button></td>
	//         <td><button class="btn btn-sm btn-danger" v-on:click="deleteOldFriend(f)">删除</button></td>
	//       </tr>
	//     </tbody>
	//   </table>
	// </div>
	//
	// </template>
	//
	// <script>

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.delFriend = exports.addFriend = exports.getFriendsChanged = exports.getAllFriends = undefined;

	var _friend = __webpack_require__(23);

	var _friend2 = _interopRequireDefault(_friend);

	var _mutationTypes = __webpack_require__(13);

	var types = _interopRequireWildcard(_mutationTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var getAllFriends = exports.getAllFriends = function getAllFriends(_ref) {
	  var dispatch = _ref.dispatch;

	  _friend2.default.getAllFriends(function (data, reason) {
	    dispatch(types.GET_FRIEND, data), function (reason) {};
	  });
	};

	var getFriendsChanged = exports.getFriendsChanged = function getFriendsChanged(_ref2, ts) {
	  var dispatch = _ref2.dispatch;

	  _friend2.default.getFriendsChanged(ts, function (data, t, reason) {
	    dispatch(types.MOD_FRIEND, data, t), function (reason) {};
	  });
	};

	var addFriend = exports.addFriend = function addFriend(_ref3, name, cb) {
	  var dispatch = _ref3.dispatch;

	  _friend2.default.addFriend(name, function (data, reason) {
	    dispatch(types.ADD_FRIEND, data);
	    cb(reason);
	  }, function (reason) {
	    return cb(reason);
	  });
	};

	var delFriend = exports.delFriend = function delFriend(_ref4, f, cb) {
	  var dispatch = _ref4.dispatch;

	  _friend2.default.deleteFriend(f.friend_name, function (data, reason) {
	    dispatch(types.DEL_FRIEND, f);
	    cb(reason);
	  }, function (reason) {
	    return cb(reason);
	  });
		};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vue = __webpack_require__(2);

	var _vue2 = _interopRequireDefault(_vue);

	var _router = __webpack_require__(1);

	var _router2 = _interopRequireDefault(_router);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  getAllFriends: function getAllFriends(cb, errorCb) {
	    _vue2.default.http.get('/friend/all/').then(function (response) {
	      console.log(response);
	      var res = response.json();
	      if (response.status == 200 && res['ret'] == 0) {
	        cb(res.data, res.reason);
	      } else {
	        errorCb(res.reason);
	      }
	    }, function (response) {
	      errorCb('timeout');
	    });
	  },
	  getFriendsChanged: function getFriendsChanged(ts, cb, errorCb) {
	    _vue2.default.http.get('/friend/changed/', { params: { 't': ts } }).then(function (response) {
	      console.log(response);
	      var res = response.json();
	      if (response.status == 200 && res['ret'] == 0) {
	        cb(res.data, res.t, res.reason);
	      } else {
	        errorCb(res.reason);
	      }
	    }, function (response) {
	      errorCb('timeout');
	    });
	  },
	  addFriend: function addFriend(name, cb, errorCb) {
	    _vue2.default.http.options.emulateJSON = true;
	    _vue2.default.http.post('/friend/add/', { name: name }).then(function (response) {
	      console.log(response);
	      var res = response.json();
	      if (response.status == 200 && res['ret'] == 0) {
	        cb(res.data, res.reason);
	      } else {
	        errorCb(res.reason);
	      }
	    }, function (response) {
	      errorCb('timeout');
	    });
	  },
	  deleteFriend: function deleteFriend(name, cb, errorCb) {
	    _vue2.default.http.options.emulateJSON = true;
	    _vue2.default.http.post('/friend/del/', { name: name }).then(function (response) {
	      console.log(response);
	      var res = response.json();
	      if (response.status == 200 && res['ret'] == 0) {
	        cb(res.data, res.reason);
	      } else {
	        errorCb(res.reason);
	      }
	    }, function (response) {
	      errorCb('timeout');
	    });
	  }
		};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.delMessage = exports.sendMessage = exports.getNewMessages = exports.getAllMessages = undefined;

	var _message = __webpack_require__(25);

	var _message2 = _interopRequireDefault(_message);

	var _mutationTypes = __webpack_require__(13);

	var types = _interopRequireWildcard(_mutationTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var getAllMessages = exports.getAllMessages = function getAllMessages(_ref, f, cb) {
	  var dispatch = _ref.dispatch;

	  _message2.default.getAllMessages(f.friend_id, function (data) {
	    dispatch(types.GET_MESSAGE, f, data);
	    cb();
	  }, function () {});
	};

	var getNewMessages = exports.getNewMessages = function getNewMessages(_ref2, f) {
	  var dispatch = _ref2.dispatch;

	  _message2.default.getNewMessages(f.friend_id, function (data) {
	    dispatch(types.ADD_MULTI_MESSAGE, data);
	  }, function () {});
	};

	var sendMessage = exports.sendMessage = function sendMessage(_ref3, fid, content, cb) {
	  var dispatch = _ref3.dispatch;

	  _message2.default.sendMessage(fid, content, function (data, reason) {
	    dispatch(types.ADD_MESSAGE, data);
	    cb(reason);
	  }, function (reason) {
	    return cb(reason);
	  });
	};

	var delMessage = exports.delMessage = function delMessage(_ref4, m, cb) {
	  var dispatch = _ref4.dispatch;

	  _message2.default.delMessage(m.id, function (data, reason) {
	    dispatch(types.DEL_MESSAGE, m);
	    cb();
	  }, function () {});
		};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vue = __webpack_require__(2);

	var _vue2 = _interopRequireDefault(_vue);

	var _router = __webpack_require__(1);

	var _router2 = _interopRequireDefault(_router);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  getAllMessages: function getAllMessages(fid, cb, errorCb) {
	    _vue2.default.http.get('/message/all/', { params: { 'fid': fid } }).then(function (response) {
	      console.log(response);
	      var res = response.json();
	      if (response.status == 200 && res['ret'] == 0) {
	        cb(res.data, res.reason);
	      } else {
	        errorCb(res.reason);
	      }
	    }, function (response) {
	      errorCb('timeout');
	    });
	  },
	  getNewMessages: function getNewMessages(fid, cb, errorCb) {
	    _vue2.default.http.get('/message/new/', { params: { 'fid': fid } }).then(function (response) {
	      console.log(response);
	      var res = response.json();
	      if (response.status == 200 && res['ret'] == 0) {
	        cb(res.data, res.reason);
	      } else {
	        errorCb(res.reason);
	      }
	    }, function (response) {
	      errorCb('timeout');
	    });
	  },
	  sendMessage: function sendMessage(fid, content, cb, errorCb) {
	    _vue2.default.http.options.emulateJSON = true;
	    _vue2.default.http.post('/message/send/', {
	      fid: fid, c: content }).then(function (response) {
	      console.log(response);
	      var res = response.json();
	      if (response.status == 200 && res['ret'] == 0) {
	        cb(res.data, res.reason);
	      } else {
	        errorCb(res.reason);
	      }
	    }, function (response) {
	      errorCb('timeout');
	    });
	  },
	  delMessage: function delMessage(mid, cb, errorCb) {
	    _vue2.default.http.options.emulateJSON = true;
	    _vue2.default.http.post('/message/del/', { mid: mid }).then(function (response) {
	      console.log(response);
	      var res = response.json();
	      if (response.status == 200 && res['ret'] == 0) {
	        cb(res.data, res.reason);
	      } else {
	        errorCb(res.reason);
	      }
	    }, function (response) {
	      errorCb('timeout');
	    });
	  }
		};

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "\n\n<h1 class=\"page-header\">联系人</h1>\n\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">添加联系人</div>\n  <div class=\"panel-body\">\n    <form class=\"form-signin\" @submit.prevent=\"addNewFriend(inputEmail)\">\n      <label for=\"inputEmail\" class=\"col-sm-2 sr-only\">Email</label>\n      <input type=\"email\" class=\"form-control\" placeholder=\"Email\" maxLength=\"255\" required=\"\" v-model=\"inputEmail\">\n      <p class=\"bg-danger\" v-show=\"reason != 'OK'\">{{ reason }}</p>\n      <button class=\"btn btn-sm btn-success\" :disabled=\"!inputEmail || inputEmail == ''\" type=\"submit\">添加</button>\n    </form>\n  </div>\n</div>\n\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">现有联系人</div>\n\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th>Email</th>\n        <th>未读消息数</th>\n        <th>查看消息</th>\n        <th>删除联系人</th>\n      </tr>\n    </thead>\n\n    <tbody>\n      <tr v-for=\"f in friends\">\n        <td>{{ f.friend_name }}</td>\n        <td>{{ f.unread_msg_num }}</td>\n        <td><button class=\"btn btn-sm btn-info\" v-on:click=\"readMessage(f)\">查看</button></td>\n        <td><button class=\"btn btn-sm btn-danger\" v-on:click=\"deleteOldFriend(f)\">删除</button></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n";

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(28)
	__vue_template__ = __webpack_require__(29)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jacksome/Projects/direct-message/landing/templates/src/components/message/Message.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _router = __webpack_require__(1);

	var _router2 = _interopRequireDefault(_router);

	var _actions = __webpack_require__(24);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//
	// <h1 class="page-header">私信</h1>
	// <a class="btn btn-link" v-link="{path: '/friend'}">返回</a>
	//
	// <div class="panel panel-default" v-if="friend">
	//   <div class="panel-heading">联系人: {{ friend.friend_name }}
	//     <button class="btn btn-sm btn-info" v-on:click="refreshMessage()">刷新</button>
	//   </div>
	//
	//   <div class="panel-body">
	//     <div v-if="messages && messages.length > 0">
	//       <ul class="list-group">
	//         <li v-for="m in messages" class="list-group-item" :class="[ m.sender_id == account.id ? 'list-group-item-success' : '' ]">
	//           <p v-if="m.sender_id == account.id">
	//             <span class="label label-success">{{ account.name }}</span> {{ m.content }} [{{ m.send_time }}]
	//             <button class="btn btn-sm btn-link" v-on:click="deleteMessage(m)">删除</button>
	//           </p>
	//           <p v-else><span class="label label-warning">{{ friend.friend_name }}</span> {{ m.content }} [{{ m.send_time }}]</p>
	//         </li>
	//       </ul>
	//     </div>
	//     <div v-else><p class="bg-warning">无历史消息</p></div>
	//
	//     <form class="form-signin" @submit.prevent="sendMessageToFriend(friend, inputContent)">
	//       <input type="text" class="form-control" placeholder="content" maxLength="255" required="" autofocus="" v-model="inputContent">
	//       <button class="btn btn-sm btn-success" :disabled="!inputContent || inputContent == ''" type="submit">发送</button>
	//     </form>
	//
	//   </div>
	// </div>
	//
	// </template>
	//
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      inputContent: null
	    };
	  },


	  vuex: {
	    getters: {
	      account: function account(_ref) {
	        var _account = _ref.account;
	        return _account.account;
	      },
	      friend: function friend(_ref2) {
	        var message = _ref2.message;
	        return message.friend;
	      },
	      messages: function messages(_ref3) {
	        var message = _ref3.message;
	        return message.all;
	      }
	    },

	    actions: {
	      getAllMessages: _actions.getAllMessages,
	      getNewMessages: _actions.getNewMessages,
	      sendMessage: _actions.sendMessage,
	      delMessage: _actions.delMessage,

	      refreshMessage: function refreshMessage(_ref4) {
	        var dispatch = _ref4.dispatch;

	        (0, _actions.getAllMessages)({ dispatch: dispatch }, this.friend, function () {});
	      },
	      sendMessageToFriend: function sendMessageToFriend(_ref5, f, content) {
	        var dispatch = _ref5.dispatch;

	        var _this = this;

	        (0, _actions.sendMessage)({ dispatch: dispatch }, f.friend_id, content, function () {
	          _this.inputContent = null;
	        }, function () {});
	      },
	      deleteMessage: function deleteMessage(_ref6, m) {
	        var dispatch = _ref6.dispatch;

	        (0, _actions.delMessage)({ dispatch: dispatch }, m, function () {});
	      }
	    }
	  },

	  created: function created() {
	    if (!this.friend) {
	      _router2.default.go({ name: 'friend' });
	    }
	  },
	  ready: function ready() {
	    var _this2 = this;

	    this.interval_messages = setInterval(function () {
	      _this2.getNewMessages(_this2.friend);
	    }, 5000);
	  },
	  beforeDestroy: function beforeDestroy() {
	    clearInterval(this.interval_messages);
	  }
	};
	// </script>
	//
	//
	//
	/* generated by vue-loader */

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "\n\n<h1 class=\"page-header\">私信</h1>\n<a class=\"btn btn-link\" v-link=\"{path: '/friend'}\">返回</a>\n\n<div class=\"panel panel-default\" v-if=\"friend\">\n  <div class=\"panel-heading\">联系人: {{ friend.friend_name }}\n    <button class=\"btn btn-sm btn-info\" v-on:click=\"refreshMessage()\">刷新</button>\n  </div>\n\n  <div class=\"panel-body\">\n    <div v-if=\"messages && messages.length > 0\">\n      <ul class=\"list-group\">\n        <li v-for=\"m in messages\" class=\"list-group-item\" :class=\"[ m.sender_id == account.id ? 'list-group-item-success' : '' ]\">\n          <p v-if=\"m.sender_id == account.id\">\n            <span class=\"label label-success\">{{ account.name }}</span> {{ m.content }} [{{ m.send_time }}]\n            <button class=\"btn btn-sm btn-link\" v-on:click=\"deleteMessage(m)\">删除</button>\n          </p>\n          <p v-else><span class=\"label label-warning\">{{ friend.friend_name }}</span> {{ m.content }} [{{ m.send_time }}]</p>\n        </li>\n      </ul>\n    </div>\n    <div v-else><p class=\"bg-warning\">无历史消息</p></div>\n\n    <form class=\"form-signin\" @submit.prevent=\"sendMessageToFriend(friend, inputContent)\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"content\" maxLength=\"255\" required=\"\" autofocus=\"\" v-model=\"inputContent\">\n      <button class=\"btn btn-sm btn-success\" :disabled=\"!inputContent || inputContent == ''\" type=\"submit\">发送</button>\n    </form>\n\n  </div>\n</div>\n\n";

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vue = __webpack_require__(2);

	var _vue2 = _interopRequireDefault(_vue);

	var _vuex = __webpack_require__(31);

	var _vuex2 = _interopRequireDefault(_vuex);

	var _store = __webpack_require__(32);

	var _store2 = _interopRequireDefault(_store);

	var _store3 = __webpack_require__(37);

	var _store4 = _interopRequireDefault(_store3);

	var _store5 = __webpack_require__(38);

	var _store6 = _interopRequireDefault(_store5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_vue2.default.use(_vuex2.default);

	var debug = process.env.NODE_ENV !== 'production';
	_vue2.default.config.debug = debug;
	exports.default = new _vuex2.default.Store({
	  modules: {
	    account: _store2.default,
	    friend: _store4.default,
	    message: _store6.default
	  },
	  strict: debug
		});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 31 */,
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(33);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _mutations;

	var _vue = __webpack_require__(2);

	var _vue2 = _interopRequireDefault(_vue);

	var _mutationTypes = __webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// initial state
	var state = {
	  account: null
	};

	// mutations
	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.LOGIN, function (state, account) {
	  state.account = account;
	  console.log("login:" + state.account.id + "|" + state.account.name);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.LOGOUT, function (state) {
	  state.account = null;
	}), _mutations);

	exports.default = {
	  state: state,
	  mutations: mutations
		};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(34);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(35), __esModule: true };

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(36);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(33);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _mutations;

	var _vue = __webpack_require__(2);

	var _vue2 = _interopRequireDefault(_vue);

	var _mutationTypes = __webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// initial state
	var state = {
	  all: null,
	  last_ts: null
	};

	// mutations
	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.GET_FRIEND, function (state, friends) {
	  state.all = friends;
	  state.all.sort(function (a, b) {
	    return a.id - b.id;
	  });
	  for (var i in state.all) {
	    if (!state.last_ts || state.all[i].last_msg_time > state.last_ts) {
	      state.last_ts = state.all[i].last_msg_time;
	    }
	  }
	  console.log("get friends:" + state.all.length);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.ADD_FRIEND, function (state, newFriend) {
	  state.all.push(newFriend);
	  state.all.sort(function (a, b) {
	    return a.id - b.id;
	  });
	  if (newFriend.last_msg_time > state.last_ts) {
	    state.last_ts = newFriend.last_msg_time;
	  }
	  console.log("add friend:" + newFriend.id);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DEL_FRIEND, function (state, oldFriend) {
	  console.log("delete friend:" + oldFriend.id);
	  var i = state.all.findIndex(function (f) {
	    return f.id === oldFriend.id;
	  });
	  state.all.splice(i, 1);
	  state.all.sort(function (a, b) {
	    return a.id - b.id;
	  });
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.MOD_FRIEND, function (state, friends, t) {
	  console.log("mod friends:" + friends.length);
	  for (var i in friends) {
	    var r = state.all.findIndex(function (f) {
	      return f.id === friends[i].id;
	    });
	    if (r == -1) {
	      state.all.push(friends[i]);
	    } else {
	      state.all.splice(r, 1, friends[i]);
	    }
	  }
	  state.all.sort(function (a, b) {
	    return a.id - b.id;
	  });
	  for (var i in state.all) {
	    if (!state.last_ts || state.all[i].last_msg_time > state.last_ts) {
	      state.last_ts = state.all[i].last_msg_time;
	    }
	  }
	  if (t > state.last_ts) {
	    state.last_ts = t;
	  }
	}), _mutations);

	exports.default = {
	  state: state,
	  mutations: mutations
		};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(33);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _mutations;

	var _vue = __webpack_require__(2);

	var _vue2 = _interopRequireDefault(_vue);

	var _mutationTypes = __webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// initial state
	var state = {
	  friend: null,
	  all: null
	};

	// mutations
	var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, _mutationTypes.GET_MESSAGE, function (state, friend, messages) {
	  state.friend = friend;
	  state.all = messages;
	  state.all.sort(function (a, b) {
	    return b.id - a.id;
	  });
	  console.log("get messages:" + state.all.length + "|" + friend.friend_name + "|" + friend.friend_id);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.ADD_MESSAGE, function (state, newMessage) {
	  state.all.push(newMessage);
	  state.all.sort(function (a, b) {
	    return b.id - a.id;
	  });
	  console.log("add message:" + newMessage.id);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.ADD_MULTI_MESSAGE, function (state, newMessages) {
	  for (var i in newMessages) {
	    state.all.push(newMessages[i]);
	  }
	  state.all.sort(function (a, b) {
	    return b.id - a.id;
	  });
	  console.log("add multi message:" + newMessages.length);
	}), (0, _defineProperty3.default)(_mutations, _mutationTypes.DEL_MESSAGE, function (state, oldMessage) {
	  console.log("delete message:" + oldMessage.id + "|" + oldMessage.content);
	  var i = state.all.findIndex(function (m) {
	    return m.id === oldMessage.id;
	  });
	  state.all.splice(i, 1);
	  state.all.sort(function (a, b) {
	    return b.id - a.id;
	  });
	}), _mutations);

	exports.default = {
	  state: state,
	  mutations: mutations
		};

/***/ },
/* 39 */,
/* 40 */,
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(42)
	__vue_script__ = __webpack_require__(44)
	__vue_template__ = __webpack_require__(50)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jacksome/Projects/direct-message/landing/templates/src/components/Home.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(43);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-9f54cfb8&file=Home.vue!../../node_modules/autoprefixer-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Home.vue", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-9f54cfb8&file=Home.vue!../../node_modules/autoprefixer-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Home.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9Ib21lLnZ1ZSJ9 */", ""]);

	// exports


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _router = __webpack_require__(1);

	var _router2 = _interopRequireDefault(_router);

	var _store = __webpack_require__(30);

	var _store2 = _interopRequireDefault(_store);

	var _Navbar = __webpack_require__(45);

	var _Navbar2 = _interopRequireDefault(_Navbar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  store: _store2.default,

	  components: {
	    Navbar: _Navbar2.default
	  },

	  vuex: {
	    getters: {
	      account: function account(_ref) {
	        var user = _ref.user;
	        return user.account;
	      },
	      path: function path(_ref2) {
	        var route = _ref2.route;
	        return route.path;
	      }
	    },

	    actions: {}
	  },

	  created: function created() {},


	  methods: {
	    isLogin: function isLogin() {
	      return this.path != '/' && this.path != '/register';
	    }
	  }
	};
	// </script>
	//
	// <style>
	// </style>
	//
	/* generated by vue-loader */
	// <template>
	// <div class="container-fluid">
	//   <div class="row">
	//
	//     <div>
	//     <!-- <div v-show="isLogin()"> -->
	//       <Navbar></Navbar>
	//     </div>
	//
	//     <div class="col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1">
	//       <router-view></router-view>
	//     </div>
	//
	//   </div>
	// </div>
	// </template>
	//
	// <script>

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(46)
	__vue_script__ = __webpack_require__(48)
	__vue_template__ = __webpack_require__(49)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/jacksome/Projects/direct-message/landing/templates/src/components/Navbar.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(47);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-239d30d6&file=Navbar.vue!../../node_modules/autoprefixer-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Navbar.vue", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-239d30d6&file=Navbar.vue!../../node_modules/autoprefixer-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Navbar.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9OYXZiYXIudnVlIn0= */", ""]);

	// exports


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _router = __webpack_require__(1);

	var _router2 = _interopRequireDefault(_router);

	var _actions = __webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//
	// <nav class="navbar navbar-default navbar-inverse navbar-fixed-top">
	//
	//   <div class="container-fluid" id="navUser">
	//     <div class="navbar-header">
	//       <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
	//         <span class="sr-only">Toggle navigation</span>
	//         <span class="icon-bar"></span>
	//         <span class="icon-bar"></span>
	//         <span class="icon-bar"></span>
	//       </button>
	//
	//       <a class="navbar-brand" href="/">
	//         <span class="glyphicon glyphicon-leaf" aria-hidden="true"> DirectMessage</span>
	//       </a>
	//     </div>
	//
	//     <div class="navbar-collapse collapse" v-if="account">
	//       <ul class="nav navbar-nav navbar-right">
	//         <li role="presentation" class="dropdown">
	//           <a class="dropdown-toggle" data-toggle="dropdown" href="#">
	//             {{ account ? account.name : '' }} <span class="caret"></span>
	//           </a>
	//           <ul class="dropdown-menu" role="menu">
	//             <li><a v-link="{name: 'landing'}" @click="userLogout()">登出</a></li>
	//           </ul>
	//         </li>
	//       </ul>
	//
	//     </div>
	//   </div>
	//
	// </nav>
	//
	// </template>
	//
	// <script>
	exports.default = {
	  vuex: {
	    getters: {
	      account: function account(_ref) {
	        var _account = _ref.account;
	        return _account.account;
	      }
	    },

	    actions: {
	      auth: _actions.auth,
	      logout: _actions.logout,

	      autoLanding: function autoLanding(_ref2) {
	        var dispatch = _ref2.dispatch;

	        (0, _actions.auth)({ dispatch: dispatch }, function () {
	          return _router2.default.go({ name: 'friend' });
	        }, function () {
	          return _router2.default.go({ name: 'landing' });
	        });
	      },
	      userLogout: function userLogout(_ref3) {
	        var dispatch = _ref3.dispatch;

	        (0, _actions.logout)({ dispatch: dispatch });
	      }
	    }
	  },

	  created: function created() {
	    this.autoLanding();
	  },


	  methods: {}
	};

	// </script>
	//
	// <style>
	// </style>
	//
	//
	/* generated by vue-loader */

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = "\n\n<nav class=\"navbar navbar-default navbar-inverse navbar-fixed-top\">\n\n  <div class=\"container-fluid\" id=\"navUser\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n\n      <a class=\"navbar-brand\" href=\"/\">\n        <span class=\"glyphicon glyphicon-leaf\" aria-hidden=\"true\"> DirectMessage</span>\n      </a>\n    </div>\n\n    <div class=\"navbar-collapse collapse\" v-if=\"account\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li role=\"presentation\" class=\"dropdown\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n            {{ account ? account.name : '' }} <span class=\"caret\"></span>\n          </a>\n          <ul class=\"dropdown-menu\" role=\"menu\">\n            <li><a v-link=\"{name: 'landing'}\" @click=\"userLogout()\">登出</a></li>\n          </ul>\n        </li>\n      </ul>\n\n    </div>\n  </div>\n\n</nav>\n\n";

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"container-fluid\">\n  <div class=\"row\">\n\n    <div>\n    <!-- <div v-show=\"isLogin()\"> -->\n      <Navbar></Navbar>\n    </div>\n\n    <div class=\"col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1\">\n      <router-view></router-view>\n    </div>\n\n  </div>\n</div>\n";

/***/ }
]);
//# sourceMappingURL=main.js.map