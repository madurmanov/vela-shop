/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/header/header.js":
/*!*************************************!*\
  !*** ./src/blocks/header/header.js ***!
  \*************************************/
/***/ (() => {

(function () {
  const HEADER_CLASS = 'Header';
  const HEADER_FIXED_CLASS = 'Header_fixed';
  const HEADER_FIXED_SHOW_CLASS = 'Header_fixedShow';
  document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector(`.${HEADER_CLASS}`);
    const headerHeight = header.offsetHeight;
    window.addEventListener('scroll', () => {
      if (window.scrollY > headerHeight) {
        if (!header.classList.contains(HEADER_FIXED_CLASS)) {
          header.classList.add(HEADER_FIXED_CLASS);
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              header.classList.add(HEADER_FIXED_SHOW_CLASS);
            });
          });
        }
      } else {
        header.classList.remove(HEADER_FIXED_CLASS);
        header.classList.remove(HEADER_FIXED_SHOW_CLASS);
      }
    });
  });
})();

/***/ }),

/***/ "./src/blocks/menu/menu.js":
/*!*********************************!*\
  !*** ./src/blocks/menu/menu.js ***!
  \*********************************/
/***/ (() => {

(function () {
  const BURGER_BUTTON_CLASS = 'Button_burger';
  const BURGER_BUTTON_OPEN_CLASS = 'Button_burgerOpen';
  const MENU_BUTTON_CLASS = 'Menu-Item-Button_hasMenu';
  const MENU_ITEM_CLASS = 'Menu-Item';
  const MENU_ITEM_ACTIVE = 'Menu-Item_active';
  const MENU_ITEM_CATALOG = 'Menu-Item_catalog';
  const SUBMENU_ITEM_CLASS = 'Menu-Item-Submenu-List-Item';
  const SUBMENU_ITEM_ACTIVE_CLASS = 'Menu-Item-Submenu-List-Item_active';
  const SUBMENU_ITEM_HAS_MENU_CLASS = 'Menu-Item-Submenu-List-Item_hasMenu';
  const INNER_SUBMENU_CLASS = 'Menu-Item-Submenu-InnerSubmenu';
  const INNER_SUBMENU_ACTIVE_CLASS = 'Menu-Item-Submenu-InnerSubmenu_active';
  const INNER_SUBMENU_ITEM_CLASS = 'Menu-Item-Submenu-InnerSubmenu-List-Item';
  const INNER_SUBMENU_ITEM_LINK_CLASS = 'Menu-Item-Submenu-InnerSubmenu-List-Item-Link';
  document.addEventListener('DOMContentLoaded', () => {
    const burgerButton = document.querySelector(`.${BURGER_BUTTON_CLASS}`);
    function initSubmenu(menuItem) {
      menuItem.querySelectorAll(`.${SUBMENU_ITEM_ACTIVE_CLASS}`).forEach(item => {
        item.classList.remove(SUBMENU_ITEM_ACTIVE_CLASS);
      });
      const submenuItem = menuItem.querySelector(`.${SUBMENU_ITEM_CLASS}`);
      if (submenuItem) {
        submenuItem.classList.add(SUBMENU_ITEM_ACTIVE_CLASS);
        menuItem.querySelectorAll(`.${INNER_SUBMENU_CLASS}`).forEach(innerSubmenu => {
          innerSubmenu.classList.remove(INNER_SUBMENU_ACTIVE_CLASS);
        });
        const secondSubmenu = menuItem.querySelector(`.${INNER_SUBMENU_CLASS}[data-secondsubmenu$="-1"]`);
        if (secondSubmenu) {
          secondSubmenu.classList.add(INNER_SUBMENU_ACTIVE_CLASS);
        }
        const thirdSubmenu = menuItem.querySelector(`.${INNER_SUBMENU_CLASS}[data-thirdsubmenu$="-1"]`);
        if (thirdSubmenu) {
          thirdSubmenu.classList.add(INNER_SUBMENU_ACTIVE_CLASS);
        }
      }
    }
    function toggleBurger() {
      if (burgerButton && !burgerButton.classList.contains(BURGER_BUTTON_OPEN_CLASS)) {
        burgerButton.classList.add(BURGER_BUTTON_OPEN_CLASS);
      } else {
        burgerButton.classList.remove(BURGER_BUTTON_OPEN_CLASS);
      }
    }
    function toggleCatalog() {
      const catalogItem = document.querySelector(`.${MENU_ITEM_CATALOG}`);
      if (catalogItem && !catalogItem.classList.contains(MENU_ITEM_ACTIVE)) {
        initSubmenu(catalogItem);
        catalogItem.classList.add(MENU_ITEM_ACTIVE);
      } else {
        catalogItem.classList.remove(MENU_ITEM_ACTIVE);
      }
    }
    if (burgerButton) {
      burgerButton.addEventListener('click', () => {
        toggleBurger();
        toggleCatalog();
      });
    }
    const menuItems = document.querySelectorAll(`.${MENU_ITEM_CLASS}`);
    document.querySelectorAll(`.${MENU_BUTTON_CLASS}`).forEach(button => {
      button.addEventListener('mouseenter', () => {
        const menuItem = button.parentElement;
        initSubmenu(menuItem);
        menuItems.forEach(item => {
          item.classList.remove(MENU_ITEM_ACTIVE);
        });
        menuItem.classList.add(MENU_ITEM_ACTIVE);
        if (burgerButton && burgerButton.classList.contains(BURGER_BUTTON_OPEN_CLASS)) {
          burgerButton.classList.remove(BURGER_BUTTON_OPEN_CLASS);
        }
      });
      button.addEventListener('mouseleave', () => {
        menuItems.forEach(item => {
          item.classList.remove(MENU_ITEM_ACTIVE);
        });
      });
    });
    document.querySelectorAll(`.${SUBMENU_ITEM_CLASS}`).forEach(item => {
      item.addEventListener('mouseenter', () => {
        if (item.classList.contains(SUBMENU_ITEM_HAS_MENU_CLASS)) {
          item.parentElement.querySelectorAll(`.${SUBMENU_ITEM_CLASS}`).forEach(submenuItem => submenuItem.classList.remove(SUBMENU_ITEM_ACTIVE_CLASS));
          item.classList.add(SUBMENU_ITEM_ACTIVE_CLASS);
          const secondSubmenu = document.querySelector(`.${INNER_SUBMENU_CLASS}[data-secondsubmenu=${item.dataset.secondsubmenu}]`);
          const thirdSubmenu = document.querySelector(`.${INNER_SUBMENU_CLASS}[data-thirdsubmenu=${item.dataset.thirdsubmenu}]`);
          if (secondSubmenu) {
            const secondSubmenuParent = secondSubmenu.parentElement;
            secondSubmenuParent.querySelectorAll(`.${INNER_SUBMENU_ACTIVE_CLASS}`).forEach(activeInnerSubmenu => {
              activeInnerSubmenu.classList.remove(INNER_SUBMENU_ACTIVE_CLASS);
            });
            secondSubmenu.classList.add(INNER_SUBMENU_ACTIVE_CLASS);
            if (thirdSubmenu) {
              thirdSubmenu.classList.add(INNER_SUBMENU_ACTIVE_CLASS);
            }
          }
        }
      });
    });
    document.querySelectorAll(`.${INNER_SUBMENU_ITEM_CLASS}`).forEach(item => {
      item.querySelector(`.${INNER_SUBMENU_ITEM_LINK_CLASS}`).addEventListener('mouseenter', () => {
        const thirdSubmenu = document.querySelector(`.${INNER_SUBMENU_CLASS}[data-thirdsubmenu=${item.dataset.thirdsubmenu}]`);
        if (thirdSubmenu) {
          item.closest(`.${MENU_ITEM_CLASS}`).querySelectorAll(`.${INNER_SUBMENU_CLASS}[data-thirdsubmenu]`).forEach(innerSubmenu => innerSubmenu.classList.remove(INNER_SUBMENU_ACTIVE_CLASS));
          thirdSubmenu.classList.add(INNER_SUBMENU_ACTIVE_CLASS);
        }
      });
    });
  });
})();

/***/ }),

/***/ "./src/css/main.scss":
/*!***************************!*\
  !*** ./src/css/main.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.scss */ "./src/css/main.scss");
/* harmony import */ var _blocks_header_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blocks/header/header.js */ "./src/blocks/header/header.js");
/* harmony import */ var _blocks_header_header_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blocks_header_header_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blocks_menu_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blocks/menu/menu.js */ "./src/blocks/menu/menu.js");
/* harmony import */ var _blocks_menu_menu_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_blocks_menu_menu_js__WEBPACK_IMPORTED_MODULE_2__);



})();

/******/ })()
;
//# sourceMappingURL=main.29b71f80e206b793c514.js.map