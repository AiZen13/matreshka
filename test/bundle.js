/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/*const testsContext = require.context('./spec/', true, /.*\.js$/);
	testsContext.keys().forEach(testsContext);
	const componentsContext = require.context('../src/', true, /.*index\.js$/);
	componentsContext.keys().forEach(componentsContext);*/

	// jscs:disable
	// test/test_index.js

	// This gets replaced by karma webpack with the updated files on rebuild
	var __karmaWebpackManifest__ = [];

	// require all modules ending in "_test" from the
	// current directory and all subdirectories
	var testsContext = __webpack_require__(1);

	function inManifest(path) {
	  return __karmaWebpackManifest__.indexOf(path) >= 0;
	}

	var runnable = testsContext.keys().filter(inManifest);

	// Run all tests if we didn't find any changes
	if (!runnable.length) {
	  runnable = testsContext.keys();
	}

	runnable.forEach(testsContext);


	const componentsContext = __webpack_require__(5);
	componentsContext.keys().forEach(componentsContext);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./class_spec.js": 2
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 1;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var Class = __webpack_require__(3);

	describe('Class function', () => {
		it('allows to inherit', () => {
			var A = Class({ a: true }),
			    B = Class({ b: true, extends: A }),
			    C = Class({ c: true, extends: B }),
			    inst = new C();

			expect(inst instanceof A).toBeTruthy();
			expect(inst instanceof B).toBeTruthy();
			expect(inst instanceof C).toBeTruthy();

			expect(inst.a).toBeTruthy();
			expect(inst.b).toBeTruthy();
			expect(inst.c).toBeTruthy();
		});

		it('allows to pass static props', () => {
			var A = Class({}, { staticProp: true });
			expect(A.staticProp).toBeTruthy();
		});

		it('if new Class({}) is called return its instance', () => {
			var inst = new Class({ a: true });
			expect(inst.a).toBeTruthy();
			expect(inst instanceof Class).toBeFalsy();
		});
		});

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	
	var __cov_L8uhzsIEYShi6qJoDBY5bQ = (Function('return this'))();
	if (!__cov_L8uhzsIEYShi6qJoDBY5bQ.__coverage__) { __cov_L8uhzsIEYShi6qJoDBY5bQ.__coverage__ = {}; }
	__cov_L8uhzsIEYShi6qJoDBY5bQ = __cov_L8uhzsIEYShi6qJoDBY5bQ.__coverage__;
	if (!(__cov_L8uhzsIEYShi6qJoDBY5bQ['/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/class.js'])) {
	   __cov_L8uhzsIEYShi6qJoDBY5bQ['/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/class.js'] = {"path":"/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/class.js","s":{"1":0,"2":0,"3":1,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0]},"f":{"1":0,"2":0,"3":0},"fnMap":{"1":{"name":"Class","line":3,"loc":{"start":{"line":3,"column":15},"end":{"line":3,"column":54}}},"2":{"name":"EmptyConstructor","line":6,"loc":{"start":{"line":6,"column":5},"end":{"line":6,"column":33}}},"3":{"name":"instanceOf","line":19,"loc":{"start":{"line":19,"column":20},"end":{"line":19,"column":42}}}},"statementMap":{"1":{"start":{"line":1,"column":19},"end":{"line":null,"column":null}},"2":{"start":{"line":3,"column":24},"end":{"line":null,"column":null}},"3":{"start":{"line":3,"column":15},"end":{"line":3,"column":15}},"4":{"start":{"line":4,"column":7},"end":{"line":3,"column":54}},"5":{"start":{"line":12,"column":8},"end":{"line":3,"column":54}},"6":{"start":{"line":14,"column":5},"end":{"line":14,"column":1}},"7":{"start":{"line":15,"column":9},"end":{"line":14,"column":38}},"8":{"start":{"line":19,"column":1},"end":{"line":3,"column":54}},"9":{"start":{"line":20,"column":9},"end":{"line":19,"column":42}},"10":{"start":{"line":23,"column":13},"end":{"line":null,"column":null}},"11":{"start":{"line":26,"column":5},"end":{"line":26,"column":1}},"12":{"start":{"line":27,"column":9},"end":{"line":26,"column":28}},"13":{"start":{"line":29,"column":9},"end":{"line":28,"column":8}}},"branchMap":{"1":{"line":5,"type":"cond-expr","locations":[{"start":{"line":5,"column":5},"end":{"line":5,"column":5}},{"start":{"line":6,"column":5},"end":{"line":6,"column":5}}]},"2":{"line":8,"type":"binary-expr","locations":[{"start":{"line":8,"column":11},"end":{"line":8,"column":11}},{"start":{"line":8,"column":32},"end":{"line":8,"column":32}}]},"3":{"line":10,"type":"cond-expr","locations":[{"start":{"line":10,"column":33},"end":{"line":10,"column":33}},{"start":{"line":10,"column":52},"end":{"line":10,"column":24}}]},"4":{"line":14,"type":"if","locations":[{"start":{"line":14,"column":5},"end":{"line":14,"column":5}},{"start":{"line":14,"column":5},"end":{"line":14,"column":5}}]},"5":{"line":26,"type":"if","locations":[{"start":{"line":26,"column":5},"end":{"line":26,"column":5}},{"start":{"line":26,"column":5},"end":{"line":26,"column":5}}]}},"code":["import extend from './extend';","","export default function Class(prototype, staticProps) {","\tconst Constructor = prototype.constructor !== Object","\t\t\t? prototype.constructor","\t\t\t: function EmptyConstructor() {},","\t\t//extends is kept for backward compatibility","\t\tParent = prototype.extends || prototype.extend,","\t\t//inherit proto from class parent or empty object","\t\tproto = Object.create(Parent ? Parent.prototype : {});","","\textend(proto, prototype);","","\tif (typeof staticProps === 'object') {","\t\textend(Constructor, staticProps);","\t}","","\t// for backward compatibility","\tproto.instanceOf = function instanceOf() {","\t\treturn this instanceof Constructor;","\t};","","\tConstructor.prototype = proto;","","\t// if new Class({}) is called return its instance","\tif (this instanceof Class) {","\t\treturn new Constructor();","\t} else {","\t\treturn Constructor;","\t}","}",""]};
	}
	__cov_L8uhzsIEYShi6qJoDBY5bQ = __cov_L8uhzsIEYShi6qJoDBY5bQ['/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/class.js'];
	__cov_L8uhzsIEYShi6qJoDBY5bQ.s['1']++;var extend=__webpack_require__(4);__cov_L8uhzsIEYShi6qJoDBY5bQ.s['2']++;module.exports=Class;function Class(prototype,staticProps){__cov_L8uhzsIEYShi6qJoDBY5bQ.f['1']++;__cov_L8uhzsIEYShi6qJoDBY5bQ.s['4']++;var Constructor=prototype.constructor!==Object?(__cov_L8uhzsIEYShi6qJoDBY5bQ.b['1'][0]++,prototype.constructor):(__cov_L8uhzsIEYShi6qJoDBY5bQ.b['1'][1]++,function EmptyConstructor(){__cov_L8uhzsIEYShi6qJoDBY5bQ.f['2']++;}),Parent=(__cov_L8uhzsIEYShi6qJoDBY5bQ.b['2'][0]++,prototype.extends)||(__cov_L8uhzsIEYShi6qJoDBY5bQ.b['2'][1]++,prototype.extend),proto=Object.create(Parent?(__cov_L8uhzsIEYShi6qJoDBY5bQ.b['3'][0]++,Parent.prototype):(__cov_L8uhzsIEYShi6qJoDBY5bQ.b['3'][1]++,{}));__cov_L8uhzsIEYShi6qJoDBY5bQ.s['5']++;extend(proto,prototype);__cov_L8uhzsIEYShi6qJoDBY5bQ.s['6']++;if(typeof staticProps==='object'){__cov_L8uhzsIEYShi6qJoDBY5bQ.b['4'][0]++;__cov_L8uhzsIEYShi6qJoDBY5bQ.s['7']++;extend(Constructor,staticProps);}else{__cov_L8uhzsIEYShi6qJoDBY5bQ.b['4'][1]++;}__cov_L8uhzsIEYShi6qJoDBY5bQ.s['8']++;proto.instanceOf=function instanceOf(){__cov_L8uhzsIEYShi6qJoDBY5bQ.f['3']++;__cov_L8uhzsIEYShi6qJoDBY5bQ.s['9']++;return this instanceof Constructor;};__cov_L8uhzsIEYShi6qJoDBY5bQ.s['10']++;Constructor.prototype=proto;__cov_L8uhzsIEYShi6qJoDBY5bQ.s['11']++;if(this instanceof Class){__cov_L8uhzsIEYShi6qJoDBY5bQ.b['5'][0]++;__cov_L8uhzsIEYShi6qJoDBY5bQ.s['12']++;return new Constructor();}else{__cov_L8uhzsIEYShi6qJoDBY5bQ.b['5'][1]++;__cov_L8uhzsIEYShi6qJoDBY5bQ.s['13']++;return Constructor;}}


/***/ },
/* 4 */
/***/ function(module, exports) {

	
	var __cov_ArPrqqSfcGGsqIytIcv3dQ = (Function('return this'))();
	if (!__cov_ArPrqqSfcGGsqIytIcv3dQ.__coverage__) { __cov_ArPrqqSfcGGsqIytIcv3dQ.__coverage__ = {}; }
	__cov_ArPrqqSfcGGsqIytIcv3dQ = __cov_ArPrqqSfcGGsqIytIcv3dQ.__coverage__;
	if (!(__cov_ArPrqqSfcGGsqIytIcv3dQ['/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/extend.js'])) {
	   __cov_ArPrqqSfcGGsqIytIcv3dQ['/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/extend.js'] = {"path":"/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/extend.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0]},"f":{"1":0},"fnMap":{"1":{"name":"assign","line":5,"loc":{"start":{"line":5,"column":32},"end":{"line":5,"column":56}}}},"statementMap":{"1":{"start":{"line":5,"column":0},"end":{"line":null,"column":null}},"2":{"start":{"line":7,"column":5},"end":{"line":7,"column":1},"skip":true},"3":{"start":{"line":8,"column":8},"end":{"line":7,"column":46},"skip":true},"4":{"start":{"line":11,"column":7},"end":{"line":5,"column":56}},"5":{"start":{"line":12,"column":6},"end":{"line":12,"column":1}},"6":{"start":{"line":13,"column":8},"end":{"line":12,"column":56}},"7":{"start":{"line":14,"column":6},"end":{"line":14,"column":2}},"8":{"start":{"line":15,"column":8},"end":{"line":15,"column":3}},"9":{"start":{"line":16,"column":8},"end":{"line":16,"column":4}},"10":{"start":{"line":17,"column":12},"end":{"line":16,"column":40}},"11":{"start":{"line":23,"column":8},"end":{"line":5,"column":56}},"12":{"start":{"line":26,"column":15},"end":{"line":null,"column":null}}},"branchMap":{"1":{"line":5,"type":"binary-expr","locations":[{"start":{"line":5,"column":15},"end":{"line":5,"column":15}},{"start":{"line":5,"column":32},"end":{"line":5,"column":32}}]},"2":{"line":7,"type":"if","locations":[{"start":{"line":7,"column":5},"end":{"line":7,"column":5},"skip":true},{"start":{"line":7,"column":5},"end":{"line":7,"column":5},"skip":true}]},"3":{"line":7,"type":"binary-expr","locations":[{"start":{"line":7,"column":5},"end":{"line":7,"column":5},"skip":true},{"start":{"line":7,"column":29},"end":{"line":7,"column":29},"skip":true}]},"4":{"line":14,"type":"if","locations":[{"start":{"line":14,"column":6},"end":{"line":14,"column":6}},{"start":{"line":14,"column":6},"end":{"line":14,"column":6}}]},"5":{"line":14,"type":"binary-expr","locations":[{"start":{"line":14,"column":6},"end":{"line":14,"column":6}},{"start":{"line":14,"column":30},"end":{"line":14,"column":30}}]},"6":{"line":16,"type":"if","locations":[{"start":{"line":16,"column":8},"end":{"line":16,"column":8}},{"start":{"line":16,"column":8},"end":{"line":16,"column":8}}]}},"code":["// Object.assign polyfyll is taken there:","// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Polyfill","// and will be removed in future","","const assign = Object.assign || function assign(target) {","\t/* istanbul ignore next */","\tif (target === undefined || target === null) {","\t\tthrow new TypeError('Cannot convert undefined or null to object');","\t}","","\tconst output = Object(target);","\tfor (let index = 1; index < arguments.length; index++) {","\t\tconst source = arguments[index];","\t\tif (source !== undefined && source !== null) {","\t\t\tfor (const nextKey in source) {","\t\t\t\tif (source.hasOwnProperty(nextKey)) {","\t\t\t\t\toutput[nextKey] = source[nextKey];","\t\t\t\t}","\t\t\t}","\t\t}","\t}","","\treturn output;","};","","export default assign;",""]};
	}
	__cov_ArPrqqSfcGGsqIytIcv3dQ = __cov_ArPrqqSfcGGsqIytIcv3dQ['/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/extend.js'];
	__cov_ArPrqqSfcGGsqIytIcv3dQ.s['1']++;var assign=(__cov_ArPrqqSfcGGsqIytIcv3dQ.b['1'][0]++,Object.assign)||(__cov_ArPrqqSfcGGsqIytIcv3dQ.b['1'][1]++,function assign(target){__cov_ArPrqqSfcGGsqIytIcv3dQ.f['1']++;__cov_ArPrqqSfcGGsqIytIcv3dQ.s['2']++;if((__cov_ArPrqqSfcGGsqIytIcv3dQ.b['3'][0]++,target===undefined)||(__cov_ArPrqqSfcGGsqIytIcv3dQ.b['3'][1]++,target===null)){__cov_ArPrqqSfcGGsqIytIcv3dQ.b['2'][0]++;__cov_ArPrqqSfcGGsqIytIcv3dQ.s['3']++;throw new TypeError('Cannot convert undefined or null to object');}else{__cov_ArPrqqSfcGGsqIytIcv3dQ.b['2'][1]++;}__cov_ArPrqqSfcGGsqIytIcv3dQ.s['4']++;var output=Object(target);__cov_ArPrqqSfcGGsqIytIcv3dQ.s['5']++;for(var index=1;index<arguments.length;index++){__cov_ArPrqqSfcGGsqIytIcv3dQ.s['6']++;var source=arguments[index];__cov_ArPrqqSfcGGsqIytIcv3dQ.s['7']++;if((__cov_ArPrqqSfcGGsqIytIcv3dQ.b['5'][0]++,source!==undefined)&&(__cov_ArPrqqSfcGGsqIytIcv3dQ.b['5'][1]++,source!==null)){__cov_ArPrqqSfcGGsqIytIcv3dQ.b['4'][0]++;__cov_ArPrqqSfcGGsqIytIcv3dQ.s['8']++;for(var nextKey in source){__cov_ArPrqqSfcGGsqIytIcv3dQ.s['9']++;if(source.hasOwnProperty(nextKey)){__cov_ArPrqqSfcGGsqIytIcv3dQ.b['6'][0]++;__cov_ArPrqqSfcGGsqIytIcv3dQ.s['10']++;output[nextKey]=source[nextKey];}else{__cov_ArPrqqSfcGGsqIytIcv3dQ.b['6'][1]++;}}}else{__cov_ArPrqqSfcGGsqIytIcv3dQ.b['4'][1]++;}}__cov_ArPrqqSfcGGsqIytIcv3dQ.s['11']++;return output;});__cov_ArPrqqSfcGGsqIytIcv3dQ.s['12']++;module.exports=assign;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./_core/defs.js": 6,
		"./_core/init.js": 7,
		"./_events/addlistener.js": 8,
		"./_events/delegatelistener.js": 9,
		"./array.js": 10,
		"./binders.js": 11,
		"./class.js": 3,
		"./extend.js": 4,
		"./index.js": 12,
		"./matreshka.js": 13,
		"./object.js": 14,
		"./on.js": 15
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 5;


/***/ },
/* 6 */
/***/ function(module, exports) {

	
	var __cov_2sQO6WdtK5z24$OBiKn8WQ = (Function('return this'))();
	if (!__cov_2sQO6WdtK5z24$OBiKn8WQ.__coverage__) { __cov_2sQO6WdtK5z24$OBiKn8WQ.__coverage__ = {}; }
	__cov_2sQO6WdtK5z24$OBiKn8WQ = __cov_2sQO6WdtK5z24$OBiKn8WQ.__coverage__;
	if (!(__cov_2sQO6WdtK5z24$OBiKn8WQ['/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/_core/defs.js'])) {
	   __cov_2sQO6WdtK5z24$OBiKn8WQ['/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/_core/defs.js'] = {"path":"/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/_core/defs.js","s":{"1":1,"2":0,"3":0,"4":0,"5":0,"6":0},"b":{"1":[0,0]},"f":{"1":0},"fnMap":{"1":{"name":"PseudoMap","line":1,"loc":{"start":{"line":1,"column":0},"end":{"line":1,"column":21}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":0}},"2":{"start":{"line":3,"column":12},"end":{"line":null,"column":null}},"3":{"start":{"line":3,"column":33},"end":{"line":null,"column":null}},"4":{"start":{"line":0,"column":0},"end":{"line":0,"column":0},"skip":true},"5":{"start":{"line":0,"column":0},"end":{"line":0,"column":0},"skip":true},"6":{"start":{"line":20,"column":15},"end":{"line":null,"column":null}}},"branchMap":{"1":{"line":20,"type":"cond-expr","locations":[{"start":{"line":20,"column":47},"end":{"line":20,"column":15}},{"start":{"line":20,"column":65},"end":{"line":20,"column":15}}]}},"code":["function PseudoMap() {}","","nofn.assign(PseudoMap.prototype, {","\tget: function(obj) {","\t\treturn obj.matreshkaData;","\t},","\tset: function(obj, data) {","\t\tObject.defineProperty(obj, 'matreshkaData', {","\t\t\tvalue: data,","\t\t\tenumerable: false,","\t\t\twritable: false,","\t\t\tconfigurable: false","\t\t});","\t},","\thas: function(obj) {","\t\treturn 'matreshkaData' in obj;","\t}","});","","export default typeof WeakMap == 'undefined' ? new PseudoMap() : new WeakMap();",""]};
	}
	__cov_2sQO6WdtK5z24$OBiKn8WQ = __cov_2sQO6WdtK5z24$OBiKn8WQ['/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/_core/defs.js'];
	function PseudoMap(){__cov_2sQO6WdtK5z24$OBiKn8WQ.f['1']++;}__cov_2sQO6WdtK5z24$OBiKn8WQ.s['2']++;var _result=PseudoMap.prototype;__cov_2sQO6WdtK5z24$OBiKn8WQ.s['3']++;for(var _source2={get:function(obj){return obj.matreshkaData;},set:function(obj,data){Object.defineProperty(obj,'matreshkaData',{value:data,enumerable:false,writable:false,configurable:false});},has:function(obj){return'matreshkaData'in obj;}},_keys2=Object.keys(_source2),_l2=_keys2.length,_i2=0,_key2;_i2<_l2;_i2++){__cov_2sQO6WdtK5z24$OBiKn8WQ.s['4']++;_key2=_keys2[_i2];__cov_2sQO6WdtK5z24$OBiKn8WQ.s['5']++;_result[_key2]=_source2[_key2];}__cov_2sQO6WdtK5z24$OBiKn8WQ.s['6']++;module.exports=typeof WeakMap=='undefined'?(__cov_2sQO6WdtK5z24$OBiKn8WQ.b['1'][0]++,new PseudoMap()):(__cov_2sQO6WdtK5z24$OBiKn8WQ.b['1'][1]++,new WeakMap());


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	
	var __cov_kX5FBChuManpDSTfyDHWDQ = (Function('return this'))();
	if (!__cov_kX5FBChuManpDSTfyDHWDQ.__coverage__) { __cov_kX5FBChuManpDSTfyDHWDQ.__coverage__ = {}; }
	__cov_kX5FBChuManpDSTfyDHWDQ = __cov_kX5FBChuManpDSTfyDHWDQ.__coverage__;
	if (!(__cov_kX5FBChuManpDSTfyDHWDQ['/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/_core/init.js'])) {
	   __cov_kX5FBChuManpDSTfyDHWDQ['/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/_core/init.js'] = {"path":"/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/_core/init.js","s":{"1":0,"2":1,"3":0,"4":0,"5":0,"6":1,"7":0,"8":0,"9":0,"10":0,"11":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0]},"f":{"1":0,"2":0},"fnMap":{"1":{"name":"commonInit","line":4,"loc":{"start":{"line":4,"column":0},"end":{"line":4,"column":28}}},"2":{"name":"initMK","line":32,"loc":{"start":{"line":32,"column":15},"end":{"line":32,"column":39}}}},"statementMap":{"1":{"start":{"line":1,"column":17},"end":{"line":null,"column":null}},"2":{"start":{"line":4,"column":0},"end":{"line":4,"column":0}},"3":{"start":{"line":5,"column":5},"end":{"line":5,"column":1}},"4":{"start":{"line":6,"column":7},"end":{"line":5,"column":24}},"5":{"start":{"line":32,"column":24},"end":{"line":null,"column":null}},"6":{"start":{"line":32,"column":15},"end":{"line":32,"column":15}},"7":{"start":{"line":33,"column":7},"end":{"line":32,"column":39}},"8":{"start":{"line":34,"column":5},"end":{"line":34,"column":1}},"9":{"start":{"line":35,"column":8},"end":{"line":34,"column":34}},"10":{"start":{"line":37,"column":8},"end":{"line":32,"column":39}},"11":{"start":{"line":38,"column":8},"end":{"line":32,"column":39}}},"branchMap":{"1":{"line":5,"type":"if","locations":[{"start":{"line":5,"column":5},"end":{"line":5,"column":5}},{"start":{"line":5,"column":5},"end":{"line":5,"column":5}}]},"2":{"line":34,"type":"if","locations":[{"start":{"line":34,"column":5},"end":{"line":34,"column":5}},{"start":{"line":34,"column":5},"end":{"line":34,"column":5}}]},"3":{"line":34,"type":"binary-expr","locations":[{"start":{"line":34,"column":5},"end":{"line":34,"column":5}},{"start":{"line":34,"column":16},"end":{"line":34,"column":16}}]},"4":{"line":37,"type":"cond-expr","locations":[{"start":{"line":37,"column":18},"end":{"line":37,"column":1}},{"start":{"line":37,"column":37},"end":{"line":37,"column":1}}]}},"code":["import defs from './defs';","","// This is common function which associates an object with its definition","function commonInit(object) {","\tif (!defs.has(object)) {","\t\tdefs.set(object, {","\t\t\t// A property name of \"events\" object is an event name","\t\t\t// and a value is an array of event handlers","\t\t\tevents: {},","\t\t\t// \"props\" contains special information about","\t\t\tprops: {","\t\t\t\tvasia: {","\t\t\t\t\t//nodes: core.$(),","\t\t\t\t\tvalue: object[key],","\t\t\t\t\tgetter: null,","\t\t\t\t\tsetter: null,","\t\t\t\t\tmediator: null,","\t\t\t\t\t//destroyers: Map,","\t\t\t\t\tbindings: [{","\t\t\t\t\t\tnode,","\t\t\t\t\t\tbinder,","\t\t\t\t\t\tnodeHandler,","\t\t\t\t\t\tobjectHandler","\t\t\t\t\t}]","\t\t\t\t}","\t\t\t},","\t\t\tid: 'mk' + Math.random()","\t\t});","\t}","};","","export default function initMK(object) {","\tconst type = typeof object;","\tif (!object || type != 'object') {","\t\tthrow new TypeError(`${type} cannot be used in this method`);","\t};","\tobject._initMK ? object._initMK() : commonInit(object);","\treturn object;","};","","/*define([","\t'matreshka_dir/core/var/core',","\t'matreshka_dir/core/var/map'","], function(core, map) {","\t\"use strict\";","","\tvar initMK = core.initMK = function(object) {","\t\tif (!map.has(object)) {","\t\t\tmap.set(object, {","\t\t\t\tevents: {},","\t\t\t\tspecial: {},","\t\t\t\tid: 'mk' + Math.random()","\t\t\t});","\t\t}","","\t\treturn object;","\t};","","\treturn function(object) {","\t\tobject._initMK ? object._initMK() : initMK(object);","\t\treturn object;","\t};","});*/",""]};
	}
	__cov_kX5FBChuManpDSTfyDHWDQ = __cov_kX5FBChuManpDSTfyDHWDQ['/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/_core/init.js'];
	__cov_kX5FBChuManpDSTfyDHWDQ.s['1']++;var defs=__webpack_require__(6);function commonInit(object){__cov_kX5FBChuManpDSTfyDHWDQ.f['1']++;__cov_kX5FBChuManpDSTfyDHWDQ.s['3']++;if(!defs.has(object)){__cov_kX5FBChuManpDSTfyDHWDQ.b['1'][0]++;__cov_kX5FBChuManpDSTfyDHWDQ.s['4']++;defs.set(object,{events:{},props:{vasia:{value:object[key],getter:null,setter:null,mediator:null,bindings:[{node,binder,nodeHandler,objectHandler}]}},id:'mk'+Math.random()});}else{__cov_kX5FBChuManpDSTfyDHWDQ.b['1'][1]++;}};__cov_kX5FBChuManpDSTfyDHWDQ.s['5']++;module.exports=initMK;function initMK(object){__cov_kX5FBChuManpDSTfyDHWDQ.f['2']++;__cov_kX5FBChuManpDSTfyDHWDQ.s['7']++;var type=typeof object;__cov_kX5FBChuManpDSTfyDHWDQ.s['8']++;if((__cov_kX5FBChuManpDSTfyDHWDQ.b['3'][0]++,!object)||(__cov_kX5FBChuManpDSTfyDHWDQ.b['3'][1]++,type!='object')){__cov_kX5FBChuManpDSTfyDHWDQ.b['2'][0]++;__cov_kX5FBChuManpDSTfyDHWDQ.s['9']++;throw new TypeError(`${type} cannot be used in this method`);}else{__cov_kX5FBChuManpDSTfyDHWDQ.b['2'][1]++;};__cov_kX5FBChuManpDSTfyDHWDQ.s['10']++;object._initMK?(__cov_kX5FBChuManpDSTfyDHWDQ.b['4'][0]++,object._initMK()):(__cov_kX5FBChuManpDSTfyDHWDQ.b['4'][1]++,commonInit(object));__cov_kX5FBChuManpDSTfyDHWDQ.s['11']++;return object;};


/***/ },
/* 8 */
/***/ function(module, exports) {

	
	var __cov_JRp$14uKtQFiXWu2HnvrqA = (Function('return this'))();
	if (!__cov_JRp$14uKtQFiXWu2HnvrqA.__coverage__) { __cov_JRp$14uKtQFiXWu2HnvrqA.__coverage__ = {}; }
	__cov_JRp$14uKtQFiXWu2HnvrqA = __cov_JRp$14uKtQFiXWu2HnvrqA.__coverage__;
	if (!(__cov_JRp$14uKtQFiXWu2HnvrqA['/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/_events/addlistener.js'])) {
	   __cov_JRp$14uKtQFiXWu2HnvrqA['/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/_events/addlistener.js'] = {"path":"/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/_events/addlistener.js","s":{"1":0,"2":1,"3":0},"b":{},"f":{"1":0},"fnMap":{"1":{"name":"addListener","line":1,"loc":{"start":{"line":1,"column":15},"end":{"line":1,"column":69}}}},"statementMap":{"1":{"start":{"line":1,"column":24},"end":{"line":null,"column":null}},"2":{"start":{"line":1,"column":15},"end":{"line":1,"column":15}},"3":{"start":{"line":2,"column":7},"end":{"line":1,"column":69}}},"branchMap":{},"code":["export default function addListener(object, name, callback, context) {","\tconst info = map.get(object);","}",""]};
	}
	__cov_JRp$14uKtQFiXWu2HnvrqA = __cov_JRp$14uKtQFiXWu2HnvrqA['/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/_events/addlistener.js'];
	__cov_JRp$14uKtQFiXWu2HnvrqA.s['1']++;module.exports=addListener;function addListener(object,name,callback,context){__cov_JRp$14uKtQFiXWu2HnvrqA.f['1']++;__cov_JRp$14uKtQFiXWu2HnvrqA.s['3']++;var info=map.get(object);}


/***/ },
/* 9 */
/***/ function(module, exports) {

	
	var __cov_76qMweE2PJIyLW03VErg6w = (Function('return this'))();
	if (!__cov_76qMweE2PJIyLW03VErg6w.__coverage__) { __cov_76qMweE2PJIyLW03VErg6w.__coverage__ = {}; }
	__cov_76qMweE2PJIyLW03VErg6w = __cov_76qMweE2PJIyLW03VErg6w.__coverage__;
	if (!(__cov_76qMweE2PJIyLW03VErg6w['/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/_events/delegatelistener.js'])) {
	   __cov_76qMweE2PJIyLW03VErg6w['/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/_events/delegatelistener.js'] = {"path":"/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/_events/delegatelistener.js","s":{},"b":{},"f":{},"fnMap":{},"statementMap":{},"branchMap":{},"code":["export default function(object, name, path, callback, context) {","\tconst key = path.pop(),","\t\tinfo = d;//.get","\tif(key) {","\t\tonChange(object, key, function(evt) {","\t\t\tundelegateListener(evt.previousValue, name, path, callback, context);","\t\t\tdelegateListener(evt.value, name, path, callback, context);","\t\t});","\t} else {","\t\taddListener(object, name, callback, context);","\t}","}",""]};
	}
	__cov_76qMweE2PJIyLW03VErg6w = __cov_76qMweE2PJIyLW03VErg6w['/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/_events/delegatelistener.js'];



/***/ },
/* 10 */
/***/ function(module, exports) {

	
	var __cov_syU1UMWBu0DKpvwRwbTgTg = (Function('return this'))();
	if (!__cov_syU1UMWBu0DKpvwRwbTgTg.__coverage__) { __cov_syU1UMWBu0DKpvwRwbTgTg.__coverage__ = {}; }
	__cov_syU1UMWBu0DKpvwRwbTgTg = __cov_syU1UMWBu0DKpvwRwbTgTg.__coverage__;
	if (!(__cov_syU1UMWBu0DKpvwRwbTgTg['/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/array.js'])) {
	   __cov_syU1UMWBu0DKpvwRwbTgTg['/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/array.js'] = {"path":"/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/array.js","s":{},"b":{},"f":{},"fnMap":{},"statementMap":{},"branchMap":{},"code":["export default 1;",""]};
	}
	__cov_syU1UMWBu0DKpvwRwbTgTg = __cov_syU1UMWBu0DKpvwRwbTgTg['/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/array.js'];



/***/ },
/* 11 */
/***/ function(module, exports) {

	
	var __cov_x9C5JasxkXpT6gsqCJKh0w = (Function('return this'))();
	if (!__cov_x9C5JasxkXpT6gsqCJKh0w.__coverage__) { __cov_x9C5JasxkXpT6gsqCJKh0w.__coverage__ = {}; }
	__cov_x9C5JasxkXpT6gsqCJKh0w = __cov_x9C5JasxkXpT6gsqCJKh0w.__coverage__;
	if (!(__cov_x9C5JasxkXpT6gsqCJKh0w['/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/binders.js'])) {
	   __cov_x9C5JasxkXpT6gsqCJKh0w['/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/binders.js'] = {"path":"/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/binders.js","s":{},"b":{},"f":{},"fnMap":{},"statementMap":{},"branchMap":{},"code":["export default 1;",""]};
	}
	__cov_x9C5JasxkXpT6gsqCJKh0w = __cov_x9C5JasxkXpT6gsqCJKh0w['/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/binders.js'];



/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	
	var __cov_Ykp3_NSaz9bTHOn$JdspFA = (Function('return this'))();
	if (!__cov_Ykp3_NSaz9bTHOn$JdspFA.__coverage__) { __cov_Ykp3_NSaz9bTHOn$JdspFA.__coverage__ = {}; }
	__cov_Ykp3_NSaz9bTHOn$JdspFA = __cov_Ykp3_NSaz9bTHOn$JdspFA.__coverage__;
	if (!(__cov_Ykp3_NSaz9bTHOn$JdspFA['/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/index.js'])) {
	   __cov_Ykp3_NSaz9bTHOn$JdspFA['/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/index.js'] = {"path":"/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/index.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0},"b":{},"f":{},"fnMap":{},"statementMap":{"1":{"start":{"line":1,"column":22},"end":{"line":null,"column":null}},"2":{"start":{"line":2,"column":27},"end":{"line":null,"column":null}},"3":{"start":{"line":3,"column":28},"end":{"line":null,"column":null}},"4":{"start":{"line":4,"column":18},"end":{"line":null,"column":null}},"5":{"start":{"line":5,"column":20},"end":{"line":null,"column":null}},"6":{"start":{"line":7,"column":0},"end":{"line":null,"column":null}},"7":{"start":{"line":8,"column":0},"end":{"line":null,"column":null}},"8":{"start":{"line":9,"column":0},"end":{"line":null,"column":null}},"9":{"start":{"line":10,"column":0},"end":{"line":null,"column":null}},"10":{"start":{"line":12,"column":15},"end":{"line":null,"column":null}}},"branchMap":{},"code":["import Matreshka from './matreshka';","import MatreshkaArray from './array';","import MatreshkaObject from './object';","import Class from './class';","import binders from './binders';","","Matreshka.Array = MatreshkaArray;","Matreshka.Object = MatreshkaObject;","Matreshka.Class = Class;","Matreshka.binders = binders;","","export default Matreshka;",""]};
	}
	__cov_Ykp3_NSaz9bTHOn$JdspFA = __cov_Ykp3_NSaz9bTHOn$JdspFA['/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/index.js'];
	__cov_Ykp3_NSaz9bTHOn$JdspFA.s['1']++;var Matreshka=__webpack_require__(13);__cov_Ykp3_NSaz9bTHOn$JdspFA.s['2']++;var MatreshkaArray=__webpack_require__(10);__cov_Ykp3_NSaz9bTHOn$JdspFA.s['3']++;var MatreshkaObject=__webpack_require__(14);__cov_Ykp3_NSaz9bTHOn$JdspFA.s['4']++;var Class=__webpack_require__(3);__cov_Ykp3_NSaz9bTHOn$JdspFA.s['5']++;var binders=__webpack_require__(11);__cov_Ykp3_NSaz9bTHOn$JdspFA.s['6']++;Matreshka.Array=MatreshkaArray;__cov_Ykp3_NSaz9bTHOn$JdspFA.s['7']++;Matreshka.Object=MatreshkaObject;__cov_Ykp3_NSaz9bTHOn$JdspFA.s['8']++;Matreshka.Class=Class;__cov_Ykp3_NSaz9bTHOn$JdspFA.s['9']++;Matreshka.binders=binders;__cov_Ykp3_NSaz9bTHOn$JdspFA.s['10']++;module.exports=Matreshka;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	
	var __cov_AWFUErlNdZjBC5bpdPDd3w = (Function('return this'))();
	if (!__cov_AWFUErlNdZjBC5bpdPDd3w.__coverage__) { __cov_AWFUErlNdZjBC5bpdPDd3w.__coverage__ = {}; }
	__cov_AWFUErlNdZjBC5bpdPDd3w = __cov_AWFUErlNdZjBC5bpdPDd3w.__coverage__;
	if (!(__cov_AWFUErlNdZjBC5bpdPDd3w['/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/matreshka.js'])) {
	   __cov_AWFUErlNdZjBC5bpdPDd3w['/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/matreshka.js'] = {"path":"/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/matreshka.js","s":{"1":0,"2":0,"3":0},"b":{},"f":{},"fnMap":{},"statementMap":{"1":{"start":{"line":1,"column":19},"end":{"line":null,"column":null}},"2":{"start":{"line":2,"column":18},"end":{"line":null,"column":null}},"3":{"start":{"line":4,"column":15},"end":{"line":null,"column":null}}},"branchMap":{},"code":["import extend from './extend';","import Class from './class';","","export default Class({","\t// instance properies and methods","","}, {","\t// static properties and methods","\textend","});",""]};
	}
	__cov_AWFUErlNdZjBC5bpdPDd3w = __cov_AWFUErlNdZjBC5bpdPDd3w['/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/matreshka.js'];
	__cov_AWFUErlNdZjBC5bpdPDd3w.s['1']++;var extend=__webpack_require__(4);__cov_AWFUErlNdZjBC5bpdPDd3w.s['2']++;var Class=__webpack_require__(3);__cov_AWFUErlNdZjBC5bpdPDd3w.s['3']++;module.exports=Class({},{extend});


/***/ },
/* 14 */
/***/ function(module, exports) {

	
	var __cov_o3J27vFLwEO3ZErnQciUkg = (Function('return this'))();
	if (!__cov_o3J27vFLwEO3ZErnQciUkg.__coverage__) { __cov_o3J27vFLwEO3ZErnQciUkg.__coverage__ = {}; }
	__cov_o3J27vFLwEO3ZErnQciUkg = __cov_o3J27vFLwEO3ZErnQciUkg.__coverage__;
	if (!(__cov_o3J27vFLwEO3ZErnQciUkg['/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/object.js'])) {
	   __cov_o3J27vFLwEO3ZErnQciUkg['/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/object.js'] = {"path":"/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/object.js","s":{},"b":{},"f":{},"fnMap":{},"statementMap":{},"branchMap":{},"code":["export default 1;",""]};
	}
	__cov_o3J27vFLwEO3ZErnQciUkg = __cov_o3J27vFLwEO3ZErnQciUkg['/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/object.js'];



/***/ },
/* 15 */
/***/ function(module, exports) {

	
	var __cov_YVM_Bhjrq82t9C99R6vIAw = (Function('return this'))();
	if (!__cov_YVM_Bhjrq82t9C99R6vIAw.__coverage__) { __cov_YVM_Bhjrq82t9C99R6vIAw.__coverage__ = {}; }
	__cov_YVM_Bhjrq82t9C99R6vIAw = __cov_YVM_Bhjrq82t9C99R6vIAw.__coverage__;
	if (!(__cov_YVM_Bhjrq82t9C99R6vIAw['/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/on.js'])) {
	   __cov_YVM_Bhjrq82t9C99R6vIAw['/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/on.js'] = {"path":"/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/on.js","s":{},"b":{},"f":{},"fnMap":{},"statementMap":{},"branchMap":{},"code":["var x = 5;",""]};
	}
	__cov_YVM_Bhjrq82t9C99R6vIAw = __cov_YVM_Bhjrq82t9C99R6vIAw['/home/finom/Dropbox/Public/sync/my/github/matreshka_refactoring/src/on.js'];



/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map