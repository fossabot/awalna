exports.ids = [3];
exports.modules = {

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(11).default
module.exports.__inject__ = function (context) {
  add("3cdaf01a", content, true, context)
};

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_signup_vue_vue_type_style_index_0_id_0a5562e3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_signup_vue_vue_type_style_index_0_id_0a5562e3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_signup_vue_vue_type_style_index_0_id_0a5562e3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_signup_vue_vue_type_style_index_0_id_0a5562e3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_signup_vue_vue_type_style_index_0_id_0a5562e3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container__login[data-v-0a5562e3]{max-width:500px!important;margin-top:30px!important}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/auth/signup.vue?vue&type=template&id=0a5562e3&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container container__login"},[_vm._ssrNode("<form class=\"box\" data-v-0a5562e3>","</form>",[(_vm.error)?_vm._ssrNode("<div data-v-0a5562e3>","</div>",[_c('AlertNotifRed',{attrs:{"msg":_vm.error}})],1):_vm._e(),_vm._ssrNode(" <div class=\"field\" data-v-0a5562e3><label class=\"label\" data-v-0a5562e3>Full Name</label> <div class=\"control\" data-v-0a5562e3><input type=\"text\" placeholder=\"mohamed benmohamed\""+(_vm._ssrAttr("value",(_vm.registerData.fullname)))+" class=\"input\" data-v-0a5562e3></div></div> <div class=\"field\" data-v-0a5562e3><label class=\"label\" data-v-0a5562e3>Email</label> <div class=\"control\" data-v-0a5562e3><input type=\"email\" placeholder=\"e.g. alex@example.com\""+(_vm._ssrAttr("value",(_vm.registerData.email)))+" class=\"input\" data-v-0a5562e3></div></div> <div class=\"field\" data-v-0a5562e3><label class=\"label\" data-v-0a5562e3>Password</label> <div class=\"control\" data-v-0a5562e3><input type=\"password\" placeholder=\"********\""+(_vm._ssrAttr("value",(_vm.registerData.password)))+" class=\"input\" data-v-0a5562e3></div></div> <div class=\"field\" data-v-0a5562e3><label class=\"label\" data-v-0a5562e3>conferm Password</label> <div class=\"control\" data-v-0a5562e3><input type=\"password\" placeholder=\"********\""+(_vm._ssrAttr("value",(_vm.cPassword)))+" class=\"input\" data-v-0a5562e3></div></div> <button class=\"button is-primary\" data-v-0a5562e3>Sign in</button>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/auth/signup.vue?vue&type=template&id=0a5562e3&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/auth/signup.vue?vue&type=script&lang=js&
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
/* harmony default export */ var signupvue_type_script_lang_js_ = ({
  data() {
    return {
      registerData: {
        fullname: "",
        email: "",
        password: ""
      },
      // loginData: {
      //   email: this.registerData.email,
      //   password: this.registerData.password,
      // },
      cPassword: "",
      hasError: true,
      error: ""
    };
  },

  computed: {},
  methods: {
    async register() {
      try {
        const user = await this.$axios.$post("/api/auth/signin", {
          fullname: this.registerData.fullname,
          email: this.registerData.email,
          password: this.registerData.password
        });
        this.$router.push({
          path: "/auth/login",
          query: {
            msg: "user registered successfully",
            email: this.registerData.email
          }
        });
      } catch (err) {
        this.error = "OPPS! Try again...";
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/auth/signup.vue?vue&type=script&lang=js&
 /* harmony default export */ var auth_signupvue_type_script_lang_js_ = (signupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/auth/signup.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(39)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  auth_signupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0a5562e3",
  "84bf1dfe"
  
)

/* harmony default export */ var signup = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=signup.js.map