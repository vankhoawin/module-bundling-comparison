System.register("src_direct/file1.js", ["lodash/get"], function($__export) {
  "use strict";
  var get;
  function fn1() {
    var result = get({a: 'fn1'}, 'a');
    console.log(result);
  }
  $__export("fn1", fn1);
  return {
    setters: [function($__m) {
      get = $__m.default;
    }],
    execute: function() {}
  };
});

System.register("src_direct/file2.js", ["lodash/get"], function($__export) {
  "use strict";
  var get;
  function fn2() {
    var result = get({a: 'fn2'}, 'a');
    console.log(result);
  }
  $__export("fn2", fn2);
  return {
    setters: [function($__m) {
      get = $__m.default;
    }],
    execute: function() {}
  };
});

System.register("src_direct/file3.js", ["lodash/get"], function($__export) {
  "use strict";
  var get;
  function fn3() {
    var result = get({a: 'fn3'}, 'a');
    console.log(result);
  }
  $__export("fn3", fn3);
  return {
    setters: [function($__m) {
      get = $__m.default;
    }],
    execute: function() {}
  };
});

System.register("src_direct/file4.js", ["lodash/get"], function($__export) {
  "use strict";
  var get;
  function fn4() {
    var result = get({a: 'fn4'}, 'a');
    console.log(result);
  }
  $__export("fn4", fn4);
  return {
    setters: [function($__m) {
      get = $__m.default;
    }],
    execute: function() {}
  };
});

System.register("src_direct/file5.js", ["lodash/get"], function($__export) {
  "use strict";
  var get;
  function fn5() {
    var result = get({a: 'fn5'}, 'a');
    console.log(result);
  }
  $__export("fn5", fn5);
  return {
    setters: [function($__m) {
      get = $__m.default;
    }],
    execute: function() {}
  };
});

System.register("src_direct/file6.js", ["lodash/get"], function($__export) {
  "use strict";
  var get;
  function fn6() {
    var result = get({a: 'fn6'}, 'a');
    console.log(result);
  }
  $__export("fn6", fn6);
  return {
    setters: [function($__m) {
      get = $__m.default;
    }],
    execute: function() {}
  };
});

System.register("src_direct/file7.js", ["lodash/get"], function($__export) {
  "use strict";
  var get;
  function fn7() {
    var result = get({a: 'fn7'}, 'a');
    console.log(result);
  }
  $__export("fn7", fn7);
  return {
    setters: [function($__m) {
      get = $__m.default;
    }],
    execute: function() {}
  };
});

System.registerDynamic('npm:lodash@4.16.3/_hashClear.js', ['./_nativeCreate'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  var nativeCreate = $__require('./_nativeCreate');

  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
  }

  module.exports = hashClear;
  return module.exports;
});
System.registerDynamic("npm:lodash@4.16.3/_hashDelete.js", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }

  module.exports = hashDelete;
  return module.exports;
});
System.registerDynamic('npm:lodash@4.16.3/_hashGet.js', ['./_nativeCreate'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  var nativeCreate = $__require('./_nativeCreate');

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : undefined;
  }

  module.exports = hashGet;
  return module.exports;
});
System.registerDynamic('npm:lodash@4.16.3/_hashHas.js', ['./_nativeCreate'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  var nativeCreate = $__require('./_nativeCreate');

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
  }

  module.exports = hashHas;
  return module.exports;
});
System.registerDynamic('npm:lodash@4.16.3/_nativeCreate.js', ['./_getNative'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  var getNative = $__require('./_getNative');

  /* Built-in method references that are verified to be native. */
  var nativeCreate = getNative(Object, 'create');

  module.exports = nativeCreate;
  return module.exports;
});
System.registerDynamic('npm:lodash@4.16.3/_hashSet.js', ['./_nativeCreate'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  var nativeCreate = $__require('./_nativeCreate');

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
    return this;
  }

  module.exports = hashSet;
  return module.exports;
});
System.registerDynamic('npm:lodash@4.16.3/_Hash.js', ['./_hashClear', './_hashDelete', './_hashGet', './_hashHas', './_hashSet'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    var hashClear = $__require('./_hashClear'),
        hashDelete = $__require('./_hashDelete'),
        hashGet = $__require('./_hashGet'),
        hashHas = $__require('./_hashHas'),
        hashSet = $__require('./_hashSet');

    /**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function Hash(entries) {
        var index = -1,
            length = entries ? entries.length : 0;

        this.clear();
        while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
        }
    }

    // Add methods to `Hash`.
    Hash.prototype.clear = hashClear;
    Hash.prototype['delete'] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;

    module.exports = Hash;
    return module.exports;
});
System.registerDynamic("npm:lodash@4.16.3/_listCacheClear.js", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }

  module.exports = listCacheClear;
  return module.exports;
});
System.registerDynamic('npm:lodash@4.16.3/_listCacheDelete.js', ['./_assocIndexOf'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  var assocIndexOf = $__require('./_assocIndexOf');

  /** Used for built-in method references. */
  var arrayProto = Array.prototype;

  /** Built-in value references. */
  var splice = arrayProto.splice;

  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function listCacheDelete(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }

  module.exports = listCacheDelete;
  return module.exports;
});
System.registerDynamic('npm:lodash@4.16.3/_listCacheGet.js', ['./_assocIndexOf'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  var assocIndexOf = $__require('./_assocIndexOf');

  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function listCacheGet(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    return index < 0 ? undefined : data[index][1];
  }

  module.exports = listCacheGet;
  return module.exports;
});
System.registerDynamic('npm:lodash@4.16.3/_listCacheHas.js', ['./_assocIndexOf'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  var assocIndexOf = $__require('./_assocIndexOf');

  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }

  module.exports = listCacheHas;
  return module.exports;
});
System.registerDynamic("npm:lodash@4.16.3/eq.js", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */
  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }

  module.exports = eq;
  return module.exports;
});
System.registerDynamic('npm:lodash@4.16.3/_assocIndexOf.js', ['./eq'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  var eq = $__require('./eq');

  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }

  module.exports = assocIndexOf;
  return module.exports;
});
System.registerDynamic('npm:lodash@4.16.3/_listCacheSet.js', ['./_assocIndexOf'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  var assocIndexOf = $__require('./_assocIndexOf');

  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */
  function listCacheSet(key, value) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }

  module.exports = listCacheSet;
  return module.exports;
});
System.registerDynamic('npm:lodash@4.16.3/_ListCache.js', ['./_listCacheClear', './_listCacheDelete', './_listCacheGet', './_listCacheHas', './_listCacheSet'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    var listCacheClear = $__require('./_listCacheClear'),
        listCacheDelete = $__require('./_listCacheDelete'),
        listCacheGet = $__require('./_listCacheGet'),
        listCacheHas = $__require('./_listCacheHas'),
        listCacheSet = $__require('./_listCacheSet');

    /**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function ListCache(entries) {
        var index = -1,
            length = entries ? entries.length : 0;

        this.clear();
        while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
        }
    }

    // Add methods to `ListCache`.
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype['delete'] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;

    module.exports = ListCache;
    return module.exports;
});
System.registerDynamic('npm:lodash@4.16.3/isFunction.js', ['./isObject'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  var isObject = $__require('./isObject');

  /** `Object#toString` result references. */
  var funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      proxyTag = '[object Proxy]';

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var objectToString = objectProto.toString;

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction(value) {
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 8-9 which returns 'object' for typed array and other constructors.
    var tag = isObject(value) ? objectToString.call(value) : '';
    return tag == funcTag || tag == genTag || tag == proxyTag;
  }

  module.exports = isFunction;
  return module.exports;
});
System.registerDynamic('npm:lodash@4.16.3/_coreJsData.js', ['./_root'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  var root = $__require('./_root');

  /** Used to detect overreaching core-js shims. */
  var coreJsData = root['__core-js_shared__'];

  module.exports = coreJsData;
  return module.exports;
});
System.registerDynamic('npm:lodash@4.16.3/_isMasked.js', ['./_coreJsData'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  var coreJsData = $__require('./_coreJsData');

  /** Used to detect methods masquerading as native. */
  var maskSrcKey = function () {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
    return uid ? 'Symbol(src)_1.' + uid : '';
  }();

  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }

  module.exports = isMasked;
  return module.exports;
});
System.registerDynamic('npm:lodash@4.16.3/isObject.js', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }

  module.exports = isObject;
  return module.exports;
});
System.registerDynamic('npm:lodash@4.16.3/_toSource.js', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /** Used for built-in method references. */
  var funcProto = Function.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to process.
   * @returns {string} Returns the source code.
   */
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {}
      try {
        return func + '';
      } catch (e) {}
    }
    return '';
  }

  module.exports = toSource;
  return module.exports;
});
System.registerDynamic('npm:lodash@4.16.3/_baseIsNative.js', ['./isFunction', './_isMasked', './isObject', './_toSource'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  var isFunction = $__require('./isFunction'),
      isMasked = $__require('./_isMasked'),
      isObject = $__require('./isObject'),
      toSource = $__require('./_toSource');

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used for built-in method references. */
  var funcProto = Function.prototype,
      objectProto = Object.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /** Used to detect if a method is native. */
  var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }

  module.exports = baseIsNative;
  return module.exports;
});
System.registerDynamic("npm:lodash@4.16.3/_getValue.js", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  module.exports = getValue;
  return module.exports;
});
System.registerDynamic('npm:lodash@4.16.3/_getNative.js', ['./_baseIsNative', './_getValue'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  var baseIsNative = $__require('./_baseIsNative'),
      getValue = $__require('./_getValue');

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
  }

  module.exports = getNative;
  return module.exports;
});
System.registerDynamic('npm:lodash@4.16.3/_Map.js', ['./_getNative', './_root'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    var getNative = $__require('./_getNative'),
        root = $__require('./_root');

    /* Built-in method references that are verified to be native. */
    var Map = getNative(root, 'Map');

    module.exports = Map;
    return module.exports;
});
System.registerDynamic('npm:lodash@4.16.3/_mapCacheClear.js', ['./_Hash', './_ListCache', './_Map'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  var Hash = $__require('./_Hash'),
      ListCache = $__require('./_ListCache'),
      Map = $__require('./_Map');

  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      'hash': new Hash(),
      'map': new (Map || ListCache)(),
      'string': new Hash()
    };
  }

  module.exports = mapCacheClear;
  return module.exports;
});
System.registerDynamic('npm:lodash@4.16.3/_mapCacheDelete.js', ['./_getMapData'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  var getMapData = $__require('./_getMapData');

  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function mapCacheDelete(key) {
    var result = getMapData(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
  }

  module.exports = mapCacheDelete;
  return module.exports;
});
System.registerDynamic('npm:lodash@4.16.3/_mapCacheGet.js', ['./_getMapData'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  var getMapData = $__require('./_getMapData');

  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }

  module.exports = mapCacheGet;
  return module.exports;
});
System.registerDynamic('npm:lodash@4.16.3/_mapCacheHas.js', ['./_getMapData'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  var getMapData = $__require('./_getMapData');

  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }

  module.exports = mapCacheHas;
  return module.exports;
});
System.registerDynamic('npm:lodash@4.16.3/_isKeyable.js', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */
  function isKeyable(value) {
    var type = typeof value;
    return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
  }

  module.exports = isKeyable;
  return module.exports;
});
System.registerDynamic('npm:lodash@4.16.3/_getMapData.js', ['./_isKeyable'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  var isKeyable = $__require('./_isKeyable');

  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
  }

  module.exports = getMapData;
  return module.exports;
});
System.registerDynamic('npm:lodash@4.16.3/_mapCacheSet.js', ['./_getMapData'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  var getMapData = $__require('./_getMapData');

  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */
  function mapCacheSet(key, value) {
    var data = getMapData(this, key),
        size = data.size;

    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }

  module.exports = mapCacheSet;
  return module.exports;
});
System.registerDynamic('npm:lodash@4.16.3/_MapCache.js', ['./_mapCacheClear', './_mapCacheDelete', './_mapCacheGet', './_mapCacheHas', './_mapCacheSet'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    var mapCacheClear = $__require('./_mapCacheClear'),
        mapCacheDelete = $__require('./_mapCacheDelete'),
        mapCacheGet = $__require('./_mapCacheGet'),
        mapCacheHas = $__require('./_mapCacheHas'),
        mapCacheSet = $__require('./_mapCacheSet');

    /**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
    function MapCache(entries) {
        var index = -1,
            length = entries ? entries.length : 0;

        this.clear();
        while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
        }
    }

    // Add methods to `MapCache`.
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype['delete'] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;

    module.exports = MapCache;
    return module.exports;
});
System.registerDynamic('npm:lodash@4.16.3/memoize.js', ['./_MapCache'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  var MapCache = $__require('./_MapCache');

  /** Error message constants. */
  var FUNC_ERROR_TEXT = 'Expected a function';

  /**
   * Creates a function that memoizes the result of `func`. If `resolver` is
   * provided, it determines the cache key for storing the result based on the
   * arguments provided to the memoized function. By default, the first argument
   * provided to the memoized function is used as the map cache key. The `func`
   * is invoked with the `this` binding of the memoized function.
   *
   * **Note:** The cache is exposed as the `cache` property on the memoized
   * function. Its creation may be customized by replacing the `_.memoize.Cache`
   * constructor with one whose instances implement the
   * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
   * method interface of `delete`, `get`, `has`, and `set`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to have its output memoized.
   * @param {Function} [resolver] The function to resolve the cache key.
   * @returns {Function} Returns the new memoized function.
   * @example
   *
   * var object = { 'a': 1, 'b': 2 };
   * var other = { 'c': 3, 'd': 4 };
   *
   * var values = _.memoize(_.values);
   * values(object);
   * // => [1, 2]
   *
   * values(other);
   * // => [3, 4]
   *
   * object.a = 2;
   * values(object);
   * // => [1, 2]
   *
   * // Modify the result cache.
   * values.cache.set(object, ['a', 'b']);
   * values(object);
   * // => ['a', 'b']
   *
   * // Replace `_.memoize.Cache`.
   * _.memoize.Cache = WeakMap;
   */
  function memoize(func, resolver) {
    if (typeof func != 'function' || resolver && typeof resolver != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    var memoized = function () {
      var args = arguments,
          key = resolver ? resolver.apply(this, args) : args[0],
          cache = memoized.cache;

      if (cache.has(key)) {
        return cache.get(key);
      }
      var result = func.apply(this, args);
      memoized.cache = cache.set(key, result) || cache;
      return result;
    };
    memoized.cache = new (memoize.Cache || MapCache)();
    return memoized;
  }

  // Expose `MapCache`.
  memoize.Cache = MapCache;

  module.exports = memoize;
  return module.exports;
});
System.registerDynamic('npm:lodash@4.16.3/_memoizeCapped.js', ['./memoize'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  var memoize = $__require('./memoize');

  /** Used as the maximum memoize cache size. */
  var MAX_MEMOIZE_SIZE = 500;

  /**
   * A specialized version of `_.memoize` which clears the memoized function's
   * cache when it exceeds `MAX_MEMOIZE_SIZE`.
   *
   * @private
   * @param {Function} func The function to have its output memoized.
   * @returns {Function} Returns the new memoized function.
   */
  function memoizeCapped(func) {
    var result = memoize(func, function (key) {
      if (cache.size === MAX_MEMOIZE_SIZE) {
        cache.clear();
      }
      return key;
    });

    var cache = result.cache;
    return result;
  }

  module.exports = memoizeCapped;
  return module.exports;
});
System.registerDynamic('npm:lodash@4.16.3/_freeGlobal.js', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

  module.exports = freeGlobal;
  return module.exports;
});
System.registerDynamic('npm:lodash@4.16.3/_root.js', ['./_freeGlobal'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  var freeGlobal = $__require('./_freeGlobal');

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  module.exports = root;
  return module.exports;
});
System.registerDynamic('npm:lodash@4.16.3/_Symbol.js', ['./_root'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  var root = $__require('./_root');

  /** Built-in value references. */
  var Symbol = root.Symbol;

  module.exports = Symbol;
  return module.exports;
});
System.registerDynamic('npm:lodash@4.16.3/_baseToString.js', ['./_Symbol', './isSymbol'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  var Symbol = $__require('./_Symbol'),
      isSymbol = $__require('./isSymbol');

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0;

  /** Used to convert symbols to primitives and strings. */
  var symbolProto = Symbol ? Symbol.prototype : undefined,
      symbolToString = symbolProto ? symbolProto.toString : undefined;

  /**
   * The base implementation of `_.toString` which doesn't convert nullish
   * values to empty strings.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   */
  function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') {
      return value;
    }
    if (isSymbol(value)) {
      return symbolToString ? symbolToString.call(value) : '';
    }
    var result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
  }

  module.exports = baseToString;
  return module.exports;
});
System.registerDynamic('npm:lodash@4.16.3/toString.js', ['./_baseToString'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  var baseToString = $__require('./_baseToString');

  /**
   * Converts `value` to a string. An empty string is returned for `null`
   * and `undefined` values. The sign of `-0` is preserved.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   * @example
   *
   * _.toString(null);
   * // => ''
   *
   * _.toString(-0);
   * // => '-0'
   *
   * _.toString([1, 2, 3]);
   * // => '1,2,3'
   */
  function toString(value) {
    return value == null ? '' : baseToString(value);
  }

  module.exports = toString;
  return module.exports;
});
System.registerDynamic('npm:lodash@4.16.3/_stringToPath.js', ['./_memoizeCapped', './toString'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  var memoizeCapped = $__require('./_memoizeCapped'),
      toString = $__require('./toString');

  /** Used to match property names within property paths. */
  var reLeadingDot = /^\./,
      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /**
   * Converts `string` to a property path array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the property path array.
   */
  var stringToPath = memoizeCapped(function (string) {
    string = toString(string);

    var result = [];
    if (reLeadingDot.test(string)) {
      result.push('');
    }
    string.replace(rePropName, function (match, number, quote, string) {
      result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
    });
    return result;
  });

  module.exports = stringToPath;
  return module.exports;
});
System.registerDynamic('npm:lodash@4.16.3/_castPath.js', ['./isArray', './_stringToPath'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  var isArray = $__require('./isArray'),
      stringToPath = $__require('./_stringToPath');

  /**
   * Casts `value` to a path array if it's not one.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {Array} Returns the cast property path array.
   */
  function castPath(value) {
    return isArray(value) ? value : stringToPath(value);
  }

  module.exports = castPath;
  return module.exports;
});
System.registerDynamic("npm:lodash@4.16.3/isArray.js", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */
  var isArray = Array.isArray;

  module.exports = isArray;
  return module.exports;
});
System.registerDynamic('npm:lodash@4.16.3/_isKey.js', ['./isArray', './isSymbol'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  var isArray = $__require('./isArray'),
      isSymbol = $__require('./isSymbol');

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/;

  /**
   * Checks if `value` is a property name and not a property path.
   *
   * @private
   * @param {*} value The value to check.
   * @param {Object} [object] The object to query keys on.
   * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
   */
  function isKey(value, object) {
    if (isArray(value)) {
      return false;
    }
    var type = typeof value;
    if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
      return true;
    }
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
  }

  module.exports = isKey;
  return module.exports;
});
System.registerDynamic('npm:lodash@4.16.3/isObjectLike.js', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return value != null && typeof value == 'object';
  }

  module.exports = isObjectLike;
  return module.exports;
});
System.registerDynamic('npm:lodash@4.16.3/isSymbol.js', ['./isObjectLike'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  var isObjectLike = $__require('./isObjectLike');

  /** `Object#toString` result references. */
  var symbolTag = '[object Symbol]';

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var objectToString = objectProto.toString;

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol(value) {
    return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
  }

  module.exports = isSymbol;
  return module.exports;
});
System.registerDynamic('npm:lodash@4.16.3/_toKey.js', ['./isSymbol'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  var isSymbol = $__require('./isSymbol');

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0;

  /**
   * Converts `value` to a string key if it's not a string or symbol.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {string|symbol} Returns the key.
   */
  function toKey(value) {
    if (typeof value == 'string' || isSymbol(value)) {
      return value;
    }
    var result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
  }

  module.exports = toKey;
  return module.exports;
});
System.registerDynamic('npm:lodash@4.16.3/_baseGet.js', ['./_castPath', './_isKey', './_toKey'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  var castPath = $__require('./_castPath'),
      isKey = $__require('./_isKey'),
      toKey = $__require('./_toKey');

  /**
   * The base implementation of `_.get` without support for default values.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @returns {*} Returns the resolved value.
   */
  function baseGet(object, path) {
    path = isKey(path, object) ? [path] : castPath(path);

    var index = 0,
        length = path.length;

    while (object != null && index < length) {
      object = object[toKey(path[index++])];
    }
    return index && index == length ? object : undefined;
  }

  module.exports = baseGet;
  return module.exports;
});
System.registerDynamic("npm:lodash@4.16.3.json", [], false, function() {
  return {
    "main": "lodash.js",
    "map": {
      "buffer": "@empty",
      "process": "@empty"
    },
    "format": "cjs",
    "meta": {
      "*.json": {
        "format": "json"
      }
    }
  };
});

System.registerDynamic('npm:lodash@4.16.3/get.js', ['./_baseGet'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  var baseGet = $__require('./_baseGet');

  /**
   * Gets the value at `path` of `object`. If the resolved value is
   * `undefined`, the `defaultValue` is returned in its place.
   *
   * @static
   * @memberOf _
   * @since 3.7.0
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @param {*} [defaultValue] The value returned for `undefined` resolved values.
   * @returns {*} Returns the resolved value.
   * @example
   *
   * var object = { 'a': [{ 'b': { 'c': 3 } }] };
   *
   * _.get(object, 'a[0].b.c');
   * // => 3
   *
   * _.get(object, ['a', '0', 'b', 'c']);
   * // => 3
   *
   * _.get(object, 'a.b.c', 'default');
   * // => 'default'
   */
  function get(object, path, defaultValue) {
    var result = object == null ? undefined : baseGet(object, path);
    return result === undefined ? defaultValue : result;
  }

  module.exports = get;
  return module.exports;
});
System.register("src_direct/file10.js", ["lodash/get"], function($__export) {
  "use strict";
  var get;
  function fn10() {
    var result = get({a: 'fn10'}, 'a');
    console.log(result);
  }
  $__export("fn10", fn10);
  return {
    setters: [function($__m) {
      get = $__m.default;
    }],
    execute: function() {}
  };
});

System.register("src_direct/file9.js", ["lodash/get", "./file10.js"], function($__export) {
  "use strict";
  var get,
      fn10;
  function fn9() {
    var result = get({a: 'fn9'}, 'a');
    console.log(result);
  }
  $__export("fn9", fn9);
  return {
    setters: [function($__m) {
      get = $__m.default;
    }, function($__m) {
      fn10 = $__m.fn10;
    }],
    execute: function() {}
  };
});

System.register("src_direct/file8.js", ["lodash/get", "./file9.js"], function($__export) {
  "use strict";
  var get,
      fn9;
  function fn8() {
    var result = get({a: 'fn8'}, 'a');
    console.log(result);
    fn9();
  }
  $__export("fn8", fn8);
  return {
    setters: [function($__m) {
      get = $__m.default;
    }, function($__m) {
      fn9 = $__m.fn9;
    }],
    execute: function() {}
  };
});

System.register("src_direct/index.js", ["./file1.js", "./file2.js", "./file3.js", "./file4.js", "./file5.js", "./file6.js", "./file7.js", "./file8.js"], function($__export) {
  "use strict";
  var fn1,
      fn2,
      fn3,
      fn4,
      fn5,
      fn6,
      fn7,
      fn8;
  return {
    setters: [function($__m) {
      fn1 = $__m.fn1;
    }, function($__m) {
      fn2 = $__m.fn2;
    }, function($__m) {
      fn3 = $__m.fn3;
    }, function($__m) {
      fn4 = $__m.fn4;
    }, function($__m) {
      fn5 = $__m.fn5;
    }, function($__m) {
      fn6 = $__m.fn6;
    }, function($__m) {
      fn7 = $__m.fn7;
    }, function($__m) {
      fn8 = $__m.fn8;
    }],
    execute: function() {
      fn1();
      fn2();
      fn3();
      fn4();
      fn5();
      fn6();
      fn7();
      fn8();
    }
  };
});
