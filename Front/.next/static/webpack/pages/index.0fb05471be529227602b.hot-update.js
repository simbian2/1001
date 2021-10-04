"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_KGA_19_grootcoin_grootcoin_Front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_KGA_19_grootcoin_grootcoin_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_KGA_19_grootcoin_grootcoin_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_KGA_19_grootcoin_grootcoin_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/api */ "./api/api.jsx");
/* harmony import */ var _store_Allurl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/Allurl */ "./store/Allurl.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/context */ "./store/context.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\KGA_19\\grootcoin\\grootcoin\\Front\\pages\\index.jsx",
    _this = undefined,
    _s = $RefreshSig$();









var index = function index() {
  _s();

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_store_context__WEBPACK_IMPORTED_MODULE_5__.default),
      state = _useContext.state,
      dispatch = _useContext.dispatch; //회원가입


  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('.'),
      userid = _useState[0],
      setUserid = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('.'),
      username = _useState2[0],
      setUsername = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('.'),
      userpw = _useState3[0],
      setUserpw = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('.'),
      account = _useState4[0],
      setaccount = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('.'),
      wallet = _useState5[0],
      setwallet = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('.'),
      logincheckresult = _useState6[0],
      setlogincheckresult = _useState6[1];

  var changeUserid = function changeUserid(e) {
    setUserid(e.target.value);
    console.log(userid);
  };

  var changeUsername = function changeUsername(e) {
    setUsername(e.target.value);
  };

  var changeUserpw = function changeUserpw(e) {
    setUserpw(e.target.value);
  };

  var changeaccount = function changeaccount(e) {
    setaccount(e.target.value);
  };

  var changewallet = function changewallet(e) {
    setwallet(e.target.value);
  };

  var checkuserid = /*#__PURE__*/function () {
    var _ref = (0,C_Users_KGA_19_grootcoin_grootcoin_Front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_KGA_19_grootcoin_grootcoin_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
      var options, response, result;
      return C_Users_KGA_19_grootcoin_grootcoin_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              options = {
                method: 'GET'
              };
              _context.next = 4;
              return fetch("".concat(_store_Allurl__WEBPACK_IMPORTED_MODULE_3__.user_url, "/login_check?userid=").concat(userid), options);

            case 4:
              response = _context.sent;
              _context.next = 7;
              return response.json();

            case 7:
              result = _context.sent;
              setlogincheckresult(result);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function checkuserid(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    console.log(userid);
    (0,_api_api__WEBPACK_IMPORTED_MODULE_2__.join_success)({
      userid: userid,
      username: username,
      userpw: userpw,
      account: account,
      wallet: wallet
    });
  }; //로그인


  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('.'),
      loginuserid = _useState7[0],
      setloginuserid = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('.'),
      loginuserpw = _useState8[0],
      setloginuserpw = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('.'),
      loginresult = _useState9[0],
      setloginresult = _useState9[1];

  var login = function login(e) {
    setloginuserid(e.target.value);
  };

  var loginpw = function loginpw(e) {
    setloginuserpw(e.target.value);
  };

  var handlelogin = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_KGA_19_grootcoin_grootcoin_Front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_KGA_19_grootcoin_grootcoin_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(e) {
      var options, response, result;
      return C_Users_KGA_19_grootcoin_grootcoin_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              options = {
                method: 'GET'
              };
              _context2.next = 4;
              return fetch("".concat(_store_Allurl__WEBPACK_IMPORTED_MODULE_3__.user_url, "/login_success?userid=").concat(loginuserid, "&userpw=").concat(loginuserpw), options);

            case 4:
              response = _context2.sent;
              _context2.next = 7;
              return response.json();

            case 7:
              result = _context2.sent;
              setloginresult(result.msg);

              if (result["boolean"] == true) {
                dispatch({
                  type: 'login_boolean_true',
                  payload: result["boolean"],
                  userid: result.content[0].userid,
                  username: result.content[0].username,
                  userpw: result.content[0].userpw,
                  account: result.content[0].account,
                  wallet: result.content[0].wallet
                });
              } else {
                dispatch({
                  type: 'login_boolean_false',
                  payload: result["boolean"]
                });
              }

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handlelogin(_x2) {
      return _ref2.apply(this, arguments);
    };
  }(); //입출금


  var _useState10 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('.'),
      income = _useState10[0],
      setincome = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('.'),
      outcome = _useState11[0],
      setoutcome = _useState11[1];

  var handleincome = function handleincome(e) {
    setincome(e.target.value);
  };

  var handleoutcome = function handleoutcome(e) {
    setoutcome(e.target.value);
  };

  var sendincome = function sendincome(e) {
    e.preventDefault();
    (0,_api_api__WEBPACK_IMPORTED_MODULE_2__.income_change)({
      userid: state.userid,
      now: state.account,
      income: income
    });
    dispatch({
      type: 'income',
      payload: Number(state.account) + Number(income)
    });
  };

  var sendoutcome = function sendoutcome(e) {
    e.preventDefault();
    (0,_api_api__WEBPACK_IMPORTED_MODULE_2__.outcome_change)({
      userid: state.userid,
      now: state.account,
      outcome: outcome
    });
    dispatch({
      type: 'outcome',
      payload: Number(state.account) - Number(outcome)
    });
  }; //주문-매수 거래


  var _useState12 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      cash = _useState12[0],
      setcash = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      coin = _useState13[0],
      setcoin = _useState13[1];

  var _useState14 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      coin_unit = _useState14[0],
      coin_unit_handle = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('.'),
      ordertype = _useState15[0],
      setordertype = _useState15[1];

  var cash_amount = function cash_amount(e) {
    setcash(e.target.value);
  };

  var coin_amount = function coin_amount(e) {
    setcoin(e.target.value);
  };

  var coin_unit_send = function coin_unit_send(e) {
    coin_unit_handle(e.target.value);
  };

  var ordertype_handle = function ordertype_handle(e) {
    setordertype(e.target.value);
  };

  var orderSubmit = /*#__PURE__*/function () {
    var _ref3 = (0,C_Users_KGA_19_grootcoin_grootcoin_Front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_KGA_19_grootcoin_grootcoin_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(e) {
      var options, response, result, response_userid, result_userid;
      return C_Users_KGA_19_grootcoin_grootcoin_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              e.preventDefault(); //주문할 때

              (0,_api_api__WEBPACK_IMPORTED_MODULE_2__.order)({
                userid: state.userid,
                coin: coin,
                coin_unit_send: coin_unit,
                cash: cash,
                cash_unit_send: 'KRW',
                ordertype: ordertype
              }); //각자 지갑에서 거래 처리를 한다

              options = {
                method: 'GET'
              };
              _context3.next = 5;
              return fetch("".concat(_store_Allurl__WEBPACK_IMPORTED_MODULE_3__.user_url, "/transaction_find?cash=").concat(cash, "&ordertype=").concat(ordertype), options);

            case 5:
              response = _context3.sent;
              _context3.next = 8;
              return response.json();

            case 8:
              result = _context3.sent;
              console.log(result);
              _context3.next = 12;
              return fetch("".concat(_store_Allurl__WEBPACK_IMPORTED_MODULE_3__.user_url, "/transaction_find_userid?userid=").concat(result[0].userid), options);

            case 12:
              response_userid = _context3.sent;
              _context3.next = 15;
              return response_userid.json();

            case 15:
              result_userid = _context3.sent;
              console.log(result_userid[0].userid);
              console.log(result_userid[0].account);

              if (coin > result[0].coin) {
                (0,_api_api__WEBPACK_IMPORTED_MODULE_2__.transaction_buyer)({
                  userid: state.userid,
                  account: state.account,
                  cash: result[0].cash,
                  wallet: state.wallet,
                  coin: result[0].coin
                });
                (0,_api_api__WEBPACK_IMPORTED_MODULE_2__.transaction_seller)({
                  userid: result_userid[0].userid,
                  account: result_userid[0].account,
                  cash: result[0].cash,
                  wallet: result_userid[0].wallet,
                  coin: result[0].coin
                });
                (0,_api_api__WEBPACK_IMPORTED_MODULE_2__.transaction_active)({
                  userid: response_userid[0].userid
                });
                (0,_api_api__WEBPACK_IMPORTED_MODULE_2__.transaction_coin)({
                  userid: state.userid,
                  now: result[result.length - 1].coin,
                  coin: result[0].coin
                });
              } else {
                (0,_api_api__WEBPACK_IMPORTED_MODULE_2__.transaction_buyer)({
                  userid: state.userid,
                  account: state.account,
                  cash: result[0].cash,
                  wallet: state.wallet,
                  coin: coin
                });
                (0,_api_api__WEBPACK_IMPORTED_MODULE_2__.transaction_seller)({
                  userid: result_userid[0].userid,
                  account: result_userid[0].account,
                  cash: result[0].cash,
                  wallet: result_userid[0].wallet,
                  coin: coin
                });
                (0,_api_api__WEBPACK_IMPORTED_MODULE_2__.transaction_active)({
                  userid: state.userid
                });
                (0,_api_api__WEBPACK_IMPORTED_MODULE_2__.transaction_coin)({
                  userid: result[0].userid,
                  now: result[0].coin,
                  coin: coin
                });
              } //     transaction_buyer({userid:state.userid, account:state.account, cash:result[0].cash, wallet:state.wallet, coin:coin})
              //     transaction_seller({userid:result_userid[0].userid, account:result_userid[0].account, cash:result[0].cash, wallet:result_userid[0].wallet, coin:coin})            
              //     transaction_active({userid:state.userid})
              //     transaction_active({userid:response_userid[0].userid})
              // }
              //주문서 처리를 한다.


            case 19:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function orderSubmit(_x3) {
      return _ref3.apply(this, arguments);
    };
  }(); //장부


  var _useState16 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('.'),
      orderlist_update = _useState16[0],
      setorderlist = _useState16[1];

  var orderlist = /*#__PURE__*/function () {
    var _ref4 = (0,C_Users_KGA_19_grootcoin_grootcoin_Front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_KGA_19_grootcoin_grootcoin_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(e) {
      var options, response, result;
      return C_Users_KGA_19_grootcoin_grootcoin_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              e.preventDefault();
              options = {
                method: 'GET'
              };
              _context4.next = 4;
              return fetch("".concat(_store_Allurl__WEBPACK_IMPORTED_MODULE_3__.user_url, "/orderlist"), options);

            case 4:
              response = _context4.sent;
              _context4.next = 7;
              return response.json();

            case 7:
              result = _context4.sent;
              setorderlist(JSON.stringify(result));

            case 9:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function orderlist(_x4) {
      return _ref4.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
        children: "\uD68C\uC6D0\uAC00\uC785 \uBCA0\uD0C0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("form", {
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
          type: "text",
          className: "userid",
          onChange: changeUserid
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
          type: "button",
          value: "\uC911\uBCF5\uD655\uC778",
          onClick: checkuserid
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
          children: logincheckresult
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
          type: "text",
          className: "username",
          onChange: changeUsername
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
          type: "text",
          className: "userpw",
          onChange: changeUserpw
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
          type: "text",
          className: "account",
          onChange: changeaccount
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
          type: "text",
          className: "wallet",
          onChange: changewallet
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
          type: "submit",
          value: "\uD68C\uC6D0\uAC00\uC785"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        children: "--------"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
        children: "\uB85C\uADF8\uC778 \uBCA0\uD0C0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("form", {
        onSubmit: handlelogin,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
          type: "text",
          onChange: login
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
          type: "text",
          onChange: loginpw
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
          type: "submit",
          value: "\uB85C\uADF8\uC778"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 17
      }, _this), state.login_boolean ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
          children: "\uD68C\uC6D0 \uC815\uBCF4 \uBCA0\uD0C0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("ul", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
            children: state.userid
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
            children: state.userpw
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 208,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
            children: state.username
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
            children: state.account
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
            children: state.wallet
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("li", {
            children: state.msg
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
          children: "\uACC4\uC88C \uCD9C\uAE08-\uC785\uAE09 \uAD00\uB9AC"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("form", {
          onSubmit: sendincome,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
            type: "text",
            onChange: handleincome
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
            type: "submit",
            value: "\uC785\uAE08"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("form", {
          onSubmit: sendoutcome,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
            type: "text",
            onChange: handleoutcome
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
            type: "submit",
            value: "\uCD9C\uAE08"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 221,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("select", {
            onChange: ordertype_handle,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
              value: "",
              children: "\uB9E4\uC218/\uB9E4\uB3C4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 223,
              columnNumber: 63
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
              value: "0",
              children: "\uB9E4\uC218"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 223,
              columnNumber: 96
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
              value: "1",
              children: "\uB9E4\uB3C4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 223,
              columnNumber: 127
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 223,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("form", {
          onSubmit: orderSubmit,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
            onChange: cash_amount,
            type: "text"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 21
          }, _this), "KRW", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 21
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
            onChange: coin_amount,
            type: "text"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 26
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("select", {
            onChange: coin_unit_send,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
              children: "\uCF54\uC778 \uC120\uD0DD"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 109
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
              value: "btc",
              children: "btc"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 131
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
              value: "won",
              children: "won"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 165
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
              value: "groot",
              children: "groot"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 199
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 73
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 21
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
            type: "submit",
            value: "\uAC70\uB798"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 26
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 21
        }, _this)]
      }, void 0, true) : loginresult, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        children: "--------"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
        children: "\uD2B8\uB79C\uC81D\uC158 \uBCA0\uD0C0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h3", {
        children: "\uC7A5\uBD80"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
        onClick: orderlist,
        children: "\uC0C8\uB85C\uACE0\uCE68"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 28
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        children: orderlist_update
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 13
    }, _this)
  }, void 0, false);
};

_s(index, "q93wctkHyo34KVqeV9nm2tfhnXM=");

/* harmony default export */ __webpack_exports__["default"] = (index);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGZiMDU0NzFiZTUyOTIyNzYwMmIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxJQUFNZSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFJO0FBQUE7O0FBRWQsb0JBQXlCTCxpREFBVSxDQUFDSSxtREFBRCxDQUFuQztBQUFBLE1BQU9FLEtBQVAsZUFBT0EsS0FBUDtBQUFBLE1BQWFDLFFBQWIsZUFBYUEsUUFBYixDQUZjLENBS2Q7OztBQUNBLGtCQUE0QkosK0NBQVEsQ0FBQyxHQUFELENBQXBDO0FBQUEsTUFBT0ssTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsbUJBQWdDTiwrQ0FBUSxDQUFDLEdBQUQsQ0FBeEM7QUFBQSxNQUFPTyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLG1CQUE0QlIsK0NBQVEsQ0FBQyxHQUFELENBQXBDO0FBQUEsTUFBT1MsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsbUJBQThCViwrQ0FBUSxDQUFDLEdBQUQsQ0FBdEM7QUFBQSxNQUFPVyxPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUNBLG1CQUE0QlosK0NBQVEsQ0FBQyxHQUFELENBQXBDO0FBQUEsTUFBT2EsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0EsbUJBQWdEZCwrQ0FBUSxDQUFDLEdBQUQsQ0FBeEQ7QUFBQSxNQUFPZSxnQkFBUDtBQUFBLE1BQXlCQyxtQkFBekI7O0FBRUEsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3hCWixJQUFBQSxTQUFTLENBQUNZLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVQ7QUFDQUMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlqQixNQUFaO0FBQ0gsR0FIRDs7QUFJQSxNQUFNa0IsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixD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QXBDLGVBQTBEO0FBQVEsbUJBQUssRUFBRyxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBMUQsZUFBNEY7QUFBUSxtQkFBSyxFQUFHLEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUE1RixlQUE4SDtBQUFRLG1CQUFLLEVBQUcsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQTlIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGcEQsZUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhBLGVBR0s7QUFBTyxnQkFBSSxFQUFHLFFBQWQ7QUFBdUIsaUJBQUssRUFBRztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFwQko7QUFBQSxzQkFERSxHQTRCQTdCLFdBL0NOLGVBaURJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBakRKLGVBa0RJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbERKLGVBbURJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbkRKLGVBbURlO0FBQU0sZUFBTyxFQUFJc0MsU0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFuRGYsZUFvREk7QUFBQSxrQkFBTUY7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBcERKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBMERILENBek9EOztHQUFNMUU7O0FBMk9OLCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHtqb2luX3N1Y2Nlc3MsIGluY29tZV9jaGFuZ2UsIG91dGNvbWVfY2hhbmdlLCBvcmRlciwgdHJhbnNhY3Rpb25fc2VsbGVyLCB0cmFuc2FjdGlvbl9idXllciwgdHJhbnNhY3Rpb25fYWN0aXZlLCB0cmFuc2FjdGlvbl9jb2lufSBmcm9tICcuLi9hcGkvYXBpJ1xyXG5pbXBvcnQgeyB1c2VyX3VybCB9IGZyb20gJy4uL3N0b3JlL0FsbHVybCdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVJlZHVjZXIsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFN0b3JlIGZyb20gJy4uL3N0b3JlL2NvbnRleHQnXHJcblxyXG5jb25zdCBpbmRleCA9ICgpPT57XHJcblxyXG4gICAgY29uc3Qge3N0YXRlLGRpc3BhdGNofSA9IHVzZUNvbnRleHQoU3RvcmUpXHJcblxyXG5cclxuICAgIC8v7ZqM7JuQ6rCA7J6FXHJcbiAgICBjb25zdCBbdXNlcmlkLCBzZXRVc2VyaWRdID0gdXNlU3RhdGUoJy4nKVxyXG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnLicpXHJcbiAgICBjb25zdCBbdXNlcnB3LCBzZXRVc2VycHddID0gdXNlU3RhdGUoJy4nKVxyXG4gICAgY29uc3QgW2FjY291bnQsIHNldGFjY291bnRdID0gdXNlU3RhdGUoJy4nKVxyXG4gICAgY29uc3QgW3dhbGxldCwgc2V0d2FsbGV0XSA9IHVzZVN0YXRlKCcuJylcclxuICAgIGNvbnN0IFtsb2dpbmNoZWNrcmVzdWx0LCBzZXRsb2dpbmNoZWNrcmVzdWx0XSA9IHVzZVN0YXRlKCcuJylcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VVc2VyaWQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldFVzZXJpZChlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyaWQpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjaGFuZ2VVc2VybmFtZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjaGFuZ2VVc2VycHcgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldFVzZXJwdyhlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IGNoYW5nZWFjY291bnQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldGFjY291bnQoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjaGFuZ2V3YWxsZXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldHdhbGxldChlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IGNoZWNrdXNlcmlkID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBcclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDonR0VUJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3VzZXJfdXJsfS9sb2dpbl9jaGVjaz91c2VyaWQ9JHt1c2VyaWR9YCxvcHRpb25zKSAvL3Jlc3RmdWwgYXBpIFxyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgICAgIHNldGxvZ2luY2hlY2tyZXN1bHQocmVzdWx0KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcmlkKVxyXG4gICAgICAgIGpvaW5fc3VjY2Vzcyh7dXNlcmlkOnVzZXJpZCwgdXNlcm5hbWU6dXNlcm5hbWUsIHVzZXJwdzp1c2VycHcsIGFjY291bnQ6YWNjb3VudCwgd2FsbGV0OndhbGxldH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy/roZzqt7jsnbhcclxuICAgIGNvbnN0IFtsb2dpbnVzZXJpZCwgc2V0bG9naW51c2VyaWRdID0gdXNlU3RhdGUoJy4nKVxyXG4gICAgY29uc3QgW2xvZ2ludXNlcnB3LCBzZXRsb2dpbnVzZXJwd10gPSB1c2VTdGF0ZSgnLicpXHJcbiAgICBjb25zdCBbbG9naW5yZXN1bHQsIHNldGxvZ2lucmVzdWx0XSA9IHVzZVN0YXRlKCcuJylcclxuXHJcbiAgICBjb25zdCBsb2dpbiA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0bG9naW51c2VyaWQoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBsb2dpbnB3ID0gKGUpID0+IHtcclxuICAgICAgICBzZXRsb2dpbnVzZXJwdyhlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVsb2dpbiA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6J0dFVCcsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt1c2VyX3VybH0vbG9naW5fc3VjY2Vzcz91c2VyaWQ9JHtsb2dpbnVzZXJpZH0mdXNlcnB3PSR7bG9naW51c2VycHd9YCxvcHRpb25zKSAvL3Jlc3RmdWwgYXBpIFxyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgICAgIHNldGxvZ2lucmVzdWx0KHJlc3VsdC5tc2cpXHJcbiAgICAgICAgICAgIGlmKHJlc3VsdC5ib29sZWFuID09IHRydWUpe1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnbG9naW5fYm9vbGVhbl90cnVlJywgcGF5bG9hZDogcmVzdWx0LmJvb2xlYW4sIHVzZXJpZDpyZXN1bHQuY29udGVudFswXS51c2VyaWQsIHVzZXJuYW1lOnJlc3VsdC5jb250ZW50WzBdLnVzZXJuYW1lLCB1c2VycHc6cmVzdWx0LmNvbnRlbnRbMF0udXNlcnB3LCBhY2NvdW50OnJlc3VsdC5jb250ZW50WzBdLmFjY291bnQsIHdhbGxldDpyZXN1bHQuY29udGVudFswXS53YWxsZXR9KVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ2xvZ2luX2Jvb2xlYW5fZmFsc2UnLCBwYXlsb2FkOiByZXN1bHQuYm9vbGVhbn0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvL+yehey2nOq4iFxyXG4gICAgY29uc3QgW2luY29tZSwgc2V0aW5jb21lXSA9IHVzZVN0YXRlKCcuJylcclxuICAgIGNvbnN0IFtvdXRjb21lLCBzZXRvdXRjb21lXSA9IHVzZVN0YXRlKCcuJylcclxuXHJcbiAgICBjb25zdCBoYW5kbGVpbmNvbWUgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldGluY29tZShlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZW91dGNvbWUgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldG91dGNvbWUoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBzZW5kaW5jb21lID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBpbmNvbWVfY2hhbmdlKHt1c2VyaWQ6c3RhdGUudXNlcmlkLCBub3c6c3RhdGUuYWNjb3VudCwgaW5jb21lOmluY29tZX0pXHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnaW5jb21lJywgcGF5bG9hZDogTnVtYmVyKHN0YXRlLmFjY291bnQpK051bWJlcihpbmNvbWUpfSlcclxuICAgIH1cclxuICAgIGNvbnN0IHNlbmRvdXRjb21lID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBvdXRjb21lX2NoYW5nZSh7dXNlcmlkOnN0YXRlLnVzZXJpZCwgbm93OnN0YXRlLmFjY291bnQsIG91dGNvbWU6b3V0Y29tZX0pXHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnb3V0Y29tZScsIHBheWxvYWQ6IE51bWJlcihzdGF0ZS5hY2NvdW50KS1OdW1iZXIob3V0Y29tZSl9KVxyXG4gICAgfVxyXG5cclxuICAgIC8v7KO866y4LeunpOyImCDqsbDrnphcclxuXHJcbiAgICBjb25zdCBbY2FzaCwgc2V0Y2FzaF0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtjb2luLCBzZXRjb2luXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2NvaW5fdW5pdCwgY29pbl91bml0X2hhbmRsZV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtvcmRlcnR5cGUsIHNldG9yZGVydHlwZV0gPSB1c2VTdGF0ZSgnLicpXHJcblxyXG4gICAgY29uc3QgY2FzaF9hbW91bnQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldGNhc2goZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjb2luX2Ftb3VudCA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0Y29pbihlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IGNvaW5fdW5pdF9zZW5kID0gKGUpID0+IHtcclxuICAgICAgICBjb2luX3VuaXRfaGFuZGxlKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gICAgY29uc3Qgb3JkZXJ0eXBlX2hhbmRsZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0b3JkZXJ0eXBlKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gICAgY29uc3Qgb3JkZXJTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgICAgICAvL+yjvOusuO2VoCDrlYxcclxuICAgICAgICBvcmRlcih7dXNlcmlkOnN0YXRlLnVzZXJpZCwgY29pbjpjb2luLCBjb2luX3VuaXRfc2VuZDpjb2luX3VuaXQsIGNhc2g6Y2FzaCwgY2FzaF91bml0X3NlbmQ6J0tSVycsIG9yZGVydHlwZTpvcmRlcnR5cGV9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8v6rCB7J6QIOyngOqwkeyXkOyEnCDqsbDrnpgg7LKY66as66W8IO2VnOuLpFxyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDonR0VUJ1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dXNlcl91cmx9L3RyYW5zYWN0aW9uX2ZpbmQ/Y2FzaD0ke2Nhc2h9Jm9yZGVydHlwZT0ke29yZGVydHlwZX1gLG9wdGlvbnMpIC8vcmVzdGZ1bCBhcGkgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2VfdXNlcmlkID0gYXdhaXQgZmV0Y2goYCR7dXNlcl91cmx9L3RyYW5zYWN0aW9uX2ZpbmRfdXNlcmlkP3VzZXJpZD0ke3Jlc3VsdFswXS51c2VyaWR9YCxvcHRpb25zKSAvL3Jlc3RmdWwgYXBpIFxyXG4gICAgICAgIGxldCByZXN1bHRfdXNlcmlkID0gYXdhaXQgcmVzcG9uc2VfdXNlcmlkLmpzb24oKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdF91c2VyaWRbMF0udXNlcmlkKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdF91c2VyaWRbMF0uYWNjb3VudClcclxuXHJcbiAgICAgICAgaWYoY29pbiA+IHJlc3VsdFswXS5jb2luKXtcclxuICAgICAgICAgICAgdHJhbnNhY3Rpb25fYnV5ZXIoe3VzZXJpZDpzdGF0ZS51c2VyaWQsIGFjY291bnQ6c3RhdGUuYWNjb3VudCwgY2FzaDpyZXN1bHRbMF0uY2FzaCwgd2FsbGV0OnN0YXRlLndhbGxldCwgY29pbjpyZXN1bHRbMF0uY29pbn0pXHJcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uX3NlbGxlcih7dXNlcmlkOnJlc3VsdF91c2VyaWRbMF0udXNlcmlkLCBhY2NvdW50OnJlc3VsdF91c2VyaWRbMF0uYWNjb3VudCwgY2FzaDpyZXN1bHRbMF0uY2FzaCwgd2FsbGV0OnJlc3VsdF91c2VyaWRbMF0ud2FsbGV0LCBjb2luOnJlc3VsdFswXS5jb2lufSkgICAgICAgICAgICBcclxuICAgICAgICAgICAgdHJhbnNhY3Rpb25fYWN0aXZlKHt1c2VyaWQ6cmVzcG9uc2VfdXNlcmlkWzBdLnVzZXJpZH0pXHJcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uX2NvaW4oe3VzZXJpZDpzdGF0ZS51c2VyaWQsIG5vdzpyZXN1bHRbcmVzdWx0Lmxlbmd0aC0xXS5jb2luLCBjb2luOnJlc3VsdFswXS5jb2luIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdHJhbnNhY3Rpb25fYnV5ZXIoe3VzZXJpZDpzdGF0ZS51c2VyaWQsIGFjY291bnQ6c3RhdGUuYWNjb3VudCwgY2FzaDpyZXN1bHRbMF0uY2FzaCwgd2FsbGV0OnN0YXRlLndhbGxldCwgY29pbjpjb2lufSlcclxuICAgICAgICAgICAgdHJhbnNhY3Rpb25fc2VsbGVyKHt1c2VyaWQ6cmVzdWx0X3VzZXJpZFswXS51c2VyaWQsIGFjY291bnQ6cmVzdWx0X3VzZXJpZFswXS5hY2NvdW50LCBjYXNoOnJlc3VsdFswXS5jYXNoLCB3YWxsZXQ6cmVzdWx0X3VzZXJpZFswXS53YWxsZXQsIGNvaW46Y29pbn0pICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uX2FjdGl2ZSh7dXNlcmlkOnN0YXRlLnVzZXJpZH0pXHJcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uX2NvaW4oe3VzZXJpZDpyZXN1bHRbMF0udXNlcmlkLCBub3c6cmVzdWx0WzBdLmNvaW4sIGNvaW46Y29pbn0pXHJcbiAgICAgICAgfSBcclxuICAgICAgICBcclxuICAgICAgICAvLyAgICAgdHJhbnNhY3Rpb25fYnV5ZXIoe3VzZXJpZDpzdGF0ZS51c2VyaWQsIGFjY291bnQ6c3RhdGUuYWNjb3VudCwgY2FzaDpyZXN1bHRbMF0uY2FzaCwgd2FsbGV0OnN0YXRlLndhbGxldCwgY29pbjpjb2lufSlcclxuICAgICAgICAvLyAgICAgdHJhbnNhY3Rpb25fc2VsbGVyKHt1c2VyaWQ6cmVzdWx0X3VzZXJpZFswXS51c2VyaWQsIGFjY291bnQ6cmVzdWx0X3VzZXJpZFswXS5hY2NvdW50LCBjYXNoOnJlc3VsdFswXS5jYXNoLCB3YWxsZXQ6cmVzdWx0X3VzZXJpZFswXS53YWxsZXQsIGNvaW46Y29pbn0pICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIHRyYW5zYWN0aW9uX2FjdGl2ZSh7dXNlcmlkOnN0YXRlLnVzZXJpZH0pXHJcbiAgICAgICAgLy8gICAgIHRyYW5zYWN0aW9uX2FjdGl2ZSh7dXNlcmlkOnJlc3BvbnNlX3VzZXJpZFswXS51c2VyaWR9KVxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy/so7zrrLjshJwg7LKY66as66W8IO2VnOuLpC5cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8v7J6l67aAXHJcbiAgICBjb25zdCBbb3JkZXJsaXN0X3VwZGF0ZSwgc2V0b3JkZXJsaXN0XSA9IHVzZVN0YXRlKCcuJylcclxuXHJcbiAgICBjb25zdCBvcmRlcmxpc3QgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIG1ldGhvZDonR0VUJyxcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3VzZXJfdXJsfS9vcmRlcmxpc3RgLG9wdGlvbnMpIC8vcmVzdGZ1bCBhcGkgXHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgIHNldG9yZGVybGlzdChKU09OLnN0cmluZ2lmeShyZXN1bHQpKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMj7tmozsm5DqsIDsnoUg67Kg7YOAPC9oMj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0ID0ge2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBjbGFzc05hbWUgPSBcInVzZXJpZFwiIG9uQ2hhbmdlID0ge2NoYW5nZVVzZXJpZH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJidXR0b25cIiB2YWx1ZSA9IFwi7KSR67O17ZmV7J24XCIgb25DbGljayA9IHtjaGVja3VzZXJpZH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntsb2dpbmNoZWNrcmVzdWx0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIGNsYXNzTmFtZSA9IFwidXNlcm5hbWVcIiBvbkNoYW5nZSA9IHtjaGFuZ2VVc2VybmFtZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgY2xhc3NOYW1lID0gXCJ1c2VycHdcIiAgb25DaGFuZ2UgPSB7Y2hhbmdlVXNlcnB3fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBjbGFzc05hbWUgPSBcImFjY291bnRcIiAgb25DaGFuZ2UgPSB7Y2hhbmdlYWNjb3VudH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgY2xhc3NOYW1lID0gXCJ3YWxsZXRcIiBvbkNoYW5nZSA9IHtjaGFuZ2V3YWxsZXR9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwic3VibWl0XCIgdmFsdWUgPSBcIu2ajOybkOqwgOyehVwiLz5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDxkaXY+LS0tLS0tLS08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMj7roZzqt7jsnbgg67Kg7YOAPC9oMj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0ID0ge2hhbmRsZWxvZ2lufT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIG9uQ2hhbmdlID0ge2xvZ2lufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBvbkNoYW5nZSA9IHtsb2dpbnB3fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInN1Ym1pdFwiIHZhbHVlID0gXCLroZzqt7jsnbhcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICB7IHN0YXRlLmxvZ2luX2Jvb2xlYW4gPyBcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPu2ajOybkCDsoJXrs7Qg67Kg7YOAPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57c3RhdGUudXNlcmlkfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57c3RhdGUudXNlcnB3fTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57c3RhdGUudXNlcm5hbWV9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntzdGF0ZS5hY2NvdW50fTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57c3RhdGUud2FsbGV0fTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57c3RhdGUubXNnfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+6rOE7KKMIOy2nOq4iC3snoXquIkg6rSA66asPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdCA9IHtzZW5kaW5jb21lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBvbkNoYW5nZSA9IHtoYW5kbGVpbmNvbWV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInN1Ym1pdFwiIHZhbHVlID0gXCLsnoXquIhcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0ID0ge3NlbmRvdXRjb21lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBvbkNoYW5nZSA9IHtoYW5kbGVvdXRjb21lfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJzdWJtaXRcIiB2YWx1ZSA9IFwi7Lac6riIXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT4gIFxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj48c2VsZWN0IG9uQ2hhbmdlID0ge29yZGVydHlwZV9oYW5kbGV9PjxvcHRpb24gdmFsdWUgPSBcIlwiPuunpOyImC/rp6Trj4Q8L29wdGlvbj48b3B0aW9uIHZhbHVlID0gXCIwXCI+66ek7IiYPC9vcHRpb24+PG9wdGlvbiB2YWx1ZSA9IFwiMVwiPuunpOuPhDwvb3B0aW9uPjwvc2VsZWN0PjwvaDI+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0ID0ge29yZGVyU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2UgPSB7Y2FzaF9hbW91bnR9IHR5cGUgPSBcInRleHRcIi8+S1JXXHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz48aW5wdXQgb25DaGFuZ2UgPSB7Y29pbl9hbW91bnR9IHR5cGUgPSBcInRleHRcIi8+PHNlbGVjdCBvbkNoYW5nZSA9IHtjb2luX3VuaXRfc2VuZH0+PG9wdGlvbj7svZTsnbgg7ISg7YOdPC9vcHRpb24+PG9wdGlvbiB2YWx1ZSA9IFwiYnRjXCI+YnRjPC9vcHRpb24+PG9wdGlvbiB2YWx1ZSA9IFwid29uXCI+d29uPC9vcHRpb24+PG9wdGlvbiB2YWx1ZSA9IFwiZ3Jvb3RcIj5ncm9vdDwvb3B0aW9uPjwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxici8+PGlucHV0IHR5cGUgPSBcInN1Ym1pdFwiIHZhbHVlID0gXCLqsbDrnphcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPiAgXHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuXHJcbiAgICAgICAgICAgICAgICA6IGxvZ2lucmVzdWx0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8ZGl2Pi0tLS0tLS0tPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDI+7Yq4656c7KCd7IWYIOuyoO2DgDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8aDM+7J6l67aAPC9oMz48c3BhbiBvbkNsaWNrID0ge29yZGVybGlzdH0+7IOI66Gc6rOg7LmoPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGRpdj57b3JkZXJsaXN0X3VwZGF0ZX08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4Il0sIm5hbWVzIjpbImpvaW5fc3VjY2VzcyIsImluY29tZV9jaGFuZ2UiLCJvdXRjb21lX2NoYW5nZSIsIm9yZGVyIiwidHJhbnNhY3Rpb25fc2VsbGVyIiwidHJhbnNhY3Rpb25fYnV5ZXIiLCJ0cmFuc2FjdGlvbl9hY3RpdmUiLCJ0cmFuc2FjdGlvbl9jb2luIiwidXNlcl91cmwiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VSZWR1Y2VyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTdG9yZSIsImluZGV4Iiwic3RhdGUiLCJkaXNwYXRjaCIsInVzZXJpZCIsInNldFVzZXJpZCIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJ1c2VycHciLCJzZXRVc2VycHciLCJhY2NvdW50Iiwic2V0YWNjb3VudCIsIndhbGxldCIsInNldHdhbGxldCIsImxvZ2luY2hlY2tyZXN1bHQiLCJzZXRsb2dpbmNoZWNrcmVzdWx0IiwiY2hhbmdlVXNlcmlkIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImNoYW5nZVVzZXJuYW1lIiwiY2hhbmdlVXNlcnB3IiwiY2hhbmdlYWNjb3VudCIsImNoYW5nZXdhbGxldCIsImNoZWNrdXNlcmlkIiwicHJldmVudERlZmF1bHQiLCJvcHRpb25zIiwibWV0aG9kIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJyZXN1bHQiLCJoYW5kbGVTdWJtaXQiLCJsb2dpbnVzZXJpZCIsInNldGxvZ2ludXNlcmlkIiwibG9naW51c2VycHciLCJzZXRsb2dpbnVzZXJwdyIsImxvZ2lucmVzdWx0Iiwic2V0bG9naW5yZXN1bHQiLCJsb2dpbiIsImxvZ2lucHciLCJoYW5kbGVsb2dpbiIsIm1zZyIsInR5cGUiLCJwYXlsb2FkIiwiY29udGVudCIsImluY29tZSIsInNldGluY29tZSIsIm91dGNvbWUiLCJzZXRvdXRjb21lIiwiaGFuZGxlaW5jb21lIiwiaGFuZGxlb3V0Y29tZSIsInNlbmRpbmNvbWUiLCJub3ciLCJOdW1iZXIiLCJzZW5kb3V0Y29tZSIsImNhc2giLCJzZXRjYXNoIiwiY29pbiIsInNldGNvaW4iLCJjb2luX3VuaXQiLCJjb2luX3VuaXRfaGFuZGxlIiwib3JkZXJ0eXBlIiwic2V0b3JkZXJ0eXBlIiwiY2FzaF9hbW91bnQiLCJjb2luX2Ftb3VudCIsImNvaW5fdW5pdF9zZW5kIiwib3JkZXJ0eXBlX2hhbmRsZSIsIm9yZGVyU3VibWl0IiwiY2FzaF91bml0X3NlbmQiLCJyZXNwb25zZV91c2VyaWQiLCJyZXN1bHRfdXNlcmlkIiwibGVuZ3RoIiwib3JkZXJsaXN0X3VwZGF0ZSIsInNldG9yZGVybGlzdCIsIm9yZGVybGlzdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2dpbl9ib29sZWFuIl0sInNvdXJjZVJvb3QiOiIifQ==