exports.ids = [1];
exports.modules = {

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(30);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(11).default
module.exports.__inject__ = function (context) {
  add("1a3c16aa", content, true, context)
};

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_style_index_0_id_698b23d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_style_index_0_id_698b23d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_style_index_0_id_698b23d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_style_index_0_id_698b23d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_style_index_0_id_698b23d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".jt[data-v-698b23d4]{position:relative;font-size:18vmin;font-family:sans-serif;text-transform:uppercase;font-display:swap}.jt__row[data-v-698b23d4]{display:block}.jt__row[data-v-698b23d4]:first-child{-webkit-clip-path:polygon(-10% 75%,110% 75%,110% 110%,-10% 110%);clip-path:polygon(-10% 75%,110% 75%,110% 110%,-10% 110%)}.jt__row[data-v-698b23d4]:nth-child(2){-webkit-clip-path:polygon(-10% 50%,110% 50%,110% 75.3%,-10% 75.3%);clip-path:polygon(-10% 50%,110% 50%,110% 75.3%,-10% 75.3%)}.jt__row[data-v-698b23d4]:nth-child(3){-webkit-clip-path:polygon(-10% 25%,110% 25%,110% 50.3%,-10% 50.3%);clip-path:polygon(-10% 25%,110% 25%,110% 50.3%,-10% 50.3%)}.jt__row[data-v-698b23d4]:nth-child(4){-webkit-clip-path:polygon(-10% 0,110% 0,110% 25.3%,-10% 25.3%);clip-path:polygon(-10% 0,110% 0,110% 25.3%,-10% 25.3%)}.jt__row.jt__row--sibling[data-v-698b23d4]{position:absolute;top:0;left:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;witdh:800px}.jt__text[data-v-698b23d4]{display:block;transform-origin:bottom left;-webkit-animation:moveIn-data-v-698b23d4 2s cubic-bezier(.36,0,.06,1) 0s infinite alternate;animation:moveIn-data-v-698b23d4 2s cubic-bezier(.36,0,.06,1) 0s infinite alternate}.jt__row:first-child .jt__text[data-v-698b23d4]{transform:translateY(-.1em)}.jt__row:nth-child(2) .jt__text[data-v-698b23d4]{transform:translateY(-.3em) scaleY(1.1)}.jt__row:nth-child(3) .jt__text[data-v-698b23d4]{transform:translateY(-.5em) scaleY(1.2)}.jt__row:nth-child(4) .jt__text[data-v-698b23d4]{transform:translateY(-.7em) scaleY(1.3)}.jt__row:nth-child(5) .jt__text[data-v-698b23d4]{transform:translateY(-.9em) scaleY(1.4)}.jt__row:nth-child(6) .jt__text[data-v-698b23d4]{transform:translateY(-1.1em) scaleY(1.5)}@-webkit-keyframes moveIn-data-v-698b23d4{50%,to{transform:translateY(0)}0%{opacity:0;filter:blur(5px)}to{opacity:1;filter:blur(0)}}@keyframes moveIn-data-v-698b23d4{50%,to{transform:translateY(0)}0%{opacity:0;filter:blur(5px)}to{opacity:1;filter:blur(0)}}.debug .jt__row[data-v-698b23d4]:nth-child(2n){color:#000;background:#fff}.debug .jt__row[data-v-698b23d4]:nth-child(odd){color:#fff;background:#000}*[data-v-698b23d4]{box-sizing:border-box}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/loading.vue?vue&type=template&id=698b23d4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<h1 class=\"jt --debug\" data-v-698b23d4><span class=\"jt__row\" data-v-698b23d4><span class=\"jt__text\" data-v-698b23d4>Awalna</span></span> <span aria-hidden=\"true\" class=\"jt__row jt__row--sibling\" data-v-698b23d4><span class=\"jt__text\" data-v-698b23d4>Awalna</span></span> <span aria-hidden=\"true\" class=\"jt__row jt__row--sibling\" data-v-698b23d4><span class=\"jt__text\" data-v-698b23d4>Awalna</span></span> <span aria-hidden=\"true\" class=\"jt__row jt__row--sibling\" data-v-698b23d4><span class=\"jt__text\" data-v-698b23d4>Awalna</span></span></h1> <p class=\"has-text-centered is-capitalized is-size-3\" data-v-698b23d4>Loading data ....</p>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/loading.vue?vue&type=template&id=698b23d4&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/loading.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var loadingvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_loadingvue_type_script_lang_js_ = (loadingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/loading.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(29)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_loadingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "698b23d4",
  "5b2777b4"
  
)

/* harmony default export */ var loading = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(36);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(11).default
module.exports.__inject__ = function (context) {
  add("3f420887", content, true, context)
};

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_allword_vue_vue_type_style_index_0_id_75127bfc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_allword_vue_vue_type_style_index_0_id_75127bfc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_allword_vue_vue_type_style_index_0_id_75127bfc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_allword_vue_vue_type_style_index_0_id_75127bfc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_allword_vue_vue_type_style_index_0_id_75127bfc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".box[data-v-75127bfc]{width:300px}.pag[data-v-75127bfc]{width:90%;margin-left:auto;margin-right:auto}.container__allword[data-v-75127bfc]{margin-top:6rem!important;display:grid;width:90%;margin:0 auto;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));justify-content:center}@media only screen and (max-width:800px){.container__allword[data-v-75127bfc]{display:flex;justify-content:center;align-content:center;flex-wrap:wrap}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/allword.vue?vue&type=template&id=75127bfc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"is-flex is-flex-direction-column"},[(_vm.loading)?_c('loading',{staticClass:"is-align-self-center is-flex-direction-column"}):_c('section',{staticClass:"container container__allword"},[_vm._l((_vm.data.slice(
        (this.current - 1) * this.perPage,
        this.current * this.perPage
      )),function(d,index){return _c('b-button',{key:index,staticClass:"box is-primary is-light",on:{"click":function($event){(_vm.isCardModalActive = true) && (_vm.Word = d)}}},[_vm._v("\n      "+_vm._s(d.word)+"\n    ")])}),_vm._v(" "),_c('b-modal',{attrs:{"avitive":_vm.isCardModalActive,"width":640,"scroll":"keep"},model:{value:(_vm.isCardModalActive),callback:function ($$v) {_vm.isCardModalActive=$$v},expression:"isCardModalActive"}},[_c('WordCard',{attrs:{"Word":_vm.Word}})],1)],2),_vm._ssrNode(" "),(_vm.data.length)?_c('b-pagination',{staticClass:"mt-6 pag",attrs:{"total":_vm.total,"range-before":_vm.rangeBefore,"range-after":_vm.rangeAfter,"order":_vm.order,"size":_vm.size,"simple":_vm.isSimple,"rounded":_vm.isRounded,"per-page":_vm.perPage,"icon-prev":_vm.prevIcon,"icon-next":_vm.nextIcon,"aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page"},model:{value:(_vm.current),callback:function ($$v) {_vm.current=$$v},expression:"current"}}):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"is-flex is-justify-content-space-around is-flex-wrap-wrap mt-6\" data-v-75127bfc>","</div>",[_c('b-button',{staticClass:"box his-primary",on:{"click":_vm.getpendingWords}},[_vm._v("\n      get panding words\n    ")]),_vm._ssrNode(" "),_c('b-button',{staticClass:"box his-primary",on:{"click":_vm.getapprovedWords}},[_vm._v("\n      get approved words\n    ")])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/allword.vue?vue&type=template&id=75127bfc&scoped=true&

// EXTERNAL MODULE: ./components/loading.vue + 4 modules
var loading = __webpack_require__(31);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/allword.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var allwordvue_type_script_lang_js_ = ({
  components: {
    loading: loading["a" /* default */]
  },

  // middleware: ["isAuthenticated", "isAdmin"],
  data() {
    return {
      loading: true,
      total: 0,
      current: 1,
      perPage: 21,
      rangeBefore: 2,
      rangeAfter: 1,
      order: "is-centered",
      size: "is-medium",
      isSimple: true,
      isRounded: true,
      prevIcon: "chevron-left",
      nextIcon: "chevron-right",
      isCardModalActive: false,
      Word: {},
      data: [],
      Allword: []
    };
  },

  methods: {
    getpendingWords() {
      this.data = this.Allword.filter(word => word.status == "pending");
      this.total = this.data.length;
    },

    getapprovedWords() {
      this.data = this.Allword.filter(word => word.status == "approved");
      this.total = this.data.length;
    },

    paginations(start, end) {
      return this.data = this.data.slice(start, end);
    }

  },

  async created() {
    await this.$axios.$get("/api/Word").then(data => {
      this.Allword = data;
      this.loading = false;
    });
  }

});
// CONCATENATED MODULE: ./pages/admin/allword.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_allwordvue_type_script_lang_js_ = (allwordvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/admin/allword.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(35)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_allwordvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "75127bfc",
  "17e45ae6"
  
)

/* harmony default export */ var allword = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=allword.js.map