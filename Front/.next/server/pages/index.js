"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./api/api.jsx":
/*!*********************!*\
  !*** ./api/api.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "join_success": () => (/* binding */ join_success),
/* harmony export */   "income_change": () => (/* binding */ income_change),
/* harmony export */   "outcome_change": () => (/* binding */ outcome_change),
/* harmony export */   "order": () => (/* binding */ order),
/* harmony export */   "transaction_seller": () => (/* binding */ transaction_seller),
/* harmony export */   "transaction_buyer": () => (/* binding */ transaction_buyer),
/* harmony export */   "transaction_active": () => (/* binding */ transaction_active),
/* harmony export */   "transaction_coin": () => (/* binding */ transaction_coin)
/* harmony export */ });
/* harmony import */ var _store_Allurl_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/Allurl.jsx */ "./store/Allurl.jsx");

const join_success = async body => {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(body)
  };
  console.log(_store_Allurl_jsx__WEBPACK_IMPORTED_MODULE_0__.user_url);
  const response = await fetch(`${_store_Allurl_jsx__WEBPACK_IMPORTED_MODULE_0__.user_url}/join_success`, options); //restful api 

  console.log(response);
};
const income_change = async body => {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(body)
  };
  console.log(_store_Allurl_jsx__WEBPACK_IMPORTED_MODULE_0__.user_url);
  const response = await fetch(`${_store_Allurl_jsx__WEBPACK_IMPORTED_MODULE_0__.user_url}/income_change`, options); //restful api 
};
const outcome_change = async body => {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(body)
  };
  console.log(_store_Allurl_jsx__WEBPACK_IMPORTED_MODULE_0__.user_url);
  const response = await fetch(`${_store_Allurl_jsx__WEBPACK_IMPORTED_MODULE_0__.user_url}/outcome_change`, options); //restful api 
};
const order = async body => {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(body)
  };
  console.log(_store_Allurl_jsx__WEBPACK_IMPORTED_MODULE_0__.user_url);
  const response = await fetch(`${_store_Allurl_jsx__WEBPACK_IMPORTED_MODULE_0__.user_url}/order`, options); //restful api 
};
const transaction_seller = async body => {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(body)
  };
  console.log(_store_Allurl_jsx__WEBPACK_IMPORTED_MODULE_0__.user_url);
  const response = await fetch(`${_store_Allurl_jsx__WEBPACK_IMPORTED_MODULE_0__.user_url}/transaction_seller`, options); //restful api 
};
const transaction_buyer = async body => {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(body)
  };
  console.log(_store_Allurl_jsx__WEBPACK_IMPORTED_MODULE_0__.user_url);
  const response = await fetch(`${_store_Allurl_jsx__WEBPACK_IMPORTED_MODULE_0__.user_url}/transaction_buyer`, options); //restful api 
};
const transaction_active = async body => {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(body)
  };
  console.log(_store_Allurl_jsx__WEBPACK_IMPORTED_MODULE_0__.user_url);
  const response = await fetch(`${_store_Allurl_jsx__WEBPACK_IMPORTED_MODULE_0__.user_url}/transaction_active`, options); //restful api 
};
const transaction_coin = async body => {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(body)
  };
  console.log(_store_Allurl_jsx__WEBPACK_IMPORTED_MODULE_0__.user_url);
  const response = await fetch(`${_store_Allurl_jsx__WEBPACK_IMPORTED_MODULE_0__.user_url}/transaction_coin`, options); //restful api 
};

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/api */ "./api/api.jsx");
/* harmony import */ var _store_Allurl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/Allurl */ "./store/Allurl.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/context */ "./store/context.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\KGA_19\\grootcoin\\grootcoin\\Front\\pages\\index.jsx";







const index = () => {
  const {
    state,
    dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_store_context__WEBPACK_IMPORTED_MODULE_3__.default); //회원가입

  const {
    0: userid,
    1: setUserid
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('.');
  const {
    0: username,
    1: setUsername
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('.');
  const {
    0: userpw,
    1: setUserpw
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('.');
  const {
    0: account,
    1: setaccount
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('.');
  const {
    0: wallet,
    1: setwallet
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('.');
  const {
    0: logincheckresult,
    1: setlogincheckresult
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('.');

  const changeUserid = e => {
    setUserid(e.target.value);
    console.log(userid);
  };

  const changeUsername = e => {
    setUsername(e.target.value);
  };

  const changeUserpw = e => {
    setUserpw(e.target.value);
  };

  const changeaccount = e => {
    setaccount(e.target.value);
  };

  const changewallet = e => {
    setwallet(e.target.value);
  };

  const checkuserid = async e => {
    e.preventDefault();
    const options = {
      method: 'GET'
    };
    const response = await fetch(`${_store_Allurl__WEBPACK_IMPORTED_MODULE_1__.user_url}/login_check?userid=${userid}`, options); //restful api 

    let result = await response.json();
    setlogincheckresult(result);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(userid);
    (0,_api_api__WEBPACK_IMPORTED_MODULE_0__.join_success)({
      userid: userid,
      username: username,
      userpw: userpw,
      account: account,
      wallet: wallet
    });
  }; //로그인


  const {
    0: loginuserid,
    1: setloginuserid
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('.');
  const {
    0: loginuserpw,
    1: setloginuserpw
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('.');
  const {
    0: loginresult,
    1: setloginresult
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('.');

  const login = e => {
    setloginuserid(e.target.value);
  };

  const loginpw = e => {
    setloginuserpw(e.target.value);
  };

  const handlelogin = async e => {
    e.preventDefault();
    const options = {
      method: 'GET'
    };
    const response = await fetch(`${_store_Allurl__WEBPACK_IMPORTED_MODULE_1__.user_url}/login_success?userid=${loginuserid}&userpw=${loginuserpw}`, options); //restful api 

    let result = await response.json();
    setloginresult(result.msg);

    if (result.boolean == true) {
      dispatch({
        type: 'login_boolean_true',
        payload: result.boolean,
        userid: result.content[0].userid,
        username: result.content[0].username,
        userpw: result.content[0].userpw,
        account: result.content[0].account,
        wallet: result.content[0].wallet
      });
    } else {
      dispatch({
        type: 'login_boolean_false',
        payload: result.boolean
      });
    }
  }; //입출금


  const {
    0: income,
    1: setincome
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('.');
  const {
    0: outcome,
    1: setoutcome
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('.');

  const handleincome = e => {
    setincome(e.target.value);
  };

  const handleoutcome = e => {
    setoutcome(e.target.value);
  };

  const sendincome = e => {
    e.preventDefault();
    (0,_api_api__WEBPACK_IMPORTED_MODULE_0__.income_change)({
      userid: state.userid,
      now: state.account,
      income: income
    });
    dispatch({
      type: 'income',
      payload: Number(state.account) + Number(income)
    });
  };

  const sendoutcome = e => {
    e.preventDefault();
    (0,_api_api__WEBPACK_IMPORTED_MODULE_0__.outcome_change)({
      userid: state.userid,
      now: state.account,
      outcome: outcome
    });
    dispatch({
      type: 'outcome',
      payload: Number(state.account) - Number(outcome)
    });
  }; //주문-매수 거래


  const {
    0: cash,
    1: setcash
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const {
    0: coin,
    1: setcoin
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const {
    0: coin_unit,
    1: coin_unit_handle
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const {
    0: ordertype,
    1: setordertype
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('.');

  const cash_amount = e => {
    setcash(e.target.value);
  };

  const coin_amount = e => {
    setcoin(e.target.value);
  };

  const coin_unit_send = e => {
    coin_unit_handle(e.target.value);
  };

  const ordertype_handle = e => {
    setordertype(e.target.value);
  };

  const orderSubmit = async e => {
    e.preventDefault(); //주문할 때

    (0,_api_api__WEBPACK_IMPORTED_MODULE_0__.order)({
      userid: state.userid,
      coin: coin,
      coin_unit_send: coin_unit,
      cash: cash,
      cash_unit_send: 'KRW',
      ordertype: ordertype
    }); //각자 지갑에서 거래 처리를 한다

    const options = {
      method: 'GET'
    };
    const response = await fetch(`${_store_Allurl__WEBPACK_IMPORTED_MODULE_1__.user_url}/transaction_find?cash=${cash}&ordertype=${ordertype}`, options); //restful api 

    const result = await response.json();
    console.log(result);
    const response_userid = await fetch(`${_store_Allurl__WEBPACK_IMPORTED_MODULE_1__.user_url}/transaction_find_userid?userid=${result[0].userid}`, options); //restful api 

    let result_userid = await response_userid.json();
    console.log(result_userid[0].userid);
    console.log(result_userid[0].account);

    if (coin > result[0].coin) {
      (0,_api_api__WEBPACK_IMPORTED_MODULE_0__.transaction_buyer)({
        userid: state.userid,
        account: state.account,
        cash: result[0].cash,
        wallet: state.wallet,
        coin: result[0].coin
      });
      (0,_api_api__WEBPACK_IMPORTED_MODULE_0__.transaction_seller)({
        userid: result_userid[0].userid,
        account: result_userid[0].account,
        cash: result[0].cash,
        wallet: result_userid[0].wallet,
        coin: result[0].coin
      });
      (0,_api_api__WEBPACK_IMPORTED_MODULE_0__.transaction_active)({
        userid: response_userid[0].userid
      });
      (0,_api_api__WEBPACK_IMPORTED_MODULE_0__.transaction_coin)({
        userid: state.userid,
        now: result[result.length - 1].coin,
        coin: result[0].coin
      });
    } else {
      (0,_api_api__WEBPACK_IMPORTED_MODULE_0__.transaction_buyer)({
        userid: state.userid,
        account: state.account,
        cash: result[0].cash,
        wallet: state.wallet,
        coin: coin
      });
      (0,_api_api__WEBPACK_IMPORTED_MODULE_0__.transaction_seller)({
        userid: result_userid[0].userid,
        account: result_userid[0].account,
        cash: result[0].cash,
        wallet: result_userid[0].wallet,
        coin: coin
      });
      (0,_api_api__WEBPACK_IMPORTED_MODULE_0__.transaction_active)({
        userid: state.userid
      });
      (0,_api_api__WEBPACK_IMPORTED_MODULE_0__.transaction_coin)({
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

  }; //장부


  const {
    0: orderlist_update,
    1: setorderlist
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('.');

  const orderlist = async e => {
    e.preventDefault();
    const options = {
      method: 'GET'
    };
    const response = await fetch(`${_store_Allurl__WEBPACK_IMPORTED_MODULE_1__.user_url}/orderlist`, options); //restful api 

    let result = await response.json();
    setorderlist(JSON.stringify(result));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h2", {
        children: "\uD68C\uC6D0\uAC00\uC785 \uBCA0\uD0C0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("form", {
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          type: "text",
          className: "userid",
          onChange: changeUserid
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          type: "button",
          value: "\uC911\uBCF5\uD655\uC778",
          onClick: checkuserid
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
          children: logincheckresult
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          type: "text",
          className: "username",
          onChange: changeUsername
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          type: "text",
          className: "userpw",
          onChange: changeUserpw
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          type: "text",
          className: "account",
          onChange: changeaccount
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          type: "text",
          className: "wallet",
          onChange: changewallet
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          type: "submit",
          value: "\uD68C\uC6D0\uAC00\uC785"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        children: "--------"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h2", {
        children: "\uB85C\uADF8\uC778 \uBCA0\uD0C0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("form", {
        onSubmit: handlelogin,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          type: "text",
          onChange: login
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          type: "text",
          onChange: loginpw
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
          type: "submit",
          value: "\uB85C\uADF8\uC778"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 17
      }, undefined), state.login_boolean ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h2", {
          children: "\uD68C\uC6D0 \uC815\uBCF4 \uBCA0\uD0C0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
            children: state.userid
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
            children: state.userpw
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 208,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
            children: state.username
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
            children: state.account
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 210,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
            children: state.wallet
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
            children: state.msg
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h2", {
          children: "\uACC4\uC88C \uCD9C\uAE08-\uC785\uAE09 \uAD00\uB9AC"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("form", {
          onSubmit: sendincome,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "text",
            onChange: handleincome
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "submit",
            value: "\uC785\uAE08"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("form", {
          onSubmit: sendoutcome,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "text",
            onChange: handleoutcome
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "submit",
            value: "\uCD9C\uAE08"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 221,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h2", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("select", {
            onChange: ordertype_handle,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "",
              children: "\uB9E4\uC218/\uB9E4\uB3C4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 223,
              columnNumber: 63
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "0",
              children: "\uB9E4\uC218"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 223,
              columnNumber: 96
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "1",
              children: "\uB9E4\uB3C4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 223,
              columnNumber: 127
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 223,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("form", {
          onSubmit: orderSubmit,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            onChange: cash_amount,
            type: "text"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 21
          }, undefined), "KRW", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            onChange: coin_amount,
            type: "text"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 26
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("select", {
            onChange: coin_unit_send,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              children: "\uCF54\uC778 \uC120\uD0DD"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 109
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "btc",
              children: "btc"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 131
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "won",
              children: "won"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 165
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "groot",
              children: "groot"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 199
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 73
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 21
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "submit",
            value: "\uAC70\uB798"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 26
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 21
        }, undefined)]
      }, void 0, true) : loginresult, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        children: "--------"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h2", {
        children: "\uD2B8\uB79C\uC81D\uC158 \uBCA0\uD0C0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
        children: "\uC7A5\uBD80"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
        onClick: orderlist,
        children: "\uC0C8\uB85C\uACE0\uCE68"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 28
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        children: orderlist_update
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);

/***/ }),

/***/ "./store/Allurl.jsx":
/*!**************************!*\
  !*** ./store/Allurl.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "user_url": () => (/* binding */ user_url)
/* harmony export */ });
const user_url = 'http://localhost:4003/api/user';

/***/ }),

/***/ "./store/context.js":
/*!**************************!*\
  !*** ./store/context.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  login_boolean: false,
  userid: '',
  userpw: '',
  username: '',
  account: 0,
  wallet: 0,
  msg: ''
};
const Store = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(initialState);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Store);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7QUNBUDtBQUVPLE1BQU1tRyxZQUFZLEdBQUM7QUFDdEJGLEVBQUFBLGFBQWEsRUFBQyxLQURRO0FBRXRCckUsRUFBQUEsTUFBTSxFQUFDLEVBRmU7QUFHdEJJLEVBQUFBLE1BQU0sRUFBQyxFQUhlO0FBSXRCRixFQUFBQSxRQUFRLEVBQUMsRUFKYTtBQUt0QkksRUFBQUEsT0FBTyxFQUFDLENBTGM7QUFNdEJFLEVBQUFBLE1BQU0sRUFBQyxDQU5lO0FBT3RCMEIsRUFBQUEsR0FBRyxFQUFDO0FBUGtCLENBQW5CO0FBVVAsTUFBTXRDLEtBQUssZ0JBQUcwRSxvREFBYSxDQUFDQyxZQUFELENBQTNCO0FBRUEsaUVBQWUzRSxLQUFmOzs7Ozs7Ozs7O0FDZEE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250Ly4vYXBpL2FwaS5qc3giLCJ3ZWJwYWNrOi8vZnJvbnQvLi9wYWdlcy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vZnJvbnQvLi9zdG9yZS9BbGx1cmwuanN4Iiwid2VicGFjazovL2Zyb250Ly4vc3RvcmUvY29udGV4dC5qcyIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZXJfdXJsfSBmcm9tICcuLi9zdG9yZS9BbGx1cmwuanN4J1xyXG5cclxuZXhwb3J0IGNvbnN0IGpvaW5fc3VjY2VzcyA9IGFzeW5jIChib2R5KSA9PiB7XHJcblxyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICBtZXRob2Q6J1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICAnQ29udGVudC10eXBlJzonYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeShib2R5KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHVzZXJfdXJsKVxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt1c2VyX3VybH0vam9pbl9zdWNjZXNzYCxvcHRpb25zKSAvL3Jlc3RmdWwgYXBpIFxyXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW5jb21lX2NoYW5nZSA9IGFzeW5jIChib2R5KSA9PiB7XHJcblxyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICBtZXRob2Q6J1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICAnQ29udGVudC10eXBlJzonYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeShib2R5KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHVzZXJfdXJsKVxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt1c2VyX3VybH0vaW5jb21lX2NoYW5nZWAsb3B0aW9ucykgLy9yZXN0ZnVsIGFwaSBcclxuXHJcbn1cclxuZXhwb3J0IGNvbnN0IG91dGNvbWVfY2hhbmdlID0gYXN5bmMgKGJvZHkpID0+IHtcclxuXHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIG1ldGhvZDonUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICdDb250ZW50LXR5cGUnOidhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KGJvZHkpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2codXNlcl91cmwpXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3VzZXJfdXJsfS9vdXRjb21lX2NoYW5nZWAsb3B0aW9ucykgLy9yZXN0ZnVsIGFwaSBcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBvcmRlciA9IGFzeW5jIChib2R5KSA9PiB7XHJcblxyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICBtZXRob2Q6J1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICAnQ29udGVudC10eXBlJzonYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeShib2R5KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHVzZXJfdXJsKVxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt1c2VyX3VybH0vb3JkZXJgLG9wdGlvbnMpIC8vcmVzdGZ1bCBhcGkgXHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdHJhbnNhY3Rpb25fc2VsbGVyID0gYXN5bmMgKGJvZHkpID0+IHtcclxuXHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIG1ldGhvZDonUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICdDb250ZW50LXR5cGUnOidhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KGJvZHkpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2codXNlcl91cmwpXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3VzZXJfdXJsfS90cmFuc2FjdGlvbl9zZWxsZXJgLG9wdGlvbnMpIC8vcmVzdGZ1bCBhcGkgXHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdHJhbnNhY3Rpb25fYnV5ZXIgPSBhc3luYyAoYm9keSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgbWV0aG9kOidQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6J2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoYm9keSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyh1c2VyX3VybClcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dXNlcl91cmx9L3RyYW5zYWN0aW9uX2J1eWVyYCxvcHRpb25zKSAvL3Jlc3RmdWwgYXBpIFxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB0cmFuc2FjdGlvbl9hY3RpdmUgPSBhc3luYyAoYm9keSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgbWV0aG9kOidQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6J2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoYm9keSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyh1c2VyX3VybClcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dXNlcl91cmx9L3RyYW5zYWN0aW9uX2FjdGl2ZWAsb3B0aW9ucykgLy9yZXN0ZnVsIGFwaSBcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0cmFuc2FjdGlvbl9jb2luID0gYXN5bmMgKGJvZHkpID0+IHtcclxuXHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIG1ldGhvZDonUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICdDb250ZW50LXR5cGUnOidhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KGJvZHkpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2codXNlcl91cmwpXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3VzZXJfdXJsfS90cmFuc2FjdGlvbl9jb2luYCxvcHRpb25zKSAvL3Jlc3RmdWwgYXBpIFxyXG5cclxufSIsIlxyXG5pbXBvcnQge2pvaW5fc3VjY2VzcywgaW5jb21lX2NoYW5nZSwgb3V0Y29tZV9jaGFuZ2UsIG9yZGVyLCB0cmFuc2FjdGlvbl9zZWxsZXIsIHRyYW5zYWN0aW9uX2J1eWVyLCB0cmFuc2FjdGlvbl9hY3RpdmUsIHRyYW5zYWN0aW9uX2NvaW59IGZyb20gJy4uL2FwaS9hcGknXHJcbmltcG9ydCB7IHVzZXJfdXJsIH0gZnJvbSAnLi4vc3RvcmUvQWxsdXJsJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlUmVkdWNlciwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU3RvcmUgZnJvbSAnLi4vc3RvcmUvY29udGV4dCdcclxuXHJcbmNvbnN0IGluZGV4ID0gKCk9PntcclxuXHJcbiAgICBjb25zdCB7c3RhdGUsZGlzcGF0Y2h9ID0gdXNlQ29udGV4dChTdG9yZSlcclxuXHJcblxyXG4gICAgLy/tmozsm5DqsIDsnoVcclxuICAgIGNvbnN0IFt1c2VyaWQsIHNldFVzZXJpZF0gPSB1c2VTdGF0ZSgnLicpXHJcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcuJylcclxuICAgIGNvbnN0IFt1c2VycHcsIHNldFVzZXJwd10gPSB1c2VTdGF0ZSgnLicpXHJcbiAgICBjb25zdCBbYWNjb3VudCwgc2V0YWNjb3VudF0gPSB1c2VTdGF0ZSgnLicpXHJcbiAgICBjb25zdCBbd2FsbGV0LCBzZXR3YWxsZXRdID0gdXNlU3RhdGUoJy4nKVxyXG4gICAgY29uc3QgW2xvZ2luY2hlY2tyZXN1bHQsIHNldGxvZ2luY2hlY2tyZXN1bHRdID0gdXNlU3RhdGUoJy4nKVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZVVzZXJpZCA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlcmlkKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJpZClcclxuICAgIH1cclxuICAgIGNvbnN0IGNoYW5nZVVzZXJuYW1lID0gKGUpID0+IHtcclxuICAgICAgICBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IGNoYW5nZVVzZXJwdyA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlcnB3KGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2hhbmdlYWNjb3VudCA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0YWNjb3VudChlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IGNoYW5nZXdhbGxldCA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0d2FsbGV0KGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2hlY2t1c2VyaWQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOidHRVQnLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dXNlcl91cmx9L2xvZ2luX2NoZWNrP3VzZXJpZD0ke3VzZXJpZH1gLG9wdGlvbnMpIC8vcmVzdGZ1bCBhcGkgXHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgICAgICAgc2V0bG9naW5jaGVja3Jlc3VsdChyZXN1bHQpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyaWQpXHJcbiAgICAgICAgam9pbl9zdWNjZXNzKHt1c2VyaWQ6dXNlcmlkLCB1c2VybmFtZTp1c2VybmFtZSwgdXNlcnB3OnVzZXJwdywgYWNjb3VudDphY2NvdW50LCB3YWxsZXQ6d2FsbGV0fSlcclxuICAgIH1cclxuXHJcbiAgICAvL+uhnOq3uOyduFxyXG4gICAgY29uc3QgW2xvZ2ludXNlcmlkLCBzZXRsb2dpbnVzZXJpZF0gPSB1c2VTdGF0ZSgnLicpXHJcbiAgICBjb25zdCBbbG9naW51c2VycHcsIHNldGxvZ2ludXNlcnB3XSA9IHVzZVN0YXRlKCcuJylcclxuICAgIGNvbnN0IFtsb2dpbnJlc3VsdCwgc2V0bG9naW5yZXN1bHRdID0gdXNlU3RhdGUoJy4nKVxyXG5cclxuICAgIGNvbnN0IGxvZ2luID0gKGUpID0+IHtcclxuICAgICAgICBzZXRsb2dpbnVzZXJpZChlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IGxvZ2lucHcgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldGxvZ2ludXNlcnB3KGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZWxvZ2luID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBcclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDonR0VUJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3VzZXJfdXJsfS9sb2dpbl9zdWNjZXNzP3VzZXJpZD0ke2xvZ2ludXNlcmlkfSZ1c2VycHc9JHtsb2dpbnVzZXJwd31gLG9wdGlvbnMpIC8vcmVzdGZ1bCBhcGkgXHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgICAgICAgc2V0bG9naW5yZXN1bHQocmVzdWx0Lm1zZylcclxuICAgICAgICAgICAgaWYocmVzdWx0LmJvb2xlYW4gPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdsb2dpbl9ib29sZWFuX3RydWUnLCBwYXlsb2FkOiByZXN1bHQuYm9vbGVhbiwgdXNlcmlkOnJlc3VsdC5jb250ZW50WzBdLnVzZXJpZCwgdXNlcm5hbWU6cmVzdWx0LmNvbnRlbnRbMF0udXNlcm5hbWUsIHVzZXJwdzpyZXN1bHQuY29udGVudFswXS51c2VycHcsIGFjY291bnQ6cmVzdWx0LmNvbnRlbnRbMF0uYWNjb3VudCwgd2FsbGV0OnJlc3VsdC5jb250ZW50WzBdLndhbGxldH0pXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnbG9naW5fYm9vbGVhbl9mYWxzZScsIHBheWxvYWQ6IHJlc3VsdC5ib29sZWFufSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8v7J6F7Lac6riIXHJcbiAgICBjb25zdCBbaW5jb21lLCBzZXRpbmNvbWVdID0gdXNlU3RhdGUoJy4nKVxyXG4gICAgY29uc3QgW291dGNvbWUsIHNldG91dGNvbWVdID0gdXNlU3RhdGUoJy4nKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZWluY29tZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0aW5jb21lKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlb3V0Y29tZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0b3V0Y29tZShlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IHNlbmRpbmNvbWUgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGluY29tZV9jaGFuZ2Uoe3VzZXJpZDpzdGF0ZS51c2VyaWQsIG5vdzpzdGF0ZS5hY2NvdW50LCBpbmNvbWU6aW5jb21lfSlcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdpbmNvbWUnLCBwYXlsb2FkOiBOdW1iZXIoc3RhdGUuYWNjb3VudCkrTnVtYmVyKGluY29tZSl9KVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2VuZG91dGNvbWUgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIG91dGNvbWVfY2hhbmdlKHt1c2VyaWQ6c3RhdGUudXNlcmlkLCBub3c6c3RhdGUuYWNjb3VudCwgb3V0Y29tZTpvdXRjb21lfSlcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdvdXRjb21lJywgcGF5bG9hZDogTnVtYmVyKHN0YXRlLmFjY291bnQpLU51bWJlcihvdXRjb21lKX0pXHJcbiAgICB9XHJcblxyXG4gICAgLy/so7zrrLgt66ek7IiYIOqxsOuemFxyXG5cclxuICAgIGNvbnN0IFtjYXNoLCBzZXRjYXNoXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2NvaW4sIHNldGNvaW5dID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbY29pbl91bml0LCBjb2luX3VuaXRfaGFuZGxlXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW29yZGVydHlwZSwgc2V0b3JkZXJ0eXBlXSA9IHVzZVN0YXRlKCcuJylcclxuXHJcbiAgICBjb25zdCBjYXNoX2Ftb3VudCA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0Y2FzaChlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IGNvaW5fYW1vdW50ID0gKGUpID0+IHtcclxuICAgICAgICBzZXRjb2luKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG4gICAgY29uc3QgY29pbl91bml0X3NlbmQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvaW5fdW5pdF9oYW5kbGUoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBvcmRlcnR5cGVfaGFuZGxlID0gKGUpID0+IHtcclxuICAgICAgICBzZXRvcmRlcnR5cGUoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBvcmRlclN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICAgIC8v7KO866y47ZWgIOuVjFxyXG4gICAgICAgIG9yZGVyKHt1c2VyaWQ6c3RhdGUudXNlcmlkLCBjb2luOmNvaW4sIGNvaW5fdW5pdF9zZW5kOmNvaW5fdW5pdCwgY2FzaDpjYXNoLCBjYXNoX3VuaXRfc2VuZDonS1JXJywgb3JkZXJ0eXBlOm9yZGVydHlwZX0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy/qsIHsnpAg7KeA6rCR7JeQ7IScIOqxsOuemCDsspjrpqzrpbwg7ZWc64ukXHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOidHRVQnXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt1c2VyX3VybH0vdHJhbnNhY3Rpb25fZmluZD9jYXNoPSR7Y2FzaH0mb3JkZXJ0eXBlPSR7b3JkZXJ0eXBlfWAsb3B0aW9ucykgLy9yZXN0ZnVsIGFwaSBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbiAgICBcclxuICAgICAgICBjb25zdCByZXNwb25zZV91c2VyaWQgPSBhd2FpdCBmZXRjaChgJHt1c2VyX3VybH0vdHJhbnNhY3Rpb25fZmluZF91c2VyaWQ/dXNlcmlkPSR7cmVzdWx0WzBdLnVzZXJpZH1gLG9wdGlvbnMpIC8vcmVzdGZ1bCBhcGkgXHJcbiAgICAgICAgbGV0IHJlc3VsdF91c2VyaWQgPSBhd2FpdCByZXNwb25zZV91c2VyaWQuanNvbigpXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0X3VzZXJpZFswXS51c2VyaWQpXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0X3VzZXJpZFswXS5hY2NvdW50KVxyXG5cclxuICAgICAgICBpZihjb2luID4gcmVzdWx0WzBdLmNvaW4pe1xyXG4gICAgICAgICAgICB0cmFuc2FjdGlvbl9idXllcih7dXNlcmlkOnN0YXRlLnVzZXJpZCwgYWNjb3VudDpzdGF0ZS5hY2NvdW50LCBjYXNoOnJlc3VsdFswXS5jYXNoLCB3YWxsZXQ6c3RhdGUud2FsbGV0LCBjb2luOnJlc3VsdFswXS5jb2lufSlcclxuICAgICAgICAgICAgdHJhbnNhY3Rpb25fc2VsbGVyKHt1c2VyaWQ6cmVzdWx0X3VzZXJpZFswXS51c2VyaWQsIGFjY291bnQ6cmVzdWx0X3VzZXJpZFswXS5hY2NvdW50LCBjYXNoOnJlc3VsdFswXS5jYXNoLCB3YWxsZXQ6cmVzdWx0X3VzZXJpZFswXS53YWxsZXQsIGNvaW46cmVzdWx0WzBdLmNvaW59KSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0cmFuc2FjdGlvbl9hY3RpdmUoe3VzZXJpZDpyZXNwb25zZV91c2VyaWRbMF0udXNlcmlkfSlcclxuICAgICAgICAgICAgdHJhbnNhY3Rpb25fY29pbih7dXNlcmlkOnN0YXRlLnVzZXJpZCwgbm93OnJlc3VsdFtyZXN1bHQubGVuZ3RoLTFdLmNvaW4sIGNvaW46cmVzdWx0WzBdLmNvaW4gfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0cmFuc2FjdGlvbl9idXllcih7dXNlcmlkOnN0YXRlLnVzZXJpZCwgYWNjb3VudDpzdGF0ZS5hY2NvdW50LCBjYXNoOnJlc3VsdFswXS5jYXNoLCB3YWxsZXQ6c3RhdGUud2FsbGV0LCBjb2luOmNvaW59KVxyXG4gICAgICAgICAgICB0cmFuc2FjdGlvbl9zZWxsZXIoe3VzZXJpZDpyZXN1bHRfdXNlcmlkWzBdLnVzZXJpZCwgYWNjb3VudDpyZXN1bHRfdXNlcmlkWzBdLmFjY291bnQsIGNhc2g6cmVzdWx0WzBdLmNhc2gsIHdhbGxldDpyZXN1bHRfdXNlcmlkWzBdLndhbGxldCwgY29pbjpjb2lufSkgICAgICAgICAgICBcclxuICAgICAgICAgICAgdHJhbnNhY3Rpb25fYWN0aXZlKHt1c2VyaWQ6c3RhdGUudXNlcmlkfSlcclxuICAgICAgICAgICAgdHJhbnNhY3Rpb25fY29pbih7dXNlcmlkOnJlc3VsdFswXS51c2VyaWQsIG5vdzpyZXN1bHRbMF0uY29pbiwgY29pbjpjb2lufSlcclxuICAgICAgICB9IFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vICAgICB0cmFuc2FjdGlvbl9idXllcih7dXNlcmlkOnN0YXRlLnVzZXJpZCwgYWNjb3VudDpzdGF0ZS5hY2NvdW50LCBjYXNoOnJlc3VsdFswXS5jYXNoLCB3YWxsZXQ6c3RhdGUud2FsbGV0LCBjb2luOmNvaW59KVxyXG4gICAgICAgIC8vICAgICB0cmFuc2FjdGlvbl9zZWxsZXIoe3VzZXJpZDpyZXN1bHRfdXNlcmlkWzBdLnVzZXJpZCwgYWNjb3VudDpyZXN1bHRfdXNlcmlkWzBdLmFjY291bnQsIGNhc2g6cmVzdWx0WzBdLmNhc2gsIHdhbGxldDpyZXN1bHRfdXNlcmlkWzBdLndhbGxldCwgY29pbjpjb2lufSkgICAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgdHJhbnNhY3Rpb25fYWN0aXZlKHt1c2VyaWQ6c3RhdGUudXNlcmlkfSlcclxuICAgICAgICAvLyAgICAgdHJhbnNhY3Rpb25fYWN0aXZlKHt1c2VyaWQ6cmVzcG9uc2VfdXNlcmlkWzBdLnVzZXJpZH0pXHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvL+yjvOusuOyEnCDsspjrpqzrpbwg7ZWc64ukLlxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy/snqXrtoBcclxuICAgIGNvbnN0IFtvcmRlcmxpc3RfdXBkYXRlLCBzZXRvcmRlcmxpc3RdID0gdXNlU3RhdGUoJy4nKVxyXG5cclxuICAgIGNvbnN0IG9yZGVybGlzdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOidHRVQnLFxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dXNlcl91cmx9L29yZGVybGlzdGAsb3B0aW9ucykgLy9yZXN0ZnVsIGFwaSBcclxuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgc2V0b3JkZXJsaXN0KEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgyPu2ajOybkOqwgOyehSDrsqDtg4A8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQgPSB7aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIGNsYXNzTmFtZSA9IFwidXNlcmlkXCIgb25DaGFuZ2UgPSB7Y2hhbmdlVXNlcmlkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcImJ1dHRvblwiIHZhbHVlID0gXCLspJHrs7XtmZXsnbhcIiBvbkNsaWNrID0ge2NoZWNrdXNlcmlkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2xvZ2luY2hlY2tyZXN1bHR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgY2xhc3NOYW1lID0gXCJ1c2VybmFtZVwiIG9uQ2hhbmdlID0ge2NoYW5nZVVzZXJuYW1lfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBjbGFzc05hbWUgPSBcInVzZXJwd1wiICBvbkNoYW5nZSA9IHtjaGFuZ2VVc2VycHd9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIGNsYXNzTmFtZSA9IFwiYWNjb3VudFwiICBvbkNoYW5nZSA9IHtjaGFuZ2VhY2NvdW50fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInRleHRcIiBjbGFzc05hbWUgPSBcIndhbGxldFwiIG9uQ2hhbmdlID0ge2NoYW5nZXdhbGxldH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJzdWJtaXRcIiB2YWx1ZSA9IFwi7ZqM7JuQ6rCA7J6FXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPGRpdj4tLS0tLS0tLTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgyPuuhnOq3uOyduCDrsqDtg4A8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQgPSB7aGFuZGxlbG9naW59PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJ0ZXh0XCIgb25DaGFuZ2UgPSB7bG9naW59Lz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIG9uQ2hhbmdlID0ge2xvZ2lucHd9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwic3VibWl0XCIgdmFsdWUgPSBcIuuhnOq3uOyduFwiLz5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIHsgc3RhdGUubG9naW5fYm9vbGVhbiA/IFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+7ZqM7JuQIOygleuztCDrsqDtg4A8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntzdGF0ZS51c2VyaWR9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntzdGF0ZS51c2VycHd9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntzdGF0ZS51c2VybmFtZX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+e3N0YXRlLmFjY291bnR9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntzdGF0ZS53YWxsZXR9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntzdGF0ZS5tc2d9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj7qs4Tsoowg7Lac6riILeyeheq4iSDqtIDrpqw8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0ID0ge3NlbmRpbmNvbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIG9uQ2hhbmdlID0ge2hhbmRsZWluY29tZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwic3VibWl0XCIgdmFsdWUgPSBcIuyeheq4iFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQgPSB7c2VuZG91dGNvbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIG9uQ2hhbmdlID0ge2hhbmRsZW91dGNvbWV9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGUgPSBcInN1Ym1pdFwiIHZhbHVlID0gXCLstpzquIhcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPjxzZWxlY3Qgb25DaGFuZ2UgPSB7b3JkZXJ0eXBlX2hhbmRsZX0+PG9wdGlvbiB2YWx1ZSA9IFwiXCI+66ek7IiYL+unpOuPhDwvb3B0aW9uPjxvcHRpb24gdmFsdWUgPSBcIjBcIj7rp6TsiJg8L29wdGlvbj48b3B0aW9uIHZhbHVlID0gXCIxXCI+66ek64+EPC9vcHRpb24+PC9zZWxlY3Q+PC9oMj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQgPSB7b3JkZXJTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZSA9IHtjYXNoX2Ftb3VudH0gdHlwZSA9IFwidGV4dFwiLz5LUldcclxuICAgICAgICAgICAgICAgICAgICA8YnIvPjxpbnB1dCBvbkNoYW5nZSA9IHtjb2luX2Ftb3VudH0gdHlwZSA9IFwidGV4dFwiLz48c2VsZWN0IG9uQ2hhbmdlID0ge2NvaW5fdW5pdF9zZW5kfT48b3B0aW9uPuy9lOyduCDshKDtg508L29wdGlvbj48b3B0aW9uIHZhbHVlID0gXCJidGNcIj5idGM8L29wdGlvbj48b3B0aW9uIHZhbHVlID0gXCJ3b25cIj53b248L29wdGlvbj48b3B0aW9uIHZhbHVlID0gXCJncm9vdFwiPmdyb290PC9vcHRpb24+PC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyLz48aW5wdXQgdHlwZSA9IFwic3VibWl0XCIgdmFsdWUgPSBcIuqxsOuemFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+ICBcclxuICAgICAgICAgICAgICAgIDwvPlxyXG5cclxuICAgICAgICAgICAgICAgIDogbG9naW5yZXN1bHRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxkaXY+LS0tLS0tLS08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMj7tirjrnpzsoJ3shZgg67Kg7YOAPC9oMj5cclxuICAgICAgICAgICAgICAgIDxoMz7snqXrtoA8L2gzPjxzcGFuIG9uQ2xpY2sgPSB7b3JkZXJsaXN0fT7sg4jroZzqs6Dsuag8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PntvcmRlcmxpc3RfdXBkYXRlfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj4gICBcclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXgiLCJleHBvcnQgY29uc3QgdXNlcl91cmwgPSAnaHR0cDovL2xvY2FsaG9zdDo0MDAzL2FwaS91c2VyJyIsImltcG9ydCB7Y3JlYXRlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlPXtcclxuICAgIGxvZ2luX2Jvb2xlYW46ZmFsc2UsXHJcbiAgICB1c2VyaWQ6JycsXHJcbiAgICB1c2VycHc6JycsXHJcbiAgICB1c2VybmFtZTonJyxcclxuICAgIGFjY291bnQ6MCxcclxuICAgIHdhbGxldDowLFxyXG4gICAgbXNnOicnLFxyXG59O1xyXG5cclxuY29uc3QgU3RvcmUgPSBjcmVhdGVDb250ZXh0KGluaXRpYWxTdGF0ZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yZSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsidXNlcl91cmwiLCJqb2luX3N1Y2Nlc3MiLCJib2R5Iiwib3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiZmV0Y2giLCJpbmNvbWVfY2hhbmdlIiwib3V0Y29tZV9jaGFuZ2UiLCJvcmRlciIsInRyYW5zYWN0aW9uX3NlbGxlciIsInRyYW5zYWN0aW9uX2J1eWVyIiwidHJhbnNhY3Rpb25fYWN0aXZlIiwidHJhbnNhY3Rpb25fY29pbiIsIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZVJlZHVjZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlN0b3JlIiwiaW5kZXgiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlcmlkIiwic2V0VXNlcmlkIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInVzZXJwdyIsInNldFVzZXJwdyIsImFjY291bnQiLCJzZXRhY2NvdW50Iiwid2FsbGV0Iiwic2V0d2FsbGV0IiwibG9naW5jaGVja3Jlc3VsdCIsInNldGxvZ2luY2hlY2tyZXN1bHQiLCJjaGFuZ2VVc2VyaWQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjaGFuZ2VVc2VybmFtZSIsImNoYW5nZVVzZXJwdyIsImNoYW5nZWFjY291bnQiLCJjaGFuZ2V3YWxsZXQiLCJjaGVja3VzZXJpZCIsInByZXZlbnREZWZhdWx0IiwicmVzdWx0IiwianNvbiIsImhhbmRsZVN1Ym1pdCIsImxvZ2ludXNlcmlkIiwic2V0bG9naW51c2VyaWQiLCJsb2dpbnVzZXJwdyIsInNldGxvZ2ludXNlcnB3IiwibG9naW5yZXN1bHQiLCJzZXRsb2dpbnJlc3VsdCIsImxvZ2luIiwibG9naW5wdyIsImhhbmRsZWxvZ2luIiwibXNnIiwiYm9vbGVhbiIsInR5cGUiLCJwYXlsb2FkIiwiY29udGVudCIsImluY29tZSIsInNldGluY29tZSIsIm91dGNvbWUiLCJzZXRvdXRjb21lIiwiaGFuZGxlaW5jb21lIiwiaGFuZGxlb3V0Y29tZSIsInNlbmRpbmNvbWUiLCJub3ciLCJOdW1iZXIiLCJzZW5kb3V0Y29tZSIsImNhc2giLCJzZXRjYXNoIiwiY29pbiIsInNldGNvaW4iLCJjb2luX3VuaXQiLCJjb2luX3VuaXRfaGFuZGxlIiwib3JkZXJ0eXBlIiwic2V0b3JkZXJ0eXBlIiwiY2FzaF9hbW91bnQiLCJjb2luX2Ftb3VudCIsImNvaW5fdW5pdF9zZW5kIiwib3JkZXJ0eXBlX2hhbmRsZSIsIm9yZGVyU3VibWl0IiwiY2FzaF91bml0X3NlbmQiLCJyZXNwb25zZV91c2VyaWQiLCJyZXN1bHRfdXNlcmlkIiwibGVuZ3RoIiwib3JkZXJsaXN0X3VwZGF0ZSIsInNldG9yZGVybGlzdCIsIm9yZGVybGlzdCIsImxvZ2luX2Jvb2xlYW4iLCJjcmVhdGVDb250ZXh0IiwiaW5pdGlhbFN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==