"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.ExpandableSection = exports.Carousel = void 0;
exports.createSkillsVisualization = createSkillsVisualization;
var _resumeData = require("../data/resume-data");
function _typeof(o) {
  "@babel/helpers - typeof";
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              "function" == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? "symbol"
              : typeof o;
          }),
    _typeof(o)
  );
}
function _slicedToArray(r, e) {
  return (
    _arrayWithHoles(r) ||
    _iterableToArrayLimit(r, e) ||
    _unsupportedIterableToArray(r, e) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _iterableToArrayLimit(r, l) {
  var t =
    null == r
      ? null
      : ("undefined" != typeof Symbol && r[Symbol.iterator]) || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (((i = (t = t.call(r)).next), 0 === l)) {
        if (Object(t) !== t) return;
        f = !1;
      } else
        for (
          ;
          !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l);
          f = !0
        );
    } catch (r) {
      (o = !0), (n = r);
    } finally {
      try {
        if (!f && null != t.return && ((u = t.return()), Object(u) !== u))
          return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _toConsumableArray(r) {
  return (
    _arrayWithoutHoles(r) ||
    _iterableToArray(r) ||
    _unsupportedIterableToArray(r) ||
    _nonIterableSpread()
  );
}
function _nonIterableSpread() {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return (
      "Object" === t && r.constructor && (t = r.constructor.name),
      "Map" === t || "Set" === t
        ? Array.from(r)
        : "Arguments" === t ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
        ? _arrayLikeToArray(r, a)
        : void 0
    );
  }
}
function _iterableToArray(r) {
  if (
    ("undefined" != typeof Symbol && null != r[Symbol.iterator]) ||
    null != r["@@iterator"]
  )
    return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _classCallCheck(a, n) {
  if (!(a instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    (o.enumerable = o.enumerable || !1),
      (o.configurable = !0),
      "value" in o && (o.writable = !0),
      Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return (
    r && _defineProperties(e.prototype, r),
    t && _defineProperties(e, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function _defineProperty(e, r, t) {
  return (
    (r = _toPropertyKey(r)) in e
      ? Object.defineProperty(e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[r] = t),
    e
  );
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var Carousel = (exports.Carousel = (function () {
  function Carousel(containerId) {
    _classCallCheck(this, Carousel);
    _defineProperty(this, "currentIndex", 0);
    _defineProperty(this, "container", void 0);
    _defineProperty(this, "items", void 0);
    this.container = document.getElementById(containerId);
    this.items = Array.from(this.container.children);
    this.init();
  }
  return _createClass(Carousel, [
    {
      key: "init",
      value: function init() {
        var _this = this,
          _this$container$paren,
          _this$container$paren2;
        this.items.forEach(function (item, index) {
          item.style.transform = "translateX(".concat(index * 100, "%)");
        });

        //navigation buttons for skills carousel
        var prevButton = document.createElement("button");
        prevButton.className = "carousel-btn prev";
        prevButton.innerHTML = "❮";
        prevButton.addEventListener("click", function () {
          return _this.prev();
        });
        var nextButton = document.createElement("button");
        nextButton.className = "carousel-btn next";
        nextButton.innerHTML = "❯";
        nextButton.addEventListener("click", function () {
          return _this.next();
        });
        (_this$container$paren = this.container.parentElement) === null ||
          _this$container$paren === void 0 ||
          _this$container$paren.appendChild(prevButton);
        (_this$container$paren2 = this.container.parentElement) === null ||
          _this$container$paren2 === void 0 ||
          _this$container$paren2.appendChild(nextButton);
      },
    },
    {
      key: "updatePosition",
      value: function updatePosition() {
        var _this2 = this;
        this.items.forEach(function (item, index) {
          item.style.transform = "translateX(".concat(
            (index - _this2.currentIndex) * 100,
            "%)"
          );
        });
      },
    },
    {
      key: "next",
      value: function next() {
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
        this.updatePosition();
      },
    },
    {
      key: "prev",
      value: function prev() {
        this.currentIndex =
          (this.currentIndex - 1 + this.items.length) % this.items.length;
        this.updatePosition();
      },
    },
  ]);
})());
var ExpandableSection = (exports.ExpandableSection = (function () {
  function ExpandableSection(containerId) {
    _classCallCheck(this, ExpandableSection);
    _defineProperty(this, "container", void 0);
    _defineProperty(this, "content", void 0);
    _defineProperty(this, "isExpanded", false);
    this.container = document.getElementById(containerId);
    this.content = this.container.querySelector(".expandable-content");
    this.init();
  }
  return _createClass(ExpandableSection, [
    {
      key: "init",
      value: function init() {
        var _this3 = this;
        var toggleButton = document.createElement("button");
        toggleButton.className = "expandable-toggle";
        toggleButton.innerHTML = this.isExpanded ? "▼" : "▶";
        toggleButton.addEventListener("click", function () {
          return _this3.toggle();
        });
        this.container.insertBefore(toggleButton, this.content);
        this.content.style.display = "none";
      },
    },
    {
      key: "toggle",
      value: function toggle() {
        this.isExpanded = !this.isExpanded;
        this.content.style.display = this.isExpanded ? "block" : "none";
        this.container.querySelector(".expandable-toggle").innerHTML = this
          .isExpanded
          ? "▼"
          : "▶";
      },
    },
  ]);
})());
function createSkillsVisualization(containerId) {
  var container = document.getElementById(containerId);
  if (!container) return;
  var skillsByCategory = _resumeData.projects.reduce(function (acc, project) {
    project.technologies.forEach(function (tech) {
      if (!acc[tech]) {
        acc[tech] = 0;
      }
      acc[tech]++;
    });
    return acc;
  }, {});
  var maxCount = Math.max.apply(
    Math,
    _toConsumableArray(Object.values(skillsByCategory))
  );
  Object.entries(skillsByCategory).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      skill = _ref2[0],
      count = _ref2[1];
    var skillElement = document.createElement("div");
    skillElement.className = "skill-bar";
    var label = document.createElement("span");
    label.className = "skill-label";
    label.textContent = skill;
    var bar = document.createElement("div");
    bar.className = "skill-progress";
    bar.style.width = "".concat((count / maxCount) * 100, "%");
    skillElement.appendChild(label);
    skillElement.appendChild(bar);
    container.appendChild(skillElement);
  });
}
