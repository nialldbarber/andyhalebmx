webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Video.js":
/*!*****************************!*\
  !*** ./components/Video.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/niallbarber/htdocs/andyhalebmx/components/Video.js";


function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\timg {\n\t\tmax-width: 450px;\n\t}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tposition: relative;\n\toverflow: hidden;\n\t&:after {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\tbackground: rgba(0, 0, 0, .4);\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tbottom: 0;\n\t\tright: 0;\n\t}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tposition: fixed;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translateX(-50%) translateY(-50%);\n\tmin-width: 100%;\n\tmin-height: calc(100vh - 13rem);\n\twidth: auto;\n\theight: auto;\n\tz-index: -1000;\n\toverflow: hidden;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var VideoPlayer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].video(_templateObject());
var VideoSection = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section(_templateObject2());
var MainLogo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3());

var Video = function Video() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VideoSection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MainLogo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "../static/main-logo8.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VideoPlayer, {
    autoPlay: true,
    muted: true,
    loop: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
    src: "../static/cover-video.mp4",
    type: "video/mp4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Video);

/***/ })

})
//# sourceMappingURL=index.js.894fc0b1fb0192708b64.hot-update.js.map