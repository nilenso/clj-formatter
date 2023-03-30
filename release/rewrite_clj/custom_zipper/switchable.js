// Compiled by ClojureScript 1.11.60 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('rewrite_clj.custom_zipper.switchable');
goog.require('cljs.core');
goog.require('cljs.core.constants');
rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_ = (function rewrite_clj$custom_zipper$switchable$custom_zipper_QMARK_(value){
return cljs.core.cst$kw$rewrite_DASH_clj$custom_DASH_zipper$core_SLASH_custom_QMARK_.cljs$core$IFn$_invoke$arity$1(value);
});
var ret__5824__auto___4615 = (function (){
rewrite_clj.custom_zipper.switchable.defn_switchable = (function rewrite_clj$custom_zipper$switchable$defn_switchable(var_args){
var args__5775__auto__ = [];
var len__5769__auto___4616 = arguments.length;
var i__5770__auto___4617 = (0);
while(true){
if((i__5770__auto___4617 < len__5769__auto___4616)){
args__5775__auto__.push((arguments[i__5770__auto___4617]));

var G__4618 = (i__5770__auto___4617 + (1));
i__5770__auto___4617 = G__4618;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((5) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((5)),(0),null)):null);
return rewrite_clj.custom_zipper.switchable.defn_switchable.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5776__auto__);
});

(rewrite_clj.custom_zipper.switchable.defn_switchable.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sym,docstring,params,body){
var placeholders = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(cljs.core.count(params),cljs.core.gensym);
var arglists = (new cljs.core.List(null,params,null,(1),null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defn,null,(1),null)),(new cljs.core.List(null,sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,docstring,null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$kw$arglists,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,arglists,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(placeholders)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$rewrite_DASH_clj$custom_DASH_zipper$switchable_SLASH_custom_DASH_zipper_QMARK_,null,(1),null)),(new cljs.core.List(null,cljs.core.first(placeholders),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(params,placeholders))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("clojure.zip",cljs.core.name(sym)),null,(1),null)),placeholders))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(rewrite_clj.custom_zipper.switchable.defn_switchable.cljs$lang$maxFixedArity = (5));

/** @this {Function} */
(rewrite_clj.custom_zipper.switchable.defn_switchable.cljs$lang$applyTo = (function (seq4609){
var G__4610 = cljs.core.first(seq4609);
var seq4609__$1 = cljs.core.next(seq4609);
var G__4611 = cljs.core.first(seq4609__$1);
var seq4609__$2 = cljs.core.next(seq4609__$1);
var G__4612 = cljs.core.first(seq4609__$2);
var seq4609__$3 = cljs.core.next(seq4609__$2);
var G__4613 = cljs.core.first(seq4609__$3);
var seq4609__$4 = cljs.core.next(seq4609__$3);
var G__4614 = cljs.core.first(seq4609__$4);
var seq4609__$5 = cljs.core.next(seq4609__$4);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4610,G__4611,G__4612,G__4613,G__4614,seq4609__$5);
}));

return null;
})()
;
(rewrite_clj.custom_zipper.switchable.defn_switchable.cljs$lang$macro = true);

