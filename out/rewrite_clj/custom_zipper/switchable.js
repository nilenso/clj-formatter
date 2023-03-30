// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('rewrite_clj.custom_zipper.switchable');
goog.require('cljs.core');
rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_ = (function rewrite_clj$custom_zipper$switchable$custom_zipper_QMARK_(value){
return new cljs.core.Keyword("rewrite-clj.custom-zipper.core","custom?","rewrite-clj.custom-zipper.core/custom?",-1122119625).cljs$core$IFn$_invoke$arity$1(value);
});
var ret__5824__auto___563 = (function (){
rewrite_clj.custom_zipper.switchable.defn_switchable = (function rewrite_clj$custom_zipper$switchable$defn_switchable(var_args){
var args__5775__auto__ = [];
var len__5769__auto___564 = arguments.length;
var i__5770__auto___565 = (0);
while(true){
if((i__5770__auto___565 < len__5769__auto___564)){
args__5775__auto__.push((arguments[i__5770__auto___565]));

var G__566 = (i__5770__auto___565 + (1));
i__5770__auto___565 = G__566;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((5) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((5)),(0),null)):null);
return rewrite_clj.custom_zipper.switchable.defn_switchable.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5776__auto__);
});

(rewrite_clj.custom_zipper.switchable.defn_switchable.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sym,docstring,params,body){
var placeholders = cljs.core.repeatedly.call(null,cljs.core.count.call(null,params),cljs.core.gensym);
var arglists = (new cljs.core.List(null,params,null,(1),null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null)),(new cljs.core.List(null,docstring,null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,arglists,null,(1),null))))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,placeholders)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("rewrite-clj.custom-zipper.switchable","custom-zipper?","rewrite-clj.custom-zipper.switchable/custom-zipper?",1994159493,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first.call(null,placeholders),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.interleave.call(null,params,placeholders))))),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.symbol.call(null,"clojure.zip",cljs.core.name.call(null,sym)),null,(1),null)),placeholders))),null,(1),null))))),null,(1),null)))));
}));

(rewrite_clj.custom_zipper.switchable.defn_switchable.cljs$lang$maxFixedArity = (5));

/** @this {Function} */
(rewrite_clj.custom_zipper.switchable.defn_switchable.cljs$lang$applyTo = (function (seq557){
var G__558 = cljs.core.first.call(null,seq557);
var seq557__$1 = cljs.core.next.call(null,seq557);
var G__559 = cljs.core.first.call(null,seq557__$1);
var seq557__$2 = cljs.core.next.call(null,seq557__$1);
var G__560 = cljs.core.first.call(null,seq557__$2);
var seq557__$3 = cljs.core.next.call(null,seq557__$2);
var G__561 = cljs.core.first.call(null,seq557__$3);
var seq557__$4 = cljs.core.next.call(null,seq557__$3);
var G__562 = cljs.core.first.call(null,seq557__$4);
var seq557__$5 = cljs.core.next.call(null,seq557__$4);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__558,G__559,G__560,G__561,G__562,seq557__$5);
}));

return null;
})()
;
(rewrite_clj.custom_zipper.switchable.defn_switchable.cljs$lang$macro = true);


//# sourceMappingURL=switchable.js.map
