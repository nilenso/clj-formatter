// Compiled by ClojureScript 1.11.60 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('clj_formatter.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.browser.repl');
goog.require('cljfmt.core');
clj_formatter.core.get_unformatted_code = (function clj_formatter$core$get_unformatted_code(dom_query){
var elem = document.querySelector(dom_query);
return elem.value;
});
clj_formatter.core.format_code = (function clj_formatter$core$format_code(unformatted_code){
return cljfmt.core.reformat_string.cljs$core$IFn$_invoke$arity$1(unformatted_code);
});
clj_formatter.core.render_formatted_code = (function clj_formatter$core$render_formatted_code(formatted_code){
var output_div = document.getElementById("output");
return (output_div.innerText = formatted_code);
});
clj_formatter.core.handle_on_format = (function clj_formatter$core$handle_on_format(_){
return clj_formatter.core.render_formatted_code(clj_formatter.core.format_code(clj_formatter.core.get_unformatted_code("#unformatted-code-area")));
});
var el_7931 = document.getElementById("submit-unformatted-code");
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([el_7931], 0));

el_7931.addEventListener("click",clj_formatter.core.handle_on_format);
