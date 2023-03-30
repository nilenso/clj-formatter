// Compiled by ClojureScript 1.11.60 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('rewrite_clj.zip.subedit');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
return cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,rewrite_clj.custom_zipper.core.lefts),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(rewrite_clj.custom_zipper.core.up,cljs.core.iterate(rewrite_clj.custom_zipper.core.up,zloc))));
});
/**
 * Move one down and `n` steps to the right.
 */
rewrite_clj.zip.subedit.move_step = (function rewrite_clj$zip$subedit$move_step(loc,n){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.iterate(rewrite_clj.custom_zipper.core.right,rewrite_clj.custom_zipper.core.down(loc)),n);
});
/**
 * Move to the node represented by the given path.
 */
rewrite_clj.zip.subedit.move_to = (function rewrite_clj$zip$subedit$move_to(zloc,path){
var root = rewrite_clj.zip.base.of_node_STAR_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.custom_zipper.core.root(zloc),rewrite_clj.zip.options.get_opts(zloc));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rewrite_clj.zip.subedit.move_step,root,path);
});
/**
 * Return zipper applying function `f` to `zloc`. The resulting
 * zipper will be located at the same path (i.e. the same number of
 * downwards and right movements from the root) incoming `zloc`.
 * 
 * See also [[subedit-node]] for an isolated edit.
 */
rewrite_clj.zip.subedit.edit_node = (function rewrite_clj$zip$subedit$edit_node(zloc,f){
var zloc_SINGLEQUOTE_ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(zloc) : f.call(null,zloc));
if((!((zloc_SINGLEQUOTE_ == null)))){
} else {
throw (new Error(["Assert failed: ","function applied in 'edit-node' returned nil.","\n","(not (nil? zloc'))"].join('')));
}

return rewrite_clj.zip.subedit.move_to(zloc_SINGLEQUOTE_,rewrite_clj.zip.subedit.path(zloc));
});
var ret__5824__auto___8645 = (function (){
/**
 * Like `->`, threads `zloc` through forms.
 * The resulting zipper will be located at the same path (i.e. the same
 * number of downwards and right movements from the root) as incoming `zloc`.
 * 
 * See also [[subedit->]] for an isolated edit.
 */
rewrite_clj.zip.subedit.edit__GT_ = (function rewrite_clj$zip$subedit$edit__GT_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___8646 = arguments.length;
var i__5770__auto___8647 = (0);
while(true){
if((i__5770__auto___8647 < len__5769__auto___8646)){
args__5775__auto__.push((arguments[i__5770__auto___8647]));

var G__8648 = (i__5770__auto___8647 + (1));
i__5770__auto___8647 = G__8648;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return rewrite_clj.zip.subedit.edit__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(rewrite_clj.zip.subedit.edit__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,zloc,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$rewrite_DASH_clj$zip$subedit_SLASH_edit_DASH_node,null,(1),null)),(new cljs.core.List(null,zloc,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$fn_STAR_,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$p1__8639__8640__auto__,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$p1__8639__8640__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(rewrite_clj.zip.subedit.edit__GT_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(rewrite_clj.zip.subedit.edit__GT_.cljs$lang$applyTo = (function (seq8641){
var G__8642 = cljs.core.first(seq8641);
var seq8641__$1 = cljs.core.next(seq8641);
var G__8643 = cljs.core.first(seq8641__$1);
var seq8641__$2 = cljs.core.next(seq8641__$1);
var G__8644 = cljs.core.first(seq8641__$2);
var seq8641__$3 = cljs.core.next(seq8641__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8642,G__8643,G__8644,seq8641__$3);
}));

return null;
})()
;
(rewrite_clj.zip.subedit.edit__GT_.cljs$lang$macro = true);

var ret__5824__auto___8655 = (function (){
/**
 * Like `->>`, threads `zloc` through forms.
 * The resulting zipper will be located at the same path (i.e. the same
 * number of downwards and right movements from the root) as incoming `zloc`.
 * 
 * See also [[subedit->>]] for an isolated edit.
 */
rewrite_clj.zip.subedit.edit__GT__GT_ = (function rewrite_clj$zip$subedit$edit__GT__GT_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___8656 = arguments.length;
var i__5770__auto___8657 = (0);
while(true){
if((i__5770__auto___8657 < len__5769__auto___8656)){
args__5775__auto__.push((arguments[i__5770__auto___8657]));

var G__8658 = (i__5770__auto___8657 + (1));
i__5770__auto___8657 = G__8658;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return rewrite_clj.zip.subedit.edit__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(rewrite_clj.zip.subedit.edit__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,zloc,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$rewrite_DASH_clj$zip$subedit_SLASH_edit_DASH_node,null,(1),null)),(new cljs.core.List(null,zloc,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$fn_STAR_,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$p1__8649__8650__auto__,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__DASH__GT__GT_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$p1__8649__8650__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(rewrite_clj.zip.subedit.edit__GT__GT_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(rewrite_clj.zip.subedit.edit__GT__GT_.cljs$lang$applyTo = (function (seq8651){
var G__8652 = cljs.core.first(seq8651);
var seq8651__$1 = cljs.core.next(seq8651);
var G__8653 = cljs.core.first(seq8651__$1);
var seq8651__$2 = cljs.core.next(seq8651__$1);
var G__8654 = cljs.core.first(seq8651__$2);
var seq8651__$3 = cljs.core.next(seq8651__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8652,G__8653,G__8654,seq8651__$3);
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
var zloc_SINGLEQUOTE_ = (function (){var G__8659 = zloc;
var G__8659__$1 = (((G__8659 == null))?null:rewrite_clj.custom_zipper.core.node(G__8659));
if((G__8659__$1 == null)){
return null;
} else {
return rewrite_clj.zip.base.of_node_STAR_.cljs$core$IFn$_invoke$arity$2(G__8659__$1,rewrite_clj.zip.options.get_opts(zloc));
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
var zloc_SINGLEQUOTE_ = (function (){var G__8660 = rewrite_clj.zip.subedit.subzip(zloc);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__8660) : f.call(null,G__8660));
})();
if((!((zloc_SINGLEQUOTE_ == null)))){
} else {
throw (new Error(["Assert failed: ","function applied in 'subedit-node' returned nil.","\n","(not (nil? zloc'))"].join('')));
}

return rewrite_clj.custom_zipper.core.replace(zloc,rewrite_clj.custom_zipper.core.root(zloc_SINGLEQUOTE_));
});
var ret__5824__auto___8667 = (function (){
/**
 * Like `->`, threads `zloc`, as an isolated sub-tree through forms, then zips
 * up to, and locates at, the root of the modified sub-tree.
 * 
 * See [docs on sub editing](/doc/01-user-guide.adoc#sub-editing).
 */
rewrite_clj.zip.subedit.subedit__GT_ = (function rewrite_clj$zip$subedit$subedit__GT_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___8668 = arguments.length;
var i__5770__auto___8669 = (0);
while(true){
if((i__5770__auto___8669 < len__5769__auto___8668)){
args__5775__auto__.push((arguments[i__5770__auto___8669]));

var G__8670 = (i__5770__auto___8669 + (1));
i__5770__auto___8669 = G__8670;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return rewrite_clj.zip.subedit.subedit__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(rewrite_clj.zip.subedit.subedit__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,zloc,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$rewrite_DASH_clj$zip$subedit_SLASH_subedit_DASH_node,null,(1),null)),(new cljs.core.List(null,zloc,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$fn_STAR_,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$p1__8661__8662__auto__,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$p1__8661__8662__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(rewrite_clj.zip.subedit.subedit__GT_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(rewrite_clj.zip.subedit.subedit__GT_.cljs$lang$applyTo = (function (seq8663){
var G__8664 = cljs.core.first(seq8663);
var seq8663__$1 = cljs.core.next(seq8663);
var G__8665 = cljs.core.first(seq8663__$1);
var seq8663__$2 = cljs.core.next(seq8663__$1);
var G__8666 = cljs.core.first(seq8663__$2);
var seq8663__$3 = cljs.core.next(seq8663__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8664,G__8665,G__8666,seq8663__$3);
}));

return null;
})()
;
(rewrite_clj.zip.subedit.subedit__GT_.cljs$lang$macro = true);

var ret__5824__auto___8677 = (function (){
/**
 * Like `->`. Threads `zloc`, as an isolated sub-tree through forms, then zips
 *    up to, and locates at, the root of the modified sub-tree.
 * 
 * See [docs on sub editing](/doc/01-user-guide.adoc#sub-editing).
 */
rewrite_clj.zip.subedit.subedit__GT__GT_ = (function rewrite_clj$zip$subedit$subedit__GT__GT_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___8678 = arguments.length;
var i__5770__auto___8679 = (0);
while(true){
if((i__5770__auto___8679 < len__5769__auto___8678)){
args__5775__auto__.push((arguments[i__5770__auto___8679]));

var G__8680 = (i__5770__auto___8679 + (1));
i__5770__auto___8679 = G__8680;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return rewrite_clj.zip.subedit.subedit__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(rewrite_clj.zip.subedit.subedit__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,zloc,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$rewrite_DASH_clj$zip$subedit_SLASH_subedit_DASH_node,null,(1),null)),(new cljs.core.List(null,zloc,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$fn_STAR_,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$p1__8671__8672__auto__,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__DASH__GT__GT_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$p1__8671__8672__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(rewrite_clj.zip.subedit.subedit__GT__GT_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(rewrite_clj.zip.subedit.subedit__GT__GT_.cljs$lang$applyTo = (function (seq8673){
var G__8674 = cljs.core.first(seq8673);
var seq8673__$1 = cljs.core.next(seq8673);
var G__8675 = cljs.core.first(seq8673__$1);
var seq8673__$2 = cljs.core.next(seq8673__$1);
var G__8676 = cljs.core.first(seq8673__$2);
var seq8673__$3 = cljs.core.next(seq8673__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8674,G__8675,G__8676,seq8673__$3);
}));

return null;
})()
;
(rewrite_clj.zip.subedit.subedit__GT__GT_.cljs$lang$macro = true);

