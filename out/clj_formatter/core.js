// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('clj_formatter.core');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
goog.require('cljfmt.core');
if((typeof clj_formatter !== 'undefined') && (typeof clj_formatter.core !== 'undefined') && (typeof clj_formatter.core.conn !== 'undefined')){
} else {
clj_formatter.core.conn = clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
}
clj_formatter.core.unformatted_clj_str_2 = "(let [x 3\n      y 4]\n  (+ (* x x) (* y y)))\n";
clj_formatter.core.debug = (function clj_formatter$core$debug(elem){
console.log(elem);

return elem;
});
clj_formatter.core.get_unformatted_code = (function clj_formatter$core$get_unformatted_code(dom_query){
var elem = document.querySelector(dom_query);
return elem.value;
});
clj_formatter.core.format_code = (function clj_formatter$core$format_code(unformatted_code){
return cljfmt.core.reformat_string.call(null,unformatted_code);
});
clj_formatter.core.render_formatted_code = (function clj_formatter$core$render_formatted_code(formatted_code){
var output_div = document.getElementById("output");
return (output_div.innerText = formatted_code);
});
clj_formatter.core.handle_on_format = (function clj_formatter$core$handle_on_format(_){
return clj_formatter.core.render_formatted_code.call(null,clj_formatter.core.debug.call(null,clj_formatter.core.format_code.call(null,clj_formatter.core.debug.call(null,clj_formatter.core.get_unformatted_code.call(null,"#unformatted-code-area")))));
});
var el_4344 = document.getElementById("submit-unformatted-code");
cljs.core.println.call(null,el_4344);

el_4344.addEventListener("click",clj_formatter.core.handle_on_format);

//# sourceMappingURL=core.js.map
