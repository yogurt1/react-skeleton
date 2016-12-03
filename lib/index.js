"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Col = exports.Container = exports.breakpoint = exports.breakpoints = undefined;

var _sizes;

var _templateObject = _taggedTemplateLiteral(["\n    @media (min-width: ", ") {\n        ", "\n    }\n"], ["\n    @media (min-width: ", ") {\n        ", "\n    }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n    position: relative;\n    width: 100%;\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 0 20px;\n    box-sizing: border-box;\n\n\n    ", "\n\n    ", "\n"], ["\n    position: relative;\n    width: 100%;\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 0 20px;\n    box-sizing: border-box;\n\n\n    ", "\n\n    ", "\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n        width: 85%;\n        padding: 0;\n    "], ["\n        width: 85%;\n        padding: 0;\n    "]),
    _templateObject4 = _taggedTemplateLiteral(["\n        width: 80%;\n    "], ["\n        width: 80%;\n    "]),
    _templateObject5 = _taggedTemplateLiteral(["\n    width: 100%;\n    float: left;\n    box-sizing: border-box;\n\n    @media (min-width: ", ") {\n        margin-left: ", ";\n        width: ", "%;\n        &:first-child {\n            margin-left: 0;\n        }\n    }\n"], ["\n    width: 100%;\n    float: left;\n    box-sizing: border-box;\n\n    @media (min-width: ", ") {\n        margin-left: ", ";\n        width: ", "%;\n        &:first-child {\n            margin-left: 0;\n        }\n    }\n"]);

exports.default = setupSkeleton;

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sizes = (_sizes = {
    1: 4.66666666667,
    2: 13.3333333333,
    3: 22,
    4: 30.6666666667,
    5: 39.3333333333,
    6: 48,
    7: 56.6666666667,
    8: 65.3333333333,
    9: 74.0,
    10: 82.6666666667,
    11: 91.3333333333,
    12: 100
}, _defineProperty(_sizes, 1 / 3, 30.6666666667), _defineProperty(_sizes, 2 / 3, 65.3333333333), _defineProperty(_sizes, 1 / 2, 48), _sizes);
// const offsets = {}

var breakpoints = exports.breakpoints = {
    mobile: "400px",
    phablet: "550px",
    tablet: "750px",
    desktop: "100px",
    desktophd: "1200px"
};

var breakpoint = exports.breakpoint = function breakpoint(label) {
    return function () {
        return _styledComponents2.default.css(_templateObject, breakpoints[label] || label, _styledComponents2.default.css.apply(_styledComponents2.default, arguments));
    };
};

for (var label in breakpoints) {
    breakpoint[label] = breakpoint(label);
}

// Browser only!
function setupSkeleton(opts) {
    var _ref = opts || {},
        _ref$normalize = _ref.normalize,
        normalize = _ref$normalize === undefined ? false : _ref$normalize,
        _ref$typography = _ref.typography,
        typography = _ref$typography === undefined ? true : _ref$typography,
        _ref$forms = _ref.forms,
        forms = _ref$forms === undefined ? true : _ref$forms,
        _ref$lists = _ref.lists,
        lists = _ref$lists === undefined ? code : _ref$lists;

    _styledComponents2.default.injectGlobal();
}

var Container = exports.Container = _styledComponents2.default.div(_templateObject2, breakpoint.mobile(_templateObject3), breakpoint.phablet(_templateObject4));

var Col = exports.Col = _styledComponents2.default.div(_templateObject5, breakpoints.phablet, function (p) {
    return p.count === 12 ? 0 : '4%';
}, function (p) {
    return sizes[p.count || 1];
});