/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OpengraphRenderer = function () {
	function OpengraphRenderer(opengraph) {
		_classCallCheck(this, OpengraphRenderer);

		this.opengraph = opengraph;
	}

	_createClass(OpengraphRenderer, [{
		key: 'render',
		value: function render() {
			var mediaUrl = this.opengraph.mediaUrl;

			if (mediaUrl) {
				return this.renderMedia();
			} else {
				return this.renderSummary();
			}
		}
	}, {
		key: 'renderMedia',
		value: function renderMedia() {
			var _opengraph = this.opengraph,
			    mediaUrl = _opengraph.mediaUrl,
			    url = _opengraph.url;

			return '<iframe src="' + mediaUrl + '" data-opengraph-url="' + url + '" width="560" height="315" frameborder="0" allowfullscreen style="display:block; margin:10px auto 30px"></iframe>';
		}
	}, {
		key: 'renderSummary',
		value: function renderSummary() {
			var _opengraph2 = this.opengraph,
			    image = _opengraph2.image,
			    title = _opengraph2.title,
			    description = _opengraph2.description,
			    host = _opengraph2.host,
			    url = _opengraph2.url;

			var body = '';
			body = '';
			if (image) {
				body += '<div style="width:100%; height:235px; overflow:hidden">\n\t\t\t\t<a href="' + url + '"><img style="width:100%" src="' + image + '"></a>\n\t\t\t</div>';
			}
			body += '<div style="width:100%; padding:10px; box-sizing:border-box">\n\t\t\t<a href="' + url + '" style="display:block; font-weight:500; font-size:18px; overflow: hidden; word-wrap: break-word; line-height:25px; text-overflow: ellipsis; white-space:nowrap; color:#666; text-decoration:none">' + title + '</a>\n\t\t\t<div style="font-size:12px; line-height:18px; height:36px; white-space: normal;-webkit-line-clamp: 2; -webkit-box-orient: vertical; text-overflow: ellipsis; display: -webkit-box; overflow:hidden; color:#666">' + description + '</div>\n\t\t\t<div style="font-size:11px; color:#999; line-height:14px">' + host + '</div>\n\t\t</div>';
			return '<div style="position:relative; max-width:470px; box-shadow:0 1px 5px #999; margin: 10px auto 30px"\n\t\t\tdata-opengraph-image="' + image + '" data-opengraph-title="' + title + '"\n\t\t\tdata-opengraph-description="' + description + '" data-opengraph-host="' + host + '"\n\t\t\tdata-opengraph-url="' + url + '">\n\t\t\t' + body + '\n\t\t</div>';
		}
	}]);

	return OpengraphRenderer;
}();

exports.default = OpengraphRenderer;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _plugin = __webpack_require__(2);

var _plugin2 = _interopRequireDefault(_plugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

tinymce.PluginManager.add('opengraph', _plugin2.default);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(3);

var _App = __webpack_require__(8);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var plugin = function plugin(editor) {
  var app = new _App2.default(editor);
  var $ = editor.$;

  editor.addButton('opengraph', {
    icon: 'media',
    tooltip: '미디어',
    cmd: 'mceOpengraph'
  });

  editor.addCommand('mceOpengraph', function () {
    app.open();
  });

  editor.on("PreProcess", function (e) {
    $('[data-opengraph-url]', e.node).each(function (idx, elm) {
      $(elm).removeAttr("contentEditable");
    });
  });

  editor.on("SetContent", function (e) {
    $('[data-opengraph-url]').each(function (idx, elm) {
      elm.contentEditable = false;
    });
  });

  editor.shortcuts.add('meta+o', 'Opengraph', 'mceOpengraph');
};

exports.default = plugin;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(6)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./opengraph.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./opengraph.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, ".mce-window .mce-opengraph {\n  background-color: #FAFBFC\n}\n\n.mce-window .mce-opengraph * {\n  font-family: \"Noto Sans DemiLight\", AppleSDGothicNeo, \"\\B3CB\\C6C0\", dotum, sans-serif;\n  letter-spacing: -0.2px\n}\n\n.mce-opengraph-input {\n  margin: 20px;\n}\n\n.mce-opengraph .mce-opengraph-header {\n  padding: 30px;\n  position: relative\n}\n\n.mce-opengraph .mce-opengraph-input {\n  width: 100%;\n  border: 1px solid #C5CDD7;\n  height: 37px;\n  padding: 10px;\n  box-sizing: border-box;\n  font-size: 13px;\n  color: #333;\n  background-color: #fff\n}\n\n.mce-opengraph .mce-opengraph-input:focus {\n  border-color: #828C9B\n}\n\n.mce-opengraph .mce-opengraph-search {\n  position: absolute;\n  right: 30px;\n  top: 30px;\n  width: 37px;\n  height: 37px;\n  overflow: hidden;\n  cursor: pointer;\n  text-align: center;\n  display:flex;\n  justify-content: center;\n  align-items:center;\n}\n\n.mce-opengraph .mce-opengraph-input:focus+.mce-opengraph-search .mce-ico.mce-plus {\n  background-position: -26px 0\n}\n\n.mce-opengraph .mce-ico.mce-plus {\n  text-indent: -10000px;\n  background-position: 0 0;\n}\n\n.mce-opengraph .mce-opengraph-body {\n  position: absolute;\n  top: 70px;\n  bottom: 56px;\n  left: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #828C9B;\n  font-size: 18px\n}\n\n.mce-opengraph .ico_loading {\n  display: block;\n  width: 28px;\n  height: 28px;\n  margin: 0 auto;\n  background-position: 0 0;\n  animation: aniSpinRev 1s infinite linear;\n}\n\n.mce-opengraph .ico_blog {\n  display: inline-block;\n  overflow: hidden;\n  background: url(https://t1.daumcdn.net/tistory_admin/static/manage/images/r1/ico_tistory_170731.png) no-repeat;\n  vertical-align: top;\n  text-indent: -9999px;\n}\n\n.mce-opengraph .mce-opengraph-preview {\n  width: 470px;\n  height: 330px;\n  box-shadow: 0 1px 5px #999;\n  margin-top: -15px\n}\n\n.mce-opengraph .mce-opengraph-image {\n  width: 470px;\n  height: 235px;\n  overflow: hidden\n}\n\n.mce-opengraph .mce-opengraph-image img {\n  width: 470px\n}\n\n.mce-opengraph .mce-opengraph-content {\n  width: 470px;\n  height: 95px;\n  padding: 10px;\n  box-sizing: border-box;\n  background-color: #fff\n}\n\n.mce-opengraph .mce-opengraph-title {\n  font-weight: 500;\n  font-size: 18px;\n  overflow: hidden;\n  word-wrap: break-word;\n  line-height: 25px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #666\n}\n\n.mce-opengraph .mce-opengraph-description {\n  font-size: 12px;\n  line-height: 18px;\n  height: 36px;\n  white-space: normal;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  overflow: hidden;\n  color: #666\n}\n\n.mce-opengraph .mce-opengraph-host {\n  font-size: 11px;\n  color: #999;\n  line-height: 14px\n}\n\n.mce-opengraph .mce-opengraph-media {\n  width: 470px;\n  height: 330px;\n}\n\n.mce-opengraph .mce-opengraph-footer {\n  position: absolute;\n  bottom: -1px;\n  height: 56px;\n  left: 0;\n  right: 0;\n  background-color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  border-top: 1px solid #E0E5EE\n}\n\n.mce-opengraph .mce-opengraph-footer button {\n  font-size:13px;\n  border-radius:1px;\n  width: 76px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  box-sizing: content-box;\n}\n\n.mce-opengraph .mce-opengraph-footer .mce-opengraph-cancel {\n  float: left;\n  border: 1px solid #C5CDD7;\n  background: #fff;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);\n}\n\n.mce-opengraph .mce-opengraph-footer .mce-opengraph-cancel:hover {\n  border-color: #A5ADBA;\n  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.12)\n}\n\n.mce-opengraph .mce-opengraph-footer .mce-opengraph-cancel:active {\n  border-color: #C5CDD7;\n  box-shadow: none\n}\n\n.mce-opengraph .mce-opengraph-footer .mce-opengraph-submit {\n  margin-left: 4px;\n  margin-right: 30px;\n  border: 1px solid #D34D1D;\n  color: #fff;\n  background: #EC5621;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12);\n}\n\n.mce-opengraph .mce-opengraph-footer .mce-opengraph-submit:hover {\n  border-color: #bd4c24;\n  background: #ED5F2D;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.23)\n}\n\n.mce-opengraph .mce-opengraph-footer .mce-opengraph-submit:active {\n  border-color: #C23508;\n  background: #D93C09;\n  box-shadow: none\n}\n\n.mce-opengraph .mce-opengraph-footer .mce-opengraph-submit:disabled {\n  background: #fff;\n  border-color: #E0E5EE;\n  color: #959595;\n  box-shadow: none;\n  cursor: not-allowed\n}\n", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
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

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(7);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
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

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

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

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class;

var _validate = __webpack_require__(9);

var _OpengraphRenderer = __webpack_require__(0);

var _OpengraphRenderer2 = _interopRequireDefault(_OpengraphRenderer);

var _OpengraphPreviewRenderer = __webpack_require__(10);

var _OpengraphPreviewRenderer2 = _interopRequireDefault(_OpengraphPreviewRenderer);

var _autobindDecorator = __webpack_require__(11);

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var STATUS_READY = 1;
var STATUS_FETCHING = 2;
var STATUS_VIEW = 3;
var STATUS_FAILED = 4;

var App = (_class = function () {
  function App(editor) {
    _classCallCheck(this, App);

    this.editor = editor;
    this.win = null;
    this.opengraph = null;
    this.status = STATUS_READY;

    this.fetchHandler = this.editor.settings.opengraph && this.editor.settings.opengraph.fetch_handler ? this.editor.settings.opengraph.fetch_handler : function () {};
  }

  _createClass(App, [{
    key: 'open',
    value: function open() {
      var win = this.editor.windowManager.open({
        title: '미디어 삽입',
        items: [{
          type: 'container',
          html: '<div class="mce-opengraph" style="width:600px; height:534px">\
          <div class="mce-opengraph-header">\
            <input class="mce-opengraph-input" placeholder="http://url">\
            <button class="mce-opengraph-search"><i class="mce-ico mce-plus">확인</i></button>\
          </div>\
          <div class="mce-opengraph-body"></div>\
          <div class="mce-opengraph-footer">\
            <button class="mce-opengraph-cancel">취소</button>\
            <button class="mce-opengraph-submit" disabled>삽입</button>\
          </div>\
        </div>'
        }],
        buttons: []
      });
      win.statusbar.remove();

      this.$input = win.$('.mce-opengraph-input');
      this.$btnSearch = win.$('.mce-opengraph-search');
      this.$body = win.$('.mce-opengraph-body');
      this.$btnSubmit = win.$('.mce-opengraph-submit');
      this.$btnCancel = win.$('.mce-opengraph-cancel');
      this.$window = win.$(window);
      this.$modalBlock = win.$('#mce-modal-block');

      this.$input.on("keydown", this.onKeydown);
      this.$btnSearch.on("click", this.onSearch);
      this.$btnSubmit.on("click", this.onSubmit);
      this.$btnCancel.on("click", this.onCancel);
      this.$window.on("keydown", this.onWindowKeydown);
      this.$modalBlock.on("click", this.onCancel);
      this.$input[0].focus();

      this.win = win;

      this.updateView();
    }
  }, {
    key: 'close',
    value: function close() {
      if (this.win) {
        this.$input.off("keydown");
        this.$btnSearch.off("click");
        this.$btnSubmit.off("click");
        this.$btnCancel.off("click");
        this.$window.off("keydown");
        this.$modalBlock.off("click");
        this.win.close();

        this.opengraph = null;
        this.$input = null;
        this.$body = null;
        this.status = STATUS_READY;
        this.win = null;
      }
    }
  }, {
    key: 'updateView',
    value: function updateView() {
      var $body = this.$body,
          $btnSubmit = this.$btnSubmit,
          opengraph = this.opengraph,
          status = this.status;

      switch (status) {
        case STATUS_VIEW:
          this.showOpengraph();
          $btnSubmit.removeAttr("disabled");
          break;
        case STATUS_FAILED:
          $body.html("미리보기를 불러오지 못했습니다.");
          $btnSubmit.attr("disabled");
          break;
        case STATUS_FETCHING:
          $body.html("<span class='ico_blog ico_loading'></span>");
          $btnSubmit.attr("disabled");
          break;
        default:
          $body.html("이 곳에 미리보기가 표시됩니다.");
          $btnSubmit.attr("disabled");
      }
    }
  }, {
    key: 'fetchOpengraph',
    value: function fetchOpengraph(value) {
      var _this = this;

      this.status = STATUS_FETCHING;
      this.updateView();

      this.fetchHandler(value, function (data) {
        if (data) {
          _this.opengraph = data;
          _this.status = STATUS_VIEW;
        } else {
          _this.status = STATUS_FAILED;
        }
        _this.updateView();
      });
    }
  }, {
    key: 'showOpengraph',
    value: function showOpengraph() {
      var opengraph = this.opengraph,
          $body = this.$body;

      var renderer = new _OpengraphPreviewRenderer2.default(opengraph);
      $body.html(renderer.render());
    }
  }, {
    key: 'onWindowKeydown',
    value: function onWindowKeydown(e) {
      var keyCode = e.keyCode;
      if (keyCode === 27) {
        this.close();
      }
    }
  }, {
    key: 'onKeydown',
    value: function onKeydown(e) {
      var keyCode = e.keyCode;
      if (keyCode === 13 || keyCode === 9) {
        this.onSearch();
      }
    }
  }, {
    key: 'onSearch',
    value: function onSearch() {
      var value = this.$input[0].value;
      if (!(0, _validate.isURL)(value)) {
        this.status = STATUS_FAILED;
        this.updateView();
      } else {
        this.fetchOpengraph(value);
      }
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit(e) {
      var editor = this.editor,
          opengraph = this.opengraph;


      if (opengraph) {
        var renderer = new _OpengraphRenderer2.default(opengraph);
        editor.insertContent(renderer.render());
        editor.nodeChanged();
      }

      this.close();
    }
  }, {
    key: 'onCancel',
    value: function onCancel(e) {
      this.close();
    }
  }]);

  return App;
}(), (_applyDecoratedDescriptor(_class.prototype, 'onWindowKeydown', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'onWindowKeydown'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onKeydown', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'onKeydown'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onSearch', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'onSearch'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onSubmit', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'onSubmit'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'onCancel', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'onCancel'), _class.prototype)), _class);
exports.default = App;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var isURL = exports.isURL = function isURL(str) {
  var urlRegex = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;
  var url = new RegExp(urlRegex);
  return str.length < 2083 && url.test(str);
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _OpengraphRenderer2 = __webpack_require__(0);

var _OpengraphRenderer3 = _interopRequireDefault(_OpengraphRenderer2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OpengraphPreviewRenderer = function (_OpengraphRenderer) {
	_inherits(OpengraphPreviewRenderer, _OpengraphRenderer);

	function OpengraphPreviewRenderer() {
		_classCallCheck(this, OpengraphPreviewRenderer);

		return _possibleConstructorReturn(this, (OpengraphPreviewRenderer.__proto__ || Object.getPrototypeOf(OpengraphPreviewRenderer)).apply(this, arguments));
	}

	_createClass(OpengraphPreviewRenderer, [{
		key: 'renderMedia',
		value: function renderMedia() {
			var _opengraph = this.opengraph,
			    mediaUrl = _opengraph.mediaUrl,
			    url = _opengraph.url;

			return '<div class="mce-opengraph-preview">\n\t\t\t<iframe src="' + mediaUrl + '" data-opengraph-url="' + url + '" frameborder="0" allowfullscreen>\n\t\t</div>';
		}
	}, {
		key: 'renderSummary',
		value: function renderSummary() {
			var _opengraph2 = this.opengraph,
			    image = _opengraph2.image,
			    title = _opengraph2.title,
			    description = _opengraph2.description,
			    host = _opengraph2.host,
			    url = _opengraph2.url;

			var body = '';
			body = '';
			if (image) {
				body += '<div class="mce-opengraph-image">\n\t\t\t\t<img src="' + image + '">\n\t\t\t</div>';
			}
			body += '<div class="mce-opengraph-content">\n\t\t\t<div class="mce-opengraph-title">' + title + '</div>\n\t\t\t<div class="mce-opengraph-description">' + description + '</div>\n\t\t\t<div class="mce-opengraph-host">' + host + '</div>\n\t\t</div>';
			return '<div class="mce-opengraph-preview">' + body + '</div>';
		}
	}]);

	return OpengraphPreviewRenderer;
}(_OpengraphRenderer3.default);

exports.default = OpengraphPreviewRenderer;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = autobind;
/**
 * @copyright 2015, Andrey Popp <8mayday@gmail.com>
 *
 * The decorator may be used on classes or methods
 * ```
 * @autobind
 * class FullBound {}
 *
 * class PartBound {
 *   @autobind
 *   method () {}
 * }
 * ```
 */
function autobind() {
  if (arguments.length === 1) {
    return boundClass.apply(undefined, arguments);
  } else {
    return boundMethod.apply(undefined, arguments);
  }
}

/**
 * Use boundMethod to bind all methods on the target.prototype
 */
function boundClass(target) {
  // (Using reflect to get all keys including symbols)
  var keys = void 0;
  // Use Reflect if exists
  if (typeof Reflect !== 'undefined' && typeof Reflect.ownKeys === 'function') {
    keys = Reflect.ownKeys(target.prototype);
  } else {
    keys = Object.getOwnPropertyNames(target.prototype);
    // use symbols if support is provided
    if (typeof Object.getOwnPropertySymbols === 'function') {
      keys = keys.concat(Object.getOwnPropertySymbols(target.prototype));
    }
  }

  keys.forEach(function (key) {
    // Ignore special case target method
    if (key === 'constructor') {
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key);

    // Only methods need binding
    if (typeof descriptor.value === 'function') {
      Object.defineProperty(target.prototype, key, boundMethod(target, key, descriptor));
    }
  });
  return target;
}

/**
 * Return a descriptor removing the value and returning a getter
 * The getter will return a .bind version of the function
 * and memoize the result against a symbol on the instance
 */
function boundMethod(target, key, descriptor) {
  var fn = descriptor.value;

  if (typeof fn !== 'function') {
    throw new Error('@autobind decorator can only be applied to methods not: ' + (typeof fn === 'undefined' ? 'undefined' : _typeof(fn)));
  }

  // In IE11 calling Object.defineProperty has a side-effect of evaluating the
  // getter for the property which is being replaced. This causes infinite
  // recursion and an "Out of stack space" error.
  var definingProperty = false;

  return {
    configurable: true,
    get: function get() {
      if (definingProperty || this === target.prototype || this.hasOwnProperty(key) || typeof fn !== 'function') {
        return fn;
      }

      var boundFn = fn.bind(this);
      definingProperty = true;
      Object.defineProperty(this, key, {
        configurable: true,
        get: function get() {
          return boundFn;
        },
        set: function set(value) {
          fn = value;
          delete this[key];
        }
      });
      definingProperty = false;
      return boundFn;
    },
    set: function set(value) {
      fn = value;
    }
  };
}


/***/ })
/******/ ]);