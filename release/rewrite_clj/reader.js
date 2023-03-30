// Compiled by ClojureScript 1.11.60 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('rewrite_clj.reader');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.tools.reader.edn');
goog.require('cljs.tools.reader.impl.commons');
goog.require('cljs.tools.reader.impl.errors');
goog.require('cljs.tools.reader.impl.utils');
goog.require('cljs.tools.reader.reader_types');
goog.require('rewrite_clj.interop');
goog.require('goog.string.StringBuffer');
/**
 * Throw reader exception, including line line/column.
 */
rewrite_clj.reader.throw_reader = (function rewrite_clj$reader$throw_reader(var_args){
var args__5775__auto__ = [];
var len__5769__auto___5253 = arguments.length;
var i__5770__auto___5254 = (0);
while(true){
if((i__5770__auto___5254 < len__5769__auto___5253)){
args__5775__auto__.push((arguments[i__5770__auto___5254]));

var G__5255 = (i__5770__auto___5254 + (1));
i__5770__auto___5254 = G__5255;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return rewrite_clj.reader.throw_reader.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(rewrite_clj.reader.throw_reader.cljs$core$IFn$_invoke$arity$variadic = (function (reader,fmt,data){
var c = cljs.tools.reader.reader_types.get_column_number(reader);
var l = cljs.tools.reader.reader_types.get_line_number(reader);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rewrite_clj.interop.simple_format,fmt,data))," [at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),"]"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(rewrite_clj.reader.throw_reader.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rewrite_clj.reader.throw_reader.cljs$lang$applyTo = (function (seq5250){
var G__5251 = cljs.core.first(seq5250);
var seq5250__$1 = cljs.core.next(seq5250);
var G__5252 = cljs.core.first(seq5250__$1);
var seq5250__$2 = cljs.core.next(seq5250__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5251,G__5252,seq5250__$2);
}));

/**
 * Check whether a given char is a token boundary.
 */
rewrite_clj.reader.boundary_QMARK_ = (function rewrite_clj$reader$boundary_QMARK_(c){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 16, [null,null,"@",null,"`",null,"\"",null,"'",null,"(",null,")",null,":",null,";",null,"[",null,"{",null,"\\",null,"]",null,"}",null,"^",null,"~",null], null), null),c);
});
rewrite_clj.reader.comma_QMARK_ = (function rewrite_clj$reader$comma_QMARK_(c){
return ("," === c);
});
/**
 * Checks whether a given character is whitespace
 */
rewrite_clj.reader.whitespace_QMARK_ = (function rewrite_clj$reader$whitespace_QMARK_(c){
return rewrite_clj.interop.clojure_whitespace_QMARK_(c);
});
/**
 * Checks whether the character is a newline
 */
rewrite_clj.reader.linebreak_QMARK_ = (function rewrite_clj$reader$linebreak_QMARK_(c){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["\n",null,"\r",null], null), null),c);
});
/**
 * Checks whether the character is a space
 */
rewrite_clj.reader.space_QMARK_ = (function rewrite_clj$reader$space_QMARK_(c){
var and__5043__auto__ = c;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = rewrite_clj.reader.whitespace_QMARK_(c);
if(cljs.core.truth_(and__5043__auto____$1)){
return (!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["\n",null,",",null,"\r",null], null), null),c)));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
});
rewrite_clj.reader.whitespace_or_boundary_QMARK_ = (function rewrite_clj$reader$whitespace_or_boundary_QMARK_(c){
var or__5045__auto__ = rewrite_clj.reader.whitespace_QMARK_(c);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return rewrite_clj.reader.boundary_QMARK_(c);
}
});
/**
 * Read while the chars fulfill the given condition. Ignores
 *  the unmatching char.
 */
rewrite_clj.reader.read_while = (function rewrite_clj$reader$read_while(var_args){
var G__5257 = arguments.length;
switch (G__5257) {
case 2:
return rewrite_clj.reader.read_while.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.reader.read_while.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.reader.read_while.cljs$core$IFn$_invoke$arity$2 = (function (reader,p_QMARK_){
return rewrite_clj.reader.read_while.cljs$core$IFn$_invoke$arity$3(reader,p_QMARK_,cljs.core.not((p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? p_QMARK_.cljs$core$IFn$_invoke$arity$1(null) : p_QMARK_.call(null,null))));
}));

(rewrite_clj.reader.read_while.cljs$core$IFn$_invoke$arity$3 = (function (reader,p_QMARK_,eof_QMARK_){
var buf = (new goog.string.StringBuffer());
while(true){
var temp__5802__auto__ = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if(cljs.core.truth_(temp__5802__auto__)){
var c = temp__5802__auto__;
if(cljs.core.truth_((p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? p_QMARK_.cljs$core$IFn$_invoke$arity$1(c) : p_QMARK_.call(null,c)))){
buf.append(c);

continue;
} else {
reader.cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2(null,c);

return buf.toString();
}
} else {
if(cljs.core.truth_(eof_QMARK_)){
return buf.toString();
} else {
return rewrite_clj.reader.throw_reader(reader,"unexpected EOF");
}
}
break;
}
}));

(rewrite_clj.reader.read_while.cljs$lang$maxFixedArity = 3);

/**
 * Read until a char fulfills the given condition. Ignores the
 * matching char.
 */
rewrite_clj.reader.read_until = (function rewrite_clj$reader$read_until(reader,p_QMARK_){
return rewrite_clj.reader.read_while.cljs$core$IFn$_invoke$arity$3(reader,cljs.core.complement(p_QMARK_),(p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? p_QMARK_.cljs$core$IFn$_invoke$arity$1(null) : p_QMARK_.call(null,null)));
});
/**
 * Read until linebreak and include it.
 */
rewrite_clj.reader.read_include_linebreak = (function rewrite_clj$reader$read_include_linebreak(reader){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_clj.reader.read_until(reader,(function (p1__5259_SHARP_){
return (((p1__5259_SHARP_ == null)) || (rewrite_clj.reader.linebreak_QMARK_(p1__5259_SHARP_)));
}))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null))].join('');
});
/**
 * Convert string to EDN value.
 */
rewrite_clj.reader.string__GT_edn = (function rewrite_clj$reader$string__GT_edn(s){
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$1(s);
});
/**
 * Ignore the next character.
 */
rewrite_clj.reader.ignore = (function rewrite_clj$reader$ignore(reader){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return null;
});
/**
 * Read next char.
 */
rewrite_clj.reader.next = (function rewrite_clj$reader$next(reader){
return reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
});
/**
 * Unreads a char. Puts the char back on the reader.
 */
rewrite_clj.reader.unread = (function rewrite_clj$reader$unread(reader,ch){
return reader.cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2(null,ch);
});
/**
 * Peek next char.
 */
rewrite_clj.reader.peek = (function rewrite_clj$reader$peek(reader){
var ch = reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null);
if(("\r" === ch)){
return "\n";
} else {
return ch;
}
});
/**
 * Create map of `row-k` and `col-k` representing the current reader position.
 */
rewrite_clj.reader.position = (function rewrite_clj$reader$position(reader,row_k,col_k){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([row_k,reader.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1(null),col_k,reader.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1(null)]);
});
/**
 * Use the given function to read value, then attach row/col metadata.
 */
rewrite_clj.reader.read_with_meta = (function rewrite_clj$reader$read_with_meta(reader,read_fn){
var start_position = rewrite_clj.reader.position(reader,cljs.core.cst$kw$row,cljs.core.cst$kw$col);
var temp__5804__auto__ = (read_fn.cljs$core$IFn$_invoke$arity$1 ? read_fn.cljs$core$IFn$_invoke$arity$1(reader) : read_fn.call(null,reader));
if(cljs.core.truth_(temp__5804__auto__)){
var entry = temp__5804__auto__;
return cljs.core.with_meta(entry,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([start_position,rewrite_clj.reader.position(reader,cljs.core.cst$kw$end_DASH_row,cljs.core.cst$kw$end_DASH_col)], 0)));
} else {
return null;
}
});
/**
 * Call the given function on the given reader until it returns
 * a non-truthy value.
 */
rewrite_clj.reader.read_repeatedly = (function rewrite_clj$reader$read_repeatedly(reader,read_fn){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return (read_fn.cljs$core$IFn$_invoke$arity$1 ? read_fn.cljs$core$IFn$_invoke$arity$1(reader) : read_fn.call(null,reader));
}))));
});
/**
 * Call the given function on the given reader until `n` values matching `p?` have been
 * collected.
 */
rewrite_clj.reader.read_n = (function rewrite_clj$reader$read_n(reader,node_tag,read_fn,p_QMARK_,n){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var c = (0);
var vs = cljs.core.PersistentVector.EMPTY;
while(true){
if((c < n)){
var temp__5802__auto__ = (read_fn.cljs$core$IFn$_invoke$arity$1 ? read_fn.cljs$core$IFn$_invoke$arity$1(reader) : read_fn.call(null,reader));
if(cljs.core.truth_(temp__5802__auto__)){
var v = temp__5802__auto__;
var G__5260 = (cljs.core.truth_((p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? p_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : p_QMARK_.call(null,v)))?(c + (1)):c);
var G__5261 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vs,v);
c = G__5260;
vs = G__5261;
continue;
} else {
return rewrite_clj.reader.throw_reader.cljs$core$IFn$_invoke$arity$variadic(reader,"%s node expects %d value%s.",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node_tag,n,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(1)))?"":"s")], 0));
}
} else {
return vs;
}
break;
}
});
/**
 * This customized version of clojure.tools.reader.edn's read-keyword allows for
 *   an embedded `::` in a keyword to to support [garden-style keywords](https://github.com/noprompt/garden)
 *   like `:&::before`. This function was transcribed from clj-kondo.
 */
rewrite_clj.reader.read_keyword = (function rewrite_clj$reader$read_keyword(reader){
var ch = cljs.tools.reader.reader_types.read_char(reader);
if((!(cljs.tools.reader.impl.utils.whitespace_QMARK_(ch)))){
var token = (function (){var G__5263 = reader;
var G__5264 = cljs.core.cst$kw$keyword;
var G__5265 = ch;
var fexpr__5262 = new cljs.core.Var(function(){return cljs.tools.reader.edn.read_token;},cljs.core.cst$sym$cljs$tools$reader$edn_SLASH_read_DASH_token,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$top_DASH_fn,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$tools$reader$edn,cljs.core.cst$sym$read_DASH_token,"release/cljs/tools/reader/edn.cljs",18,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$variadic_QMARK_,false,cljs.core.cst$kw$fixed_DASH_arity,4,cljs.core.cst$kw$max_DASH_fixed_DASH_arity,4,cljs.core.cst$kw$method_DASH_params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$rdr,cljs.core.cst$sym$kind,cljs.core.cst$sym$initch], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$rdr,cljs.core.cst$sym$kind,cljs.core.cst$sym$initch,cljs.core.cst$sym$validate_DASH_leading_QMARK_], null)], null),cljs.core.cst$kw$arglists,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$rdr,cljs.core.cst$sym$kind,cljs.core.cst$sym$initch], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$rdr,cljs.core.cst$sym$kind,cljs.core.cst$sym$initch,cljs.core.cst$sym$validate_DASH_leading_QMARK_], null)),cljs.core.cst$kw$arglists_DASH_meta,cljs.core.list(null,null)], null),1,42,42,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$rdr,cljs.core.cst$sym$kind,cljs.core.cst$sym$initch], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$rdr,cljs.core.cst$sym$kind,cljs.core.cst$sym$initch,cljs.core.cst$sym$validate_DASH_leading_QMARK_], null)),null,(cljs.core.truth_(cljs.tools.reader.edn.read_token)?cljs.tools.reader.edn.read_token.cljs$lang$test:null)]));
return (fexpr__5262.cljs$core$IFn$_invoke$arity$3 ? fexpr__5262.cljs$core$IFn$_invoke$arity$3(G__5263,G__5264,G__5265) : fexpr__5262.call(null,G__5263,G__5264,G__5265));
})();
var s = cljs.tools.reader.impl.commons.parse_symbol(token);
if(cljs.core.truth_((function (){var and__5043__auto__ = s;
if(cljs.core.truth_(and__5043__auto__)){
return (!((token.indexOf("::") === (0))));
} else {
return and__5043__auto__;
}
})())){
var ns = (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1((0)) : s.call(null,(0)));
var name = (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1((1)) : s.call(null,(1)));
if((":" === cljs.core.nth.cljs$core$IFn$_invoke$arity$2(token,(0)))){
return cljs.tools.reader.impl.errors.throw_invalid(reader,cljs.core.cst$kw$keyword,token);
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,name);
}
} else {
return cljs.tools.reader.impl.errors.throw_invalid(reader,cljs.core.cst$kw$keyword,token);
}
} else {
return cljs.tools.reader.impl.errors.throw_single_colon(reader);
}
});
/**
 * Create reader for strings.
 */
rewrite_clj.reader.string_reader = (function rewrite_clj$reader$string_reader(s){
return cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s));
});
