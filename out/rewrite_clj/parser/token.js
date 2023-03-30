// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('rewrite_clj.parser.token');
goog.require('cljs.core');
goog.require('rewrite_clj.node.token');
goog.require('rewrite_clj.reader');
rewrite_clj.parser.token.read_to_boundary = (function rewrite_clj$parser$token$read_to_boundary(var_args){
var args__5775__auto__ = [];
var len__5769__auto___2753 = arguments.length;
var i__5770__auto___2754 = (0);
while(true){
if((i__5770__auto___2754 < len__5769__auto___2753)){
args__5775__auto__.push((arguments[i__5770__auto___2754]));

var G__2755 = (i__5770__auto___2754 + (1));
i__5770__auto___2754 = G__2755;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return rewrite_clj.parser.token.read_to_boundary.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(rewrite_clj.parser.token.read_to_boundary.cljs$core$IFn$_invoke$arity$variadic = (function (reader,p__2749){
var vec__2750 = p__2749;
var allowed = cljs.core.nth.call(null,vec__2750,(0),null);
var allowed_QMARK_ = cljs.core.set.call(null,allowed);
return rewrite_clj.reader.read_until.call(null,reader,(function (p1__2746_SHARP_){
var and__5043__auto__ = cljs.core.not.call(null,allowed_QMARK_.call(null,p1__2746_SHARP_));
if(and__5043__auto__){
return rewrite_clj.reader.whitespace_or_boundary_QMARK_.call(null,p1__2746_SHARP_);
} else {
return and__5043__auto__;
}
}));
}));

(rewrite_clj.parser.token.read_to_boundary.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rewrite_clj.parser.token.read_to_boundary.cljs$lang$applyTo = (function (seq2747){
var G__2748 = cljs.core.first.call(null,seq2747);
var seq2747__$1 = cljs.core.next.call(null,seq2747);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2748,seq2747__$1);
}));

rewrite_clj.parser.token.read_to_char_boundary = (function rewrite_clj$parser$token$read_to_char_boundary(reader){
var c = rewrite_clj.reader.next.call(null,reader);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not_EQ_.call(null,c,"\\"))?rewrite_clj.parser.token.read_to_boundary.call(null,reader):""))].join('');
});
/**
 * Symbols allow for certain boundary characters that have
 * to be handled explicitly.
 */
rewrite_clj.parser.token.symbol_node = (function rewrite_clj$parser$token$symbol_node(reader,value,value_string){
var suffix = rewrite_clj.parser.token.read_to_boundary.call(null,reader,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["'",":"], null));
if(cljs.core.empty_QMARK_.call(null,suffix)){
return rewrite_clj.node.token.token_node.call(null,value,value_string);
} else {
var s = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value_string),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
return rewrite_clj.node.token.token_node.call(null,rewrite_clj.reader.string__GT_edn.call(null,s),s);
}
});
/**
 * Parse a single token.
 */
rewrite_clj.parser.token.parse_token = (function rewrite_clj$parser$token$parse_token(reader){
var first_char = rewrite_clj.reader.next.call(null,reader);
var s = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_char),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,first_char,"\\"))?rewrite_clj.parser.token.read_to_char_boundary.call(null,reader):rewrite_clj.parser.token.read_to_boundary.call(null,reader)))].join('');
var v = rewrite_clj.reader.string__GT_edn.call(null,s);
if((v instanceof cljs.core.Symbol)){
return rewrite_clj.parser.token.symbol_node.call(null,reader,v,s);
} else {
return rewrite_clj.node.token.token_node.call(null,v,s);
}
});

//# sourceMappingURL=token.js.map
