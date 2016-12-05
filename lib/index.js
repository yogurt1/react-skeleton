'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var react = require('react');

var _sizes;
var _offsets;

var _templateObject = _taggedTemplateLiteral(['\n    @media (min-width: ', ') {\n        ', '\n    }\n'], ['\n    @media (min-width: ', ') {\n        ', '\n    }\n']);
var _templateObject2 = _taggedTemplateLiteral(['\n    position: relative;\n    width: 100%;\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 0 20px;\n    box-sizing: border-box;\n\n    ', '\n\n    ', '\n\n    ', '\n'], ['\n    position: relative;\n    width: 100%;\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 0 20px;\n    box-sizing: border-box;\n\n    ', '\n\n    ', '\n\n    ', '\n']);
var _templateObject3 = _taggedTemplateLiteral(['\n        width: 85%;\n        padding: 0;\n    '], ['\n        width: 85%;\n        padding: 0;\n    ']);
var _templateObject4 = _taggedTemplateLiteral(['\n        width: 80%;\n    '], ['\n        width: 80%;\n    ']);
var _templateObject5 = _taggedTemplateLiteral(['', ''], ['', '']);
var _templateObject6 = _taggedTemplateLiteral(['\n    width: 100%;\n    float: left;\n    box-sizing: border-box;\n\n    @media (min-width: ', ') {\n        margin-left: ', ';\n        width: ', '%;\n        &:first-child {\n            margin-left: 0;\n        }\n    }\n'], ['\n    width: 100%;\n    float: left;\n    box-sizing: border-box;\n\n    @media (min-width: ', ') {\n        margin-left: ', ';\n        width: ', '%;\n        &:first-child {\n            margin-left: 0;\n        }\n    }\n']);
var _templateObject7 = _taggedTemplateLiteral(['\n    margin-left: ', '%;\n'], ['\n    margin-left: ', '%;\n']);
var _templateObject8 = _taggedTemplateLiteral(['\n    display: none;\n    @media (min-width: ', ') {\n        display: block;\n    }\n'], ['\n    display: none;\n    @media (min-width: ', ') {\n        display: block;\n    }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
    base: '\n        html {\n          font-size: 62.5%; }\n        body {\n          font-size: 1.5em; /* currently ems cause chrome bug misinterpreting rems on body element */\n          line-height: 1.6;\n          font-weight: 400;\n          font-family: HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;\n          color: #222; }\n    ',
    typography: '\n        h1, h2, h3, h4, h5, h6 {\n            margin-top: 0;\n            margin-bottom: 2rem;\n            font-weight: 300; }\n            h1 { font-size: 4.0rem; line-height: 1.2;  letter-spacing: -.1rem;}\n        h2 { font-size: 3.6rem; line-height: 1.25; letter-spacing: -.1rem; }\n        h3 { font-size: 3.0rem; line-height: 1.3;  letter-spacing: -.1rem; }\n        h4 { font-size: 2.4rem; line-height: 1.35; letter-spacing: -.08rem; }\n        h5 { font-size: 1.8rem; line-height: 1.5;  letter-spacing: -.05rem; }\n        h6 { font-size: 1.5rem; line-height: 1.6;  letter-spacing: 0; }\n\n        /* Larger than phablet */\n        @media (min-width: 550px) {\n            h1 { font-size: 5.0rem; }\n            h2 { font-size: 4.2rem; }\n            h3 { font-size: 3.6rem; }\n            h4 { font-size: 3.0rem; }\n            h5 { font-size: 2.4rem; }\n            h6 { font-size: 1.5rem; }\n        }\n\n        p {\n          margin-top: 0; }\n    ',
    buttons: '\n        .button,\n        button,\n        input[type="submit"],\n        input[type="reset"],\n        input[type="button"] {\n          display: inline-block;\n          height: 38px;\n          padding: 0 30px;\n          color: #555;\n          text-align: center;\n          font-size: 11px;\n          font-weight: 600;\n          line-height: 38px;\n          letter-spacing: .1rem;\n          text-transform: uppercase;\n          text-decoration: none;\n          white-space: nowrap;\n          background-color: transparent;\n          border-radius: 4px;\n          border: 1px solid #bbb;\n          cursor: pointer;\n          box-sizing: border-box; }\n        .button:hover,\n        button:hover,\n        input[type="submit"]:hover,\n        input[type="reset"]:hover,\n        input[type="button"]:hover,\n        .button:focus,\n        button:focus,\n        input[type="submit"]:focus,\n        input[type="reset"]:focus,\n        input[type="button"]:focus {\n          color: #333;\n          border-color: #888;\n          outline: 0; }\n        .button.button-primary,\n        button.button-primary,\n        input[type="submit"].button-primary,\n        input[type="reset"].button-primary,\n        input[type="button"].button-primary {\n          color: #FFF;\n          background-color: #33C3F0;\n          border-color: #33C3F0; }\n        .button.button-primary:hover,\n        button.button-primary:hover,\n        input[type="submit"].button-primary:hover,\n        input[type="reset"].button-primary:hover,\n        input[type="button"].button-primary:hover,\n        .button.button-primary:focus,\n        button.button-primary:focus,\n        input[type="submit"].button-primary:focus,\n        input[type="reset"].button-primary:focus,\n        input[type="button"].button-primary:focus {\n          color: #FFF;\n          background-color: #1EAEDB;\n          border-color: #1EAEDB; }\n\n    ',
    lists: '\n        ul {\n          list-style: circle inside; }\n        ol {\n          list-style: decimal inside; }\n        ol, ul {\n          padding-left: 0;\n          margin-top: 0; }\n        ul ul,\n        ul ol,\n        ol ol,\n        ol ul {\n          margin: 1.5rem 0 1.5rem 3rem;\n          font-size: 90%; }\n        li {\n          margin-bottom: 1rem; }\n    '
};

styles['all'] = Object.keys(styles).filter(function (s) {
    return s !== 'all' && s !== 'normalize';
}).map(function (s) {
    return styles[s];
}).join();

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

var offsets = (_offsets = {
    1: 8.66666666667,
    2: 17.3333333333,
    3: 26,
    4: 34.6666666667,
    5: 43.3333333333,
    6: 52,
    7: 60.6666666667,
    8: 69.3333333333,
    9: 78.0,
    10: 86.6666666667,
    11: 95.33333333333
}, _defineProperty(_offsets, 1 / 3, 34.6666666667), _defineProperty(_offsets, 2 / 3, 69.33333333333), _defineProperty(_offsets, 1 / 2, 52), _offsets);

var breakpoints = {
    mobile: "400px",
    phablet: "550px",
    tablet: "750px",
    desktop: "100px",
    desktophd: "1200px"
};

var breakpoint = function breakpoint(label) {
    return function () {
        return styled.css(_templateObject, breakpoints[label] || label, styled.css.apply(undefined, arguments));
    };
};

for (var label in breakpoints) {
    breakpoint[label] = breakpoint(label);
}

var clearfix = '\n    &:after {\n        content: "";\n        display: table;\n        clear: both;\n    }\n';

var Container = styled__default.div(_templateObject2, breakpoint.mobile(_templateObject3), breakpoint.phablet(_templateObject4), clearfix);

// Just `div` with clearfix :-)
var Row = styled__default.div(_templateObject5, clearfix);

var Column = styled__default.div(_templateObject6, breakpoints.phablet, function (p) {
    return p.size === 12 ? 0 : '4%';
}, function (p) {
    return sizes[p.size || 1];
});

var Grid = function Grid(_ref) {
    var size = _ref.size,
        children = _ref.children;
    return react.createElement(Row, null, children.map(function (child, key) {
        return react.createElement(Column, { key: key }, child);
    }));
};

var OffestBy = styled__default.div(_templateObject7, function (p) {
    return offsets[p.count || 1];
});

var Breakpoint = styled__default.div(_templateObject8, function (p) {
    return breakpoints[p.breakpoint];
});

// Browser only
function injectSkeleton(toInject) {
    var joined = (toInject || ['normlize', 'all']).map(function (s) {
        return styles[s];
    }).join();

    styled.injectGlobal(_templateObject5, toInject);
}

exports.breakpoints = breakpoints;
exports.breakpoint = breakpoint;
exports.clearfix = clearfix;
exports.Container = Container;
exports.Row = Row;
exports.Column = Column;
exports.Grid = Grid;
exports.OffestBy = OffestBy;
exports.Breakpoint = Breakpoint;
exports['default'] = injectSkeleton;
//# sourceMappingURL=index.js.map
