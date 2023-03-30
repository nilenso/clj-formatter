// Compiled by ClojureScript 1.11.60 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('rewrite_clj.parser.string');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('rewrite_clj.node.stringz');
goog.require('rewrite_clj.reader');
goog.require('goog.string.StringBuffer');
/**
 * Flush buffer and add string to the given vector.
 */
rewrite_clj.parser.string.flush_into = (function rewrite_clj$parser$string$flush_into(lines,buf){
var s = buf.toString();
buf.clear();

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lines,s);
});
rewrite_clj.parser.string.read_string_data = (function rewrite_clj$parser$string$read_string_data(reader){
rewrite_clj.reader.ignore(reader);

var buf = (new goog.string.StringBuffer());
var escape_QMARK_ = false;
var lines = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5802__auto__ = rewrite_clj.reader.next(reader);
if(cljs.core.truth_(temp__5802__auto__)){
var c = temp__5802__auto__;
if(((cljs.core.not(escape_QMARK_)) && ((c === "\"")))){
return rewrite_clj.parser.string.flush_into(lines,buf);
} else {
if((c === "\n")){
var G__7167 = escape_QMARK_;
var G__7168 = rewrite_clj.parser.string.flush_into(lines,buf);
escape_QMARK_ = G__7167;
lines = G__7168;
continue;
} else {
buf.append(c);

var G__7169 = ((cljs.core.not(escape_QMARK_)) && ((c === "\\")));
var G__7170 = lines;
escape_QMARK_ = G__7169;
lines = G__7170;
continue;

}
}
} else {
return rewrite_clj.reader.throw_reader(reader,"Unexpected EOF while reading string.");
}
break;
}
});
rewrite_clj.parser.string.parse_string = (function rewrite_clj$parser$string$parse_string(reader){
return rewrite_clj.node.stringz.string_node(rewrite_clj.parser.string.read_string_data(reader));
});
rewrite_clj.parser.string.parse_regex = (function rewrite_clj$parser$string$parse_regex(reader){
var h = rewrite_clj.parser.string.read_string_data(reader);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",h);
});
