// Compiled by ClojureScript 1.11.60 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('rewrite_clj.parser.token');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rewrite_clj.node.token');
goog.require('rewrite_clj.reader');
rewrite_clj.parser.token.read_to_boundary = (function rewrite_clj$parser$token$read_to_boundary(var_args){
var args__5775__auto__ = [];
var len__5769__auto___6980 = arguments.length;
var i__5770__auto___6981 = (0);
while(true){
if((i__5770__auto___6981 < len__5769__auto___6980)){
args__5775__auto__.push((arguments[i__5770__auto___6981]));

var G__6982 = (i__5770__auto___6981 + (1));
i__5770__auto___6981 = G__6982;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return rewrite_clj.parser.token.read_to_boundary.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(rewrite_clj.parser.token.read_to_boundary.cljs$core$IFn$_invoke$arity$variadic = (function (reader,p__6976){
var vec__6977 = p__6976;
var allowed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6977,(0),null);
var allowed_QMARK_ = cljs.core.set(allowed);
return rewrite_clj.reader.read_until(reader,(function (p1__6973_SHARP_){
var and__5043__auto__ = cljs.core.not((allowed_QMARK_.cljs$core$IFn$_invoke$arity$1 ? allowed_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__6973_SHARP_) : allowed_QMARK_.call(null,p1__6973_SHARP_)));
if(and__5043__auto__){
return rewrite_clj.reader.whitespace_or_boundary_QMARK_(p1__6973_SHARP_);
} else {
return and__5043__auto__;
}
}));
}));

(rewrite_clj.parser.token.read_to_boundary.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rewrite_clj.parser.token.read_to_boundary.cljs$lang$applyTo = (function (seq6974){
var G__6975 = cljs.core.first(seq6974);
var seq6974__$1 = cljs.core.next(seq6974);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6975,seq6974__$1);
}));

rewrite_clj.parser.token.read_to_char_boundary = (function rewrite_clj$parser$token$read_to_char_boundary(reader){
var c = rewrite_clj.reader.next(reader);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,"\\"))?rewrite_clj.parser.token.read_to_boundary(reader):""))].join('');
});
/**
 * Symbols allow for certain boundary characters that have
 * to be handled explicitly.
 */
rewrite_clj.parser.token.symbol_node = (function rewrite_clj$parser$token$symbol_node(reader,value,value_string){
var suffix = rewrite_clj.parser.token.read_to_boundary.cljs$core$IFn$_invoke$arity$variadic(reader,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["'",":"], null)], 0));
if(cljs.core.empty_QMARK_(suffix)){
return rewrite_clj.node.token.token_node.cljs$core$IFn$_invoke$arity$2(value,value_string);
} else {
var s = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_string),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
return rewrite_clj.node.token.token_node.cljs$core$IFn$_invoke$arity$2(rewrite_clj.reader.string__GT_edn(s),s);
}
});
/**
 * Parse a single token.
 */
rewrite_clj.parser.token.parse_token = (function rewrite_clj$parser$token$parse_token(reader){
var first_char = rewrite_clj.reader.next(reader);
var s = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_char),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_char,"\\"))?rewrite_clj.parser.token.read_to_char_boundary(reader):rewrite_clj.parser.token.read_to_boundary(reader)))].join('');
var v = rewrite_clj.reader.string__GT_edn(s);
if((v instanceof cljs.core.Symbol)){
return rewrite_clj.parser.token.symbol_node(reader,v,s);
} else {
return rewrite_clj.node.token.token_node.cljs$core$IFn$_invoke$arity$2(v,s);
}
});
