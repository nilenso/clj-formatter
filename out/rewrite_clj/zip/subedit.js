// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('rewrite_clj.zip.subedit');
goog.require('cljs.core');
goog.require('rewrite_clj.custom_zipper.core');
goog.require('rewrite_clj.zip.base');
goog.require('rewrite_clj.zip.options');
/**
 * Generate a seq representing a path to the current node
 * starting at the root. Each element represents one `z/down`
 * and the value of each element will be the number of `z/right`s
 * to run.
 */
rewrite_clj.zip.subedit.path = (function rewrite_clj$zip$subedit$path(zloc){
return cljs.core.reverse.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.count,rewrite_clj.custom_zipper.core.lefts),cljs.core.take_while.call(null,rewrite_clj.custom_zipper.core.up,cljs.core.iterate.call(null,rewrite_clj.custom_zipper.core.up,zloc))));
});
/**
 * Move one down and `n` steps to the right.
 */
rewrite_clj.zip.subedit.move_step = (function rewrite_clj$zip$subedit$move_step(loc,n){
return cljs.core.nth.call(null,cljs.core.iterate.call(null,rewrite_clj.custom_zipper.core.right,rewrite_clj.custom_zipper.core.down.call(null,loc)),n);
});
/**
 * Move to the node represented by the given path.
 */
rewrite_clj.zip.subedit.move_to = (function rewrite_clj$zip$subedit$move_to(zloc,path){
var root = rewrite_clj.zip.base.of_node_STAR_.call(null,rewrite_clj.custom_zipper.core.root.call(null,zloc),rewrite_clj.zip.options.get_opts.call(null,zloc));
return cljs.core.reduce.call(null,rewrite_clj.zip.subedit.move_step,root,path);
});
/**
 * Return zipper applying function `f` to `zloc`. The resulting
 * zipper will be located at the same path (i.e. the same number of
 * downwards and right movements from the root) incoming `zloc`.
 * 
 * See also [[subedit-node]] for an isolated edit.
 */
rewrite_clj.zip.subedit.edit_node = (function rewrite_clj$zip$subedit$edit_node(zloc,f){
var zloc_SINGLEQUOTE_ = f.call(null,zloc);
if((!((zloc_SINGLEQUOTE_ == null)))){
} else {
throw (new Error(["Assert failed: ","function applied in 'edit-node' returned nil.","\n","(not (nil? zloc'))"].join('')));
}

return rewrite_clj.zip.subedit.move_to.call(null,zloc_SINGLEQUOTE_,rewrite_clj.zip.subedit.path.call(null,zloc));
});
var ret__5824__auto___4387 = (function (){
/**
 * Like `->`, threads `zloc` through forms.
 * The resulting zipper will be located at the same path (i.e. the same
 * number of downwards and right movements from the root) as incoming `zloc`.
 * 
 * See also [[subedit->]] for an isolated edit.
 */
rewrite_clj.zip.subedit.edit__GT_ = (function rewrite_clj$zip$subedit$edit__GT_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___4388 = arguments.length;
var i__5770__auto___4389 = (0);
while(true){
if((i__5770__auto___4389 < len__5769__auto___4388)){
args__5775__auto__.push((arguments[i__5770__auto___4389]));

var G__4390 = (i__5770__auto___4389 + (1));
i__5770__auto___4389 = G__4390;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return rewrite_clj.zip.subedit.edit__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(rewrite_clj.zip.subedit.edit__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,zloc,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("rewrite-clj.zip.subedit","edit-node","rewrite-clj.zip.subedit/edit-node",1286670122,null),null,(1),null)),(new cljs.core.List(null,zloc,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__4381__4382__auto__","p1__4381__4382__auto__",-558136792,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__4381__4382__auto__","p1__4381__4382__auto__",-558136792,null),null,(1),null)),body))),null,(1),null))))),null,(1),null)))));
}));

(rewrite_clj.zip.subedit.edit__GT_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(rewrite_clj.zip.subedit.edit__GT_.cljs$lang$applyTo = (function (seq4383){
var G__4384 = cljs.core.first.call(null,seq4383);
var seq4383__$1 = cljs.core.next.call(null,seq4383);
var G__4385 = cljs.core.first.call(null,seq4383__$1);
var seq4383__$2 = cljs.core.next.call(null,seq4383__$1);
var G__4386 = cljs.core.first.call(null,seq4383__$2);
var seq4383__$3 = cljs.core.next.call(null,seq4383__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4384,G__4385,G__4386,seq4383__$3);
}));

return null;
})()
;
(rewrite_clj.zip.subedit.edit__GT_.cljs$lang$macro = true);

var ret__5824__auto___4397 = (function (){
/**
 * Like `->>`, threads `zloc` through forms.
 * The resulting zipper will be located at the same path (i.e. the same
 * number of downwards and right movements from the root) as incoming `zloc`.
 * 
 * See also [[subedit->>]] for an isolated edit.
 */
rewrite_clj.zip.subedit.edit__GT__GT_ = (function rewrite_clj$zip$subedit$edit__GT__GT_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___4398 = arguments.length;
var i__5770__auto___4399 = (0);
while(true){
if((i__5770__auto___4399 < len__5769__auto___4398)){
args__5775__auto__.push((arguments[i__5770__auto___4399]));

var G__4400 = (i__5770__auto___4399 + (1));
i__5770__auto___4399 = G__4400;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return rewrite_clj.zip.subedit.edit__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(rewrite_clj.zip.subedit.edit__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,zloc,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("rewrite-clj.zip.subedit","edit-node","rewrite-clj.zip.subedit/edit-node",1286670122,null),null,(1),null)),(new cljs.core.List(null,zloc,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__4391__4392__auto__","p1__4391__4392__auto__",-1988820467,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->>","cljs.core/->>",-1207871206,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__4391__4392__auto__","p1__4391__4392__auto__",-1988820467,null),null,(1),null)),body))),null,(1),null))))),null,(1),null)))));
}));

(rewrite_clj.zip.subedit.edit__GT__GT_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(rewrite_clj.zip.subedit.edit__GT__GT_.cljs$lang$applyTo = (function (seq4393){
var G__4394 = cljs.core.first.call(null,seq4393);
var seq4393__$1 = cljs.core.next.call(null,seq4393);
var G__4395 = cljs.core.first.call(null,seq4393__$1);
var seq4393__$2 = cljs.core.next.call(null,seq4393__$1);
var G__4396 = cljs.core.first.call(null,seq4393__$2);
var seq4393__$3 = cljs.core.next.call(null,seq4393__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4394,G__4395,G__4396,seq4393__$3);
}));

return null;
})()
;
(rewrite_clj.zip.subedit.edit__GT__GT_.cljs$lang$macro = true);

/**
 * Create and return a zipper whose root is the current node in `zloc`.
 * 
 * See [docs on sub editing](/doc/01-user-guide.adoc#sub-editing).
 */
rewrite_clj.zip.subedit.subzip = (function rewrite_clj$zip$subedit$subzip(zloc){
var zloc_SINGLEQUOTE_ = (function (){var G__4401 = zloc;
var G__4401__$1 = (((G__4401 == null))?null:rewrite_clj.custom_zipper.core.node.call(null,G__4401));
if((G__4401__$1 == null)){
return null;
} else {
return rewrite_clj.zip.base.of_node_STAR_.call(null,G__4401__$1,rewrite_clj.zip.options.get_opts.call(null,zloc));
}
})();
if(cljs.core.truth_(zloc_SINGLEQUOTE_)){
} else {
throw (new Error(["Assert failed: ","could not create subzipper.","\n","zloc'"].join('')));
}

return zloc_SINGLEQUOTE_;
});
/**
 * Return zipper replacing current node in `zloc` with result of `f` applied to said node as an isolated sub-tree.
 * The resulting zipper will be located on the root of the modified sub-tree.
 * 
 * See [docs on sub editing](/doc/01-user-guide.adoc#sub-editing).
 */
rewrite_clj.zip.subedit.subedit_node = (function rewrite_clj$zip$subedit$subedit_node(zloc,f){
var zloc_SINGLEQUOTE_ = f.call(null,rewrite_clj.zip.subedit.subzip.call(null,zloc));
if((!((zloc_SINGLEQUOTE_ == null)))){
} else {
throw (new Error(["Assert failed: ","function applied in 'subedit-node' returned nil.","\n","(not (nil? zloc'))"].join('')));
}

return rewrite_clj.custom_zipper.core.replace.call(null,zloc,rewrite_clj.custom_zipper.core.root.call(null,zloc_SINGLEQUOTE_));
});
var ret__5824__auto___4408 = (function (){
/**
 * Like `->`, threads `zloc`, as an isolated sub-tree through forms, then zips
 * up to, and locates at, the root of the modified sub-tree.
 * 
 * See [docs on sub editing](/doc/01-user-guide.adoc#sub-editing).
 */
rewrite_clj.zip.subedit.subedit__GT_ = (function rewrite_clj$zip$subedit$subedit__GT_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___4409 = arguments.length;
var i__5770__auto___4410 = (0);
while(true){
if((i__5770__auto___4410 < len__5769__auto___4409)){
args__5775__auto__.push((arguments[i__5770__auto___4410]));

var G__4411 = (i__5770__auto___4410 + (1));
i__5770__auto___4410 = G__4411;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return rewrite_clj.zip.subedit.subedit__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(rewrite_clj.zip.subedit.subedit__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,zloc,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("rewrite-clj.zip.subedit","subedit-node","rewrite-clj.zip.subedit/subedit-node",165448714,null),null,(1),null)),(new cljs.core.List(null,zloc,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__4402__4403__auto__","p1__4402__4403__auto__",-1604547177,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__4402__4403__auto__","p1__4402__4403__auto__",-1604547177,null),null,(1),null)),body))),null,(1),null))))),null,(1),null)))));
}));

(rewrite_clj.zip.subedit.subedit__GT_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(rewrite_clj.zip.subedit.subedit__GT_.cljs$lang$applyTo = (function (seq4404){
var G__4405 = cljs.core.first.call(null,seq4404);
var seq4404__$1 = cljs.core.next.call(null,seq4404);
var G__4406 = cljs.core.first.call(null,seq4404__$1);
var seq4404__$2 = cljs.core.next.call(null,seq4404__$1);
var G__4407 = cljs.core.first.call(null,seq4404__$2);
var seq4404__$3 = cljs.core.next.call(null,seq4404__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4405,G__4406,G__4407,seq4404__$3);
}));

return null;
})()
;
(rewrite_clj.zip.subedit.subedit__GT_.cljs$lang$macro = true);

var ret__5824__auto___4418 = (function (){
/**
 * Like `->`. Threads `zloc`, as an isolated sub-tree through forms, then zips
 *    up to, and locates at, the root of the modified sub-tree.
 * 
 * See [docs on sub editing](/doc/01-user-guide.adoc#sub-editing).
 */
rewrite_clj.zip.subedit.subedit__GT__GT_ = (function rewrite_clj$zip$subedit$subedit__GT__GT_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___4419 = arguments.length;
var i__5770__auto___4420 = (0);
while(true){
if((i__5770__auto___4420 < len__5769__auto___4419)){
args__5775__auto__.push((arguments[i__5770__auto___4420]));

var G__4421 = (i__5770__auto___4420 + (1));
i__5770__auto___4420 = G__4421;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return rewrite_clj.zip.subedit.subedit__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(rewrite_clj.zip.subedit.subedit__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,zloc,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("rewrite-clj.zip.subedit","subedit-node","rewrite-clj.zip.subedit/subedit-node",165448714,null),null,(1),null)),(new cljs.core.List(null,zloc,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__4412__4413__auto__","p1__4412__4413__auto__",2117551674,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->>","cljs.core/->>",-1207871206,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__4412__4413__auto__","p1__4412__4413__auto__",2117551674,null),null,(1),null)),body))),null,(1),null))))),null,(1),null)))));
}));

(rewrite_clj.zip.subedit.subedit__GT__GT_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(rewrite_clj.zip.subedit.subedit__GT__GT_.cljs$lang$applyTo = (function (seq4414){
var G__4415 = cljs.core.first.call(null,seq4414);
var seq4414__$1 = cljs.core.next.call(null,seq4414);
var G__4416 = cljs.core.first.call(null,seq4414__$1);
var seq4414__$2 = cljs.core.next.call(null,seq4414__$1);
var G__4417 = cljs.core.first.call(null,seq4414__$2);
var seq4414__$3 = cljs.core.next.call(null,seq4414__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4415,G__4416,G__4417,seq4414__$3);
}));

return null;
})()
;
(rewrite_clj.zip.subedit.subedit__GT__GT_.cljs$lang$macro = true);


//# sourceMappingURL=subedit.js.map
