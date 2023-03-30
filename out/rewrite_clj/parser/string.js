// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('rewrite_clj.parser.string');
goog.require('cljs.core');
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

return cljs.core.conj.call(null,lines,s);
});
rewrite_clj.parser.string.read_string_data = (function rewrite_clj$parser$string$read_string_data(reader){
rewrite_clj.reader.ignore.call(null,reader);

var buf = (new goog.string.StringBuffer());
var escape_QMARK_ = false;
var lines = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5802__auto__ = rewrite_clj.reader.next.call(null,reader);
if(cljs.core.truth_(temp__5802__auto__)){
var c = temp__5802__auto__;
if(((cljs.core.not.call(null,escape_QMARK_)) && ((c === "\"")))){
return rewrite_clj.parser.string.flush_into.call(null,lines,buf);
} else {
if((c === "\n")){
var G__2866 = escape_QMARK_;
var G__2867 = rewrite_clj.parser.string.flush_into.call(null,lines,buf);
escape_QMARK_ = G__2866;
lines = G__2867;
continue;
} else {
buf.append(c);

var G__2868 = ((cljs.core.not.call(null,escape_QMARK_)) && ((c === "\\")));
var G__2869 = lines;
escape_QMARK_ = G__2868;
lines = G__2869;
continue;

}
}
} else {
return rewrite_clj.reader.throw_reader.call(null,reader,"Unexpected EOF while reading string.");
}
break;
}
});
rewrite_clj.parser.string.parse_string = (function rewrite_clj$parser$string$parse_string(reader){
return rewrite_clj.node.stringz.string_node.call(null,rewrite_clj.parser.string.read_string_data.call(null,reader));
});
rewrite_clj.parser.string.parse_regex = (function rewrite_clj$parser$string$parse_regex(reader){
var h = rewrite_clj.parser.string.read_string_data.call(null,reader);
return clojure.string.join.call(null,"\n",h);
});

//# sourceMappingURL=string.js.map
