(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports;}
var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports;}
__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter});}};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module['default'];}:function getModuleExports(){return module;};__webpack_require__.d(getter,'a',getter);return getter;};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};__webpack_require__.p="/wp-content/themes/braillebug-theme/dist/";return __webpack_require__(__webpack_require__.s=46);})
({0:(function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});__webpack_exports__["capital"]=capital;__webpack_exports__["brailleSay"]=brailleSay;function classof(char){switch(char){case' ':return'space';case'.':return'period';case',':return'comma';case'!':return'exclamation';case'\'':return'apostraphe';case'-':return'hyphen';case'?':return'question-mark';case'#':return'hashtag';case'=':return'equals';case'+':return'plus';case'á':case'é':case'í':case'ó':case'ú':case'ü':case'ñ':case'¿':case'¡':return("es-"+char);default:return char;}}
function capital(classes){if(classes===void 0)classes='br-md';return("<div class=\""+classes+" br-capital\"></div>");}
function space(classes){if(classes===void 0)classes='br-md';return("<div class=\""+classes+" br-space\"></div>");}
function stringToBraille(string,classes){if(classes===void 0)classes='br-md';return string.split('').map(function(c){if(isAlpha(c)&&c==c.toLocaleUpperCase())
{return("<div class=\""+classes+" br-capital\"></div>\n<div class=\""+classes+" br-"+(classof(c))+"\"></div>");}
else{return("<div class=\""+classes+" br-"+(classof(c))+"\"></div>")}}).join('\n');}
function isAlpha(char){return char.toLocaleLowerCase()!=char.toLocaleUpperCase()}
function wordHasAlphas(word){return(word.split('').find(function(char){return isAlpha(char);})!==undefined);}
function brailleSayWord(string,classes){if(classes===void 0)classes='br-md';var markup;if(string==string.toLocaleUpperCase()){if(wordHasAlphas(string)){if(string.split('').length>1)
{markup=""+(capital(classes))+(capital(classes))+(stringToBraille(string.toLocaleLowerCase(),classes));}
else
{markup=""+(capital(classes))+(stringToBraille(string.toLocaleLowerCase(),classes));}}
else{markup=""+(stringToBraille(string.toLocaleLowerCase(),classes));}}
else{markup=stringToBraille(string,classes);}
return markup;}
function brailleSay(string,classes){if(classes===void 0)classes='br-md';if(string.includes(' ')){var words=string.split(' ');return words.map(function(w){return brailleSayWord(w,classes);}).join(("\n"+(space(classes))+"\n"));}
else{return brailleSayWord(string,classes);}}
__webpack_exports__["default"]=({brailleSay:brailleSay,});}),46:(function(module,exports,__webpack_require__){module.exports=__webpack_require__(0);})});