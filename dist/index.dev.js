var Dragee = (function (exports) {
	'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var check = function (it) {
	  return it && it.Math == Math && it;
	};

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global_1 =
	  // eslint-disable-next-line es-x/no-global-this -- safe
	  check(typeof globalThis == 'object' && globalThis) ||
	  check(typeof window == 'object' && window) ||
	  // eslint-disable-next-line no-restricted-globals -- safe
	  check(typeof self == 'object' && self) ||
	  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
	  // eslint-disable-next-line no-new-func -- fallback
	  (function () { return this; })() || Function('return this')();

	var fails = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};

	// Detect IE8's incomplete defineProperty implementation
	var descriptors = !fails(function () {
	  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
	  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
	});

	var functionBindNative = !fails(function () {
	  // eslint-disable-next-line es-x/no-function-prototype-bind -- safe
	  var test = (function () { /* empty */ }).bind();
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return typeof test != 'function' || test.hasOwnProperty('prototype');
	});

	var call$1 = Function.prototype.call;

	var functionCall = functionBindNative ? call$1.bind(call$1) : function () {
	  return call$1.apply(call$1, arguments);
	};

	var $propertyIsEnumerable$1 = {}.propertyIsEnumerable;
	// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
	var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

	// Nashorn ~ JDK8 bug
	var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable$1.call({ 1: 2 }, 1);

	// `Object.prototype.propertyIsEnumerable` method implementation
	// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
	var f$5 = NASHORN_BUG ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor$1(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : $propertyIsEnumerable$1;

	var objectPropertyIsEnumerable = {
		f: f$5
	};

	var createPropertyDescriptor = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var FunctionPrototype$1 = Function.prototype;
	var bind$1 = FunctionPrototype$1.bind;
	var call = FunctionPrototype$1.call;
	var uncurryThis = functionBindNative && bind$1.bind(call, call);

	var functionUncurryThis = functionBindNative ? function (fn) {
	  return fn && uncurryThis(fn);
	} : function (fn) {
	  return fn && function () {
	    return call.apply(fn, arguments);
	  };
	};

	var toString$1 = functionUncurryThis({}.toString);
	var stringSlice$1 = functionUncurryThis(''.slice);

	var classofRaw = function (it) {
	  return stringSlice$1(toString$1(it), 8, -1);
	};

	var Object$5 = global_1.Object;
	var split = functionUncurryThis(''.split);

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var indexedObject = fails(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins -- safe
	  return !Object$5('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classofRaw(it) == 'String' ? split(it, '') : Object$5(it);
	} : Object$5;

	var TypeError$9 = global_1.TypeError;

	// `RequireObjectCoercible` abstract operation
	// https://tc39.es/ecma262/#sec-requireobjectcoercible
	var requireObjectCoercible = function (it) {
	  if (it == undefined) throw TypeError$9("Can't call method on " + it);
	  return it;
	};

	// toObject with fallback for non-array-like ES3 strings



	var toIndexedObject = function (it) {
	  return indexedObject(requireObjectCoercible(it));
	};

	// `IsCallable` abstract operation
	// https://tc39.es/ecma262/#sec-iscallable
	var isCallable = function (argument) {
	  return typeof argument == 'function';
	};

	var isObject = function (it) {
	  return typeof it == 'object' ? it !== null : isCallable(it);
	};

	var aFunction = function (argument) {
	  return isCallable(argument) ? argument : undefined;
	};

	var getBuiltIn = function (namespace, method) {
	  return arguments.length < 2 ? aFunction(global_1[namespace]) : global_1[namespace] && global_1[namespace][method];
	};

	var objectIsPrototypeOf = functionUncurryThis({}.isPrototypeOf);

	var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

	var process$1 = global_1.process;
	var Deno = global_1.Deno;
	var versions = process$1 && process$1.versions || Deno && Deno.version;
	var v8 = versions && versions.v8;
	var match, version;

	if (v8) {
	  match = v8.split('.');
	  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
	  // but their correct versions are not interesting for us
	  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
	}

	// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
	// so check `userAgent` even if `.v8` exists, but 0
	if (!version && engineUserAgent) {
	  match = engineUserAgent.match(/Edge\/(\d+)/);
	  if (!match || match[1] >= 74) {
	    match = engineUserAgent.match(/Chrome\/(\d+)/);
	    if (match) version = +match[1];
	  }
	}

	var engineV8Version = version;

	/* eslint-disable es-x/no-symbol -- required for testing */



	// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- required for testing
	var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
	  var symbol = Symbol();
	  // Chrome 38 Symbol has incorrect toString conversion
	  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
	  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
	    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
	    !Symbol.sham && engineV8Version && engineV8Version < 41;
	});

	/* eslint-disable es-x/no-symbol -- required for testing */


	var useSymbolAsUid = nativeSymbol
	  && !Symbol.sham
	  && typeof Symbol.iterator == 'symbol';

	var Object$4 = global_1.Object;

	var isSymbol = useSymbolAsUid ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  var $Symbol = getBuiltIn('Symbol');
	  return isCallable($Symbol) && objectIsPrototypeOf($Symbol.prototype, Object$4(it));
	};

	var String$4 = global_1.String;

	var tryToString = function (argument) {
	  try {
	    return String$4(argument);
	  } catch (error) {
	    return 'Object';
	  }
	};

	var TypeError$8 = global_1.TypeError;

	// `Assert: IsCallable(argument) is true`
	var aCallable = function (argument) {
	  if (isCallable(argument)) return argument;
	  throw TypeError$8(tryToString(argument) + ' is not a function');
	};

	// `GetMethod` abstract operation
	// https://tc39.es/ecma262/#sec-getmethod
	var getMethod = function (V, P) {
	  var func = V[P];
	  return func == null ? undefined : aCallable(func);
	};

	var TypeError$7 = global_1.TypeError;

	// `OrdinaryToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-ordinarytoprimitive
	var ordinaryToPrimitive = function (input, pref) {
	  var fn, val;
	  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = functionCall(fn, input))) return val;
	  if (isCallable(fn = input.valueOf) && !isObject(val = functionCall(fn, input))) return val;
	  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = functionCall(fn, input))) return val;
	  throw TypeError$7("Can't convert object to primitive value");
	};

	// eslint-disable-next-line es-x/no-object-defineproperty -- safe
	var defineProperty$2 = Object.defineProperty;

	var setGlobal = function (key, value) {
	  try {
	    defineProperty$2(global_1, key, { value: value, configurable: true, writable: true });
	  } catch (error) {
	    global_1[key] = value;
	  } return value;
	};

	var SHARED = '__core-js_shared__';
	var store$1 = global_1[SHARED] || setGlobal(SHARED, {});

	var sharedStore = store$1;

	var shared = createCommonjsModule(function (module) {
	(module.exports = function (key, value) {
	  return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: '3.22.4',
	  mode: 'global',
	  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
	  license: 'https://github.com/zloirock/core-js/blob/v3.22.4/LICENSE',
	  source: 'https://github.com/zloirock/core-js'
	});
	});

	var Object$3 = global_1.Object;

	// `ToObject` abstract operation
	// https://tc39.es/ecma262/#sec-toobject
	var toObject = function (argument) {
	  return Object$3(requireObjectCoercible(argument));
	};

	var hasOwnProperty = functionUncurryThis({}.hasOwnProperty);

	// `HasOwnProperty` abstract operation
	// https://tc39.es/ecma262/#sec-hasownproperty
	// eslint-disable-next-line es-x/no-object-hasown -- safe
	var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
	  return hasOwnProperty(toObject(it), key);
	};

	var id = 0;
	var postfix = Math.random();
	var toString = functionUncurryThis(1.0.toString);

	var uid = function (key) {
	  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
	};

	var WellKnownSymbolsStore = shared('wks');
	var Symbol$1 = global_1.Symbol;
	var symbolFor = Symbol$1 && Symbol$1['for'];
	var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;

	var wellKnownSymbol = function (name) {
	  if (!hasOwnProperty_1(WellKnownSymbolsStore, name) || !(nativeSymbol || typeof WellKnownSymbolsStore[name] == 'string')) {
	    var description = 'Symbol.' + name;
	    if (nativeSymbol && hasOwnProperty_1(Symbol$1, name)) {
	      WellKnownSymbolsStore[name] = Symbol$1[name];
	    } else if (useSymbolAsUid && symbolFor) {
	      WellKnownSymbolsStore[name] = symbolFor(description);
	    } else {
	      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
	    }
	  } return WellKnownSymbolsStore[name];
	};

	var TypeError$6 = global_1.TypeError;
	var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

	// `ToPrimitive` abstract operation
	// https://tc39.es/ecma262/#sec-toprimitive
	var toPrimitive = function (input, pref) {
	  if (!isObject(input) || isSymbol(input)) return input;
	  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
	  var result;
	  if (exoticToPrim) {
	    if (pref === undefined) pref = 'default';
	    result = functionCall(exoticToPrim, input, pref);
	    if (!isObject(result) || isSymbol(result)) return result;
	    throw TypeError$6("Can't convert object to primitive value");
	  }
	  if (pref === undefined) pref = 'number';
	  return ordinaryToPrimitive(input, pref);
	};

	// `ToPropertyKey` abstract operation
	// https://tc39.es/ecma262/#sec-topropertykey
	var toPropertyKey = function (argument) {
	  var key = toPrimitive(argument, 'string');
	  return isSymbol(key) ? key : key + '';
	};

	var document$1 = global_1.document;
	// typeof document.createElement is 'object' in old IE
	var EXISTS$1 = isObject(document$1) && isObject(document$1.createElement);

	var documentCreateElement = function (it) {
	  return EXISTS$1 ? document$1.createElement(it) : {};
	};

	// Thanks to IE8 for its funny defineProperty
	var ie8DomDefine = !descriptors && !fails(function () {
	  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
	  return Object.defineProperty(documentCreateElement('div'), 'a', {
	    get: function () { return 7; }
	  }).a != 7;
	});

	// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
	var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
	var f$4 = descriptors ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject(O);
	  P = toPropertyKey(P);
	  if (ie8DomDefine) try {
	    return $getOwnPropertyDescriptor$1(O, P);
	  } catch (error) { /* empty */ }
	  if (hasOwnProperty_1(O, P)) return createPropertyDescriptor(!functionCall(objectPropertyIsEnumerable.f, O, P), O[P]);
	};

	var objectGetOwnPropertyDescriptor = {
		f: f$4
	};

	// V8 ~ Chrome 36-
	// https://bugs.chromium.org/p/v8/issues/detail?id=3334
	var v8PrototypeDefineBug = descriptors && fails(function () {
	  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
	  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
	    value: 42,
	    writable: false
	  }).prototype != 42;
	});

	var String$3 = global_1.String;
	var TypeError$5 = global_1.TypeError;

	// `Assert: Type(argument) is Object`
	var anObject = function (argument) {
	  if (isObject(argument)) return argument;
	  throw TypeError$5(String$3(argument) + ' is not an object');
	};

	var TypeError$4 = global_1.TypeError;
	// eslint-disable-next-line es-x/no-object-defineproperty -- safe
	var $defineProperty = Object.defineProperty;
	// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
	var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var ENUMERABLE = 'enumerable';
	var CONFIGURABLE$1 = 'configurable';
	var WRITABLE = 'writable';

	// `Object.defineProperty` method
	// https://tc39.es/ecma262/#sec-object.defineproperty
	var f$3 = descriptors ? v8PrototypeDefineBug ? function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPropertyKey(P);
	  anObject(Attributes);
	  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
	    var current = $getOwnPropertyDescriptor(O, P);
	    if (current && current[WRITABLE]) {
	      O[P] = Attributes.value;
	      Attributes = {
	        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
	        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
	        writable: false
	      };
	    }
	  } return $defineProperty(O, P, Attributes);
	} : $defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPropertyKey(P);
	  anObject(Attributes);
	  if (ie8DomDefine) try {
	    return $defineProperty(O, P, Attributes);
	  } catch (error) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError$4('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var objectDefineProperty = {
		f: f$3
	};

	var createNonEnumerableProperty = descriptors ? function (object, key, value) {
	  return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var FunctionPrototype = Function.prototype;
	// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
	var getDescriptor = descriptors && Object.getOwnPropertyDescriptor;

	var EXISTS = hasOwnProperty_1(FunctionPrototype, 'name');
	// additional protection from minified / mangled / dropped function names
	var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
	var CONFIGURABLE = EXISTS && (!descriptors || (descriptors && getDescriptor(FunctionPrototype, 'name').configurable));

	var functionName = {
	  EXISTS: EXISTS,
	  PROPER: PROPER,
	  CONFIGURABLE: CONFIGURABLE
	};

	var functionToString = functionUncurryThis(Function.toString);

	// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
	if (!isCallable(sharedStore.inspectSource)) {
	  sharedStore.inspectSource = function (it) {
	    return functionToString(it);
	  };
	}

	var inspectSource = sharedStore.inspectSource;

	var WeakMap$2 = global_1.WeakMap;

	var nativeWeakMap = isCallable(WeakMap$2) && /native code/.test(inspectSource(WeakMap$2));

	var keys = shared('keys');

	var sharedKey = function (key) {
	  return keys[key] || (keys[key] = uid(key));
	};

	var hiddenKeys$1 = {};

	var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
	var TypeError$3 = global_1.TypeError;
	var WeakMap$1 = global_1.WeakMap;
	var set, get, has;

	var enforce = function (it) {
	  return has(it) ? get(it) : set(it, {});
	};

	var getterFor = function (TYPE) {
	  return function (it) {
	    var state;
	    if (!isObject(it) || (state = get(it)).type !== TYPE) {
	      throw TypeError$3('Incompatible receiver, ' + TYPE + ' required');
	    } return state;
	  };
	};

	if (nativeWeakMap || sharedStore.state) {
	  var store = sharedStore.state || (sharedStore.state = new WeakMap$1());
	  var wmget = functionUncurryThis(store.get);
	  var wmhas = functionUncurryThis(store.has);
	  var wmset = functionUncurryThis(store.set);
	  set = function (it, metadata) {
	    if (wmhas(store, it)) throw new TypeError$3(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    wmset(store, it, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return wmget(store, it) || {};
	  };
	  has = function (it) {
	    return wmhas(store, it);
	  };
	} else {
	  var STATE = sharedKey('state');
	  hiddenKeys$1[STATE] = true;
	  set = function (it, metadata) {
	    if (hasOwnProperty_1(it, STATE)) throw new TypeError$3(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    createNonEnumerableProperty(it, STATE, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return hasOwnProperty_1(it, STATE) ? it[STATE] : {};
	  };
	  has = function (it) {
	    return hasOwnProperty_1(it, STATE);
	  };
	}

	var internalState = {
	  set: set,
	  get: get,
	  has: has,
	  enforce: enforce,
	  getterFor: getterFor
	};

	var makeBuiltIn_1 = createCommonjsModule(function (module) {
	var defineProperty = objectDefineProperty.f;
	var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;



	var enforceInternalState = internalState.enforce;
	var getInternalState = internalState.get;

	var CONFIGURABLE_LENGTH = !fails(function () {
	  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
	});

	var TEMPLATE = String(String).split('String');

	var makeBuiltIn = module.exports = function (value, name, options) {
	  if (String(name).slice(0, 7) === 'Symbol(') {
	    name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
	  }
	  if (options && options.getter) name = 'get ' + name;
	  if (options && options.setter) name = 'set ' + name;
	  if (!hasOwnProperty_1(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
	    defineProperty(value, 'name', { value: name, configurable: true });
	  }
	  if (CONFIGURABLE_LENGTH && options && hasOwnProperty_1(options, 'arity') && value.length !== options.arity) {
	    defineProperty(value, 'length', { value: options.arity });
	  }
	  var state = enforceInternalState(value);
	  if (!hasOwnProperty_1(state, 'source')) {
	    state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
	  } return value;
	};

	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	// eslint-disable-next-line no-extend-native -- required
	Function.prototype.toString = makeBuiltIn(function toString() {
	  return isCallable(this) && getInternalState(this).source || inspectSource(this);
	}, 'toString');
	});

	var defineBuiltIn = function (O, key, value, options) {
	  var unsafe = options ? !!options.unsafe : false;
	  var simple = options ? !!options.enumerable : false;
	  var noTargetGet = options ? !!options.noTargetGet : false;
	  var name = options && options.name !== undefined ? options.name : key;
	  if (isCallable(value)) makeBuiltIn_1(value, name, options);
	  if (O === global_1) {
	    if (simple) O[key] = value;
	    else setGlobal(key, value);
	    return O;
	  } else if (!unsafe) {
	    delete O[key];
	  } else if (!noTargetGet && O[key]) {
	    simple = true;
	  }
	  if (simple) O[key] = value;
	  else createNonEnumerableProperty(O, key, value);
	  return O;
	};

	var ceil = Math.ceil;
	var floor = Math.floor;

	// `ToIntegerOrInfinity` abstract operation
	// https://tc39.es/ecma262/#sec-tointegerorinfinity
	var toIntegerOrInfinity = function (argument) {
	  var number = +argument;
	  // eslint-disable-next-line no-self-compare -- safe
	  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
	};

	var max = Math.max;
	var min$1 = Math.min;

	// Helper for a popular repeating case of the spec:
	// Let integer be ? ToInteger(index).
	// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
	var toAbsoluteIndex = function (index, length) {
	  var integer = toIntegerOrInfinity(index);
	  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
	};

	var min = Math.min;

	// `ToLength` abstract operation
	// https://tc39.es/ecma262/#sec-tolength
	var toLength = function (argument) {
	  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
	};

	// `LengthOfArrayLike` abstract operation
	// https://tc39.es/ecma262/#sec-lengthofarraylike
	var lengthOfArrayLike = function (obj) {
	  return toLength(obj.length);
	};

	// `Array.prototype.{ indexOf, includes }` methods implementation
	var createMethod$2 = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject($this);
	    var length = lengthOfArrayLike(O);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare -- NaN check
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare -- NaN check
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) {
	      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	var arrayIncludes = {
	  // `Array.prototype.includes` method
	  // https://tc39.es/ecma262/#sec-array.prototype.includes
	  includes: createMethod$2(true),
	  // `Array.prototype.indexOf` method
	  // https://tc39.es/ecma262/#sec-array.prototype.indexof
	  indexOf: createMethod$2(false)
	};

	var indexOf = arrayIncludes.indexOf;


	var push$1 = functionUncurryThis([].push);

	var objectKeysInternal = function (object, names) {
	  var O = toIndexedObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) !hasOwnProperty_1(hiddenKeys$1, key) && hasOwnProperty_1(O, key) && push$1(result, key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (hasOwnProperty_1(O, key = names[i++])) {
	    ~indexOf(result, key) || push$1(result, key);
	  }
	  return result;
	};

	// IE8- don't enum bug keys
	var enumBugKeys = [
	  'constructor',
	  'hasOwnProperty',
	  'isPrototypeOf',
	  'propertyIsEnumerable',
	  'toLocaleString',
	  'toString',
	  'valueOf'
	];

	var hiddenKeys = enumBugKeys.concat('length', 'prototype');

	// `Object.getOwnPropertyNames` method
	// https://tc39.es/ecma262/#sec-object.getownpropertynames
	// eslint-disable-next-line es-x/no-object-getownpropertynames -- safe
	var f$2 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return objectKeysInternal(O, hiddenKeys);
	};

	var objectGetOwnPropertyNames = {
		f: f$2
	};

	// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- safe
	var f$1 = Object.getOwnPropertySymbols;

	var objectGetOwnPropertySymbols = {
		f: f$1
	};

	var concat$1 = functionUncurryThis([].concat);

	// all object keys, includes non-enumerable and symbols
	var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
	  var keys = objectGetOwnPropertyNames.f(anObject(it));
	  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
	  return getOwnPropertySymbols ? concat$1(keys, getOwnPropertySymbols(it)) : keys;
	};

	var copyConstructorProperties = function (target, source, exceptions) {
	  var keys = ownKeys(source);
	  var defineProperty = objectDefineProperty.f;
	  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (!hasOwnProperty_1(target, key) && !(exceptions && hasOwnProperty_1(exceptions, key))) {
	      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
	    }
	  }
	};

	var replacement = /#|\.prototype\./;

	var isForced = function (feature, detection) {
	  var value = data[normalize(feature)];
	  return value == POLYFILL ? true
	    : value == NATIVE ? false
	    : isCallable(detection) ? fails(detection)
	    : !!detection;
	};

	var normalize = isForced.normalize = function (string) {
	  return String(string).replace(replacement, '.').toLowerCase();
	};

	var data = isForced.data = {};
	var NATIVE = isForced.NATIVE = 'N';
	var POLYFILL = isForced.POLYFILL = 'P';

	var isForced_1 = isForced;

	var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;






	/*
	  options.target      - name of the target object
	  options.global      - target is the global object
	  options.stat        - export as static methods of target
	  options.proto       - export as prototype methods of target
	  options.real        - real prototype method for the `pure` version
	  options.forced      - export even if the native feature is available
	  options.bind        - bind methods to the target, required for the `pure` version
	  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
	  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
	  options.sham        - add a flag to not completely full polyfills
	  options.enumerable  - export as enumerable property
	  options.noTargetGet - prevent calling a getter on target
	  options.name        - the .name of the function if it does not match the key
	*/
	var _export = function (options, source) {
	  var TARGET = options.target;
	  var GLOBAL = options.global;
	  var STATIC = options.stat;
	  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
	  if (GLOBAL) {
	    target = global_1;
	  } else if (STATIC) {
	    target = global_1[TARGET] || setGlobal(TARGET, {});
	  } else {
	    target = (global_1[TARGET] || {}).prototype;
	  }
	  if (target) for (key in source) {
	    sourceProperty = source[key];
	    if (options.noTargetGet) {
	      descriptor = getOwnPropertyDescriptor(target, key);
	      targetProperty = descriptor && descriptor.value;
	    } else targetProperty = target[key];
	    FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
	    // contained in target
	    if (!FORCED && targetProperty !== undefined) {
	      if (typeof sourceProperty == typeof targetProperty) continue;
	      copyConstructorProperties(sourceProperty, targetProperty);
	    }
	    // add a flag to not completely full polyfills
	    if (options.sham || (targetProperty && targetProperty.sham)) {
	      createNonEnumerableProperty(sourceProperty, 'sham', true);
	    }
	    defineBuiltIn(target, key, sourceProperty, options);
	  }
	};

	var bind = functionUncurryThis(functionUncurryThis.bind);

	// optional / simple context binding
	var functionBindContext = function (fn, that) {
	  aCallable(fn);
	  return that === undefined ? fn : functionBindNative ? bind(fn, that) : function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};

	var iteratorClose = function (iterator, kind, value) {
	  var innerResult, innerError;
	  anObject(iterator);
	  try {
	    innerResult = getMethod(iterator, 'return');
	    if (!innerResult) {
	      if (kind === 'throw') throw value;
	      return value;
	    }
	    innerResult = functionCall(innerResult, iterator);
	  } catch (error) {
	    innerError = true;
	    innerResult = error;
	  }
	  if (kind === 'throw') throw value;
	  if (innerError) throw innerResult;
	  anObject(innerResult);
	  return value;
	};

	// call something on iterator step with safe closing on error
	var callWithSafeIterationClosing = function (iterator, fn, value, ENTRIES) {
	  try {
	    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
	  } catch (error) {
	    iteratorClose(iterator, 'throw', error);
	  }
	};

	var iterators = {};

	var ITERATOR$4 = wellKnownSymbol('iterator');
	var ArrayPrototype = Array.prototype;

	// check on default Array iterator
	var isArrayIteratorMethod = function (it) {
	  return it !== undefined && (iterators.Array === it || ArrayPrototype[ITERATOR$4] === it);
	};

	var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');
	var test = {};

	test[TO_STRING_TAG$2] = 'z';

	var toStringTagSupport = String(test) === '[object z]';

	var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');
	var Object$2 = global_1.Object;

	// ES3 wrong here
	var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (error) { /* empty */ }
	};

	// getting tag from ES6+ `Object.prototype.toString`
	var classof = toStringTagSupport ? classofRaw : function (it) {
	  var O, tag, result;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (tag = tryGet(O = Object$2(it), TO_STRING_TAG$1)) == 'string' ? tag
	    // builtinTag case
	    : CORRECT_ARGUMENTS ? classofRaw(O)
	    // ES3 arguments fallback
	    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
	};

	var noop = function () { /* empty */ };
	var empty = [];
	var construct = getBuiltIn('Reflect', 'construct');
	var constructorRegExp = /^\s*(?:class|function)\b/;
	var exec = functionUncurryThis(constructorRegExp.exec);
	var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

	var isConstructorModern = function isConstructor(argument) {
	  if (!isCallable(argument)) return false;
	  try {
	    construct(noop, empty, argument);
	    return true;
	  } catch (error) {
	    return false;
	  }
	};

	var isConstructorLegacy = function isConstructor(argument) {
	  if (!isCallable(argument)) return false;
	  switch (classof(argument)) {
	    case 'AsyncFunction':
	    case 'GeneratorFunction':
	    case 'AsyncGeneratorFunction': return false;
	  }
	  try {
	    // we can't check .prototype since constructors produced by .bind haven't it
	    // `Function#toString` throws on some built-it function in some legacy engines
	    // (for example, `DOMQuad` and similar in FF41-)
	    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
	  } catch (error) {
	    return true;
	  }
	};

	isConstructorLegacy.sham = true;

	// `IsConstructor` abstract operation
	// https://tc39.es/ecma262/#sec-isconstructor
	var isConstructor = !construct || fails(function () {
	  var called;
	  return isConstructorModern(isConstructorModern.call)
	    || !isConstructorModern(Object)
	    || !isConstructorModern(function () { called = true; })
	    || called;
	}) ? isConstructorLegacy : isConstructorModern;

	var createProperty = function (object, key, value) {
	  var propertyKey = toPropertyKey(key);
	  if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));
	  else object[propertyKey] = value;
	};

	var ITERATOR$3 = wellKnownSymbol('iterator');

	var getIteratorMethod = function (it) {
	  if (it != undefined) return getMethod(it, ITERATOR$3)
	    || getMethod(it, '@@iterator')
	    || iterators[classof(it)];
	};

	var TypeError$2 = global_1.TypeError;

	var getIterator = function (argument, usingIterator) {
	  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
	  if (aCallable(iteratorMethod)) return anObject(functionCall(iteratorMethod, argument));
	  throw TypeError$2(tryToString(argument) + ' is not iterable');
	};

	var Array$1 = global_1.Array;

	// `Array.from` method implementation
	// https://tc39.es/ecma262/#sec-array.from
	var arrayFrom = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
	  var O = toObject(arrayLike);
	  var IS_CONSTRUCTOR = isConstructor(this);
	  var argumentsLength = arguments.length;
	  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
	  var mapping = mapfn !== undefined;
	  if (mapping) mapfn = functionBindContext(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
	  var iteratorMethod = getIteratorMethod(O);
	  var index = 0;
	  var length, result, step, iterator, next, value;
	  // if the target is not iterable or it's an array with the default iterator - use a simple case
	  if (iteratorMethod && !(this == Array$1 && isArrayIteratorMethod(iteratorMethod))) {
	    iterator = getIterator(O, iteratorMethod);
	    next = iterator.next;
	    result = IS_CONSTRUCTOR ? new this() : [];
	    for (;!(step = functionCall(next, iterator)).done; index++) {
	      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
	      createProperty(result, index, value);
	    }
	  } else {
	    length = lengthOfArrayLike(O);
	    result = IS_CONSTRUCTOR ? new this(length) : Array$1(length);
	    for (;length > index; index++) {
	      value = mapping ? mapfn(O[index], index) : O[index];
	      createProperty(result, index, value);
	    }
	  }
	  result.length = index;
	  return result;
	};

	var ITERATOR$2 = wellKnownSymbol('iterator');
	var SAFE_CLOSING = false;

	try {
	  var called = 0;
	  var iteratorWithReturn = {
	    next: function () {
	      return { done: !!called++ };
	    },
	    'return': function () {
	      SAFE_CLOSING = true;
	    }
	  };
	  iteratorWithReturn[ITERATOR$2] = function () {
	    return this;
	  };
	  // eslint-disable-next-line es-x/no-array-from, no-throw-literal -- required for testing
	  Array.from(iteratorWithReturn, function () { throw 2; });
	} catch (error) { /* empty */ }

	var checkCorrectnessOfIteration = function (exec, SKIP_CLOSING) {
	  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
	  var ITERATION_SUPPORT = false;
	  try {
	    var object = {};
	    object[ITERATOR$2] = function () {
	      return {
	        next: function () {
	          return { done: ITERATION_SUPPORT = true };
	        }
	      };
	    };
	    exec(object);
	  } catch (error) { /* empty */ }
	  return ITERATION_SUPPORT;
	};

	var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
	  // eslint-disable-next-line es-x/no-array-from -- required for testing
	  Array.from(iterable);
	});

	// `Array.from` method
	// https://tc39.es/ecma262/#sec-array.from
	_export({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
	  from: arrayFrom
	});

	var String$2 = global_1.String;

	var toString_1 = function (argument) {
	  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
	  return String$2(argument);
	};

	var charAt$1 = functionUncurryThis(''.charAt);
	var charCodeAt = functionUncurryThis(''.charCodeAt);
	var stringSlice = functionUncurryThis(''.slice);

	var createMethod$1 = function (CONVERT_TO_STRING) {
	  return function ($this, pos) {
	    var S = toString_1(requireObjectCoercible($this));
	    var position = toIntegerOrInfinity(pos);
	    var size = S.length;
	    var first, second;
	    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
	    first = charCodeAt(S, position);
	    return first < 0xD800 || first > 0xDBFF || position + 1 === size
	      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
	        ? CONVERT_TO_STRING
	          ? charAt$1(S, position)
	          : first
	        : CONVERT_TO_STRING
	          ? stringSlice(S, position, position + 2)
	          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
	  };
	};

	var stringMultibyte = {
	  // `String.prototype.codePointAt` method
	  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
	  codeAt: createMethod$1(false),
	  // `String.prototype.at` method
	  // https://github.com/mathiasbynens/String.prototype.at
	  charAt: createMethod$1(true)
	};

	// `Object.keys` method
	// https://tc39.es/ecma262/#sec-object.keys
	// eslint-disable-next-line es-x/no-object-keys -- safe
	var objectKeys = Object.keys || function keys(O) {
	  return objectKeysInternal(O, enumBugKeys);
	};

	// `Object.defineProperties` method
	// https://tc39.es/ecma262/#sec-object.defineproperties
	// eslint-disable-next-line es-x/no-object-defineproperties -- safe
	var f = descriptors && !v8PrototypeDefineBug ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var props = toIndexedObject(Properties);
	  var keys = objectKeys(Properties);
	  var length = keys.length;
	  var index = 0;
	  var key;
	  while (length > index) objectDefineProperty.f(O, key = keys[index++], props[key]);
	  return O;
	};

	var objectDefineProperties = {
		f: f
	};

	var html = getBuiltIn('document', 'documentElement');

	/* global ActiveXObject -- old IE, WSH */








	var GT = '>';
	var LT = '<';
	var PROTOTYPE = 'prototype';
	var SCRIPT = 'script';
	var IE_PROTO$1 = sharedKey('IE_PROTO');

	var EmptyConstructor = function () { /* empty */ };

	var scriptTag = function (content) {
	  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
	};

	// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
	var NullProtoObjectViaActiveX = function (activeXDocument) {
	  activeXDocument.write(scriptTag(''));
	  activeXDocument.close();
	  var temp = activeXDocument.parentWindow.Object;
	  activeXDocument = null; // avoid memory leak
	  return temp;
	};

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var NullProtoObjectViaIFrame = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = documentCreateElement('iframe');
	  var JS = 'java' + SCRIPT + ':';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  html.appendChild(iframe);
	  // https://github.com/zloirock/core-js/issues/475
	  iframe.src = String(JS);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(scriptTag('document.F=Object'));
	  iframeDocument.close();
	  return iframeDocument.F;
	};

	// Check for document.domain and active x support
	// No need to use active x approach when document.domain is not set
	// see https://github.com/es-shims/es5-shim/issues/150
	// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
	// avoid IE GC bug
	var activeXDocument;
	var NullProtoObject = function () {
	  try {
	    activeXDocument = new ActiveXObject('htmlfile');
	  } catch (error) { /* ignore */ }
	  NullProtoObject = typeof document != 'undefined'
	    ? document.domain && activeXDocument
	      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
	      : NullProtoObjectViaIFrame()
	    : NullProtoObjectViaActiveX(activeXDocument); // WSH
	  var length = enumBugKeys.length;
	  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
	  return NullProtoObject();
	};

	hiddenKeys$1[IE_PROTO$1] = true;

	// `Object.create` method
	// https://tc39.es/ecma262/#sec-object.create
	// eslint-disable-next-line es-x/no-object-create -- safe
	var objectCreate = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    EmptyConstructor[PROTOTYPE] = anObject(O);
	    result = new EmptyConstructor();
	    EmptyConstructor[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO$1] = O;
	  } else result = NullProtoObject();
	  return Properties === undefined ? result : objectDefineProperties.f(result, Properties);
	};

	var correctPrototypeGetter = !fails(function () {
	  function F() { /* empty */ }
	  F.prototype.constructor = null;
	  // eslint-disable-next-line es-x/no-object-getprototypeof -- required for testing
	  return Object.getPrototypeOf(new F()) !== F.prototype;
	});

	var IE_PROTO = sharedKey('IE_PROTO');
	var Object$1 = global_1.Object;
	var ObjectPrototype = Object$1.prototype;

	// `Object.getPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.getprototypeof
	var objectGetPrototypeOf = correctPrototypeGetter ? Object$1.getPrototypeOf : function (O) {
	  var object = toObject(O);
	  if (hasOwnProperty_1(object, IE_PROTO)) return object[IE_PROTO];
	  var constructor = object.constructor;
	  if (isCallable(constructor) && object instanceof constructor) {
	    return constructor.prototype;
	  } return object instanceof Object$1 ? ObjectPrototype : null;
	};

	var ITERATOR$1 = wellKnownSymbol('iterator');
	var BUGGY_SAFARI_ITERATORS$1 = false;

	// `%IteratorPrototype%` object
	// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
	var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;

	/* eslint-disable es-x/no-array-prototype-keys -- safe */
	if ([].keys) {
	  arrayIterator = [].keys();
	  // Safari 8 has buggy iterators w/o `next`
	  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
	  else {
	    PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator));
	    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
	  }
	}

	var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$2 == undefined || fails(function () {
	  var test = {};
	  // FF44- legacy iterators case
	  return IteratorPrototype$2[ITERATOR$1].call(test) !== test;
	});

	if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

	// `%IteratorPrototype%[@@iterator]()` method
	// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
	if (!isCallable(IteratorPrototype$2[ITERATOR$1])) {
	  defineBuiltIn(IteratorPrototype$2, ITERATOR$1, function () {
	    return this;
	  });
	}

	var iteratorsCore = {
	  IteratorPrototype: IteratorPrototype$2,
	  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
	};

	var defineProperty$1 = objectDefineProperty.f;



	var TO_STRING_TAG = wellKnownSymbol('toStringTag');

	var setToStringTag = function (target, TAG, STATIC) {
	  if (target && !STATIC) target = target.prototype;
	  if (target && !hasOwnProperty_1(target, TO_STRING_TAG)) {
	    defineProperty$1(target, TO_STRING_TAG, { configurable: true, value: TAG });
	  }
	};

	var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;





	var returnThis$1 = function () { return this; };

	var createIteratorConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
	  var TO_STRING_TAG = NAME + ' Iterator';
	  IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
	  setToStringTag(IteratorConstructor, TO_STRING_TAG, false);
	  iterators[TO_STRING_TAG] = returnThis$1;
	  return IteratorConstructor;
	};

	var String$1 = global_1.String;
	var TypeError$1 = global_1.TypeError;

	var aPossiblePrototype = function (argument) {
	  if (typeof argument == 'object' || isCallable(argument)) return argument;
	  throw TypeError$1("Can't set " + String$1(argument) + ' as a prototype');
	};

	/* eslint-disable no-proto -- safe */




	// `Object.setPrototypeOf` method
	// https://tc39.es/ecma262/#sec-object.setprototypeof
	// Works with __proto__ only. Old v8 can't work with null proto objects.
	// eslint-disable-next-line es-x/no-object-setprototypeof -- safe
	var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
	  var CORRECT_SETTER = false;
	  var test = {};
	  var setter;
	  try {
	    // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
	    setter = functionUncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
	    setter(test, []);
	    CORRECT_SETTER = test instanceof Array;
	  } catch (error) { /* empty */ }
	  return function setPrototypeOf(O, proto) {
	    anObject(O);
	    aPossiblePrototype(proto);
	    if (CORRECT_SETTER) setter(O, proto);
	    else O.__proto__ = proto;
	    return O;
	  };
	}() : undefined);

	var PROPER_FUNCTION_NAME = functionName.PROPER;
	var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
	var IteratorPrototype = iteratorsCore.IteratorPrototype;
	var BUGGY_SAFARI_ITERATORS = iteratorsCore.BUGGY_SAFARI_ITERATORS;
	var ITERATOR = wellKnownSymbol('iterator');
	var KEYS = 'keys';
	var VALUES = 'values';
	var ENTRIES = 'entries';

	var returnThis = function () { return this; };

	var defineIterator = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
	  createIteratorConstructor(IteratorConstructor, NAME, next);

	  var getIterationMethod = function (KIND) {
	    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
	    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
	    switch (KIND) {
	      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
	      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
	      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
	    } return function () { return new IteratorConstructor(this); };
	  };

	  var TO_STRING_TAG = NAME + ' Iterator';
	  var INCORRECT_VALUES_NAME = false;
	  var IterablePrototype = Iterable.prototype;
	  var nativeIterator = IterablePrototype[ITERATOR]
	    || IterablePrototype['@@iterator']
	    || DEFAULT && IterablePrototype[DEFAULT];
	  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
	  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
	  var CurrentIteratorPrototype, methods, KEY;

	  // fix native
	  if (anyNativeIterator) {
	    CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable()));
	    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
	      if (objectGetPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
	        if (objectSetPrototypeOf) {
	          objectSetPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
	        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
	          defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
	        }
	      }
	      // Set @@toStringTag to native iterators
	      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
	    }
	  }

	  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
	  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
	    if (CONFIGURABLE_FUNCTION_NAME) {
	      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
	    } else {
	      INCORRECT_VALUES_NAME = true;
	      defaultIterator = function values() { return functionCall(nativeIterator, this); };
	    }
	  }

	  // export additional methods
	  if (DEFAULT) {
	    methods = {
	      values: getIterationMethod(VALUES),
	      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
	      entries: getIterationMethod(ENTRIES)
	    };
	    if (FORCED) for (KEY in methods) {
	      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
	        defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
	      }
	    } else _export({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
	  }

	  // define iterator
	  if (IterablePrototype[ITERATOR] !== defaultIterator) {
	    defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
	  }
	  iterators[NAME] = defaultIterator;

	  return methods;
	};

	var charAt = stringMultibyte.charAt;




	var STRING_ITERATOR = 'String Iterator';
	var setInternalState = internalState.set;
	var getInternalState = internalState.getterFor(STRING_ITERATOR);

	// `String.prototype[@@iterator]` method
	// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
	defineIterator(String, 'String', function (iterated) {
	  setInternalState(this, {
	    type: STRING_ITERATOR,
	    string: toString_1(iterated),
	    index: 0
	  });
	// `%StringIteratorPrototype%.next` method
	// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
	}, function next() {
	  var state = getInternalState(this);
	  var string = state.string;
	  var index = state.index;
	  var point;
	  if (index >= string.length) return { value: undefined, done: true };
	  point = charAt(string, index);
	  state.index += point.length;
	  return { value: point, done: false };
	});

	// eslint-disable-next-line es-x/no-object-assign -- safe
	var $assign = Object.assign;
	// eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
	var defineProperty = Object.defineProperty;
	var concat = functionUncurryThis([].concat);

	// `Object.assign` method
	// https://tc39.es/ecma262/#sec-object.assign
	var objectAssign = !$assign || fails(function () {
	  // should have correct order of operations (Edge bug)
	  if (descriptors && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
	    enumerable: true,
	    get: function () {
	      defineProperty(this, 'b', {
	        value: 3,
	        enumerable: false
	      });
	    }
	  }), { b: 2 })).b !== 1) return true;
	  // should work with symbols and should have deterministic property order (V8 bug)
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line es-x/no-symbol -- safe
	  var symbol = Symbol();
	  var alphabet = 'abcdefghijklmnopqrst';
	  A[symbol] = 7;
	  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
	  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
	  var T = toObject(target);
	  var argumentsLength = arguments.length;
	  var index = 1;
	  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
	  var propertyIsEnumerable = objectPropertyIsEnumerable.f;
	  while (argumentsLength > index) {
	    var S = indexedObject(arguments[index++]);
	    var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) {
	      key = keys[j++];
	      if (!descriptors || functionCall(propertyIsEnumerable, S, key)) T[key] = S[key];
	    }
	  } return T;
	} : $assign;

	// `Object.assign` method
	// https://tc39.es/ecma262/#sec-object.assign
	// eslint-disable-next-line es-x/no-object-assign -- required for testing
	_export({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== objectAssign }, {
	  assign: objectAssign
	});

	var $propertyIsEnumerable = objectPropertyIsEnumerable.f;

	var propertyIsEnumerable = functionUncurryThis($propertyIsEnumerable);
	var push = functionUncurryThis([].push);

	// `Object.{ entries, values }` methods implementation
	var createMethod = function (TO_ENTRIES) {
	  return function (it) {
	    var O = toIndexedObject(it);
	    var keys = objectKeys(O);
	    var length = keys.length;
	    var i = 0;
	    var result = [];
	    var key;
	    while (length > i) {
	      key = keys[i++];
	      if (!descriptors || propertyIsEnumerable(O, key)) {
	        push(result, TO_ENTRIES ? [key, O[key]] : O[key]);
	      }
	    }
	    return result;
	  };
	};

	var objectToArray = {
	  // `Object.entries` method
	  // https://tc39.es/ecma262/#sec-object.entries
	  entries: createMethod(true),
	  // `Object.values` method
	  // https://tc39.es/ecma262/#sec-object.values
	  values: createMethod(false)
	};

	var $entries = objectToArray.entries;

	// `Object.entries` method
	// https://tc39.es/ecma262/#sec-object.entries
	_export({ target: 'Object', stat: true }, {
	  entries: function entries(O) {
	    return $entries(O);
	  }
	});

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  Object.defineProperty(Constructor, "prototype", {
	    writable: false
	  });
	  return Constructor;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  Object.defineProperty(subClass, "prototype", {
	    writable: false
	  });
	  if (superClass) _setPrototypeOf(subClass, superClass);
	}

	function _getPrototypeOf(o) {
	  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  };
	  return _getPrototypeOf(o);
	}

	function _setPrototypeOf(o, p) {
	  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };

	  return _setPrototypeOf(o, p);
	}

	function _isNativeReflectConstruct() {
	  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	  if (Reflect.construct.sham) return false;
	  if (typeof Proxy === "function") return true;

	  try {
	    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
	    return true;
	  } catch (e) {
	    return false;
	  }
	}

	function _construct(Parent, args, Class) {
	  if (_isNativeReflectConstruct()) {
	    _construct = Reflect.construct;
	  } else {
	    _construct = function _construct(Parent, args, Class) {
	      var a = [null];
	      a.push.apply(a, args);
	      var Constructor = Function.bind.apply(Parent, a);
	      var instance = new Constructor();
	      if (Class) _setPrototypeOf(instance, Class.prototype);
	      return instance;
	    };
	  }

	  return _construct.apply(null, arguments);
	}

	function _newArrowCheck(innerThis, boundThis) {
	  if (innerThis !== boundThis) {
	    throw new TypeError("Cannot instantiate an arrow function");
	  }
	}

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	function _possibleConstructorReturn(self, call) {
	  if (call && (typeof call === "object" || typeof call === "function")) {
	    return call;
	  } else if (call !== void 0) {
	    throw new TypeError("Derived constructors may only return object or undefined");
	  }

	  return _assertThisInitialized(self);
	}

	function _createSuper(Derived) {
	  var hasNativeReflectConstruct = _isNativeReflectConstruct();

	  return function _createSuperInternal() {
	    var Super = _getPrototypeOf(Derived),
	        result;

	    if (hasNativeReflectConstruct) {
	      var NewTarget = _getPrototypeOf(this).constructor;

	      result = Reflect.construct(Super, arguments, NewTarget);
	    } else {
	      result = Super.apply(this, arguments);
	    }

	    return _possibleConstructorReturn(this, result);
	  };
	}

	function _superPropBase(object, property) {
	  while (!Object.prototype.hasOwnProperty.call(object, property)) {
	    object = _getPrototypeOf(object);
	    if (object === null) break;
	  }

	  return object;
	}

	function _get() {
	  if (typeof Reflect !== "undefined" && Reflect.get) {
	    _get = Reflect.get;
	  } else {
	    _get = function _get(target, property, receiver) {
	      var base = _superPropBase(target, property);

	      if (!base) return;
	      var desc = Object.getOwnPropertyDescriptor(base, property);

	      if (desc.get) {
	        return desc.get.call(arguments.length < 3 ? target : receiver);
	      }

	      return desc.value;
	    };
	  }

	  return _get.apply(this, arguments);
	}

	function _slicedToArray(arr, i) {
	  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
	}

	function _toConsumableArray(arr) {
	  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
	}

	function _arrayWithoutHoles(arr) {
	  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
	}

	function _arrayWithHoles(arr) {
	  if (Array.isArray(arr)) return arr;
	}

	function _iterableToArray(iter) {
	  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
	}

	function _iterableToArrayLimit(arr, i) {
	  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

	  if (_i == null) return;
	  var _arr = [];
	  var _n = true;
	  var _d = false;

	  var _s, _e;

	  try {
	    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
	      _arr.push(_s.value);

	      if (i && _arr.length === i) break;
	    }
	  } catch (err) {
	    _d = true;
	    _e = err;
	  } finally {
	    try {
	      if (!_n && _i["return"] != null) _i["return"]();
	    } finally {
	      if (_d) throw _e;
	    }
	  }

	  return _arr;
	}

	function _unsupportedIterableToArray(o, minLen) {
	  if (!o) return;
	  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
	  var n = Object.prototype.toString.call(o).slice(8, -1);
	  if (n === "Object" && o.constructor) n = o.constructor.name;
	  if (n === "Map" || n === "Set") return Array.from(o);
	  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
	}

	function _arrayLikeToArray(arr, len) {
	  if (len == null || len > arr.length) len = arr.length;

	  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

	  return arr2;
	}

	function _nonIterableSpread() {
	  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	function _nonIterableRest() {
	  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}

	function _createForOfIteratorHelper(o, allowArrayLike) {
	  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

	  if (!it) {
	    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
	      if (it) o = it;
	      var i = 0;

	      var F = function () {};

	      return {
	        s: F,
	        n: function () {
	          if (i >= o.length) return {
	            done: true
	          };
	          return {
	            done: false,
	            value: o[i++]
	          };
	        },
	        e: function (e) {
	          throw e;
	        },
	        f: F
	      };
	    }

	    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	  }

	  var normalCompletion = true,
	      didErr = false,
	      err;
	  return {
	    s: function () {
	      it = it.call(o);
	    },
	    n: function () {
	      var step = it.next();
	      normalCompletion = step.done;
	      return step;
	    },
	    e: function (e) {
	      didErr = true;
	      err = e;
	    },
	    f: function () {
	      try {
	        if (!normalCompletion && it.return != null) it.return();
	      } finally {
	        if (didErr) throw err;
	      }
	    }
	  };
	}

	function getSumValueOfStyleRules(element, rules) {
	  var _this = this;

	  return rules.reduce(function (sum, rule) {
	    _newArrowCheck(this, _this);

	    return sum + parseInt(window.getComputedStyle(element)[rule] || 0);
	  }.bind(this), 0);
	}
	/** Class representing a point. */


	var Point = /*#__PURE__*/function () {
	  /**
	  * Create a point.
	  * @param {number} x - The x value.
	  * @param {number} y - The y value.
	  */
	  function Point(x, y) {
	    _classCallCheck(this, Point);

	    this.x = x;
	    this.y = y;
	  }

	  _createClass(Point, [{
	    key: "add",
	    value: function add(p) {
	      return new Point(this.x + p.x, this.y + p.y);
	    }
	  }, {
	    key: "sub",
	    value: function sub(p) {
	      return new Point(this.x - p.x, this.y - p.y);
	    }
	  }, {
	    key: "mult",
	    value: function mult(k) {
	      return new Point(this.x * k, this.y * k);
	    }
	  }, {
	    key: "negative",
	    value: function negative() {
	      return new Point(-this.x, -this.y);
	    }
	  }, {
	    key: "compare",
	    value: function compare(p) {
	      return this.x === p.x && this.y === p.y;
	    }
	  }, {
	    key: "clone",
	    value: function clone() {
	      return new Point(this.x, this.y);
	    }
	  }, {
	    key: "toString",
	    value: function toString() {
	      return "{x=".concat(this.x, ",y=").concat(this.y);
	    }
	  }], [{
	    key: "elementOffset",
	    value: function elementOffset(element, parent) {
	      parent = parent || element.parentNode;
	      var elementRect = element.getBoundingClientRect();
	      var parentRect = parent.getBoundingClientRect();
	      return new Point(elementRect.left - parentRect.left, elementRect.top - parentRect.top);
	    }
	  }, {
	    key: "elementSize",
	    value: function elementSize(element) {
	      var isContentBoxSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	      var width = parseInt(window.getComputedStyle(element)['width']);
	      var height = parseInt(window.getComputedStyle(element)['height']);

	      if (!isContentBoxSize) {
	        width += getSumValueOfStyleRules(element, ['padding-left', 'padding-right', 'border-left-width', 'border-right-width']);
	        height += getSumValueOfStyleRules(element, ['padding-top', 'padding-bottom', 'border-top-width', 'border-bottom-width']);
	      }

	      return new Point(width, height);
	    }
	  }]);

	  return Point;
	}();

	var Rectangle = /*#__PURE__*/function () {
	  function Rectangle(position, size) {
	    _classCallCheck(this, Rectangle);

	    this.position = position;
	    this.size = size;
	  }

	  _createClass(Rectangle, [{
	    key: "getP1",
	    value: function getP1() {
	      return this.position;
	    }
	  }, {
	    key: "getP2",
	    value: function getP2() {
	      return new Point(this.position.x + this.size.x, this.position.y);
	    }
	  }, {
	    key: "getP3",
	    value: function getP3() {
	      return this.position.add(this.size);
	    }
	  }, {
	    key: "getP4",
	    value: function getP4() {
	      return new Point(this.position.x, this.position.y + this.size.y);
	    }
	  }, {
	    key: "getCenter",
	    value: function getCenter() {
	      return this.position.add(this.size.mult(0.5));
	    }
	  }, {
	    key: "or",
	    value: function or(rect) {
	      var position = new Point(Math.min(this.position.x, rect.position.x), Math.min(this.position.y, rect.position.y));
	      var size = new Point(Math.max(this.position.x + this.size.x, rect.position.x + rect.size.x), Math.max(this.position.y + this.size.y, rect.position.y + rect.size.y)).sub(position);
	      return new Rectangle(position, size);
	    }
	  }, {
	    key: "and",
	    value: function and(rect) {
	      var position = new Point(Math.max(this.position.x, rect.position.x), Math.max(this.position.y, rect.position.y));
	      var size = new Point(Math.min(this.position.x + this.size.x, rect.position.x + rect.size.x), Math.min(this.position.y + this.size.y, rect.position.y + rect.size.y)).sub(position);

	      if (size.x <= 0 || size.y <= 0) {
	        return null;
	      }

	      return new Rectangle(position, size);
	    }
	  }, {
	    key: "includePoint",
	    value: function includePoint(p) {
	      return !(this.position.x > p.x || this.position.x + this.size.x < p.x || this.position.y > p.y || this.position.y + this.size.y < p.y);
	    }
	  }, {
	    key: "includeRectangle",
	    value: function includeRectangle(rectangle) {
	      return this.includePoint(rectangle.position) && this.includePoint(rectangle.getP3());
	    }
	  }, {
	    key: "moveToBound",
	    value: function moveToBound(rect, axis) {
	      var selAxis, crossRectangle;

	      if (axis) {
	        selAxis = axis;
	      } else {
	        crossRectangle = this.and(rect);

	        if (!crossRectangle) {
	          return rect;
	        }

	        selAxis = crossRectangle.size.x > crossRectangle.size.y ? 'y' : 'x';
	      }

	      var thisCenter = this.getCenter();
	      var rectCenter = rect.getCenter();
	      var sign = thisCenter[selAxis] > rectCenter[selAxis] ? -1 : 1;
	      var offset = sign > 0 ? this.position[selAxis] + this.size[selAxis] - rect.position[selAxis] : this.position[selAxis] - (rect.position[selAxis] + rect.size[selAxis]);
	      rect.position[selAxis] = rect.position[selAxis] + offset;
	      return rect;
	    }
	  }, {
	    key: "getSquare",
	    value: function getSquare() {
	      return this.size.x * this.size.y;
	    }
	  }, {
	    key: "styleApply",
	    value: function styleApply(el) {
	      el = el || document.querySelector('ind');
	      el.style.left = this.position.x + 'px';
	      el.style.top = this.position.y + 'px';
	      el.style.width = this.size.x + 'px';
	      el.style.height = this.size.y + 'px';
	    }
	  }, {
	    key: "growth",
	    value: function growth(size) {
	      this.size = this.size.add(size);
	      this.position = this.position.add(size.mult(-0.5));
	    }
	  }, {
	    key: "getMinSide",
	    value: function getMinSide() {
	      return Math.min(this.size.x, this.size.y);
	    }
	  }], [{
	    key: "fromElement",
	    value: function fromElement(element) {
	      var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : element.parentNode;
	      var isContentBoxSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	      var isConsiderTranslate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
	      var position = Point.elementOffset(element, parent, isConsiderTranslate);
	      var size = Point.elementSize(element, isContentBoxSize);
	      return new Rectangle(position, size);
	    }
	  }]);

	  return Rectangle;
	}();

	function getDefaultContainer(element) {
	  var container = element.parentNode;

	  while (container.parentNode && window.getComputedStyle(container)['position'] === 'static' && container.tagName !== 'BODY') {
	    container = container.parentNode;
	  }

	  return container;
	}

	var EventEmitter = /*#__PURE__*/function () {
	  function EventEmitter() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    _classCallCheck(this, EventEmitter);

	    this.events = {};

	    if (options && options.on) {
	      for (var _i = 0, _Object$entries = Object.entries(options.on); _i < _Object$entries.length; _i++) {
	        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
	            eventName = _Object$entries$_i[0],
	            fn = _Object$entries$_i[1];

	        this.on(eventName, fn);
	      }
	    }
	  }

	  _createClass(EventEmitter, [{
	    key: "emit",
	    value: function emit(eventName) {
	      this.interrupted = false;
	      var args = [].slice.call(arguments, 1);
	      if (!this.events[eventName]) return;

	      var _iterator = _createForOfIteratorHelper(this.events[eventName]),
	          _step;

	      try {
	        for (_iterator.s(); !(_step = _iterator.n()).done;) {
	          var func = _step.value;
	          func.apply(void 0, _toConsumableArray(args));

	          if (this.interrupted) {
	            return;
	          }
	        }
	      } catch (err) {
	        _iterator.e(err);
	      } finally {
	        _iterator.f();
	      }
	    }
	  }, {
	    key: "interrupt",
	    value: function interrupt() {
	      this.interrupted = true;
	    }
	  }, {
	    key: "on",
	    value: function on(eventName, fn) {
	      if (!this.events[eventName]) {
	        this.events[eventName] = [];
	      }

	      this.events[eventName].push(fn);
	    }
	  }, {
	    key: "prependOn",
	    value: function prependOn(eventName, fn) {
	      if (!this.events[eventName]) {
	        this.events[eventName] = [];
	      }

	      this.events[eventName].unshift(fn);
	    }
	  }, {
	    key: "unsubscribe",
	    value: function unsubscribe(eventName, fn) {
	      if (this.events[eventName]) {
	        var index = this.events[eventName].indexOf(fn);
	        this.events[eventName].splice(index, 1);
	      }
	    }
	  }, {
	    key: "resetEmitter",
	    value: function resetEmitter() {
	      this.events = {};
	    }
	  }, {
	    key: "resetOn",
	    value: function resetOn(eventName) {
	      this.events[eventName] = [];
	    }
	  }]);

	  return EventEmitter;
	}();

	var getStyleProperty = createCommonjsModule(function (module, exports) {
	/*!
	 * getStyleProperty v1.0.4
	 * original by kangax
	 * http://perfectionkills.com/feature-testing-css-properties/
	 * MIT license
	 */

	/*jshint browser: true, strict: true, undef: true */
	/*global define: false, exports: false, module: false */

	( function( window ) {

	var prefixes = 'Webkit Moz ms Ms O'.split(' ');
	var docElemStyle = document.documentElement.style;

	function getStyleProperty( propName ) {
	  if ( !propName ) {
	    return;
	  }

	  // test standard property first
	  if ( typeof docElemStyle[ propName ] === 'string' ) {
	    return propName;
	  }

	  // capitalize
	  propName = propName.charAt(0).toUpperCase() + propName.slice(1);

	  // test vendor specific properties
	  var prefixed;
	  for ( var i=0, len = prefixes.length; i < len; i++ ) {
	    prefixed = prefixes[i] + propName;
	    if ( typeof docElemStyle[ prefixed ] === 'string' ) {
	      return prefixed;
	    }
	  }
	}

	// transport
	{
	  // CommonJS for Component
	  module.exports = getStyleProperty;
	}

	})();
	});

	function getDistance(p1, p2) {
	  var dx = p1.x - p2.x,
	      dy = p1.y - p2.y;
	  return Math.sqrt(dx * dx + dy * dy);
	}
	function getXDifference(p1, p2) {
	  return Math.abs(p1.x - p2.x);
	}
	function getYDifference(p1, p2) {
	  return Math.abs(p1.y - p2.y);
	}
	function transformedSpaceDistanceFactory(options) {
	  var _this = this;

	  return function (p1, p2) {
	    _newArrowCheck(this, _this);

	    return Math.sqrt(Math.pow(options.x * Math.abs(p1.x - p2.x), 2) + Math.pow(options.y * Math.abs(p1.y - p2.y), 2));
	  }.bind(this);
	}
	function indexOfNearestPoint(arr, val, radius) {
	  var getDistanceFunc = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : getDistance;
	  var size,
	      index = 0,
	      i,
	      temp;

	  if (arr.length === 0) {
	    return -1;
	  }

	  size = getDistanceFunc(arr[0], val);

	  for (i = 0; i < arr.length; i++) {
	    temp = getDistanceFunc(arr[i], val);

	    if (temp < size) {
	      size = temp;
	      index = i;
	    }
	  }

	  if (radius >= 0 && size > radius) {
	    return -1;
	  }

	  return index;
	}

	function directCrossing(L1P1, L1P2, L2P1, L2P2) {
	  var temp, k1, k2, b1, b2, x, y;

	  if (L2P1.x === L2P2.x) {
	    temp = L2P1;
	    L2P1 = L1P1;
	    L1P1 = temp;
	    temp = L2P2;
	    L2P2 = L1P2;
	    L1P2 = temp;
	  }

	  if (L1P1.x === L1P2.x) {
	    k2 = (L2P2.y - L2P1.y) / (L2P2.x - L2P1.x);
	    b2 = (L2P2.x * L2P1.y - L2P1.x * L2P2.y) / (L2P2.x - L2P1.x);
	    x = L1P1.x;
	    y = x * k2 + b2;
	    return new Point(x, y);
	  } else {
	    k1 = (L1P2.y - L1P1.y) / (L1P2.x - L1P1.x);
	    b1 = (L1P2.x * L1P1.y - L1P1.x * L1P2.y) / (L1P2.x - L1P1.x);
	    k2 = (L2P2.y - L2P1.y) / (L2P2.x - L2P1.x);
	    b2 = (L2P2.x * L2P1.y - L2P1.x * L2P2.y) / (L2P2.x - L2P1.x);
	    x = (b1 - b2) / (k2 - k1);
	    y = x * k1 + b1;
	    return new Point(x, y);
	  }
	}
	function boundToLine(A, B, P) {
	  var AP = new Point(P.x - A.x, P.y - A.y),
	      AB = new Point(B.x - A.x, B.y - A.y),
	      ab2 = AB.x * AB.x + AB.y * AB.y,
	      ap_ab = AP.x * AB.x + AP.y * AB.y,
	      t = ap_ab / ab2;
	  return new Point(A.x + AB.x * t, A.y + AB.y * t);
	}
	function getPointOnLineByLenght(LP1, LP2, lenght) {
	  var dx = LP2.x - LP1.x;
	  var dy = LP2.y - LP1.y;
	  var percent = lenght / getDistance(LP1, LP2);
	  return new Point(LP1.x + percent * dx, LP1.y + percent * dy);
	}
	function addPointToBoundPoints(boundpoints, point, isRight) {
	  var _this = this;

	  var result = boundpoints.filter(function (bPoint) {
	    _newArrowCheck(this, _this);

	    return bPoint.y > point.y || (isRight ? bPoint.x < point.x : bPoint.x > point.x);
	  }.bind(this));

	  for (var i = 0; i < result.length; i++) {
	    if (point.y < result[i].y) {
	      result.splice(i, 0, point);
	      return result;
	    }
	  }

	  result.push(point);
	  return result;
	}

	function getAngleDiff(alpha, beta) {
	  var minAngle = Math.min(alpha, beta);
	  var maxAngle = Math.max(alpha, beta);
	  return Math.min(maxAngle - minAngle, minAngle + Math.PI * 2 - maxAngle);
	}
	function getAngle(p1, p2) {
	  var diff = p2.sub(p1);
	  return normalizeAngle(Math.atan2(diff.y, diff.x));
	}
	function boundAngle(min, max, val) {
	  var dmin, dmax;

	  if (min < max && val > min && val < max) {
	    return val;
	  } else if (max < min && (val < max || val > min)) {
	    return val;
	  } else {
	    dmin = getAngleDiff(min, val);
	    dmax = getAngleDiff(max, val);

	    if (dmin < dmax) {
	      return min;
	    } else {
	      return max;
	    }
	  }
	}
	function normalizeAngle(val) {
	  while (val < 0) {
	    val += 2 * Math.PI;
	  }

	  while (val > 2 * Math.PI) {
	    val -= 2 * Math.PI;
	  }

	  return val;
	}
	function getPointFromRadialSystem(angle, length, center) {
	  center = center || new Point(0, 0);
	  return center.add(new Point(length * Math.cos(angle), length * Math.sin(angle)));
	}

	var Bound = /*#__PURE__*/function () {
	  function Bound() {
	    _classCallCheck(this, Bound);
	  }

	  _createClass(Bound, [{
	    key: "bound",
	    value: function bound(point, _size) {
	      return point;
	    }
	  }, {
	    key: "refresh",
	    value: function refresh() {}
	  }], [{
	    key: "bounding",
	    value: function bounding() {
	      var instance = _construct(this, Array.prototype.slice.call(arguments));

	      return instance.bound.bind(instance);
	    }
	  }]);

	  return Bound;
	}();
	var BoundToRectangle = /*#__PURE__*/function (_Bound) {
	  _inherits(BoundToRectangle, _Bound);

	  var _super = _createSuper(BoundToRectangle);

	  function BoundToRectangle(rectangle) {
	    var _this;

	    _classCallCheck(this, BoundToRectangle);

	    _this = _super.call(this);
	    _this.rectangle = rectangle;
	    return _this;
	  }

	  _createClass(BoundToRectangle, [{
	    key: "bound",
	    value: function bound(point, size) {
	      var calcPoint = point.clone();
	      var rectP2 = this.rectangle.getP3();

	      if (this.rectangle.position.x > calcPoint.x) {
	        calcPoint.x = this.rectangle.position.x;
	      }

	      if (this.rectangle.position.y > calcPoint.y) {
	        calcPoint.y = this.rectangle.position.y;
	      }

	      if (rectP2.x < calcPoint.x + size.x) {
	        calcPoint.x = rectP2.x - size.x;
	      }

	      if (rectP2.y < calcPoint.y + size.y) {
	        calcPoint.y = rectP2.y - size.y;
	      }

	      return calcPoint;
	    }
	  }]);

	  return BoundToRectangle;
	}(Bound);
	var BoundToElement = /*#__PURE__*/function (_BoundToRectangle) {
	  _inherits(BoundToElement, _BoundToRectangle);

	  var _super2 = _createSuper(BoundToElement);

	  function BoundToElement(element, container) {
	    var _this2;

	    _classCallCheck(this, BoundToElement);

	    _this2 = _super2.call(this, Rectangle.fromElement(element, container));
	    _this2.element = element;
	    _this2.container = container;
	    return _this2;
	  }

	  _createClass(BoundToElement, [{
	    key: "refresh",
	    value: function refresh() {
	      this.rectangle = Rectangle.fromElement(this.element, this.container);
	    }
	  }]);

	  return BoundToElement;
	}(BoundToRectangle);
	var BoundToLineX = /*#__PURE__*/function (_Bound2) {
	  _inherits(BoundToLineX, _Bound2);

	  var _super3 = _createSuper(BoundToLineX);

	  function BoundToLineX(x, startY, endY) {
	    var _this3;

	    _classCallCheck(this, BoundToLineX);

	    _this3 = _super3.call(this);
	    _this3.x = x;
	    _this3.startY = startY;
	    _this3.endY = endY;
	    return _this3;
	  }

	  _createClass(BoundToLineX, [{
	    key: "bound",
	    value: function bound(point, size) {
	      var calcPoint = point.clone();
	      calcPoint.x = this.x;

	      if (this.startY > calcPoint.y) {
	        calcPoint.y = this.startY;
	      }

	      if (this.endY < calcPoint.y + size.y) {
	        calcPoint.y = this.endY - size.y;
	      }

	      return calcPoint;
	    }
	  }]);

	  return BoundToLineX;
	}(Bound);
	var BoundToLineY = /*#__PURE__*/function (_Bound3) {
	  _inherits(BoundToLineY, _Bound3);

	  var _super4 = _createSuper(BoundToLineY);

	  function BoundToLineY(y, startX, endX) {
	    var _this4;

	    _classCallCheck(this, BoundToLineY);

	    _this4 = _super4.call(this);
	    _this4.y = y;
	    _this4.startX = startX;
	    _this4.endX = endX;
	    return _this4;
	  }

	  _createClass(BoundToLineY, [{
	    key: "bound",
	    value: function bound(point, size) {
	      var calcPoint = point.clone();
	      calcPoint.y = this.y;

	      if (this.startX > calcPoint.x) {
	        calcPoint.x = this.startX;
	      }

	      if (this.endX < calcPoint.x + size.x) {
	        calcPoint.x = this.endX - size.x;
	      }

	      return calcPoint;
	    }
	  }]);

	  return BoundToLineY;
	}(Bound);
	var BoundToLine = /*#__PURE__*/function (_Bound4) {
	  _inherits(BoundToLine, _Bound4);

	  var _super5 = _createSuper(BoundToLine);

	  function BoundToLine(startPoint, endPoint) {
	    var _this5;

	    _classCallCheck(this, BoundToLine);

	    _this5 = _super5.call(this);
	    _this5.startPoint = startPoint;
	    _this5.endPoint = endPoint;
	    var alpha = Math.atan2(endPoint.y - startPoint.y, endPoint.x - startPoint.x);
	    var beta = alpha + Math.PI / 2;
	    _this5.someK = 10;
	    _this5.cosBeta = Math.cos(beta);
	    _this5.sinBeta = Math.sin(beta);
	    return _this5;
	  }

	  _createClass(BoundToLine, [{
	    key: "bound",
	    value: function bound(point, size) {
	      var point2 = new Point(point.x + this.someK * this.cosBeta, point.y + this.someK * this.sinBeta);
	      var newEndPoint = getPointOnLineByLenght(this.endPoint, this.startPoint, size.x);
	      var pointCrossing = directCrossing(this.startPoint, this.endPoint, point, point2);
	      return boundToLine(this.startPoint, newEndPoint, pointCrossing);
	    }
	  }]);

	  return BoundToLine;
	}(Bound);
	var BoundToCircle = /*#__PURE__*/function (_Bound5) {
	  _inherits(BoundToCircle, _Bound5);

	  var _super6 = _createSuper(BoundToCircle);

	  function BoundToCircle(center, radius) {
	    var _this6;

	    _classCallCheck(this, BoundToCircle);

	    _this6 = _super6.call(this);
	    _this6.center = center;
	    _this6.radius = radius;
	    return _this6;
	  }

	  _createClass(BoundToCircle, [{
	    key: "bound",
	    value: function bound(point, _size) {
	      return getPointOnLineByLenght(this.center, point, this.radius);
	    }
	  }]);

	  return BoundToCircle;
	}(Bound);
	var BoundToArc = /*#__PURE__*/function (_BoundToCircle) {
	  _inherits(BoundToArc, _BoundToCircle);

	  var _super7 = _createSuper(BoundToArc);

	  function BoundToArc(center, radius, startAngle, endAngle) {
	    var _this7;

	    _classCallCheck(this, BoundToArc);

	    _this7 = _super7.call(this, center, radius);
	    _this7._startAngle = startAngle;
	    _this7._endAngle = endAngle;
	    return _this7;
	  }

	  _createClass(BoundToArc, [{
	    key: "startAngle",
	    value: function startAngle() {
	      return typeof this._startAngle === 'function' ? this._startAngle() : this._startAngle;
	    }
	  }, {
	    key: "endAngle",
	    value: function endAngle() {
	      return typeof this._endAngle === 'function' ? this._endAngle() : this._endAngle;
	    }
	  }, {
	    key: "bound",
	    value: function bound(point, _size) {
	      var angle = getAngle(this.center, point);
	      angle = normalizeAngle(angle);
	      angle = boundAngle(this.startAngle(), this.endAngle(), angle);
	      return getPointFromRadialSystem(angle, this.radius, this.center);
	    }
	  }]);

	  return BoundToArc;
	}(BoundToCircle);

	function removeItem (array, val) {
	  for (var i = 0; i < array.length; i++) {
	    if (array[i] === val) {
	      array.splice(i, 1);
	      i--;
	    }
	  }

	  return array;
	}

	function range(start, stop, step) {
	  var result = [];

	  if (typeof stop === 'undefined') {
	    stop = start;
	    start = 0;
	  }

	  if (typeof step === 'undefined') {
	    step = 1;
	  }

	  if (step > 0 && start >= stop || step < 0 && start <= stop) {
	    return [];
	  }

	  for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
	    result.push(i);
	  }

	  return result;
	}

	var BasicStrategy = /*#__PURE__*/function () {
	  function BasicStrategy(rectangle) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    _classCallCheck(this, BasicStrategy);

	    this.rectangle = rectangle;
	    this.options = options;
	  }

	  _createClass(BasicStrategy, [{
	    key: "boundRect",
	    get: function get() {
	      return typeof this.rectangle === 'function' ? this.rectangle() : this.rectangle;
	    }
	  }]);

	  return BasicStrategy;
	}();

	var NotCrossingStrategy = /*#__PURE__*/function (_BasicStrategy) {
	  _inherits(NotCrossingStrategy, _BasicStrategy);

	  var _super = _createSuper(NotCrossingStrategy);

	  function NotCrossingStrategy() {
	    _classCallCheck(this, NotCrossingStrategy);

	    return _super.apply(this, arguments);
	  }

	  _createClass(NotCrossingStrategy, [{
	    key: "positioning",
	    value: function positioning(rectangleList, indexesOfNews) {
	      var _this = this;

	      var staticRectangleIndexes = rectangleList.reduce(function (indexes, _rect, index) {
	        _newArrowCheck(this, _this);

	        if (indexesOfNews.indexOf(index) === -1) {
	          indexes.push(index);
	        }

	        return indexes;
	      }.bind(this), []);
	      indexesOfNews.forEach(function (index) {
	        var _this2 = this;

	        _newArrowCheck(this, _this);

	        var rect = rectangleList[index];
	        var removable = false;
	        staticRectangleIndexes.forEach(function (indexOfStatic) {
	          _newArrowCheck(this, _this2);

	          var staticRect = rectangleList[indexOfStatic];
	          rect = staticRect.moveToBound(rect);
	        }.bind(this));
	        removable = staticRectangleIndexes.some(function (indexOfStatic) {
	          _newArrowCheck(this, _this2);

	          var staticRect = rectangleList[indexOfStatic];
	          return !!staticRect.and(rect);
	        }.bind(this)) || rect.and(this.boundRect).getSquare() !== rect.getSquare();

	        if (removable) {
	          rect.removable = true;
	        } else {
	          staticRectangleIndexes.push(index);
	        }
	      }.bind(this));
	      return rectangleList;
	    }
	  }, {
	    key: "sorting",
	    value: function sorting(odlDraggablesList, newDraggables, indexOfNews) {
	      var _this3 = this;

	      var draggables = odlDraggablesList.concat(newDraggables);
	      newDraggables.forEach(function (draggable) {
	        _newArrowCheck(this, _this3);

	        indexOfNews.push(draggables.indexOf(draggable));
	      }.bind(this));
	      return draggables;
	    }
	  }]);

	  return NotCrossingStrategy;
	}(BasicStrategy);

	var FloatLeftStrategy = /*#__PURE__*/function (_BasicStrategy2) {
	  _inherits(FloatLeftStrategy, _BasicStrategy2);

	  var _super2 = _createSuper(FloatLeftStrategy);

	  function FloatLeftStrategy(rectangle) {
	    var _this5 = this;

	    var _this4;

	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    _classCallCheck(this, FloatLeftStrategy);

	    _this4 = _super2.call(this, rectangle, options);
	    _this4.options = Object.assign({
	      removable: true
	    }, options);
	    _this4.radius = options.radius || 80;
	    _this4.paddingTopLeft = options.paddingTopLeft || new Point(0, 0);
	    _this4.paddingBottomRight = options.paddingBottomRight || new Point(0, 0);
	    _this4.yGapBetweenDraggables = options.yGapBetweenDraggables || 0;
	    _this4.getDistance = options.getDistance || getDistance;

	    _this4.getPosition = options.getPosition || function (draggable) {
	      _newArrowCheck(this, _this5);

	      return draggable.position;
	    }.bind(this);

	    return _this4;
	  }

	  _createClass(FloatLeftStrategy, [{
	    key: "positioning",
	    value: function positioning(rectangleList, _indexesOfNews) {
	      var _this6 = this;

	      var boundRect = this.boundRect;
	      var rectP2 = boundRect.getP2();
	      var boundaryPoints = [boundRect.position];
	      rectangleList.forEach(function (rect, rectIndex) {
	        _newArrowCheck(this, _this6);

	        var position,
	            isValid = false;

	        for (var i = 0; i < boundaryPoints.length; i++) {
	          position = new Point(boundaryPoints[i].x + this.paddingTopLeft.x, i > 0 ? boundaryPoints[i - 1].y + this.yGapBetweenDraggables : boundRect.position.y + this.paddingTopLeft.y);
	          isValid = position.x + rect.size.x < rectP2.x;

	          if (isValid) {
	            break;
	          }
	        }

	        if (!isValid) {
	          position = new Point(boundRect.position.x + this.paddingTopLeft.x, boundaryPoints[boundaryPoints.length - 1].y + (rectIndex > 0 ? this.yGapBetweenDraggables : this.paddingTopLeft.y));
	        }

	        rect.position = position;

	        if (this.options.removable && rect.getP3().y > boundRect.getP3().y) {
	          rect.removable = true;
	        }

	        boundaryPoints = addPointToBoundPoints(boundaryPoints, rect.getP3().add(this.paddingBottomRight));
	      }.bind(this));
	      return rectangleList;
	    }
	  }, {
	    key: "sorting",
	    value: function sorting(odlDraggablesList, newDraggables, indexOfNews) {
	      var _this7 = this;

	      var newList = odlDraggablesList.concat();
	      var listOldPosition = odlDraggablesList.map(function (draggable) {
	        _newArrowCheck(this, _this7);

	        return draggable.getPosition();
	      }.bind(this));
	      newDraggables.forEach(function (newDraggable) {
	        _newArrowCheck(this, _this7);

	        var index = indexOfNearestPoint(listOldPosition, this.getPosition(newDraggable), this.radius, this.getDistance);

	        if (index === -1) {
	          index = newList.length;
	        } else {
	          index = newList.indexOf(odlDraggablesList[index]);
	        }

	        newList.splice(index, 0, newDraggable);
	      }.bind(this));
	      newDraggables.forEach(function (newDraggable) {
	        _newArrowCheck(this, _this7);

	        indexOfNews.push(newList.indexOf(newDraggable));
	      }.bind(this));
	      return newList;
	    }
	  }]);

	  return FloatLeftStrategy;
	}(BasicStrategy);

	var FloatRightStrategy = /*#__PURE__*/function (_FloatLeftStrategy) {
	  _inherits(FloatRightStrategy, _FloatLeftStrategy);

	  var _super3 = _createSuper(FloatRightStrategy);

	  function FloatRightStrategy(rectangle) {
	    var _this8;

	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    _classCallCheck(this, FloatRightStrategy);

	    _this8 = _super3.call(this, rectangle, options);
	    _this8.paddingTopRight = options.paddingTopRight || new Point(5, 5);
	    _this8.paddingBottomLeft = options.paddingBottomLeft || new Point(0, 0);
	    _this8.yGapBetweenDraggables = options.yGapBetweenDraggables || 0;
	    _this8.paddingBottomNegLeft = new Point(-_this8.paddingBottomLeft.x, _this8.paddingBottomLeft.y);
	    return _this8;
	  }

	  _createClass(FloatRightStrategy, [{
	    key: "positioning",
	    value: function positioning(rectangleList, _indexesOfNews) {
	      var _this9 = this;

	      var boundRect = this.boundRect;
	      var boundaryPoints = [boundRect.getP2()];
	      rectangleList.forEach(function (rect, rectIndex) {
	        _newArrowCheck(this, _this9);

	        var position,
	            isValid = false;

	        for (var i = 0; i < boundaryPoints.length; i++) {
	          position = new Point(boundaryPoints[i].x - rect.size.x - this.paddingTopRight.x, i > 0 ? boundaryPoints[i - 1].y + this.yGapBetweenDraggables : boundRect.position.y + this.paddingTopRight.y);
	          isValid = position.x > rect.position.x;

	          if (isValid) {
	            break;
	          }
	        }

	        if (!isValid) {
	          position = new Point(boundRect.getP2().x - rect.size.x - this.paddingTopRight.x, boundaryPoints[boundaryPoints.length - 1].y + (rectIndex > 0 ? this.yGapBetweenDraggables : this.paddingTopRight.y));
	        }

	        rect.position = position;

	        if (this.options.removable && rect.getP4().y > boundRect.getP4().y) {
	          rect.removable = true;
	        }

	        boundaryPoints = addPointToBoundPoints(boundaryPoints, rect.getP4().add(this.paddingBottomNegLeft), true);
	      }.bind(this));
	      return rectangleList;
	    }
	  }]);

	  return FloatRightStrategy;
	}(FloatLeftStrategy);

	var addToDefaultScope$1 = function addToDefaultScope(target) {
	  defaultScope.addTarget(target);
	};

	var Target = /*#__PURE__*/function (_EventEmitter) {
	  _inherits(Target, _EventEmitter);

	  var _super = _createSuper(Target);

	  function Target(element, draggables) {
	    var _this2 = this;

	    var _this;

	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	    _classCallCheck(this, Target);

	    _this = _super.call(this, options);

	    var target = _assertThisInitialized(_this);

	    _this.options = Object.assign({
	      timeEnd: 200,
	      timeExcange: 400
	    }, options);
	    _this.positioningStrategy = options.strategy || new FloatLeftStrategy(_this.getRectangle.bind(_assertThisInitialized(_this)), {
	      radius: 80,
	      getDistance: transformedSpaceDistanceFactory({
	        x: 1,
	        y: 4
	      }),
	      removable: true
	    });
	    _this.element = element;
	    draggables.forEach(function (draggable) {
	      _newArrowCheck(this, _this2);

	      return draggable.targets.push(target);
	    }.bind(this));
	    _this.draggables = draggables;
	    Target.emitter.emit('target:create', _assertThisInitialized(_this));

	    _this.startBounding();

	    _this.init();

	    return _this;
	  }

	  _createClass(Target, [{
	    key: "startBounding",
	    value: function startBounding() {
	      this.bound = this.options.bound || BoundToElement.bounding(this.element);
	    }
	  }, {
	    key: "positioning",
	    value: function positioning(draggables, indexesOfNew) {
	      return this.positioningStrategy.positioning(draggables, indexesOfNew);
	    }
	  }, {
	    key: "sorting",
	    value: function sorting(oldDraggables, newDraggables, indexOfNews) {
	      return this.positioningStrategy.sorting(oldDraggables, newDraggables, indexOfNews);
	    }
	  }, {
	    key: "init",
	    value: function init() {
	      var _this3 = this;

	      var rectangles, indexesOfNew;
	      this.innerDraggables = this.draggables.filter(function (draggable) {
	        _newArrowCheck(this, _this3);

	        var element = draggable.element.parentNode;

	        while (element) {
	          if (element === this.element) {
	            return true;
	          }

	          element = element.parentNode;
	        }

	        return false;
	      }.bind(this));

	      if (this.innerDraggables.length) {
	        indexesOfNew = range(this.innerDraggables.length);
	        rectangles = this.positioning(this.innerDraggables.map(function (draggable) {
	          _newArrowCheck(this, _this3);

	          return draggable.getRectangle();
	        }.bind(this)), indexesOfNew);
	        this.setPosition(rectangles, indexesOfNew);
	        this.innerDraggables.forEach(function (draggable) {
	          _newArrowCheck(this, _this3);

	          return this.emit('target:add', draggable);
	        }.bind(this));
	      }
	    }
	  }, {
	    key: "getRectangle",
	    value: function getRectangle() {
	      return Rectangle.fromElement(this.element, this.container, this.options.isContentBoxSize, true);
	    }
	  }, {
	    key: "catchDraggable",
	    value: function catchDraggable(draggable) {
	      if (this.options.catchDraggable) {
	        return this.options.catchDraggable(this, draggable);
	      } else {
	        var targetRectangle = this.getRectangle();
	        var draggableSquare = draggable.getRectangle().getSquare();
	        return draggableSquare < targetRectangle.getSquare() && targetRectangle.includePoint(draggable.getCenter());
	      }
	    }
	  }, {
	    key: "getPosition",
	    value: function getPosition() {
	      return this.getRectangle().position;
	    }
	  }, {
	    key: "getSize",
	    value: function getSize() {
	      return this.getRectangle().size;
	    }
	  }, {
	    key: "destroy",
	    value: function destroy() {
	      var _this4 = this;

	      scopes.forEach(function (scope) {
	        _newArrowCheck(this, _this4);

	        return removeItem(scope.targets, this);
	      }.bind(this));
	    }
	  }, {
	    key: "refresh",
	    value: function refresh() {
	      var _this5 = this;

	      var rectangles = this.positioning(this.innerDraggables.map(function (draggable) {
	        _newArrowCheck(this, _this5);

	        return draggable.getRectangle();
	      }.bind(this)), []);
	      this.setPosition(rectangles, [], 0);
	    }
	  }, {
	    key: "onEnd",
	    value: function onEnd(draggable) {
	      var _this6 = this;

	      var newDraggablesIndex = [];

	      if (this.getRectangle().includePoint(draggable.getCenter())) {
	        draggable.position = this.bound(draggable.position, draggable.getSize());
	      } else {
	        return false;
	      }

	      this.emit('target:beforeAdd', draggable);
	      this.innerDraggables = this.sorting(this.innerDraggables, [draggable], newDraggablesIndex);
	      var rectangles = this.positioning(this.innerDraggables.map(function (draggable) {
	        _newArrowCheck(this, _this6);

	        return draggable.getRectangle();
	      }.bind(this)), newDraggablesIndex);
	      this.setPosition(rectangles, newDraggablesIndex);

	      if (this.innerDraggables.indexOf(draggable) !== -1) {
	        this.addRemoveOnMove(draggable);
	      }

	      return true;
	    }
	  }, {
	    key: "setPosition",
	    value: function setPosition(rectangles, indexesOfNew, time) {
	      var _this7 = this;

	      this.innerDraggables.slice(0).forEach(function (draggable, i) {
	        _newArrowCheck(this, _this7);

	        var rect = rectangles[i],
	            timeEnd = time || time === 0 ? time : indexesOfNew.indexOf(i) !== -1 ? this.options.timeEnd : this.options.timeExcange;

	        if (rect.removable) {
	          draggable.move(draggable.initialPosition, timeEnd, true, true);
	          removeItem(this.innerDraggables, draggable);
	          this.emit('target:remove', draggable);
	        } else {
	          draggable.move(rect.position, timeEnd, true, true);
	        }
	      }.bind(this));
	    }
	  }, {
	    key: "add",
	    value: function add(draggable, time) {
	      var _this8 = this;

	      var newDraggablesIndex = this.innerDraggables.length;
	      this.emit('target:beforeAdd', draggable);
	      this.pushInnerDraggable(draggable);
	      var rectangles = this.positioning(this.innerDraggables.map(function (draggable) {
	        _newArrowCheck(this, _this8);

	        return draggable.getRectangle();
	      }.bind(this)), newDraggablesIndex, draggable);
	      this.setPosition(rectangles, [newDraggablesIndex], time || 0);

	      if (this.innerDraggables.indexOf(draggable) !== -1) {
	        this.addRemoveOnMove(draggable);
	      }
	    }
	  }, {
	    key: "pushInnerDraggable",
	    value: function pushInnerDraggable(draggable) {
	      if (this.innerDraggables.indexOf(draggable) === -1) {
	        this.innerDraggables.push(draggable);
	      }
	    }
	  }, {
	    key: "addRemoveOnMove",
	    value: function addRemoveOnMove(draggable) {
	      var _this9 = this;

	      draggable.on('drag:move', this.removeHandler = function () {
	        _newArrowCheck(this, _this9);

	        this.remove(draggable);
	      }.bind(this));
	      this.emit('target:add', draggable);
	    }
	  }, {
	    key: "remove",
	    value: function remove(draggable) {
	      var _this10 = this;

	      draggable.unsubscribe('drag:move', this.removeHandler);
	      var index = this.innerDraggables.indexOf(draggable);

	      if (index === -1) {
	        return;
	      }

	      this.innerDraggables.splice(index, 1);
	      var rectangles = this.positioning(this.innerDraggables.map(function (draggable) {
	        _newArrowCheck(this, _this10);

	        return draggable.getRectangle();
	      }.bind(this)), []);
	      this.setPosition(rectangles, []);
	      this.emit('target:remove', draggable);
	    }
	  }, {
	    key: "reset",
	    value: function reset() {
	      var _this11 = this;

	      this.innerDraggables.forEach(function (draggable) {
	        _newArrowCheck(this, _this11);

	        draggable.move(draggable.initialPosition, 0, true, true);
	        this.emit('target:remove', draggable);
	      }.bind(this));
	      this.innerDraggables = [];
	    }
	  }, {
	    key: "getSortedDraggables",
	    value: function getSortedDraggables() {
	      this.innerDraggables.slice();
	    }
	  }, {
	    key: "container",
	    get: function get() {
	      return this._container = this._container || this.options.container || this.options.parent || getDefaultContainer(this.element);
	    }
	  }]);

	  return Target;
	}(EventEmitter);
	Target.emitter = new EventEmitter();
	Target.emitter.on('target:create', addToDefaultScope$1);

	var scopes = [];

	var Scope = /*#__PURE__*/function (_EventEmitter) {
	  _inherits(Scope, _EventEmitter);

	  var _super = _createSuper(Scope);

	  function Scope(draggables, targets) {
	    var _this2 = this;

	    var _this;

	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	    _classCallCheck(this, Scope);

	    _this = _super.call(this, options);
	    scopes.forEach(function (scope) {
	      var _this3 = this;

	      _newArrowCheck(this, _this2);

	      if (draggables) {
	        draggables.forEach(function (draggable) {
	          _newArrowCheck(this, _this3);

	          removeItem(scope.draggables, draggable);
	        }.bind(this));
	      }

	      if (targets) {
	        targets.forEach(function (target) {
	          _newArrowCheck(this, _this3);

	          removeItem(scope.targets, target);
	        }.bind(this));
	      }
	    }.bind(this));
	    _this.draggables = draggables || [];
	    _this.targets = targets || [];
	    scopes.push(_assertThisInitialized(_this));
	    _this.options = {
	      timeEnd: options.timeEnd || 400
	    };

	    _this.init();

	    return _this;
	  }

	  _createClass(Scope, [{
	    key: "init",
	    value: function init() {
	      var _this4 = this;

	      this.draggables.forEach(function (draggable) {
	        var _this5 = this;

	        _newArrowCheck(this, _this4);

	        draggable.dragEndAction = function () {
	          _newArrowCheck(this, _this5);

	          return this.onEnd(draggable);
	        }.bind(this);
	      }.bind(this));
	    }
	  }, {
	    key: "addDraggable",
	    value: function addDraggable(draggable) {
	      var _this6 = this;

	      this.draggables.push(draggable);

	      draggable.dragEndAction = function () {
	        _newArrowCheck(this, _this6);

	        return this.onEnd(draggable);
	      }.bind(this);
	    }
	  }, {
	    key: "addTarget",
	    value: function addTarget(target) {
	      this.targets.push(target);
	    }
	  }, {
	    key: "onEnd",
	    value: function onEnd(draggable) {
	      var _this7 = this;

	      var shotTargets = this.targets.filter(function (target) {
	        _newArrowCheck(this, _this7);

	        return target.draggables.indexOf(draggable) !== -1;
	      }.bind(this)).filter(function (target) {
	        _newArrowCheck(this, _this7);

	        return target.catchDraggable(draggable);
	      }.bind(this)).sort(function (a, b) {
	        _newArrowCheck(this, _this7);

	        return a.getRectangle().getSquare() - b.getRectangle().getSquare();
	      }.bind(this));

	      if (shotTargets.length) {
	        shotTargets[0].onEnd(draggable);
	      } else if (draggable.targets.length) {
	        draggable.pinPosition(draggable.initialPosition, this.options.timeEnd);
	      }

	      this.emit('scope:change');
	    }
	  }, {
	    key: "reset",
	    value: function reset() {
	      var _this8 = this;

	      this.targets.forEach(function (target) {
	        _newArrowCheck(this, _this8);

	        return target.reset();
	      }.bind(this));
	    }
	  }, {
	    key: "refresh",
	    value: function refresh() {
	      var _this9 = this;

	      this.draggables.forEach(function (draggable) {
	        _newArrowCheck(this, _this9);

	        return draggable.refresh();
	      }.bind(this));
	      this.targets.forEach(function (target) {
	        _newArrowCheck(this, _this9);

	        return target.refresh();
	      }.bind(this));
	    }
	  }, {
	    key: "positions",
	    get: function get() {
	      var _this10 = this;

	      return this.targets.map(function (target) {
	        var _this11 = this;

	        _newArrowCheck(this, _this10);

	        return target.innerDraggables.map(function (draggable) {
	          _newArrowCheck(this, _this11);

	          return this.draggables.indexOf(draggable);
	        }.bind(this));
	      }.bind(this));
	    },
	    set: function set(positions) {
	      var _this12 = this;

	      var message = 'wrong array length';

	      if (positions.length === this.targets.length) {
	        this.targets.forEach(function (target) {
	          _newArrowCheck(this, _this12);

	          return target.reset();
	        }.bind(this));
	        positions.forEach(function (targetIndexes, i) {
	          var _this13 = this;

	          _newArrowCheck(this, _this12);

	          targetIndexes.forEach(function (index) {
	            _newArrowCheck(this, _this13);

	            this.targets[i].add(this.draggables[index]);
	          }.bind(this));
	        }.bind(this));
	      } else {
	        throw message;
	      }
	    }
	  }]);

	  return Scope;
	}(EventEmitter);

	var defaultScope = new Scope();

	function scope(fn) {
	  var currentScope = new Scope();

	  var addDraggableToScope = function addDraggableToScope(draggable) {
	    currentScope.addDraggable(draggable);
	    Draggable.emitter.interrupt();
	  };

	  var addTargetToScope = function addTargetToScope(target) {
	    currentScope.addTarget(target);
	    Draggable.emitter.interrupt();
	  };

	  Draggable.emitter.prependOn('draggable:create', addDraggableToScope);
	  Target.emitter.prependOn('target:create', addTargetToScope);
	  fn.call();
	  Draggable.emitter.unsubscribe('draggable:create', addDraggableToScope);
	  Target.emitter.unsubscribe('target:create', addTargetToScope);
	  return currentScope;
	}

	function checkSupportPassiveEvents() {
	  var passiveSupported = false;

	  try {
	    var options = Object.defineProperty({}, 'passive', {
	      get: function get() {
	        return passiveSupported = true;
	      }
	    });
	    window.addEventListener('test', options, options);
	    window.removeEventListener('test', options, options);
	  } catch (_err) {
	    passiveSupported = false;
	  }

	  return passiveSupported;
	}

	var isSupportPassiveEvents = checkSupportPassiveEvents();
	var isSupportPassiveEvents$1 = isSupportPassiveEvents;

	var passiveFalse = isSupportPassiveEvents$1 ? {
	  passive: false
	} : false;
	var isTouch = ('ontouchstart' in window);
	var mouseEvents = {
	  start: 'mousedown',
	  move: 'mousemove',
	  end: 'mouseup'
	};
	var touchEvents = {
	  start: 'touchstart',
	  move: 'touchmove',
	  end: 'touchend'
	};
	var draggables = [];
	var transformProperty = getStyleProperty('transform');
	var transitionProperty = getStyleProperty('transition');

	function getTouchByID(element, touchId) {
	  for (var i = 0; i < element.changedTouches.length; i++) {
	    if (element.changedTouches[i].identifier === touchId) {
	      return element.changedTouches[i];
	    }
	  }

	  return false;
	}

	function preventDoubleInit(draggable) {
	  var _this = this;

	  var message = "for this element Dragee.Draggable is already exist, don't create it twice ";

	  if (draggables.some(function (existing) {
	    _newArrowCheck(this, _this);

	    return draggable.element === existing.element;
	  }.bind(this))) {
	    throw message;
	  }

	  draggables.push(draggable);
	}

	function addToDefaultScope(draggable) {
	  defaultScope.addDraggable(draggable);
	}

	function copyStyles(source, destination) {
	  var cs = window.getComputedStyle(source);

	  for (var i = 0; i < cs.length; i++) {
	    var key = cs[i];

	    if (key.indexOf('transition') < 0 && key.indexOf('transform') < 0) {
	      destination.style[key] = cs[key];
	    }
	  }

	  for (var _i = 0; _i < source.children.length; _i++) {
	    copyStyles(source.children[_i], destination.children[_i]);
	  }
	}

	var Draggable = /*#__PURE__*/function (_EventEmitter) {
	  _inherits(Draggable, _EventEmitter);

	  var _super = _createSuper(Draggable);

	  function Draggable(element) {
	    var _this2;

	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    _classCallCheck(this, Draggable);

	    _this2 = _super.call(this, options);
	    _this2.targets = [];
	    _this2.options = options;
	    _this2.element = element;
	    preventDoubleInit(_assertThisInitialized(_this2));
	    Draggable.emitter.emit('draggable:create', _assertThisInitialized(_this2));
	    _this2._enable = true;

	    _this2.startBounding();

	    _this2.startPositioning();

	    _this2.startListening();

	    return _this2;
	  }

	  _createClass(Draggable, [{
	    key: "startBounding",
	    value: function startBounding() {
	      if (this.options.bound) {
	        this.bounding = {
	          bound: this.options.bound
	        };
	      } else {
	        this.bounding = new BoundToElement(this.container, this.container);
	      }
	    }
	  }, {
	    key: "startPositioning",
	    value: function startPositioning() {
	      this._setDefaultTransition();

	      this.offset = Point.elementOffset(this.element, this.container, true);
	      this.pinnedPosition = this.offset;
	      this.position = this.offset;
	      this.initialPosition = this.options.position || this.offset;
	      this.pinPosition(this.initialPosition);

	      if (this.bounding.refresh) {
	        this.bounding.refresh();
	      }
	    }
	  }, {
	    key: "startListening",
	    value: function startListening() {
	      var _this3 = this;

	      this._dragStart = function (event) {
	        _newArrowCheck(this, _this3);

	        return this.dragStart(event);
	      }.bind(this);

	      this._dragMove = function (event) {
	        _newArrowCheck(this, _this3);

	        return this.dragMove(event);
	      }.bind(this);

	      this._dragEnd = function (event) {
	        _newArrowCheck(this, _this3);

	        return this.dragEnd(event);
	      }.bind(this);

	      this._nativeDragStart = function (event) {
	        _newArrowCheck(this, _this3);

	        return this.nativeDragStart(event);
	      }.bind(this);

	      this._nativeDragOver = function (event) {
	        _newArrowCheck(this, _this3);

	        return this.nativeDragOver(event);
	      }.bind(this);

	      this._nativeDragEnd = function (event) {
	        _newArrowCheck(this, _this3);

	        return this.nativeDragEnd(event);
	      }.bind(this);

	      this._nativeDrop = function (event) {
	        _newArrowCheck(this, _this3);

	        return this.nativeDrop(event);
	      }.bind(this);

	      this._scroll = function (event) {
	        _newArrowCheck(this, _this3);

	        return this.onScroll(event);
	      }.bind(this);

	      this.handler.addEventListener(touchEvents.start, this._dragStart, passiveFalse);
	      this.handler.addEventListener(mouseEvents.start, this._dragStart, passiveFalse);
	      this.element.addEventListener('dragstart', this._nativeDragStart);
	    }
	  }, {
	    key: "getSize",
	    value: function getSize() {
	      return Point.elementSize(this.element, this.options.isContentBoxSize);
	    }
	  }, {
	    key: "getPosition",
	    value: function getPosition() {
	      this.position = this.offset.add(this._transformPosition || new Point(0, 0));
	      return this.position;
	    }
	  }, {
	    key: "getCenter",
	    value: function getCenter() {
	      return this.position.add(this.getSize().mult(0.5));
	    }
	  }, {
	    key: "_setDefaultTransition",
	    value: function _setDefaultTransition() {
	      this.element.style[transitionProperty] = window.getComputedStyle(this.element)[transitionProperty];
	    }
	  }, {
	    key: "_setTransition",
	    value: function _setTransition(time) {
	      var transition = this.element.style[transitionProperty];
	      var transitionCss = "transform ".concat(time, "ms");

	      if (!/transform \d*m?s/.test(transition)) {
	        if (transition) {
	          transition += ", ".concat(transitionCss);
	        } else {
	          transition = transitionCss;
	        }
	      } else {
	        transition = transition.replace(/transform \d*m?s/, transitionCss);
	      }

	      this.element.style[transitionProperty] = transition;
	    }
	  }, {
	    key: "_setTranslate",
	    value: function _setTranslate(point) {
	      this._transformPosition = point;
	      var translateCss = "translate3d(".concat(point.x, "px, ").concat(point.y, "px, 0px)");
	      var transform = this.element.style[transformProperty];

	      if (this.shouldRemoveZeroTranslate && point.x === 0 && point.y === 0) {
	        transform = transform.replace(/translate3d\([^)]+\)/, '');
	      } else if (!/translate3d\([^)]+\)/.test(transform)) {
	        if (transform) {
	          transform += ' ';
	        }

	        transform += translateCss;
	      } else {
	        transform = transform.replace(/translate3d\([^)]+\)/, translateCss);
	      }

	      this.element.style[transformProperty] = transform;
	    }
	  }, {
	    key: "move",
	    value: function move(point) {
	      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	      var isSilent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	      point = point.clone();
	      this.determineDirection(point);
	      this.position = point;

	      this._setTransition(time);

	      this._setTranslate(point.sub(this.offset));

	      if (!isSilent) {
	        this.emit('drag:move');
	      }
	    }
	  }, {
	    key: "pinPosition",
	    value: function pinPosition(point) {
	      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	      var silent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
	      this.pinnedPosition = point.clone();
	      this.move(this.pinnedPosition, time, silent);
	    }
	  }, {
	    key: "resetPositionToInitial",
	    value: function resetPositionToInitial() {
	      this.pinPosition(this.initialPosition);
	    }
	  }, {
	    key: "refreshPosition",
	    value: function refreshPosition() {
	      this.setPosition(this.getPosition());
	    }
	  }, {
	    key: "setPosition",
	    value: function setPosition(point) {
	      point = point.clone();
	      this.position = point;

	      this._setTransition(0);

	      this._setTranslate(point.sub(this.offset));
	    }
	  }, {
	    key: "determineDirection",
	    value: function determineDirection(point) {
	      this.leftDirection = this.position.x < point.x;
	      this.rightDirection = this.position.x > point.x;
	      this.upDirection = this.position.y > point.y;
	      this.downDirection = this.position.y < point.y;
	    }
	  }, {
	    key: "dragStart",
	    value: function dragStart(event) {
	      var _this4 = this;

	      this.currentEvent = event;

	      if (!this._enable) {
	        return;
	      }

	      var isTouchEvent = isTouch && event instanceof window.TouchEvent;
	      this.touchPoint = this._startTouchPoint = new Point(isTouchEvent ? event.changedTouches[0].pageX : event.clientX, isTouchEvent ? event.changedTouches[0].pageY : event.clientY);
	      this._startPosition = this.getPosition();

	      if (isTouchEvent) {
	        this._touchId = event.changedTouches[0].identifier;
	      }

	      this._startScrollPoint = new Point(window.scrollX, window.scrollY);
	      event.stopPropagation();

	      if (event.target instanceof window.HTMLInputElement || event.target instanceof window.HTMLInputElement) {
	        event.target.focus();
	      }

	      if (!(this.nativeDragAndDrop || event.target instanceof window.HTMLInputElement || event.target instanceof window.HTMLInputElement)) {
	        event.preventDefault();
	      }

	      if (this.nativeDragAndDrop) {
	        if (isTouchEvent && this.emulateNativeDragAndDropOnTouch || this.emulateNativeDragAndDropOnAllDevices) {
	          var emulateOnFirstMove = function emulateOnFirstMove(event) {
	            _newArrowCheck(this, _this4);

	            this.emulateNativeDragAndDrop(event);

	            _cancelEmulation();
	          }.bind(this);

	          var _cancelEmulation = function cancelEmulation() {
	            _newArrowCheck(this, _this4);

	            document.removeEventListener(touchEvents.move, emulateOnFirstMove);
	            document.removeEventListener(touchEvents.end, _cancelEmulation);
	          }.bind(this);

	          document.addEventListener(touchEvents.move, emulateOnFirstMove, passiveFalse);
	          document.addEventListener(touchEvents.end, _cancelEmulation, passiveFalse);
	        } else {
	          this.element.draggable = true;
	          document.addEventListener(mouseEvents.end, this._nativeDragEnd, passiveFalse);
	        }
	      } else {
	        document.addEventListener(touchEvents.move, this._dragMove, passiveFalse);
	        document.addEventListener(mouseEvents.move, this._dragMove, passiveFalse);
	        document.addEventListener(touchEvents.end, this._dragEnd, passiveFalse);
	        document.addEventListener(mouseEvents.end, this._dragEnd, passiveFalse);
	      }

	      window.addEventListener('scroll', this._scroll);
	      this.isDragging = true;
	      this.emit('drag:start');
	    }
	  }, {
	    key: "dragMove",
	    value: function dragMove(event) {
	      this.currentEvent = event;
	      var touch;
	      var isTouchEvent = isTouch && event instanceof window.TouchEvent;

	      if (isTouchEvent) {
	        touch = getTouchByID(event, this._touchId);

	        if (!touch) {
	          return;
	        }
	      }

	      event.stopPropagation();
	      event.preventDefault();
	      this.touchPoint = new Point(isTouchEvent ? touch.pageX : event.clientX, isTouchEvent ? touch.pageY : event.clientY);

	      var point = this._startPosition.add(this.touchPoint.sub(this._startTouchPoint)).add(this.scrollPoint.sub(this._startScrollPoint));

	      point = this.bounding.bound(point, this.getSize());
	      this.move(point);
	      this.element.classList.add('dragee-active');
	    }
	  }, {
	    key: "dragEnd",
	    value: function dragEnd(event) {
	      var _this5 = this;

	      var isTouchEvent = isTouch && event instanceof window.TouchEvent;

	      if (isTouchEvent && !getTouchByID(event, this._touchId)) {
	        return;
	      }

	      event.stopPropagation();
	      event.preventDefault();
	      this.dragEndAction();
	      this.emit('drag:end');
	      document.removeEventListener(touchEvents.move, this._dragMove);
	      document.removeEventListener(mouseEvents.move, this._dragMove);
	      document.removeEventListener(touchEvents.end, this._dragEnd);
	      document.removeEventListener(mouseEvents.end, this._dragEnd);
	      window.removeEventListener('scroll', this._scroll);
	      this.isDragging = false;
	      this.element.removeAttribute('draggable');
	      setTimeout(function () {
	        _newArrowCheck(this, _this5);

	        return this.element.classList.remove('dragee-active');
	      }.bind(this));
	    }
	  }, {
	    key: "onScroll",
	    value: function onScroll(_event) {
	      var point = this._startPosition.add(this.touchPoint.sub(this._startTouchPoint)).add(this.scrollPoint.sub(this._startScrollPoint));

	      point = this.bounding.bound(point, this.getSize());

	      if (!this.nativeDragAndDrop) {
	        this.move(point);
	      }
	    }
	  }, {
	    key: "nativeDragStart",
	    value: function nativeDragStart(event) {
	      event.dataTransfer.setData('text', 'FireFox fix');
	      event.dataTransfer.effectAllowed = 'move';
	      document.addEventListener('dragover', this._nativeDragOver);
	      document.addEventListener('dragend', this._nativeDragEnd);
	      document.addEventListener('drop', this._nativeDrop);
	    }
	  }, {
	    key: "nativeDragOver",
	    value: function nativeDragOver(event) {
	      event.preventDefault();
	      event.dataTransfer.dropEffect = 'move';
	      this.element.classList.add('dragee-placeholder');
	      this.currentEvent = event;

	      if (event.clientX === 0 && event.clientY === 0) {
	        return;
	      }

	      this.touchPoint = new Point(event.clientX, event.clientY);

	      var point = this._startPosition.add(this.touchPoint.sub(this._startTouchPoint)).add(this.scrollPoint.sub(this._startScrollPoint));

	      point = this.bounding.bound(point, this.getSize());
	      this.position = point;
	      this.emit('drag:move');
	    }
	  }, {
	    key: "nativeDragEnd",
	    value: function nativeDragEnd(_event) {
	      this.element.classList.remove('dragee-placeholder');
	      this.dragEndAction();
	      this.emit('drag:end');
	      document.removeEventListener('dragover', this._nativeDragOver);
	      document.removeEventListener('dragend', this._nativeDragEnd);
	      document.removeEventListener(mouseEvents.end, this._nativeDragEnd);
	      document.removeEventListener('drop', this._nativeDrop);
	      window.removeEventListener('scroll', this._scroll);
	      this.isDragging = false;
	      this.element.removeAttribute('draggable');
	      this.element.classList.remove('dragee-active');
	    }
	  }, {
	    key: "nativeDrop",
	    value: function nativeDrop(event) {
	      event.stopPropagation();
	      event.preventDefault();
	    }
	  }, {
	    key: "emulateNativeDragAndDrop",
	    value: function emulateNativeDragAndDrop(event) {
	      var _this6 = this;

	      var containerRect = this.container.getBoundingClientRect();
	      var clonedElement = this.element.cloneNode(true);
	      clonedElement.style[transformProperty] = '';
	      copyStyles(this.element, clonedElement);
	      clonedElement.style.position = 'absolute';
	      document.body.appendChild(clonedElement);
	      this.element.classList.add('dragee-placeholder');
	      var emulationDraggable = new Draggable(clonedElement, {
	        container: document.body,
	        bound: function bound(point) {
	          return point;
	        },
	        on: {
	          'drag:move': function dragMove() {
	            _newArrowCheck(this, _this6);

	            var containerRectPoint = new Point(containerRect.left, containerRect.top);
	            this.position = emulationDraggable.position.sub(containerRectPoint).sub(this._startScrollPoint);
	            this.emit('drag:move');
	          }.bind(this),
	          'drag:end': function dragEnd() {
	            _newArrowCheck(this, _this6);

	            emulationDraggable.destroy();
	            document.body.removeChild(clonedElement);
	            this.element.classList.remove('dragee-placeholder');
	            this.element.classList.remove('dragee-active');
	          }.bind(this)
	        }
	      });
	      var containerRectPoint = new Point(containerRect.left, containerRect.top);
	      emulationDraggable._startScrollPoint = this._startScrollPoint;
	      emulationDraggable.move(this.pinnedPosition.add(containerRectPoint).add(new Point(window.scrollX, window.scrollY)));
	      emulationDraggable.dragStart(event);
	    }
	  }, {
	    key: "dragEndAction",
	    value: function dragEndAction() {
	      this.pinPosition(this.position);
	    }
	  }, {
	    key: "getRectangle",
	    value: function getRectangle() {
	      return new Rectangle(this.position, this.getSize());
	    }
	  }, {
	    key: "refresh",
	    value: function refresh() {
	      if (this.bounding.refresh) {
	        this.bounding.refresh();
	      }
	    }
	  }, {
	    key: "destroy",
	    value: function destroy() {
	      this.handler.removeEventListener(touchEvents.start, this._dragStart);
	      this.handler.removeEventListener(mouseEvents.start, this._dragStart);
	      this.element.removeEventListener('dragstart', this._nativeDragStart);
	      document.removeEventListener(touchEvents.move, this._dragMove);
	      document.removeEventListener(mouseEvents.move, this._dragMove);
	      document.removeEventListener(touchEvents.end, this._dragEnd);
	      document.removeEventListener(mouseEvents.end, this._dragEnd);
	      document.removeEventListener('dragover', this._nativeDragOver);
	      document.removeEventListener('dragend', this._nativeDragEnd);
	      document.removeEventListener(mouseEvents.end, this._nativeDragEnd);
	      document.removeEventListener('drop', this._nativeDrop);
	      this.resetEmitter();
	      var index = draggables.indexOf(this);

	      if (index > -1) {
	        draggables.splice(index, 1);
	      }
	    }
	  }, {
	    key: "container",
	    get: function get() {
	      return this._container = this._container || this.options.container || this.options.parent || getDefaultContainer(this.element);
	    }
	  }, {
	    key: "handler",
	    get: function get() {
	      if (!this._handler) {
	        if (typeof this.options.handler === 'string') {
	          this._handler = this.element.querySelector(this.options.handler) || this.element;
	        } else {
	          this._handler = this.options.handler || this.element;
	        }
	      }

	      return this._handler;
	    }
	  }, {
	    key: "nativeDragAndDrop",
	    get: function get() {
	      return this.options.nativeDragAndDrop || false;
	    }
	  }, {
	    key: "emulateNativeDragAndDropOnTouch",
	    get: function get() {
	      return this.options.emulateNativeDragAndDropOnTouch || true;
	    }
	  }, {
	    key: "emulateNativeDragAndDropOnAllDevices",
	    get: function get() {
	      return this.options.emulateNativeDragAndDropOnAllDevices || false;
	    }
	  }, {
	    key: "shouldRemoveZeroTranslate",
	    get: function get() {
	      return this.options.shouldRemoveZeroTranslate || false;
	    }
	  }, {
	    key: "scrollPoint",
	    get: function get() {
	      return new Point(window.scrollX, window.scrollY);
	    }
	  }, {
	    key: "enable",
	    get: function get() {
	      return this._enable;
	    },
	    set: function set(enable) {
	      if (enable) {
	        this.element.classList.remove('dragee-disable');
	      } else {
	        this.element.classList.add('dragee-disable');
	      }

	      this._enable = enable;
	    }
	  }]);

	  return Draggable;
	}(EventEmitter);
	Draggable.emitter = new EventEmitter();
	Draggable.emitter.on('draggable:create', addToDefaultScope);

	var resizeObservers = [];

	var hasActiveObservations = function () {
	    return resizeObservers.some(function (ro) { return ro.activeTargets.length > 0; });
	};

	var hasSkippedObservations = function () {
	    return resizeObservers.some(function (ro) { return ro.skippedTargets.length > 0; });
	};

	var msg = 'ResizeObserver loop completed with undelivered notifications.';
	var deliverResizeLoopError = function () {
	    var event;
	    if (typeof ErrorEvent === 'function') {
	        event = new ErrorEvent('error', {
	            message: msg
	        });
	    }
	    else {
	        event = document.createEvent('Event');
	        event.initEvent('error', false, false);
	        event.message = msg;
	    }
	    window.dispatchEvent(event);
	};

	var ResizeObserverBoxOptions;
	(function (ResizeObserverBoxOptions) {
	    ResizeObserverBoxOptions["BORDER_BOX"] = "border-box";
	    ResizeObserverBoxOptions["CONTENT_BOX"] = "content-box";
	    ResizeObserverBoxOptions["DEVICE_PIXEL_CONTENT_BOX"] = "device-pixel-content-box";
	})(ResizeObserverBoxOptions || (ResizeObserverBoxOptions = {}));

	var freeze = function (obj) { return Object.freeze(obj); };

	var ResizeObserverSize = (function () {
	    function ResizeObserverSize(inlineSize, blockSize) {
	        this.inlineSize = inlineSize;
	        this.blockSize = blockSize;
	        freeze(this);
	    }
	    return ResizeObserverSize;
	}());

	var DOMRectReadOnly = (function () {
	    function DOMRectReadOnly(x, y, width, height) {
	        this.x = x;
	        this.y = y;
	        this.width = width;
	        this.height = height;
	        this.top = this.y;
	        this.left = this.x;
	        this.bottom = this.top + this.height;
	        this.right = this.left + this.width;
	        return freeze(this);
	    }
	    DOMRectReadOnly.prototype.toJSON = function () {
	        var _a = this, x = _a.x, y = _a.y, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left, width = _a.width, height = _a.height;
	        return { x: x, y: y, top: top, right: right, bottom: bottom, left: left, width: width, height: height };
	    };
	    DOMRectReadOnly.fromRect = function (rectangle) {
	        return new DOMRectReadOnly(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
	    };
	    return DOMRectReadOnly;
	}());

	var isSVG = function (target) { return target instanceof SVGElement && 'getBBox' in target; };
	var isHidden = function (target) {
	    if (isSVG(target)) {
	        var _a = target.getBBox(), width = _a.width, height = _a.height;
	        return !width && !height;
	    }
	    var _b = target, offsetWidth = _b.offsetWidth, offsetHeight = _b.offsetHeight;
	    return !(offsetWidth || offsetHeight || target.getClientRects().length);
	};
	var isElement = function (obj) {
	    var _a, _b;
	    if (obj instanceof Element) {
	        return true;
	    }
	    var scope = (_b = (_a = obj) === null || _a === void 0 ? void 0 : _a.ownerDocument) === null || _b === void 0 ? void 0 : _b.defaultView;
	    return !!(scope && obj instanceof scope.Element);
	};
	var isReplacedElement = function (target) {
	    switch (target.tagName) {
	        case 'INPUT':
	            if (target.type !== 'image') {
	                break;
	            }
	        case 'VIDEO':
	        case 'AUDIO':
	        case 'EMBED':
	        case 'OBJECT':
	        case 'CANVAS':
	        case 'IFRAME':
	        case 'IMG':
	            return true;
	    }
	    return false;
	};

	var global$1 = typeof window !== 'undefined' ? window : {};

	var cache = new WeakMap();
	var scrollRegexp = /auto|scroll/;
	var verticalRegexp = /^tb|vertical/;
	var IE = (/msie|trident/i).test(global$1.navigator && global$1.navigator.userAgent);
	var parseDimension = function (pixel) { return parseFloat(pixel || '0'); };
	var size = function (inlineSize, blockSize, switchSizes) {
	    if (inlineSize === void 0) { inlineSize = 0; }
	    if (blockSize === void 0) { blockSize = 0; }
	    if (switchSizes === void 0) { switchSizes = false; }
	    return new ResizeObserverSize((switchSizes ? blockSize : inlineSize) || 0, (switchSizes ? inlineSize : blockSize) || 0);
	};
	var zeroBoxes = freeze({
	    devicePixelContentBoxSize: size(),
	    borderBoxSize: size(),
	    contentBoxSize: size(),
	    contentRect: new DOMRectReadOnly(0, 0, 0, 0)
	});
	var calculateBoxSizes = function (target, forceRecalculation) {
	    if (forceRecalculation === void 0) { forceRecalculation = false; }
	    if (cache.has(target) && !forceRecalculation) {
	        return cache.get(target);
	    }
	    if (isHidden(target)) {
	        cache.set(target, zeroBoxes);
	        return zeroBoxes;
	    }
	    var cs = getComputedStyle(target);
	    var svg = isSVG(target) && target.ownerSVGElement && target.getBBox();
	    var removePadding = !IE && cs.boxSizing === 'border-box';
	    var switchSizes = verticalRegexp.test(cs.writingMode || '');
	    var canScrollVertically = !svg && scrollRegexp.test(cs.overflowY || '');
	    var canScrollHorizontally = !svg && scrollRegexp.test(cs.overflowX || '');
	    var paddingTop = svg ? 0 : parseDimension(cs.paddingTop);
	    var paddingRight = svg ? 0 : parseDimension(cs.paddingRight);
	    var paddingBottom = svg ? 0 : parseDimension(cs.paddingBottom);
	    var paddingLeft = svg ? 0 : parseDimension(cs.paddingLeft);
	    var borderTop = svg ? 0 : parseDimension(cs.borderTopWidth);
	    var borderRight = svg ? 0 : parseDimension(cs.borderRightWidth);
	    var borderBottom = svg ? 0 : parseDimension(cs.borderBottomWidth);
	    var borderLeft = svg ? 0 : parseDimension(cs.borderLeftWidth);
	    var horizontalPadding = paddingLeft + paddingRight;
	    var verticalPadding = paddingTop + paddingBottom;
	    var horizontalBorderArea = borderLeft + borderRight;
	    var verticalBorderArea = borderTop + borderBottom;
	    var horizontalScrollbarThickness = !canScrollHorizontally ? 0 : target.offsetHeight - verticalBorderArea - target.clientHeight;
	    var verticalScrollbarThickness = !canScrollVertically ? 0 : target.offsetWidth - horizontalBorderArea - target.clientWidth;
	    var widthReduction = removePadding ? horizontalPadding + horizontalBorderArea : 0;
	    var heightReduction = removePadding ? verticalPadding + verticalBorderArea : 0;
	    var contentWidth = svg ? svg.width : parseDimension(cs.width) - widthReduction - verticalScrollbarThickness;
	    var contentHeight = svg ? svg.height : parseDimension(cs.height) - heightReduction - horizontalScrollbarThickness;
	    var borderBoxWidth = contentWidth + horizontalPadding + verticalScrollbarThickness + horizontalBorderArea;
	    var borderBoxHeight = contentHeight + verticalPadding + horizontalScrollbarThickness + verticalBorderArea;
	    var boxes = freeze({
	        devicePixelContentBoxSize: size(Math.round(contentWidth * devicePixelRatio), Math.round(contentHeight * devicePixelRatio), switchSizes),
	        borderBoxSize: size(borderBoxWidth, borderBoxHeight, switchSizes),
	        contentBoxSize: size(contentWidth, contentHeight, switchSizes),
	        contentRect: new DOMRectReadOnly(paddingLeft, paddingTop, contentWidth, contentHeight)
	    });
	    cache.set(target, boxes);
	    return boxes;
	};
	var calculateBoxSize = function (target, observedBox, forceRecalculation) {
	    var _a = calculateBoxSizes(target, forceRecalculation), borderBoxSize = _a.borderBoxSize, contentBoxSize = _a.contentBoxSize, devicePixelContentBoxSize = _a.devicePixelContentBoxSize;
	    switch (observedBox) {
	        case ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX:
	            return devicePixelContentBoxSize;
	        case ResizeObserverBoxOptions.BORDER_BOX:
	            return borderBoxSize;
	        default:
	            return contentBoxSize;
	    }
	};

	var ResizeObserverEntry = (function () {
	    function ResizeObserverEntry(target) {
	        var boxes = calculateBoxSizes(target);
	        this.target = target;
	        this.contentRect = boxes.contentRect;
	        this.borderBoxSize = freeze([boxes.borderBoxSize]);
	        this.contentBoxSize = freeze([boxes.contentBoxSize]);
	        this.devicePixelContentBoxSize = freeze([boxes.devicePixelContentBoxSize]);
	    }
	    return ResizeObserverEntry;
	}());

	var calculateDepthForNode = function (node) {
	    if (isHidden(node)) {
	        return Infinity;
	    }
	    var depth = 0;
	    var parent = node.parentNode;
	    while (parent) {
	        depth += 1;
	        parent = parent.parentNode;
	    }
	    return depth;
	};

	var broadcastActiveObservations = function () {
	    var shallowestDepth = Infinity;
	    var callbacks = [];
	    resizeObservers.forEach(function processObserver(ro) {
	        if (ro.activeTargets.length === 0) {
	            return;
	        }
	        var entries = [];
	        ro.activeTargets.forEach(function processTarget(ot) {
	            var entry = new ResizeObserverEntry(ot.target);
	            var targetDepth = calculateDepthForNode(ot.target);
	            entries.push(entry);
	            ot.lastReportedSize = calculateBoxSize(ot.target, ot.observedBox);
	            if (targetDepth < shallowestDepth) {
	                shallowestDepth = targetDepth;
	            }
	        });
	        callbacks.push(function resizeObserverCallback() {
	            ro.callback.call(ro.observer, entries, ro.observer);
	        });
	        ro.activeTargets.splice(0, ro.activeTargets.length);
	    });
	    for (var _i = 0, callbacks_1 = callbacks; _i < callbacks_1.length; _i++) {
	        var callback = callbacks_1[_i];
	        callback();
	    }
	    return shallowestDepth;
	};

	var gatherActiveObservationsAtDepth = function (depth) {
	    resizeObservers.forEach(function processObserver(ro) {
	        ro.activeTargets.splice(0, ro.activeTargets.length);
	        ro.skippedTargets.splice(0, ro.skippedTargets.length);
	        ro.observationTargets.forEach(function processTarget(ot) {
	            if (ot.isActive()) {
	                if (calculateDepthForNode(ot.target) > depth) {
	                    ro.activeTargets.push(ot);
	                }
	                else {
	                    ro.skippedTargets.push(ot);
	                }
	            }
	        });
	    });
	};

	var process = function () {
	    var depth = 0;
	    gatherActiveObservationsAtDepth(depth);
	    while (hasActiveObservations()) {
	        depth = broadcastActiveObservations();
	        gatherActiveObservationsAtDepth(depth);
	    }
	    if (hasSkippedObservations()) {
	        deliverResizeLoopError();
	    }
	    return depth > 0;
	};

	var trigger;
	var callbacks = [];
	var notify = function () { return callbacks.splice(0).forEach(function (cb) { return cb(); }); };
	var queueMicroTask = function (callback) {
	    if (!trigger) {
	        var toggle_1 = 0;
	        var el_1 = document.createTextNode('');
	        var config = { characterData: true };
	        new MutationObserver(function () { return notify(); }).observe(el_1, config);
	        trigger = function () { el_1.textContent = "" + (toggle_1 ? toggle_1-- : toggle_1++); };
	    }
	    callbacks.push(callback);
	    trigger();
	};

	var queueResizeObserver = function (cb) {
	    queueMicroTask(function ResizeObserver() {
	        requestAnimationFrame(cb);
	    });
	};

	var watching = 0;
	var isWatching = function () { return !!watching; };
	var CATCH_PERIOD = 250;
	var observerConfig = { attributes: true, characterData: true, childList: true, subtree: true };
	var events = [
	    'resize',
	    'load',
	    'transitionend',
	    'animationend',
	    'animationstart',
	    'animationiteration',
	    'keyup',
	    'keydown',
	    'mouseup',
	    'mousedown',
	    'mouseover',
	    'mouseout',
	    'blur',
	    'focus'
	];
	var time = function (timeout) {
	    if (timeout === void 0) { timeout = 0; }
	    return Date.now() + timeout;
	};
	var scheduled = false;
	var Scheduler = (function () {
	    function Scheduler() {
	        var _this = this;
	        this.stopped = true;
	        this.listener = function () { return _this.schedule(); };
	    }
	    Scheduler.prototype.run = function (timeout) {
	        var _this = this;
	        if (timeout === void 0) { timeout = CATCH_PERIOD; }
	        if (scheduled) {
	            return;
	        }
	        scheduled = true;
	        var until = time(timeout);
	        queueResizeObserver(function () {
	            var elementsHaveResized = false;
	            try {
	                elementsHaveResized = process();
	            }
	            finally {
	                scheduled = false;
	                timeout = until - time();
	                if (!isWatching()) {
	                    return;
	                }
	                if (elementsHaveResized) {
	                    _this.run(1000);
	                }
	                else if (timeout > 0) {
	                    _this.run(timeout);
	                }
	                else {
	                    _this.start();
	                }
	            }
	        });
	    };
	    Scheduler.prototype.schedule = function () {
	        this.stop();
	        this.run();
	    };
	    Scheduler.prototype.observe = function () {
	        var _this = this;
	        var cb = function () { return _this.observer && _this.observer.observe(document.body, observerConfig); };
	        document.body ? cb() : global$1.addEventListener('DOMContentLoaded', cb);
	    };
	    Scheduler.prototype.start = function () {
	        var _this = this;
	        if (this.stopped) {
	            this.stopped = false;
	            this.observer = new MutationObserver(this.listener);
	            this.observe();
	            events.forEach(function (name) { return global$1.addEventListener(name, _this.listener, true); });
	        }
	    };
	    Scheduler.prototype.stop = function () {
	        var _this = this;
	        if (!this.stopped) {
	            this.observer && this.observer.disconnect();
	            events.forEach(function (name) { return global$1.removeEventListener(name, _this.listener, true); });
	            this.stopped = true;
	        }
	    };
	    return Scheduler;
	}());
	var scheduler = new Scheduler();
	var updateCount = function (n) {
	    !watching && n > 0 && scheduler.start();
	    watching += n;
	    !watching && scheduler.stop();
	};

	var skipNotifyOnElement = function (target) {
	    return !isSVG(target)
	        && !isReplacedElement(target)
	        && getComputedStyle(target).display === 'inline';
	};
	var ResizeObservation = (function () {
	    function ResizeObservation(target, observedBox) {
	        this.target = target;
	        this.observedBox = observedBox || ResizeObserverBoxOptions.CONTENT_BOX;
	        this.lastReportedSize = {
	            inlineSize: 0,
	            blockSize: 0
	        };
	    }
	    ResizeObservation.prototype.isActive = function () {
	        var size = calculateBoxSize(this.target, this.observedBox, true);
	        if (skipNotifyOnElement(this.target)) {
	            this.lastReportedSize = size;
	        }
	        if (this.lastReportedSize.inlineSize !== size.inlineSize
	            || this.lastReportedSize.blockSize !== size.blockSize) {
	            return true;
	        }
	        return false;
	    };
	    return ResizeObservation;
	}());

	var ResizeObserverDetail = (function () {
	    function ResizeObserverDetail(resizeObserver, callback) {
	        this.activeTargets = [];
	        this.skippedTargets = [];
	        this.observationTargets = [];
	        this.observer = resizeObserver;
	        this.callback = callback;
	    }
	    return ResizeObserverDetail;
	}());

	var observerMap = new WeakMap();
	var getObservationIndex = function (observationTargets, target) {
	    for (var i = 0; i < observationTargets.length; i += 1) {
	        if (observationTargets[i].target === target) {
	            return i;
	        }
	    }
	    return -1;
	};
	var ResizeObserverController = (function () {
	    function ResizeObserverController() {
	    }
	    ResizeObserverController.connect = function (resizeObserver, callback) {
	        var detail = new ResizeObserverDetail(resizeObserver, callback);
	        observerMap.set(resizeObserver, detail);
	    };
	    ResizeObserverController.observe = function (resizeObserver, target, options) {
	        var detail = observerMap.get(resizeObserver);
	        var firstObservation = detail.observationTargets.length === 0;
	        if (getObservationIndex(detail.observationTargets, target) < 0) {
	            firstObservation && resizeObservers.push(detail);
	            detail.observationTargets.push(new ResizeObservation(target, options && options.box));
	            updateCount(1);
	            scheduler.schedule();
	        }
	    };
	    ResizeObserverController.unobserve = function (resizeObserver, target) {
	        var detail = observerMap.get(resizeObserver);
	        var index = getObservationIndex(detail.observationTargets, target);
	        var lastObservation = detail.observationTargets.length === 1;
	        if (index >= 0) {
	            lastObservation && resizeObservers.splice(resizeObservers.indexOf(detail), 1);
	            detail.observationTargets.splice(index, 1);
	            updateCount(-1);
	        }
	    };
	    ResizeObserverController.disconnect = function (resizeObserver) {
	        var _this = this;
	        var detail = observerMap.get(resizeObserver);
	        detail.observationTargets.slice().forEach(function (ot) { return _this.unobserve(resizeObserver, ot.target); });
	        detail.activeTargets.splice(0, detail.activeTargets.length);
	    };
	    return ResizeObserverController;
	}());

	var ResizeObserver$1 = (function () {
	    function ResizeObserver(callback) {
	        if (arguments.length === 0) {
	            throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
	        }
	        if (typeof callback !== 'function') {
	            throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
	        }
	        ResizeObserverController.connect(this, callback);
	    }
	    ResizeObserver.prototype.observe = function (target, options) {
	        if (arguments.length === 0) {
	            throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
	        }
	        if (!isElement(target)) {
	            throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
	        }
	        ResizeObserverController.observe(this, target, options);
	    };
	    ResizeObserver.prototype.unobserve = function (target) {
	        if (arguments.length === 0) {
	            throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
	        }
	        if (!isElement(target)) {
	            throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
	        }
	        ResizeObserverController.unobserve(this, target);
	    };
	    ResizeObserver.prototype.disconnect = function () {
	        ResizeObserverController.disconnect(this);
	    };
	    ResizeObserver.toString = function () {
	        return 'function ResizeObserver () { [polyfill code] }';
	    };
	    return ResizeObserver;
	}());

	var ResizeObserver = window.ResizeObserver || ResizeObserver$1;

	var List = /*#__PURE__*/function (_EventEmitter) {
	  _inherits(List, _EventEmitter);

	  var _super = _createSuper(List);

	  function List(draggables) {
	    var _this2 = this;

	    var _this;

	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    _classCallCheck(this, List);

	    _this = _super.call(this, options);
	    _this.options = Object.assign({
	      timeEnd: 200,
	      timeExcange: 400,
	      radius: 30
	    }, options);
	    _this.container = options.container;
	    _this.draggables = draggables;
	    _this.changedDuringIteration = false;
	    _this.resizeObserver = new ResizeObserver(function () {
	      var _this3 = this;

	      _newArrowCheck(this, _this2);

	      if (_this.options.reorderOnChange) _this.reset();

	      _this.draggables.forEach(function (d) {
	        _newArrowCheck(this, _this3);

	        return d.startPositioning();
	      }.bind(this));
	    }.bind(this));

	    _this.init();

	    return _this;
	  }

	  _createClass(List, [{
	    key: "init",
	    value: function init() {
	      var _this4 = this;

	      this._enable = true;
	      this.draggables.forEach(function (draggable) {
	        _newArrowCheck(this, _this4);

	        return this.initDraggable(draggable);
	      }.bind(this));
	    }
	  }, {
	    key: "initDraggable",
	    value: function initDraggable(draggable) {
	      var _this5 = this;

	      draggable.enable = this._enable;
	      draggable.on('drag:move', function () {
	        _newArrowCheck(this, _this5);

	        return this.onMove(draggable);
	      }.bind(this));

	      draggable.dragEndAction = function () {
	        _newArrowCheck(this, _this5);

	        draggable.pinPosition(draggable.pinnedPosition, this.options.timeEnd);
	        this.onEnd(draggable);
	      }.bind(this);

	      this.resizeObserver.observe(draggable.element);
	    }
	  }, {
	    key: "releaseDraggable",
	    value: function releaseDraggable(draggable) {
	      this.resizeObserver.unobserve(draggable.element);
	      draggable.resetOn('drag:end');
	      draggable.resetOn('drag:move');
	      removeItem(this.draggables, draggable);
	    }
	  }, {
	    key: "onMove",
	    value: function onMove(draggable) {
	      var _this6 = this;

	      var sortedDraggables = this.getSortedDraggables();
	      var pinnedPositions = sortedDraggables.map(function (draggable) {
	        _newArrowCheck(this, _this6);

	        return draggable.pinnedPosition;
	      }.bind(this));
	      var currentIndex = sortedDraggables.indexOf(draggable);
	      var targetIndex = indexOfNearestPoint(pinnedPositions, draggable.position, this.options.radius, this.distanceFunc);

	      if (targetIndex !== -1 && currentIndex !== targetIndex) {
	        if (targetIndex < currentIndex) {
	          for (var i = targetIndex; i < currentIndex; i++) {
	            sortedDraggables[i].pinPosition(pinnedPositions[i + 1], this.options.timeExcange);
	          }
	        } else {
	          for (var _i = currentIndex; _i < targetIndex; _i++) {
	            sortedDraggables[_i + 1].pinPosition(pinnedPositions[_i], this.options.timeExcange);
	          }
	        }

	        if (draggable.nativeDragAndDrop) {
	          draggable.pinPosition(pinnedPositions[targetIndex]);
	        } else {
	          draggable.pinnedPosition = pinnedPositions[targetIndex];
	        }

	        this.changedDuringIteration = true;
	      }
	    }
	  }, {
	    key: "onEnd",
	    value: function onEnd() {
	      if (this.changedDuringIteration) {
	        this.emit('list:change');
	        this.changedDuringIteration = false;

	        if (this.options.reorderOnChange && this.options.container) {
	          this.reorderElements();
	        }
	      }
	    }
	  }, {
	    key: "reorderElements",
	    value: function reorderElements() {
	      var _this7 = this;

	      var orderedElements = this.getSortedDraggables().map(function (d) {
	        _newArrowCheck(this, _this7);

	        return d.element;
	      }.bind(this));
	      var fragment = document.createDocumentFragment();
	      orderedElements.forEach(function (element) {
	        _newArrowCheck(this, _this7);

	        return fragment.appendChild(element);
	      }.bind(this));
	      this.reset();
	      this.container.appendChild(fragment);
	      this.draggables.forEach(function (d) {
	        _newArrowCheck(this, _this7);

	        return d.startPositioning();
	      }.bind(this));
	      this.emit('list:reordered');
	    }
	  }, {
	    key: "getCurrentPinnedPositions",
	    value: function getCurrentPinnedPositions() {
	      var _this8 = this;

	      return this.draggables.map(function (draggable) {
	        _newArrowCheck(this, _this8);

	        return draggable.pinnedPosition.clone();
	      }.bind(this));
	    }
	  }, {
	    key: "getSortedDraggables",
	    value: function getSortedDraggables() {
	      return this.draggables.sort(this.sorting.bind(this));
	    }
	  }, {
	    key: "reset",
	    value: function reset() {
	      var _this9 = this;

	      this.draggables.forEach(function (draggable) {
	        _newArrowCheck(this, _this9);

	        return draggable.resetPositionToInitial();
	      }.bind(this));
	    }
	  }, {
	    key: "refresh",
	    value: function refresh() {
	      var _this10 = this;

	      this.draggables.forEach(function (draggable) {
	        _newArrowCheck(this, _this10);

	        return draggable.refresh();
	      }.bind(this));
	    }
	  }, {
	    key: "add",
	    value: function add(draggables) {
	      var _this11 = this;

	      if (!(draggables instanceof Array)) {
	        draggables = [draggables];
	      }

	      draggables.forEach(function (draggable) {
	        _newArrowCheck(this, _this11);

	        return this.initDraggable(draggable);
	      }.bind(this));
	      this.draggables = this.draggables.concat(draggables);
	    }
	  }, {
	    key: "remove",
	    value: function remove(draggables) {
	      var _this12 = this;

	      var initialPositions = this.draggables.map(function (draggable) {
	        _newArrowCheck(this, _this12);

	        return draggable.initialPosition;
	      }.bind(this));
	      var list = [];
	      var sortedDraggables = this.getSortedDraggables();

	      if (!(draggables instanceof Array)) {
	        draggables = [draggables];
	      }

	      draggables.forEach(function (draggable) {
	        _newArrowCheck(this, _this12);

	        return this.releaseDraggable(draggable);
	      }.bind(this));
	      var j = 0;
	      sortedDraggables.forEach(function (draggable) {
	        _newArrowCheck(this, _this12);

	        if (this.draggables.indexOf(draggable) !== -1) {
	          if (draggable.pinnedPosition !== initialPositions[j]) {
	            draggable.pinPosition(initialPositions[j], this.options.timeExcange);
	          }

	          draggable.initialPosition = initialPositions[j];
	          j++;
	          list.push(draggable);
	        }
	      }.bind(this));
	      this.draggables = list;
	    }
	  }, {
	    key: "clear",
	    value: function clear() {
	      this.remove(this.draggables.slice());
	    }
	  }, {
	    key: "destroy",
	    value: function destroy() {
	      var _this13 = this;

	      this.draggables.forEach(function (draggable) {
	        _newArrowCheck(this, _this13);

	        return draggable.destroy();
	      }.bind(this));
	    }
	  }, {
	    key: "sorting",
	    value: function sorting(draggableA, draggableB) {
	      if (this.options.sorting) {
	        return this.options.sorting(draggableA, draggableB);
	      } else {
	        if (draggableA.pinnedPosition.y < draggableB.pinnedPosition.y) return -1;
	        if (draggableA.pinnedPosition.y > draggableB.pinnedPosition.y) return 1;
	        if (draggableA.pinnedPosition.x < draggableB.pinnedPosition.x) return -1;
	        if (draggableA.pinnedPosition.x > draggableB.pinnedPosition.x) return 1;
	        return 0;
	      }
	    }
	  }, {
	    key: "distanceFunc",
	    get: function get() {
	      return this.options.getDistance || getDistance;
	    }
	  }, {
	    key: "positions",
	    get: function get() {
	      return this.getCurrentPinnedPositions();
	    },
	    set: function set(positions) {
	      var _this14 = this;

	      var message = 'wrong array length';

	      if (positions.length === this.draggables.length) {
	        positions.forEach(function (point, i) {
	          _newArrowCheck(this, _this14);

	          this.draggables[i].pinPosition(point);
	        }.bind(this));
	      } else {
	        throw message;
	      }
	    }
	  }, {
	    key: "enable",
	    get: function get() {
	      return this._enable;
	    },
	    set: function set(enable) {
	      var _this15 = this;

	      this._enable = enable;
	      this.draggables.forEach(function (draggable) {
	        _newArrowCheck(this, _this15);

	        draggable.enable = enable;
	      }.bind(this));
	    }
	  }], [{
	    key: "factory",
	    value: function factory(containerElement, elements) {
	      var _this16 = this;

	      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	      var draggables = Array.from(elements).map(function (element) {
	        _newArrowCheck(this, _this16);

	        return new Draggable(element, Object.assign({
	          container: containerElement
	        }, options.draggable || {}));
	      }.bind(this));
	      return new List(draggables, Object.assign({
	        container: containerElement
	      }, options.list || {}));
	    }
	  }]);

	  return List;
	}(EventEmitter);

	var _this = undefined;

	var arrayMove = function arrayMove(array, from, to) {
	  _newArrowCheck(this, _this);

	  array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0]);
	}.bind(undefined);

	var BubblingList = /*#__PURE__*/function (_List) {
	  _inherits(BubblingList, _List);

	  var _super = _createSuper(BubblingList);

	  function BubblingList(draggables) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    _classCallCheck(this, BubblingList);

	    return _super.call(this, draggables, options);
	  }

	  _createClass(BubblingList, [{
	    key: "initDraggable",
	    value: function initDraggable(draggable) {
	      var _this2 = this;

	      draggable.on('drag:start', function () {
	        _newArrowCheck(this, _this2);

	        return this.autoDetectVerticalGap(draggable);
	      }.bind(this));

	      _get(_getPrototypeOf(BubblingList.prototype), "initDraggable", this).call(this, draggable);
	    }
	  }, {
	    key: "autoDetectVerticalGap",
	    value: function autoDetectVerticalGap() {
	      if (this.draggables.length >= 2) {
	        var sorted = this.getSortedDraggables();
	        this.verticalGap = sorted[1].pinnedPosition.y - sorted[0].pinnedPosition.y - sorted[0].getSize().y;
	      } else {
	        this.verticalGap = 0;
	      }

	      if (this.draggables.length >= 1) {
	        this.startPosition = this.draggables[0].pinnedPosition;
	      }
	    }
	  }, {
	    key: "onMove",
	    value: function onMove(draggable) {
	      var _this3 = this;

	      var sortedDraggables = this.getSortedDraggables();
	      var pinnedPositions = sortedDraggables.map(function (draggable) {
	        _newArrowCheck(this, _this3);

	        return draggable.pinnedPosition;
	      }.bind(this));
	      var currentIndex = sortedDraggables.indexOf(draggable);
	      var targetIndex = indexOfNearestPoint(pinnedPositions, draggable.position, this.options.radius, this.distanceFunc);

	      if (targetIndex !== -1 && currentIndex !== targetIndex) {
	        arrayMove(sortedDraggables, currentIndex, targetIndex);
	        this.bubbling(sortedDraggables, draggable);
	        this.changedDuringIteration = true;
	      }
	    }
	  }, {
	    key: "bubbling",
	    value: function bubbling(sortedDraggables, currentDraggable) {
	      var _this4 = this;

	      var currentPosition = this.startPosition.clone();
	      sortedDraggables || (sortedDraggables = this.getSortedDraggables());
	      sortedDraggables.forEach(function (draggable) {
	        _newArrowCheck(this, _this4);

	        if (!draggable.pinnedPosition.compare(currentPosition)) {
	          if (draggable === currentDraggable && !currentDraggable.nativeDragAndDrop) {
	            draggable.pinnedPosition = currentPosition.clone();
	          } else {
	            draggable.pinPosition(currentPosition, draggable === currentDraggable ? 0 : this.options.timeExcange);
	          }
	        }

	        currentPosition.y = currentPosition.y + draggable.getSize().y + this.verticalGap;
	      }.bind(this));
	    }
	  }, {
	    key: "remove",
	    value: function remove(draggables) {
	      var _this5 = this;

	      if (!(draggables instanceof Array)) {
	        draggables = [draggables];
	      }

	      draggables.forEach(function (draggable) {
	        _newArrowCheck(this, _this5);

	        return this.releaseDraggable(draggable);
	      }.bind(this));
	      this.draggables.forEach(function (d) {
	        _newArrowCheck(this, _this5);

	        return d.startPositioning();
	      }.bind(this));
	      this.bubbling();
	    }
	  }, {
	    key: "distanceFunc",
	    get: function get() {
	      return this.options.getDistance || getYDifference;
	    }
	  }], [{
	    key: "factory",
	    value: function factory(containerElement, elements) {
	      var _this6 = this;

	      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	      var draggables = Array.from(elements).map(function (element) {
	        _newArrowCheck(this, _this6);

	        return new Draggable(element, Object.assign({
	          container: containerElement
	        }, options.draggable || {}));
	      }.bind(this));
	      return new BubblingList(draggables, Object.assign({
	        container: containerElement
	      }, options.list || {}));
	    }
	  }]);

	  return BubblingList;
	}(List);

	exports.Bound = Bound;
	exports.BoundToArc = BoundToArc;
	exports.BoundToCircle = BoundToCircle;
	exports.BoundToElement = BoundToElement;
	exports.BoundToLine = BoundToLine;
	exports.BoundToLineX = BoundToLineX;
	exports.BoundToLineY = BoundToLineY;
	exports.BoundToRectangle = BoundToRectangle;
	exports.BubblingList = BubblingList;
	exports.Draggable = Draggable;
	exports.FloatLeftStrategy = FloatLeftStrategy;
	exports.FloatRightStrategy = FloatRightStrategy;
	exports.List = List;
	exports.NotCrossingStrategy = NotCrossingStrategy;
	exports.Point = Point;
	exports.Rectangle = Rectangle;
	exports.Scope = Scope;
	exports.Target = Target;
	exports.defaultScope = defaultScope;
	exports.getDistance = getDistance;
	exports.getXDifference = getXDifference;
	exports.getYDifference = getYDifference;
	exports.indexOfNearestPoint = indexOfNearestPoint;
	exports.scope = scope;
	exports.scopes = scopes;
	exports.transformedSpaceDistanceFactory = transformedSpaceDistanceFactory;

	Object.defineProperty(exports, '__esModule', { value: true });

	return exports;

})({});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGV2LmpzIiwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2xvYmFsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1jYWxsYWJsZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbmF0aXZlLXN5bWJvbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1zeW1ib2wuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1tZXRob2QuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb3JkaW5hcnktdG8tcHJpbWl0aXZlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NldC1nbG9iYWwuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NoYXJlZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1vYmplY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91aWQuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleS5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3Y4LXByb3RvdHlwZS1kZWZpbmUtYnVnLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eS5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25hdGl2ZS13ZWFrLW1hcC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2hpZGRlbi1rZXlzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHkuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VudW0tYnVnLWtleXMuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vd24ta2V5cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2V4cG9ydC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0b3ItY2xvc2UuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2FsbC13aXRoLXNhZmUtaXRlcmF0aW9uLWNsb3NpbmcuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0b3JzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLWFycmF5LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1jb25zdHJ1Y3Rvci5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHkuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtaXRlcmF0b3IuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktZnJvbS5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jaGVjay1jb3JyZWN0bmVzcy1vZi1pdGVyYXRpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZyb20uanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tc3RyaW5nLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N0cmluZy1tdWx0aWJ5dGUuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWtleXMuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2h0bWwuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3JyZWN0LXByb3RvdHlwZS1nZXR0ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0b3JzLWNvcmUuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcuanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLWl0ZXJhdG9yLWNvbnN0cnVjdG9yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2EtcG9zc2libGUtcHJvdG90eXBlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1zZXQtcHJvdG90eXBlLW9mLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RlZmluZS1pdGVyYXRvci5qcyIsIi4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLml0ZXJhdG9yLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1hc3NpZ24uanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5hc3NpZ24uanMiLCIuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXRvLWFycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuZW50cmllcy5qcyIsIi4uL3NyYy9nZW9tZXRyeS9wb2ludC5qcyIsIi4uL3NyYy9nZW9tZXRyeS9yZWN0YW5nbGUuanMiLCIuLi9zcmMvdXRpbHMvZ2V0LWRlZmF1bHQtY29udGFpbmVyLmpzIiwiLi4vc3JjL2V2ZW50RW1pdHRlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9kZXNhbmRyby1nZXQtc3R5bGUtcHJvcGVydHkvZ2V0LXN0eWxlLXByb3BlcnR5LmpzIiwiLi4vc3JjL2dlb21ldHJ5L2Rpc3RhbmNlcy5qcyIsIi4uL3NyYy9nZW9tZXRyeS9ib3VuZHMuanMiLCIuLi9zcmMvZ2VvbWV0cnkvYW5nbGVzLmpzIiwiLi4vc3JjL2JvdW5kaW5nLmpzIiwiLi4vc3JjL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtLmpzIiwiLi4vc3JjL3V0aWxzL3JhbmdlLmpzIiwiLi4vc3JjL3Bvc2l0aW9uaW5nLmpzIiwiLi4vc3JjL3RhcmdldC5qcyIsIi4uL3NyYy9zY29wZS5qcyIsIi4uL3NyYy91dGlscy9pcy1zdXBwb3J0LXBhc3NpdmUtZXZlbnRzLmpzIiwiLi4vc3JjL2RyYWdnYWJsZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvdXRpbHMvcmVzaXplT2JzZXJ2ZXJzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9hbGdvcml0aG1zL2hhc0FjdGl2ZU9ic2VydmF0aW9ucy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9oYXNTa2lwcGVkT2JzZXJ2YXRpb25zLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9hbGdvcml0aG1zL2RlbGl2ZXJSZXNpemVMb29wRXJyb3IuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL1Jlc2l6ZU9ic2VydmVyQm94T3B0aW9ucy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvdXRpbHMvZnJlZXplLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9SZXNpemVPYnNlcnZlclNpemUuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL0RPTVJlY3RSZWFkT25seS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvdXRpbHMvZWxlbWVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvdXRpbHMvZ2xvYmFsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9hbGdvcml0aG1zL2NhbGN1bGF0ZUJveFNpemUuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL1Jlc2l6ZU9ic2VydmVyRW50cnkuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL2FsZ29yaXRobXMvY2FsY3VsYXRlRGVwdGhGb3JOb2RlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9hbGdvcml0aG1zL2Jyb2FkY2FzdEFjdGl2ZU9ic2VydmF0aW9ucy5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvYWxnb3JpdGhtcy9nYXRoZXJBY3RpdmVPYnNlcnZhdGlvbnNBdERlcHRoLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi91dGlscy9wcm9jZXNzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi91dGlscy9xdWV1ZU1pY3JvVGFzay5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvdXRpbHMvcXVldWVSZXNpemVPYnNlcnZlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvdXRpbHMvc2NoZWR1bGVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BqdWdnbGUvcmVzaXplLW9ic2VydmVyL2xpYi9SZXNpemVPYnNlcnZhdGlvbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvUmVzaXplT2JzZXJ2ZXJEZXRhaWwuanMiLCIuLi9ub2RlX21vZHVsZXMvQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIvbGliL1Jlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9AanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlci9saWIvUmVzaXplT2JzZXJ2ZXIuanMiLCIuLi9zcmMvbGlzdC5qcyIsIi4uL3NyYy9idWJibGluZ0xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGNoZWNrID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAmJiBpdC5NYXRoID09IE1hdGggJiYgaXQ7XG59O1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxubW9kdWxlLmV4cG9ydHMgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMteC9uby1nbG9iYWwtdGhpcyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBnbG9iYWxUaGlzID09ICdvYmplY3QnICYmIGdsb2JhbFRoaXMpIHx8XG4gIGNoZWNrKHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93KSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzIC0tIHNhZmVcbiAgY2hlY2sodHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZikgfHxcbiAgY2hlY2sodHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuYyAtLSBmYWxsYmFja1xuICAoZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSkoKSB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBEZXRlY3QgSUU4J3MgaW5jb21wbGV0ZSBkZWZpbmVQcm9wZXJ0eSBpbXBsZW1lbnRhdGlvblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMteC9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgMSwgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSlbMV0gIT0gNztcbn0pO1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzLXgvbm8tZnVuY3Rpb24tcHJvdG90eXBlLWJpbmQgLS0gc2FmZVxuICB2YXIgdGVzdCA9IChmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0pLmJpbmQoKTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGlucyAtLSBzYWZlXG4gIHJldHVybiB0eXBlb2YgdGVzdCAhPSAnZnVuY3Rpb24nIHx8IHRlc3QuaGFzT3duUHJvcGVydHkoJ3Byb3RvdHlwZScpO1xufSk7XG4iLCJ2YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIGNhbGwgPSBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbDtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IGNhbGwuYmluZChjYWxsKSA6IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGNhbGwuYXBwbHkoY2FsbCwgYXJndW1lbnRzKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMteC9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBOYXNob3JuIH4gSkRLOCBidWdcbnZhciBOQVNIT1JOX0JVRyA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvciAmJiAhJHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoeyAxOiAyIH0sIDEpO1xuXG4vLyBgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZWAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5wcm90b3R5cGUucHJvcGVydHlpc2VudW1lcmFibGVcbmV4cG9ydHMuZiA9IE5BU0hPUk5fQlVHID8gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoVikge1xuICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLCBWKTtcbiAgcmV0dXJuICEhZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLmVudW1lcmFibGU7XG59IDogJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsInZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgYmluZCA9IEZ1bmN0aW9uUHJvdG90eXBlLmJpbmQ7XG52YXIgY2FsbCA9IEZ1bmN0aW9uUHJvdG90eXBlLmNhbGw7XG52YXIgdW5jdXJyeVRoaXMgPSBOQVRJVkVfQklORCAmJiBiaW5kLmJpbmQoY2FsbCwgY2FsbCk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX0JJTkQgPyBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZuICYmIHVuY3VycnlUaGlzKGZuKTtcbn0gOiBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZuICYmIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2FsbC5hcHBseShmbiwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCJ2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbnZhciB0b1N0cmluZyA9IHVuY3VycnlUaGlzKHt9LnRvU3RyaW5nKTtcbnZhciBzdHJpbmdTbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHN0cmluZ1NsaWNlKHRvU3RyaW5nKGl0KSwgOCwgLTEpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbnZhciBPYmplY3QgPSBnbG9iYWwuT2JqZWN0O1xudmFyIHNwbGl0ID0gdW5jdXJyeVRoaXMoJycuc3BsaXQpO1xuXG4vLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xubW9kdWxlLmV4cG9ydHMgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIHRocm93cyBhbiBlcnJvciBpbiByaGlubywgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3JoaW5vL2lzc3Vlcy8zNDZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGlucyAtLSBzYWZlXG4gIHJldHVybiAhT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCk7XG59KSA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY2xhc3NvZihpdCkgPT0gJ1N0cmluZycgPyBzcGxpdChpdCwgJycpIDogT2JqZWN0KGl0KTtcbn0gOiBPYmplY3Q7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcblxuLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG4iLCIvLyBgSXNDYWxsYWJsZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWlzY2FsbGFibGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJztcbn07XG4iLCJ2YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiBpc0NhbGxhYmxlKGl0KTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIGFGdW5jdGlvbiA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gaXNDYWxsYWJsZShhcmd1bWVudCkgPyBhcmd1bWVudCA6IHVuZGVmaW5lZDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWVzcGFjZSwgbWV0aG9kKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGFGdW5jdGlvbihnbG9iYWxbbmFtZXNwYWNlXSkgOiBnbG9iYWxbbmFtZXNwYWNlXSAmJiBnbG9iYWxbbmFtZXNwYWNlXVttZXRob2RdO1xufTtcbiIsInZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1bmN1cnJ5VGhpcyh7fS5pc1Byb3RvdHlwZU9mKTtcbiIsInZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ25hdmlnYXRvcicsICd1c2VyQWdlbnQnKSB8fCAnJztcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG5cbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgRGVubyA9IGdsb2JhbC5EZW5vO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zIHx8IERlbm8gJiYgRGVuby52ZXJzaW9uO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjg7XG52YXIgbWF0Y2gsIHZlcnNpb247XG5cbmlmICh2OCkge1xuICBtYXRjaCA9IHY4LnNwbGl0KCcuJyk7XG4gIC8vIGluIG9sZCBDaHJvbWUsIHZlcnNpb25zIG9mIFY4IGlzbid0IFY4ID0gQ2hyb21lIC8gMTBcbiAgLy8gYnV0IHRoZWlyIGNvcnJlY3QgdmVyc2lvbnMgYXJlIG5vdCBpbnRlcmVzdGluZyBmb3IgdXNcbiAgdmVyc2lvbiA9IG1hdGNoWzBdID4gMCAmJiBtYXRjaFswXSA8IDQgPyAxIDogKyhtYXRjaFswXSArIG1hdGNoWzFdKTtcbn1cblxuLy8gQnJvd3NlckZTIE5vZGVKUyBgcHJvY2Vzc2AgcG9seWZpbGwgaW5jb3JyZWN0bHkgc2V0IGAudjhgIHRvIGAwLjBgXG4vLyBzbyBjaGVjayBgdXNlckFnZW50YCBldmVuIGlmIGAudjhgIGV4aXN0cywgYnV0IDBcbmlmICghdmVyc2lvbiAmJiB1c2VyQWdlbnQpIHtcbiAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkKykvKTtcbiAgaWYgKCFtYXRjaCB8fCBtYXRjaFsxXSA+PSA3NCkge1xuICAgIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcbiAgICBpZiAobWF0Y2gpIHZlcnNpb24gPSArbWF0Y2hbMV07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJzaW9uO1xuIiwiLyogZXNsaW50LWRpc2FibGUgZXMteC9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzLXgvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSAhIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN5bWJvbCA9IFN5bWJvbCgpO1xuICAvLyBDaHJvbWUgMzggU3ltYm9sIGhhcyBpbmNvcnJlY3QgdG9TdHJpbmcgY29udmVyc2lvblxuICAvLyBgZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzYCBwb2x5ZmlsbCBzeW1ib2xzIGNvbnZlcnRlZCB0byBvYmplY3QgYXJlIG5vdCBTeW1ib2wgaW5zdGFuY2VzXG4gIHJldHVybiAhU3RyaW5nKHN5bWJvbCkgfHwgIShPYmplY3Qoc3ltYm9sKSBpbnN0YW5jZW9mIFN5bWJvbCkgfHxcbiAgICAvLyBDaHJvbWUgMzgtNDAgc3ltYm9scyBhcmUgbm90IGluaGVyaXRlZCBmcm9tIERPTSBjb2xsZWN0aW9ucyBwcm90b3R5cGVzIHRvIGluc3RhbmNlc1xuICAgICFTeW1ib2wuc2hhbSAmJiBWOF9WRVJTSU9OICYmIFY4X1ZFUlNJT04gPCA0MTtcbn0pO1xuIiwiLyogZXNsaW50LWRpc2FibGUgZXMteC9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25hdGl2ZS1zeW1ib2wnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfU1lNQk9MXG4gICYmICFTeW1ib2wuc2hhbVxuICAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc1Byb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YnKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xuXG52YXIgT2JqZWN0ID0gZ2xvYmFsLk9iamVjdDtcblxubW9kdWxlLmV4cG9ydHMgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgJFN5bWJvbCA9IGdldEJ1aWx0SW4oJ1N5bWJvbCcpO1xuICByZXR1cm4gaXNDYWxsYWJsZSgkU3ltYm9sKSAmJiBpc1Byb3RvdHlwZU9mKCRTeW1ib2wucHJvdG90eXBlLCBPYmplY3QoaXQpKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG52YXIgU3RyaW5nID0gZ2xvYmFsLlN0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gU3RyaW5nKGFyZ3VtZW50KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gJ09iamVjdCc7XG4gIH1cbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciB0cnlUb1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90cnktdG8tc3RyaW5nJyk7XG5cbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBJc0NhbGxhYmxlKGFyZ3VtZW50KSBpcyB0cnVlYFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGlzQ2FsbGFibGUoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IFR5cGVFcnJvcih0cnlUb1N0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG59O1xuIiwidmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG5cbi8vIGBHZXRNZXRob2RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1nZXRtZXRob2Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFYsIFApIHtcbiAgdmFyIGZ1bmMgPSBWW1BdO1xuICByZXR1cm4gZnVuYyA9PSBudWxsID8gdW5kZWZpbmVkIDogYUNhbGxhYmxlKGZ1bmMpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcblxuLy8gYE9yZGluYXJ5VG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vcmRpbmFyeXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKHByZWYgPT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChpc0NhbGxhYmxlKGZuID0gaW5wdXQudmFsdWVPZikgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChwcmVmICE9PSAnc3RyaW5nJyAmJiBpc0NhbGxhYmxlKGZuID0gaW5wdXQudG9TdHJpbmcpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzLXgvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICB0cnkge1xuICAgIGRlZmluZVByb3BlcnR5KGdsb2JhbCwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBnbG9iYWxba2V5XSA9IHZhbHVlO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNldEdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtZ2xvYmFsJyk7XG5cbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IHNldEdsb2JhbChTSEFSRUQsIHt9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdG9yZTtcbiIsInZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246ICczLjIyLjQnLFxuICBtb2RlOiBJU19QVVJFID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTQtMjAyMiBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KScsXG4gIGxpY2Vuc2U6ICdodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9ibG9iL3YzLjIyLjQvTElDRU5TRScsXG4gIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzJ1xufSk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbnZhciBPYmplY3QgPSBnbG9iYWwuT2JqZWN0O1xuXG4vLyBgVG9PYmplY3RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b29iamVjdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSk7XG59O1xuIiwidmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSB1bmN1cnJ5VGhpcyh7fS5oYXNPd25Qcm9wZXJ0eSk7XG5cbi8vIGBIYXNPd25Qcm9wZXJ0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWhhc293bnByb3BlcnR5XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMteC9uby1vYmplY3QtaGFzb3duIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0Lmhhc093biB8fCBmdW5jdGlvbiBoYXNPd24oaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkodG9PYmplY3QoaXQpLCBrZXkpO1xufTtcbiIsInZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyIGlkID0gMDtcbnZhciBwb3N0Zml4ID0gTWF0aC5yYW5kb20oKTtcbnZhciB0b1N0cmluZyA9IHVuY3VycnlUaGlzKDEuMC50b1N0cmluZyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnICsgKGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXkpICsgJylfJyArIHRvU3RyaW5nKCsraWQgKyBwb3N0Zml4LCAzNik7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uYXRpdmUtc3ltYm9sJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyIFdlbGxLbm93blN5bWJvbHNTdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG52YXIgU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciBzeW1ib2xGb3IgPSBTeW1ib2wgJiYgU3ltYm9sWydmb3InXTtcbnZhciBjcmVhdGVXZWxsS25vd25TeW1ib2wgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IFN5bWJvbCA6IFN5bWJvbCAmJiBTeW1ib2wud2l0aG91dFNldHRlciB8fCB1aWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgaWYgKCFoYXNPd24oV2VsbEtub3duU3ltYm9sc1N0b3JlLCBuYW1lKSB8fCAhKE5BVElWRV9TWU1CT0wgfHwgdHlwZW9mIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9PSAnc3RyaW5nJykpIHtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSAnU3ltYm9sLicgKyBuYW1lO1xuICAgIGlmIChOQVRJVkVfU1lNQk9MICYmIGhhc093bihTeW1ib2wsIG5hbWUpKSB7XG4gICAgICBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV0gPSBTeW1ib2xbbmFtZV07XG4gICAgfSBlbHNlIGlmIChVU0VfU1lNQk9MX0FTX1VJRCAmJiBzeW1ib2xGb3IpIHtcbiAgICAgIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IHN5bWJvbEZvcihkZXNjcmlwdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IGNyZWF0ZVdlbGxLbm93blN5bWJvbChkZXNjcmlwdGlvbik7XG4gICAgfVxuICB9IHJldHVybiBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV07XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1zeW1ib2wnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xudmFyIG9yZGluYXJ5VG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3JkaW5hcnktdG8tcHJpbWl0aXZlJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIFRPX1BSSU1JVElWRSA9IHdlbGxLbm93blN5bWJvbCgndG9QcmltaXRpdmUnKTtcblxuLy8gYFRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIGlmICghaXNPYmplY3QoaW5wdXQpIHx8IGlzU3ltYm9sKGlucHV0KSkgcmV0dXJuIGlucHV0O1xuICB2YXIgZXhvdGljVG9QcmltID0gZ2V0TWV0aG9kKGlucHV0LCBUT19QUklNSVRJVkUpO1xuICB2YXIgcmVzdWx0O1xuICBpZiAoZXhvdGljVG9QcmltKSB7XG4gICAgaWYgKHByZWYgPT09IHVuZGVmaW5lZCkgcHJlZiA9ICdkZWZhdWx0JztcbiAgICByZXN1bHQgPSBjYWxsKGV4b3RpY1RvUHJpbSwgaW5wdXQsIHByZWYpO1xuICAgIGlmICghaXNPYmplY3QocmVzdWx0KSB8fCBpc1N5bWJvbChyZXN1bHQpKSByZXR1cm4gcmVzdWx0O1xuICAgIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbiAgfVxuICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ251bWJlcic7XG4gIHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlKGlucHV0LCBwcmVmKTtcbn07XG4iLCJ2YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG5cbi8vIGBUb1Byb3BlcnR5S2V5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcm9wZXJ0eWtleVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCAnc3RyaW5nJyk7XG4gIHJldHVybiBpc1N5bWJvbChrZXkpID8ga2V5IDoga2V5ICsgJyc7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyIGRvY3VtZW50ID0gZ2xvYmFsLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgRVhJU1RTID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gRVhJU1RTID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcblxuLy8gVGhhbmtzIHRvIElFOCBmb3IgaXRzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMteC9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjcmVhdGVFbGVtZW50KCdkaXYnKSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9XG4gIH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzLXgvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5ZGVzY3JpcHRvclxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSW5kZXhlZE9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzT3duKE8sIFApKSByZXR1cm4gY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKCFjYWxsKHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlLmYsIE8sIFApLCBPW1BdKTtcbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBWOCB+IENocm9tZSAzNi1cbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMzMzRcbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMteC9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdwcm90b3R5cGUnLCB7XG4gICAgdmFsdWU6IDQyLFxuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KS5wcm90b3R5cGUgIT0gNDI7XG59KTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciBTdHJpbmcgPSBnbG9iYWwuU3RyaW5nO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG5cbi8vIGBBc3NlcnQ6IFR5cGUoYXJndW1lbnQpIGlzIE9iamVjdGBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc09iamVjdChhcmd1bWVudCkpIHJldHVybiBhcmd1bWVudDtcbiAgdGhyb3cgVHlwZUVycm9yKFN0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhbiBvYmplY3QnKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcbnZhciBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1ZycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG5cbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzLXgvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciAkZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMteC9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBFTlVNRVJBQkxFID0gJ2VudW1lcmFibGUnO1xudmFyIENPTkZJR1VSQUJMRSA9ICdjb25maWd1cmFibGUnO1xudmFyIFdSSVRBQkxFID0gJ3dyaXRhYmxlJztcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA/IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKHR5cGVvZiBPID09PSAnZnVuY3Rpb24nICYmIFAgPT09ICdwcm90b3R5cGUnICYmICd2YWx1ZScgaW4gQXR0cmlidXRlcyAmJiBXUklUQUJMRSBpbiBBdHRyaWJ1dGVzICYmICFBdHRyaWJ1dGVzW1dSSVRBQkxFXSkge1xuICAgIHZhciBjdXJyZW50ID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgICBpZiAoY3VycmVudCAmJiBjdXJyZW50W1dSSVRBQkxFXSkge1xuICAgICAgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gICAgICBBdHRyaWJ1dGVzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IENPTkZJR1VSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tDT05GSUdVUkFCTEVdIDogY3VycmVudFtDT05GSUdVUkFCTEVdLFxuICAgICAgICBlbnVtZXJhYmxlOiBFTlVNRVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0VOVU1FUkFCTEVdIDogY3VycmVudFtFTlVNRVJBQkxFXSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgICB9O1xuICAgIH1cbiAgfSByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xufSA6ICRkZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCcpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy14L25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldERlc2NyaXB0b3IgPSBERVNDUklQVE9SUyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG52YXIgRVhJU1RTID0gaGFzT3duKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpO1xuLy8gYWRkaXRpb25hbCBwcm90ZWN0aW9uIGZyb20gbWluaWZpZWQgLyBtYW5nbGVkIC8gZHJvcHBlZCBmdW5jdGlvbiBuYW1lc1xudmFyIFBST1BFUiA9IEVYSVNUUyAmJiAoZnVuY3Rpb24gc29tZXRoaW5nKCkgeyAvKiBlbXB0eSAqLyB9KS5uYW1lID09PSAnc29tZXRoaW5nJztcbnZhciBDT05GSUdVUkFCTEUgPSBFWElTVFMgJiYgKCFERVNDUklQVE9SUyB8fCAoREVTQ1JJUFRPUlMgJiYgZ2V0RGVzY3JpcHRvcihGdW5jdGlvblByb3RvdHlwZSwgJ25hbWUnKS5jb25maWd1cmFibGUpKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEVYSVNUUzogRVhJU1RTLFxuICBQUk9QRVI6IFBST1BFUixcbiAgQ09ORklHVVJBQkxFOiBDT05GSUdVUkFCTEVcbn07XG4iLCJ2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG52YXIgZnVuY3Rpb25Ub1N0cmluZyA9IHVuY3VycnlUaGlzKEZ1bmN0aW9uLnRvU3RyaW5nKTtcblxuLy8gdGhpcyBoZWxwZXIgYnJva2VuIGluIGBjb3JlLWpzQDMuNC4xLTMuNC40YCwgc28gd2UgY2FuJ3QgdXNlIGBzaGFyZWRgIGhlbHBlclxuaWYgKCFpc0NhbGxhYmxlKHN0b3JlLmluc3BlY3RTb3VyY2UpKSB7XG4gIHN0b3JlLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb25Ub1N0cmluZyhpdCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmUuaW5zcGVjdFNvdXJjZTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGluc3BlY3RTb3VyY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UnKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0NhbGxhYmxlKFdlYWtNYXApICYmIC9uYXRpdmUgY29kZS8udGVzdChpbnNwZWN0U291cmNlKFdlYWtNYXApKTtcbiIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xuXG52YXIga2V5cyA9IHNoYXJlZCgna2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIGtleXNba2V5XSB8fCAoa2V5c1trZXldID0gdWlkKGtleSkpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJ2YXIgTkFUSVZFX1dFQUtfTUFQID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25hdGl2ZS13ZWFrLW1hcCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCA9ICdPYmplY3QgYWxyZWFkeSBpbml0aWFsaXplZCc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcbnZhciBXZWFrTWFwID0gZ2xvYmFsLldlYWtNYXA7XG52YXIgc2V0LCBnZXQsIGhhcztcblxudmFyIGVuZm9yY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGhhcyhpdCkgPyBnZXQoaXQpIDogc2V0KGl0LCB7fSk7XG59O1xuXG52YXIgZ2V0dGVyRm9yID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBzdGF0ZTtcbiAgICBpZiAoIWlzT2JqZWN0KGl0KSB8fCAoc3RhdGUgPSBnZXQoaXQpKS50eXBlICE9PSBUWVBFKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkJyk7XG4gICAgfSByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuXG5pZiAoTkFUSVZFX1dFQUtfTUFQIHx8IHNoYXJlZC5zdGF0ZSkge1xuICB2YXIgc3RvcmUgPSBzaGFyZWQuc3RhdGUgfHwgKHNoYXJlZC5zdGF0ZSA9IG5ldyBXZWFrTWFwKCkpO1xuICB2YXIgd21nZXQgPSB1bmN1cnJ5VGhpcyhzdG9yZS5nZXQpO1xuICB2YXIgd21oYXMgPSB1bmN1cnJ5VGhpcyhzdG9yZS5oYXMpO1xuICB2YXIgd21zZXQgPSB1bmN1cnJ5VGhpcyhzdG9yZS5zZXQpO1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKHdtaGFzKHN0b3JlLCBpdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIHdtc2V0KHN0b3JlLCBpdCwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHdtZ2V0KHN0b3JlLCBpdCkgfHwge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiB3bWhhcyhzdG9yZSwgaXQpO1xuICB9O1xufSBlbHNlIHtcbiAgdmFyIFNUQVRFID0gc2hhcmVkS2V5KCdzdGF0ZScpO1xuICBoaWRkZW5LZXlzW1NUQVRFXSA9IHRydWU7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoaGFzT3duKGl0LCBTVEFURSkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShpdCwgU1RBVEUsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKSA/IGl0W1NUQVRFXSA6IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldCxcbiAgZ2V0OiBnZXQsXG4gIGhhczogaGFzLFxuICBlbmZvcmNlOiBlbmZvcmNlLFxuICBnZXR0ZXJGb3I6IGdldHRlckZvclxufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xudmFyIENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUnKS5DT05GSUdVUkFCTEU7XG52YXIgaW5zcGVjdFNvdXJjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZScpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcblxudmFyIGVuZm9yY2VJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5lbmZvcmNlO1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldDtcblxudmFyIENPTkZJR1VSQUJMRV9MRU5HVEggPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAnbGVuZ3RoJywgeyB2YWx1ZTogOCB9KS5sZW5ndGggIT09IDg7XG59KTtcblxudmFyIFRFTVBMQVRFID0gU3RyaW5nKFN0cmluZykuc3BsaXQoJ1N0cmluZycpO1xuXG52YXIgbWFrZUJ1aWx0SW4gPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgbmFtZSwgb3B0aW9ucykge1xuICBpZiAoU3RyaW5nKG5hbWUpLnNsaWNlKDAsIDcpID09PSAnU3ltYm9sKCcpIHtcbiAgICBuYW1lID0gJ1snICsgU3RyaW5nKG5hbWUpLnJlcGxhY2UoL15TeW1ib2xcXCgoW14pXSopXFwpLywgJyQxJykgKyAnXSc7XG4gIH1cbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5nZXR0ZXIpIG5hbWUgPSAnZ2V0ICcgKyBuYW1lO1xuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnNldHRlcikgbmFtZSA9ICdzZXQgJyArIG5hbWU7XG4gIGlmICghaGFzT3duKHZhbHVlLCAnbmFtZScpIHx8IChDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSAmJiB2YWx1ZS5uYW1lICE9PSBuYW1lKSkge1xuICAgIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbmFtZScsIHsgdmFsdWU6IG5hbWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbiAgfVxuICBpZiAoQ09ORklHVVJBQkxFX0xFTkdUSCAmJiBvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnYXJpdHknKSAmJiB2YWx1ZS5sZW5ndGggIT09IG9wdGlvbnMuYXJpdHkpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ2xlbmd0aCcsIHsgdmFsdWU6IG9wdGlvbnMuYXJpdHkgfSk7XG4gIH1cbiAgdmFyIHN0YXRlID0gZW5mb3JjZUludGVybmFsU3RhdGUodmFsdWUpO1xuICBpZiAoIWhhc093bihzdGF0ZSwgJ3NvdXJjZScpKSB7XG4gICAgc3RhdGUuc291cmNlID0gVEVNUExBVEUuam9pbih0eXBlb2YgbmFtZSA9PSAnc3RyaW5nJyA/IG5hbWUgOiAnJyk7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcblxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXh0ZW5kLW5hdGl2ZSAtLSByZXF1aXJlZFxuRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nID0gbWFrZUJ1aWx0SW4oZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKHRoaXMpICYmIGdldEludGVybmFsU3RhdGUodGhpcykuc291cmNlIHx8IGluc3BlY3RTb3VyY2UodGhpcyk7XG59LCAndG9TdHJpbmcnKTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBtYWtlQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYWtlLWJ1aWx0LWluJyk7XG52YXIgc2V0R2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1nbG9iYWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICB2YXIgdW5zYWZlID0gb3B0aW9ucyA/ICEhb3B0aW9ucy51bnNhZmUgOiBmYWxzZTtcbiAgdmFyIHNpbXBsZSA9IG9wdGlvbnMgPyAhIW9wdGlvbnMuZW51bWVyYWJsZSA6IGZhbHNlO1xuICB2YXIgbm9UYXJnZXRHZXQgPSBvcHRpb25zID8gISFvcHRpb25zLm5vVGFyZ2V0R2V0IDogZmFsc2U7XG4gIHZhciBuYW1lID0gb3B0aW9ucyAmJiBvcHRpb25zLm5hbWUgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubmFtZSA6IGtleTtcbiAgaWYgKGlzQ2FsbGFibGUodmFsdWUpKSBtYWtlQnVpbHRJbih2YWx1ZSwgbmFtZSwgb3B0aW9ucyk7XG4gIGlmIChPID09PSBnbG9iYWwpIHtcbiAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICBlbHNlIHNldEdsb2JhbChrZXksIHZhbHVlKTtcbiAgICByZXR1cm4gTztcbiAgfSBlbHNlIGlmICghdW5zYWZlKSB7XG4gICAgZGVsZXRlIE9ba2V5XTtcbiAgfSBlbHNlIGlmICghbm9UYXJnZXRHZXQgJiYgT1trZXldKSB7XG4gICAgc2ltcGxlID0gdHJ1ZTtcbiAgfVxuICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgZWxzZSBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoTywga2V5LCB2YWx1ZSk7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcblxuLy8gYFRvSW50ZWdlck9ySW5maW5pdHlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2ludGVnZXJvcmluZmluaXR5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIgbnVtYmVyID0gK2FyZ3VtZW50O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIHNhZmVcbiAgcmV0dXJuIG51bWJlciAhPT0gbnVtYmVyIHx8IG51bWJlciA9PT0gMCA/IDAgOiAobnVtYmVyID4gMCA/IGZsb29yIDogY2VpbCkobnVtYmVyKTtcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG5cbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gSGVscGVyIGZvciBhIHBvcHVsYXIgcmVwZWF0aW5nIGNhc2Ugb2YgdGhlIHNwZWM6XG4vLyBMZXQgaW50ZWdlciBiZSA/IFRvSW50ZWdlcihpbmRleCkuXG4vLyBJZiBpbnRlZ2VyIDwgMCwgbGV0IHJlc3VsdCBiZSBtYXgoKGxlbmd0aCArIGludGVnZXIpLCAwKTsgZWxzZSBsZXQgcmVzdWx0IGJlIG1pbihpbnRlZ2VyLCBsZW5ndGgpLlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICB2YXIgaW50ZWdlciA9IHRvSW50ZWdlck9ySW5maW5pdHkoaW5kZXgpO1xuICByZXR1cm4gaW50ZWdlciA8IDAgPyBtYXgoaW50ZWdlciArIGxlbmd0aCwgMCkgOiBtaW4oaW50ZWdlciwgbGVuZ3RoKTtcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG5cbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gYFRvTGVuZ3RoYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9sZW5ndGhcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBhcmd1bWVudCA+IDAgPyBtaW4odG9JbnRlZ2VyT3JJbmZpbml0eShhcmd1bWVudCksIDB4MUZGRkZGRkZGRkZGRkYpIDogMDsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsInZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcblxuLy8gYExlbmd0aE9mQXJyYXlMaWtlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbGVuZ3Rob2ZhcnJheWxpa2Vcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdG9MZW5ndGgob2JqLmxlbmd0aCk7XG59O1xuIiwidmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUueyBpbmRleE9mLCBpbmNsdWRlcyB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICBpZiAoKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pICYmIE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuICBpbmNsdWRlczogY3JlYXRlTWV0aG9kKHRydWUpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4gIGluZGV4T2Y6IGNyZWF0ZU1ldGhvZChmYWxzZSlcbn07XG4iLCJ2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBpbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5kZXhPZjtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBwdXNoID0gdW5jdXJyeVRoaXMoW10ucHVzaCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pICFoYXNPd24oaGlkZGVuS2V5cywga2V5KSAmJiBoYXNPd24oTywga2V5KSAmJiBwdXNoKHJlc3VsdCwga2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhc093bihPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5pbmRleE9mKHJlc3VsdCwga2V5KSB8fCBwdXNoKHJlc3VsdCwga2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIi8vIElFOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSBbXG4gICdjb25zdHJ1Y3RvcicsXG4gICdoYXNPd25Qcm9wZXJ0eScsXG4gICdpc1Byb3RvdHlwZU9mJyxcbiAgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcbiAgJ3RvTG9jYWxlU3RyaW5nJyxcbiAgJ3RvU3RyaW5nJyxcbiAgJ3ZhbHVlT2YnXG5dO1xuIiwidmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxudmFyIGhpZGRlbktleXMgPSBlbnVtQnVnS2V5cy5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5bmFtZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy14L25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eW5hbWVzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy14L25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsInZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xuXG52YXIgY29uY2F0ID0gdW5jdXJyeVRoaXMoW10uY29uY2F0KTtcblxuLy8gYWxsIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBub24tZW51bWVyYWJsZSBhbmQgc3ltYm9sc1xubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCdSZWZsZWN0JywgJ293bktleXMnKSB8fCBmdW5jdGlvbiBvd25LZXlzKGl0KSB7XG4gIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZS5mKGFuT2JqZWN0KGl0KSk7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZjtcbiAgcmV0dXJuIGdldE93blByb3BlcnR5U3ltYm9scyA/IGNvbmNhdChrZXlzLCBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpKSA6IGtleXM7XG59O1xuIiwidmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgb3duS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vd24ta2V5cycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSwgZXhjZXB0aW9ucykge1xuICB2YXIga2V5cyA9IG93bktleXMoc291cmNlKTtcbiAgdmFyIGRlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHlNb2R1bGUuZjtcbiAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoIWhhc093bih0YXJnZXQsIGtleSkgJiYgIShleGNlcHRpb25zICYmIGhhc093bihleGNlcHRpb25zLCBrZXkpKSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgIH1cbiAgfVxufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIHJlcGxhY2VtZW50ID0gLyN8XFwucHJvdG90eXBlXFwuLztcblxudmFyIGlzRm9yY2VkID0gZnVuY3Rpb24gKGZlYXR1cmUsIGRldGVjdGlvbikge1xuICB2YXIgdmFsdWUgPSBkYXRhW25vcm1hbGl6ZShmZWF0dXJlKV07XG4gIHJldHVybiB2YWx1ZSA9PSBQT0xZRklMTCA/IHRydWVcbiAgICA6IHZhbHVlID09IE5BVElWRSA/IGZhbHNlXG4gICAgOiBpc0NhbGxhYmxlKGRldGVjdGlvbikgPyBmYWlscyhkZXRlY3Rpb24pXG4gICAgOiAhIWRldGVjdGlvbjtcbn07XG5cbnZhciBub3JtYWxpemUgPSBpc0ZvcmNlZC5ub3JtYWxpemUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHJldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKHJlcGxhY2VtZW50LCAnLicpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG52YXIgZGF0YSA9IGlzRm9yY2VkLmRhdGEgPSB7fTtcbnZhciBOQVRJVkUgPSBpc0ZvcmNlZC5OQVRJVkUgPSAnTic7XG52YXIgUE9MWUZJTEwgPSBpc0ZvcmNlZC5QT0xZRklMTCA9ICdQJztcblxubW9kdWxlLmV4cG9ydHMgPSBpc0ZvcmNlZDtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbicpO1xudmFyIHNldEdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtZ2xvYmFsJyk7XG52YXIgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMnKTtcbnZhciBpc0ZvcmNlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1mb3JjZWQnKTtcblxuLypcbiAgb3B0aW9ucy50YXJnZXQgICAgICAtIG5hbWUgb2YgdGhlIHRhcmdldCBvYmplY3RcbiAgb3B0aW9ucy5nbG9iYWwgICAgICAtIHRhcmdldCBpcyB0aGUgZ2xvYmFsIG9iamVjdFxuICBvcHRpb25zLnN0YXQgICAgICAgIC0gZXhwb3J0IGFzIHN0YXRpYyBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnByb3RvICAgICAgIC0gZXhwb3J0IGFzIHByb3RvdHlwZSBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnJlYWwgICAgICAgIC0gcmVhbCBwcm90b3R5cGUgbWV0aG9kIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy5mb3JjZWQgICAgICAtIGV4cG9ydCBldmVuIGlmIHRoZSBuYXRpdmUgZmVhdHVyZSBpcyBhdmFpbGFibGVcbiAgb3B0aW9ucy5iaW5kICAgICAgICAtIGJpbmQgbWV0aG9kcyB0byB0aGUgdGFyZ2V0LCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMud3JhcCAgICAgICAgLSB3cmFwIGNvbnN0cnVjdG9ycyB0byBwcmV2ZW50aW5nIGdsb2JhbCBwb2xsdXRpb24sIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy51bnNhZmUgICAgICAtIHVzZSB0aGUgc2ltcGxlIGFzc2lnbm1lbnQgb2YgcHJvcGVydHkgaW5zdGVhZCBvZiBkZWxldGUgKyBkZWZpbmVQcm9wZXJ0eVxuICBvcHRpb25zLnNoYW0gICAgICAgIC0gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICBvcHRpb25zLmVudW1lcmFibGUgIC0gZXhwb3J0IGFzIGVudW1lcmFibGUgcHJvcGVydHlcbiAgb3B0aW9ucy5ub1RhcmdldEdldCAtIHByZXZlbnQgY2FsbGluZyBhIGdldHRlciBvbiB0YXJnZXRcbiAgb3B0aW9ucy5uYW1lICAgICAgICAtIHRoZSAubmFtZSBvZiB0aGUgZnVuY3Rpb24gaWYgaXQgZG9lcyBub3QgbWF0Y2ggdGhlIGtleVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdGlvbnMsIHNvdXJjZSkge1xuICB2YXIgVEFSR0VUID0gb3B0aW9ucy50YXJnZXQ7XG4gIHZhciBHTE9CQUwgPSBvcHRpb25zLmdsb2JhbDtcbiAgdmFyIFNUQVRJQyA9IG9wdGlvbnMuc3RhdDtcbiAgdmFyIEZPUkNFRCwgdGFyZ2V0LCBrZXksIHRhcmdldFByb3BlcnR5LCBzb3VyY2VQcm9wZXJ0eSwgZGVzY3JpcHRvcjtcbiAgaWYgKEdMT0JBTCkge1xuICAgIHRhcmdldCA9IGdsb2JhbDtcbiAgfSBlbHNlIGlmIChTVEFUSUMpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxbVEFSR0VUXSB8fCBzZXRHbG9iYWwoVEFSR0VULCB7fSk7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0ID0gKGdsb2JhbFtUQVJHRVRdIHx8IHt9KS5wcm90b3R5cGU7XG4gIH1cbiAgaWYgKHRhcmdldCkgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgc291cmNlUHJvcGVydHkgPSBzb3VyY2Vba2V5XTtcbiAgICBpZiAob3B0aW9ucy5ub1RhcmdldEdldCkge1xuICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gICAgICB0YXJnZXRQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci52YWx1ZTtcbiAgICB9IGVsc2UgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRba2V5XTtcbiAgICBGT1JDRUQgPSBpc0ZvcmNlZChHTE9CQUwgPyBrZXkgOiBUQVJHRVQgKyAoU1RBVElDID8gJy4nIDogJyMnKSArIGtleSwgb3B0aW9ucy5mb3JjZWQpO1xuICAgIC8vIGNvbnRhaW5lZCBpbiB0YXJnZXRcbiAgICBpZiAoIUZPUkNFRCAmJiB0YXJnZXRQcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZW9mIHNvdXJjZVByb3BlcnR5ID09IHR5cGVvZiB0YXJnZXRQcm9wZXJ0eSkgY29udGludWU7XG4gICAgICBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKHNvdXJjZVByb3BlcnR5LCB0YXJnZXRQcm9wZXJ0eSk7XG4gICAgfVxuICAgIC8vIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgICBpZiAob3B0aW9ucy5zaGFtIHx8ICh0YXJnZXRQcm9wZXJ0eSAmJiB0YXJnZXRQcm9wZXJ0eS5zaGFtKSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHNvdXJjZVByb3BlcnR5LCAnc2hhbScsIHRydWUpO1xuICAgIH1cbiAgICBkZWZpbmVCdWlsdEluKHRhcmdldCwga2V5LCBzb3VyY2VQcm9wZXJ0eSwgb3B0aW9ucyk7XG4gIH1cbn07XG4iLCJ2YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgYmluZCA9IHVuY3VycnlUaGlzKHVuY3VycnlUaGlzLmJpbmQpO1xuXG4vLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0KSB7XG4gIGFDYWxsYWJsZShmbik7XG4gIHJldHVybiB0aGF0ID09PSB1bmRlZmluZWQgPyBmbiA6IE5BVElWRV9CSU5EID8gYmluZChmbiwgdGhhdCkgOiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsInZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwga2luZCwgdmFsdWUpIHtcbiAgdmFyIGlubmVyUmVzdWx0LCBpbm5lckVycm9yO1xuICBhbk9iamVjdChpdGVyYXRvcik7XG4gIHRyeSB7XG4gICAgaW5uZXJSZXN1bHQgPSBnZXRNZXRob2QoaXRlcmF0b3IsICdyZXR1cm4nKTtcbiAgICBpZiAoIWlubmVyUmVzdWx0KSB7XG4gICAgICBpZiAoa2luZCA9PT0gJ3Rocm93JykgdGhyb3cgdmFsdWU7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGlubmVyUmVzdWx0ID0gY2FsbChpbm5lclJlc3VsdCwgaXRlcmF0b3IpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlubmVyRXJyb3IgPSB0cnVlO1xuICAgIGlubmVyUmVzdWx0ID0gZXJyb3I7XG4gIH1cbiAgaWYgKGtpbmQgPT09ICd0aHJvdycpIHRocm93IHZhbHVlO1xuICBpZiAoaW5uZXJFcnJvcikgdGhyb3cgaW5uZXJSZXN1bHQ7XG4gIGFuT2JqZWN0KGlubmVyUmVzdWx0KTtcbiAgcmV0dXJuIHZhbHVlO1xufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBpdGVyYXRvckNsb3NlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlJyk7XG5cbi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3Jcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIEVOVFJJRVMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gRU5UUklFUyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsICd0aHJvdycsIGVycm9yKTtcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJ2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycycpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgQXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5cbi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3Jcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG90eXBlW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcbiIsInZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG52YXIgdGVzdCA9IHt9O1xuXG50ZXN0W1RPX1NUUklOR19UQUddID0gJ3onO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0cmluZyh0ZXN0KSA9PT0gJ1tvYmplY3Qgel0nO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBUT19TVFJJTkdfVEFHX1NVUFBPUlQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nLXRhZy1zdXBwb3J0Jyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGNsYXNzb2ZSYXcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG52YXIgT2JqZWN0ID0gZ2xvYmFsLk9iamVjdDtcblxuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBDT1JSRUNUX0FSR1VNRU5UUyA9IGNsYXNzb2ZSYXcoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbi8vIGdldHRpbmcgdGFnIGZyb20gRVM2KyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2Bcbm1vZHVsZS5leHBvcnRzID0gVE9fU1RSSU5HX1RBR19TVVBQT1JUID8gY2xhc3NvZlJhdyA6IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgdGFnLCByZXN1bHQ7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mICh0YWcgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRPX1NUUklOR19UQUcpKSA9PSAnc3RyaW5nJyA/IHRhZ1xuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQ09SUkVDVF9BUkdVTUVOVFMgPyBjbGFzc29mUmF3KE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKHJlc3VsdCA9IGNsYXNzb2ZSYXcoTykpID09ICdPYmplY3QnICYmIGlzQ2FsbGFibGUoTy5jYWxsZWUpID8gJ0FyZ3VtZW50cycgOiByZXN1bHQ7XG59O1xuIiwidmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZicpO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgaW5zcGVjdFNvdXJjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZScpO1xuXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBlbXB0eSA9IFtdO1xudmFyIGNvbnN0cnVjdCA9IGdldEJ1aWx0SW4oJ1JlZmxlY3QnLCAnY29uc3RydWN0Jyk7XG52YXIgY29uc3RydWN0b3JSZWdFeHAgPSAvXlxccyooPzpjbGFzc3xmdW5jdGlvbilcXGIvO1xudmFyIGV4ZWMgPSB1bmN1cnJ5VGhpcyhjb25zdHJ1Y3RvclJlZ0V4cC5leGVjKTtcbnZhciBJTkNPUlJFQ1RfVE9fU1RSSU5HID0gIWNvbnN0cnVjdG9yUmVnRXhwLmV4ZWMobm9vcCk7XG5cbnZhciBpc0NvbnN0cnVjdG9yTW9kZXJuID0gZnVuY3Rpb24gaXNDb25zdHJ1Y3Rvcihhcmd1bWVudCkge1xuICBpZiAoIWlzQ2FsbGFibGUoYXJndW1lbnQpKSByZXR1cm4gZmFsc2U7XG4gIHRyeSB7XG4gICAgY29uc3RydWN0KG5vb3AsIGVtcHR5LCBhcmd1bWVudCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG52YXIgaXNDb25zdHJ1Y3RvckxlZ2FjeSA9IGZ1bmN0aW9uIGlzQ29uc3RydWN0b3IoYXJndW1lbnQpIHtcbiAgaWYgKCFpc0NhbGxhYmxlKGFyZ3VtZW50KSkgcmV0dXJuIGZhbHNlO1xuICBzd2l0Y2ggKGNsYXNzb2YoYXJndW1lbnQpKSB7XG4gICAgY2FzZSAnQXN5bmNGdW5jdGlvbic6XG4gICAgY2FzZSAnR2VuZXJhdG9yRnVuY3Rpb24nOlxuICAgIGNhc2UgJ0FzeW5jR2VuZXJhdG9yRnVuY3Rpb24nOiByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyB3ZSBjYW4ndCBjaGVjayAucHJvdG90eXBlIHNpbmNlIGNvbnN0cnVjdG9ycyBwcm9kdWNlZCBieSAuYmluZCBoYXZlbid0IGl0XG4gICAgLy8gYEZ1bmN0aW9uI3RvU3RyaW5nYCB0aHJvd3Mgb24gc29tZSBidWlsdC1pdCBmdW5jdGlvbiBpbiBzb21lIGxlZ2FjeSBlbmdpbmVzXG4gICAgLy8gKGZvciBleGFtcGxlLCBgRE9NUXVhZGAgYW5kIHNpbWlsYXIgaW4gRkY0MS0pXG4gICAgcmV0dXJuIElOQ09SUkVDVF9UT19TVFJJTkcgfHwgISFleGVjKGNvbnN0cnVjdG9yUmVnRXhwLCBpbnNwZWN0U291cmNlKGFyZ3VtZW50KSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cbmlzQ29uc3RydWN0b3JMZWdhY3kuc2hhbSA9IHRydWU7XG5cbi8vIGBJc0NvbnN0cnVjdG9yYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNjb25zdHJ1Y3RvclxubW9kdWxlLmV4cG9ydHMgPSAhY29uc3RydWN0IHx8IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNhbGxlZDtcbiAgcmV0dXJuIGlzQ29uc3RydWN0b3JNb2Rlcm4oaXNDb25zdHJ1Y3Rvck1vZGVybi5jYWxsKVxuICAgIHx8ICFpc0NvbnN0cnVjdG9yTW9kZXJuKE9iamVjdClcbiAgICB8fCAhaXNDb25zdHJ1Y3Rvck1vZGVybihmdW5jdGlvbiAoKSB7IGNhbGxlZCA9IHRydWU7IH0pXG4gICAgfHwgY2FsbGVkO1xufSkgPyBpc0NvbnN0cnVjdG9yTGVnYWN5IDogaXNDb25zdHJ1Y3Rvck1vZGVybjtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHZhciBwcm9wZXJ0eUtleSA9IHRvUHJvcGVydHlLZXkoa2V5KTtcbiAgaWYgKHByb3BlcnR5S2V5IGluIG9iamVjdCkgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIHByb3BlcnR5S2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbcHJvcGVydHlLZXldID0gdmFsdWU7XG59O1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZicpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBnZXRNZXRob2QoaXQsIElURVJBVE9SKVxuICAgIHx8IGdldE1ldGhvZChpdCwgJ0BAaXRlcmF0b3InKVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRyeVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RyeS10by1zdHJpbmcnKTtcbnZhciBnZXRJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5cbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCwgdXNpbmdJdGVyYXRvcikge1xuICB2YXIgaXRlcmF0b3JNZXRob2QgPSBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGdldEl0ZXJhdG9yTWV0aG9kKGFyZ3VtZW50KSA6IHVzaW5nSXRlcmF0b3I7XG4gIGlmIChhQ2FsbGFibGUoaXRlcmF0b3JNZXRob2QpKSByZXR1cm4gYW5PYmplY3QoY2FsbChpdGVyYXRvck1ldGhvZCwgYXJndW1lbnQpKTtcbiAgdGhyb3cgVHlwZUVycm9yKHRyeVRvU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGl0ZXJhYmxlJyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIGNhbGxXaXRoU2FmZUl0ZXJhdGlvbkNsb3NpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2FsbC13aXRoLXNhZmUtaXRlcmF0aW9uLWNsb3NpbmcnKTtcbnZhciBpc0FycmF5SXRlcmF0b3JNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXktaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgaXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jb25zdHJ1Y3RvcicpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgZ2V0SXRlcmF0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yJyk7XG52YXIgZ2V0SXRlcmF0b3JNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG52YXIgQXJyYXkgPSBnbG9iYWwuQXJyYXk7XG5cbi8vIGBBcnJheS5mcm9tYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkuZnJvbVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZSAvKiAsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkICovKSB7XG4gIHZhciBPID0gdG9PYmplY3QoYXJyYXlMaWtlKTtcbiAgdmFyIElTX0NPTlNUUlVDVE9SID0gaXNDb25zdHJ1Y3Rvcih0aGlzKTtcbiAgdmFyIGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBtYXBmbiA9IGFyZ3VtZW50c0xlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gIHZhciBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZDtcbiAgaWYgKG1hcHBpbmcpIG1hcGZuID0gYmluZChtYXBmbiwgYXJndW1lbnRzTGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZCk7XG4gIHZhciBpdGVyYXRvck1ldGhvZCA9IGdldEl0ZXJhdG9yTWV0aG9kKE8pO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yLCBuZXh0LCB2YWx1ZTtcbiAgLy8gaWYgdGhlIHRhcmdldCBpcyBub3QgaXRlcmFibGUgb3IgaXQncyBhbiBhcnJheSB3aXRoIHRoZSBkZWZhdWx0IGl0ZXJhdG9yIC0gdXNlIGEgc2ltcGxlIGNhc2VcbiAgaWYgKGl0ZXJhdG9yTWV0aG9kICYmICEodGhpcyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcmF0b3JNZXRob2QoaXRlcmF0b3JNZXRob2QpKSkge1xuICAgIGl0ZXJhdG9yID0gZ2V0SXRlcmF0b3IoTywgaXRlcmF0b3JNZXRob2QpO1xuICAgIG5leHQgPSBpdGVyYXRvci5uZXh0O1xuICAgIHJlc3VsdCA9IElTX0NPTlNUUlVDVE9SID8gbmV3IHRoaXMoKSA6IFtdO1xuICAgIGZvciAoOyEoc3RlcCA9IGNhbGwobmV4dCwgaXRlcmF0b3IpKS5kb25lOyBpbmRleCsrKSB7XG4gICAgICB2YWx1ZSA9IG1hcHBpbmcgPyBjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlO1xuICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgdmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgICByZXN1bHQgPSBJU19DT05TVFJVQ1RPUiA/IG5ldyB0aGlzKGxlbmd0aCkgOiBBcnJheShsZW5ndGgpO1xuICAgIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICB2YWx1ZSA9IG1hcHBpbmcgPyBtYXBmbihPW2luZGV4XSwgaW5kZXgpIDogT1tpbmRleF07XG4gICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCB2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIGNhbGxlZCA9IDA7XG4gIHZhciBpdGVyYXRvcldpdGhSZXR1cm4gPSB7XG4gICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHsgZG9uZTogISFjYWxsZWQrKyB9O1xuICAgIH0sXG4gICAgJ3JldHVybic6IGZ1bmN0aW9uICgpIHtcbiAgICAgIFNBRkVfQ0xPU0lORyA9IHRydWU7XG4gICAgfVxuICB9O1xuICBpdGVyYXRvcldpdGhSZXR1cm5bSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMteC9uby1hcnJheS1mcm9tLCBuby10aHJvdy1saXRlcmFsIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIEFycmF5LmZyb20oaXRlcmF0b3JXaXRoUmV0dXJuLCBmdW5jdGlvbiAoKSB7IHRocm93IDI7IH0pO1xufSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBTS0lQX0NMT1NJTkcpIHtcbiAgaWYgKCFTS0lQX0NMT1NJTkcgJiYgIVNBRkVfQ0xPU0lORykgcmV0dXJuIGZhbHNlO1xuICB2YXIgSVRFUkFUSU9OX1NVUFBPUlQgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgb2JqZWN0ID0ge307XG4gICAgb2JqZWN0W0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4geyBkb25lOiBJVEVSQVRJT05fU1VQUE9SVCA9IHRydWUgfTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9O1xuICAgIGV4ZWMob2JqZWN0KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gSVRFUkFUSU9OX1NVUFBPUlQ7XG59O1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZnJvbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mcm9tJyk7XG52YXIgY2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NoZWNrLWNvcnJlY3RuZXNzLW9mLWl0ZXJhdGlvbicpO1xuXG52YXIgSU5DT1JSRUNUX0lURVJBVElPTiA9ICFjaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24oZnVuY3Rpb24gKGl0ZXJhYmxlKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy14L25vLWFycmF5LWZyb20gLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgQXJyYXkuZnJvbShpdGVyYWJsZSk7XG59KTtcblxuLy8gYEFycmF5LmZyb21gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5mcm9tXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IElOQ09SUkVDVF9JVEVSQVRJT04gfSwge1xuICBmcm9tOiBmcm9tXG59KTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mJyk7XG5cbnZhciBTdHJpbmcgPSBnbG9iYWwuU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoY2xhc3NvZihhcmd1bWVudCkgPT09ICdTeW1ib2wnKSB0aHJvdyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IGEgU3ltYm9sIHZhbHVlIHRvIGEgc3RyaW5nJyk7XG4gIHJldHVybiBTdHJpbmcoYXJndW1lbnQpO1xufTtcbiIsInZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG52YXIgY2hhckF0ID0gdW5jdXJyeVRoaXMoJycuY2hhckF0KTtcbnZhciBjaGFyQ29kZUF0ID0gdW5jdXJyeVRoaXMoJycuY2hhckNvZGVBdCk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoQ09OVkVSVF9UT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgcG9zKSB7XG4gICAgdmFyIFMgPSB0b1N0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKCR0aGlzKSk7XG4gICAgdmFyIHBvc2l0aW9uID0gdG9JbnRlZ2VyT3JJbmZpbml0eShwb3MpO1xuICAgIHZhciBzaXplID0gUy5sZW5ndGg7XG4gICAgdmFyIGZpcnN0LCBzZWNvbmQ7XG4gICAgaWYgKHBvc2l0aW9uIDwgMCB8fCBwb3NpdGlvbiA+PSBzaXplKSByZXR1cm4gQ09OVkVSVF9UT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBmaXJzdCA9IGNoYXJDb2RlQXQoUywgcG9zaXRpb24pO1xuICAgIHJldHVybiBmaXJzdCA8IDB4RDgwMCB8fCBmaXJzdCA+IDB4REJGRiB8fCBwb3NpdGlvbiArIDEgPT09IHNpemVcbiAgICAgIHx8IChzZWNvbmQgPSBjaGFyQ29kZUF0KFMsIHBvc2l0aW9uICsgMSkpIDwgMHhEQzAwIHx8IHNlY29uZCA+IDB4REZGRlxuICAgICAgICA/IENPTlZFUlRfVE9fU1RSSU5HXG4gICAgICAgICAgPyBjaGFyQXQoUywgcG9zaXRpb24pXG4gICAgICAgICAgOiBmaXJzdFxuICAgICAgICA6IENPTlZFUlRfVE9fU1RSSU5HXG4gICAgICAgICAgPyBzdHJpbmdTbGljZShTLCBwb3NpdGlvbiwgcG9zaXRpb24gKyAyKVxuICAgICAgICAgIDogKGZpcnN0IC0gMHhEODAwIDw8IDEwKSArIChzZWNvbmQgLSAweERDMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgU3RyaW5nLnByb3RvdHlwZS5jb2RlUG9pbnRBdGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5jb2RlcG9pbnRhdFxuICBjb2RlQXQ6IGNyZWF0ZU1ldGhvZChmYWxzZSksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLmF0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21hdGhpYXNieW5lbnMvU3RyaW5nLnByb3RvdHlwZS5hdFxuICBjaGFyQXQ6IGNyZWF0ZU1ldGhvZCh0cnVlKVxufTtcbiIsInZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG5cbi8vIGBPYmplY3Qua2V5c2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5rZXlzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMteC9uby1vYmplY3Qta2V5cyAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1ZycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBvYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzJyk7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydGllc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0aWVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMteC9uby1vYmplY3QtZGVmaW5lcHJvcGVydGllcyAtLSBzYWZlXG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyAmJiAhVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIHByb3BzID0gdG9JbmRleGVkT2JqZWN0KFByb3BlcnRpZXMpO1xuICB2YXIga2V5cyA9IG9iamVjdEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKE8sIGtleSA9IGtleXNbaW5kZXgrK10sIHByb3BzW2tleV0pO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCdkb2N1bWVudCcsICdkb2N1bWVudEVsZW1lbnQnKTtcbiIsIi8qIGdsb2JhbCBBY3RpdmVYT2JqZWN0IC0tIG9sZCBJRSwgV1NIICovXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZGVmaW5lUHJvcGVydGllc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnRpZXMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaHRtbCcpO1xudmFyIGRvY3VtZW50Q3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG5cbnZhciBHVCA9ICc+JztcbnZhciBMVCA9ICc8JztcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBTQ1JJUFQgPSAnc2NyaXB0JztcbnZhciBJRV9QUk9UTyA9IHNoYXJlZEtleSgnSUVfUFJPVE8nKTtcblxudmFyIEVtcHR5Q29uc3RydWN0b3IgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cbnZhciBzY3JpcHRUYWcgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICByZXR1cm4gTFQgKyBTQ1JJUFQgKyBHVCArIGNvbnRlbnQgKyBMVCArICcvJyArIFNDUklQVCArIEdUO1xufTtcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIEFjdGl2ZVggT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYID0gZnVuY3Rpb24gKGFjdGl2ZVhEb2N1bWVudCkge1xuICBhY3RpdmVYRG9jdW1lbnQud3JpdGUoc2NyaXB0VGFnKCcnKSk7XG4gIGFjdGl2ZVhEb2N1bWVudC5jbG9zZSgpO1xuICB2YXIgdGVtcCA9IGFjdGl2ZVhEb2N1bWVudC5wYXJlbnRXaW5kb3cuT2JqZWN0O1xuICBhY3RpdmVYRG9jdW1lbnQgPSBudWxsOyAvLyBhdm9pZCBtZW1vcnkgbGVha1xuICByZXR1cm4gdGVtcDtcbn07XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFJRnJhbWUgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSBkb2N1bWVudENyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICB2YXIgSlMgPSAnamF2YScgKyBTQ1JJUFQgKyAnOic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGh0bWwuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzQ3NVxuICBpZnJhbWUuc3JjID0gU3RyaW5nKEpTKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShzY3JpcHRUYWcoJ2RvY3VtZW50LkY9T2JqZWN0JykpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICByZXR1cm4gaWZyYW1lRG9jdW1lbnQuRjtcbn07XG5cbi8vIENoZWNrIGZvciBkb2N1bWVudC5kb21haW4gYW5kIGFjdGl2ZSB4IHN1cHBvcnRcbi8vIE5vIG5lZWQgdG8gdXNlIGFjdGl2ZSB4IGFwcHJvYWNoIHdoZW4gZG9jdW1lbnQuZG9tYWluIGlzIG5vdCBzZXRcbi8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW0vaXNzdWVzLzE1MFxuLy8gdmFyaWF0aW9uIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9raXRjYW1icmlkZ2UvZXM1LXNoaW0vY29tbWl0LzRmNzM4YWMwNjYzNDZcbi8vIGF2b2lkIElFIEdDIGJ1Z1xudmFyIGFjdGl2ZVhEb2N1bWVudDtcbnZhciBOdWxsUHJvdG9PYmplY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgYWN0aXZlWERvY3VtZW50ID0gbmV3IEFjdGl2ZVhPYmplY3QoJ2h0bWxmaWxlJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGlnbm9yZSAqLyB9XG4gIE51bGxQcm90b09iamVjdCA9IHR5cGVvZiBkb2N1bWVudCAhPSAndW5kZWZpbmVkJ1xuICAgID8gZG9jdW1lbnQuZG9tYWluICYmIGFjdGl2ZVhEb2N1bWVudFxuICAgICAgPyBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYKGFjdGl2ZVhEb2N1bWVudCkgLy8gb2xkIElFXG4gICAgICA6IE51bGxQcm90b09iamVjdFZpYUlGcmFtZSgpXG4gICAgOiBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYKGFjdGl2ZVhEb2N1bWVudCk7IC8vIFdTSFxuICB2YXIgbGVuZ3RoID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIGRlbGV0ZSBOdWxsUHJvdG9PYmplY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tsZW5ndGhdXTtcbiAgcmV0dXJuIE51bGxQcm90b09iamVjdCgpO1xufTtcblxuaGlkZGVuS2V5c1tJRV9QUk9UT10gPSB0cnVlO1xuXG4vLyBgT2JqZWN0LmNyZWF0ZWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5jcmVhdGVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy14L25vLW9iamVjdC1jcmVhdGUgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlDb25zdHJ1Y3RvcltQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5Q29uc3RydWN0b3IoKTtcbiAgICBFbXB0eUNvbnN0cnVjdG9yW1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IE51bGxQcm90b09iamVjdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZGVmaW5lUHJvcGVydGllc01vZHVsZS5mKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRigpIHsgLyogZW1wdHkgKi8gfVxuICBGLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IG51bGw7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy14L25vLW9iamVjdC1nZXRwcm90b3R5cGVvZiAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKG5ldyBGKCkpICE9PSBGLnByb3RvdHlwZTtcbn0pO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIENPUlJFQ1RfUFJPVE9UWVBFX0dFVFRFUiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3JyZWN0LXByb3RvdHlwZS1nZXR0ZXInKTtcblxudmFyIElFX1BST1RPID0gc2hhcmVkS2V5KCdJRV9QUk9UTycpO1xudmFyIE9iamVjdCA9IGdsb2JhbC5PYmplY3Q7XG52YXIgT2JqZWN0UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLy8gYE9iamVjdC5nZXRQcm90b3R5cGVPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRwcm90b3R5cGVvZlxubW9kdWxlLmV4cG9ydHMgPSBDT1JSRUNUX1BST1RPVFlQRV9HRVRURVIgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiAoTykge1xuICB2YXIgb2JqZWN0ID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXNPd24ob2JqZWN0LCBJRV9QUk9UTykpIHJldHVybiBvYmplY3RbSUVfUFJPVE9dO1xuICB2YXIgY29uc3RydWN0b3IgPSBvYmplY3QuY29uc3RydWN0b3I7XG4gIGlmIChpc0NhbGxhYmxlKGNvbnN0cnVjdG9yKSAmJiBvYmplY3QgaW5zdGFuY2VvZiBjb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBjb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIG9iamVjdCBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvdHlwZSA6IG51bGw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YnKTtcbnZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbicpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1lfU0FGQVJJX0lURVJBVE9SUyA9IGZhbHNlO1xuXG4vLyBgJUl0ZXJhdG9yUHJvdG90eXBlJWAgb2JqZWN0XG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSVpdGVyYXRvcnByb3RvdHlwZSUtb2JqZWN0XG52YXIgSXRlcmF0b3JQcm90b3R5cGUsIFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSwgYXJyYXlJdGVyYXRvcjtcblxuLyogZXNsaW50LWRpc2FibGUgZXMteC9uby1hcnJheS1wcm90b3R5cGUta2V5cyAtLSBzYWZlICovXG5pZiAoW10ua2V5cykge1xuICBhcnJheUl0ZXJhdG9yID0gW10ua2V5cygpO1xuICAvLyBTYWZhcmkgOCBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgaWYgKCEoJ25leHQnIGluIGFycmF5SXRlcmF0b3IpKSBCVUdHWV9TQUZBUklfSVRFUkFUT1JTID0gdHJ1ZTtcbiAgZWxzZSB7XG4gICAgUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoZ2V0UHJvdG90eXBlT2YoYXJyYXlJdGVyYXRvcikpO1xuICAgIGlmIChQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpIEl0ZXJhdG9yUHJvdG90eXBlID0gUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG59XG5cbnZhciBORVdfSVRFUkFUT1JfUFJPVE9UWVBFID0gSXRlcmF0b3JQcm90b3R5cGUgPT0gdW5kZWZpbmVkIHx8IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRlc3QgPSB7fTtcbiAgLy8gRkY0NC0gbGVnYWN5IGl0ZXJhdG9ycyBjYXNlXG4gIHJldHVybiBJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0uY2FsbCh0ZXN0KSAhPT0gdGVzdDtcbn0pO1xuXG5pZiAoTkVXX0lURVJBVE9SX1BST1RPVFlQRSkgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbmVsc2UgaWYgKElTX1BVUkUpIEl0ZXJhdG9yUHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcblxuLy8gYCVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSVpdGVyYXRvcnByb3RvdHlwZSUtQEBpdGVyYXRvclxuaWYgKCFpc0NhbGxhYmxlKEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXSkpIHtcbiAgZGVmaW5lQnVpbHRJbihJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBJdGVyYXRvclByb3RvdHlwZTogSXRlcmF0b3JQcm90b3R5cGUsXG4gIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlM6IEJVR0dZX1NBRkFSSV9JVEVSQVRPUlNcbn07XG4iLCJ2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgVEFHLCBTVEFUSUMpIHtcbiAgaWYgKHRhcmdldCAmJiAhU1RBVElDKSB0YXJnZXQgPSB0YXJnZXQucHJvdG90eXBlO1xuICBpZiAodGFyZ2V0ICYmICFoYXNPd24odGFyZ2V0LCBUT19TVFJJTkdfVEFHKSkge1xuICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwgVE9fU1RSSU5HX1RBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiBUQUcgfSk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzLWNvcmUnKS5JdGVyYXRvclByb3RvdHlwZTtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycycpO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEl0ZXJhdG9yQ29uc3RydWN0b3IsIE5BTUUsIG5leHQsIEVOVU1FUkFCTEVfTkVYVCkge1xuICB2YXIgVE9fU1RSSU5HX1RBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgSXRlcmF0b3JDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKCshRU5VTUVSQUJMRV9ORVhULCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JDb25zdHJ1Y3RvciwgVE9fU1RSSU5HX1RBRywgZmFsc2UsIHRydWUpO1xuICBJdGVyYXRvcnNbVE9fU1RSSU5HX1RBR10gPSByZXR1cm5UaGlzO1xuICByZXR1cm4gSXRlcmF0b3JDb25zdHJ1Y3Rvcjtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIFN0cmluZyA9IGdsb2JhbC5TdHJpbmc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKHR5cGVvZiBhcmd1bWVudCA9PSAnb2JqZWN0JyB8fCBpc0NhbGxhYmxlKGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBzZXQgXCIgKyBTdHJpbmcoYXJndW1lbnQpICsgJyBhcyBhIHByb3RvdHlwZScpO1xufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvIC0tIHNhZmUgKi9cbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBhUG9zc2libGVQcm90b3R5cGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1wb3NzaWJsZS1wcm90b3R5cGUnKTtcblxuLy8gYE9iamVjdC5zZXRQcm90b3R5cGVPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5zZXRwcm90b3R5cGVvZlxuLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMteC9uby1vYmplY3Qtc2V0cHJvdG90eXBlb2YgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gZnVuY3Rpb24gKCkge1xuICB2YXIgQ09SUkVDVF9TRVRURVIgPSBmYWxzZTtcbiAgdmFyIHRlc3QgPSB7fTtcbiAgdmFyIHNldHRlcjtcbiAgdHJ5IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMteC9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbiAgICBzZXR0ZXIgPSB1bmN1cnJ5VGhpcyhPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQpO1xuICAgIHNldHRlcih0ZXN0LCBbXSk7XG4gICAgQ09SUkVDVF9TRVRURVIgPSB0ZXN0IGluc3RhbmNlb2YgQXJyYXk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKSB7XG4gICAgYW5PYmplY3QoTyk7XG4gICAgYVBvc3NpYmxlUHJvdG90eXBlKHByb3RvKTtcbiAgICBpZiAoQ09SUkVDVF9TRVRURVIpIHNldHRlcihPLCBwcm90byk7XG4gICAgZWxzZSBPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgIHJldHVybiBPO1xuICB9O1xufSgpIDogdW5kZWZpbmVkKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIEZ1bmN0aW9uTmFtZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1uYW1lJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGNyZWF0ZUl0ZXJhdG9yQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLWl0ZXJhdG9yLWNvbnN0cnVjdG9yJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YnKTtcbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qtc2V0LXByb3RvdHlwZS1vZicpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycycpO1xudmFyIEl0ZXJhdG9yc0NvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzLWNvcmUnKTtcblxudmFyIFBST1BFUl9GVU5DVElPTl9OQU1FID0gRnVuY3Rpb25OYW1lLlBST1BFUjtcbnZhciBDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSA9IEZ1bmN0aW9uTmFtZS5DT05GSUdVUkFCTEU7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSBJdGVyYXRvcnNDb3JlLkl0ZXJhdG9yUHJvdG90eXBlO1xudmFyIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSBJdGVyYXRvcnNDb3JlLkJVR0dZX1NBRkFSSV9JVEVSQVRPUlM7XG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcbnZhciBFTlRSSUVTID0gJ2VudHJpZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEl0ZXJhYmxlLCBOQU1FLCBJdGVyYXRvckNvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICBjcmVhdGVJdGVyYXRvckNvbnN0cnVjdG9yKEl0ZXJhdG9yQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuXG4gIHZhciBnZXRJdGVyYXRpb25NZXRob2QgPSBmdW5jdGlvbiAoS0lORCkge1xuICAgIGlmIChLSU5EID09PSBERUZBVUxUICYmIGRlZmF1bHRJdGVyYXRvcikgcmV0dXJuIGRlZmF1bHRJdGVyYXRvcjtcbiAgICBpZiAoIUJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgJiYgS0lORCBpbiBJdGVyYWJsZVByb3RvdHlwZSkgcmV0dXJuIEl0ZXJhYmxlUHJvdG90eXBlW0tJTkRdO1xuICAgIHN3aXRjaCAoS0lORCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBJdGVyYXRvckNvbnN0cnVjdG9yKHRoaXMsIEtJTkQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgSXRlcmF0b3JDb25zdHJ1Y3Rvcih0aGlzLCBLSU5EKTsgfTtcbiAgICAgIGNhc2UgRU5UUklFUzogcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgSXRlcmF0b3JDb25zdHJ1Y3Rvcih0aGlzLCBLSU5EKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgSXRlcmF0b3JDb25zdHJ1Y3Rvcih0aGlzKTsgfTtcbiAgfTtcblxuICB2YXIgVE9fU1RSSU5HX1RBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIElOQ09SUkVDVF9WQUxVRVNfTkFNRSA9IGZhbHNlO1xuICB2YXIgSXRlcmFibGVQcm90b3R5cGUgPSBJdGVyYWJsZS5wcm90b3R5cGU7XG4gIHZhciBuYXRpdmVJdGVyYXRvciA9IEl0ZXJhYmxlUHJvdG90eXBlW0lURVJBVE9SXVxuICAgIHx8IEl0ZXJhYmxlUHJvdG90eXBlWydAQGl0ZXJhdG9yJ11cbiAgICB8fCBERUZBVUxUICYmIEl0ZXJhYmxlUHJvdG90eXBlW0RFRkFVTFRdO1xuICB2YXIgZGVmYXVsdEl0ZXJhdG9yID0gIUJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgJiYgbmF0aXZlSXRlcmF0b3IgfHwgZ2V0SXRlcmF0aW9uTWV0aG9kKERFRkFVTFQpO1xuICB2YXIgYW55TmF0aXZlSXRlcmF0b3IgPSBOQU1FID09ICdBcnJheScgPyBJdGVyYWJsZVByb3RvdHlwZS5lbnRyaWVzIHx8IG5hdGl2ZUl0ZXJhdG9yIDogbmF0aXZlSXRlcmF0b3I7XG4gIHZhciBDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUsIG1ldGhvZHMsIEtFWTtcblxuICAvLyBmaXggbmF0aXZlXG4gIGlmIChhbnlOYXRpdmVJdGVyYXRvcikge1xuICAgIEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKGFueU5hdGl2ZUl0ZXJhdG9yLmNhbGwobmV3IEl0ZXJhYmxlKCkpKTtcbiAgICBpZiAoQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICBpZiAoIUlTX1BVUkUgJiYgZ2V0UHJvdG90eXBlT2YoQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlKSAhPT0gSXRlcmF0b3JQcm90b3R5cGUpIHtcbiAgICAgICAgaWYgKHNldFByb3RvdHlwZU9mKSB7XG4gICAgICAgICAgc2V0UHJvdG90eXBlT2YoQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLCBJdGVyYXRvclByb3RvdHlwZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIWlzQ2FsbGFibGUoQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXSkpIHtcbiAgICAgICAgICBkZWZpbmVCdWlsdEluKEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUsIFRPX1NUUklOR19UQUcsIHRydWUsIHRydWUpO1xuICAgICAgaWYgKElTX1BVUkUpIEl0ZXJhdG9yc1tUT19TVFJJTkdfVEFHXSA9IHJldHVyblRoaXM7XG4gICAgfVxuICB9XG5cbiAgLy8gZml4IEFycmF5LnByb3RvdHlwZS57IHZhbHVlcywgQEBpdGVyYXRvciB9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoUFJPUEVSX0ZVTkNUSU9OX05BTUUgJiYgREVGQVVMVCA9PSBWQUxVRVMgJiYgbmF0aXZlSXRlcmF0b3IgJiYgbmF0aXZlSXRlcmF0b3IubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgaWYgKCFJU19QVVJFICYmIENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FKSB7XG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoSXRlcmFibGVQcm90b3R5cGUsICduYW1lJywgVkFMVUVTKTtcbiAgICB9IGVsc2Uge1xuICAgICAgSU5DT1JSRUNUX1ZBTFVFU19OQU1FID0gdHJ1ZTtcbiAgICAgIGRlZmF1bHRJdGVyYXRvciA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIGNhbGwobmF0aXZlSXRlcmF0b3IsIHRoaXMpOyB9O1xuICAgIH1cbiAgfVxuXG4gIC8vIGV4cG9ydCBhZGRpdGlvbmFsIG1ldGhvZHNcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBnZXRJdGVyYXRpb25NZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/IGRlZmF1bHRJdGVyYXRvciA6IGdldEl0ZXJhdGlvbk1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6IGdldEl0ZXJhdGlvbk1ldGhvZChFTlRSSUVTKVxuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChLRVkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgfHwgSU5DT1JSRUNUX1ZBTFVFU19OQU1FIHx8ICEoS0VZIGluIEl0ZXJhYmxlUHJvdG90eXBlKSkge1xuICAgICAgICBkZWZpbmVCdWlsdEluKEl0ZXJhYmxlUHJvdG90eXBlLCBLRVksIG1ldGhvZHNbS0VZXSk7XG4gICAgICB9XG4gICAgfSBlbHNlICQoeyB0YXJnZXQ6IE5BTUUsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgfHwgSU5DT1JSRUNUX1ZBTFVFU19OQU1FIH0sIG1ldGhvZHMpO1xuICB9XG5cbiAgLy8gZGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUlTX1BVUkUgfHwgRk9SQ0VEKSAmJiBJdGVyYWJsZVByb3RvdHlwZVtJVEVSQVRPUl0gIT09IGRlZmF1bHRJdGVyYXRvcikge1xuICAgIGRlZmluZUJ1aWx0SW4oSXRlcmFibGVQcm90b3R5cGUsIElURVJBVE9SLCBkZWZhdWx0SXRlcmF0b3IsIHsgbmFtZTogREVGQVVMVCB9KTtcbiAgfVxuICBJdGVyYXRvcnNbTkFNRV0gPSBkZWZhdWx0SXRlcmF0b3I7XG5cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNoYXJBdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctbXVsdGlieXRlJykuY2hhckF0O1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcbnZhciBkZWZpbmVJdGVyYXRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtaXRlcmF0b3InKTtcblxudmFyIFNUUklOR19JVEVSQVRPUiA9ICdTdHJpbmcgSXRlcmF0b3InO1xudmFyIHNldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLnNldDtcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXR0ZXJGb3IoU1RSSU5HX0lURVJBVE9SKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl1gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLUBAaXRlcmF0b3JcbmRlZmluZUl0ZXJhdG9yKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uIChpdGVyYXRlZCkge1xuICBzZXRJbnRlcm5hbFN0YXRlKHRoaXMsIHtcbiAgICB0eXBlOiBTVFJJTkdfSVRFUkFUT1IsXG4gICAgc3RyaW5nOiB0b1N0cmluZyhpdGVyYXRlZCksXG4gICAgaW5kZXg6IDBcbiAgfSk7XG4vLyBgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtJXN0cmluZ2l0ZXJhdG9ycHJvdG90eXBlJS5uZXh0XG59LCBmdW5jdGlvbiBuZXh0KCkge1xuICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpO1xuICB2YXIgc3RyaW5nID0gc3RhdGUuc3RyaW5nO1xuICB2YXIgaW5kZXggPSBzdGF0ZS5pbmRleDtcbiAgdmFyIHBvaW50O1xuICBpZiAoaW5kZXggPj0gc3RyaW5nLmxlbmd0aCkgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICBwb2ludCA9IGNoYXJBdChzdHJpbmcsIGluZGV4KTtcbiAgc3RhdGUuaW5kZXggKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4geyB2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlIH07XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cycpO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy14L25vLW9iamVjdC1hc3NpZ24gLS0gc2FmZVxudmFyICRhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzLXgvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgY29uY2F0ID0gdW5jdXJyeVRoaXMoW10uY29uY2F0KTtcblxuLy8gYE9iamVjdC5hc3NpZ25gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuYXNzaWduXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gc2hvdWxkIGhhdmUgY29ycmVjdCBvcmRlciBvZiBvcGVyYXRpb25zIChFZGdlIGJ1ZylcbiAgaWYgKERFU0NSSVBUT1JTICYmICRhc3NpZ24oeyBiOiAxIH0sICRhc3NpZ24oZGVmaW5lUHJvcGVydHkoe30sICdhJywge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0aGlzLCAnYicsIHtcbiAgICAgICAgdmFsdWU6IDMsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gIH0pLCB7IGI6IDIgfSkpLmIgIT09IDEpIHJldHVybiB0cnVlO1xuICAvLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1ZylcbiAgdmFyIEEgPSB7fTtcbiAgdmFyIEIgPSB7fTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzLXgvbm8tc3ltYm9sIC0tIHNhZmVcbiAgdmFyIHN5bWJvbCA9IFN5bWJvbCgpO1xuICB2YXIgYWxwaGFiZXQgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW3N5bWJvbF0gPSA3O1xuICBhbHBoYWJldC5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAoY2hyKSB7IEJbY2hyXSA9IGNocjsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtzeW1ib2xdICE9IDcgfHwgb2JqZWN0S2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gYWxwaGFiZXQ7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzIC0tIHJlcXVpcmVkIGZvciBgLmxlbmd0aGBcbiAgdmFyIFQgPSB0b09iamVjdCh0YXJnZXQpO1xuICB2YXIgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMTtcbiAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mO1xuICB2YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mO1xuICB3aGlsZSAoYXJndW1lbnRzTGVuZ3RoID4gaW5kZXgpIHtcbiAgICB2YXIgUyA9IEluZGV4ZWRPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKTtcbiAgICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5U3ltYm9scyA/IGNvbmNhdChvYmplY3RLZXlzKFMpLCBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoUykpIDogb2JqZWN0S2V5cyhTKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGogPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGopIHtcbiAgICAgIGtleSA9IGtleXNbaisrXTtcbiAgICAgIGlmICghREVTQ1JJUFRPUlMgfHwgY2FsbChwcm9wZXJ0eUlzRW51bWVyYWJsZSwgUywga2V5KSkgVFtrZXldID0gU1trZXldO1xuICAgIH1cbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1hc3NpZ24nKTtcblxuLy8gYE9iamVjdC5hc3NpZ25gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuYXNzaWduXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMteC9uby1vYmplY3QtYXNzaWduIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgYXJpdHk6IDIsIGZvcmNlZDogT2JqZWN0LmFzc2lnbiAhPT0gYXNzaWduIH0sIHtcbiAgYXNzaWduOiBhc3NpZ25cbn0pO1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cycpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZScpLmY7XG5cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHVuY3VycnlUaGlzKCRwcm9wZXJ0eUlzRW51bWVyYWJsZSk7XG52YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xuXG4vLyBgT2JqZWN0LnsgZW50cmllcywgdmFsdWVzIH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoVE9fRU5UUklFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QoaXQpO1xuICAgIHZhciBrZXlzID0gb2JqZWN0S2V5cyhPKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChsZW5ndGggPiBpKSB7XG4gICAgICBrZXkgPSBrZXlzW2krK107XG4gICAgICBpZiAoIURFU0NSSVBUT1JTIHx8IHByb3BlcnR5SXNFbnVtZXJhYmxlKE8sIGtleSkpIHtcbiAgICAgICAgcHVzaChyZXN1bHQsIFRPX0VOVFJJRVMgPyBba2V5LCBPW2tleV1dIDogT1trZXldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgT2JqZWN0LmVudHJpZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5lbnRyaWVzXG4gIGVudHJpZXM6IGNyZWF0ZU1ldGhvZCh0cnVlKSxcbiAgLy8gYE9iamVjdC52YWx1ZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC52YWx1ZXNcbiAgdmFsdWVzOiBjcmVhdGVNZXRob2QoZmFsc2UpXG59O1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGVudHJpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXRvLWFycmF5JykuZW50cmllcztcblxuLy8gYE9iamVjdC5lbnRyaWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmVudHJpZXNcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlIH0sIHtcbiAgZW50cmllczogZnVuY3Rpb24gZW50cmllcyhPKSB7XG4gICAgcmV0dXJuICRlbnRyaWVzKE8pO1xuICB9XG59KTtcbiIsImZ1bmN0aW9uIGdldFN1bVZhbHVlT2ZTdHlsZVJ1bGVzKGVsZW1lbnQsIHJ1bGVzKSB7XG4gIHJldHVybiBydWxlcy5yZWR1Y2UoKHN1bSwgcnVsZSkgPT4ge1xuICAgIHJldHVybiBzdW0gKyBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVtydWxlXXx8MClcbiAgfSwgMClcbn1cblxuLyoqIENsYXNzIHJlcHJlc2VudGluZyBhIHBvaW50LiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9pbnQge1xuICAvKipcbiAgKiBDcmVhdGUgYSBwb2ludC5cbiAgKiBAcGFyYW0ge251bWJlcn0geCAtIFRoZSB4IHZhbHVlLlxuICAqIEBwYXJhbSB7bnVtYmVyfSB5IC0gVGhlIHkgdmFsdWUuXG4gICovXG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4XG4gICAgdGhpcy55ID0geVxuICB9XG5cbiAgYWRkKHApIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCArIHAueCwgdGhpcy55ICsgcC55KVxuICB9XG5cbiAgc3ViKHApIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAtIHAueCwgdGhpcy55IC0gcC55KVxuICB9XG5cbiAgbXVsdChrKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKiBrLCB0aGlzLnkgKiBrKVxuICB9XG5cbiAgbmVnYXRpdmUoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCgtdGhpcy54LCAtdGhpcy55KVxuICB9XG5cbiAgY29tcGFyZShwKSB7XG4gICAgcmV0dXJuICh0aGlzLnggPT09IHAueCAmJiB0aGlzLnkgPT09IHAueSlcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpXG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gYHt4PSR7dGhpcy54fSx5PSR7dGhpcy55fWBcbiAgfVxuXG4gIHN0YXRpYyBlbGVtZW50T2Zmc2V0KGVsZW1lbnQsIHBhcmVudCkge1xuICAgIHBhcmVudCA9IHBhcmVudCB8fCBlbGVtZW50LnBhcmVudE5vZGVcbiAgICBjb25zdCBlbGVtZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zdCBwYXJlbnRSZWN0ID0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgcmV0dXJuIG5ldyBQb2ludChcbiAgICAgIGVsZW1lbnRSZWN0LmxlZnQgLSBwYXJlbnRSZWN0LmxlZnQsXG4gICAgICBlbGVtZW50UmVjdC50b3AgLSBwYXJlbnRSZWN0LnRvcFxuICAgIClcbiAgfVxuXG4gIHN0YXRpYyBlbGVtZW50U2l6ZShlbGVtZW50LCBpc0NvbnRlbnRCb3hTaXplPWZhbHNlKSB7XG4gICAgbGV0IHdpZHRoID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClbJ3dpZHRoJ10pXG4gICAgbGV0IGhlaWdodCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpWydoZWlnaHQnXSlcbiAgICBpZiAoIWlzQ29udGVudEJveFNpemUpIHtcbiAgICAgIHdpZHRoICs9IGdldFN1bVZhbHVlT2ZTdHlsZVJ1bGVzKGVsZW1lbnQsIFsncGFkZGluZy1sZWZ0JywgJ3BhZGRpbmctcmlnaHQnLCAnYm9yZGVyLWxlZnQtd2lkdGgnLCAnYm9yZGVyLXJpZ2h0LXdpZHRoJ10pXG4gICAgICBoZWlnaHQgKz0gZ2V0U3VtVmFsdWVPZlN0eWxlUnVsZXMoZWxlbWVudCwgWydwYWRkaW5nLXRvcCcsICdwYWRkaW5nLWJvdHRvbScsICdib3JkZXItdG9wLXdpZHRoJywgJ2JvcmRlci1ib3R0b20td2lkdGgnXSlcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQb2ludCh3aWR0aCwgaGVpZ2h0KVxuICB9XG59XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSAnLi9wb2ludCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdGFuZ2xlIHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24sIHNpemUpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICB0aGlzLnNpemUgPSBzaXplXG4gIH1cblxuICBnZXRQMSgpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvblxuICB9XG5cbiAgZ2V0UDIoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgdGhpcy5wb3NpdGlvbi55KVxuICB9XG5cbiAgZ2V0UDMoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uYWRkKHRoaXMuc2l6ZSlcbiAgfVxuXG4gIGdldFA0KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSlcbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5zaXplLm11bHQoMC41KSlcbiAgfVxuXG4gIG9yKHJlY3QpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLm1pbih0aGlzLnBvc2l0aW9uLngsIHJlY3QucG9zaXRpb24ueCksIE1hdGgubWluKHRoaXMucG9zaXRpb24ueSwgcmVjdC5wb3NpdGlvbi55KSlcbiAgICBjb25zdCBzaXplID0gKG5ldyBQb2ludChNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgcmVjdC5wb3NpdGlvbi54ICsgcmVjdC5zaXplLngpLCBNYXRoLm1heCh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSwgcmVjdC5wb3NpdGlvbi55ICsgcmVjdC5zaXplLnkpKSkuc3ViKHBvc2l0aW9uKVxuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHBvc2l0aW9uLCBzaXplKVxuICB9XG5cbiAgYW5kKHJlY3QpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb2ludChNYXRoLm1heCh0aGlzLnBvc2l0aW9uLngsIHJlY3QucG9zaXRpb24ueCksIE1hdGgubWF4KHRoaXMucG9zaXRpb24ueSwgcmVjdC5wb3NpdGlvbi55KSlcbiAgICBjb25zdCBzaXplID0gKG5ldyBQb2ludChNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCwgcmVjdC5wb3NpdGlvbi54ICsgcmVjdC5zaXplLngpLCBNYXRoLm1pbih0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSwgcmVjdC5wb3NpdGlvbi55ICsgcmVjdC5zaXplLnkpKSkuc3ViKHBvc2l0aW9uKVxuICAgIGlmIChzaXplLnggPD0gMCB8fCBzaXplLnkgPD0gMCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUocG9zaXRpb24sIHNpemUpXG4gIH1cblxuICBpbmNsdWRlUG9pbnQocCkge1xuICAgIHJldHVybiAhKHRoaXMucG9zaXRpb24ueCA+IHAueCB8fCB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnNpemUueCA8IHAueCB8fCB0aGlzLnBvc2l0aW9uLnkgPiBwLnkgfHwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5zaXplLnkgPCBwLnkpXG4gIH1cblxuICBpbmNsdWRlUmVjdGFuZ2xlKHJlY3RhbmdsZSkge1xuICAgIHJldHVybiB0aGlzLmluY2x1ZGVQb2ludChyZWN0YW5nbGUucG9zaXRpb24pICYmIHRoaXMuaW5jbHVkZVBvaW50KHJlY3RhbmdsZS5nZXRQMygpKVxuICB9XG5cbiAgbW92ZVRvQm91bmQocmVjdCwgYXhpcykge1xuICAgIGxldCBzZWxBeGlzLCBjcm9zc1JlY3RhbmdsZVxuICAgIGlmIChheGlzKSB7XG4gICAgICBzZWxBeGlzID0gYXhpc1xuICAgIH0gZWxzZSB7XG4gICAgICBjcm9zc1JlY3RhbmdsZSA9IHRoaXMuYW5kKHJlY3QpXG4gICAgICBpZiAoIWNyb3NzUmVjdGFuZ2xlKSB7XG4gICAgICAgIHJldHVybiByZWN0XG4gICAgICB9XG4gICAgICBzZWxBeGlzID0gY3Jvc3NSZWN0YW5nbGUuc2l6ZS54ID4gY3Jvc3NSZWN0YW5nbGUuc2l6ZS55ID8gJ3knIDogJ3gnXG4gICAgfVxuICAgIGNvbnN0IHRoaXNDZW50ZXIgPSB0aGlzLmdldENlbnRlcigpXG4gICAgY29uc3QgcmVjdENlbnRlciA9IHJlY3QuZ2V0Q2VudGVyKClcbiAgICBjb25zdCBzaWduID0gdGhpc0NlbnRlcltzZWxBeGlzXSA+IHJlY3RDZW50ZXJbc2VsQXhpc10gPyAtMSA6IDFcbiAgICBjb25zdCBvZmZzZXQgPSBzaWduID4gMCA/IHRoaXMucG9zaXRpb25bc2VsQXhpc10gKyB0aGlzLnNpemVbc2VsQXhpc10gLSByZWN0LnBvc2l0aW9uW3NlbEF4aXNdIDogdGhpcy5wb3NpdGlvbltzZWxBeGlzXSAtIChyZWN0LnBvc2l0aW9uW3NlbEF4aXNdICsgcmVjdC5zaXplW3NlbEF4aXNdKVxuICAgIHJlY3QucG9zaXRpb25bc2VsQXhpc10gPSByZWN0LnBvc2l0aW9uW3NlbEF4aXNdICsgb2Zmc2V0XG4gICAgcmV0dXJuIHJlY3RcbiAgfVxuXG4gIGdldFNxdWFyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplLnggKiB0aGlzLnNpemUueVxuICB9XG5cbiAgc3R5bGVBcHBseShlbCkge1xuICAgIGVsID0gZWwgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5kJylcbiAgICBlbC5zdHlsZS5sZWZ0ID0gdGhpcy5wb3NpdGlvbi54ICsgJ3B4J1xuICAgIGVsLnN0eWxlLnRvcCA9IHRoaXMucG9zaXRpb24ueSArICdweCdcbiAgICBlbC5zdHlsZS53aWR0aCA9IHRoaXMuc2l6ZS54ICsgJ3B4J1xuICAgIGVsLnN0eWxlLmhlaWdodCA9IHRoaXMuc2l6ZS55ICsgJ3B4J1xuICB9XG5cbiAgZ3Jvd3RoKHNpemUpIHtcbiAgICB0aGlzLnNpemUgPSB0aGlzLnNpemUuYWRkKHNpemUpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uYWRkKHNpemUubXVsdCgtMC41KSlcbiAgfVxuXG4gIGdldE1pblNpZGUoKSB7XG4gICAgcmV0dXJuIE1hdGgubWluKHRoaXMuc2l6ZS54LCB0aGlzLnNpemUueSlcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRWxlbWVudChlbGVtZW50LCBwYXJlbnQ9ZWxlbWVudC5wYXJlbnROb2RlLCBpc0NvbnRlbnRCb3hTaXplPWZhbHNlLCBpc0NvbnNpZGVyVHJhbnNsYXRlPWZhbHNlKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBQb2ludC5lbGVtZW50T2Zmc2V0KGVsZW1lbnQsIHBhcmVudCwgaXNDb25zaWRlclRyYW5zbGF0ZSlcbiAgICBjb25zdCBzaXplID0gUG9pbnQuZWxlbWVudFNpemUoZWxlbWVudCwgaXNDb250ZW50Qm94U2l6ZSlcbiAgICByZXR1cm4gbmV3IFJlY3RhbmdsZShwb3NpdGlvbiwgc2l6ZSlcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RGVmYXVsdENvbnRhaW5lcihlbGVtZW50KSB7XG4gIGxldCBjb250YWluZXIgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgd2hpbGUgKGNvbnRhaW5lci5wYXJlbnROb2RlICYmIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNvbnRhaW5lcilbJ3Bvc2l0aW9uJ10gPT09ICdzdGF0aWMnICYmIGNvbnRhaW5lci50YWdOYW1lICE9PSAnQk9EWScpIHtcbiAgICBjb250YWluZXIgPSBjb250YWluZXIucGFyZW50Tm9kZVxuICB9XG4gIHJldHVybiBjb250YWluZXJcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yIChvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLmV2ZW50cyA9IHt9XG5cbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLm9uKSB7XG4gICAgICBmb3IgKGNvbnN0IFtldmVudE5hbWUsIGZuXSBvZiBPYmplY3QuZW50cmllcyhvcHRpb25zLm9uKSkge1xuICAgICAgICB0aGlzLm9uKGV2ZW50TmFtZSwgZm4pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZW1pdChldmVudE5hbWUpIHtcbiAgICB0aGlzLmludGVycnVwdGVkID0gZmFsc2VcbiAgICBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG5cbiAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHJldHVyblxuXG4gICAgZm9yIChjb25zdCBmdW5jIG9mIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGZ1bmMoLi4uYXJncylcbiAgICAgIGlmICh0aGlzLmludGVycnVwdGVkKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGludGVycnVwdCgpIHtcbiAgICB0aGlzLmludGVycnVwdGVkID0gdHJ1ZVxuICB9XG5cbiAgb24oZXZlbnROYW1lLCBmbikge1xuICAgIGlmICghdGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IFtdXG4gICAgfVxuXG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5wdXNoKGZuKVxuICB9XG5cbiAgcHJlcGVuZE9uKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBpZiAoIXRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBbXVxuICAgIH1cblxuICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0udW5zaGlmdChmbilcbiAgfVxuXG4gIHVuc3Vic2NyaWJlKGV2ZW50TmFtZSwgZm4pIHtcbiAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmluZGV4T2YoZm4pXG4gICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cblxuICByZXNldEVtaXR0ZXIgKCkge1xuICAgIHRoaXMuZXZlbnRzID0ge31cbiAgfVxuXG4gIHJlc2V0T24oZXZlbnROYW1lKSB7XG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IFtdXG4gIH1cbn1cbiIsIi8qIVxuICogZ2V0U3R5bGVQcm9wZXJ0eSB2MS4wLjRcbiAqIG9yaWdpbmFsIGJ5IGthbmdheFxuICogaHR0cDovL3BlcmZlY3Rpb25raWxscy5jb20vZmVhdHVyZS10ZXN0aW5nLWNzcy1wcm9wZXJ0aWVzL1xuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4vKmpzaGludCBicm93c2VyOiB0cnVlLCBzdHJpY3Q6IHRydWUsIHVuZGVmOiB0cnVlICovXG4vKmdsb2JhbCBkZWZpbmU6IGZhbHNlLCBleHBvcnRzOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3cgKSB7XG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByZWZpeGVzID0gJ1dlYmtpdCBNb3ogbXMgTXMgTycuc3BsaXQoJyAnKTtcbnZhciBkb2NFbGVtU3R5bGUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XG5cbmZ1bmN0aW9uIGdldFN0eWxlUHJvcGVydHkoIHByb3BOYW1lICkge1xuICBpZiAoICFwcm9wTmFtZSApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyB0ZXN0IHN0YW5kYXJkIHByb3BlcnR5IGZpcnN0XG4gIGlmICggdHlwZW9mIGRvY0VsZW1TdHlsZVsgcHJvcE5hbWUgXSA9PT0gJ3N0cmluZycgKSB7XG4gICAgcmV0dXJuIHByb3BOYW1lO1xuICB9XG5cbiAgLy8gY2FwaXRhbGl6ZVxuICBwcm9wTmFtZSA9IHByb3BOYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcE5hbWUuc2xpY2UoMSk7XG5cbiAgLy8gdGVzdCB2ZW5kb3Igc3BlY2lmaWMgcHJvcGVydGllc1xuICB2YXIgcHJlZml4ZWQ7XG4gIGZvciAoIHZhciBpPTAsIGxlbiA9IHByZWZpeGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuICAgIHByZWZpeGVkID0gcHJlZml4ZXNbaV0gKyBwcm9wTmFtZTtcbiAgICBpZiAoIHR5cGVvZiBkb2NFbGVtU3R5bGVbIHByZWZpeGVkIF0gPT09ICdzdHJpbmcnICkge1xuICAgICAgcmV0dXJuIHByZWZpeGVkO1xuICAgIH1cbiAgfVxufVxuXG4vLyB0cmFuc3BvcnRcbmlmICggdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAvLyBBTURcbiAgZGVmaW5lKCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZ2V0U3R5bGVQcm9wZXJ0eTtcbiAgfSk7XG59IGVsc2UgaWYgKCB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgKSB7XG4gIC8vIENvbW1vbkpTIGZvciBDb21wb25lbnRcbiAgbW9kdWxlLmV4cG9ydHMgPSBnZXRTdHlsZVByb3BlcnR5O1xufSBlbHNlIHtcbiAgLy8gYnJvd3NlciBnbG9iYWxcbiAgd2luZG93LmdldFN0eWxlUHJvcGVydHkgPSBnZXRTdHlsZVByb3BlcnR5O1xufVxuXG59KSggd2luZG93ICk7XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0RGlzdGFuY2UocDEsIHAyKSB7XG4gIGNvbnN0IGR4ID0gcDEueCAtIHAyLngsIGR5ID0gcDEueSAtIHAyLnlcbiAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFhEaWZmZXJlbmNlKHAxLCBwMikge1xuICByZXR1cm4gTWF0aC5hYnMocDEueCAtIHAyLngpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRZRGlmZmVyZW5jZShwMSwgcDIpIHtcbiAgcmV0dXJuIE1hdGguYWJzKHAxLnkgLSBwMi55KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeShvcHRpb25zKSB7XG4gIHJldHVybiAocDEsIHAyKSA9PiB7XG4gICAgcmV0dXJuIE1hdGguc3FydChcbiAgICAgIE1hdGgucG93KG9wdGlvbnMueCAqIE1hdGguYWJzKHAxLnggLSBwMi54KSwgMikgK1xuICAgICAgTWF0aC5wb3cob3B0aW9ucy55ICogTWF0aC5hYnMocDEueSAtIHAyLnkpLCAyKVxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhPZk5lYXJlc3RQb2ludChhcnIsIHZhbCwgcmFkaXVzLCBnZXREaXN0YW5jZUZ1bmM9Z2V0RGlzdGFuY2UpIHtcbiAgbGV0IHNpemUsIGluZGV4ID0gMCwgaSwgdGVtcFxuICBpZiAoYXJyLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAtMVxuICB9XG4gIHNpemUgPSBnZXREaXN0YW5jZUZ1bmMoYXJyWzBdLCB2YWwpXG4gIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICB0ZW1wID0gZ2V0RGlzdGFuY2VGdW5jKGFycltpXSwgdmFsKVxuICAgIGlmICh0ZW1wIDwgc2l6ZSkge1xuICAgICAgc2l6ZSA9IHRlbXBcbiAgICAgIGluZGV4ID0gaVxuICAgIH1cbiAgfVxuICBpZiAocmFkaXVzID49IDAgJiYgc2l6ZSA+IHJhZGl1cykge1xuICAgIHJldHVybiAtMVxuICB9XG4gIHJldHVybiBpbmRleFxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vcG9pbnQnXG5pbXBvcnQgeyBnZXREaXN0YW5jZSB9IGZyb20gJy4vZGlzdGFuY2VzJ1xuXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAobWluLCBtYXgsIHZhbCkge1xuICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIHZhbCkpXG59XG5cbi8vUmV0dXJuIGNyb3NzaW5nIHBvaW50IG9mIHR3byBsaW5lc1xuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdENyb3NzaW5nKEwxUDEsIEwxUDIsIEwyUDEsIEwyUDIpIHtcbiAgbGV0IHRlbXAsIGsxLCBrMiwgYjEsIGIyLCB4LCB5XG4gIGlmIChMMlAxLnggPT09IEwyUDIueCkge1xuICAgIHRlbXAgPSBMMlAxXG4gICAgTDJQMSA9IEwxUDFcbiAgICBMMVAxID0gdGVtcFxuICAgIHRlbXAgPSBMMlAyXG4gICAgTDJQMiA9IEwxUDJcbiAgICBMMVAyID0gdGVtcFxuICB9XG4gIGlmIChMMVAxLnggPT09IEwxUDIueCkge1xuICAgIGsyID0gKEwyUDIueSAtIEwyUDEueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIGIyID0gKEwyUDIueCAqIEwyUDEueSAtIEwyUDEueCAqIEwyUDIueSkgLyAoTDJQMi54IC0gTDJQMS54KVxuICAgIHggPSBMMVAxLnhcbiAgICB5ID0geCAqIGsyICsgYjJcbiAgICByZXR1cm4gbmV3IFBvaW50KHgsIHkpXG4gIH0gZWxzZSB7XG4gICAgazEgPSAoTDFQMi55IC0gTDFQMS55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgYjEgPSAoTDFQMi54ICogTDFQMS55IC0gTDFQMS54ICogTDFQMi55KSAvIChMMVAyLnggLSBMMVAxLngpXG4gICAgazIgPSAoTDJQMi55IC0gTDJQMS55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgYjIgPSAoTDJQMi54ICogTDJQMS55IC0gTDJQMS54ICogTDJQMi55KSAvIChMMlAyLnggLSBMMlAxLngpXG4gICAgeCA9IChiMSAtIGIyKSAvIChrMiAtIGsxKVxuICAgIHkgPSB4ICogazEgKyBiMVxuICAgIHJldHVybiBuZXcgUG9pbnQoeCwgeSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb1NlZ21lbnQoTFAxLCBMUDIsIFApIHtcbiAgbGV0IHgsIHlcbiAgeCA9IGNsYW1wKE1hdGgubWluKExQMS54LCBMUDIueCksIE1hdGgubWF4KExQMS54LCBMUDIueCksIFAueClcbiAgaWYgKHggIT09IFAueCkge1xuICAgIHkgPSAoeCA9PT0gTFAxLngpID8gTFAxLnkgOiBMUDIueVxuICAgIFAgPSBuZXcgUG9pbnQoeCwgeSlcbiAgfVxuXG4gIHkgPSBjbGFtcChNYXRoLm1pbihMUDEueSwgTFAyLnkpLCBNYXRoLm1heChMUDEueSwgTFAyLnkpLCBQLnkpXG4gIGlmICh5ICE9PSBQLnkpIHtcbiAgICB4ID0gKHkgPT09IExQMS55KSA/IExQMS54IDogTFAyLnhcbiAgICBQID0gbmV3IFBvaW50KHgsIHkpXG4gIH1cblxuICByZXR1cm4gUFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm91bmRUb0xpbmUoQSwgQiwgUCkge1xuICBjb25zdCBBUCA9IG5ldyBQb2ludChQLnggLSBBLngsIFAueSAtIEEueSksXG4gICAgQUIgPSBuZXcgUG9pbnQoQi54IC0gQS54LCBCLnkgLSBBLnkpLFxuICAgIGFiMiA9IEFCLnggKiBBQi54ICsgQUIueSAqIEFCLnksXG4gICAgYXBfYWIgPSBBUC54ICogQUIueCArIEFQLnkgKiBBQi55LFxuICAgIHQgPSBhcF9hYiAvIGFiMlxuICByZXR1cm4gbmV3IFBvaW50KEEueCArIEFCLnggKiB0LCBBLnkgKyBBQi55ICogdClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvaW50T25MaW5lKExQMSwgTFAyLCBwZXJjZW50KSB7XG4gIGNvbnN0IGR4ID0gTFAyLnggLSBMUDEueCwgZHkgPSBMUDIueSAtIExQMS55XG4gIHJldHVybiBuZXcgUG9pbnQoTFAxLnggKyBwZXJjZW50ICogZHgsIExQMS55ICsgcGVyY2VudCAqIGR5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodChMUDEsIExQMiwgbGVuZ2h0KSB7XG4gIGNvbnN0IGR4ID0gTFAyLnggLSBMUDEueFxuICBjb25zdCBkeSA9IExQMi55IC0gTFAxLnlcbiAgY29uc3QgcGVyY2VudCA9IGxlbmdodCAvIGdldERpc3RhbmNlKExQMSwgTFAyKVxuICByZXR1cm4gbmV3IFBvaW50KExQMS54ICsgcGVyY2VudCAqIGR4LCBMUDEueSArIHBlcmNlbnQgKiBkeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZHBvaW50cywgcG9pbnQsIGlzUmlnaHQpIHtcbiAgY29uc3QgcmVzdWx0ID0gYm91bmRwb2ludHMuZmlsdGVyKChiUG9pbnQpID0+IHtcbiAgICByZXR1cm4gYlBvaW50LnkgPiBwb2ludC55IHx8IChpc1JpZ2h0ID8gYlBvaW50LnggPCBwb2ludC54IDogYlBvaW50LnggPiBwb2ludC54KVxuICB9KVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHBvaW50LnkgPCByZXN1bHRbaV0ueSkge1xuICAgICAgcmVzdWx0LnNwbGljZShpLCAwLCBwb2ludClcbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG4gIH1cbiAgcmVzdWx0LnB1c2gocG9pbnQpXG4gIHJldHVybiByZXN1bHRcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QW5nbGVEaWZmKGFscGhhLCBiZXRhKSB7XG4gIGNvbnN0IG1pbkFuZ2xlID0gTWF0aC5taW4oYWxwaGEsIGJldGEpXG4gIGNvbnN0IG1heEFuZ2xlID0gIE1hdGgubWF4KGFscGhhLCBiZXRhKVxuICByZXR1cm4gTWF0aC5taW4obWF4QW5nbGUgLSBtaW5BbmdsZSwgbWluQW5nbGUgKyBNYXRoLlBJKjIgLSBtYXhBbmdsZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFuZ2xlKHAxLCBwMikge1xuICBjb25zdCBkaWZmID0gcDIuc3ViKHAxKVxuICByZXR1cm4gbm9ybWFsaXplQW5nbGUoTWF0aC5hdGFuMihkaWZmLnksIGRpZmYueCkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1JhZGlhbihhbmdsZSkge1xuICByZXR1cm4gKChhbmdsZSAlIDM2MCkgKiBNYXRoLlBJIC8gMTgwKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9EZWdyZWUoYW5nbGUpIHtcbiAgcmV0dXJuIChhbmdsZSAqIDE4MCAvIE1hdGguUEkpICUgMzYwXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuZEFuZ2xlKG1pbiwgbWF4LCB2YWwpIHtcbiAgbGV0IGRtaW4sIGRtYXhcbiAgaWYgKG1pbiA8IG1heCAmJiB2YWwgPiBtaW4gJiYgdmFsIDwgbWF4KSB7XG4gICAgcmV0dXJuIHZhbFxuICB9IGVsc2UgaWYgKG1heCA8IG1pbiAmJiAodmFsIDwgbWF4IHx8IHZhbCA+IG1pbikpIHtcbiAgICByZXR1cm4gdmFsXG4gIH0gZWxzZSB7XG4gICAgZG1pbiA9IGdldEFuZ2xlRGlmZihtaW4sIHZhbClcbiAgICBkbWF4ID0gZ2V0QW5nbGVEaWZmKG1heCwgdmFsKVxuICAgIGlmIChkbWluIDwgZG1heCkge1xuICAgICAgcmV0dXJuIG1pblxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbWF4XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZWFyZXN0QW5nbGUoYXJyLCBhbmdsZSkge1xuICBsZXQgaSwgdGVtcCwgZGlmZiA9IE1hdGguUEkgKiAyLCB2YWx1ZVxuICBmb3IgKGkgPSAwOyBpIDwgYXJyLmxlbmd0aDtpKyspIHtcbiAgICB0ZW1wID0gZ2V0QW5nbGVEaWZmKGFycltpXSwgYW5nbGUpXG4gICAgaWYgKGRpZmYgPCB0ZW1wKSB7XG4gICAgICBkaWZmID0gdGVtcFxuICAgICAgdmFsdWUgPSBhcnJbaV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbHVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVBbmdsZSh2YWwpIHtcbiAgd2hpbGUgKHZhbCA8IDApIHtcbiAgICB2YWwgKz0gMiAqIE1hdGguUElcbiAgfVxuICB3aGlsZSAodmFsID4gMiAqIE1hdGguUEkpIHtcbiAgICB2YWwgLT0gMiAqIE1hdGguUElcbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0oYW5nbGUsIGxlbmd0aCwgY2VudGVyKSB7XG4gIGNlbnRlciA9IGNlbnRlciB8fCBuZXcgUG9pbnQoMCwgMClcbiAgcmV0dXJuIGNlbnRlci5hZGQobmV3IFBvaW50KGxlbmd0aCAqIE1hdGguY29zKGFuZ2xlKSwgbGVuZ3RoICogTWF0aC5zaW4oYW5nbGUpKSlcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7XG4gIGdldFBvaW50T25MaW5lQnlMZW5naHQsXG4gIGRpcmVjdENyb3NzaW5nLFxuICBib3VuZFRvTGluZVxufSBmcm9tICcuL2dlb21ldHJ5L2JvdW5kcydcblxuaW1wb3J0IHtcbiAgZ2V0QW5nbGUsXG4gIG5vcm1hbGl6ZUFuZ2xlLFxuICBib3VuZEFuZ2xlLFxuICBnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW1cbn0gZnJvbSAnLi9nZW9tZXRyeS9hbmdsZXMnXG5cbmV4cG9ydCBjbGFzcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yICgpIHt9XG5cbiAgYm91bmQocG9pbnQsIF9zaXplKSB7XG4gICAgcmV0dXJuIHBvaW50XG4gIH1cblxuICByZWZyZXNoICgpIHt9XG5cbiAgc3RhdGljIGJvdW5kaW5nKCkge1xuICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHRoaXMoLi4uYXJndW1lbnRzKVxuICAgIHJldHVybiBpbnN0YW5jZS5ib3VuZC5iaW5kKGluc3RhbmNlKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvUmVjdGFuZ2xlIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5yZWN0YW5nbGUgPSByZWN0YW5nbGVcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgY2FsY1BvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIGNvbnN0IHJlY3RQMiA9IHRoaXMucmVjdGFuZ2xlLmdldFAzKClcblxuICAgIGlmICh0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi54ID4gY2FsY1BvaW50LngpIHtcbiAgICAgIChjYWxjUG9pbnQueCA9IHRoaXMucmVjdGFuZ2xlLnBvc2l0aW9uLngpXG4gICAgfVxuICAgIGlmICh0aGlzLnJlY3RhbmdsZS5wb3NpdGlvbi55ID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gdGhpcy5yZWN0YW5nbGUucG9zaXRpb24ueVxuICAgIH1cbiAgICBpZiAocmVjdFAyLnggPCBjYWxjUG9pbnQueCArIHNpemUueCkge1xuICAgICAgY2FsY1BvaW50LnggPSByZWN0UDIueCAtIHNpemUueFxuICAgIH1cbiAgICBpZiAocmVjdFAyLnkgPCBjYWxjUG9pbnQueSArIHNpemUueSkge1xuICAgICAgY2FsY1BvaW50LnkgPSByZWN0UDIueSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0VsZW1lbnQgZXh0ZW5kcyBCb3VuZFRvUmVjdGFuZ2xlIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29udGFpbmVyKSB7XG4gICAgc3VwZXIoUmVjdGFuZ2xlLmZyb21FbGVtZW50KGVsZW1lbnQsIGNvbnRhaW5lcikpXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyXG4gIH1cblxuICByZWZyZXNoICgpIHtcbiAgICB0aGlzLnJlY3RhbmdsZSA9IFJlY3RhbmdsZS5mcm9tRWxlbWVudCh0aGlzLmVsZW1lbnQsIHRoaXMuY29udGFpbmVyKVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuZFRvTGluZVggZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHgsIHN0YXJ0WSwgZW5kWSkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnggPSB4XG4gICAgdGhpcy5zdGFydFkgPSBzdGFydFlcbiAgICB0aGlzLmVuZFkgPSBlbmRZXG4gIH1cblxuICBib3VuZChwb2ludCwgc2l6ZSkge1xuICAgIGNvbnN0IGNhbGNQb2ludCA9IHBvaW50LmNsb25lKClcblxuICAgIGNhbGNQb2ludC54ID0gdGhpcy54XG4gICAgaWYgKHRoaXMuc3RhcnRZID4gY2FsY1BvaW50LnkpIHtcbiAgICAgIGNhbGNQb2ludC55ID0gdGhpcy5zdGFydFlcbiAgICB9XG4gICAgaWYgKHRoaXMuZW5kWSA8IGNhbGNQb2ludC55ICsgc2l6ZS55KSB7XG4gICAgICBjYWxjUG9pbnQueSA9IHRoaXMuZW5kWSAtIHNpemUueVxuICAgIH1cblxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmVZIGV4dGVuZHMgQm91bmQge1xuICBjb25zdHJ1Y3Rvcih5LCBzdGFydFgsIGVuZFgpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy55ID0geVxuICAgIHRoaXMuc3RhcnRYID0gc3RhcnRYXG4gICAgdGhpcy5lbmRYID0gZW5kWFxuICB9XG5cbiAgYm91bmQocG9pbnQsIHNpemUpIHtcbiAgICBjb25zdCBjYWxjUG9pbnQgPSBwb2ludC5jbG9uZSgpXG4gICAgY2FsY1BvaW50LnkgPSB0aGlzLnlcbiAgICBpZiAodGhpcy5zdGFydFggPiBjYWxjUG9pbnQueCkge1xuICAgICAgY2FsY1BvaW50LnggPSB0aGlzLnN0YXJ0WFxuICAgIH1cbiAgICBpZiAodGhpcy5lbmRYIDwgY2FsY1BvaW50LnggKyBzaXplLngpIHtcbiAgICAgIGNhbGNQb2ludC54ID0gdGhpcy5lbmRYIC0gc2l6ZS54XG4gICAgfVxuICAgIHJldHVybiBjYWxjUG9pbnRcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQm91bmRUb0xpbmUgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKHN0YXJ0UG9pbnQsIGVuZFBvaW50KSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuc3RhcnRQb2ludCA9IHN0YXJ0UG9pbnRcbiAgICB0aGlzLmVuZFBvaW50ID0gZW5kUG9pbnRcbiAgICBjb25zdCBhbHBoYSA9IE1hdGguYXRhbjIoZW5kUG9pbnQueSAtIHN0YXJ0UG9pbnQueSwgZW5kUG9pbnQueCAtIHN0YXJ0UG9pbnQueClcbiAgICBjb25zdCBiZXRhID0gYWxwaGEgKyBNYXRoLlBJIC8gMlxuICAgIHRoaXMuc29tZUsgPSAxMFxuICAgIHRoaXMuY29zQmV0YSA9IE1hdGguY29zKGJldGEpXG4gICAgdGhpcy5zaW5CZXRhID0gTWF0aC5zaW4oYmV0YSlcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBzaXplKSB7XG4gICAgY29uc3QgcG9pbnQyID0gbmV3IFBvaW50KFxuICAgICAgcG9pbnQueCArIHRoaXMuc29tZUsgKiB0aGlzLmNvc0JldGEsXG4gICAgICBwb2ludC55ICsgdGhpcy5zb21lSyAqIHRoaXMuc2luQmV0YVxuICAgIClcblxuICAgIGNvbnN0IG5ld0VuZFBvaW50ID0gZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCh0aGlzLmVuZFBvaW50LCB0aGlzLnN0YXJ0UG9pbnQsIHNpemUueClcbiAgICBjb25zdCBwb2ludENyb3NzaW5nID0gZGlyZWN0Q3Jvc3NpbmcodGhpcy5zdGFydFBvaW50LCB0aGlzLmVuZFBvaW50LCBwb2ludCwgcG9pbnQyKVxuXG4gICAgcmV0dXJuIGJvdW5kVG9MaW5lKHRoaXMuc3RhcnRQb2ludCwgbmV3RW5kUG9pbnQsIHBvaW50Q3Jvc3NpbmcpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9DaXJjbGUgZXh0ZW5kcyBCb3VuZCB7XG4gIGNvbnN0cnVjdG9yKGNlbnRlciwgcmFkaXVzKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuY2VudGVyID0gY2VudGVyXG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXNcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIHJldHVybiBnZXRQb2ludE9uTGluZUJ5TGVuZ2h0KHRoaXMuY2VudGVyLCBwb2ludCwgdGhpcy5yYWRpdXMpXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJvdW5kVG9BcmMgZXh0ZW5kcyBCb3VuZFRvQ2lyY2xlIHtcbiAgY29uc3RydWN0b3IoY2VudGVyLCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlKSB7XG4gICAgc3VwZXIoY2VudGVyLCByYWRpdXMpXG4gICAgdGhpcy5fc3RhcnRBbmdsZSA9IHN0YXJ0QW5nbGVcbiAgICB0aGlzLl9lbmRBbmdsZSA9IGVuZEFuZ2xlXG4gIH1cblxuICBzdGFydEFuZ2xlKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5fc3RhcnRBbmdsZSA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuX3N0YXJ0QW5nbGUoKSA6IHRoaXMuX3N0YXJ0QW5nbGVcbiAgfVxuXG4gIGVuZEFuZ2xlKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5fZW5kQW5nbGUgPT09ICdmdW5jdGlvbicgPyB0aGlzLl9lbmRBbmdsZSgpIDogdGhpcy5fZW5kQW5nbGVcbiAgfVxuXG4gIGJvdW5kKHBvaW50LCBfc2l6ZSkge1xuICAgIGxldCBhbmdsZSA9IGdldEFuZ2xlKHRoaXMuY2VudGVyLCBwb2ludClcbiAgICBhbmdsZSA9IG5vcm1hbGl6ZUFuZ2xlKGFuZ2xlKVxuICAgIGFuZ2xlID0gYm91bmRBbmdsZSh0aGlzLnN0YXJ0QW5nbGUoKSwgdGhpcy5lbmRBbmdsZSgpLCBhbmdsZSlcbiAgICByZXR1cm4gZ2V0UG9pbnRGcm9tUmFkaWFsU3lzdGVtKGFuZ2xlLCB0aGlzLnJhZGl1cywgdGhpcy5jZW50ZXIpXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGFycmF5LCB2YWwpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhcnJheVtpXSA9PT0gdmFsKSB7XG4gICAgICBhcnJheS5zcGxpY2UoaSwgMSlcbiAgICAgIGktLVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXlcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJhbmdlKHN0YXJ0LCBzdG9wLCBzdGVwKSB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdXG4gIGlmICh0eXBlb2Ygc3RvcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBzdG9wID0gc3RhcnRcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAodHlwZW9mIHN0ZXAgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgc3RlcCA9IDFcbiAgfVxuICBpZiAoKHN0ZXAgPiAwICYmIHN0YXJ0ID49IHN0b3ApIHx8IChzdGVwIDwgMCAmJiBzdGFydCA8PSBzdG9wKSkge1xuICAgIHJldHVybiBbXVxuICB9XG4gIGZvciAobGV0IGkgPSBzdGFydDsgc3RlcCA+IDAgPyBpIDwgc3RvcCA6IGkgPiBzdG9wOyBpICs9IHN0ZXApIHtcbiAgICByZXN1bHQucHVzaChpKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IHsgYWRkUG9pbnRUb0JvdW5kUG9pbnRzIH0gZnJvbSAnLi9nZW9tZXRyeS9ib3VuZHMnXG5cbmltcG9ydCB7XG4gIGluZGV4T2ZOZWFyZXN0UG9pbnQsXG4gIGdldERpc3RhbmNlXG59IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuXG5jbGFzcyBCYXNpY1N0cmF0ZWd5IHtcbiAgY29uc3RydWN0b3IocmVjdGFuZ2xlLCBvcHRpb25zPXt9KSB7XG4gICAgdGhpcy5yZWN0YW5nbGUgPSByZWN0YW5nbGVcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gIH1cblxuICBnZXQgYm91bmRSZWN0ICgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMucmVjdGFuZ2xlID09PSAnZnVuY3Rpb24nID8gdGhpcy5yZWN0YW5nbGUoKSA6IHRoaXMucmVjdGFuZ2xlXG4gIH1cbn1cblxuY2xhc3MgTm90Q3Jvc3NpbmdTdHJhdGVneSBleHRlbmRzIEJhc2ljU3RyYXRlZ3kge1xuICBwb3NpdGlvbmluZyAocmVjdGFuZ2xlTGlzdCwgaW5kZXhlc09mTmV3cykge1xuICAgIGNvbnN0IHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMgPSByZWN0YW5nbGVMaXN0LnJlZHVjZSgoaW5kZXhlcywgX3JlY3QsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaW5kZXhlc09mTmV3cy5pbmRleE9mKGluZGV4KSA9PT0gLTEpIHtcbiAgICAgICAgaW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgfVxuICAgICAgcmV0dXJuIGluZGV4ZXNcbiAgICB9LCBbXSlcblxuICAgIGluZGV4ZXNPZk5ld3MuZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgIGxldCByZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleF1cbiAgICAgIGxldCByZW1vdmFibGUgPSBmYWxzZVxuXG4gICAgICBzdGF0aWNSZWN0YW5nbGVJbmRleGVzLmZvckVhY2goKGluZGV4T2ZTdGF0aWMpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGljUmVjdCA9IHJlY3RhbmdsZUxpc3RbaW5kZXhPZlN0YXRpY11cbiAgICAgICAgcmVjdCA9IHN0YXRpY1JlY3QubW92ZVRvQm91bmQocmVjdClcbiAgICAgIH0pXG5cbiAgICAgIHJlbW92YWJsZSA9IHN0YXRpY1JlY3RhbmdsZUluZGV4ZXMuc29tZSgoaW5kZXhPZlN0YXRpYykgPT4ge1xuICAgICAgICBjb25zdCBzdGF0aWNSZWN0ID0gcmVjdGFuZ2xlTGlzdFtpbmRleE9mU3RhdGljXVxuICAgICAgICByZXR1cm4gICEhc3RhdGljUmVjdC5hbmQocmVjdClcbiAgICAgIH0pIHx8IHJlY3QuYW5kKHRoaXMuYm91bmRSZWN0KS5nZXRTcXVhcmUoKSAhPT0gcmVjdC5nZXRTcXVhcmUoKVxuXG4gICAgICBpZiAocmVtb3ZhYmxlKSB7XG4gICAgICAgIHJlY3QucmVtb3ZhYmxlID0gdHJ1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGljUmVjdGFuZ2xlSW5kZXhlcy5wdXNoKGluZGV4KVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgfVxuXG4gIHNvcnRpbmcob2RsRHJhZ2dhYmxlc0xpc3QsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKSB7XG4gICAgY29uc3QgZHJhZ2dhYmxlcyA9IG9kbERyYWdnYWJsZXNMaXN0LmNvbmNhdChuZXdEcmFnZ2FibGVzKVxuICAgIG5ld0RyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpbmRleE9mTmV3cy5wdXNoKGRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpKVxuICAgIH0pXG4gICAgcmV0dXJuIGRyYWdnYWJsZXNcbiAgfVxufVxuXG5jbGFzcyBGbG9hdExlZnRTdHJhdGVneSBleHRlbmRzIEJhc2ljU3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihyZWN0YW5nbGUsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihyZWN0YW5nbGUsIG9wdGlvbnMpXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICByZW1vdmFibGU6IHRydWVcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5yYWRpdXMgPSBvcHRpb25zLnJhZGl1cyB8fCA4MFxuXG4gICAgdGhpcy5wYWRkaW5nVG9wTGVmdCA9IG9wdGlvbnMucGFkZGluZ1RvcExlZnQgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgdGhpcy5wYWRkaW5nQm90dG9tUmlnaHQgPSBvcHRpb25zLnBhZGRpbmdCb3R0b21SaWdodCB8fCBuZXcgUG9pbnQoMCwgMClcbiAgICB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA9IG9wdGlvbnMueUdhcEJldHdlZW5EcmFnZ2FibGVzIHx8IDBcblxuICAgIHRoaXMuZ2V0RGlzdGFuY2UgPSBvcHRpb25zLmdldERpc3RhbmNlIHx8IGdldERpc3RhbmNlXG4gICAgdGhpcy5nZXRQb3NpdGlvbiA9IG9wdGlvbnMuZ2V0UG9zaXRpb24gfHwgKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5wb3NpdGlvbilcbiAgfVxuXG4gIHBvc2l0aW9uaW5nKHJlY3RhbmdsZUxpc3QsIF9pbmRleGVzT2ZOZXdzKSB7XG4gICAgY29uc3QgYm91bmRSZWN0ID0gdGhpcy5ib3VuZFJlY3RcbiAgICBjb25zdCByZWN0UDIgPSBib3VuZFJlY3QuZ2V0UDIoKVxuICAgIGxldCBib3VuZGFyeVBvaW50cyA9IFtib3VuZFJlY3QucG9zaXRpb25dXG5cbiAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goKHJlY3QsIHJlY3RJbmRleCkgPT4ge1xuICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcnlQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbaV0ueCArIHRoaXMucGFkZGluZ1RvcExlZnQueCxcbiAgICAgICAgICBpID4gMCA/IChib3VuZGFyeVBvaW50c1tpIC0gMV0ueSArIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzKSA6IChib3VuZFJlY3QucG9zaXRpb24ueSArIHRoaXMucGFkZGluZ1RvcExlZnQueSlcbiAgICAgICAgKVxuXG4gICAgICAgIGlzVmFsaWQgPSAocG9zaXRpb24ueCArIHJlY3Quc2l6ZS54IDwgcmVjdFAyLngpXG5cbiAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICBwb3NpdGlvbiA9IG5ldyBQb2ludChcbiAgICAgICAgICBib3VuZFJlY3QucG9zaXRpb24ueCArIHRoaXMucGFkZGluZ1RvcExlZnQueCxcbiAgICAgICAgICBib3VuZGFyeVBvaW50c1tib3VuZGFyeVBvaW50cy5sZW5ndGggLSAxXS55ICsgKHJlY3RJbmRleCA+IDAgPyB0aGlzLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyA6IHRoaXMucGFkZGluZ1RvcExlZnQueSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZWN0LnBvc2l0aW9uID0gcG9zaXRpb25cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVtb3ZhYmxlICYmIHJlY3QuZ2V0UDMoKS55ID4gYm91bmRSZWN0LmdldFAzKCkueSkge1xuICAgICAgICByZWN0LnJlbW92YWJsZSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgYm91bmRhcnlQb2ludHMgPSBhZGRQb2ludFRvQm91bmRQb2ludHMoYm91bmRhcnlQb2ludHMsIHJlY3QuZ2V0UDMoKS5hZGQodGhpcy5wYWRkaW5nQm90dG9tUmlnaHQpKVxuICAgIH0pXG4gICAgcmV0dXJuIHJlY3RhbmdsZUxpc3RcbiAgfVxuXG4gIHNvcnRpbmcob2RsRHJhZ2dhYmxlc0xpc3QsIG5ld0RyYWdnYWJsZXMsIGluZGV4T2ZOZXdzKSB7XG4gICAgY29uc3QgbmV3TGlzdCA9IG9kbERyYWdnYWJsZXNMaXN0LmNvbmNhdCgpXG4gICAgY29uc3QgbGlzdE9sZFBvc2l0aW9uID0gb2RsRHJhZ2dhYmxlc0xpc3QubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5nZXRQb3NpdGlvbigpKVxuICAgIG5ld0RyYWdnYWJsZXMuZm9yRWFjaCgobmV3RHJhZ2dhYmxlKSA9PiB7XG4gICAgICBsZXQgaW5kZXggPSBpbmRleE9mTmVhcmVzdFBvaW50KGxpc3RPbGRQb3NpdGlvbiwgdGhpcy5nZXRQb3NpdGlvbihuZXdEcmFnZ2FibGUpLCB0aGlzLnJhZGl1cywgdGhpcy5nZXREaXN0YW5jZSlcbiAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgaW5kZXggPSBuZXdMaXN0Lmxlbmd0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5kZXggPSBuZXdMaXN0LmluZGV4T2Yob2RsRHJhZ2dhYmxlc0xpc3RbaW5kZXhdKVxuICAgICAgfVxuICAgICAgbmV3TGlzdC5zcGxpY2UoaW5kZXgsIDAsIG5ld0RyYWdnYWJsZSlcbiAgICB9KVxuICAgIG5ld0RyYWdnYWJsZXMuZm9yRWFjaCgobmV3RHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpbmRleE9mTmV3cy5wdXNoKG5ld0xpc3QuaW5kZXhPZihuZXdEcmFnZ2FibGUpKVxuICAgIH0pXG4gICAgcmV0dXJuIG5ld0xpc3RcbiAgfVxufVxuXG5jbGFzcyBGbG9hdFJpZ2h0U3RyYXRlZ3kgZXh0ZW5kcyBGbG9hdExlZnRTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKHJlY3RhbmdsZSwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKHJlY3RhbmdsZSwgb3B0aW9ucylcblxuICAgIHRoaXMucGFkZGluZ1RvcFJpZ2h0ID0gb3B0aW9ucy5wYWRkaW5nVG9wUmlnaHQgfHwgbmV3IFBvaW50KDUsIDUpXG4gICAgdGhpcy5wYWRkaW5nQm90dG9tTGVmdCA9IG9wdGlvbnMucGFkZGluZ0JvdHRvbUxlZnQgfHwgbmV3IFBvaW50KDAsIDApXG4gICAgdGhpcy55R2FwQmV0d2VlbkRyYWdnYWJsZXMgPSBvcHRpb25zLnlHYXBCZXR3ZWVuRHJhZ2dhYmxlcyB8fCAwXG5cbiAgICB0aGlzLnBhZGRpbmdCb3R0b21OZWdMZWZ0ID0gbmV3IFBvaW50KC10aGlzLnBhZGRpbmdCb3R0b21MZWZ0LngsIHRoaXMucGFkZGluZ0JvdHRvbUxlZnQueSlcbiAgfVxuXG4gIHBvc2l0aW9uaW5nKHJlY3RhbmdsZUxpc3QsIF9pbmRleGVzT2ZOZXdzKSB7XG4gICAgY29uc3QgYm91bmRSZWN0ID0gdGhpcy5ib3VuZFJlY3RcbiAgICBsZXQgYm91bmRhcnlQb2ludHMgPSBbYm91bmRSZWN0LmdldFAyKCldXG5cbiAgICByZWN0YW5nbGVMaXN0LmZvckVhY2goKHJlY3QsIHJlY3RJbmRleCkgPT4ge1xuICAgICAgbGV0IHBvc2l0aW9uLCBpc1ZhbGlkID0gZmFsc2VcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm91bmRhcnlQb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcG9zaXRpb24gPSBuZXcgUG9pbnQoXG4gICAgICAgICAgYm91bmRhcnlQb2ludHNbaV0ueCAtIHJlY3Quc2l6ZS54IC0gdGhpcy5wYWRkaW5nVG9wUmlnaHQueCxcbiAgICAgICAgICBpID4gMCA/IChib3VuZGFyeVBvaW50c1tpIC0gMV0ueSArIHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzKSA6IChib3VuZFJlY3QucG9zaXRpb24ueSArIHRoaXMucGFkZGluZ1RvcFJpZ2h0LnkpXG4gICAgICAgIClcblxuICAgICAgICBpc1ZhbGlkID0gKHBvc2l0aW9uLnggPiByZWN0LnBvc2l0aW9uLngpXG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgIHBvc2l0aW9uID0gbmV3IFBvaW50KFxuICAgICAgICAgIGJvdW5kUmVjdC5nZXRQMigpLnggIC0gcmVjdC5zaXplLnggLSB0aGlzLnBhZGRpbmdUb3BSaWdodC54LFxuICAgICAgICAgIGJvdW5kYXJ5UG9pbnRzW2JvdW5kYXJ5UG9pbnRzLmxlbmd0aCAtIDFdLnkgKyAocmVjdEluZGV4ID4gMCA/IHRoaXMueUdhcEJldHdlZW5EcmFnZ2FibGVzIDogdGhpcy5wYWRkaW5nVG9wUmlnaHQueSlcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgcmVjdC5wb3NpdGlvbiA9IHBvc2l0aW9uXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlbW92YWJsZSAmJiByZWN0LmdldFA0KCkueSA+IGJvdW5kUmVjdC5nZXRQNCgpLnkpIHtcbiAgICAgICAgcmVjdC5yZW1vdmFibGUgPSB0cnVlXG4gICAgICB9XG4gICAgICBib3VuZGFyeVBvaW50cyA9IGFkZFBvaW50VG9Cb3VuZFBvaW50cyhib3VuZGFyeVBvaW50cywgcmVjdC5nZXRQNCgpLmFkZCh0aGlzLnBhZGRpbmdCb3R0b21OZWdMZWZ0KSwgdHJ1ZSlcbiAgICB9KVxuICAgIHJldHVybiByZWN0YW5nbGVMaXN0XG4gIH1cbn1cblxuZXhwb3J0IHsgTm90Q3Jvc3NpbmdTdHJhdGVneSwgRmxvYXRMZWZ0U3RyYXRlZ3ksIEZsb2F0UmlnaHRTdHJhdGVneSB9XG4iLCJpbXBvcnQgcmFuZ2UgZnJvbSAnLi91dGlscy9yYW5nZS5qcydcbmltcG9ydCByZW1vdmVJdGVtIGZyb20gJy4vdXRpbHMvcmVtb3ZlLWFycmF5LWl0ZW0nXG5pbXBvcnQgZ2V0RGVmYXVsdENvbnRhaW5lciBmcm9tICcuL3V0aWxzL2dldC1kZWZhdWx0LWNvbnRhaW5lcidcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gJy4vZ2VvbWV0cnkvcmVjdGFuZ2xlJ1xuaW1wb3J0IHsgdHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSB9IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuaW1wb3J0IHsgc2NvcGVzLCBkZWZhdWx0U2NvcGUgfSBmcm9tICcuL3Njb3BlJ1xuXG5pbXBvcnQgeyBGbG9hdExlZnRTdHJhdGVneSB9IGZyb20gJy4vcG9zaXRpb25pbmcnXG5pbXBvcnQgeyBCb3VuZFRvRWxlbWVudCB9IGZyb20gJy4vYm91bmRpbmcnXG5cbmNvbnN0IGFkZFRvRGVmYXVsdFNjb3BlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gIGRlZmF1bHRTY29wZS5hZGRUYXJnZXQodGFyZ2V0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXJnZXQgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBkcmFnZ2FibGVzLCBvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIGNvbnN0IHRhcmdldCA9IHRoaXNcblxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGltZUVuZDogMjAwLFxuICAgICAgdGltZUV4Y2FuZ2U6IDQwMFxuICAgIH0sIG9wdGlvbnMpXG5cbiAgICB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kgPSBvcHRpb25zLnN0cmF0ZWd5IHx8IG5ldyBGbG9hdExlZnRTdHJhdGVneShcbiAgICAgIHRoaXMuZ2V0UmVjdGFuZ2xlLmJpbmQodGhpcyksXG4gICAgICB7XG4gICAgICAgIHJhZGl1czogODAsXG4gICAgICAgIGdldERpc3RhbmNlOiB0cmFuc2Zvcm1lZFNwYWNlRGlzdGFuY2VGYWN0b3J5KHsgeDogMSwgeTogNCB9KSxcbiAgICAgICAgcmVtb3ZhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgKVxuXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUudGFyZ2V0cy5wdXNoKHRhcmdldCkpXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlc1xuXG4gICAgVGFyZ2V0LmVtaXR0ZXIuZW1pdCgndGFyZ2V0OmNyZWF0ZScsIHRoaXMpXG5cbiAgICB0aGlzLnN0YXJ0Qm91bmRpbmcoKVxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBzdGFydEJvdW5kaW5nKCkge1xuICAgIHRoaXMuYm91bmQgPSB0aGlzLm9wdGlvbnMuYm91bmQgfHwgQm91bmRUb0VsZW1lbnQuYm91bmRpbmcodGhpcy5lbGVtZW50KVxuICB9XG5cbiAgcG9zaXRpb25pbmcgKGRyYWdnYWJsZXMsIGluZGV4ZXNPZk5ldykge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uaW5nU3RyYXRlZ3kucG9zaXRpb25pbmcoZHJhZ2dhYmxlcywgaW5kZXhlc09mTmV3KVxuICB9XG5cbiAgc29ydGluZyAob2xkRHJhZ2dhYmxlcywgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbmluZ1N0cmF0ZWd5LnNvcnRpbmcob2xkRHJhZ2dhYmxlcywgbmV3RHJhZ2dhYmxlcywgaW5kZXhPZk5ld3MpXG4gIH1cblxuICBpbml0KCkge1xuICAgIGxldCByZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXdcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5kcmFnZ2FibGVzLmZpbHRlcigoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBsZXQgZWxlbWVudCA9IGRyYWdnYWJsZS5lbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIHdoaWxlIChlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG5cbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBpbmRleGVzT2ZOZXcgPSByYW5nZSh0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGgpXG4gICAgICByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgICB9KSwgaW5kZXhlc09mTmV3KVxuICAgICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcpXG4gICAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMuZW1pdCgndGFyZ2V0OmFkZCcsIGRyYWdnYWJsZSkpXG4gICAgfVxuICB9XG5cbiAgZ2V0UmVjdGFuZ2xlKCkge1xuICAgIHJldHVybiBSZWN0YW5nbGUuZnJvbUVsZW1lbnQoXG4gICAgICB0aGlzLmVsZW1lbnQsXG4gICAgICB0aGlzLmNvbnRhaW5lcixcbiAgICAgIHRoaXMub3B0aW9ucy5pc0NvbnRlbnRCb3hTaXplLFxuICAgICAgdHJ1ZVxuICAgIClcbiAgfVxuXG4gIGNhdGNoRHJhZ2dhYmxlKGRyYWdnYWJsZSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY2F0Y2hEcmFnZ2FibGUodGhpcywgZHJhZ2dhYmxlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YXJnZXRSZWN0YW5nbGUgPSB0aGlzLmdldFJlY3RhbmdsZSgpXG4gICAgICBjb25zdCBkcmFnZ2FibGVTcXVhcmUgPSBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKClcblxuICAgICAgcmV0dXJuIGRyYWdnYWJsZVNxdWFyZSA8IHRhcmdldFJlY3RhbmdsZS5nZXRTcXVhcmUoKVxuICAgICAgICAgICAgICAmJiB0YXJnZXRSZWN0YW5nbGUuaW5jbHVkZVBvaW50KGRyYWdnYWJsZS5nZXRDZW50ZXIoKSlcbiAgICB9XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5wb3NpdGlvblxuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSZWN0YW5nbGUoKS5zaXplXG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4gcmVtb3ZlSXRlbShzY29wZS50YXJnZXRzLCB0aGlzKSlcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgY29uc3QgcmVjdGFuZ2xlcyA9IHRoaXMucG9zaXRpb25pbmcodGhpcy5pbm5lckRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIHJldHVybiBkcmFnZ2FibGUuZ2V0UmVjdGFuZ2xlKClcbiAgICB9KSwgW10pXG4gICAgdGhpcy5zZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBbXSwgMClcbiAgfVxuXG4gIG9uRW5kKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IG5ld0RyYWdnYWJsZXNJbmRleCA9IFtdXG5cbiAgICBpZiAodGhpcy5nZXRSZWN0YW5nbGUoKS5pbmNsdWRlUG9pbnQoZHJhZ2dhYmxlLmdldENlbnRlcigpKSkge1xuICAgICAgZHJhZ2dhYmxlLnBvc2l0aW9uID0gdGhpcy5ib3VuZChkcmFnZ2FibGUucG9zaXRpb24sIGRyYWdnYWJsZS5nZXRTaXplKCkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OmJlZm9yZUFkZCcsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzID0gdGhpcy5zb3J0aW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBbZHJhZ2dhYmxlXSwgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGNvbnN0IHJlY3RhbmdsZXMgPSB0aGlzLnBvc2l0aW9uaW5nKHRoaXMuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICByZXR1cm4gZHJhZ2dhYmxlLmdldFJlY3RhbmdsZSgpXG4gICAgfSksIG5ld0RyYWdnYWJsZXNJbmRleClcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgbmV3RHJhZ2dhYmxlc0luZGV4KVxuICAgIGlmICh0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSkgIT09IC0xKSB7XG4gICAgICB0aGlzLmFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICBzZXRQb3NpdGlvbihyZWN0YW5nbGVzLCBpbmRleGVzT2ZOZXcsIHRpbWUpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgwKS5mb3JFYWNoKChkcmFnZ2FibGUsIGkpID0+IHtcbiAgICAgIGNvbnN0IHJlY3QgPSByZWN0YW5nbGVzW2ldLFxuICAgICAgICB0aW1lRW5kID0gdGltZSB8fCB0aW1lID09PSAwID8gdGltZSA6IGluZGV4ZXNPZk5ldy5pbmRleE9mKGkpICE9PSAtMSA/IHRoaXMub3B0aW9ucy50aW1lRW5kIDogdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlXG5cbiAgICAgIGlmIChyZWN0LnJlbW92YWJsZSkge1xuICAgICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCB0aW1lRW5kLCB0cnVlLCB0cnVlKVxuICAgICAgICByZW1vdmVJdGVtKHRoaXMuaW5uZXJEcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICAgIHRoaXMuZW1pdCgndGFyZ2V0OnJlbW92ZScsIGRyYWdnYWJsZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdnYWJsZS5tb3ZlKHJlY3QucG9zaXRpb24sIHRpbWVFbmQsIHRydWUsIHRydWUpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGFkZChkcmFnZ2FibGUsIHRpbWUpIHtcbiAgICBjb25zdCBuZXdEcmFnZ2FibGVzSW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5sZW5ndGhcblxuICAgIHRoaXMuZW1pdCgndGFyZ2V0OmJlZm9yZUFkZCcsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMucHVzaElubmVyRHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBuZXdEcmFnZ2FibGVzSW5kZXgsIGRyYWdnYWJsZSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW25ld0RyYWdnYWJsZXNJbmRleF0sIHRpbWUgfHwgMClcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgdGhpcy5hZGRSZW1vdmVPbk1vdmUoZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIHB1c2hJbm5lckRyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICBpZiAodGhpcy5pbm5lckRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpPT09LTEpIHtcbiAgICAgIHRoaXMuaW5uZXJEcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxuICAgIH1cbiAgfVxuXG4gIGFkZFJlbW92ZU9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBkcmFnZ2FibGUub24oJ2RyYWc6bW92ZScsIHRoaXMucmVtb3ZlSGFuZGxlciA9ICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlKGRyYWdnYWJsZSlcbiAgICB9KVxuXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6YWRkJywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVtb3ZlKGRyYWdnYWJsZSkge1xuICAgIGRyYWdnYWJsZS51bnN1YnNjcmliZSgnZHJhZzptb3ZlJywgdGhpcy5yZW1vdmVIYW5kbGVyKVxuXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmlubmVyRHJhZ2dhYmxlcy5pbmRleE9mKGRyYWdnYWJsZSlcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zcGxpY2UoaW5kZXgsIDEpXG5cbiAgICBjb25zdCByZWN0YW5nbGVzID0gdGhpcy5wb3NpdGlvbmluZyh0aGlzLmlubmVyRHJhZ2dhYmxlcy5tYXAoKGRyYWdnYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGRyYWdnYWJsZS5nZXRSZWN0YW5nbGUoKVxuICAgIH0pLCBbXSlcblxuICAgIHRoaXMuc2V0UG9zaXRpb24ocmVjdGFuZ2xlcywgW10pXG4gICAgdGhpcy5lbWl0KCd0YXJnZXQ6cmVtb3ZlJywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUubW92ZShkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uLCAwLCB0cnVlLCB0cnVlKVxuICAgICAgdGhpcy5lbWl0KCd0YXJnZXQ6cmVtb3ZlJywgZHJhZ2dhYmxlKVxuICAgIH0pXG4gICAgdGhpcy5pbm5lckRyYWdnYWJsZXMgPSBbXVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICB0aGlzLmlubmVyRHJhZ2dhYmxlcy5zbGljZSgpXG4gIH1cblxuICBnZXQgY29udGFpbmVyKCkge1xuICAgIHJldHVybiAodGhpcy5fY29udGFpbmVyID0gdGhpcy5fY29udGFpbmVyIHx8IHRoaXMub3B0aW9ucy5jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLnBhcmVudCB8fCBnZXREZWZhdWx0Q29udGFpbmVyKHRoaXMuZWxlbWVudCkpXG4gIH1cbn1cblxuVGFyZ2V0LmVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKClcblRhcmdldC5lbWl0dGVyLm9uKCd0YXJnZXQ6Y3JlYXRlJywgYWRkVG9EZWZhdWx0U2NvcGUpXG4iLCJpbXBvcnQgcmVtb3ZlSXRlbSBmcm9tICcuL3V0aWxzL3JlbW92ZS1hcnJheS1pdGVtJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAnLi9kcmFnZ2FibGUnXG5pbXBvcnQgVGFyZ2V0IGZyb20gJy4vdGFyZ2V0J1xuXG5jb25zdCBzY29wZXMgPSBbXVxuXG5jbGFzcyBTY29wZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIHRhcmdldHMsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIHNjb3Blcy5mb3JFYWNoKChzY29wZSkgPT4ge1xuICAgICAgaWYgKGRyYWdnYWJsZXMpIHtcbiAgICAgICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgICAgICByZW1vdmVJdGVtKHNjb3BlLmRyYWdnYWJsZXMsIGRyYWdnYWJsZSlcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKHRhcmdldHMpIHtcbiAgICAgICAgdGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHtcbiAgICAgICAgICByZW1vdmVJdGVtKHNjb3BlLnRhcmdldHMsIHRhcmdldClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5kcmFnZ2FibGVzID0gZHJhZ2dhYmxlcyB8fCBbXVxuICAgIHRoaXMudGFyZ2V0cyA9IHRhcmdldHMgfHwgW11cbiAgICBzY29wZXMucHVzaCh0aGlzKVxuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIHRpbWVFbmQ6IChvcHRpb25zLnRpbWVFbmQpIHx8IDQwMFxuICAgIH1cblxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5kcmFnRW5kQWN0aW9uID0gKCkgPT4gdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgfSlcbiAgfVxuXG4gIGFkZERyYWdnYWJsZShkcmFnZ2FibGUpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMucHVzaChkcmFnZ2FibGUpXG4gICAgZHJhZ2dhYmxlLmRyYWdFbmRBY3Rpb24gPSAoKSA9PiB0aGlzLm9uRW5kKGRyYWdnYWJsZSlcbiAgfVxuXG4gIGFkZFRhcmdldCh0YXJnZXQpIHtcbiAgICB0aGlzLnRhcmdldHMucHVzaCh0YXJnZXQpXG4gIH1cblxuICBvbkVuZChkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzaG90VGFyZ2V0cyA9IHRoaXMudGFyZ2V0cy5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5kcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKSAhPT0gLTFcbiAgICB9KS5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgcmV0dXJuIHRhcmdldC5jYXRjaERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgfSkuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIGEuZ2V0UmVjdGFuZ2xlKCkuZ2V0U3F1YXJlKCkgLSBiLmdldFJlY3RhbmdsZSgpLmdldFNxdWFyZSgpXG4gICAgfSlcblxuICAgIGlmIChzaG90VGFyZ2V0cy5sZW5ndGgpIHtcbiAgICAgIHNob3RUYXJnZXRzWzBdLm9uRW5kKGRyYWdnYWJsZSlcbiAgICB9IGVsc2UgaWYgKGRyYWdnYWJsZS50YXJnZXRzLmxlbmd0aCkge1xuICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kKVxuICAgIH1cblxuICAgIHRoaXMuZW1pdCgnc2NvcGU6Y2hhbmdlJylcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZXNldCgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVmcmVzaCgpKVxuICAgIHRoaXMudGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHRhcmdldC5yZWZyZXNoKCkpXG4gIH1cblxuICBnZXQgcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldHMubWFwKCh0YXJnZXQpID0+IHtcbiAgICAgIHJldHVybiB0YXJnZXQuaW5uZXJEcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpKVxuICAgIH0pXG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICAgIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLnRhcmdldHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiB0YXJnZXQucmVzZXQoKSlcblxuICAgICAgcG9zaXRpb25zLmZvckVhY2goKHRhcmdldEluZGV4ZXMsIGkpID0+IHtcbiAgICAgICAgdGFyZ2V0SW5kZXhlcy5mb3JFYWNoKChpbmRleCkgPT4ge1xuICAgICAgICAgIHRoaXMudGFyZ2V0c1tpXS5hZGQodGhpcy5kcmFnZ2FibGVzW2luZGV4XSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG1lc3NhZ2VcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZGVmYXVsdFNjb3BlID0gbmV3IFNjb3BlKClcblxuZnVuY3Rpb24gc2NvcGUoZm4pIHtcbiAgY29uc3QgY3VycmVudFNjb3BlID0gbmV3IFNjb3BlKClcblxuICBjb25zdCBhZGREcmFnZ2FibGVUb1Njb3BlID0gZnVuY3Rpb24oZHJhZ2dhYmxlKSB7XG4gICAgY3VycmVudFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG4gICAgRHJhZ2dhYmxlLmVtaXR0ZXIuaW50ZXJydXB0KClcbiAgfVxuXG4gIGNvbnN0IGFkZFRhcmdldFRvU2NvcGUgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICBjdXJyZW50U2NvcGUuYWRkVGFyZ2V0KHRhcmdldClcbiAgICBEcmFnZ2FibGUuZW1pdHRlci5pbnRlcnJ1cHQoKVxuICB9XG5cbiAgRHJhZ2dhYmxlLmVtaXR0ZXIucHJlcGVuZE9uKCdkcmFnZ2FibGU6Y3JlYXRlJywgYWRkRHJhZ2dhYmxlVG9TY29wZSlcbiAgVGFyZ2V0LmVtaXR0ZXIucHJlcGVuZE9uKCd0YXJnZXQ6Y3JlYXRlJywgYWRkVGFyZ2V0VG9TY29wZSlcbiAgZm4uY2FsbCgpXG4gIERyYWdnYWJsZS5lbWl0dGVyLnVuc3Vic2NyaWJlKCdkcmFnZ2FibGU6Y3JlYXRlJywgYWRkRHJhZ2dhYmxlVG9TY29wZSlcbiAgVGFyZ2V0LmVtaXR0ZXIudW5zdWJzY3JpYmUoJ3RhcmdldDpjcmVhdGUnLCBhZGRUYXJnZXRUb1Njb3BlKVxuICByZXR1cm4gY3VycmVudFNjb3BlXG59XG5cbmV4cG9ydCB7IHNjb3BlcywgZGVmYXVsdFNjb3BlLCBTY29wZSwgc2NvcGUgfVxuIiwiZnVuY3Rpb24gY2hlY2tTdXBwb3J0UGFzc2l2ZUV2ZW50cygpIHtcbiAgbGV0IHBhc3NpdmVTdXBwb3J0ZWQgPSBmYWxzZVxuXG4gIHRyeSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3Bhc3NpdmUnLCB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiAocGFzc2l2ZVN1cHBvcnRlZCA9IHRydWUpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0Jywgb3B0aW9ucywgb3B0aW9ucylcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpXG4gIH0gY2F0Y2ggKF9lcnIpIHtcbiAgICBwYXNzaXZlU3VwcG9ydGVkID0gZmFsc2VcbiAgfVxuXG4gIHJldHVybiBwYXNzaXZlU3VwcG9ydGVkXG59XG5cbmV4cG9ydCBjb25zdCBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID0gY2hlY2tTdXBwb3J0UGFzc2l2ZUV2ZW50cygpXG5cbmZ1bmN0aW9uIGV2ZW50T3B0aW9ucyhvcHRpb25zLCBmYWxsYmFjayA9IGZhbHNlKSB7XG4gIHJldHVybiBpc1N1cHBvcnRQYXNzaXZlRXZlbnRzID8gb3B0aW9ucyA6IGZhbGxiYWNrXG59XG5cbmV4cG9ydCB7IGV2ZW50T3B0aW9ucyB9XG5cbmV4cG9ydCBkZWZhdWx0IGlzU3VwcG9ydFBhc3NpdmVFdmVudHNcbiIsImltcG9ydCBnZXREZWZhdWx0Q29udGFpbmVyIGZyb20gJy4vdXRpbHMvZ2V0LWRlZmF1bHQtY29udGFpbmVyJ1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2V2ZW50RW1pdHRlcidcbmltcG9ydCBnZXRTdHlsZVByb3BlcnR5IGZyb20gJ2Rlc2FuZHJvLWdldC1zdHlsZS1wcm9wZXJ0eSdcbmltcG9ydCB7IEJvdW5kVG9FbGVtZW50IH0gZnJvbSAnLi9ib3VuZGluZydcbmltcG9ydCBQb2ludCBmcm9tICcuL2dlb21ldHJ5L3BvaW50J1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL2dlb21ldHJ5L3JlY3RhbmdsZSdcbmltcG9ydCB7IGRlZmF1bHRTY29wZSB9IGZyb20gJy4vc2NvcGUnXG5pbXBvcnQgaXNTdXBwb3J0UGFzc2l2ZUV2ZW50cyBmcm9tICcuL3V0aWxzL2lzLXN1cHBvcnQtcGFzc2l2ZS1ldmVudHMnXG5cbmNvbnN0IHBhc3NpdmVGYWxzZSA9IGlzU3VwcG9ydFBhc3NpdmVFdmVudHMgPyB7IHBhc3NpdmU6IGZhbHNlIH0gOiBmYWxzZVxuXG5jb25zdCBpc1RvdWNoID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93XG5jb25zdCBtb3VzZUV2ZW50cyA9IHtcbiAgc3RhcnQ6ICdtb3VzZWRvd24nLFxuICBtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgZW5kOiAnbW91c2V1cCdcbn1cbmNvbnN0IHRvdWNoRXZlbnRzID0ge1xuICBzdGFydDogJ3RvdWNoc3RhcnQnLFxuICBtb3ZlOiAndG91Y2htb3ZlJyxcbiAgZW5kOiAndG91Y2hlbmQnXG59XG5jb25zdCBkcmFnZ2FibGVzID0gW11cbmNvbnN0IHRyYW5zZm9ybVByb3BlcnR5ID0gZ2V0U3R5bGVQcm9wZXJ0eSgndHJhbnNmb3JtJylcbmNvbnN0IHRyYW5zaXRpb25Qcm9wZXJ0eSA9IGdldFN0eWxlUHJvcGVydHkoJ3RyYW5zaXRpb24nKVxuXG5mdW5jdGlvbiBnZXRUb3VjaEJ5SUQoZWxlbWVudCwgdG91Y2hJZCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXS5pZGVudGlmaWVyID09PSB0b3VjaElkKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5jaGFuZ2VkVG91Y2hlc1tpXVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gcHJldmVudERvdWJsZUluaXQoZHJhZ2dhYmxlKSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBcImZvciB0aGlzIGVsZW1lbnQgRHJhZ2VlLkRyYWdnYWJsZSBpcyBhbHJlYWR5IGV4aXN0LCBkb24ndCBjcmVhdGUgaXQgdHdpY2UgXCJcbiAgaWYgKGRyYWdnYWJsZXMuc29tZSgoZXhpc3RpbmcpID0+IGRyYWdnYWJsZS5lbGVtZW50ID09PSBleGlzdGluZy5lbGVtZW50KSkge1xuICAgIHRocm93IG1lc3NhZ2VcbiAgfVxuICBkcmFnZ2FibGVzLnB1c2goZHJhZ2dhYmxlKVxufVxuXG5mdW5jdGlvbiBhZGRUb0RlZmF1bHRTY29wZShkcmFnZ2FibGUpIHtcbiAgZGVmYXVsdFNjb3BlLmFkZERyYWdnYWJsZShkcmFnZ2FibGUpXG59XG5cbmZ1bmN0aW9uIGNvcHlTdHlsZXMoc291cmNlLCBkZXN0aW5hdGlvbikge1xuICBjb25zdCBjcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHNvdXJjZSlcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qga2V5ID0gY3NbaV1cbiAgICBpZiAoKGtleS5pbmRleE9mKCd0cmFuc2l0aW9uJykgPCAwKSAmJiAoa2V5LmluZGV4T2YoJ3RyYW5zZm9ybScpIDwgMCkpIHtcbiAgICAgIGRlc3RpbmF0aW9uLnN0eWxlW2tleV0gPSBjc1trZXldXG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3VyY2UuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBjb3B5U3R5bGVzKHNvdXJjZS5jaGlsZHJlbltpXSwgZGVzdGluYXRpb24uY2hpbGRyZW5baV0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ2dhYmxlIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucz17fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgdGhpcy50YXJnZXRzID0gW11cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxuICAgIHByZXZlbnREb3VibGVJbml0KHRoaXMpXG4gICAgRHJhZ2dhYmxlLmVtaXR0ZXIuZW1pdCgnZHJhZ2dhYmxlOmNyZWF0ZScsIHRoaXMpXG4gICAgdGhpcy5fZW5hYmxlID0gdHJ1ZVxuXG4gICAgdGhpcy5zdGFydEJvdW5kaW5nKClcbiAgICB0aGlzLnN0YXJ0UG9zaXRpb25pbmcoKVxuICAgIHRoaXMuc3RhcnRMaXN0ZW5pbmcoKVxuICB9XG5cbiAgc3RhcnRCb3VuZGluZygpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmJvdW5kKSB7XG4gICAgICB0aGlzLmJvdW5kaW5nID0geyBib3VuZDogdGhpcy5vcHRpb25zLmJvdW5kIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ib3VuZGluZyA9IG5ldyBCb3VuZFRvRWxlbWVudCh0aGlzLmNvbnRhaW5lciwgdGhpcy5jb250YWluZXIpXG4gICAgfVxuICB9XG5cbiAgc3RhcnRQb3NpdGlvbmluZygpIHtcbiAgICB0aGlzLl9zZXREZWZhdWx0VHJhbnNpdGlvbigpXG4gICAgdGhpcy5vZmZzZXQgPSBQb2ludC5lbGVtZW50T2Zmc2V0KHRoaXMuZWxlbWVudCwgdGhpcy5jb250YWluZXIsIHRydWUpXG4gICAgdGhpcy5waW5uZWRQb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0XG4gICAgdGhpcy5pbml0aWFsUG9zaXRpb24gPSB0aGlzLm9wdGlvbnMucG9zaXRpb24gfHwgdGhpcy5vZmZzZXRcblxuICAgIHRoaXMucGluUG9zaXRpb24odGhpcy5pbml0aWFsUG9zaXRpb24pXG5cbiAgICBpZiAodGhpcy5ib3VuZGluZy5yZWZyZXNoKSB7XG4gICAgICB0aGlzLmJvdW5kaW5nLnJlZnJlc2goKVxuICAgIH1cbiAgfVxuXG4gIHN0YXJ0TGlzdGVuaW5nKCkge1xuICAgIHRoaXMuX2RyYWdTdGFydCA9IChldmVudCkgPT4gdGhpcy5kcmFnU3RhcnQoZXZlbnQpXG4gICAgdGhpcy5fZHJhZ01vdmUgPSAoZXZlbnQpID0+IHRoaXMuZHJhZ01vdmUoZXZlbnQpXG4gICAgdGhpcy5fZHJhZ0VuZCA9IChldmVudCkgPT4gdGhpcy5kcmFnRW5kKGV2ZW50KVxuICAgIHRoaXMuX25hdGl2ZURyYWdTdGFydCA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcmFnU3RhcnQoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJhZ092ZXIgPSAoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJhZ092ZXIoZXZlbnQpXG4gICAgdGhpcy5fbmF0aXZlRHJhZ0VuZCA9IChldmVudCkgPT4gdGhpcy5uYXRpdmVEcmFnRW5kKGV2ZW50KVxuICAgIHRoaXMuX25hdGl2ZURyb3AgPSAoZXZlbnQpID0+IHRoaXMubmF0aXZlRHJvcChldmVudClcbiAgICB0aGlzLl9zY3JvbGwgPSAoZXZlbnQpID0+IHRoaXMub25TY3JvbGwoZXZlbnQpXG5cbiAgICB0aGlzLmhhbmRsZXIuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0LCBwYXNzaXZlRmFsc2UpXG4gICAgdGhpcy5oYW5kbGVyLmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuc3RhcnQsIHRoaXMuX2RyYWdTdGFydCwgcGFzc2l2ZUZhbHNlKVxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLl9uYXRpdmVEcmFnU3RhcnQpXG4gIH1cblxuICBnZXRTaXplKCkge1xuICAgIHJldHVybiBQb2ludC5lbGVtZW50U2l6ZSh0aGlzLmVsZW1lbnQsIHRoaXMub3B0aW9ucy5pc0NvbnRlbnRCb3hTaXplKVxuICB9XG5cbiAgZ2V0UG9zaXRpb24oKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMub2Zmc2V0LmFkZCh0aGlzLl90cmFuc2Zvcm1Qb3NpdGlvbiB8fCBuZXcgUG9pbnQoMCwgMCkpXG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgfVxuXG4gIGdldENlbnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5nZXRTaXplKCkubXVsdCgwLjUpKVxuICB9XG5cbiAgX3NldERlZmF1bHRUcmFuc2l0aW9uICgpIHtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGVbdHJhbnNpdGlvblByb3BlcnR5XSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudClbdHJhbnNpdGlvblByb3BlcnR5XVxuICB9XG5cbiAgX3NldFRyYW5zaXRpb24odGltZSkge1xuICAgIGxldCB0cmFuc2l0aW9uID0gdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zaXRpb25Qcm9wZXJ0eV1cbiAgICBjb25zdCB0cmFuc2l0aW9uQ3NzID0gYHRyYW5zZm9ybSAke3RpbWV9bXNgXG5cbiAgICBpZiAoIS90cmFuc2Zvcm0gXFxkKm0/cy8udGVzdCh0cmFuc2l0aW9uKSkge1xuICAgICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgICAgdHJhbnNpdGlvbiArPSBgLCAke3RyYW5zaXRpb25Dc3N9YFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNpdGlvbiA9IHRyYW5zaXRpb25Dc3NcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNpdGlvbiA9IHRyYW5zaXRpb24ucmVwbGFjZSgvdHJhbnNmb3JtIFxcZCptP3MvLCB0cmFuc2l0aW9uQ3NzKVxuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2l0aW9uUHJvcGVydHldID0gdHJhbnNpdGlvblxuICB9XG5cbiAgX3NldFRyYW5zbGF0ZShwb2ludCkge1xuICAgIHRoaXMuX3RyYW5zZm9ybVBvc2l0aW9uID0gcG9pbnRcbiAgICBjb25zdCB0cmFuc2xhdGVDc3MgPSBgdHJhbnNsYXRlM2QoJHtwb2ludC54fXB4LCAke3BvaW50Lnl9cHgsIDBweClgXG5cbiAgICBsZXQgdHJhbnNmb3JtID0gdGhpcy5lbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XVxuXG4gICAgaWYgKHRoaXMuc2hvdWxkUmVtb3ZlWmVyb1RyYW5zbGF0ZSAmJiBwb2ludC54ID09PSAwICYmIHBvaW50LnkgPT09IDApIHtcbiAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGUzZFxcKFteKV0rXFwpLywgJycpXG4gICAgfSBlbHNlIGlmICghL3RyYW5zbGF0ZTNkXFwoW14pXStcXCkvLnRlc3QodHJhbnNmb3JtKSkge1xuICAgICAgaWYgKHRyYW5zZm9ybSkge1xuICAgICAgICB0cmFuc2Zvcm0gKz0gJyAnXG4gICAgICB9XG4gICAgICB0cmFuc2Zvcm0gKz0gdHJhbnNsYXRlQ3NzXG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5yZXBsYWNlKC90cmFuc2xhdGUzZFxcKFteKV0rXFwpLywgdHJhbnNsYXRlQ3NzKVxuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5zdHlsZVt0cmFuc2Zvcm1Qcm9wZXJ0eV0gPSB0cmFuc2Zvcm1cbiAgfVxuXG4gIG1vdmUocG9pbnQsIHRpbWU9MCwgaXNTaWxlbnQ9ZmFsc2UpIHtcbiAgICBwb2ludCA9IHBvaW50LmNsb25lKClcblxuICAgIHRoaXMuZGV0ZXJtaW5lRGlyZWN0aW9uKHBvaW50KVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuXG4gICAgdGhpcy5fc2V0VHJhbnNpdGlvbih0aW1lKVxuICAgIHRoaXMuX3NldFRyYW5zbGF0ZShwb2ludC5zdWIodGhpcy5vZmZzZXQpKVxuXG4gICAgaWYgKCFpc1NpbGVudCkge1xuICAgICAgdGhpcy5lbWl0KCdkcmFnOm1vdmUnKVxuICAgIH1cbiAgfVxuXG4gIHBpblBvc2l0aW9uKHBvaW50LCB0aW1lPTAsIHNpbGVudD10cnVlKSB7XG4gICAgdGhpcy5waW5uZWRQb3NpdGlvbiA9IHBvaW50LmNsb25lKClcbiAgICB0aGlzLm1vdmUodGhpcy5waW5uZWRQb3NpdGlvbiwgdGltZSwgc2lsZW50KVxuICB9XG5cbiAgcmVzZXRQb3NpdGlvblRvSW5pdGlhbCAoKSB7XG4gICAgdGhpcy5waW5Qb3NpdGlvbih0aGlzLmluaXRpYWxQb3NpdGlvbilcbiAgfVxuXG4gIHJlZnJlc2hQb3NpdGlvbiAoKSB7XG4gICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmdldFBvc2l0aW9uKCkpXG4gIH1cblxuICBzZXRQb3NpdGlvbihwb2ludCkge1xuICAgIHBvaW50ID0gcG9pbnQuY2xvbmUoKVxuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludFxuICAgIHRoaXMuX3NldFRyYW5zaXRpb24oMClcbiAgICB0aGlzLl9zZXRUcmFuc2xhdGUocG9pbnQuc3ViKHRoaXMub2Zmc2V0KSlcbiAgfVxuXG4gIGRldGVybWluZURpcmVjdGlvbihwb2ludCkge1xuICAgIHRoaXMubGVmdERpcmVjdGlvbiA9ICh0aGlzLnBvc2l0aW9uLnggPCBwb2ludC54KVxuICAgIHRoaXMucmlnaHREaXJlY3Rpb24gPSAodGhpcy5wb3NpdGlvbi54ID4gcG9pbnQueClcbiAgICB0aGlzLnVwRGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueSA+IHBvaW50LnkpXG4gICAgdGhpcy5kb3duRGlyZWN0aW9uID0gKHRoaXMucG9zaXRpb24ueSA8IHBvaW50LnkpXG4gIH1cblxuICBkcmFnU3RhcnQoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnJlbnRFdmVudCA9IGV2ZW50XG4gICAgaWYgKCF0aGlzLl9lbmFibGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIHRoaXMudG91Y2hQb2ludCA9IHRoaXMuX3N0YXJ0VG91Y2hQb2ludCA9IG5ldyBQb2ludChcbiAgICAgIGlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIDogZXZlbnQuY2xpZW50WCxcbiAgICAgIGlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIDogZXZlbnQuY2xpZW50WVxuICAgIClcblxuICAgIHRoaXMuX3N0YXJ0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKClcbiAgICBpZiAoaXNUb3VjaEV2ZW50KSB7XG4gICAgICB0aGlzLl90b3VjaElkID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uaWRlbnRpZmllclxuICAgIH1cblxuICAgIHRoaXMuX3N0YXJ0U2Nyb2xsUG9pbnQgPSBuZXcgUG9pbnQod2luZG93LnNjcm9sbFgsIHdpbmRvdy5zY3JvbGxZKVxuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBpZiAoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQgfHxcbiAgICAgICAgICBldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgZXZlbnQudGFyZ2V0LmZvY3VzKClcbiAgICB9XG5cbiAgICBpZiAoISh0aGlzLm5hdGl2ZURyYWdBbmREcm9wIHx8XG4gICAgICAgICAgICBldmVudC50YXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElucHV0RWxlbWVudCB8fFxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJbnB1dEVsZW1lbnQpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMubmF0aXZlRHJhZ0FuZERyb3ApIHtcbiAgICAgIGlmICgoaXNUb3VjaEV2ZW50ICYmIHRoaXMuZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCkgfHxcbiAgICAgICAgICAgICB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uQWxsRGV2aWNlcykge1xuICAgICAgICBjb25zdCBlbXVsYXRlT25GaXJzdE1vdmUgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICB0aGlzLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcChldmVudClcbiAgICAgICAgICBjYW5jZWxFbXVsYXRpb24oKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNhbmNlbEVtdWxhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIGVtdWxhdGVPbkZpcnN0TW92ZSlcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgY2FuY2VsRW11bGF0aW9uKVxuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgZW11bGF0ZU9uRmlyc3RNb3ZlLCBwYXNzaXZlRmFsc2UpXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMuZW5kLCBjYW5jZWxFbXVsYXRpb24sIHBhc3NpdmVGYWxzZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5kcmFnZ2FibGUgPSB0cnVlXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9uYXRpdmVEcmFnRW5kLCBwYXNzaXZlRmFsc2UpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodG91Y2hFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUsIHBhc3NpdmVGYWxzZSlcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUsIHBhc3NpdmVGYWxzZSlcblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQsIHBhc3NpdmVGYWxzZSlcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMuZW5kLCB0aGlzLl9kcmFnRW5kLCBwYXNzaXZlRmFsc2UpXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbClcblxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWVcbiAgICB0aGlzLmVtaXQoJ2RyYWc6c3RhcnQnKVxuICB9XG5cbiAgZHJhZ01vdmUoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnJlbnRFdmVudCA9IGV2ZW50XG4gICAgbGV0IHRvdWNoXG5cbiAgICBjb25zdCBpc1RvdWNoRXZlbnQgPSAoaXNUb3VjaCAmJiAoZXZlbnQgaW5zdGFuY2VvZiB3aW5kb3cuVG91Y2hFdmVudCkpXG4gICAgaWYgKGlzVG91Y2hFdmVudCkge1xuICAgICAgdG91Y2ggPSBnZXRUb3VjaEJ5SUQoZXZlbnQsIHRoaXMuX3RvdWNoSWQpXG5cbiAgICAgIGlmICghdG91Y2gpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdGhpcy50b3VjaFBvaW50ID0gbmV3IFBvaW50KFxuICAgICAgaXNUb3VjaEV2ZW50ID8gdG91Y2gucGFnZVggOiBldmVudC5jbGllbnRYLFxuICAgICAgaXNUb3VjaEV2ZW50ID8gdG91Y2gucGFnZVkgOiBldmVudC5jbGllbnRZXG4gICAgKVxuXG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMuc2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0U2Nyb2xsUG9pbnQpKVxuXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICB0aGlzLm1vdmUocG9pbnQpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgZHJhZ0VuZChldmVudCkge1xuICAgIGNvbnN0IGlzVG91Y2hFdmVudCA9IChpc1RvdWNoICYmIChldmVudCBpbnN0YW5jZW9mIHdpbmRvdy5Ub3VjaEV2ZW50KSlcblxuICAgIGlmIChpc1RvdWNoRXZlbnQgJiYgIWdldFRvdWNoQnlJRChldmVudCwgdGhpcy5fdG91Y2hJZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHRoaXMuZHJhZ0VuZEFjdGlvbigpXG4gICAgdGhpcy5lbWl0KCdkcmFnOmVuZCcpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fZHJhZ0VuZClcblxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9zY3JvbGwpXG5cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RyYWdnYWJsZScpXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLWFjdGl2ZScpKVxuICB9XG5cbiAgb25TY3JvbGwoX2V2ZW50KSB7XG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMuc2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0U2Nyb2xsUG9pbnQpKVxuXG4gICAgcG9pbnQgPSB0aGlzLmJvdW5kaW5nLmJvdW5kKHBvaW50LCB0aGlzLmdldFNpemUoKSlcbiAgICBpZiAoIXRoaXMubmF0aXZlRHJhZ0FuZERyb3ApIHtcbiAgICAgIHRoaXMubW92ZShwb2ludClcbiAgICB9XG4gIH1cblxuICBuYXRpdmVEcmFnU3RhcnQoZXZlbnQpIHtcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dCcsICdGaXJlRm94IGZpeCcpXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSdcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuX25hdGl2ZURyYWdPdmVyKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCB0aGlzLl9uYXRpdmVEcmFnRW5kKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLl9uYXRpdmVEcm9wKVxuICB9XG5cbiAgbmF0aXZlRHJhZ092ZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSdcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICB0aGlzLmN1cnJlbnRFdmVudCA9IGV2ZW50XG4gICAgaWYgKGV2ZW50LmNsaWVudFggPT09IDAgJiYgZXZlbnQuY2xpZW50WSA9PT0gMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy50b3VjaFBvaW50ID0gbmV3IFBvaW50KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpXG4gICAgbGV0IHBvaW50ID0gdGhpcy5fc3RhcnRQb3NpdGlvbi5hZGQodGhpcy50b3VjaFBvaW50LnN1Yih0aGlzLl9zdGFydFRvdWNoUG9pbnQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkKHRoaXMuc2Nyb2xsUG9pbnQuc3ViKHRoaXMuX3N0YXJ0U2Nyb2xsUG9pbnQpKVxuICAgIHBvaW50ID0gdGhpcy5ib3VuZGluZy5ib3VuZChwb2ludCwgdGhpcy5nZXRTaXplKCkpXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvaW50XG4gICAgdGhpcy5lbWl0KCdkcmFnOm1vdmUnKVxuICB9XG5cbiAgbmF0aXZlRHJhZ0VuZChfZXZlbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICB0aGlzLmRyYWdFbmRBY3Rpb24oKVxuICAgIHRoaXMuZW1pdCgnZHJhZzplbmQnKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5fbmF0aXZlRHJhZ092ZXIpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX25hdGl2ZURyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuX25hdGl2ZURyb3ApXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX3Njcm9sbClcbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RyYWdnYWJsZScpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdlZS1hY3RpdmUnKVxuICB9XG5cbiAgbmF0aXZlRHJvcChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wKGV2ZW50KSB7XG4gICAgY29uc3QgY29udGFpbmVyUmVjdCA9IHRoaXMuY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgY2xvbmVkRWxlbWVudCA9IHRoaXMuZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSlcbiAgICBjbG9uZWRFbGVtZW50LnN0eWxlW3RyYW5zZm9ybVByb3BlcnR5XSA9ICcnXG4gICAgY29weVN0eWxlcyh0aGlzLmVsZW1lbnQsIGNsb25lZEVsZW1lbnQpXG4gICAgY2xvbmVkRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNsb25lZEVsZW1lbnQpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1wbGFjZWhvbGRlcicpXG5cbiAgICBjb25zdCBlbXVsYXRpb25EcmFnZ2FibGUgPSBuZXcgRHJhZ2dhYmxlKGNsb25lZEVsZW1lbnQsIHtcbiAgICAgIGNvbnRhaW5lcjogZG9jdW1lbnQuYm9keSxcbiAgICAgIGJvdW5kKHBvaW50KSB7XG4gICAgICAgIHJldHVybiBwb2ludFxuICAgICAgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgICdkcmFnOm1vdmUnOiAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgY29udGFpbmVyUmVjdFBvaW50ID0gbmV3IFBvaW50KGNvbnRhaW5lclJlY3QubGVmdCwgY29udGFpbmVyUmVjdC50b3ApXG4gICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IGVtdWxhdGlvbkRyYWdnYWJsZS5wb3NpdGlvbi5zdWIoY29udGFpbmVyUmVjdFBvaW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3ViKHRoaXMuX3N0YXJ0U2Nyb2xsUG9pbnQpXG4gICAgICAgICAgdGhpcy5lbWl0KCdkcmFnOm1vdmUnKVxuICAgICAgICB9LFxuICAgICAgICAnZHJhZzplbmQnOiAoKSA9PiB7XG4gICAgICAgICAgZW11bGF0aW9uRHJhZ2dhYmxlLmRlc3Ryb3koKVxuICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY2xvbmVkRWxlbWVudClcbiAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLXBsYWNlaG9sZGVyJylcbiAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2VlLWFjdGl2ZScpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgY29udGFpbmVyUmVjdFBvaW50ID0gbmV3IFBvaW50KGNvbnRhaW5lclJlY3QubGVmdCwgY29udGFpbmVyUmVjdC50b3ApXG4gICAgZW11bGF0aW9uRHJhZ2dhYmxlLl9zdGFydFNjcm9sbFBvaW50ID0gdGhpcy5fc3RhcnRTY3JvbGxQb2ludFxuXG4gICAgZW11bGF0aW9uRHJhZ2dhYmxlLm1vdmUoXG4gICAgICB0aGlzLnBpbm5lZFBvc2l0aW9uLmFkZChjb250YWluZXJSZWN0UG9pbnQpLmFkZChuZXcgUG9pbnQod2luZG93LnNjcm9sbFgsIHdpbmRvdy5zY3JvbGxZKSlcbiAgICApXG5cbiAgICBlbXVsYXRpb25EcmFnZ2FibGUuZHJhZ1N0YXJ0KGV2ZW50KVxuICB9XG5cbiAgZHJhZ0VuZEFjdGlvbigpIHtcbiAgICB0aGlzLnBpblBvc2l0aW9uKHRoaXMucG9zaXRpb24pXG4gIH1cblxuICBnZXRSZWN0YW5nbGUoKSB7XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy5wb3NpdGlvbiwgdGhpcy5nZXRTaXplKCkpXG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIGlmICh0aGlzLmJvdW5kaW5nLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuYm91bmRpbmcucmVmcmVzaCgpXG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmhhbmRsZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5zdGFydCwgdGhpcy5fZHJhZ1N0YXJ0KVxuICAgIHRoaXMuaGFuZGxlci5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLnN0YXJ0LCB0aGlzLl9kcmFnU3RhcnQpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuX25hdGl2ZURyYWdTdGFydClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoRXZlbnRzLm1vdmUsIHRoaXMuX2RyYWdNb3ZlKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VFdmVudHMubW92ZSwgdGhpcy5fZHJhZ01vdmUpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0b3VjaEV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihtb3VzZUV2ZW50cy5lbmQsIHRoaXMuX2RyYWdFbmQpXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLl9uYXRpdmVEcmFnT3ZlcilcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlRXZlbnRzLmVuZCwgdGhpcy5fbmF0aXZlRHJhZ0VuZClcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5fbmF0aXZlRHJvcClcbiAgICB0aGlzLnJlc2V0RW1pdHRlcigpXG5cbiAgICBjb25zdCBpbmRleCA9IGRyYWdnYWJsZXMuaW5kZXhPZih0aGlzKVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBkcmFnZ2FibGVzLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cblxuICBnZXQgY29udGFpbmVyKCkge1xuICAgIHJldHVybiAodGhpcy5fY29udGFpbmVyID0gdGhpcy5fY29udGFpbmVyIHx8IHRoaXMub3B0aW9ucy5jb250YWluZXIgfHwgdGhpcy5vcHRpb25zLnBhcmVudCB8fCBnZXREZWZhdWx0Q29udGFpbmVyKHRoaXMuZWxlbWVudCkpXG4gIH1cblxuICBnZXQgaGFuZGxlcigpIHtcbiAgICBpZiAoIXRoaXMuX2hhbmRsZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmhhbmRsZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXIgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMuaGFuZGxlcikgfHwgdGhpcy5lbGVtZW50XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9oYW5kbGVyID0gdGhpcy5vcHRpb25zLmhhbmRsZXIgfHwgdGhpcy5lbGVtZW50XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2hhbmRsZXJcbiAgfVxuXG4gIGdldCBuYXRpdmVEcmFnQW5kRHJvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLm5hdGl2ZURyYWdBbmREcm9wIHx8IGZhbHNlXG4gIH1cblxuICBnZXQgZW11bGF0ZU5hdGl2ZURyYWdBbmREcm9wT25Ub3VjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2ggfHwgdHJ1ZVxuICB9XG5cbiAgZ2V0IGVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uQWxsRGV2aWNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uQWxsRGV2aWNlcyB8fCBmYWxzZVxuICB9XG5cbiAgZ2V0IHNob3VsZFJlbW92ZVplcm9UcmFuc2xhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zaG91bGRSZW1vdmVaZXJvVHJhbnNsYXRlIHx8IGZhbHNlXG4gIH1cblxuICBnZXQgc2Nyb2xsUG9pbnQoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh3aW5kb3cuc2Nyb2xsWCwgd2luZG93LnNjcm9sbFkpXG4gIH1cblxuICBnZXQgZW5hYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVcbiAgfVxuXG4gIHNldCBlbmFibGUoZW5hYmxlKSB7XG4gICAgaWYgKGVuYWJsZSkge1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdlZS1kaXNhYmxlJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdlZS1kaXNhYmxlJylcbiAgICB9XG5cbiAgICB0aGlzLl9lbmFibGUgPSBlbmFibGVcbiAgfVxufVxuXG5EcmFnZ2FibGUuZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuRHJhZ2dhYmxlLmVtaXR0ZXIub24oJ2RyYWdnYWJsZTpjcmVhdGUnLCBhZGRUb0RlZmF1bHRTY29wZSlcbiIsInZhciByZXNpemVPYnNlcnZlcnMgPSBbXTtcbmV4cG9ydCB7IHJlc2l6ZU9ic2VydmVycyB9O1xuIiwiaW1wb3J0IHsgcmVzaXplT2JzZXJ2ZXJzIH0gZnJvbSAnLi4vdXRpbHMvcmVzaXplT2JzZXJ2ZXJzJztcbnZhciBoYXNBY3RpdmVPYnNlcnZhdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHJlc2l6ZU9ic2VydmVycy5zb21lKGZ1bmN0aW9uIChybykgeyByZXR1cm4gcm8uYWN0aXZlVGFyZ2V0cy5sZW5ndGggPiAwOyB9KTtcbn07XG5leHBvcnQgeyBoYXNBY3RpdmVPYnNlcnZhdGlvbnMgfTtcbiIsImltcG9ydCB7IHJlc2l6ZU9ic2VydmVycyB9IGZyb20gJy4uL3V0aWxzL3Jlc2l6ZU9ic2VydmVycyc7XG52YXIgaGFzU2tpcHBlZE9ic2VydmF0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcmVzaXplT2JzZXJ2ZXJzLnNvbWUoZnVuY3Rpb24gKHJvKSB7IHJldHVybiByby5za2lwcGVkVGFyZ2V0cy5sZW5ndGggPiAwOyB9KTtcbn07XG5leHBvcnQgeyBoYXNTa2lwcGVkT2JzZXJ2YXRpb25zIH07XG4iLCJ2YXIgbXNnID0gJ1Jlc2l6ZU9ic2VydmVyIGxvb3AgY29tcGxldGVkIHdpdGggdW5kZWxpdmVyZWQgbm90aWZpY2F0aW9ucy4nO1xudmFyIGRlbGl2ZXJSZXNpemVMb29wRXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV2ZW50O1xuICAgIGlmICh0eXBlb2YgRXJyb3JFdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBldmVudCA9IG5ldyBFcnJvckV2ZW50KCdlcnJvcicsIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1zZ1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gICAgICAgIGV2ZW50LmluaXRFdmVudCgnZXJyb3InLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICBldmVudC5tZXNzYWdlID0gbXNnO1xuICAgIH1cbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChldmVudCk7XG59O1xuZXhwb3J0IHsgZGVsaXZlclJlc2l6ZUxvb3BFcnJvciB9O1xuIiwidmFyIFJlc2l6ZU9ic2VydmVyQm94T3B0aW9ucztcbihmdW5jdGlvbiAoUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zKSB7XG4gICAgUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zW1wiQk9SREVSX0JPWFwiXSA9IFwiYm9yZGVyLWJveFwiO1xuICAgIFJlc2l6ZU9ic2VydmVyQm94T3B0aW9uc1tcIkNPTlRFTlRfQk9YXCJdID0gXCJjb250ZW50LWJveFwiO1xuICAgIFJlc2l6ZU9ic2VydmVyQm94T3B0aW9uc1tcIkRFVklDRV9QSVhFTF9DT05URU5UX0JPWFwiXSA9IFwiZGV2aWNlLXBpeGVsLWNvbnRlbnQtYm94XCI7XG59KShSZXNpemVPYnNlcnZlckJveE9wdGlvbnMgfHwgKFJlc2l6ZU9ic2VydmVyQm94T3B0aW9ucyA9IHt9KSk7XG5leHBvcnQgeyBSZXNpemVPYnNlcnZlckJveE9wdGlvbnMgfTtcbiIsImV4cG9ydCB2YXIgZnJlZXplID0gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gT2JqZWN0LmZyZWV6ZShvYmopOyB9O1xuIiwiaW1wb3J0IHsgZnJlZXplIH0gZnJvbSAnLi91dGlscy9mcmVlemUnO1xudmFyIFJlc2l6ZU9ic2VydmVyU2l6ZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXJTaXplKGlubGluZVNpemUsIGJsb2NrU2l6ZSkge1xuICAgICAgICB0aGlzLmlubGluZVNpemUgPSBpbmxpbmVTaXplO1xuICAgICAgICB0aGlzLmJsb2NrU2l6ZSA9IGJsb2NrU2l6ZTtcbiAgICAgICAgZnJlZXplKHRoaXMpO1xuICAgIH1cbiAgICByZXR1cm4gUmVzaXplT2JzZXJ2ZXJTaXplO1xufSgpKTtcbmV4cG9ydCB7IFJlc2l6ZU9ic2VydmVyU2l6ZSB9O1xuIiwiaW1wb3J0IHsgZnJlZXplIH0gZnJvbSAnLi91dGlscy9mcmVlemUnO1xudmFyIERPTVJlY3RSZWFkT25seSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRE9NUmVjdFJlYWRPbmx5KHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy50b3AgPSB0aGlzLnk7XG4gICAgICAgIHRoaXMubGVmdCA9IHRoaXMueDtcbiAgICAgICAgdGhpcy5ib3R0b20gPSB0aGlzLnRvcCArIHRoaXMuaGVpZ2h0O1xuICAgICAgICB0aGlzLnJpZ2h0ID0gdGhpcy5sZWZ0ICsgdGhpcy53aWR0aDtcbiAgICAgICAgcmV0dXJuIGZyZWV6ZSh0aGlzKTtcbiAgICB9XG4gICAgRE9NUmVjdFJlYWRPbmx5LnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMsIHggPSBfYS54LCB5ID0gX2EueSwgdG9wID0gX2EudG9wLCByaWdodCA9IF9hLnJpZ2h0LCBib3R0b20gPSBfYS5ib3R0b20sIGxlZnQgPSBfYS5sZWZ0LCB3aWR0aCA9IF9hLndpZHRoLCBoZWlnaHQgPSBfYS5oZWlnaHQ7XG4gICAgICAgIHJldHVybiB7IHg6IHgsIHk6IHksIHRvcDogdG9wLCByaWdodDogcmlnaHQsIGJvdHRvbTogYm90dG9tLCBsZWZ0OiBsZWZ0LCB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH07XG4gICAgfTtcbiAgICBET01SZWN0UmVhZE9ubHkuZnJvbVJlY3QgPSBmdW5jdGlvbiAocmVjdGFuZ2xlKSB7XG4gICAgICAgIHJldHVybiBuZXcgRE9NUmVjdFJlYWRPbmx5KHJlY3RhbmdsZS54LCByZWN0YW5nbGUueSwgcmVjdGFuZ2xlLndpZHRoLCByZWN0YW5nbGUuaGVpZ2h0KTtcbiAgICB9O1xuICAgIHJldHVybiBET01SZWN0UmVhZE9ubHk7XG59KCkpO1xuZXhwb3J0IHsgRE9NUmVjdFJlYWRPbmx5IH07XG4iLCJ2YXIgaXNTVkcgPSBmdW5jdGlvbiAodGFyZ2V0KSB7IHJldHVybiB0YXJnZXQgaW5zdGFuY2VvZiBTVkdFbGVtZW50ICYmICdnZXRCQm94JyBpbiB0YXJnZXQ7IH07XG52YXIgaXNIaWRkZW4gPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgaWYgKGlzU1ZHKHRhcmdldCkpIHtcbiAgICAgICAgdmFyIF9hID0gdGFyZ2V0LmdldEJCb3goKSwgd2lkdGggPSBfYS53aWR0aCwgaGVpZ2h0ID0gX2EuaGVpZ2h0O1xuICAgICAgICByZXR1cm4gIXdpZHRoICYmICFoZWlnaHQ7XG4gICAgfVxuICAgIHZhciBfYiA9IHRhcmdldCwgb2Zmc2V0V2lkdGggPSBfYi5vZmZzZXRXaWR0aCwgb2Zmc2V0SGVpZ2h0ID0gX2Iub2Zmc2V0SGVpZ2h0O1xuICAgIHJldHVybiAhKG9mZnNldFdpZHRoIHx8IG9mZnNldEhlaWdodCB8fCB0YXJnZXQuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpO1xufTtcbnZhciBpc0VsZW1lbnQgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICBpZiAob2JqIGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdmFyIHNjb3BlID0gKF9iID0gKF9hID0gb2JqKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eub3duZXJEb2N1bWVudCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmRlZmF1bHRWaWV3O1xuICAgIHJldHVybiAhIShzY29wZSAmJiBvYmogaW5zdGFuY2VvZiBzY29wZS5FbGVtZW50KTtcbn07XG52YXIgaXNSZXBsYWNlZEVsZW1lbnQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgc3dpdGNoICh0YXJnZXQudGFnTmFtZSkge1xuICAgICAgICBjYXNlICdJTlBVVCc6XG4gICAgICAgICAgICBpZiAodGFyZ2V0LnR5cGUgIT09ICdpbWFnZScpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSAnVklERU8nOlxuICAgICAgICBjYXNlICdBVURJTyc6XG4gICAgICAgIGNhc2UgJ0VNQkVEJzpcbiAgICAgICAgY2FzZSAnT0JKRUNUJzpcbiAgICAgICAgY2FzZSAnQ0FOVkFTJzpcbiAgICAgICAgY2FzZSAnSUZSQU1FJzpcbiAgICAgICAgY2FzZSAnSU1HJzpcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuZXhwb3J0IHsgaXNTVkcsIGlzSGlkZGVuLCBpc0VsZW1lbnQsIGlzUmVwbGFjZWRFbGVtZW50IH07XG4iLCJleHBvcnQgdmFyIGdsb2JhbCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDoge307XG4iLCJpbXBvcnQgeyBSZXNpemVPYnNlcnZlckJveE9wdGlvbnMgfSBmcm9tICcuLi9SZXNpemVPYnNlcnZlckJveE9wdGlvbnMnO1xuaW1wb3J0IHsgUmVzaXplT2JzZXJ2ZXJTaXplIH0gZnJvbSAnLi4vUmVzaXplT2JzZXJ2ZXJTaXplJztcbmltcG9ydCB7IERPTVJlY3RSZWFkT25seSB9IGZyb20gJy4uL0RPTVJlY3RSZWFkT25seSc7XG5pbXBvcnQgeyBpc1NWRywgaXNIaWRkZW4gfSBmcm9tICcuLi91dGlscy9lbGVtZW50JztcbmltcG9ydCB7IGZyZWV6ZSB9IGZyb20gJy4uL3V0aWxzL2ZyZWV6ZSc7XG5pbXBvcnQgeyBnbG9iYWwgfSBmcm9tICcuLi91dGlscy9nbG9iYWwnO1xudmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcbnZhciBzY3JvbGxSZWdleHAgPSAvYXV0b3xzY3JvbGwvO1xudmFyIHZlcnRpY2FsUmVnZXhwID0gL150Ynx2ZXJ0aWNhbC87XG52YXIgSUUgPSAoL21zaWV8dHJpZGVudC9pKS50ZXN0KGdsb2JhbC5uYXZpZ2F0b3IgJiYgZ2xvYmFsLm5hdmlnYXRvci51c2VyQWdlbnQpO1xudmFyIHBhcnNlRGltZW5zaW9uID0gZnVuY3Rpb24gKHBpeGVsKSB7IHJldHVybiBwYXJzZUZsb2F0KHBpeGVsIHx8ICcwJyk7IH07XG52YXIgc2l6ZSA9IGZ1bmN0aW9uIChpbmxpbmVTaXplLCBibG9ja1NpemUsIHN3aXRjaFNpemVzKSB7XG4gICAgaWYgKGlubGluZVNpemUgPT09IHZvaWQgMCkgeyBpbmxpbmVTaXplID0gMDsgfVxuICAgIGlmIChibG9ja1NpemUgPT09IHZvaWQgMCkgeyBibG9ja1NpemUgPSAwOyB9XG4gICAgaWYgKHN3aXRjaFNpemVzID09PSB2b2lkIDApIHsgc3dpdGNoU2l6ZXMgPSBmYWxzZTsgfVxuICAgIHJldHVybiBuZXcgUmVzaXplT2JzZXJ2ZXJTaXplKChzd2l0Y2hTaXplcyA/IGJsb2NrU2l6ZSA6IGlubGluZVNpemUpIHx8IDAsIChzd2l0Y2hTaXplcyA/IGlubGluZVNpemUgOiBibG9ja1NpemUpIHx8IDApO1xufTtcbnZhciB6ZXJvQm94ZXMgPSBmcmVlemUoe1xuICAgIGRldmljZVBpeGVsQ29udGVudEJveFNpemU6IHNpemUoKSxcbiAgICBib3JkZXJCb3hTaXplOiBzaXplKCksXG4gICAgY29udGVudEJveFNpemU6IHNpemUoKSxcbiAgICBjb250ZW50UmVjdDogbmV3IERPTVJlY3RSZWFkT25seSgwLCAwLCAwLCAwKVxufSk7XG52YXIgY2FsY3VsYXRlQm94U2l6ZXMgPSBmdW5jdGlvbiAodGFyZ2V0LCBmb3JjZVJlY2FsY3VsYXRpb24pIHtcbiAgICBpZiAoZm9yY2VSZWNhbGN1bGF0aW9uID09PSB2b2lkIDApIHsgZm9yY2VSZWNhbGN1bGF0aW9uID0gZmFsc2U7IH1cbiAgICBpZiAoY2FjaGUuaGFzKHRhcmdldCkgJiYgIWZvcmNlUmVjYWxjdWxhdGlvbikge1xuICAgICAgICByZXR1cm4gY2FjaGUuZ2V0KHRhcmdldCk7XG4gICAgfVxuICAgIGlmIChpc0hpZGRlbih0YXJnZXQpKSB7XG4gICAgICAgIGNhY2hlLnNldCh0YXJnZXQsIHplcm9Cb3hlcyk7XG4gICAgICAgIHJldHVybiB6ZXJvQm94ZXM7XG4gICAgfVxuICAgIHZhciBjcyA9IGdldENvbXB1dGVkU3R5bGUodGFyZ2V0KTtcbiAgICB2YXIgc3ZnID0gaXNTVkcodGFyZ2V0KSAmJiB0YXJnZXQub3duZXJTVkdFbGVtZW50ICYmIHRhcmdldC5nZXRCQm94KCk7XG4gICAgdmFyIHJlbW92ZVBhZGRpbmcgPSAhSUUgJiYgY3MuYm94U2l6aW5nID09PSAnYm9yZGVyLWJveCc7XG4gICAgdmFyIHN3aXRjaFNpemVzID0gdmVydGljYWxSZWdleHAudGVzdChjcy53cml0aW5nTW9kZSB8fCAnJyk7XG4gICAgdmFyIGNhblNjcm9sbFZlcnRpY2FsbHkgPSAhc3ZnICYmIHNjcm9sbFJlZ2V4cC50ZXN0KGNzLm92ZXJmbG93WSB8fCAnJyk7XG4gICAgdmFyIGNhblNjcm9sbEhvcml6b250YWxseSA9ICFzdmcgJiYgc2Nyb2xsUmVnZXhwLnRlc3QoY3Mub3ZlcmZsb3dYIHx8ICcnKTtcbiAgICB2YXIgcGFkZGluZ1RvcCA9IHN2ZyA/IDAgOiBwYXJzZURpbWVuc2lvbihjcy5wYWRkaW5nVG9wKTtcbiAgICB2YXIgcGFkZGluZ1JpZ2h0ID0gc3ZnID8gMCA6IHBhcnNlRGltZW5zaW9uKGNzLnBhZGRpbmdSaWdodCk7XG4gICAgdmFyIHBhZGRpbmdCb3R0b20gPSBzdmcgPyAwIDogcGFyc2VEaW1lbnNpb24oY3MucGFkZGluZ0JvdHRvbSk7XG4gICAgdmFyIHBhZGRpbmdMZWZ0ID0gc3ZnID8gMCA6IHBhcnNlRGltZW5zaW9uKGNzLnBhZGRpbmdMZWZ0KTtcbiAgICB2YXIgYm9yZGVyVG9wID0gc3ZnID8gMCA6IHBhcnNlRGltZW5zaW9uKGNzLmJvcmRlclRvcFdpZHRoKTtcbiAgICB2YXIgYm9yZGVyUmlnaHQgPSBzdmcgPyAwIDogcGFyc2VEaW1lbnNpb24oY3MuYm9yZGVyUmlnaHRXaWR0aCk7XG4gICAgdmFyIGJvcmRlckJvdHRvbSA9IHN2ZyA/IDAgOiBwYXJzZURpbWVuc2lvbihjcy5ib3JkZXJCb3R0b21XaWR0aCk7XG4gICAgdmFyIGJvcmRlckxlZnQgPSBzdmcgPyAwIDogcGFyc2VEaW1lbnNpb24oY3MuYm9yZGVyTGVmdFdpZHRoKTtcbiAgICB2YXIgaG9yaXpvbnRhbFBhZGRpbmcgPSBwYWRkaW5nTGVmdCArIHBhZGRpbmdSaWdodDtcbiAgICB2YXIgdmVydGljYWxQYWRkaW5nID0gcGFkZGluZ1RvcCArIHBhZGRpbmdCb3R0b207XG4gICAgdmFyIGhvcml6b250YWxCb3JkZXJBcmVhID0gYm9yZGVyTGVmdCArIGJvcmRlclJpZ2h0O1xuICAgIHZhciB2ZXJ0aWNhbEJvcmRlckFyZWEgPSBib3JkZXJUb3AgKyBib3JkZXJCb3R0b207XG4gICAgdmFyIGhvcml6b250YWxTY3JvbGxiYXJUaGlja25lc3MgPSAhY2FuU2Nyb2xsSG9yaXpvbnRhbGx5ID8gMCA6IHRhcmdldC5vZmZzZXRIZWlnaHQgLSB2ZXJ0aWNhbEJvcmRlckFyZWEgLSB0YXJnZXQuY2xpZW50SGVpZ2h0O1xuICAgIHZhciB2ZXJ0aWNhbFNjcm9sbGJhclRoaWNrbmVzcyA9ICFjYW5TY3JvbGxWZXJ0aWNhbGx5ID8gMCA6IHRhcmdldC5vZmZzZXRXaWR0aCAtIGhvcml6b250YWxCb3JkZXJBcmVhIC0gdGFyZ2V0LmNsaWVudFdpZHRoO1xuICAgIHZhciB3aWR0aFJlZHVjdGlvbiA9IHJlbW92ZVBhZGRpbmcgPyBob3Jpem9udGFsUGFkZGluZyArIGhvcml6b250YWxCb3JkZXJBcmVhIDogMDtcbiAgICB2YXIgaGVpZ2h0UmVkdWN0aW9uID0gcmVtb3ZlUGFkZGluZyA/IHZlcnRpY2FsUGFkZGluZyArIHZlcnRpY2FsQm9yZGVyQXJlYSA6IDA7XG4gICAgdmFyIGNvbnRlbnRXaWR0aCA9IHN2ZyA/IHN2Zy53aWR0aCA6IHBhcnNlRGltZW5zaW9uKGNzLndpZHRoKSAtIHdpZHRoUmVkdWN0aW9uIC0gdmVydGljYWxTY3JvbGxiYXJUaGlja25lc3M7XG4gICAgdmFyIGNvbnRlbnRIZWlnaHQgPSBzdmcgPyBzdmcuaGVpZ2h0IDogcGFyc2VEaW1lbnNpb24oY3MuaGVpZ2h0KSAtIGhlaWdodFJlZHVjdGlvbiAtIGhvcml6b250YWxTY3JvbGxiYXJUaGlja25lc3M7XG4gICAgdmFyIGJvcmRlckJveFdpZHRoID0gY29udGVudFdpZHRoICsgaG9yaXpvbnRhbFBhZGRpbmcgKyB2ZXJ0aWNhbFNjcm9sbGJhclRoaWNrbmVzcyArIGhvcml6b250YWxCb3JkZXJBcmVhO1xuICAgIHZhciBib3JkZXJCb3hIZWlnaHQgPSBjb250ZW50SGVpZ2h0ICsgdmVydGljYWxQYWRkaW5nICsgaG9yaXpvbnRhbFNjcm9sbGJhclRoaWNrbmVzcyArIHZlcnRpY2FsQm9yZGVyQXJlYTtcbiAgICB2YXIgYm94ZXMgPSBmcmVlemUoe1xuICAgICAgICBkZXZpY2VQaXhlbENvbnRlbnRCb3hTaXplOiBzaXplKE1hdGgucm91bmQoY29udGVudFdpZHRoICogZGV2aWNlUGl4ZWxSYXRpbyksIE1hdGgucm91bmQoY29udGVudEhlaWdodCAqIGRldmljZVBpeGVsUmF0aW8pLCBzd2l0Y2hTaXplcyksXG4gICAgICAgIGJvcmRlckJveFNpemU6IHNpemUoYm9yZGVyQm94V2lkdGgsIGJvcmRlckJveEhlaWdodCwgc3dpdGNoU2l6ZXMpLFxuICAgICAgICBjb250ZW50Qm94U2l6ZTogc2l6ZShjb250ZW50V2lkdGgsIGNvbnRlbnRIZWlnaHQsIHN3aXRjaFNpemVzKSxcbiAgICAgICAgY29udGVudFJlY3Q6IG5ldyBET01SZWN0UmVhZE9ubHkocGFkZGluZ0xlZnQsIHBhZGRpbmdUb3AsIGNvbnRlbnRXaWR0aCwgY29udGVudEhlaWdodClcbiAgICB9KTtcbiAgICBjYWNoZS5zZXQodGFyZ2V0LCBib3hlcyk7XG4gICAgcmV0dXJuIGJveGVzO1xufTtcbnZhciBjYWxjdWxhdGVCb3hTaXplID0gZnVuY3Rpb24gKHRhcmdldCwgb2JzZXJ2ZWRCb3gsIGZvcmNlUmVjYWxjdWxhdGlvbikge1xuICAgIHZhciBfYSA9IGNhbGN1bGF0ZUJveFNpemVzKHRhcmdldCwgZm9yY2VSZWNhbGN1bGF0aW9uKSwgYm9yZGVyQm94U2l6ZSA9IF9hLmJvcmRlckJveFNpemUsIGNvbnRlbnRCb3hTaXplID0gX2EuY29udGVudEJveFNpemUsIGRldmljZVBpeGVsQ29udGVudEJveFNpemUgPSBfYS5kZXZpY2VQaXhlbENvbnRlbnRCb3hTaXplO1xuICAgIHN3aXRjaCAob2JzZXJ2ZWRCb3gpIHtcbiAgICAgICAgY2FzZSBSZXNpemVPYnNlcnZlckJveE9wdGlvbnMuREVWSUNFX1BJWEVMX0NPTlRFTlRfQk9YOlxuICAgICAgICAgICAgcmV0dXJuIGRldmljZVBpeGVsQ29udGVudEJveFNpemU7XG4gICAgICAgIGNhc2UgUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zLkJPUkRFUl9CT1g6XG4gICAgICAgICAgICByZXR1cm4gYm9yZGVyQm94U2l6ZTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBjb250ZW50Qm94U2l6ZTtcbiAgICB9XG59O1xuZXhwb3J0IHsgY2FsY3VsYXRlQm94U2l6ZSwgY2FsY3VsYXRlQm94U2l6ZXMgfTtcbiIsImltcG9ydCB7IGNhbGN1bGF0ZUJveFNpemVzIH0gZnJvbSAnLi9hbGdvcml0aG1zL2NhbGN1bGF0ZUJveFNpemUnO1xuaW1wb3J0IHsgZnJlZXplIH0gZnJvbSAnLi91dGlscy9mcmVlemUnO1xudmFyIFJlc2l6ZU9ic2VydmVyRW50cnkgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyRW50cnkodGFyZ2V0KSB7XG4gICAgICAgIHZhciBib3hlcyA9IGNhbGN1bGF0ZUJveFNpemVzKHRhcmdldCk7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLmNvbnRlbnRSZWN0ID0gYm94ZXMuY29udGVudFJlY3Q7XG4gICAgICAgIHRoaXMuYm9yZGVyQm94U2l6ZSA9IGZyZWV6ZShbYm94ZXMuYm9yZGVyQm94U2l6ZV0pO1xuICAgICAgICB0aGlzLmNvbnRlbnRCb3hTaXplID0gZnJlZXplKFtib3hlcy5jb250ZW50Qm94U2l6ZV0pO1xuICAgICAgICB0aGlzLmRldmljZVBpeGVsQ29udGVudEJveFNpemUgPSBmcmVlemUoW2JveGVzLmRldmljZVBpeGVsQ29udGVudEJveFNpemVdKTtcbiAgICB9XG4gICAgcmV0dXJuIFJlc2l6ZU9ic2VydmVyRW50cnk7XG59KCkpO1xuZXhwb3J0IHsgUmVzaXplT2JzZXJ2ZXJFbnRyeSB9O1xuIiwiaW1wb3J0IHsgaXNIaWRkZW4gfSBmcm9tICcuLi91dGlscy9lbGVtZW50JztcbnZhciBjYWxjdWxhdGVEZXB0aEZvck5vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgIGlmIChpc0hpZGRlbihub2RlKSkge1xuICAgICAgICByZXR1cm4gSW5maW5pdHk7XG4gICAgfVxuICAgIHZhciBkZXB0aCA9IDA7XG4gICAgdmFyIHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICAgIGRlcHRoICs9IDE7XG4gICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlO1xuICAgIH1cbiAgICByZXR1cm4gZGVwdGg7XG59O1xuZXhwb3J0IHsgY2FsY3VsYXRlRGVwdGhGb3JOb2RlIH07XG4iLCJpbXBvcnQgeyByZXNpemVPYnNlcnZlcnMgfSBmcm9tICcuLi91dGlscy9yZXNpemVPYnNlcnZlcnMnO1xuaW1wb3J0IHsgUmVzaXplT2JzZXJ2ZXJFbnRyeSB9IGZyb20gJy4uL1Jlc2l6ZU9ic2VydmVyRW50cnknO1xuaW1wb3J0IHsgY2FsY3VsYXRlRGVwdGhGb3JOb2RlIH0gZnJvbSAnLi9jYWxjdWxhdGVEZXB0aEZvck5vZGUnO1xuaW1wb3J0IHsgY2FsY3VsYXRlQm94U2l6ZSB9IGZyb20gJy4vY2FsY3VsYXRlQm94U2l6ZSc7XG52YXIgYnJvYWRjYXN0QWN0aXZlT2JzZXJ2YXRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzaGFsbG93ZXN0RGVwdGggPSBJbmZpbml0eTtcbiAgICB2YXIgY2FsbGJhY2tzID0gW107XG4gICAgcmVzaXplT2JzZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gcHJvY2Vzc09ic2VydmVyKHJvKSB7XG4gICAgICAgIGlmIChyby5hY3RpdmVUYXJnZXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlbnRyaWVzID0gW107XG4gICAgICAgIHJvLmFjdGl2ZVRhcmdldHMuZm9yRWFjaChmdW5jdGlvbiBwcm9jZXNzVGFyZ2V0KG90KSB7XG4gICAgICAgICAgICB2YXIgZW50cnkgPSBuZXcgUmVzaXplT2JzZXJ2ZXJFbnRyeShvdC50YXJnZXQpO1xuICAgICAgICAgICAgdmFyIHRhcmdldERlcHRoID0gY2FsY3VsYXRlRGVwdGhGb3JOb2RlKG90LnRhcmdldCk7XG4gICAgICAgICAgICBlbnRyaWVzLnB1c2goZW50cnkpO1xuICAgICAgICAgICAgb3QubGFzdFJlcG9ydGVkU2l6ZSA9IGNhbGN1bGF0ZUJveFNpemUob3QudGFyZ2V0LCBvdC5vYnNlcnZlZEJveCk7XG4gICAgICAgICAgICBpZiAodGFyZ2V0RGVwdGggPCBzaGFsbG93ZXN0RGVwdGgpIHtcbiAgICAgICAgICAgICAgICBzaGFsbG93ZXN0RGVwdGggPSB0YXJnZXREZXB0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNhbGxiYWNrcy5wdXNoKGZ1bmN0aW9uIHJlc2l6ZU9ic2VydmVyQ2FsbGJhY2soKSB7XG4gICAgICAgICAgICByby5jYWxsYmFjay5jYWxsKHJvLm9ic2VydmVyLCBlbnRyaWVzLCByby5vYnNlcnZlcik7XG4gICAgICAgIH0pO1xuICAgICAgICByby5hY3RpdmVUYXJnZXRzLnNwbGljZSgwLCByby5hY3RpdmVUYXJnZXRzLmxlbmd0aCk7XG4gICAgfSk7XG4gICAgZm9yICh2YXIgX2kgPSAwLCBjYWxsYmFja3NfMSA9IGNhbGxiYWNrczsgX2kgPCBjYWxsYmFja3NfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gY2FsbGJhY2tzXzFbX2ldO1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgICByZXR1cm4gc2hhbGxvd2VzdERlcHRoO1xufTtcbmV4cG9ydCB7IGJyb2FkY2FzdEFjdGl2ZU9ic2VydmF0aW9ucyB9O1xuIiwiaW1wb3J0IHsgcmVzaXplT2JzZXJ2ZXJzIH0gZnJvbSAnLi4vdXRpbHMvcmVzaXplT2JzZXJ2ZXJzJztcbmltcG9ydCB7IGNhbGN1bGF0ZURlcHRoRm9yTm9kZSB9IGZyb20gJy4vY2FsY3VsYXRlRGVwdGhGb3JOb2RlJztcbnZhciBnYXRoZXJBY3RpdmVPYnNlcnZhdGlvbnNBdERlcHRoID0gZnVuY3Rpb24gKGRlcHRoKSB7XG4gICAgcmVzaXplT2JzZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gcHJvY2Vzc09ic2VydmVyKHJvKSB7XG4gICAgICAgIHJvLmFjdGl2ZVRhcmdldHMuc3BsaWNlKDAsIHJvLmFjdGl2ZVRhcmdldHMubGVuZ3RoKTtcbiAgICAgICAgcm8uc2tpcHBlZFRhcmdldHMuc3BsaWNlKDAsIHJvLnNraXBwZWRUYXJnZXRzLmxlbmd0aCk7XG4gICAgICAgIHJvLm9ic2VydmF0aW9uVGFyZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uIHByb2Nlc3NUYXJnZXQob3QpIHtcbiAgICAgICAgICAgIGlmIChvdC5pc0FjdGl2ZSgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGN1bGF0ZURlcHRoRm9yTm9kZShvdC50YXJnZXQpID4gZGVwdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcm8uYWN0aXZlVGFyZ2V0cy5wdXNoKG90KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvLnNraXBwZWRUYXJnZXRzLnB1c2gob3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuZXhwb3J0IHsgZ2F0aGVyQWN0aXZlT2JzZXJ2YXRpb25zQXREZXB0aCB9O1xuIiwiaW1wb3J0IHsgaGFzQWN0aXZlT2JzZXJ2YXRpb25zIH0gZnJvbSAnLi4vYWxnb3JpdGhtcy9oYXNBY3RpdmVPYnNlcnZhdGlvbnMnO1xuaW1wb3J0IHsgaGFzU2tpcHBlZE9ic2VydmF0aW9ucyB9IGZyb20gJy4uL2FsZ29yaXRobXMvaGFzU2tpcHBlZE9ic2VydmF0aW9ucyc7XG5pbXBvcnQgeyBkZWxpdmVyUmVzaXplTG9vcEVycm9yIH0gZnJvbSAnLi4vYWxnb3JpdGhtcy9kZWxpdmVyUmVzaXplTG9vcEVycm9yJztcbmltcG9ydCB7IGJyb2FkY2FzdEFjdGl2ZU9ic2VydmF0aW9ucyB9IGZyb20gJy4uL2FsZ29yaXRobXMvYnJvYWRjYXN0QWN0aXZlT2JzZXJ2YXRpb25zJztcbmltcG9ydCB7IGdhdGhlckFjdGl2ZU9ic2VydmF0aW9uc0F0RGVwdGggfSBmcm9tICcuLi9hbGdvcml0aG1zL2dhdGhlckFjdGl2ZU9ic2VydmF0aW9uc0F0RGVwdGgnO1xudmFyIHByb2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGRlcHRoID0gMDtcbiAgICBnYXRoZXJBY3RpdmVPYnNlcnZhdGlvbnNBdERlcHRoKGRlcHRoKTtcbiAgICB3aGlsZSAoaGFzQWN0aXZlT2JzZXJ2YXRpb25zKCkpIHtcbiAgICAgICAgZGVwdGggPSBicm9hZGNhc3RBY3RpdmVPYnNlcnZhdGlvbnMoKTtcbiAgICAgICAgZ2F0aGVyQWN0aXZlT2JzZXJ2YXRpb25zQXREZXB0aChkZXB0aCk7XG4gICAgfVxuICAgIGlmIChoYXNTa2lwcGVkT2JzZXJ2YXRpb25zKCkpIHtcbiAgICAgICAgZGVsaXZlclJlc2l6ZUxvb3BFcnJvcigpO1xuICAgIH1cbiAgICByZXR1cm4gZGVwdGggPiAwO1xufTtcbmV4cG9ydCB7IHByb2Nlc3MgfTtcbiIsInZhciB0cmlnZ2VyO1xudmFyIGNhbGxiYWNrcyA9IFtdO1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNhbGxiYWNrcy5zcGxpY2UoMCkuZm9yRWFjaChmdW5jdGlvbiAoY2IpIHsgcmV0dXJuIGNiKCk7IH0pOyB9O1xudmFyIHF1ZXVlTWljcm9UYXNrID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgaWYgKCF0cmlnZ2VyKSB7XG4gICAgICAgIHZhciB0b2dnbGVfMSA9IDA7XG4gICAgICAgIHZhciBlbF8xID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgICAgICB2YXIgY29uZmlnID0geyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH07XG4gICAgICAgIG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vdGlmeSgpOyB9KS5vYnNlcnZlKGVsXzEsIGNvbmZpZyk7XG4gICAgICAgIHRyaWdnZXIgPSBmdW5jdGlvbiAoKSB7IGVsXzEudGV4dENvbnRlbnQgPSBcIlwiICsgKHRvZ2dsZV8xID8gdG9nZ2xlXzEtLSA6IHRvZ2dsZV8xKyspOyB9O1xuICAgIH1cbiAgICBjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgdHJpZ2dlcigpO1xufTtcbmV4cG9ydCB7IHF1ZXVlTWljcm9UYXNrIH07XG4iLCJpbXBvcnQgeyBxdWV1ZU1pY3JvVGFzayB9IGZyb20gJy4vcXVldWVNaWNyb1Rhc2snO1xudmFyIHF1ZXVlUmVzaXplT2JzZXJ2ZXIgPSBmdW5jdGlvbiAoY2IpIHtcbiAgICBxdWV1ZU1pY3JvVGFzayhmdW5jdGlvbiBSZXNpemVPYnNlcnZlcigpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNiKTtcbiAgICB9KTtcbn07XG5leHBvcnQgeyBxdWV1ZVJlc2l6ZU9ic2VydmVyIH07XG4iLCJpbXBvcnQgeyBwcm9jZXNzIH0gZnJvbSAnLi9wcm9jZXNzJztcbmltcG9ydCB7IGdsb2JhbCB9IGZyb20gJy4vZ2xvYmFsJztcbmltcG9ydCB7IHF1ZXVlUmVzaXplT2JzZXJ2ZXIgfSBmcm9tICcuL3F1ZXVlUmVzaXplT2JzZXJ2ZXInO1xudmFyIHdhdGNoaW5nID0gMDtcbnZhciBpc1dhdGNoaW5nID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gISF3YXRjaGluZzsgfTtcbnZhciBDQVRDSF9QRVJJT0QgPSAyNTA7XG52YXIgb2JzZXJ2ZXJDb25maWcgPSB7IGF0dHJpYnV0ZXM6IHRydWUsIGNoYXJhY3RlckRhdGE6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9O1xudmFyIGV2ZW50cyA9IFtcbiAgICAncmVzaXplJyxcbiAgICAnbG9hZCcsXG4gICAgJ3RyYW5zaXRpb25lbmQnLFxuICAgICdhbmltYXRpb25lbmQnLFxuICAgICdhbmltYXRpb25zdGFydCcsXG4gICAgJ2FuaW1hdGlvbml0ZXJhdGlvbicsXG4gICAgJ2tleXVwJyxcbiAgICAna2V5ZG93bicsXG4gICAgJ21vdXNldXAnLFxuICAgICdtb3VzZWRvd24nLFxuICAgICdtb3VzZW92ZXInLFxuICAgICdtb3VzZW91dCcsXG4gICAgJ2JsdXInLFxuICAgICdmb2N1cydcbl07XG52YXIgdGltZSA9IGZ1bmN0aW9uICh0aW1lb3V0KSB7XG4gICAgaWYgKHRpbWVvdXQgPT09IHZvaWQgMCkgeyB0aW1lb3V0ID0gMDsgfVxuICAgIHJldHVybiBEYXRlLm5vdygpICsgdGltZW91dDtcbn07XG52YXIgc2NoZWR1bGVkID0gZmFsc2U7XG52YXIgU2NoZWR1bGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTY2hlZHVsZXIoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuc3RvcHBlZCA9IHRydWU7XG4gICAgICAgIHRoaXMubGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5zY2hlZHVsZSgpOyB9O1xuICAgIH1cbiAgICBTY2hlZHVsZXIucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICh0aW1lb3V0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aW1lb3V0ID09PSB2b2lkIDApIHsgdGltZW91dCA9IENBVENIX1BFUklPRDsgfVxuICAgICAgICBpZiAoc2NoZWR1bGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgICAgdmFyIHVudGlsID0gdGltZSh0aW1lb3V0KTtcbiAgICAgICAgcXVldWVSZXNpemVPYnNlcnZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZWxlbWVudHNIYXZlUmVzaXplZCA9IGZhbHNlO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50c0hhdmVSZXNpemVkID0gcHJvY2VzcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgc2NoZWR1bGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGltZW91dCA9IHVudGlsIC0gdGltZSgpO1xuICAgICAgICAgICAgICAgIGlmICghaXNXYXRjaGluZygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRzSGF2ZVJlc2l6ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucnVuKDEwMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aW1lb3V0ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5ydW4odGltZW91dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zdGFydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTY2hlZHVsZXIucHJvdG90eXBlLnNjaGVkdWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgdGhpcy5ydW4oKTtcbiAgICB9O1xuICAgIFNjaGVkdWxlci5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGNiID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMub2JzZXJ2ZXIgJiYgX3RoaXMub2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCBvYnNlcnZlckNvbmZpZyk7IH07XG4gICAgICAgIGRvY3VtZW50LmJvZHkgPyBjYigpIDogZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBjYik7XG4gICAgfTtcbiAgICBTY2hlZHVsZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5zdG9wcGVkKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3BwZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLmxpc3RlbmVyKTtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZSgpO1xuICAgICAgICAgICAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKG5hbWUsIF90aGlzLmxpc3RlbmVyLCB0cnVlKTsgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNjaGVkdWxlci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCF0aGlzLnN0b3BwZWQpIHtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIgJiYgdGhpcy5vYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gZ2xvYmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgX3RoaXMubGlzdGVuZXIsIHRydWUpOyB9KTtcbiAgICAgICAgICAgIHRoaXMuc3RvcHBlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBTY2hlZHVsZXI7XG59KCkpO1xudmFyIHNjaGVkdWxlciA9IG5ldyBTY2hlZHVsZXIoKTtcbnZhciB1cGRhdGVDb3VudCA9IGZ1bmN0aW9uIChuKSB7XG4gICAgIXdhdGNoaW5nICYmIG4gPiAwICYmIHNjaGVkdWxlci5zdGFydCgpO1xuICAgIHdhdGNoaW5nICs9IG47XG4gICAgIXdhdGNoaW5nICYmIHNjaGVkdWxlci5zdG9wKCk7XG59O1xuZXhwb3J0IHsgc2NoZWR1bGVyLCB1cGRhdGVDb3VudCB9O1xuIiwiaW1wb3J0IHsgUmVzaXplT2JzZXJ2ZXJCb3hPcHRpb25zIH0gZnJvbSAnLi9SZXNpemVPYnNlcnZlckJveE9wdGlvbnMnO1xuaW1wb3J0IHsgY2FsY3VsYXRlQm94U2l6ZSB9IGZyb20gJy4vYWxnb3JpdGhtcy9jYWxjdWxhdGVCb3hTaXplJztcbmltcG9ydCB7IGlzU1ZHLCBpc1JlcGxhY2VkRWxlbWVudCB9IGZyb20gJy4vdXRpbHMvZWxlbWVudCc7XG52YXIgc2tpcE5vdGlmeU9uRWxlbWVudCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICByZXR1cm4gIWlzU1ZHKHRhcmdldClcbiAgICAgICAgJiYgIWlzUmVwbGFjZWRFbGVtZW50KHRhcmdldClcbiAgICAgICAgJiYgZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpLmRpc3BsYXkgPT09ICdpbmxpbmUnO1xufTtcbnZhciBSZXNpemVPYnNlcnZhdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVzaXplT2JzZXJ2YXRpb24odGFyZ2V0LCBvYnNlcnZlZEJveCkge1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy5vYnNlcnZlZEJveCA9IG9ic2VydmVkQm94IHx8IFJlc2l6ZU9ic2VydmVyQm94T3B0aW9ucy5DT05URU5UX0JPWDtcbiAgICAgICAgdGhpcy5sYXN0UmVwb3J0ZWRTaXplID0ge1xuICAgICAgICAgICAgaW5saW5lU2l6ZTogMCxcbiAgICAgICAgICAgIGJsb2NrU2l6ZTogMFxuICAgICAgICB9O1xuICAgIH1cbiAgICBSZXNpemVPYnNlcnZhdGlvbi5wcm90b3R5cGUuaXNBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzaXplID0gY2FsY3VsYXRlQm94U2l6ZSh0aGlzLnRhcmdldCwgdGhpcy5vYnNlcnZlZEJveCwgdHJ1ZSk7XG4gICAgICAgIGlmIChza2lwTm90aWZ5T25FbGVtZW50KHRoaXMudGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhpcy5sYXN0UmVwb3J0ZWRTaXplID0gc2l6ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5sYXN0UmVwb3J0ZWRTaXplLmlubGluZVNpemUgIT09IHNpemUuaW5saW5lU2l6ZVxuICAgICAgICAgICAgfHwgdGhpcy5sYXN0UmVwb3J0ZWRTaXplLmJsb2NrU2l6ZSAhPT0gc2l6ZS5ibG9ja1NpemUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIHJldHVybiBSZXNpemVPYnNlcnZhdGlvbjtcbn0oKSk7XG5leHBvcnQgeyBSZXNpemVPYnNlcnZhdGlvbiB9O1xuIiwidmFyIFJlc2l6ZU9ic2VydmVyRGV0YWlsID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZXNpemVPYnNlcnZlckRldGFpbChyZXNpemVPYnNlcnZlciwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5hY3RpdmVUYXJnZXRzID0gW107XG4gICAgICAgIHRoaXMuc2tpcHBlZFRhcmdldHMgPSBbXTtcbiAgICAgICAgdGhpcy5vYnNlcnZhdGlvblRhcmdldHMgPSBbXTtcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IHJlc2l6ZU9ic2VydmVyO1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgfVxuICAgIHJldHVybiBSZXNpemVPYnNlcnZlckRldGFpbDtcbn0oKSk7XG5leHBvcnQgeyBSZXNpemVPYnNlcnZlckRldGFpbCB9O1xuIiwiaW1wb3J0IHsgc2NoZWR1bGVyLCB1cGRhdGVDb3VudCB9IGZyb20gJy4vdXRpbHMvc2NoZWR1bGVyJztcbmltcG9ydCB7IFJlc2l6ZU9ic2VydmF0aW9uIH0gZnJvbSAnLi9SZXNpemVPYnNlcnZhdGlvbic7XG5pbXBvcnQgeyBSZXNpemVPYnNlcnZlckRldGFpbCB9IGZyb20gJy4vUmVzaXplT2JzZXJ2ZXJEZXRhaWwnO1xuaW1wb3J0IHsgcmVzaXplT2JzZXJ2ZXJzIH0gZnJvbSAnLi91dGlscy9yZXNpemVPYnNlcnZlcnMnO1xudmFyIG9ic2VydmVyTWFwID0gbmV3IFdlYWtNYXAoKTtcbnZhciBnZXRPYnNlcnZhdGlvbkluZGV4ID0gZnVuY3Rpb24gKG9ic2VydmF0aW9uVGFyZ2V0cywgdGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYnNlcnZhdGlvblRhcmdldHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKG9ic2VydmF0aW9uVGFyZ2V0c1tpXS50YXJnZXQgPT09IHRhcmdldCkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIC0xO1xufTtcbnZhciBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlcigpIHtcbiAgICB9XG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLmNvbm5lY3QgPSBmdW5jdGlvbiAocmVzaXplT2JzZXJ2ZXIsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBkZXRhaWwgPSBuZXcgUmVzaXplT2JzZXJ2ZXJEZXRhaWwocmVzaXplT2JzZXJ2ZXIsIGNhbGxiYWNrKTtcbiAgICAgICAgb2JzZXJ2ZXJNYXAuc2V0KHJlc2l6ZU9ic2VydmVyLCBkZXRhaWwpO1xuICAgIH07XG4gICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLm9ic2VydmUgPSBmdW5jdGlvbiAocmVzaXplT2JzZXJ2ZXIsIHRhcmdldCwgb3B0aW9ucykge1xuICAgICAgICB2YXIgZGV0YWlsID0gb2JzZXJ2ZXJNYXAuZ2V0KHJlc2l6ZU9ic2VydmVyKTtcbiAgICAgICAgdmFyIGZpcnN0T2JzZXJ2YXRpb24gPSBkZXRhaWwub2JzZXJ2YXRpb25UYXJnZXRzLmxlbmd0aCA9PT0gMDtcbiAgICAgICAgaWYgKGdldE9ic2VydmF0aW9uSW5kZXgoZGV0YWlsLm9ic2VydmF0aW9uVGFyZ2V0cywgdGFyZ2V0KSA8IDApIHtcbiAgICAgICAgICAgIGZpcnN0T2JzZXJ2YXRpb24gJiYgcmVzaXplT2JzZXJ2ZXJzLnB1c2goZGV0YWlsKTtcbiAgICAgICAgICAgIGRldGFpbC5vYnNlcnZhdGlvblRhcmdldHMucHVzaChuZXcgUmVzaXplT2JzZXJ2YXRpb24odGFyZ2V0LCBvcHRpb25zICYmIG9wdGlvbnMuYm94KSk7XG4gICAgICAgICAgICB1cGRhdGVDb3VudCgxKTtcbiAgICAgICAgICAgIHNjaGVkdWxlci5zY2hlZHVsZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIudW5vYnNlcnZlID0gZnVuY3Rpb24gKHJlc2l6ZU9ic2VydmVyLCB0YXJnZXQpIHtcbiAgICAgICAgdmFyIGRldGFpbCA9IG9ic2VydmVyTWFwLmdldChyZXNpemVPYnNlcnZlcik7XG4gICAgICAgIHZhciBpbmRleCA9IGdldE9ic2VydmF0aW9uSW5kZXgoZGV0YWlsLm9ic2VydmF0aW9uVGFyZ2V0cywgdGFyZ2V0KTtcbiAgICAgICAgdmFyIGxhc3RPYnNlcnZhdGlvbiA9IGRldGFpbC5vYnNlcnZhdGlvblRhcmdldHMubGVuZ3RoID09PSAxO1xuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgbGFzdE9ic2VydmF0aW9uICYmIHJlc2l6ZU9ic2VydmVycy5zcGxpY2UocmVzaXplT2JzZXJ2ZXJzLmluZGV4T2YoZGV0YWlsKSwgMSk7XG4gICAgICAgICAgICBkZXRhaWwub2JzZXJ2YXRpb25UYXJnZXRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB1cGRhdGVDb3VudCgtMSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5kaXNjb25uZWN0ID0gZnVuY3Rpb24gKHJlc2l6ZU9ic2VydmVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBkZXRhaWwgPSBvYnNlcnZlck1hcC5nZXQocmVzaXplT2JzZXJ2ZXIpO1xuICAgICAgICBkZXRhaWwub2JzZXJ2YXRpb25UYXJnZXRzLnNsaWNlKCkuZm9yRWFjaChmdW5jdGlvbiAob3QpIHsgcmV0dXJuIF90aGlzLnVub2JzZXJ2ZShyZXNpemVPYnNlcnZlciwgb3QudGFyZ2V0KTsgfSk7XG4gICAgICAgIGRldGFpbC5hY3RpdmVUYXJnZXRzLnNwbGljZSgwLCBkZXRhaWwuYWN0aXZlVGFyZ2V0cy5sZW5ndGgpO1xuICAgIH07XG4gICAgcmV0dXJuIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlcjtcbn0oKSk7XG5leHBvcnQgeyBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIgfTtcbiIsImltcG9ydCB7IFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlciB9IGZyb20gJy4vUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyJztcbmltcG9ydCB7IGlzRWxlbWVudCB9IGZyb20gJy4vdXRpbHMvZWxlbWVudCc7XG52YXIgUmVzaXplT2JzZXJ2ZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlc2l6ZU9ic2VydmVyKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGNvbnN0cnVjdCAnUmVzaXplT2JzZXJ2ZXInOiAxIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSAwIHByZXNlbnQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGYWlsZWQgdG8gY29uc3RydWN0ICdSZXNpemVPYnNlcnZlcic6IFRoZSBjYWxsYmFjayBwcm92aWRlZCBhcyBwYXJhbWV0ZXIgMSBpcyBub3QgYSBmdW5jdGlvbi5cIik7XG4gICAgICAgIH1cbiAgICAgICAgUmVzaXplT2JzZXJ2ZXJDb250cm9sbGVyLmNvbm5lY3QodGhpcywgY2FsbGJhY2spO1xuICAgIH1cbiAgICBSZXNpemVPYnNlcnZlci5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uICh0YXJnZXQsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGYWlsZWQgdG8gZXhlY3V0ZSAnb2JzZXJ2ZScgb24gJ1Jlc2l6ZU9ic2VydmVyJzogMSBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgMCBwcmVzZW50LlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRWxlbWVudCh0YXJnZXQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGV4ZWN1dGUgJ29ic2VydmUnIG9uICdSZXNpemVPYnNlcnZlcic6IHBhcmFtZXRlciAxIGlzIG5vdCBvZiB0eXBlICdFbGVtZW50XCIpO1xuICAgICAgICB9XG4gICAgICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci5vYnNlcnZlKHRoaXMsIHRhcmdldCwgb3B0aW9ucyk7XG4gICAgfTtcbiAgICBSZXNpemVPYnNlcnZlci5wcm90b3R5cGUudW5vYnNlcnZlID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBleGVjdXRlICd1bm9ic2VydmUnIG9uICdSZXNpemVPYnNlcnZlcic6IDEgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IDAgcHJlc2VudC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VsZW1lbnQodGFyZ2V0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBleGVjdXRlICd1bm9ic2VydmUnIG9uICdSZXNpemVPYnNlcnZlcic6IHBhcmFtZXRlciAxIGlzIG5vdCBvZiB0eXBlICdFbGVtZW50XCIpO1xuICAgICAgICB9XG4gICAgICAgIFJlc2l6ZU9ic2VydmVyQ29udHJvbGxlci51bm9ic2VydmUodGhpcywgdGFyZ2V0KTtcbiAgICB9O1xuICAgIFJlc2l6ZU9ic2VydmVyLnByb3RvdHlwZS5kaXNjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBSZXNpemVPYnNlcnZlckNvbnRyb2xsZXIuZGlzY29ubmVjdCh0aGlzKTtcbiAgICB9O1xuICAgIFJlc2l6ZU9ic2VydmVyLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gJ2Z1bmN0aW9uIFJlc2l6ZU9ic2VydmVyICgpIHsgW3BvbHlmaWxsIGNvZGVdIH0nO1xuICAgIH07XG4gICAgcmV0dXJuIFJlc2l6ZU9ic2VydmVyO1xufSgpKTtcbmV4cG9ydCB7IFJlc2l6ZU9ic2VydmVyIH07XG4iLCJpbXBvcnQgeyBSZXNpemVPYnNlcnZlciBhcyBQb2x5ZmlsbCB9IGZyb20gJ0BqdWdnbGUvcmVzaXplLW9ic2VydmVyJ1xuY29uc3QgUmVzaXplT2JzZXJ2ZXIgPSB3aW5kb3cuUmVzaXplT2JzZXJ2ZXIgfHwgUG9seWZpbGxcblxuaW1wb3J0IHJlbW92ZUl0ZW0gZnJvbSAnLi91dGlscy9yZW1vdmUtYXJyYXktaXRlbSdcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9ldmVudEVtaXR0ZXInXG5pbXBvcnQge1xuICBnZXREaXN0YW5jZSxcbiAgaW5kZXhPZk5lYXJlc3RQb2ludFxufSBmcm9tICcuL2dlb21ldHJ5L2Rpc3RhbmNlcydcblxuaW1wb3J0IERyYWdnYWJsZSBmcm9tICcuL2RyYWdnYWJsZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGRyYWdnYWJsZXMsIG9wdGlvbnM9e30pIHtcbiAgICBzdXBlcihvcHRpb25zKVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgdGltZUVuZDogMjAwLFxuICAgICAgdGltZUV4Y2FuZ2U6IDQwMCxcbiAgICAgIHJhZGl1czogMzBcbiAgICB9LCBvcHRpb25zKVxuXG4gICAgdGhpcy5jb250YWluZXIgPSBvcHRpb25zLmNvbnRhaW5lclxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGRyYWdnYWJsZXNcbiAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSBmYWxzZVxuXG4gICAgdGhpcy5yZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoKSA9PiB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlb3JkZXJPbkNoYW5nZSkgdGhpcy5yZXNldCgpXG4gICAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZCkgPT4gZC5zdGFydFBvc2l0aW9uaW5nKCkpXG4gICAgfSlcblxuICAgIHRoaXMuaW5pdCgpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuX2VuYWJsZSA9IHRydWVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSlcbiAgfVxuXG4gIGluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLmVuYWJsZSA9IHRoaXMuX2VuYWJsZVxuICAgIGRyYWdnYWJsZS5vbignZHJhZzptb3ZlJywgKCkgPT4gdGhpcy5vbk1vdmUoZHJhZ2dhYmxlKSlcbiAgICBkcmFnZ2FibGUuZHJhZ0VuZEFjdGlvbiA9ICgpID0+IHtcbiAgICAgIGRyYWdnYWJsZS5waW5Qb3NpdGlvbihkcmFnZ2FibGUucGlubmVkUG9zaXRpb24sIHRoaXMub3B0aW9ucy50aW1lRW5kKVxuICAgICAgdGhpcy5vbkVuZChkcmFnZ2FibGUpXG4gICAgfVxuICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShkcmFnZ2FibGUuZWxlbWVudClcbiAgfVxuXG4gIHJlbGVhc2VEcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgdGhpcy5yZXNpemVPYnNlcnZlci51bm9ic2VydmUoZHJhZ2dhYmxlLmVsZW1lbnQpXG4gICAgZHJhZ2dhYmxlLnJlc2V0T24oJ2RyYWc6ZW5kJylcbiAgICBkcmFnZ2FibGUucmVzZXRPbignZHJhZzptb3ZlJylcbiAgICByZW1vdmVJdGVtKHRoaXMuZHJhZ2dhYmxlcywgZHJhZ2dhYmxlKVxuICB9XG5cbiAgb25Nb3ZlKGRyYWdnYWJsZSkge1xuICAgIGNvbnN0IHNvcnRlZERyYWdnYWJsZXMgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuICAgIGNvbnN0IHBpbm5lZFBvc2l0aW9ucyA9IHNvcnRlZERyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbilcblxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHNvcnRlZERyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpXG4gICAgY29uc3QgdGFyZ2V0SW5kZXggPSBpbmRleE9mTmVhcmVzdFBvaW50KHBpbm5lZFBvc2l0aW9ucywgZHJhZ2dhYmxlLnBvc2l0aW9uLCB0aGlzLm9wdGlvbnMucmFkaXVzLCB0aGlzLmRpc3RhbmNlRnVuYylcblxuICAgIGlmICh0YXJnZXRJbmRleCAhPT0gLTEgJiYgY3VycmVudEluZGV4ICE9PSB0YXJnZXRJbmRleCkge1xuICAgICAgaWYgKHRhcmdldEluZGV4IDwgY3VycmVudEluZGV4KSB7XG4gICAgICAgIGZvciAobGV0IGk9dGFyZ2V0SW5kZXg7IGk8Y3VycmVudEluZGV4OyBpKyspIHtcbiAgICAgICAgICBzb3J0ZWREcmFnZ2FibGVzW2ldLnBpblBvc2l0aW9uKHBpbm5lZFBvc2l0aW9uc1tpKzFdLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGk9Y3VycmVudEluZGV4OyBpPHRhcmdldEluZGV4OyBpKyspIHtcbiAgICAgICAgICBzb3J0ZWREcmFnZ2FibGVzW2krMV0ucGluUG9zaXRpb24ocGlubmVkUG9zaXRpb25zW2ldLCB0aGlzLm9wdGlvbnMudGltZUV4Y2FuZ2UpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRyYWdnYWJsZS5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgICBkcmFnZ2FibGUucGluUG9zaXRpb24ocGlubmVkUG9zaXRpb25zW3RhcmdldEluZGV4XSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiA9IHBpbm5lZFBvc2l0aW9uc1t0YXJnZXRJbmRleF1cbiAgICAgIH1cblxuICAgICAgdGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uID0gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIG9uRW5kKCkge1xuICAgIGlmICh0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24pIHtcbiAgICAgIHRoaXMuZW1pdCgnbGlzdDpjaGFuZ2UnKVxuICAgICAgdGhpcy5jaGFuZ2VkRHVyaW5nSXRlcmF0aW9uID0gZmFsc2VcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW9yZGVyT25DaGFuZ2UgJiYgdGhpcy5vcHRpb25zLmNvbnRhaW5lcikge1xuICAgICAgICB0aGlzLnJlb3JkZXJFbGVtZW50cygpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVvcmRlckVsZW1lbnRzKCkge1xuICAgIGNvbnN0IG9yZGVyZWRFbGVtZW50cyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpLm1hcCgoZCkgPT4gZC5lbGVtZW50KVxuICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG4gICAgb3JkZXJlZEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IGZyYWdtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpKVxuXG4gICAgdGhpcy5yZXNldCgpXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpXG4gICAgdGhpcy5kcmFnZ2FibGVzLmZvckVhY2goKGQpID0+IGQuc3RhcnRQb3NpdGlvbmluZygpKVxuXG4gICAgdGhpcy5lbWl0KCdsaXN0OnJlb3JkZXJlZCcpXG4gIH1cblxuICBnZXRDdXJyZW50UGlubmVkUG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi5jbG9uZSgpKVxuICB9XG5cbiAgZ2V0U29ydGVkRHJhZ2dhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVzLnNvcnQodGhpcy5zb3J0aW5nLmJpbmQodGhpcykpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVzZXRQb3NpdGlvblRvSW5pdGlhbCgpKVxuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucmVmcmVzaCgpKVxuICB9XG5cbiAgYWRkKGRyYWdnYWJsZXMpIHtcbiAgICBpZiAoIShkcmFnZ2FibGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBkcmFnZ2FibGVzID0gW2RyYWdnYWJsZXNdXG4gICAgfVxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLmluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSlcbiAgICB0aGlzLmRyYWdnYWJsZXMgPSB0aGlzLmRyYWdnYWJsZXMuY29uY2F0KGRyYWdnYWJsZXMpXG4gIH1cblxuICByZW1vdmUoZHJhZ2dhYmxlcykge1xuICAgIGNvbnN0IGluaXRpYWxQb3NpdGlvbnMgPSB0aGlzLmRyYWdnYWJsZXMubWFwKChkcmFnZ2FibGUpID0+IGRyYWdnYWJsZS5pbml0aWFsUG9zaXRpb24pXG4gICAgY29uc3QgbGlzdCA9IFtdXG4gICAgY29uc3Qgc29ydGVkRHJhZ2dhYmxlcyA9IHRoaXMuZ2V0U29ydGVkRHJhZ2dhYmxlcygpXG5cbiAgICBpZiAoIShkcmFnZ2FibGVzIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBkcmFnZ2FibGVzID0gW2RyYWdnYWJsZXNdXG4gICAgfVxuXG4gICAgZHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHRoaXMucmVsZWFzZURyYWdnYWJsZShkcmFnZ2FibGUpKVxuXG4gICAgbGV0IGogPSAwXG4gICAgc29ydGVkRHJhZ2dhYmxlcy5mb3JFYWNoKChkcmFnZ2FibGUpID0+IHtcbiAgICAgIGlmICh0aGlzLmRyYWdnYWJsZXMuaW5kZXhPZihkcmFnZ2FibGUpICE9PSAtMSkge1xuICAgICAgICBpZiAoZHJhZ2dhYmxlLnBpbm5lZFBvc2l0aW9uICE9PSBpbml0aWFsUG9zaXRpb25zW2pdKSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGluaXRpYWxQb3NpdGlvbnNbal0sIHRoaXMub3B0aW9ucy50aW1lRXhjYW5nZSlcbiAgICAgICAgfVxuICAgICAgICBkcmFnZ2FibGUuaW5pdGlhbFBvc2l0aW9uID0gaW5pdGlhbFBvc2l0aW9uc1tqXVxuICAgICAgICBqKytcbiAgICAgICAgbGlzdC5wdXNoKGRyYWdnYWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMuZHJhZ2dhYmxlcyA9IGxpc3RcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMucmVtb3ZlKHRoaXMuZHJhZ2dhYmxlcy5zbGljZSgpKVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUuZGVzdHJveSgpKVxuICB9XG5cbiAgc29ydGluZyhkcmFnZ2FibGVBLCBkcmFnZ2FibGVCKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5zb3J0aW5nKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNvcnRpbmcoZHJhZ2dhYmxlQSwgZHJhZ2dhYmxlQilcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueSA8IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueSkgcmV0dXJuIC0xXG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi55ID4gZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi55KSByZXR1cm4gMVxuICAgICAgaWYgKGRyYWdnYWJsZUEucGlubmVkUG9zaXRpb24ueCA8IGRyYWdnYWJsZUIucGlubmVkUG9zaXRpb24ueCkgcmV0dXJuIC0xXG4gICAgICBpZiAoZHJhZ2dhYmxlQS5waW5uZWRQb3NpdGlvbi54ID4gZHJhZ2dhYmxlQi5waW5uZWRQb3NpdGlvbi54KSByZXR1cm4gMVxuICAgICAgcmV0dXJuIDBcbiAgICB9XG4gIH1cblxuICBnZXQgZGlzdGFuY2VGdW5jKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZ2V0RGlzdGFuY2UgfHwgZ2V0RGlzdGFuY2VcbiAgfVxuXG4gIGdldCBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q3VycmVudFBpbm5lZFBvc2l0aW9ucygpXG4gIH1cblxuICBzZXQgcG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnd3JvbmcgYXJyYXkgbGVuZ3RoJ1xuICAgIGlmIChwb3NpdGlvbnMubGVuZ3RoID09PSB0aGlzLmRyYWdnYWJsZXMubGVuZ3RoKSB7XG4gICAgICBwb3NpdGlvbnMuZm9yRWFjaCgocG9pbnQsIGkpID0+IHtcbiAgICAgICAgdGhpcy5kcmFnZ2FibGVzW2ldLnBpblBvc2l0aW9uKHBvaW50KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbWVzc2FnZVxuICAgIH1cbiAgfVxuXG4gIGdldCBlbmFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZVxuICB9XG5cbiAgc2V0IGVuYWJsZShlbmFibGUpIHtcbiAgICB0aGlzLl9lbmFibGUgPSBlbmFibGVcbiAgICB0aGlzLmRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuZW5hYmxlID0gZW5hYmxlXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBmYWN0b3J5KGNvbnRhaW5lckVsZW1lbnQsIGVsZW1lbnRzLCBvcHRpb25zPXt9KSB7XG4gICAgY29uc3QgZHJhZ2dhYmxlcyA9IEFycmF5LmZyb20oZWxlbWVudHMpLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEcmFnZ2FibGUoZWxlbWVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyRWxlbWVudFxuICAgICAgfSwgb3B0aW9ucy5kcmFnZ2FibGUgfHwge30pKVxuICAgIH0pXG5cbiAgICByZXR1cm4gbmV3IExpc3QoZHJhZ2dhYmxlcywgT2JqZWN0LmFzc2lnbih7XG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lckVsZW1lbnRcbiAgICB9LCBvcHRpb25zLmxpc3QgfHwge30pKVxuICB9XG59XG4iLCJpbXBvcnQgTGlzdCBmcm9tICcuL2xpc3QnXG5pbXBvcnQgeyBpbmRleE9mTmVhcmVzdFBvaW50LCBnZXRZRGlmZmVyZW5jZSB9IGZyb20gJy4vZ2VvbWV0cnkvZGlzdGFuY2VzJ1xuXG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJy4vZHJhZ2dhYmxlJ1xuXG5jb25zdCBhcnJheU1vdmUgPSAoYXJyYXksIGZyb20sIHRvKSA9PiB7XG4gIGFycmF5LnNwbGljZSh0byA8IDAgPyBhcnJheS5sZW5ndGggKyB0byA6IHRvLCAwLCBhcnJheS5zcGxpY2UoZnJvbSwgMSlbMF0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1YmJsaW5nTGlzdCBleHRlbmRzIExpc3Qge1xuICBjb25zdHJ1Y3RvcihkcmFnZ2FibGVzLCBvcHRpb25zPXt9KSB7XG4gICAgc3VwZXIoZHJhZ2dhYmxlcywgb3B0aW9ucylcbiAgfVxuXG4gIGluaXREcmFnZ2FibGUoZHJhZ2dhYmxlKSB7XG4gICAgZHJhZ2dhYmxlLm9uKCdkcmFnOnN0YXJ0JywgKCkgPT4gdGhpcy5hdXRvRGV0ZWN0VmVydGljYWxHYXAoZHJhZ2dhYmxlKSlcbiAgICBzdXBlci5pbml0RHJhZ2dhYmxlKGRyYWdnYWJsZSlcbiAgfVxuXG4gIGF1dG9EZXRlY3RWZXJ0aWNhbEdhcCgpIHtcbiAgICBpZiAodGhpcy5kcmFnZ2FibGVzLmxlbmd0aCA+PSAyKSB7XG4gICAgICBjb25zdCBzb3J0ZWQgPSB0aGlzLmdldFNvcnRlZERyYWdnYWJsZXMoKVxuXG4gICAgICB0aGlzLnZlcnRpY2FsR2FwID0gc29ydGVkWzFdLnBpbm5lZFBvc2l0aW9uLnkgLSBzb3J0ZWRbMF0ucGlubmVkUG9zaXRpb24ueSAtIHNvcnRlZFswXS5nZXRTaXplKCkueVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZlcnRpY2FsR2FwID0gMFxuICAgIH1cblxuICAgIGlmICh0aGlzLmRyYWdnYWJsZXMubGVuZ3RoID49IDEpIHtcbiAgICAgIHRoaXMuc3RhcnRQb3NpdGlvbiA9IHRoaXMuZHJhZ2dhYmxlc1swXS5waW5uZWRQb3NpdGlvblxuICAgIH1cbiAgfVxuXG4gIG9uTW92ZShkcmFnZ2FibGUpIHtcbiAgICBjb25zdCBzb3J0ZWREcmFnZ2FibGVzID0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcbiAgICBjb25zdCBwaW5uZWRQb3NpdGlvbnMgPSBzb3J0ZWREcmFnZ2FibGVzLm1hcCgoZHJhZ2dhYmxlKSA9PiBkcmFnZ2FibGUucGlubmVkUG9zaXRpb24pXG5cbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBzb3J0ZWREcmFnZ2FibGVzLmluZGV4T2YoZHJhZ2dhYmxlKVxuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gaW5kZXhPZk5lYXJlc3RQb2ludChwaW5uZWRQb3NpdGlvbnMsIGRyYWdnYWJsZS5wb3NpdGlvbiwgdGhpcy5vcHRpb25zLnJhZGl1cywgdGhpcy5kaXN0YW5jZUZ1bmMpXG5cbiAgICBpZiAodGFyZ2V0SW5kZXggIT09IC0xICYmIGN1cnJlbnRJbmRleCAhPT0gdGFyZ2V0SW5kZXgpIHtcbiAgICAgIGFycmF5TW92ZShzb3J0ZWREcmFnZ2FibGVzLCBjdXJyZW50SW5kZXgsIHRhcmdldEluZGV4KVxuICAgICAgdGhpcy5idWJibGluZyhzb3J0ZWREcmFnZ2FibGVzLCBkcmFnZ2FibGUpXG4gICAgICB0aGlzLmNoYW5nZWREdXJpbmdJdGVyYXRpb24gPSB0cnVlXG4gICAgfVxuICB9XG5cbiAgYnViYmxpbmcoc29ydGVkRHJhZ2dhYmxlcywgY3VycmVudERyYWdnYWJsZSkge1xuICAgIGNvbnN0IGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuc3RhcnRQb3NpdGlvbi5jbG9uZSgpXG4gICAgc29ydGVkRHJhZ2dhYmxlcyB8fD0gdGhpcy5nZXRTb3J0ZWREcmFnZ2FibGVzKClcblxuICAgIHNvcnRlZERyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB7XG4gICAgICBpZiAoIWRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbi5jb21wYXJlKGN1cnJlbnRQb3NpdGlvbikpIHtcbiAgICAgICAgaWYgKGRyYWdnYWJsZSA9PT0gY3VycmVudERyYWdnYWJsZSAmJiAhY3VycmVudERyYWdnYWJsZS5uYXRpdmVEcmFnQW5kRHJvcCkge1xuICAgICAgICAgIGRyYWdnYWJsZS5waW5uZWRQb3NpdGlvbiA9IGN1cnJlbnRQb3NpdGlvbi5jbG9uZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZHJhZ2dhYmxlLnBpblBvc2l0aW9uKGN1cnJlbnRQb3NpdGlvbiwgKGRyYWdnYWJsZSA9PT0gY3VycmVudERyYWdnYWJsZSkgPyAwIDogdGhpcy5vcHRpb25zLnRpbWVFeGNhbmdlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnRQb3NpdGlvbi55ID0gY3VycmVudFBvc2l0aW9uLnkgKyBkcmFnZ2FibGUuZ2V0U2l6ZSgpLnkgKyB0aGlzLnZlcnRpY2FsR2FwXG4gICAgfSlcbiAgfVxuXG4gIHJlbW92ZShkcmFnZ2FibGVzKSB7XG4gICAgaWYgKCEoZHJhZ2dhYmxlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgZHJhZ2dhYmxlcyA9IFtkcmFnZ2FibGVzXVxuICAgIH1cblxuICAgIGRyYWdnYWJsZXMuZm9yRWFjaCgoZHJhZ2dhYmxlKSA9PiB0aGlzLnJlbGVhc2VEcmFnZ2FibGUoZHJhZ2dhYmxlKSlcblxuICAgIHRoaXMuZHJhZ2dhYmxlcy5mb3JFYWNoKChkKSA9PiBkLnN0YXJ0UG9zaXRpb25pbmcoKSlcbiAgICB0aGlzLmJ1YmJsaW5nKClcbiAgfVxuXG4gIGdldCBkaXN0YW5jZUZ1bmMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5nZXREaXN0YW5jZSB8fCBnZXRZRGlmZmVyZW5jZVxuICB9XG5cbiAgc3RhdGljIGZhY3RvcnkoY29udGFpbmVyRWxlbWVudCwgZWxlbWVudHMsIG9wdGlvbnM9e30pIHtcbiAgICBjb25zdCBkcmFnZ2FibGVzID0gQXJyYXkuZnJvbShlbGVtZW50cykubWFwKChlbGVtZW50KSA9PiB7XG4gICAgICByZXR1cm4gbmV3IERyYWdnYWJsZShlbGVtZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgY29udGFpbmVyOiBjb250YWluZXJFbGVtZW50XG4gICAgICB9LCBvcHRpb25zLmRyYWdnYWJsZSB8fCB7fSkpXG4gICAgfSlcblxuICAgIHJldHVybiBuZXcgQnViYmxpbmdMaXN0KGRyYWdnYWJsZXMsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgY29udGFpbmVyOiBjb250YWluZXJFbGVtZW50XG4gICAgfSwgb3B0aW9ucy5saXN0IHx8IHt9KSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbImdsb2JhbCIsImNhbGwiLCJOQVRJVkVfQklORCIsIiRwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImYiLCJGdW5jdGlvblByb3RvdHlwZSIsImJpbmQiLCJ0b1N0cmluZyIsInVuY3VycnlUaGlzIiwic3RyaW5nU2xpY2UiLCJPYmplY3QiLCJjbGFzc29mIiwiVHlwZUVycm9yIiwiSW5kZXhlZE9iamVjdCIsInByb2Nlc3MiLCJ1c2VyQWdlbnQiLCJWOF9WRVJTSU9OIiwiTkFUSVZFX1NZTUJPTCIsIlVTRV9TWU1CT0xfQVNfVUlEIiwiaXNQcm90b3R5cGVPZiIsIlN0cmluZyIsImRlZmluZVByb3BlcnR5Iiwic3RvcmUiLCJTeW1ib2wiLCJoYXNPd24iLCJkb2N1bWVudCIsIkVYSVNUUyIsIkRFU0NSSVBUT1JTIiwiY3JlYXRlRWxlbWVudCIsIiRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJJRThfRE9NX0RFRklORSIsInByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlIiwiQ09ORklHVVJBQkxFIiwiVjhfUFJPVE9UWVBFX0RFRklORV9CVUciLCJkZWZpbmVQcm9wZXJ0eU1vZHVsZSIsIldlYWtNYXAiLCJoaWRkZW5LZXlzIiwiTkFUSVZFX1dFQUtfTUFQIiwic2hhcmVkIiwicmVxdWlyZSQkMCIsInJlcXVpcmUkJDEiLCJJbnRlcm5hbFN0YXRlTW9kdWxlIiwibWFrZUJ1aWx0SW4iLCJtaW4iLCJjcmVhdGVNZXRob2QiLCJwdXNoIiwiaW50ZXJuYWxPYmplY3RLZXlzIiwiY29uY2F0IiwiZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZSIsImdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSIsImlzRm9yY2VkIiwiSVRFUkFUT1IiLCJJdGVyYXRvcnMiLCJUT19TVFJJTkdfVEFHIiwiVE9fU1RSSU5HX1RBR19TVVBQT1JUIiwiQXJyYXkiLCIkIiwiZnJvbSIsImNoYXJBdCIsIklFX1BST1RPIiwiZGVmaW5lUHJvcGVydGllc01vZHVsZSIsIkNPUlJFQ1RfUFJPVE9UWVBFX0dFVFRFUiIsIkJVR0dZX1NBRkFSSV9JVEVSQVRPUlMiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwicmV0dXJuVGhpcyIsImNyZWF0ZSIsIkZ1bmN0aW9uTmFtZSIsIkl0ZXJhdG9yc0NvcmUiLCJzZXRQcm90b3R5cGVPZiIsImFzc2lnbiIsImdldFN1bVZhbHVlT2ZTdHlsZVJ1bGVzIiwiZWxlbWVudCIsInJ1bGVzIiwicmVkdWNlIiwic3VtIiwicnVsZSIsInBhcnNlSW50Iiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIlBvaW50IiwieCIsInkiLCJwIiwiayIsInBhcmVudCIsInBhcmVudE5vZGUiLCJlbGVtZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhcmVudFJlY3QiLCJsZWZ0IiwidG9wIiwiaXNDb250ZW50Qm94U2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiUmVjdGFuZ2xlIiwicG9zaXRpb24iLCJzaXplIiwiYWRkIiwibXVsdCIsInJlY3QiLCJNYXRoIiwibWF4Iiwic3ViIiwicmVjdGFuZ2xlIiwiaW5jbHVkZVBvaW50IiwiZ2V0UDMiLCJheGlzIiwic2VsQXhpcyIsImNyb3NzUmVjdGFuZ2xlIiwiYW5kIiwidGhpc0NlbnRlciIsImdldENlbnRlciIsInJlY3RDZW50ZXIiLCJzaWduIiwib2Zmc2V0IiwiZWwiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJpc0NvbnNpZGVyVHJhbnNsYXRlIiwiZWxlbWVudE9mZnNldCIsImVsZW1lbnRTaXplIiwiZ2V0RGVmYXVsdENvbnRhaW5lciIsImNvbnRhaW5lciIsInRhZ05hbWUiLCJFdmVudEVtaXR0ZXIiLCJvcHRpb25zIiwiZXZlbnRzIiwib24iLCJlbnRyaWVzIiwiZXZlbnROYW1lIiwiZm4iLCJpbnRlcnJ1cHRlZCIsImFyZ3MiLCJzbGljZSIsImFyZ3VtZW50cyIsImZ1bmMiLCJ1bnNoaWZ0IiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiZ2V0RGlzdGFuY2UiLCJwMSIsInAyIiwiZHgiLCJkeSIsInNxcnQiLCJnZXRYRGlmZmVyZW5jZSIsImFicyIsImdldFlEaWZmZXJlbmNlIiwidHJhbnNmb3JtZWRTcGFjZURpc3RhbmNlRmFjdG9yeSIsInBvdyIsImluZGV4T2ZOZWFyZXN0UG9pbnQiLCJhcnIiLCJ2YWwiLCJyYWRpdXMiLCJnZXREaXN0YW5jZUZ1bmMiLCJpIiwidGVtcCIsImxlbmd0aCIsImRpcmVjdENyb3NzaW5nIiwiTDFQMSIsIkwxUDIiLCJMMlAxIiwiTDJQMiIsImsxIiwiazIiLCJiMSIsImIyIiwiYm91bmRUb0xpbmUiLCJBIiwiQiIsIlAiLCJBUCIsIkFCIiwiYWIyIiwiYXBfYWIiLCJ0IiwiZ2V0UG9pbnRPbkxpbmVCeUxlbmdodCIsIkxQMSIsIkxQMiIsImxlbmdodCIsInBlcmNlbnQiLCJhZGRQb2ludFRvQm91bmRQb2ludHMiLCJib3VuZHBvaW50cyIsInBvaW50IiwiaXNSaWdodCIsInJlc3VsdCIsImZpbHRlciIsImJQb2ludCIsImdldEFuZ2xlRGlmZiIsImFscGhhIiwiYmV0YSIsIm1pbkFuZ2xlIiwibWF4QW5nbGUiLCJQSSIsImdldEFuZ2xlIiwiZGlmZiIsIm5vcm1hbGl6ZUFuZ2xlIiwiYXRhbjIiLCJib3VuZEFuZ2xlIiwiZG1pbiIsImRtYXgiLCJnZXRQb2ludEZyb21SYWRpYWxTeXN0ZW0iLCJhbmdsZSIsImNlbnRlciIsImNvcyIsInNpbiIsIkJvdW5kIiwiX3NpemUiLCJpbnN0YW5jZSIsImJvdW5kIiwiQm91bmRUb1JlY3RhbmdsZSIsImNhbGNQb2ludCIsImNsb25lIiwicmVjdFAyIiwiQm91bmRUb0VsZW1lbnQiLCJmcm9tRWxlbWVudCIsIkJvdW5kVG9MaW5lWCIsInN0YXJ0WSIsImVuZFkiLCJCb3VuZFRvTGluZVkiLCJzdGFydFgiLCJlbmRYIiwiQm91bmRUb0xpbmUiLCJzdGFydFBvaW50IiwiZW5kUG9pbnQiLCJzb21lSyIsImNvc0JldGEiLCJzaW5CZXRhIiwicG9pbnQyIiwibmV3RW5kUG9pbnQiLCJwb2ludENyb3NzaW5nIiwiQm91bmRUb0NpcmNsZSIsIkJvdW5kVG9BcmMiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJfc3RhcnRBbmdsZSIsIl9lbmRBbmdsZSIsImFycmF5IiwicmFuZ2UiLCJzdGFydCIsInN0b3AiLCJzdGVwIiwiQmFzaWNTdHJhdGVneSIsIk5vdENyb3NzaW5nU3RyYXRlZ3kiLCJyZWN0YW5nbGVMaXN0IiwiaW5kZXhlc09mTmV3cyIsInN0YXRpY1JlY3RhbmdsZUluZGV4ZXMiLCJpbmRleGVzIiwiX3JlY3QiLCJmb3JFYWNoIiwicmVtb3ZhYmxlIiwiaW5kZXhPZlN0YXRpYyIsInN0YXRpY1JlY3QiLCJtb3ZlVG9Cb3VuZCIsInNvbWUiLCJib3VuZFJlY3QiLCJnZXRTcXVhcmUiLCJvZGxEcmFnZ2FibGVzTGlzdCIsIm5ld0RyYWdnYWJsZXMiLCJpbmRleE9mTmV3cyIsImRyYWdnYWJsZXMiLCJkcmFnZ2FibGUiLCJGbG9hdExlZnRTdHJhdGVneSIsInBhZGRpbmdUb3BMZWZ0IiwicGFkZGluZ0JvdHRvbVJpZ2h0IiwieUdhcEJldHdlZW5EcmFnZ2FibGVzIiwiZ2V0UG9zaXRpb24iLCJfaW5kZXhlc09mTmV3cyIsImdldFAyIiwiYm91bmRhcnlQb2ludHMiLCJyZWN0SW5kZXgiLCJpc1ZhbGlkIiwibmV3TGlzdCIsImxpc3RPbGRQb3NpdGlvbiIsIm1hcCIsIm5ld0RyYWdnYWJsZSIsIkZsb2F0UmlnaHRTdHJhdGVneSIsInBhZGRpbmdUb3BSaWdodCIsInBhZGRpbmdCb3R0b21MZWZ0IiwicGFkZGluZ0JvdHRvbU5lZ0xlZnQiLCJnZXRQNCIsImFkZFRvRGVmYXVsdFNjb3BlIiwidGFyZ2V0IiwiZGVmYXVsdFNjb3BlIiwiYWRkVGFyZ2V0IiwiVGFyZ2V0IiwidGltZUVuZCIsInRpbWVFeGNhbmdlIiwicG9zaXRpb25pbmdTdHJhdGVneSIsInN0cmF0ZWd5IiwiZ2V0UmVjdGFuZ2xlIiwidGFyZ2V0cyIsImVtaXR0ZXIiLCJlbWl0Iiwic3RhcnRCb3VuZGluZyIsImluaXQiLCJib3VuZGluZyIsImluZGV4ZXNPZk5ldyIsInBvc2l0aW9uaW5nIiwib2xkRHJhZ2dhYmxlcyIsInNvcnRpbmciLCJyZWN0YW5nbGVzIiwiaW5uZXJEcmFnZ2FibGVzIiwic2V0UG9zaXRpb24iLCJjYXRjaERyYWdnYWJsZSIsInRhcmdldFJlY3RhbmdsZSIsImRyYWdnYWJsZVNxdWFyZSIsInNjb3BlcyIsInNjb3BlIiwicmVtb3ZlSXRlbSIsIm5ld0RyYWdnYWJsZXNJbmRleCIsImdldFNpemUiLCJhZGRSZW1vdmVPbk1vdmUiLCJ0aW1lIiwibW92ZSIsImluaXRpYWxQb3NpdGlvbiIsInB1c2hJbm5lckRyYWdnYWJsZSIsInJlbW92ZUhhbmRsZXIiLCJyZW1vdmUiLCJ1bnN1YnNjcmliZSIsIl9jb250YWluZXIiLCJTY29wZSIsImRyYWdFbmRBY3Rpb24iLCJvbkVuZCIsInNob3RUYXJnZXRzIiwic29ydCIsImEiLCJiIiwicGluUG9zaXRpb24iLCJyZXNldCIsInJlZnJlc2giLCJwb3NpdGlvbnMiLCJtZXNzYWdlIiwidGFyZ2V0SW5kZXhlcyIsImN1cnJlbnRTY29wZSIsImFkZERyYWdnYWJsZVRvU2NvcGUiLCJhZGREcmFnZ2FibGUiLCJEcmFnZ2FibGUiLCJpbnRlcnJ1cHQiLCJhZGRUYXJnZXRUb1Njb3BlIiwicHJlcGVuZE9uIiwiY2hlY2tTdXBwb3J0UGFzc2l2ZUV2ZW50cyIsInBhc3NpdmVTdXBwb3J0ZWQiLCJnZXQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9lcnIiLCJpc1N1cHBvcnRQYXNzaXZlRXZlbnRzIiwicGFzc2l2ZUZhbHNlIiwicGFzc2l2ZSIsImlzVG91Y2giLCJtb3VzZUV2ZW50cyIsImVuZCIsInRvdWNoRXZlbnRzIiwidHJhbnNmb3JtUHJvcGVydHkiLCJnZXRTdHlsZVByb3BlcnR5IiwidHJhbnNpdGlvblByb3BlcnR5IiwiZ2V0VG91Y2hCeUlEIiwidG91Y2hJZCIsImNoYW5nZWRUb3VjaGVzIiwiaWRlbnRpZmllciIsInByZXZlbnREb3VibGVJbml0IiwiZXhpc3RpbmciLCJjb3B5U3R5bGVzIiwic291cmNlIiwiZGVzdGluYXRpb24iLCJjcyIsImtleSIsImNoaWxkcmVuIiwiX2VuYWJsZSIsInN0YXJ0UG9zaXRpb25pbmciLCJzdGFydExpc3RlbmluZyIsIl9zZXREZWZhdWx0VHJhbnNpdGlvbiIsInBpbm5lZFBvc2l0aW9uIiwiX2RyYWdTdGFydCIsImV2ZW50IiwiZHJhZ1N0YXJ0IiwiX2RyYWdNb3ZlIiwiZHJhZ01vdmUiLCJfZHJhZ0VuZCIsImRyYWdFbmQiLCJfbmF0aXZlRHJhZ1N0YXJ0IiwibmF0aXZlRHJhZ1N0YXJ0IiwiX25hdGl2ZURyYWdPdmVyIiwibmF0aXZlRHJhZ092ZXIiLCJfbmF0aXZlRHJhZ0VuZCIsIm5hdGl2ZURyYWdFbmQiLCJfbmF0aXZlRHJvcCIsIm5hdGl2ZURyb3AiLCJfc2Nyb2xsIiwib25TY3JvbGwiLCJoYW5kbGVyIiwiX3RyYW5zZm9ybVBvc2l0aW9uIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25Dc3MiLCJ0ZXN0IiwicmVwbGFjZSIsInRyYW5zbGF0ZUNzcyIsInRyYW5zZm9ybSIsInNob3VsZFJlbW92ZVplcm9UcmFuc2xhdGUiLCJpc1NpbGVudCIsImRldGVybWluZURpcmVjdGlvbiIsIl9zZXRUcmFuc2l0aW9uIiwiX3NldFRyYW5zbGF0ZSIsInNpbGVudCIsImxlZnREaXJlY3Rpb24iLCJyaWdodERpcmVjdGlvbiIsInVwRGlyZWN0aW9uIiwiZG93bkRpcmVjdGlvbiIsImN1cnJlbnRFdmVudCIsImlzVG91Y2hFdmVudCIsIlRvdWNoRXZlbnQiLCJ0b3VjaFBvaW50IiwiX3N0YXJ0VG91Y2hQb2ludCIsInBhZ2VYIiwiY2xpZW50WCIsInBhZ2VZIiwiY2xpZW50WSIsIl9zdGFydFBvc2l0aW9uIiwiX3RvdWNoSWQiLCJfc3RhcnRTY3JvbGxQb2ludCIsInNjcm9sbFgiLCJzY3JvbGxZIiwic3RvcFByb3BhZ2F0aW9uIiwiSFRNTElucHV0RWxlbWVudCIsImZvY3VzIiwibmF0aXZlRHJhZ0FuZERyb3AiLCJwcmV2ZW50RGVmYXVsdCIsImVtdWxhdGVOYXRpdmVEcmFnQW5kRHJvcE9uVG91Y2giLCJlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3BPbkFsbERldmljZXMiLCJlbXVsYXRlT25GaXJzdE1vdmUiLCJlbXVsYXRlTmF0aXZlRHJhZ0FuZERyb3AiLCJjYW5jZWxFbXVsYXRpb24iLCJpc0RyYWdnaW5nIiwidG91Y2giLCJzY3JvbGxQb2ludCIsImNsYXNzTGlzdCIsInJlbW92ZUF0dHJpYnV0ZSIsInNldFRpbWVvdXQiLCJfZXZlbnQiLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwiZWZmZWN0QWxsb3dlZCIsImRyb3BFZmZlY3QiLCJjb250YWluZXJSZWN0IiwiY2xvbmVkRWxlbWVudCIsImNsb25lTm9kZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImVtdWxhdGlvbkRyYWdnYWJsZSIsImNvbnRhaW5lclJlY3RQb2ludCIsImRlc3Ryb3kiLCJyZW1vdmVDaGlsZCIsInJlc2V0RW1pdHRlciIsIl9oYW5kbGVyIiwiZW5hYmxlIiwiUmVzaXplT2JzZXJ2ZXIiLCJQb2x5ZmlsbCIsIkxpc3QiLCJjaGFuZ2VkRHVyaW5nSXRlcmF0aW9uIiwicmVzaXplT2JzZXJ2ZXIiLCJyZW9yZGVyT25DaGFuZ2UiLCJkIiwiaW5pdERyYWdnYWJsZSIsIm9uTW92ZSIsIm9ic2VydmUiLCJ1bm9ic2VydmUiLCJyZXNldE9uIiwic29ydGVkRHJhZ2dhYmxlcyIsImdldFNvcnRlZERyYWdnYWJsZXMiLCJwaW5uZWRQb3NpdGlvbnMiLCJjdXJyZW50SW5kZXgiLCJ0YXJnZXRJbmRleCIsImRpc3RhbmNlRnVuYyIsInJlb3JkZXJFbGVtZW50cyIsIm9yZGVyZWRFbGVtZW50cyIsImZyYWdtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsInJlc2V0UG9zaXRpb25Ub0luaXRpYWwiLCJpbml0aWFsUG9zaXRpb25zIiwibGlzdCIsInJlbGVhc2VEcmFnZ2FibGUiLCJqIiwiZHJhZ2dhYmxlQSIsImRyYWdnYWJsZUIiLCJnZXRDdXJyZW50UGlubmVkUG9zaXRpb25zIiwiY29udGFpbmVyRWxlbWVudCIsImVsZW1lbnRzIiwiYXJyYXlNb3ZlIiwidG8iLCJ0aGlzIiwiQnViYmxpbmdMaXN0IiwiYXV0b0RldGVjdFZlcnRpY2FsR2FwIiwic29ydGVkIiwidmVydGljYWxHYXAiLCJzdGFydFBvc2l0aW9uIiwiYnViYmxpbmciLCJjdXJyZW50RHJhZ2dhYmxlIiwiY3VycmVudFBvc2l0aW9uIiwiY29tcGFyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0NBQUEsSUFBSSxLQUFLLEdBQUcsVUFBVSxFQUFFLEVBQUU7R0FDeEIsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDO0VBQ3BDLENBQUM7OztDQUdGLElBQWMsUUFBQTs7Q0FFWixFQUFBLEtBQUssQ0FBQyxPQUFPLFVBQVUsSUFBSSxRQUFRLElBQUksVUFBVSxDQUFDO0NBQ2xELEVBQUEsS0FBSyxDQUFDLE9BQU8sTUFBTSxJQUFJLFFBQVEsSUFBSSxNQUFNLENBQUM7O0NBRTFDLEVBQUEsS0FBSyxDQUFDLE9BQU8sSUFBSSxJQUFJLFFBQVEsSUFBSSxJQUFJLENBQUM7Q0FDdEMsRUFBQSxLQUFLLENBQUMsT0FBT0EsY0FBTSxJQUFJLFFBQVEsSUFBSUEsY0FBTSxDQUFDOztDQUUxQyxFQUFBLENBQUMsWUFBWSxFQUFFLE9BQU8sSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRTs7Q0NiL0QsSUFBYyxLQUFBLEdBQUcsVUFBVSxJQUFJLEVBQUU7R0FDL0IsSUFBSTtDQUNGLElBQUEsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakIsQ0FBQyxPQUFPLEtBQUssRUFBRTtDQUNkLElBQUEsT0FBTyxJQUFJLENBQUM7Q0FDYixHQUFBO0VBQ0Y7O0NDSkQ7Q0FDQSxJQUFBLFdBQWMsR0FBRyxDQUFDLEtBQUssQ0FB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LENBQUM7Q0FDdEMsSUFBSSxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLGVBQWUsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7Q0FDMUUsSUFBSSxJQUFJLGFBQWEsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsU0FBUyxLQUFLLFlBQVksQ0FBQztDQUM3RCxJQUFJLElBQUksV0FBVyxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUMsQ0FBQztDQUNoRSxJQUFJLElBQUksbUJBQW1CLEdBQUcsQ0FBQyxHQUFHLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0NBQzVFLElBQUksSUFBSSxxQkFBcUIsR0FBRyxDQUFDLEdBQUcsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLENBQUM7Q0FDOUUsSUFBSSxJQUFJLFVBQVUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7Q0FDN0QsSUFBSSxJQUFJLFlBQVksR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUM7Q0FDakUsSUFBSSxJQUFJLGFBQWEsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7Q0FDbkUsSUFBSSxJQUFJLFdBQVcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7Q0FDL0QsSUFBSSxJQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUM7Q0FDaEUsSUFBSSxJQUFJLFdBQVcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFH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
