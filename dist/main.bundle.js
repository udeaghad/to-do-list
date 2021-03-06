"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([[0],[
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modules_loadstorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _modules_checkitem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
// import _ from 'lodash';





// load data on page refresh
window.addEventListener('load', _modules_loadstorage_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

// Create empty array to take values
let taskList = [];
const inputAdd = document.querySelector('#to-do-input');
const container = document.querySelector('.to-do-cont');

class Task {
  constructor(descr, completed, index = 0) {
    this.descr = descr;
    this.completed = completed;
    this.index = index;
  }
}

// Function to assign numbers to index after every action
const numberIndex = () => {
  const dataStorage = JSON.parse(localStorage.getItem('taskList'));

  let newIndex = 1;
  for (let i = 0; i < dataStorage.length; i += 1) {
    dataStorage[i].index = newIndex;
    newIndex += 1;
  }
  localStorage.setItem('taskList', JSON.stringify(dataStorage));
};

let index = 0;

// Function to create items to display and store at local storage
const addItem = () => {
  const addTask = new Task(inputAdd.value, false, index);

  taskList.push(addTask);

  index += 1;

  localStorage.setItem('taskList', JSON.stringify(taskList));

  // To create each element nodes
  const container = document.querySelector('.to-do-cont');
  const listContainer = document.createElement('div');
  listContainer.classList.add('list');
  container.appendChild(listContainer);

  const listItem = document.createElement('ul');
  listItem.classList.add('list-item');

  const checkbox = document.createElement('input');
  checkbox.classList.add('check-box');
  checkbox.type = 'checkbox';

  const listInfo = document.createElement('li');
  listInfo.classList.add('list-info');

  listInfo.innerHTML = inputAdd.value;

  inputAdd.value = '';

  const editIcon = document.createElement('i');
  editIcon.classList.add('fa-solid', 'fa-ellipsis-vertical', 'icon');

  listContainer.appendChild(listItem);

  listItem.append(checkbox, listInfo, editIcon);
  let editIndex;
  // Create new input node and replace the old node on edit button click

  editIcon.addEventListener('click', () => {
    const editCont = document.createElement('div');
    editCont.classList.add('edit-con');
    const editInput = document.createElement('input');
    editInput.classList.add('edit-input');
    const editMsg = document.createElement('span');
    editMsg.classList.add('edit-msg');
    editMsg.innerHTML = "Press 'Enter' to save changes";
    editCont.append(editInput, editMsg);
    listItem.replaceChild(editCont, listInfo);
    editInput.value = listInfo.innerHTML;

    const storedData = JSON.parse(localStorage.getItem('taskList'));

    const newData = storedData.filter((arr) => arr.descr !== listInfo.innerHTML);

    taskList = taskList.filter((arr, i) => {
      if (arr.descr === listInfo.innerHTML) {
        editIndex = i;
      }
      return arr.descr !== listInfo.innerHTML;
    });

    localStorage.setItem('taskList', JSON.stringify(newData));

    // Replace input node with another node and also holding the value of the input node
    editInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        listItem.replaceChild(listInfo, editCont);
        listInfo.innerHTML = editInput.value;
        const storedData = JSON.parse(localStorage.getItem('taskList'));

        const editedTask = new Task(listInfo.innerHTML, false, index);

        storedData.splice(editIndex, 0, editedTask);

        taskList.splice(editIndex, 0, editedTask);

        localStorage.setItem('taskList', JSON.stringify(storedData));

        numberIndex();
      }
    });
  });

  numberIndex();
};

// add event listerner to the imported checkItem to perform their functions
container.addEventListener('click', _modules_checkitem_js__WEBPACK_IMPORTED_MODULE_2__["default"]);

// add event listener to the input to create items added on the addItem function
inputAdd.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();

    addItem();
  }
});


/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nmain {\r\n  background-color: rgb(231, 231, 231);\r\n  height: 100%;\r\n  padding: 10% 3% 15% 3%;\r\n}\r\n\r\n.heading {\r\n  display: flex;\r\n  height: 100px;\r\n  background-color: white;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding-right: 24px;\r\n  border-radius: 10px 10px 0 0;\r\n}\r\n\r\nh1 {\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  font-size: 32px;\r\n  padding-left: 18px;\r\n}\r\n\r\n.input-field {\r\n  margin-top: 5px;\r\n  height: 100px;\r\n  width: 100%;\r\n  display: flex;\r\n  background-color: white;\r\n  align-items: center;\r\n  padding: 24px;\r\n}\r\n\r\n#to-do-input {\r\n  width: 100%;\r\n  border: none;\r\n  font-size: 32px;\r\n  font-style: italic;\r\n}\r\n\r\n.edit-input {\r\n  width: 100%;\r\n  font-size: 32px;\r\n  font-style: italic;\r\n  border: 1px solid gray;\r\n}\r\n\r\n.fa-solid {\r\n  font-weight: 900;\r\n  font-size: 18px;\r\n}\r\n\r\n.list {\r\n  width: 100%;\r\n  border: none;\r\n  font-size: 28px;\r\n  background-color: white;\r\n  margin-top: 5px;\r\n}\r\n\r\n.list-item {\r\n  display: flex;\r\n  height: 100px;\r\n  align-items: center;\r\n  gap: 12px;\r\n  list-style: none;\r\n  padding: 12px;\r\n}\r\n\r\n.check-box {\r\n  width: 42px;\r\n  height: 42px;\r\n}\r\n\r\n.newInput {\r\n  width: 88%;\r\n  font-size: 32px;\r\n  font-style: italic;\r\n}\r\n\r\n.list-info {\r\n  font-size: 32px;\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  width: 92%;\r\n}\r\n\r\n.clear-btn {\r\n  width: 100%;\r\n  height: 150px;\r\n  font-size: 32px;\r\n  font-style: italic;\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  border: none;\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n\r\nsection {\r\n  margin: 10px 10px 10px 10px;\r\n}\r\n\r\n.line-through {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.edit-msg {\r\n  color: red;\r\n  font-size: 16px;\r\n}\r\n\r\n.edit-con {\r\n  height: 50%;\r\n  width: 93%;\r\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 10 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadFromStorage)
/* harmony export */ });
// load list items from local storage

const loadFromStorage = () => {
  const dataStorage = JSON.parse(localStorage.getItem('taskList'));
  if (dataStorage) {
    for (let i = 0; i < dataStorage.length; i += 1) {
      const container = document.querySelector('.to-do-cont');
      const listContainer = document.createElement('div');
      listContainer.classList.add('list');
      container.appendChild(listContainer);

      const listItem = document.createElement('ul');
      listItem.classList.add('list-item');

      const checkbox = document.createElement('input');
      checkbox.classList.add('check-box');
      checkbox.type = 'checkbox';

      const listInfo = document.createElement('li');
      listInfo.classList.add('list-info');
      listInfo.innerHTML = `${dataStorage[i].descr}`;

      const editIcon = document.createElement('i');
      editIcon.classList.add('fa-solid', 'fa-ellipsis-vertical', 'icon');

      listContainer.appendChild(listItem);

      listItem.append(checkbox, listInfo, editIcon);

      editIcon.addEventListener('click', () => {
        const editInput = document.createElement('input');
        editInput.classList.add('edit-input');
        listItem.replaceChild(editInput, listInfo);
        editInput.value = listInfo.innerHTML;

        editInput.addEventListener('keypress', (e) => {
          if (e.key === 'Enter') {
            listItem.replaceChild(listInfo, editInput);
            listInfo.innerHTML = editInput.value;
          }
        });
      });
    }
  }
};



/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ checkItem)
/* harmony export */ });
let taskList = [];
// To re-number the index after every action
const numberIndex = () => {
  const dataStorage = JSON.parse(localStorage.getItem('taskList'));

  let newIndex = 1;
  for (let i = 0; i < dataStorage.length; i += 1) {
    dataStorage[i].index = newIndex;
    newIndex += 1;
  }
  localStorage.setItem('taskList', JSON.stringify(dataStorage));
};

// Create events when checkbox is clicked
const checkItem = () => {
  const listItem = document.querySelectorAll('.list-item');
  const list = document.querySelectorAll('.list');

  listItem.forEach(() => {
    const checkbox = document.querySelectorAll('.check-box');
    const listInfo = document.querySelectorAll('.list-info');
    const iconImg = document.querySelectorAll('.icon');
    const clearBtn = document.querySelector('#clear-btn');
    const storageData = JSON.parse(localStorage.getItem('taskList'));
    // Strike the item, show trash icon,and change the value of completed when checked
    for (let i = 0; i < checkbox.length; i += 1) {
      if (checkbox[i].checked) {
        listInfo[i].classList.add('line-through');
        iconImg[i].classList = 'fa-solid fa-trash icon';

        storageData[i].completed = true;
      } else if (checkbox[i].checked === false && listInfo[i]) {
        listInfo[i].classList = 'list-info';
        iconImg[i].classList = 'fa-solid fa-ellipsis-vertical icon';
        storageData[i].completed = false;
      }
      localStorage.setItem('taskList', JSON.stringify(storageData));
    }

    // Remove item from the list when the trash icon is clicked
    iconImg.forEach((i) => i.addEventListener('click', () => {
      for (let i = 0; i < checkbox.length; i += 1) {
        if (iconImg[i].classList.contains('fa-trash')) {
          list[i].remove();
          const storedData = JSON.parse(localStorage.getItem('taskList'));

          const newData = storedData.filter((arr) => arr.descr !== listInfo[i].innerHTML);
          taskList = taskList.filter((arr) => arr.descr !== listInfo[i].innerHTML);

          localStorage.setItem('taskList', JSON.stringify(newData));
          numberIndex();
        }
      }
    }));
    // Remove checked lists when clear button is clicked
    clearBtn.addEventListener('click', () => {
      for (let i = 0; i < checkbox.length; i += 1) {
        if (iconImg[i].classList.contains('fa-trash')) {
          list[i].remove();
          const storedData = JSON.parse(localStorage.getItem('taskList'));

          const newData = storedData.filter((arr) => arr.descr !== listInfo[i].innerHTML);
          taskList = taskList.filter((arr) => arr.descr !== listInfo[i].innerHTML);

          localStorage.setItem('taskList', JSON.stringify(newData));

          numberIndex();
        }
      }
    });
  });
};



/***/ })
],
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(0));
/******/ }
]);