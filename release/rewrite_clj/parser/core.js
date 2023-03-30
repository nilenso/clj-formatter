// Compiled by ClojureScript 1.11.60 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('rewrite_clj.parser.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rewrite_clj.node.comment');
goog.require('rewrite_clj.node.fn');
goog.require('rewrite_clj.node.meta');
goog.require('rewrite_clj.node.protocols');
goog.require('rewrite_clj.node.quote');
goog.require('rewrite_clj.node.reader_macro');
goog.require('rewrite_clj.node.regex');
goog.require('rewrite_clj.node.seq');
goog.require('rewrite_clj.node.token');
goog.require('rewrite_clj.node.uneval');
goog.require('rewrite_clj.parser.keyword');
goog.require('rewrite_clj.parser.namespaced_map');
goog.require('rewrite_clj.parser.string');
goog.require('rewrite_clj.parser.token');
goog.require('rewrite_clj.parser.whitespace');
goog.require('rewrite_clj.reader');
rewrite_clj.parser.core._STAR_delimiter_STAR_ = null;
rewrite_clj.parser.core.dispatch = (function rewrite_clj$parser$core$dispatch(c){
if((c == null)){
return cljs.core.cst$kw$eof;
} else {
if(cljs.core.truth_(rewrite_clj.reader.whitespace_QMARK_(c))){
return cljs.core.cst$kw$whitespace;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,rewrite_clj.parser.core._STAR_delimiter_STAR_)){
return cljs.core.cst$kw$delimiter;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashMap.fromArrays(["@","`","\"","#","'","(",")",":",";","[","{","]","}","^","~"],[cljs.core.cst$kw$deref,cljs.core.cst$kw$syntax_DASH_quote,cljs.core.cst$kw$string,cljs.core.cst$kw$sharp,cljs.core.cst$kw$quote,cljs.core.cst$kw$list,cljs.core.cst$kw$unmatched,cljs.core.cst$kw$keyword,cljs.core.cst$kw$comment,cljs.core.cst$kw$vector,cljs.core.cst$kw$map,cljs.core.cst$kw$unmatched,cljs.core.cst$kw$unmatched,cljs.core.cst$kw$meta,cljs.core.cst$kw$unquote]),c,cljs.core.cst$kw$token);

}
}
}
});
if((typeof rewrite_clj !== 'undefined') && (typeof rewrite_clj.parser !== 'undefined') && (typeof rewrite_clj.parser.core !== 'undefined') && (typeof rewrite_clj.parser.core.parse_next_STAR_ !== 'undefined')){
} else {
rewrite_clj.parser.core.parse_next_STAR_ = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__7312 = cljs.core.get_global_hierarchy;
return (fexpr__7312.cljs$core$IFn$_invoke$arity$0 ? fexpr__7312.cljs$core$IFn$_invoke$arity$0() : fexpr__7312.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("rewrite-clj.parser.core","parse-next*"),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Var(function(){return rewrite_clj.parser.core.dispatch;},cljs.core.cst$sym$rewrite_DASH_clj$parser$core_SLASH_dispatch,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.with_meta(cljs.core.cst$sym$rewrite_DASH_clj$parser$core,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$no_DASH_doc,true], null)),cljs.core.cst$sym$dispatch,"release/rewrite_clj/parser/core.cljc",16,1,28,28,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$c], null)),null,(cljs.core.truth_(rewrite_clj.parser.core.dispatch)?rewrite_clj.parser.core.dispatch.cljs$lang$test:null)])),rewrite_clj.reader.peek),cljs.core.cst$kw$default,hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
rewrite_clj.parser.core.parse_next = (function rewrite_clj$parser$core$parse_next(reader){
return rewrite_clj.reader.read_with_meta(reader,rewrite_clj.parser.core.parse_next_STAR_);
});
rewrite_clj.parser.core.parse_delim = (function rewrite_clj$parser$core$parse_delim(reader,delimiter){
rewrite_clj.reader.ignore(reader);

return rewrite_clj.reader.read_repeatedly(reader,(function (p1__7313_SHARP_){
var _STAR_delimiter_STAR__orig_val__7314 = rewrite_clj.parser.core._STAR_delimiter_STAR_;
var _STAR_delimiter_STAR__temp_val__7315 = delimiter;
(rewrite_clj.parser.core._STAR_delimiter_STAR_ = _STAR_delimiter_STAR__temp_val__7315);

try{return rewrite_clj.parser.core.parse_next(p1__7313_SHARP_);
}finally {(rewrite_clj.parser.core._STAR_delimiter_STAR_ = _STAR_delimiter_STAR__orig_val__7314);
}}));
});
rewrite_clj.parser.core.parse_printables = (function rewrite_clj$parser$core$parse_printables(var_args){
var args__5775__auto__ = [];
var len__5769__auto___7324 = arguments.length;
var i__5770__auto___7325 = (0);
while(true){
if((i__5770__auto___7325 < len__5769__auto___7324)){
args__5775__auto__.push((arguments[i__5770__auto___7325]));

var G__7326 = (i__5770__auto___7325 + (1));
i__5770__auto___7325 = G__7326;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return rewrite_clj.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(rewrite_clj.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic = (function (reader,node_tag,n,p__7320){
var vec__7321 = p__7320;
var ignore_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7321,(0),null);
if(cljs.core.truth_(ignore_QMARK_)){
rewrite_clj.reader.ignore(reader);
} else {
}

return rewrite_clj.reader.read_n(reader,node_tag,rewrite_clj.parser.core.parse_next,cljs.core.complement(rewrite_clj.node.protocols.printable_only_QMARK_),n);
}));

(rewrite_clj.parser.core.parse_printables.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(rewrite_clj.parser.core.parse_printables.cljs$lang$applyTo = (function (seq7316){
var G__7317 = cljs.core.first(seq7316);
var seq7316__$1 = cljs.core.next(seq7316);
var G__7318 = cljs.core.first(seq7316__$1);
var seq7316__$2 = cljs.core.next(seq7316__$1);
var G__7319 = cljs.core.first(seq7316__$2);
var seq7316__$3 = cljs.core.next(seq7316__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7317,G__7318,G__7319,seq7316__$3);
}));

rewrite_clj.parser.core.parse_next_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$token,(function (reader){
return rewrite_clj.parser.token.parse_token(reader);
}));
rewrite_clj.parser.core.parse_next_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$delimiter,(function (reader){
return rewrite_clj.reader.ignore(reader);
}));
rewrite_clj.parser.core.parse_next_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$unmatched,(function (reader){
return rewrite_clj.reader.throw_reader.cljs$core$IFn$_invoke$arity$variadic(reader,"Unmatched delimiter: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rewrite_clj.reader.peek(reader)], 0));
}));
rewrite_clj.parser.core.parse_next_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$eof,(function (reader){
if(cljs.core.truth_(rewrite_clj.parser.core._STAR_delimiter_STAR_)){
return rewrite_clj.reader.throw_reader(reader,"Unexpected EOF.");
} else {
return null;
}
}));
rewrite_clj.parser.core.parse_next_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$whitespace,(function (reader){
return rewrite_clj.parser.whitespace.parse_whitespace(reader);
}));
rewrite_clj.parser.core.parse_next_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$comment,(function (reader){
rewrite_clj.reader.ignore(reader);

return rewrite_clj.node.comment.comment_node.cljs$core$IFn$_invoke$arity$2(";",rewrite_clj.reader.read_include_linebreak(reader));
}));
rewrite_clj.parser.core.parse_next_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$keyword,(function (reader){
return rewrite_clj.parser.keyword.parse_keyword(reader);
}));
rewrite_clj.parser.core.parse_next_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$string,(function (reader){
return rewrite_clj.parser.string.parse_string(reader);
}));
rewrite_clj.parser.core.parse_next_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$meta,(function (reader){
rewrite_clj.reader.ignore(reader);

return rewrite_clj.node.meta.meta_node.cljs$core$IFn$_invoke$arity$1(rewrite_clj.parser.core.parse_printables(reader,cljs.core.cst$kw$meta,(2)));
}));
rewrite_clj.parser.core.read_symbolic_value = (function rewrite_clj$parser$core$read_symbolic_value(reader){
rewrite_clj.reader.unread(reader,"#");

return rewrite_clj.parser.token.parse_token(reader);
});
rewrite_clj.parser.core.parse_shebang_comment = (function rewrite_clj$parser$core$parse_shebang_comment(reader){
rewrite_clj.reader.ignore(reader);

return rewrite_clj.node.comment.comment_node.cljs$core$IFn$_invoke$arity$2("#!",rewrite_clj.reader.read_include_linebreak(reader));
});
rewrite_clj.parser.core.parse_next_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$sharp,(function (reader){
rewrite_clj.reader.ignore(reader);

var G__7327 = rewrite_clj.reader.peek(reader);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__7327)){
return rewrite_clj.reader.throw_reader(reader,"Unexpected EOF.");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("!",G__7327)){
return rewrite_clj.parser.core.parse_shebang_comment(reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\"",G__7327)){
return rewrite_clj.node.regex.regex_node(rewrite_clj.parser.string.parse_regex(reader));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",G__7327)){
return rewrite_clj.parser.core.read_symbolic_value(reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",G__7327)){
return rewrite_clj.node.reader_macro.var_node(rewrite_clj.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.cst$kw$var,(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("(",G__7327)){
return rewrite_clj.node.fn.fn_node(rewrite_clj.parser.core.parse_delim(reader,")"));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":",G__7327)){
return rewrite_clj.parser.namespaced_map.parse_namespaced_map(reader,rewrite_clj.parser.core.parse_next);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("{",G__7327)){
return rewrite_clj.node.seq.set_node(rewrite_clj.parser.core.parse_delim(reader,"}"));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("=",G__7327)){
return rewrite_clj.node.reader_macro.eval_node(rewrite_clj.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.cst$kw$eval,(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("^",G__7327)){
return rewrite_clj.node.meta.raw_meta_node.cljs$core$IFn$_invoke$arity$1(rewrite_clj.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.cst$kw$meta,(2),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("?",G__7327)){
rewrite_clj.reader.next(reader);

return rewrite_clj.node.reader_macro.reader_macro_node.cljs$core$IFn$_invoke$arity$1((function (){var read1 = (function (){
return rewrite_clj.parser.core.parse_printables(reader,cljs.core.cst$kw$reader_DASH_macro,(1));
});
return cljs.core.cons((function (){var G__7328 = rewrite_clj.reader.peek(reader);
switch (G__7328) {
case "(":
return rewrite_clj.node.token.token_node.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("?"));

break;
case "@":
rewrite_clj.reader.next(reader);

return rewrite_clj.node.token.token_node.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("?@"));

break;
default:
rewrite_clj.reader.unread(reader,"?");

return cljs.core.first(read1());

}
})(),read1());
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",G__7327)){
return rewrite_clj.node.uneval.uneval_node(rewrite_clj.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.cst$kw$uneval,(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0)));
} else {
return rewrite_clj.node.reader_macro.reader_macro_node.cljs$core$IFn$_invoke$arity$1(rewrite_clj.parser.core.parse_printables(reader,cljs.core.cst$kw$reader_DASH_macro,(2)));

}
}
}
}
}
}
}
}
}
}
}
}
}));
rewrite_clj.parser.core.parse_next_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$deref,(function (reader){
return rewrite_clj.node.reader_macro.deref_node(rewrite_clj.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.cst$kw$deref,(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0)));
}));
rewrite_clj.parser.core.parse_next_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$quote,(function (reader){
return rewrite_clj.node.quote.quote_node(rewrite_clj.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.cst$kw$quote,(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0)));
}));
rewrite_clj.parser.core.parse_next_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$syntax_DASH_quote,(function (reader){
return rewrite_clj.node.quote.syntax_quote_node(rewrite_clj.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.cst$kw$syntax_DASH_quote,(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0)));
}));
rewrite_clj.parser.core.parse_next_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$unquote,(function (reader){
rewrite_clj.reader.ignore(reader);

var c = rewrite_clj.reader.peek(reader);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"@")){
return rewrite_clj.node.quote.unquote_splicing_node(rewrite_clj.parser.core.parse_printables.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.cst$kw$unquote,(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0)));
} else {
return rewrite_clj.node.quote.unquote_node(rewrite_clj.parser.core.parse_printables(reader,cljs.core.cst$kw$unquote,(1)));
}
}));
rewrite_clj.parser.core.parse_next_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$list,(function (reader){
return rewrite_clj.node.seq.list_node(rewrite_clj.parser.core.parse_delim(reader,")"));
}));
rewrite_clj.parser.core.parse_next_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$vector,(function (reader){
return rewrite_clj.node.seq.vector_node(rewrite_clj.parser.core.parse_delim(reader,"]"));
}));
rewrite_clj.parser.core.parse_next_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$map,(function (reader){
return rewrite_clj.node.seq.map_node(rewrite_clj.parser.core.parse_delim(reader,"}"));
}));
