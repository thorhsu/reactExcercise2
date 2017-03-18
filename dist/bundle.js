/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*****************!*\
  !*** ./app.jsx ***!
  \*****************/
/***/ function(module, exports, __webpack_require__) {

	var MembersBox = __webpack_require__(/*! MembersBox */ 1);
	
	ReactDOM.render(
	/*code here...*/
	React.createElement(MembersBox, { title: "React Member List", url: "https://randomuser.me/api/?results=50" }), document.getElementById('content'));

/***/ },
/* 1 */
/*!***********************************!*\
  !*** ./components/MembersBox.jsx ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var MemberList = __webpack_require__(/*! MemberList */ 2);
	
	var MembersBox = React.createClass({
	  displayName: 'MembersBox',
	
	  getInitialState: function () {
	    return {
	      data: [],
	      rowDatas: []
	    };
	  },
	  componentDidMount: function () {
	    $.get(this.props.url, this.setData, 'json');
	  },
	  setData: function (data) {
	    this.setState({ data: data.results });
	    var datas = [];
	    var rowData = [];
	    for (var i = 0; i < this.state.data.length; i++) {
	      var column = i % 4;
	      if (column === 0) {
	        if (i !== 0) {
	          datas.push(rowData);
	          rowData = [];
	        }
	      }
	      rowData.push(this.state.data[i]);
	    }
	    datas.push(rowData);
	    this.setState({ rowDatas: datas });
	  },
	  render: function () {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h1',
	        null,
	        this.props.title
	      ),
	      this.state.rowDatas.map(function (row) {
	        return React.createElement(MemberList, { data: row });
	      })
	    );
	  }
	});
	module.exports = MembersBox;

/***/ },
/* 2 */
/*!***********************************!*\
  !*** ./components/MemberList.jsx ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var MemberItem = __webpack_require__(/*! MemberItem */ 3);
	
	var MemberList = React.createClass({
	  displayName: "MemberList",
	
	  render: function () {
	    return React.createElement(
	      "div",
	      { className: "row voffset1" },
	      this.props.data.map(function (item) {
	        return React.createElement(MemberItem, { data: item });
	      })
	    );
	  }
	});
	module.exports = MemberList;

/***/ },
/* 3 */
/*!***********************************!*\
  !*** ./components/MemberItem.jsx ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var MemberDescription = __webpack_require__(/*! MemberDescription */ 4);
	
	var MemberItem = React.createClass({
	  displayName: "MemberItem",
	
	  getInitialState: function () {
	    return {
	      data: {},
	      description: false,
	      closeDetail: false
	    };
	  },
	  openDetail: function () {
	    if (!this.state.closeDetail) {
	      var data = this.props.data;
	      this.setState({
	        data: data,
	        description: true
	      });
	    }
	  },
	  close: function () {
	    this.state.closeDetail = true;
	    this.setState({
	      data: {},
	      description: false
	    });
	  },
	  componentWillUpdate: function (nextProps, nextStates) {
	    console.log(nextStates.data);
	  },
	  componentDidUpdate: function (prevProps, prevStates) {
	    this.state.closeDetail = false;
	  },
	  render: function () {
	    var showDes = "";
	    if (this.state.description) {
	      showDes = React.createElement(MemberDescription, { data: this.state.data, close: this.close });
	    }
	    return React.createElement(
	      "div",
	      { className: "col-sm-3", style: { "cursor": "pointer" }, onClick: this.openDetail },
	      React.createElement(
	        "div",
	        { className: "row" },
	        React.createElement(
	          "div",
	          { className: "col-sm-4" },
	          React.createElement("img", { src: this.props.data.picture.medium })
	        ),
	        React.createElement(
	          "div",
	          { className: "col-sm-8 text-left" },
	          React.createElement(
	            "strong",
	            null,
	            "First Name"
	          ),
	          ": ",
	          this.props.data.name.first,
	          React.createElement("br", null),
	          React.createElement(
	            "strong",
	            null,
	            "Last Name"
	          ),
	          ": ",
	          this.props.data.name.last,
	          React.createElement("br", null),
	          React.createElement(
	            "strong",
	            null,
	            "Gender"
	          ),
	          ": ",
	          this.props.data.gender
	        ),
	        showDes
	      )
	    );
	  }
	});
	module.exports = MemberItem;

/***/ },
/* 4 */
/*!******************************************!*\
  !*** ./components/MemberDescription.jsx ***!
  \******************************************/
/***/ function(module, exports) {

	var MemberDescription = React.createClass({
	  displayName: "MemberDescription",
	
	  close: function (e) {
	    e.preventDefault();
	    this.props.close();
	  },
	  render: function () {
	    return React.createElement(
	      "div",
	      { id: "tooltip" },
	      React.createElement(
	        "button",
	        { type: "button", id: "tt_close", className: "close", "data-aria-label": "Close", onClick: this.close },
	        React.createElement(
	          "span",
	          { "data-aria-hidden": "true" },
	          "\xD7"
	        )
	      ),
	      React.createElement(
	        "table",
	        { width: "100%" },
	        React.createElement(
	          "th",
	          null,
	          React.createElement(
	            "th",
	            { colspan: "2" },
	            React.createElement(
	              "p",
	              { className: "text-center" },
	              "Personal Profile"
	            )
	          ),
	          React.createElement("th", null)
	        ),
	        React.createElement(
	          "tr",
	          null,
	          React.createElement(
	            "td",
	            { rowSpan: "9" },
	            React.createElement("img", { src: this.props.data.picture.large })
	          ),
	          React.createElement(
	            "td",
	            null,
	            React.createElement(
	              "b",
	              null,
	              "Title:"
	            )
	          ),
	          React.createElement(
	            "td",
	            null,
	            this.props.data.name.title
	          )
	        ),
	        React.createElement(
	          "tr",
	          null,
	          React.createElement(
	            "td",
	            null,
	            React.createElement(
	              "b",
	              null,
	              "Name:"
	            )
	          ),
	          React.createElement(
	            "td",
	            null,
	            this.props.data.name.first + " " + this.props.data.name.first
	          )
	        ),
	        React.createElement(
	          "tr",
	          null,
	          React.createElement(
	            "td",
	            null,
	            React.createElement(
	              "b",
	              null,
	              "Cell:"
	            )
	          ),
	          React.createElement(
	            "td",
	            null,
	            this.props.data.cell
	          )
	        ),
	        React.createElement(
	          "tr",
	          null,
	          React.createElement(
	            "td",
	            null,
	            React.createElement(
	              "b",
	              null,
	              "Phone:"
	            )
	          ),
	          React.createElement(
	            "td",
	            null,
	            this.props.data.phone
	          )
	        ),
	        React.createElement(
	          "tr",
	          null,
	          React.createElement(
	            "td",
	            null,
	            React.createElement(
	              "b",
	              null,
	              "State:"
	            )
	          ),
	          React.createElement(
	            "td",
	            null,
	            this.props.data.location.state
	          )
	        ),
	        React.createElement(
	          "tr",
	          null,
	          React.createElement(
	            "td",
	            null,
	            React.createElement(
	              "b",
	              null,
	              "City:"
	            )
	          ),
	          React.createElement(
	            "td",
	            null,
	            this.props.data.location.city
	          )
	        ),
	        React.createElement(
	          "tr",
	          null,
	          React.createElement(
	            "td",
	            null,
	            React.createElement(
	              "b",
	              null,
	              "Street:"
	            )
	          ),
	          React.createElement(
	            "td",
	            null,
	            this.props.data.location.street
	          )
	        )
	      )
	    );
	  }
	});
	module.exports = MemberDescription;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map