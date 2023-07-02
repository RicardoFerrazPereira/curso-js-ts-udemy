/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modulo1.js":
/*!************************!*\
  !*** ./src/modulo1.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ soma),
/* harmony export */   idade: () => (/* binding */ idade),
/* harmony export */   nome: () => (/* binding */ nome)
/* harmony export */ });
// const nome = 'Farrock';
// const sobrenome = 'Bulsara';
// const idade = 2;

// function soma(x, y) {
//     return x + y;
// }

///////  1  //////////

// export { nome, idade, soma };

/////////// 3 /////////////

//export { nome, idade as anos, soma };

/////////  4 - EXPORTANDO TUDA NA CRIAÇÃO

// export const nome = 'Farrock';
// export const sobrenome = 'Bulsara';
// export const idade = 2;

// export function soma(x, y) {
//     return x + y;
// }

// export class Pessoa {
//     constructor(nome, sobrenome) {
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//     }
// }

///// DEFAULT  ////

// export default function soma(x, y) {
//     return x + y;
// }

//// EXPORTANDO COMO DEFAULT

var nome = 'Farrock';
var sobrenome = 'Bulsara';
var idade = 2;
function soma(x, y) {
  return x + y;
}
 // Só a variável nome é padrão

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modulo1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulo1 */ "./src/modulo1.js");
/////////  1  ////////////

// import { nome , idade, soma } from './modulo1';

// console.log(nome, idade);
// console.log(soma(5, 5));

/////////  2  ///////////

// import { nome as name , idade, soma } from './modulo1';

// const nome = 'Eddie';

// console.log(nome, name, idade);
// console.log(soma(5, 5));

/////////  3  ///////////

// import { nome, anos, soma } from './modulo1';

// const idade = 8;

// console.log(nome, anos, idade);
// console.log(soma(5, 5));

/////////  4  //////////

// import { nome, idade, soma, Pessoa } from './modulo1';

// const p1 = new Pessoa('Ricardo', 'Ferraz');
// console.log(p1);

///// IMPORTA TUDO

// import * as MeuModulo from './modulo1'; // Exportar tudo e nomeia de MeusModulos, de modulo1

// console.log(MeuModulo);

// DEFAULT -> sempre que a gente importar sem chave, estaremos importando do default

// import qualquerNome from './modulo1'; // Qualquer coisa que eu importo sem as chave {}, ele busca pelo padrão (default)

// console.log(qualquerNome(4, 4));

//// EXPORTANDO COMO DEFAULT


console.log((0,_modulo1__WEBPACK_IMPORTED_MODULE_0__["default"])(20, 35));
console.log('Vasco', 'Gama', 23, (50, 50));
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map