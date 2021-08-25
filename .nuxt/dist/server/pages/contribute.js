exports.ids = [4];
exports.modules = {

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/contribute.vue?vue&type=template&id=71d48e80&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{staticClass:"box"},[_vm._ssrNode("<div class=\"field\"><label class=\"label\">Word</label> <div class=\"control\"><input name=\"Word\" type=\"text\" placeholder=\"Example\""+(_vm._ssrAttr("value",(_vm.Word)))+" class=\"input\"></div></div> <div class=\"field\"><label class=\"label\">synonyms</label> <div class=\"control\"><input name=\"synonyms\" type=\"text\" placeholder=\"Example\""+(_vm._ssrAttr("value",(_vm.synonyms)))+" class=\"input\"></div></div> <div class=\"field\"><label class=\"label\">origin</label> <div class=\"control\"><input name=\"origin\" type=\"text\" placeholder=\"Example\""+(_vm._ssrAttr("value",(_vm.origin)))+" class=\"input\"></div></div> "),_c('b-field',{attrs:{"label":"Description"}},[_c('editor',{attrs:{"type":"textarea","options":_vm.editorOptions,"html":_vm.editorHtml,"visible":_vm.editorVisible,"previewStyle":"bar","height":"300px","mode":"markdown","placeholder":"Example"},model:{value:(_vm.Description),callback:function ($$v) {_vm.Description=$$v},expression:"Description"}})],1),_vm._ssrNode(" "),_c('b-button',{attrs:{"type":"is-primary","disabled":!this.allowSubmit ? true : false},on:{"click":_vm.submitWord}},[_vm._v("submit")])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/contribute.vue?vue&type=template&id=71d48e80&

// EXTERNAL MODULE: external "@toast-ui/vue-editor"
var vue_editor_ = __webpack_require__(26);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contribute.vue?vue&type=script&lang=js&
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
//
//
//

/* harmony default export */ var contributevue_type_script_lang_js_ = ({
  middleware: "isAuthenticated",
  // it will use `isAuthenticated` middleware
  components: {
    editor: vue_editor_["Editor"]
  },

  data() {
    return {
      Word: "",
      synonyms: "",
      origin: "",
      Description: "",
      editorText: "This is initialValue.",
      editorOptions: {
        hideModeSwitch: true,
        language: "an_US",
        toolbarItems: ["heading", "bold", "italic", "strike", "divider", "hr", "quote", "divider", "ul", "ol", "divider", "outdent", "divider", "link", "divider"],
        language: "ar"
      },
      editorHtml: "",
      editorVisible: false
    };
  },

  methods: {
    async submitWord() {
      try {
        const user = await this.$axios.$post("/api/Word", {
          word: this.Word,
          synonyms: this.synonyms,
          origin: this.origin,
          description: this.Description,
          AddBy: this.getUserInfo.fullname
        }).then(() => {
          this.Word = "";
          this.synonyms = "";
          this.origin = "";
          this.Description = "";
        }); // console.log("word subbmited");

        this.$buefy.toast.open({
          message: "word added successfully!!",
          // message: "word subbmited correctly!",
          type: "is-success"
        });
      } catch (err) {
        console.log(err);
        this.$buefy.toast.open({
          duration: 5000,
          message: `Something's not good, 😢`,
          type: "is-danger"
        });
      }
    }

  },
  computed: {
    getUserInfo() {
      return this.$store.getters.getUserInfo;
    },

    allowSubmit() {
      if (this.Word && this.synonyms || this.Word && this.Description) return true;else return false;
    }

  }
});
// CONCATENATED MODULE: ./pages/contribute.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_contributevue_type_script_lang_js_ = (contributevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/contribute.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_contributevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "721a2a8a"
  
)

/* harmony default export */ var contribute = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=contribute.js.map