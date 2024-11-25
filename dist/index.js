(() => {
  // bin/live-reload.js
  new EventSource(`http://localhost:3000/esbuild`).addEventListener(
    "change",
    () => location.reload()
  );

  // node_modules/split-type/dist/index.js
  (function() {
    function append() {
      var length = arguments.length;
      for (var i2 = 0; i2 < length; i2++) {
        var node = i2 < 0 || arguments.length <= i2 ? void 0 : arguments[i2];
        if (node.nodeType === 1 || node.nodeType === 11) this.appendChild(node);
        else this.appendChild(document.createTextNode(String(node)));
      }
    }
    function replaceChildren() {
      while (this.lastChild) {
        this.removeChild(this.lastChild);
      }
      if (arguments.length) this.append.apply(this, arguments);
    }
    function replaceWith() {
      var parent = this.parentNode;
      for (var _len = arguments.length, nodes = new Array(_len), _key = 0; _key < _len; _key++) {
        nodes[_key] = arguments[_key];
      }
      var i2 = nodes.length;
      if (!parent) return;
      if (!i2) parent.removeChild(this);
      while (i2--) {
        var node = nodes[i2];
        if (typeof node !== "object") {
          node = this.ownerDocument.createTextNode(node);
        } else if (node.parentNode) {
          node.parentNode.removeChild(node);
        }
        if (!i2) {
          parent.replaceChild(node, this);
        } else {
          parent.insertBefore(this.previousSibling, node);
        }
      }
    }
    if (typeof Element !== "undefined") {
      if (!Element.prototype.append) {
        Element.prototype.append = append;
        DocumentFragment.prototype.append = append;
      }
      if (!Element.prototype.replaceChildren) {
        Element.prototype.replaceChildren = replaceChildren;
        DocumentFragment.prototype.replaceChildren = replaceChildren;
      }
      if (!Element.prototype.replaceWith) {
        Element.prototype.replaceWith = replaceWith;
        DocumentFragment.prototype.replaceWith = replaceWith;
      }
    }
  })();
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i2 = 0; i2 < props.length; i2++) {
      var descriptor = props[i2];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      if (i2 % 2) {
        ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _slicedToArray(arr, i2) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i2) || _unsupportedIterableToArray(arr, i2) || _nonIterableRest();
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
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }
  function _iterableToArrayLimit(arr, i2) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = void 0;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i2 && _arr.length === i2) break;
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
    for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) arr2[i2] = arr[i2];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function extend(target, object) {
    return Object.getOwnPropertyNames(Object(target)).reduce(function(extended, key) {
      var currentValue = Object.getOwnPropertyDescriptor(Object(target), key);
      var newValue = Object.getOwnPropertyDescriptor(Object(object), key);
      return Object.defineProperty(extended, key, newValue || currentValue);
    }, {});
  }
  function isString(value) {
    return typeof value === "string";
  }
  function isArray(value) {
    return Array.isArray(value);
  }
  function parseSettings() {
    var settings = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var object = extend(settings);
    var types;
    if (object.types !== void 0) {
      types = object.types;
    } else if (object.split !== void 0) {
      types = object.split;
    }
    if (types !== void 0) {
      object.types = (isString(types) || isArray(types) ? String(types) : "").split(",").map(function(type) {
        return String(type).trim();
      }).filter(function(type) {
        return /((line)|(word)|(char))/i.test(type);
      });
    }
    if (object.absolute || object.position) {
      object.absolute = object.absolute || /absolute/.test(settings.position);
    }
    return object;
  }
  function parseTypes(value) {
    var types = isString(value) || isArray(value) ? String(value) : "";
    return {
      none: !types,
      lines: /line/i.test(types),
      words: /word/i.test(types),
      chars: /char/i.test(types)
    };
  }
  function isObject(value) {
    return value !== null && typeof value === "object";
  }
  function isNode(input) {
    return isObject(input) && /^(1|3|11)$/.test(input.nodeType);
  }
  function isLength(value) {
    return typeof value === "number" && value > -1 && value % 1 === 0;
  }
  function isArrayLike(value) {
    return isObject(value) && isLength(value.length);
  }
  function toArray(value) {
    if (isArray(value)) return value;
    if (value == null) return [];
    return isArrayLike(value) ? Array.prototype.slice.call(value) : [value];
  }
  function getTargetElements(target) {
    var elements = target;
    if (isString(target)) {
      if (/^(#[a-z]\w+)$/.test(target.trim())) {
        elements = document.getElementById(target.trim().slice(1));
      } else {
        elements = document.querySelectorAll(target);
      }
    }
    return toArray(elements).reduce(function(result, element) {
      return [].concat(_toConsumableArray(result), _toConsumableArray(toArray(element).filter(isNode)));
    }, []);
  }
  var entries = Object.entries;
  var expando = "_splittype";
  var cache = {};
  var uid = 0;
  function set(owner, key, value) {
    if (!isObject(owner)) {
      console.warn("[data.set] owner is not an object");
      return null;
    }
    var id = owner[expando] || (owner[expando] = ++uid);
    var data = cache[id] || (cache[id] = {});
    if (value === void 0) {
      if (!!key && Object.getPrototypeOf(key) === Object.prototype) {
        cache[id] = _objectSpread2(_objectSpread2({}, data), key);
      }
    } else if (key !== void 0) {
      data[key] = value;
    }
    return value;
  }
  function get(owner, key) {
    var id = isObject(owner) ? owner[expando] : null;
    var data = id && cache[id] || {};
    if (key === void 0) {
      return data;
    }
    return data[key];
  }
  function remove(element) {
    var id = element && element[expando];
    if (id) {
      delete element[id];
      delete cache[id];
    }
  }
  function clear() {
    Object.keys(cache).forEach(function(key) {
      delete cache[key];
    });
  }
  function cleanup() {
    entries(cache).forEach(function(_ref) {
      var _ref2 = _slicedToArray(_ref, 2), id = _ref2[0], _ref2$ = _ref2[1], isRoot = _ref2$.isRoot, isSplit = _ref2$.isSplit;
      if (!isRoot || !isSplit) {
        cache[id] = null;
        delete cache[id];
      }
    });
  }
  function toWords(value) {
    var separator = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : " ";
    var string = value ? String(value) : "";
    return string.trim().replace(/\s+/g, " ").split(separator);
  }
  var rsAstralRange = "\\ud800-\\udfff";
  var rsComboMarksRange = "\\u0300-\\u036f\\ufe20-\\ufe23";
  var rsComboSymbolsRange = "\\u20d0-\\u20f0";
  var rsVarRange = "\\ufe0e\\ufe0f";
  var rsAstral = "[".concat(rsAstralRange, "]");
  var rsCombo = "[".concat(rsComboMarksRange).concat(rsComboSymbolsRange, "]");
  var rsFitz = "\\ud83c[\\udffb-\\udfff]";
  var rsModifier = "(?:".concat(rsCombo, "|").concat(rsFitz, ")");
  var rsNonAstral = "[^".concat(rsAstralRange, "]");
  var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
  var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
  var rsZWJ = "\\u200d";
  var reOptMod = "".concat(rsModifier, "?");
  var rsOptVar = "[".concat(rsVarRange, "]?");
  var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
  var rsSeq = rsOptVar + reOptMod + rsOptJoin;
  var rsSymbol = "(?:".concat(["".concat(rsNonAstral).concat(rsCombo, "?"), rsCombo, rsRegional, rsSurrPair, rsAstral].join("|"), "\n)");
  var reUnicode = RegExp("".concat(rsFitz, "(?=").concat(rsFitz, ")|").concat(rsSymbol).concat(rsSeq), "g");
  var unicodeRange = [rsZWJ, rsAstralRange, rsComboMarksRange, rsComboSymbolsRange, rsVarRange];
  var reHasUnicode = RegExp("[".concat(unicodeRange.join(""), "]"));
  function asciiToArray(string) {
    return string.split("");
  }
  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }
  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }
  function stringToArray(string) {
    return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
  }
  function toString(value) {
    return value == null ? "" : String(value);
  }
  function toChars(string) {
    var separator = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    string = toString(string);
    if (string && isString(string)) {
      if (!separator && hasUnicode(string)) {
        return stringToArray(string);
      }
    }
    return string.split(separator);
  }
  function createElement(name, attributes) {
    var element = document.createElement(name);
    if (!attributes) {
      return element;
    }
    Object.keys(attributes).forEach(function(attribute) {
      var rawValue = attributes[attribute];
      var value = isString(rawValue) ? rawValue.trim() : rawValue;
      if (value === null || value === "") return;
      if (attribute === "children") {
        element.append.apply(element, _toConsumableArray(toArray(value)));
      } else {
        element.setAttribute(attribute, value);
      }
    });
    return element;
  }
  var defaults = {
    splitClass: "",
    lineClass: "line",
    wordClass: "word",
    charClass: "char",
    types: ["lines", "words", "chars"],
    absolute: false,
    tagName: "div"
  };
  function splitWordsAndChars(textNode, settings) {
    settings = extend(defaults, settings);
    var types = parseTypes(settings.types);
    var TAG_NAME = settings.tagName;
    var VALUE = textNode.nodeValue;
    var splitText = document.createDocumentFragment();
    var words = [];
    var chars = [];
    if (/^\s/.test(VALUE)) {
      splitText.append(" ");
    }
    words = toWords(VALUE).reduce(function(result, WORD, idx, arr) {
      var wordElement;
      var characterElementsForCurrentWord;
      if (types.chars) {
        characterElementsForCurrentWord = toChars(WORD).map(function(CHAR) {
          var characterElement = createElement(TAG_NAME, {
            "class": "".concat(settings.splitClass, " ").concat(settings.charClass),
            style: "display: inline-block;",
            children: CHAR
          });
          set(characterElement, "isChar", true);
          chars = [].concat(_toConsumableArray(chars), [characterElement]);
          return characterElement;
        });
      }
      if (types.words || types.lines) {
        wordElement = createElement(TAG_NAME, {
          "class": "".concat(settings.wordClass, " ").concat(settings.splitClass),
          style: "display: inline-block; ".concat(types.words && settings.absolute ? "position: relative;" : ""),
          children: types.chars ? characterElementsForCurrentWord : WORD
        });
        set(wordElement, {
          isWord: true,
          isWordStart: true,
          isWordEnd: true
        });
        splitText.appendChild(wordElement);
      } else {
        characterElementsForCurrentWord.forEach(function(characterElement) {
          splitText.appendChild(characterElement);
        });
      }
      if (idx < arr.length - 1) {
        splitText.append(" ");
      }
      return types.words ? result.concat(wordElement) : result;
    }, []);
    if (/\s$/.test(VALUE)) {
      splitText.append(" ");
    }
    textNode.replaceWith(splitText);
    return {
      words,
      chars
    };
  }
  function split(node, settings) {
    var type = node.nodeType;
    var wordsAndChars = {
      words: [],
      chars: []
    };
    if (!/(1|3|11)/.test(type)) {
      return wordsAndChars;
    }
    if (type === 3 && /\S/.test(node.nodeValue)) {
      return splitWordsAndChars(node, settings);
    }
    var childNodes = toArray(node.childNodes);
    if (childNodes.length) {
      set(node, "isSplit", true);
      if (!get(node).isRoot) {
        node.style.display = "inline-block";
        node.style.position = "relative";
        var nextSibling = node.nextSibling;
        var prevSibling = node.previousSibling;
        var text = node.textContent || "";
        var textAfter = nextSibling ? nextSibling.textContent : " ";
        var textBefore = prevSibling ? prevSibling.textContent : " ";
        set(node, {
          isWordEnd: /\s$/.test(text) || /^\s/.test(textAfter),
          isWordStart: /^\s/.test(text) || /\s$/.test(textBefore)
        });
      }
    }
    return childNodes.reduce(function(result, child) {
      var _split = split(child, settings), words = _split.words, chars = _split.chars;
      return {
        words: [].concat(_toConsumableArray(result.words), _toConsumableArray(words)),
        chars: [].concat(_toConsumableArray(result.chars), _toConsumableArray(chars))
      };
    }, wordsAndChars);
  }
  function getPosition(node, isWord, settings, scrollPos) {
    if (!settings.absolute) {
      return {
        top: isWord ? node.offsetTop : null
      };
    }
    var parent = node.offsetParent;
    var _scrollPos = _slicedToArray(scrollPos, 2), scrollX = _scrollPos[0], scrollY = _scrollPos[1];
    var parentX = 0;
    var parentY = 0;
    if (parent && parent !== document.body) {
      var parentRect = parent.getBoundingClientRect();
      parentX = parentRect.x + scrollX;
      parentY = parentRect.y + scrollY;
    }
    var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height, x = _node$getBoundingClie.x, y = _node$getBoundingClie.y;
    var top = y + scrollY - parentY;
    var left = x + scrollX - parentX;
    return {
      width,
      height,
      top,
      left
    };
  }
  function unSplitWords(element) {
    if (!get(element).isWord) {
      toArray(element.children).forEach(function(child) {
        return unSplitWords(child);
      });
    } else {
      remove(element);
      element.replaceWith.apply(element, _toConsumableArray(element.childNodes));
    }
  }
  var createFragment = function createFragment2() {
    return document.createDocumentFragment();
  };
  function repositionAfterSplit(element, settings, scrollPos) {
    var types = parseTypes(settings.types);
    var TAG_NAME = settings.tagName;
    var nodes = element.getElementsByTagName("*");
    var wordsInEachLine = [];
    var wordsInCurrentLine = [];
    var lineOffsetY = null;
    var elementHeight;
    var elementWidth;
    var contentBox;
    var lines = [];
    var parent = element.parentElement;
    var nextSibling = element.nextElementSibling;
    var splitText = createFragment();
    var cs = window.getComputedStyle(element);
    var align = cs.textAlign;
    var fontSize = parseFloat(cs.fontSize);
    var lineThreshold = fontSize * 0.2;
    if (settings.absolute) {
      contentBox = {
        left: element.offsetLeft,
        top: element.offsetTop,
        width: element.offsetWidth
      };
      elementWidth = element.offsetWidth;
      elementHeight = element.offsetHeight;
      set(element, {
        cssWidth: element.style.width,
        cssHeight: element.style.height
      });
    }
    toArray(nodes).forEach(function(node) {
      var isWordLike = node.parentElement === element;
      var _getPosition = getPosition(node, isWordLike, settings, scrollPos), width = _getPosition.width, height = _getPosition.height, top = _getPosition.top, left = _getPosition.left;
      if (/^br$/i.test(node.nodeName)) return;
      if (types.lines && isWordLike) {
        if (lineOffsetY === null || top - lineOffsetY >= lineThreshold) {
          lineOffsetY = top;
          wordsInEachLine.push(wordsInCurrentLine = []);
        }
        wordsInCurrentLine.push(node);
      }
      if (settings.absolute) {
        set(node, {
          top,
          left,
          width,
          height
        });
      }
    });
    if (parent) {
      parent.removeChild(element);
    }
    if (types.lines) {
      lines = wordsInEachLine.map(function(wordsInThisLine) {
        var lineElement = createElement(TAG_NAME, {
          "class": "".concat(settings.splitClass, " ").concat(settings.lineClass),
          style: "display: block; text-align: ".concat(align, "; width: 100%;")
        });
        set(lineElement, "isLine", true);
        var lineDimensions = {
          height: 0,
          top: 1e4
        };
        splitText.appendChild(lineElement);
        wordsInThisLine.forEach(function(wordOrElement, idx, arr) {
          var _data$get = get(wordOrElement), isWordEnd = _data$get.isWordEnd, top = _data$get.top, height = _data$get.height;
          var next = arr[idx + 1];
          lineDimensions.height = Math.max(lineDimensions.height, height);
          lineDimensions.top = Math.min(lineDimensions.top, top);
          lineElement.appendChild(wordOrElement);
          if (isWordEnd && get(next).isWordStart) {
            lineElement.append(" ");
          }
        });
        if (settings.absolute) {
          set(lineElement, {
            height: lineDimensions.height,
            top: lineDimensions.top
          });
        }
        return lineElement;
      });
      if (!types.words) {
        unSplitWords(splitText);
      }
      element.replaceChildren(splitText);
    }
    if (settings.absolute) {
      element.style.width = "".concat(element.style.width || elementWidth, "px");
      element.style.height = "".concat(elementHeight, "px");
      toArray(nodes).forEach(function(node) {
        var _data$get2 = get(node), isLine = _data$get2.isLine, top = _data$get2.top, left = _data$get2.left, width = _data$get2.width, height = _data$get2.height;
        var parentData = get(node.parentElement);
        var isChildOfLineNode = !isLine && parentData.isLine;
        node.style.top = "".concat(isChildOfLineNode ? top - parentData.top : top, "px");
        node.style.left = isLine ? "".concat(contentBox.left, "px") : "".concat(left - (isChildOfLineNode ? contentBox.left : 0), "px");
        node.style.height = "".concat(height, "px");
        node.style.width = isLine ? "".concat(contentBox.width, "px") : "".concat(width, "px");
        node.style.position = "absolute";
      });
    }
    if (parent) {
      if (nextSibling) parent.insertBefore(element, nextSibling);
      else parent.appendChild(element);
    }
    return lines;
  }
  var _defaults = extend(defaults, {});
  var SplitType = /* @__PURE__ */ function() {
    _createClass(SplitType2, null, [{
      key: "clearData",
      /**
       * CLears all data
       */
      value: function clearData() {
        clear();
      }
      /**
       * The default settings for all splitType instances
       * @static
       */
    }, {
      key: "setDefaults",
      /**
       * Sets the default settings for all SplitType instances.
       * The provided object will be merged with the existing defaults objects.
       *
       * @param {Object} settings an object containing the settings to override
       * @returns {Object} the new default settings
       * @public
       * @static
       * @example
       * SplitType.setDefaults({ "position": "absolute" })
       */
      value: function setDefaults(options) {
        _defaults = extend(_defaults, parseSettings(options));
        return defaults;
      }
      /**
       * Revert target elements to their original html content
       * Has no effect on that
       *
       * @param {any} elements The target elements to revert. One of:
       *  - {string} A css selector
       *  - {HTMLElement} A single element
       * -  {NodeList} A NodeList or collection
       *  - {HTMLElement[]} An array of Elements
       * -  {Array<HTMLElement|NodeList|HTMLElement[]>} A nested array of elements
       * @static
       */
    }, {
      key: "revert",
      value: function revert(elements) {
        getTargetElements(elements).forEach(function(element) {
          var _data$get = get(element), isSplit = _data$get.isSplit, html = _data$get.html, cssWidth = _data$get.cssWidth, cssHeight = _data$get.cssHeight;
          if (isSplit) {
            element.innerHTML = html;
            element.style.width = cssWidth || "";
            element.style.height = cssHeight || "";
            remove(element);
          }
        });
      }
      /**
       * Creates a new SplitType instance
       * This static method provides a way to create a `SplitType` instance without
       * using the `new` keyword.
       *
       * @param {any} target The target elements to split. One of:
       *  - {string} A css selector
       *  - {HTMLElement} A single element
       * -  {NodeList} A NodeList or collection
       *  - {HTMLElement[]} An array of Elements
       * -  {Array<HTMLElement|NodeList|HTMLElement[]>} A nested array of elements
       * @param {Object} [options] Settings for the SplitType instance
       * @return {SplitType} the SplitType instance
       * @static
       */
    }, {
      key: "create",
      value: function create(target, options) {
        return new SplitType2(target, options);
      }
      /**
       * Creates a new `SplitType` instance
       *
       * @param {any} elements The target elements to split. One of:
       *  - {string} A css selector
       *  - {HTMLElement} A single element
       * -  {NodeList} A NodeList or collection
       *  - {HTMLElement[]} An array of Elements
       * -  {Array<HTMLElement|NodeList|HTMLElement[]>} A nested array of elements
       * @param {Object} [options] Settings for the SplitType instance
       */
    }, {
      key: "data",
      /**
       * The internal data store
       */
      get: function get2() {
        return cache;
      }
    }, {
      key: "defaults",
      get: function get2() {
        return _defaults;
      },
      set: function set2(options) {
        _defaults = extend(_defaults, parseSettings(options));
      }
    }]);
    function SplitType2(elements, options) {
      _classCallCheck(this, SplitType2);
      this.isSplit = false;
      this.settings = extend(_defaults, parseSettings(options));
      this.elements = getTargetElements(elements);
      this.split();
    }
    _createClass(SplitType2, [{
      key: "split",
      value: function split$1(options) {
        var _this = this;
        this.revert();
        this.elements.forEach(function(element) {
          set(element, "html", element.innerHTML);
        });
        this.lines = [];
        this.words = [];
        this.chars = [];
        var scrollPos = [window.pageXOffset, window.pageYOffset];
        if (options !== void 0) {
          this.settings = extend(this.settings, parseSettings(options));
        }
        var types = parseTypes(this.settings.types);
        if (types.none) {
          return;
        }
        this.elements.forEach(function(element) {
          set(element, "isRoot", true);
          var _split2 = split(element, _this.settings), words = _split2.words, chars = _split2.chars;
          _this.words = [].concat(_toConsumableArray(_this.words), _toConsumableArray(words));
          _this.chars = [].concat(_toConsumableArray(_this.chars), _toConsumableArray(chars));
        });
        this.elements.forEach(function(element) {
          if (types.lines || _this.settings.absolute) {
            var lines = repositionAfterSplit(element, _this.settings, scrollPos);
            _this.lines = [].concat(_toConsumableArray(_this.lines), _toConsumableArray(lines));
          }
        });
        this.isSplit = true;
        window.scrollTo(scrollPos[0], scrollPos[1]);
        cleanup();
      }
      /**
       * Reverts target element(s) back to their original html content
       * Deletes all stored data associated with the target elements
       * Resets the properties on the splitType instance
       *
       * @public
       */
    }, {
      key: "revert",
      value: function revert() {
        if (this.isSplit) {
          this.lines = null;
          this.words = null;
          this.chars = null;
          this.isSplit = false;
        }
        SplitType2.revert(this.elements);
      }
    }]);
    return SplitType2;
  }();

  // src/utilities.js
  var attr = function(defaultVal, attrVal) {
    const defaultValType = typeof defaultVal;
    if (typeof attrVal !== "string" || attrVal.trim() === "") return defaultVal;
    if (attrVal === "true" && defaultValType === "boolean") return true;
    if (attrVal === "false" && defaultValType === "boolean") return false;
    if (isNaN(attrVal) && defaultValType === "string") return attrVal;
    if (!isNaN(attrVal) && defaultValType === "number") return +attrVal;
    return defaultVal;
  };
  var runSplit = function(text, types = "lines, words") {
    if (!text) return;
    typeSplit = new SplitType(text, {
      types
    });
    return typeSplit;
  };
  var checkBreakpoints = function(item2, animationID, gsapContext) {
    if (!item2 || !animationID || !gsapContext) {
      console.error(`GSAP checkBreakpoints Error in ${animationID}`);
      return;
    }
    let { isMobile, isTablet, isDesktop, reduceMotion } = gsapContext.conditions;
    if (isMobile === void 0 || isTablet === void 0 || isDesktop === void 0) {
      console.error(`GSAP Match Media Conditions Not Defined`);
      return;
    }
    const RUN_DESKTOP = `data-ix-${animationID}-desktop`;
    const RUN_TABLET = `data-ix-${animationID}-tablet`;
    const RUN_MOBILE = `data-ix-${animationID}-mobile`;
    const RUN_ALL = `data-ix-${animationID}-run`;
    runAll = attr(true, item2.getAttribute(RUN_ALL));
    runMobile = attr(true, item2.getAttribute(RUN_MOBILE));
    runTablet = attr(true, item2.getAttribute(RUN_TABLET));
    runDesktop = attr(true, item2.getAttribute(RUN_DESKTOP));
    if (runAll === false) return false;
    if (runMobile === false && isMobile) return false;
    if (runTablet === false && isTablet) return false;
    if (runDesktop === false && isDesktop) return false;
    return true;
  };

  // src/interactions/slider.js
  var createSlider = function(components, options, modules) {
    const SLIDER = ".swiper";
    const NEXT_BUTTON = ".swiper-next";
    const PREVIOUS_BUTTON = ".swiper-prev";
    const BULLET_WRAP = ".swiper-bullet-wrapper";
    const SCROLLBAR = ".swiper-scrollbar";
    const SCROLLBAR_DRAG = ".swiper-scrollbar-drag";
    const ACTIVE_CLASS = "is-active";
    const DISABLED_CLASS = "is-disabled";
    const swipersArray = [];
    components.forEach(function(component) {
      if (!component) return;
      const slider = component.querySelector(SLIDER);
      if (!slider) return;
      const defaultSettings = {
        speed: 800,
        spaceBetween: 16,
        loop: false,
        centeredSlides: false,
        allowTouchMove: true,
        slideActiveClass: ACTIVE_CLASS,
        slideDuplicateActiveClass: ACTIVE_CLASS
      };
      let finalModules = {};
      if (modules.navigation === true) {
        const nextButtonEl = component.querySelector(NEXT_BUTTON);
        const previousButtonEl = component.querySelector(PREVIOUS_BUTTON);
        const navigationSettings = {
          navigation: {
            nextEl: nextButtonEl,
            prevEl: previousButtonEl,
            disabledClass: DISABLED_CLASS
          }
        };
        finalModules = { ...finalModules, ...navigationSettings };
      }
      if (modules.pagination === true) {
        const bulletsEl = component.querySelector(BULLET_WRAP);
        const paginationSettings = {
          pagination: {
            type: "bullets",
            el: bulletsEl,
            bulletActiveClass: ACTIVE_CLASS,
            bulletClass: "swiper-bullet",
            bulletElement: "button",
            clickable: true
          }
        };
        finalModules = { ...finalModules, ...paginationSettings };
      }
      if (modules.scrollbar === true) {
        const scrollbarEl = component.querySelector(SCROLLBAR);
        const scrollbarSettings = {
          scrollbar: {
            el: scrollbarEl,
            dragClass: SCROLLBAR_DRAG,
            draggable: true,
            dragSize: "auto",
            //or set in number of pixels
            snapOnRelease: false
          }
        };
        finalModules = { ...finalModules, ...scrollbarSettings };
      }
      if (modules.autoplay === true) {
        const autoplaySettings = {
          autoplay: {
            delay: 3e3,
            disableOnInteraction: true,
            pauseOnMouseEnter: false,
            stopOnLastSlide: true
          }
        };
        finalModules = { ...finalModules, ...autoplaySettings };
      }
      const swiperSettings = { ...defaultSettings, ...finalModules, ...options };
      const swiper = new Swiper(slider, swiperSettings);
      swipersArray.push(swiper);
    });
    return swipersArray;
  };

  // src/interactions/accordion.js
  var accordion = function(gsapContext) {
    const ANIMATION_ID = "accordion";
    const WRAP = '[data-ix-accordion="wrap"]';
    const ITEM = '[data-ix-accordion="item"]';
    const TOP = '[data-ix-accordion="top"]';
    const OPTION_FIRST_OPEN = "data-ix-accordion-first-open";
    const OPTION_ONE_ACTIVE = "data-ix-accordion-one-active";
    const OPTION_KEEP_ONE_OPEN = "data-ix-accordion-keep-one-open";
    const OPTION_HOVER_OPEN = "data-ix-accordion-hover";
    const ACTIVE_CLASS = "is-active";
    const accordionLists = gsap.utils.toArray(WRAP);
    const openAccordion = function(item2, open = true) {
      const state = Flip.getState(item2, {
        props: "backgroundColor,margin",
        nested: true,
        absolute: false
      });
      if (open === true) {
        item2.classList.add(ACTIVE_CLASS);
      } else {
        item2.classList.remove(ACTIVE_CLASS);
      }
      Flip.from(state, {
        duration: 0.6,
        ease: "power1.out",
        onStart: () => {
          item2.style.overflow = "hidden";
        },
        onComplete: () => {
          if (open) {
            item2.style.overflow = "visible";
          }
          ScrollTrigger.refresh();
        }
      });
    };
    if (accordionLists.length === 0 || accordionLists === void 0) return;
    accordionLists.forEach((list) => {
      let runOnBreakpoint = checkBreakpoints(list, ANIMATION_ID, gsapContext);
      if (runOnBreakpoint === false) return;
      let firstOpen = attr(false, list.getAttribute(OPTION_FIRST_OPEN));
      let oneActive = attr(false, list.getAttribute(OPTION_ONE_ACTIVE));
      let keepOneOpen = attr(false, list.getAttribute(OPTION_KEEP_ONE_OPEN));
      let hoverOnly = attr(false, list.getAttribute(OPTION_HOVER_OPEN));
      const accordionItems = Array.from(list.querySelectorAll(ITEM));
      if (accordionItems.length === 0) return;
      const firstItem = list.firstElementChild;
      if (firstOpen) {
        openAccordion(firstItem);
      }
      if (!hoverOnly) {
        list.addEventListener("click", function(e) {
          const clickedEl = e.target.closest(TOP);
          if (!clickedEl) return;
          const clickedItem = clickedEl.closest(ITEM);
          let clickedItemAlreadyActive = clickedItem.classList.contains(ACTIVE_CLASS);
          if (!clickedItemAlreadyActive) {
            if (oneActive) {
              accordionItems.forEach((item2) => {
                if (item2 === clickedItem) {
                  openAccordion(item2);
                } else {
                  openAccordion(item2, false);
                }
              });
            }
            if (!oneActive) {
              openAccordion(clickedItem);
            }
          }
          if (clickedItemAlreadyActive && !keepOneOpen) {
            openAccordion(clickedItem, false);
          }
          if (clickedItemAlreadyActive && keepOneActive) {
            const activeItems = accordionItems.filter(function(item2) {
              return item2.classList.contains(activeClass);
            });
            if (activeItems.length > 1) {
              openAccordion(item, false);
            }
          }
        });
      }
      if (hoverOnly) {
        accordionItems.forEach((item2) => {
          item2.addEventListener("mouseover", function() {
            openAccordion(item2);
          });
          item2.addEventListener("mouseout", function() {
            openAccordion(item2, false);
          });
        });
      }
    });
  };

  // src/interactions/cursor.js
  var cursor = function(gsapContext) {
    const ANIMATION_ID = "cursor";
    const WRAP = '[data-ix-cursor="wrap"]';
    const INNER = '[data-ix-cursor="inner"]';
    const DOT = '[data-ix-cursor="dot"]';
    const HOVER = '[data-ix-cursor="hover"]';
    const NO_HOVER = '[data-ix-cursor="no-hover"]';
    const HOVER_CLASS = "is-hover";
    const cursorWrap = document.querySelector(WRAP);
    const cursorInner = document.querySelector(INNER);
    const cursorDot = document.querySelector(DOT);
    if (!cursorWrap || !cursorInner) return;
    if ("ontouchstart" in window || navigator.maxTouchPoints) return;
    let runOnBreakpoint = checkBreakpoints(cursorWrap, ANIMATION_ID, gsapContext);
    if (runOnBreakpoint === false) return;
    const cursorHover = function() {
      const hoverElements = gsap.utils.toArray(`${HOVER}, :is(a, button):not(${NO_HOVER})`);
      hoverElements.forEach((item2) => {
        if (!item2 || !cursorDot) return;
        item2.addEventListener("mouseover", function(e) {
          cursorDot.classList.add(HOVER_CLASS);
        });
        item2.addEventListener("mouseleave", function(e) {
          cursorDot.classList.remove(HOVER_CLASS);
        });
      });
    };
    cursorHover();
    const cursorClick = function() {
      if (!cursorDot) return;
      document.addEventListener("click", function(e) {
        let tl = gsap.timeline({});
        tl.fromTo(cursorDot, { rotateZ: -45 }, { rotateZ: 45, ease: "power1.out", duration: 0.3 });
      });
    };
    cursorClick();
    const cursorMove = function() {
      let progressObject = { x: 0, y: 0 };
      let cursorXTimeline = gsap.timeline({ paused: true, defaults: { ease: "none" } });
      cursorXTimeline.fromTo(cursorInner, { x: "-50vw" }, { x: "50vw" });
      let cursorYTimeline = gsap.timeline({ paused: true, defaults: { ease: "none" } });
      cursorYTimeline.fromTo(cursorInner, { y: "-50vh" }, { y: "50vh" });
      function setTimelineProgress(xValue, yValue) {
        gsap.to(progressObject, {
          x: xValue,
          y: yValue,
          ease: "none",
          duration: 0,
          onUpdate: () => {
            cursorXTimeline.progress(progressObject.x);
            cursorYTimeline.progress(progressObject.y);
          }
        });
      }
      document.addEventListener("mousemove", function(e) {
        let mousePercentX = e.clientX / window.innerWidth;
        let mousePercentY = e.clientY / window.innerHeight;
        setTimelineProgress(mousePercentX, mousePercentY);
      });
    };
    cursorMove();
  };

  // node_modules/countup.js/dist/countUp.min.js
  var t = function() {
    return t = Object.assign || function(t2) {
      for (var i2, n = 1, s = arguments.length; n < s; n++) for (var a in i2 = arguments[n]) Object.prototype.hasOwnProperty.call(i2, a) && (t2[a] = i2[a]);
      return t2;
    }, t.apply(this, arguments);
  };
  var i = function() {
    function i2(i3, n, s) {
      var a = this;
      this.endVal = n, this.options = s, this.version = "2.8.0", this.defaults = { startVal: 0, decimalPlaces: 0, duration: 2, useEasing: true, useGrouping: true, useIndianSeparators: false, smartEasingThreshold: 999, smartEasingAmount: 333, separator: ",", decimal: ".", prefix: "", suffix: "", enableScrollSpy: false, scrollSpyDelay: 200, scrollSpyOnce: false }, this.finalEndVal = null, this.useEasing = true, this.countDown = false, this.error = "", this.startVal = 0, this.paused = true, this.once = false, this.count = function(t2) {
        a.startTime || (a.startTime = t2);
        var i4 = t2 - a.startTime;
        a.remaining = a.duration - i4, a.useEasing ? a.countDown ? a.frameVal = a.startVal - a.easingFn(i4, 0, a.startVal - a.endVal, a.duration) : a.frameVal = a.easingFn(i4, a.startVal, a.endVal - a.startVal, a.duration) : a.frameVal = a.startVal + (a.endVal - a.startVal) * (i4 / a.duration);
        var n2 = a.countDown ? a.frameVal < a.endVal : a.frameVal > a.endVal;
        a.frameVal = n2 ? a.endVal : a.frameVal, a.frameVal = Number(a.frameVal.toFixed(a.options.decimalPlaces)), a.printValue(a.frameVal), i4 < a.duration ? a.rAF = requestAnimationFrame(a.count) : null !== a.finalEndVal ? a.update(a.finalEndVal) : a.options.onCompleteCallback && a.options.onCompleteCallback();
      }, this.formatNumber = function(t2) {
        var i4, n2, s2, e, o = t2 < 0 ? "-" : "";
        i4 = Math.abs(t2).toFixed(a.options.decimalPlaces);
        var r = (i4 += "").split(".");
        if (n2 = r[0], s2 = r.length > 1 ? a.options.decimal + r[1] : "", a.options.useGrouping) {
          e = "";
          for (var l = 3, h = 0, u = 0, p = n2.length; u < p; ++u) a.options.useIndianSeparators && 4 === u && (l = 2, h = 1), 0 !== u && h % l == 0 && (e = a.options.separator + e), h++, e = n2[p - u - 1] + e;
          n2 = e;
        }
        return a.options.numerals && a.options.numerals.length && (n2 = n2.replace(/[0-9]/g, function(t3) {
          return a.options.numerals[+t3];
        }), s2 = s2.replace(/[0-9]/g, function(t3) {
          return a.options.numerals[+t3];
        })), o + a.options.prefix + n2 + s2 + a.options.suffix;
      }, this.easeOutExpo = function(t2, i4, n2, s2) {
        return n2 * (1 - Math.pow(2, -10 * t2 / s2)) * 1024 / 1023 + i4;
      }, this.options = t(t({}, this.defaults), s), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(n), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, "" === this.options.separator && (this.options.useGrouping = false), this.el = "string" == typeof i3 ? document.getElementById(i3) : i3, this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined", "undefined" != typeof window && this.options.enableScrollSpy && (this.error ? console.error(this.error, i3) : (window.onScrollFns = window.onScrollFns || [], window.onScrollFns.push(function() {
        return a.handleScroll(a);
      }), window.onscroll = function() {
        window.onScrollFns.forEach(function(t2) {
          return t2();
        });
      }, this.handleScroll(this)));
    }
    return i2.prototype.handleScroll = function(t2) {
      if (t2 && window && !t2.once) {
        var i3 = window.innerHeight + window.scrollY, n = t2.el.getBoundingClientRect(), s = n.top + window.pageYOffset, a = n.top + n.height + window.pageYOffset;
        a < i3 && a > window.scrollY && t2.paused ? (t2.paused = false, setTimeout(function() {
          return t2.start();
        }, t2.options.scrollSpyDelay), t2.options.scrollSpyOnce && (t2.once = true)) : (window.scrollY > a || s > i3) && !t2.paused && t2.reset();
      }
    }, i2.prototype.determineDirectionAndSmartEasing = function() {
      var t2 = this.finalEndVal ? this.finalEndVal : this.endVal;
      this.countDown = this.startVal > t2;
      var i3 = t2 - this.startVal;
      if (Math.abs(i3) > this.options.smartEasingThreshold && this.options.useEasing) {
        this.finalEndVal = t2;
        var n = this.countDown ? 1 : -1;
        this.endVal = t2 + n * this.options.smartEasingAmount, this.duration = this.duration / 2;
      } else this.endVal = t2, this.finalEndVal = null;
      null !== this.finalEndVal ? this.useEasing = false : this.useEasing = this.options.useEasing;
    }, i2.prototype.start = function(t2) {
      this.error || (this.options.onStartCallback && this.options.onStartCallback(), t2 && (this.options.onCompleteCallback = t2), this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = false, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal));
    }, i2.prototype.pauseResume = function() {
      this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused;
    }, i2.prototype.reset = function() {
      cancelAnimationFrame(this.rAF), this.paused = true, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal);
    }, i2.prototype.update = function(t2) {
      cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(t2), this.endVal !== this.frameVal && (this.startVal = this.frameVal, null == this.finalEndVal && this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count));
    }, i2.prototype.printValue = function(t2) {
      var i3;
      if (this.el) {
        var n = this.formattingFn(t2);
        if (null === (i3 = this.options.plugin) || void 0 === i3 ? void 0 : i3.render) this.options.plugin.render(this.el, n);
        else if ("INPUT" === this.el.tagName) this.el.value = n;
        else "text" === this.el.tagName || "tspan" === this.el.tagName ? this.el.textContent = n : this.el.innerHTML = n;
      }
    }, i2.prototype.ensureNumber = function(t2) {
      return "number" == typeof t2 && !isNaN(t2);
    }, i2.prototype.validateValue = function(t2) {
      var i3 = Number(t2);
      return this.ensureNumber(i3) ? i3 : (this.error = "[CountUp] invalid start or end value: ".concat(t2), null);
    }, i2.prototype.resetDuration = function() {
      this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration;
    }, i2;
  }();

  // src/interactions/count-up.js
  var countUp = function(gsapContext) {
    const ANIMATION_ID = "countup";
    const ITEM = '[data-ix-countup="item"]';
    const OPTION_START = "data-ix-countup-start";
    const OPTION_DURATION = "data-ix-countup-duration";
    const OPTION_ACTIVE_CLASS = "data-ix-countup-active";
    const ACTIVE_CLASS = "is-active";
    const items = document.querySelectorAll(ITEM);
    items.forEach((item2) => {
      const parent = item2.parentElement;
      let runOnBreakpoint = checkBreakpoints(item2, ANIMATION_ID, gsapContext);
      if (runOnBreakpoint === false) return;
      const number = +item2.textContent;
      if (!number || Number.isNaN(number)) return;
      decimalPoints = countDecimalPoints(number);
      let duration = attr(2.5, item2.getAttribute(OPTION_DURATION));
      let start = attr("top bottom", item2.getAttribute(OPTION_START));
      let activeClass2 = attr(ACTIVE_CLASS, item2.getAttribute(OPTION_ACTIVE_CLASS));
      const countUp2 = new i(item2, number, {
        useGrouping: false,
        decimalPlaces: decimalPoints,
        duration
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item2,
          start,
          end: "top 10%",
          scrub: true,
          onEnter: () => {
            countUp2.start();
            parent.classList.add(activeClass2);
            setTimeout(() => {
              parent.classList.remove(activeClass2);
            }, duration * 1e3);
          }
        }
      });
    });
  };
  function countDecimalPoints(number) {
    const numberString = number.toString();
    const parts = numberString.split(".");
    if (parts.length === 1) {
      return 0;
    }
    return parts[1].length;
  }

  // src/interactions/hover-active.js
  var hoverActive = function(gsapContext) {
    const ANIMATION_ID = "hoveractive";
    const WRAP = '[data-ix-hoveractive="wrap"]';
    const ITEM = '[data-ix-hoveractive="item"]';
    const OPTION_ACTIVE_CLASS = "data-ix-hoveractive-class";
    const OPTION_KEEP_ACTIVE = "data-ix-hoveractive-keep-active";
    const ACTIVE_CLASS = "is-active";
    const wraps = gsap.utils.toArray(WRAP);
    const activateOnHover = function(parent) {
      const children = parent.querySelectorAll(ITEM);
      let activeClass2 = attr(ACTIVE_CLASS, parent.getAttribute(OPTION_ACTIVE_CLASS));
      let keepActive = attr(false, parent.getAttribute(OPTION_KEEP_ACTIVE));
      console.log("enter");
      children.forEach((currentItem) => {
        currentItem.addEventListener("mouseover", function(e) {
          children.forEach((child) => {
            if (child === currentItem) {
              child.classList.add(activeClass2);
            } else {
              child.classList.remove(activeClass2);
            }
          });
        });
        currentItem.addEventListener("mouseleave", function(e) {
          if (!keepActive) {
            currentItem.classList.remove(activeClass2);
          }
        });
      });
    };
    if (wraps.length >= 0) {
      wraps.forEach((wrap) => {
        let runOnBreakpoint = checkBreakpoints(wrap, ANIMATION_ID, gsapContext);
        if (runOnBreakpoint === false) return;
        activateOnHover(wrap);
      });
    } else {
      const body = document.querySelector(body);
      activateOnHover(body);
    }
  };

  // src/interactions/load.js
  var load = function(gsapContext) {
    const ANIMATION_ID = "load";
    const ATTRIBUTE = "data-ix-load";
    const HEADING = "heading";
    const ITEM = "item";
    const IMAGE = "image";
    const STAGGER = "stagger";
    const POSITION = "data-ix-load-position";
    const DEFAULT_STAGGER = "<0.2";
    const items = gsap.utils.toArray(`[${ATTRIBUTE}]`);
    if (items.length === 0) return;
    const tl = gsap.timeline({
      paused: true,
      defaults: {
        ease: "power1.out",
        duration: 0.8
      }
    });
    const loadHeading = function(item2) {
      if (item2.classList.contains("w-richtext")) {
        item2.style.opacity = "1";
        item2 = item2.firstChild;
      }
      const splitText = runSplit(item2);
      if (!splitText) return;
      const position = attr("<", item2.getAttribute(POSITION));
      tl.set(item2, { opacity: 1 });
      console.log(item2);
      tl.fromTo(
        splitText.words,
        { opacity: 0, y: "50%", rotateX: 45 },
        { opacity: 1, y: "0%", rotateX: 0, stagger: { each: 0.1, from: "left" } },
        position
      );
    };
    const loadImage = function(item2) {
      const position = attr(DEFAULT_STAGGER, item2.getAttribute(POSITION));
      tl.fromTo(item2, { opacity: 0, scale: 0.7 }, { opacity: 1, scale: 1 }, position);
    };
    const loadItem = function(item2) {
      const position = attr(DEFAULT_STAGGER, item2.getAttribute(POSITION));
      tl.fromTo(item2, { opacity: 0, y: "2rem" }, { opacity: 1, y: "0rem" }, position);
    };
    const loadStagger = function(item2) {
      if (!item2) return;
      const children = gsap.utils.toArray(item2.children);
      if (children.length === 0) return;
      children.forEach((child, index) => {
        if (index === 0) {
          item2.style.opacity = 1;
        }
        loadItem(child);
      });
    };
    items.forEach((item2) => {
      if (!item2) return;
      let runOnBreakpoint = checkBreakpoints(item2, ANIMATION_ID, gsapContext);
      if (runOnBreakpoint === false) return;
      const loadType = item2.getAttribute(ATTRIBUTE);
      if (loadType === HEADING) {
        loadHeading(item2);
      }
      if (loadType === IMAGE) {
        loadImage(item2);
      }
      if (loadType === ITEM) {
        loadItem(item2);
      }
      if (loadType === STAGGER) {
        loadStagger(item2);
      }
    });
    tl.play(0);
    return tl;
  };

  // src/interactions/logo-ticker.js
  var logoTicker = function(gsapContext) {
    const ANIMATION_ID = "logoticker";
    const WRAP = '[data-ix-logoticker="wrap"]';
    const LIST = '[data-ix-logoticker="list"]';
    const REVERSE = "data-ix-logoticker-reverse";
    const DURATION = "data-ix-logoticker-duration";
    const CHANGE_SPEED_ON_HOVER = "data-ix-logoticker-accelerate";
    const wraps = document.querySelectorAll(WRAP);
    if (wraps.length === 0) return;
    wraps.forEach((wrap) => {
      let runOnBreakpoint = checkBreakpoints(wrap, ANIMATION_ID, gsapContext);
      if (runOnBreakpoint === false) return;
      const lists = wrap.querySelectorAll(LIST);
      let reverse = attr(false, wrap.getAttribute(REVERSE));
      let duration = attr(30, wrap.getAttribute(DURATION));
      let accelerate = attr(false, wrap.getAttribute(CHANGE_SPEED_ON_HOVER));
      let direction = 1;
      if (reverse) {
        direction = -1;
      }
      let tl = gsap.timeline({
        repeat: -1,
        defaults: {
          ease: "none"
        }
      });
      tl.fromTo(
        lists,
        {
          xPercent: 0
        },
        {
          xPercent: -100 * direction,
          duration
        }
      );
      if (accelerate) {
        wrap.addEventListener("mouseenter", (event) => {
          tl.timeScale(2);
        });
        wrap.addEventListener("mouseleave", (event) => {
          tl.timeScale(1);
        });
      }
    });
  };

  // src/interactions/mouse-over.js
  var mouseOver = function(gsapContext) {
    const ANIMATION_ID = "mouseover";
    const WRAP = '[data-ix-mouseover="wrap"]';
    const LAYER = '[data-ix-mouseover="layer"]';
    const TARGET = '[data-ix-mouseover="target"]';
    const DURATION = "data-ix-mouseover-duration";
    const EASE = "data-ix-mouseover-ease";
    const MOVE_X = "data-ix-mouseover-move-x";
    const MOVE_Y = "data-ix-mouseover-move-y";
    const ROTATE_Z = "data-ix-mouseover-rotate-z";
    const mouseOverItems = document.querySelectorAll(WRAP);
    mouseOverItems.forEach((mouseOverItem) => {
      const layers = mouseOverItem.querySelectorAll(LAYER);
      if (layers.length === 0) return;
      let runOnBreakpoint = checkBreakpoints(mouseOverItem, ANIMATION_ID, gsapContext);
      if (runOnBreakpoint === false) return;
      let target = mouseOverItem.querySelector(TARGET);
      if (!target) {
        target = mouseOverItem;
      }
      const mouseMove = function() {
        let initialProgress = { x: 0.5, y: 0.5 };
        let progressObject = { x: initialProgress.x, y: initialProgress.y };
        let duration = attr(0.5, mouseOverItem.getAttribute(DURATION));
        let ease = attr("power1.out", mouseOverItem.getAttribute(EASE));
        let cursorXTimeline = gsap.timeline({ paused: true, defaults: { ease: "none" } });
        let cursorYTimeline = gsap.timeline({ paused: true, defaults: { ease: "none" } });
        layers.forEach((layer) => {
          let moveX = attr(10, layer.getAttribute(MOVE_X));
          let moveY = attr(10, layer.getAttribute(MOVE_Y));
          let rotateZ = attr(0, layer.getAttribute(ROTATE_Z));
          cursorXTimeline.fromTo(
            layer,
            { xPercent: moveX * -1, rotateZ: rotateZ * -1 },
            { xPercent: moveX, rotateZ },
            0
          );
          cursorYTimeline.fromTo(layer, { yPercent: moveY * -1 }, { yPercent: moveY }, 0);
        });
        function setTimelineProgress(xValue, yValue) {
          gsap.to(progressObject, {
            x: xValue,
            y: yValue,
            ease,
            duration,
            onUpdate: () => {
              cursorXTimeline.progress(progressObject.x);
              cursorYTimeline.progress(progressObject.y);
            }
          });
        }
        setTimelineProgress(initialProgress.x, initialProgress.y);
        target.addEventListener("mousemove", function(e) {
          const rect = target.getBoundingClientRect();
          let mousePercentX = gsap.utils.clamp(
            0,
            1,
            gsap.utils.normalize(0, rect.width, e.clientX - rect.left)
          );
          let mousePercentY = gsap.utils.clamp(
            0,
            1,
            gsap.utils.normalize(0, rect.height, e.clientY - rect.top)
          );
          setTimelineProgress(mousePercentX, mousePercentY);
        });
        target.addEventListener("mouseleave", function(e) {
          setTimelineProgress(initialProgress.x, initialProgress.y);
        });
      };
      mouseMove();
    });
  };

  // src/interactions/page-transition.js
  var pageTransition = function() {
    const ANIMATION_ID = "pagetransition";
    const WRAP = '[data-ix-pagetransition="wrap"]';
    const COLUMN = '[data-ix-pagetransition="column"]';
    const EXCLUDE = "data-ix-pagetransition";
    const transitionWrap = document.querySelector(WRAP);
    const transitionColumns = document.querySelectorAll(COLUMN);
    if (!transitionWrap || transitionColumns.length === 0) return;
    const tlLoad = gsap.timeline();
    tlLoad.to(COLUMN, { yPercent: -100, stagger: 0.2 });
    tlLoad.set(WRAP, { display: "none" });
    const checkLink = function(link) {
      if (!link || link.tagName !== "A") {
        return false;
      }
      const hostname = link.hostname;
      const target = link.target;
      const href = link.getAttribute("href");
      const playTransition = attr(true, link.getAttribute(EXCLUDE));
      if (!hostname || hostname !== window.location.hostname || target && target === "_blank" || !href || href.includes("#") || !playTransition) {
        return false;
      } else {
        return true;
      }
    };
    document.querySelectorAll("a").forEach((link) => {
      const linkURL = link.getAttribute("href");
      const playTransition = checkLink(link);
      if (playTransition) {
        link.addEventListener("click", function(e) {
          e.preventDefault();
          const tlClick = gsap.timeline({
            onComplete: () => setTimeout(() => {
              window.location.href = linkURL;
            }, 100)
          });
          tlClick.set(WRAP, { display: "flex" });
          tlClick.fromTo(COLUMN, { yPercent: 100 }, { yPercent: 0, stagger: 0.2 });
        });
      }
    });
    window.onpageshow = function(event) {
      if (event.persisted) window.location.reload();
    };
  };

  // src/interactions/parallax.js
  var parallax = function(gsapContext) {
    const ANIMATION_ID = "parallax";
    const WRAP = `[data-ix-parallax="wrap"]`;
    const SECTION = `[data-ix-parallax="section"]`;
    const TRIGGER = `[data-ix-parallax="trigger"]`;
    const TYPE = "data-ix-parallax-type";
    const AMOUNT = "data-ix-parallax-amount";
    const parallaxItems = gsap.utils.toArray(WRAP);
    parallaxItems.forEach((parallaxItem) => {
      const section = parallaxItem.querySelector(SECTION);
      const trigger = parallaxItem.querySelector(TRIGGER);
      if (!parallaxItem || !section || !trigger) return;
      let animationType = "uncover";
      animationType = attr("uncover", parallaxItem.getAttribute(TYPE));
      moveAmount = attr(50, parallaxItem.getAttribute(AMOUNT));
      let runOnBreakpoint = checkBreakpoints(parallaxItem, ANIMATION_ID, gsapContext);
      if (runOnBreakpoint === false) return;
      const settings = {
        scrub: true,
        start: "top bottom",
        end: "top top",
        moveStart: "-100vh",
        moveEnd: "0vh"
      };
      if (animationType === "cover") {
        settings.start = "bottom bottom";
        settings.end = "bottom top";
        settings.moveStart = "0vh";
        settings.moveEnd = "100vh";
      }
      if (animationType === "parallax") {
        settings.moveStart = `-${moveAmount}vh`;
        settings.moveEnd = "0vh";
      }
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger,
          markers: false,
          start: settings.start,
          end: settings.end,
          scrub: settings.scrub
        },
        defaults: {
          duration: 1,
          ease: "none"
        },
        onStart: () => {
          ScrollTrigger.refresh();
        }
      });
      tl.fromTo(
        section,
        {
          y: settings.moveStart
        },
        {
          y: settings.moveEnd
        }
      );
    });
  };

  // src/interactions/scroll-in.js
  var scrollIn = function(gsapContext) {
    const ANIMATION_ID = "scrollin";
    const ELEMENT = "data-ix-scrollin";
    const HEADING = "heading";
    const ITEM = "item";
    const CONTAINER = "container";
    const STAGGER = "stagger";
    const RICH_TEXT = "rich-text";
    const IMAGE_WRAP = "image-wrap";
    const IMAGE = "image";
    const LINE = "line";
    const SCROLL_TOGGLE_ACTIONS = "data-ix-scrollin-toggle-actions";
    const SCROLL_SCRUB = "data-ix-scrollin-scrub";
    const SCROLL_START = "data-ix-scrollin-start";
    const SCROLL_END = "data-ix-scrollin-end";
    const CLIP_DIRECTION = "data-ix-scrollin-direction";
    const scrollInTL = function(item2) {
      const settings = {
        scrub: false,
        toggleActions: "play none none none",
        start: "top 90%",
        end: "top 75%"
      };
      settings.toggleActions = attr(settings.toggleActions, item2.getAttribute(SCROLL_TOGGLE_ACTIONS));
      settings.scrub = attr(settings.scrub, item2.getAttribute(SCROLL_SCRUB));
      settings.start = attr(settings.start, item2.getAttribute(SCROLL_START));
      settings.end = attr(settings.end, item2.getAttribute(SCROLL_END));
      const tl = gsap.timeline({
        defaults: {
          duration: 0.6,
          ease: "power1.out"
        },
        scrollTrigger: {
          trigger: item2,
          start: settings.start,
          end: settings.end,
          toggleActions: settings.toggleActions,
          scrub: settings.scrub
        }
      });
      return tl;
    };
    const defaultTween = function(item2, tl, options = {}) {
      const varsFrom = {
        opacity: 0,
        y: "2rem"
      };
      const varsTo = {
        opacity: 1,
        y: "0rem"
      };
      if (options.stagger === "small") {
        varsTo.stagger = { each: 0.1, from: "start" };
      }
      if (options.stagger === "large") {
        varsTo.stagger = { each: 0.3, from: "start" };
      }
      const tween = tl.fromTo(item2, varsFrom, varsTo);
      return tween;
    };
    const scrollInHeading = function(item2) {
      if (item2.classList.contains("w-richtext")) {
        item2 = item2.firstChild;
      }
      const splitText = runSplit(item2);
      if (!splitText) return;
      const tl = scrollInTL(item2);
      const tween = defaultTween(splitText.words, tl, { stagger: "small", skew: "large" });
      tl.eventCallback("onComplete", () => {
        splitText.revert();
      });
    };
    const scrollInItem = function(item2) {
      if (!item2) return;
      if (item2.classList.contains("w-richtext")) {
        const children = gsap.utils.toArray(item2.children);
        if (children.length === 0) return;
        children.forEach((child) => {
          const tl = scrollInTL(child);
          const tween = defaultTween(child, tl);
        });
      } else {
        const tl = scrollInTL(item2);
        const tween = defaultTween(item2, tl);
      }
    };
    const getCLipStart = function(item2) {
      let defaultDirection = "right";
      let clipStart;
      const direction = attr(defaultDirection, item2.getAttribute(CLIP_DIRECTION));
      const clipDirections = {
        left: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
        right: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
        top: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        bottom: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
      };
      if (direction === "left") {
        clipStart = clipDirections.left;
      }
      if (direction === "right") {
        clipStart = clipDirections.right;
      }
      if (direction === "top") {
        clipStart = clipDirections.top;
      }
      if (direction === "bottom") {
        clipStart = clipDirections.bottom;
      }
      return clipStart;
    };
    const scrollInImage = function(item2) {
      if (!item2) return;
      const child = item2.firstChild;
      const tl = scrollInTL(item2);
      tl.fromTo(
        child,
        {
          scale: 1.2
        },
        {
          scale: 1,
          duration: 1
        }
      );
      tl.fromTo(
        item2,
        {
          scale: 0.9
        },
        {
          scale: 1,
          duration: 1
        },
        "<"
      );
    };
    const scrollInLine = function(item2) {
      if (!item2) return;
      const clipStart = getCLipStart(item2);
      const clipEnd = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
      const tl = scrollInTL(item2);
      tl.fromTo(
        item2,
        {
          clipPath: clipStart
        },
        {
          clipPath: clipEnd
        }
      );
    };
    const scrollInContainer = function(item2) {
      if (!item2) return;
      const children = gsap.utils.toArray(item2.children);
      if (children.length === 0) return;
      children.forEach((child) => {
        const tl = scrollInTL(child);
        const tween = defaultTween(child, tl);
      });
    };
    const scrollInStagger = function(item2) {
      if (!item2) return;
      const children = gsap.utils.toArray(item2.children);
      if (children.length === 0) return;
      const tl = scrollInTL(item2);
      const tween = defaultTween(children, tl, { stagger: "large" });
    };
    const scrollInRichText = function(item2) {
      if (!item2) return;
      const children = gsap.utils.toArray(item2.children);
      if (children.length === 0) return;
      children.forEach((child) => {
        const childTag = child.tagName;
        if (["H1", "H2", "H3", "H4", "H5", "H6"].includes(childTag)) {
          scrollInHeading(child);
        }
        if (childTag === "FIGURE") {
          scrollInImage(child);
        } else {
          scrollInItem(child);
        }
      });
    };
    const items = gsap.utils.toArray(`[${ELEMENT}]`);
    items.forEach((item2) => {
      if (!item2) return;
      let runOnBreakpoint = checkBreakpoints(item2, ANIMATION_ID, gsapContext);
      if (runOnBreakpoint === false) return;
      const scrollInType = item2.getAttribute(ELEMENT);
      if (scrollInType === HEADING) {
        scrollInHeading(item2);
      }
      if (scrollInType === ITEM) {
        scrollInItem(item2);
      }
      if (scrollInType === IMAGE) {
        scrollInImage(item2);
      }
      if (scrollInType === LINE) {
        scrollInLine(item2);
      }
      if (scrollInType === CONTAINER) {
        scrollInContainer(item2);
      }
      if (scrollInType === STAGGER) {
        scrollInStagger(item2);
      }
      if (scrollInType === RICH_TEXT) {
        scrollInRichText(item2);
      }
    });
  };

  // src/interactions/scrolling.js
  var scrolling = function(gsapContext) {
    const ANIMATION_ID = "scrolling";
    const WRAP = `[data-ix-scrolling="wrap"]`;
    const TRIGGER = `[data-ix-scrolling="trigger"]`;
    const LAYER = '[data-ix-scrolling="layer"]';
    const START = "data-ix-scrolling-start";
    const END = "data-ix-scrolling-end";
    const TABLET_START = "data-ix-scrolling-start-tablet";
    const TABLET_END = "data-ix-scrolling-end-tablet";
    const MOBILE_START = "data-ix-scrolling-start-mobile";
    const MOBILE_END = "data-ix-scrolling-end-mobile";
    const SCRUB = "data-ix-scrolling-scrub";
    const POSITION = "data-ix-scrolling-position";
    const X_START = "data-ix-scrolling-x-start";
    const X_END = "data-ix-scrolling-x-end";
    const Y_START = "data-ix-scrolling-y-start";
    const Y_END = "data-ix-scrolling-y-end";
    const SCALE_START = "data-ix-scrolling-scale-start";
    const SCALE_END = "data-ix-scrolling-scale-end";
    const WIDTH_START = "data-ix-scrolling-width-start";
    const WIDTH_END = "data-ix-scrolling-width-end";
    const HEIGHT_START = "data-ix-scrolling-height-start";
    const HEIGHT_END = "data-ix-scrolling-height-end";
    const ROTATE_X_START = "data-ix-scrolling-rotate-x-start";
    const ROTATE_X_END = "data-ix-scrolling-rotate-x-end";
    const ROTATE_Y_START = "data-ix-scrolling-rotate-y-start";
    const ROTATE_Y_END = "data-ix-scrolling-rotate-y-end";
    const ROTATE_Z_START = "data-ix-scrolling-rotate-z-start";
    const ROTATE_Z_END = "data-ix-scrolling-rotate-z-end";
    const OPACITY_START = "data-ix-scrolling-opacity-start";
    const OPACITY_END = "data-ix-scrolling-opacity-end";
    const CLIP_START = "data-ix-scrolling-clip-start";
    const CLIP_END = "data-ix-scrolling-clip-end";
    const CLIP_TYPE = "data-ix-scrolling-clip-type";
    const scrollingItems = gsap.utils.toArray(WRAP);
    scrollingItems.forEach((scrollingItem) => {
      const layers = scrollingItem.querySelectorAll(LAYER);
      if (!scrollingItem || layers.length === 0) return;
      let trigger = scrollingItem.querySelector(TRIGGER);
      if (!trigger) {
        trigger = scrollingItem;
      }
      let runOnBreakpoint = checkBreakpoints(scrollingItem, ANIMATION_ID, gsapContext);
      if (runOnBreakpoint === false) return;
      let { isMobile, isTablet, isDesktop, reduceMotion } = gsapContext.conditions;
      const tlSettings = {
        scrub: 0.5,
        start: "top bottom",
        end: "bottom top"
      };
      tlSettings.start = attr(tlSettings.start, scrollingItem.getAttribute(START));
      tlSettings.end = attr(tlSettings.end, scrollingItem.getAttribute(END));
      tlSettings.scrub = attr(tlSettings.scrub, scrollingItem.getAttribute(SCRUB));
      if (isTablet && scrollingItem.getAttribute(TABLET_START)) {
        tlSettings.start = attr(tlSettings.start, scrollingItem.getAttribute(TABLET_START));
      }
      if (isTablet && scrollingItem.getAttribute(TABLET_END)) {
        tlSettings.start = attr(tlSettings.start, scrollingItem.getAttribute(TABLET_END));
      }
      if (isMobile && scrollingItem.getAttribute(MOBILE_START)) {
        tlSettings.start = attr(tlSettings.start, scrollingItem.getAttribute(MOBILE_START));
      }
      if (isMobile && scrollingItem.getAttribute(MOBILE_END)) {
        tlSettings.start = attr(tlSettings.start, scrollingItem.getAttribute(MOBILE_END));
      }
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger,
          start: tlSettings.start,
          end: tlSettings.end,
          scrub: tlSettings.scrub,
          markers: false
        },
        defaults: {
          duration: 1,
          ease: "none"
        }
      });
      layers.forEach((layer) => {
        if (!layer) return;
        const varsFrom = {};
        const varsTo = {};
        const processAttribute = function(attributeName, defaultValue) {
          const hasAttribute = layer.hasAttribute(attributeName);
          const attributeValue = attr(defaultValue, layer.getAttribute(attributeName));
          if (hasAttribute) {
            return attributeValue;
          } else {
            return;
          }
        };
        varsFrom.x = processAttribute(X_START, "0%");
        varsTo.x = processAttribute(X_END, "0%");
        varsFrom.y = processAttribute(Y_START, "0%");
        varsTo.y = processAttribute(Y_END, "0%");
        varsFrom.scale = processAttribute(SCALE_START, 1);
        varsTo.scale = processAttribute(SCALE_END, 1);
        varsFrom.width = processAttribute(WIDTH_START, "0%");
        varsTo.width = processAttribute(WIDTH_END, "0%");
        varsFrom.height = processAttribute(HEIGHT_START, "0%");
        varsTo.height = processAttribute(HEIGHT_END, "0%");
        varsFrom.rotateX = processAttribute(ROTATE_X_START, 0);
        varsTo.rotateX = processAttribute(ROTATE_X_END, 0);
        varsFrom.rotateY = processAttribute(ROTATE_Y_START, 0);
        varsTo.rotateY = processAttribute(ROTATE_Y_END, 0);
        varsFrom.rotateZ = processAttribute(ROTATE_Z_START, 0);
        varsTo.rotateZ = processAttribute(ROTATE_Z_END, 0);
        varsFrom.opacity = processAttribute(OPACITY_START, 0);
        varsTo.opacity = processAttribute(OPACITY_END, 0);
        varsFrom.clipPath = processAttribute(CLIP_START, "string");
        varsTo.clipPath = processAttribute(CLIP_END, "string");
        const position = attr("<", layer.getAttribute(POSITION));
        let fromTween = tl.fromTo(layer, varsFrom, varsTo, position);
      });
    });
  };

  // src/interactions/text-links.js
  var textLinks = function(gsapContext) {
    const ANIMATION_ID = "textlink";
    const WRAP = '[data-ix-textlink="wrap"]';
    const FRONT = '[data-ix-textlink="front"]';
    const BACK = '[data-ix-textlink="back"]';
    const items = gsap.utils.toArray(WRAP);
    items.forEach((item2) => {
      if (!item2) return;
      let runOnBreakpoint = checkBreakpoints(item2, ANIMATION_ID, gsapContext);
      if (runOnBreakpoint === false) return;
      const front = item2.querySelector(FRONT);
      const back = item2.querySelector(BACK);
      if (!front || !back) return;
      const tl = gsap.timeline({
        paused: true,
        defaults: {
          duration: 0.4,
          ease: "power1.out"
        }
      });
      tl.fromTo(
        front,
        {
          y: "200%",
          rotateZ: 6
        },
        {
          y: "0%",
          rotateZ: 0
        }
      );
      tl.fromTo(
        back,
        {
          y: "0%",
          rotateZ: 0
        },
        {
          y: "-200%",
          rotateZ: -6
        },
        0
      );
      item2.addEventListener("mouseover", function() {
        tl.play();
      });
      item2.addEventListener("mouseleave", function() {
        tl.reverse();
      });
    });
  };

  // src/index.js
  document.addEventListener("DOMContentLoaded", function() {
    console.log("Local Script Loaded");
    if (gsap.ScrollTrigger !== void 0) {
      gsap.registerPlugin(ScrollTrigger);
    }
    if (gsap.Flip !== void 0) {
      gsap.registerPlugin(Flip);
    }
    const caseGallerySlider = function() {
      const COMPONENT = ".case-gallery-slider_component";
      const components = [...document.querySelectorAll(COMPONENT)];
      const options = {
        slidesPerView: "auto",
        loop: true
      };
      const modules = {
        navigation: true,
        pagination: false,
        scrollbar: false,
        autoplay: false
      };
      const sliders = createSlider(components, options, modules);
    };
    const gsapInit = function() {
      let mm = gsap.matchMedia();
      mm.add(
        {
          //This is the conditions object
          isMobile: "(max-width: 767px)",
          isTablet: "(min-width: 768px)  and (max-width: 991px)",
          isDesktop: "(min-width: 992px)",
          reduceMotion: "(prefers-reduced-motion: reduce)"
        },
        (gsapContext) => {
          let { isMobile, isTablet, isDesktop, reduceMotion } = gsapContext.conditions;
          accordion(gsapContext);
          countUp(gsapContext);
          hoverActive(gsapContext);
          mouseOver(gsapContext);
          pageTransition();
          parallax(gsapContext);
          scrollIn(gsapContext);
          scrolling(gsapContext);
          load(gsapContext);
          logoTicker(gsapContext);
          textLinks(gsapContext);
          if (isDesktop || isTablet) {
            cursor();
          }
        }
      );
    };
    gsapInit();
  });
})();
