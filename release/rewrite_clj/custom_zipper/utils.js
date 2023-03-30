// Compiled by ClojureScript 1.11.60 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('rewrite_clj.custom_zipper.utils');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rewrite_clj.custom_zipper.core');
rewrite_clj.custom_zipper.utils.update_in_path = (function rewrite_clj$custom_zipper$utils$update_in_path(p__4792,k,f){
var vec__4793 = p__4792;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4793,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4793,(1),null);
var loc = vec__4793;
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(path,k);
if(cljs.core.seq(v)){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$changed_QMARK_,true], 0))], null),cljs.core.meta(loc));
} else {
return loc;
}
});
/**
 * Remove right sibling of the current node (if there is one).
 */
rewrite_clj.custom_zipper.utils.remove_right = (function rewrite_clj$custom_zipper$utils$remove_right(loc){
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.custom_zipper_QMARK_(loc))){
var map__4796 = loc;
var map__4796__$1 = cljs.core.__destructure_map(map__4796);
var vec__4797 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4796__$1,cljs.core.cst$kw$right);
var seq__4798 = cljs.core.seq(vec__4797);
var first__4799 = cljs.core.first(seq__4798);
var seq__4798__$1 = cljs.core.next(seq__4798);
var _r = first__4799;
var rs = seq__4798__$1;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(loc,cljs.core.cst$kw$right,rs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$changed_QMARK_,true], 0));
} else {
return rewrite_clj.custom_zipper.utils.update_in_path(loc,cljs.core.cst$kw$r,cljs.core.next);
}
});
/**
 * Remove left sibling of the current node (if there is one).
 */
rewrite_clj.custom_zipper.utils.remove_left = (function rewrite_clj$custom_zipper$utils$remove_left(loc){
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.custom_zipper_QMARK_(loc))){
var map__4800 = loc;
var map__4800__$1 = cljs.core.__destructure_map(map__4800);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4800__$1,cljs.core.cst$kw$left);
var temp__5802__auto__ = cljs.core.peek(left);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__4801 = temp__5802__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4801,(0),null);
var lpos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4801,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(loc,cljs.core.cst$kw$left,cljs.core.pop(left),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$position,lpos,cljs.core.cst$kw$changed_QMARK_,true], 0));
} else {
return loc;
}
} else {
return rewrite_clj.custom_zipper.utils.update_in_path(loc,cljs.core.cst$kw$l,cljs.core.pop);
}
});
/**
 * Remove elements to the right of the current zipper location as long as
 * the given predicate matches.
 */
rewrite_clj.custom_zipper.utils.remove_right_while = (function rewrite_clj$custom_zipper$utils$remove_right_while(zloc,p_QMARK_){
var zloc__$1 = zloc;
while(true){
var temp__5802__auto__ = rewrite_clj.custom_zipper.core.right(zloc__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var rloc = temp__5802__auto__;
if(cljs.core.truth_((p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? p_QMARK_.cljs$core$IFn$_invoke$arity$1(rloc) : p_QMARK_.call(null,rloc)))){
var G__4804 = rewrite_clj.custom_zipper.utils.remove_right(zloc__$1);
zloc__$1 = G__4804;
continue;
} else {
return zloc__$1;
}
} else {
return zloc__$1;
}
break;
}
});
/**
 * Remove elements to the left of the current zipper location as long as
 * the given predicate matches.
 */
rewrite_clj.custom_zipper.utils.remove_left_while = (function rewrite_clj$custom_zipper$utils$remove_left_while(zloc,p_QMARK_){
var zloc__$1 = zloc;
while(true){
var temp__5802__auto__ = rewrite_clj.custom_zipper.core.left(zloc__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var lloc = temp__5802__auto__;
if(cljs.core.truth_((p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? p_QMARK_.cljs$core$IFn$_invoke$arity$1(lloc) : p_QMARK_.call(null,lloc)))){
var G__4805 = rewrite_clj.custom_zipper.utils.remove_left(zloc__$1);
zloc__$1 = G__4805;
continue;
} else {
return zloc__$1;
}
} else {
return zloc__$1;
}
break;
}
});
/**
 * Remove current node and move left. If current node is at the leftmost
 * location, returns `nil`.
 */
rewrite_clj.custom_zipper.utils.remove_and_move_left = (function rewrite_clj$custom_zipper$utils$remove_and_move_left(loc){
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.custom_zipper_QMARK_(loc))){
var map__4806 = loc;
var map__4806__$1 = cljs.core.__destructure_map(map__4806);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4806__$1,cljs.core.cst$kw$left);
if(cljs.core.seq(left)){
var vec__4807 = cljs.core.peek(left);
var lnode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4807,(0),null);
var lpos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4807,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(loc,cljs.core.cst$kw$changed_QMARK_,true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$node,lnode,cljs.core.cst$kw$position,lpos,cljs.core.cst$kw$left,cljs.core.pop(left)], 0));
} else {
return null;
}
} else {
var vec__4810 = loc;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4810,(0),null);
var map__4813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4810,(1),null);
var map__4813__$1 = cljs.core.__destructure_map(map__4813);
var path = map__4813__$1;
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4813__$1,cljs.core.cst$kw$l);
if(cljs.core.seq(l)){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek(l),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$l], null),cljs.core.pop),cljs.core.cst$kw$changed_QMARK_,true)], null),cljs.core.meta(loc));
} else {
return null;
}
}
});
/**
 * Remove current node and move right. If current node is at the rightmost
 * location, returns `nil`.
 */
rewrite_clj.custom_zipper.utils.remove_and_move_right = (function rewrite_clj$custom_zipper$utils$remove_and_move_right(loc){
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.custom_zipper_QMARK_(loc))){
var map__4814 = loc;
var map__4814__$1 = cljs.core.__destructure_map(map__4814);
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4814__$1,cljs.core.cst$kw$right);
if(cljs.core.seq(right)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(loc,cljs.core.cst$kw$changed_QMARK_,true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$node,cljs.core.first(right),cljs.core.cst$kw$right,cljs.core.next(right)], 0));
} else {
return null;
}
} else {
var vec__4815 = loc;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4815,(0),null);
var map__4818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4815,(1),null);
var map__4818__$1 = cljs.core.__destructure_map(map__4818);
var path = map__4818__$1;
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4818__$1,cljs.core.cst$kw$r);
if(cljs.core.seq(r)){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(r),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$r], null),cljs.core.next),cljs.core.cst$kw$changed_QMARK_,true)], null),cljs.core.meta(loc));
} else {
return null;
}
}
});
/**
 * Remove the current node and move up.
 *  `[a [b |c d]] -> [a |[b d]]`
 *  `[a [|b c d]] -> [a |[c d]]`
 */
rewrite_clj.custom_zipper.utils.remove_and_move_up = (function rewrite_clj$custom_zipper$utils$remove_and_move_up(loc){
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.custom_zipper_QMARK_(loc))){
var map__4819 = loc;
var map__4819__$1 = cljs.core.__destructure_map(map__4819);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4819__$1,cljs.core.cst$kw$left);
if(cljs.core.seq(left)){
return rewrite_clj.custom_zipper.core.up(rewrite_clj.custom_zipper.core.remove(loc));
} else {
return rewrite_clj.custom_zipper.core.remove(loc);
}
} else {
var vec__4820 = loc;
var _node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4820,(0),null);
var map__4823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4820,(1),null);
var map__4823__$1 = cljs.core.__destructure_map(map__4823);
var path = map__4823__$1;
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4823__$1,cljs.core.cst$kw$l);
var ppath = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4823__$1,cljs.core.cst$kw$ppath);
var pnodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4823__$1,cljs.core.cst$kw$pnodes);
var rs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4823__$1,cljs.core.cst$kw$r);
if((ppath == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("cannot remove at top",cljs.core.PersistentArrayMap.EMPTY);
} else {
if((cljs.core.count(l) > (0))){
return rewrite_clj.custom_zipper.core.up(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek(l),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.cst$kw$l,cljs.core.pop(l),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$changed_QMARK_,true], 0))], null),cljs.core.meta(loc)));
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewrite_clj.custom_zipper.core.make_node(loc,cljs.core.peek(pnodes),rs),(function (){var and__5043__auto__ = ppath;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ppath,cljs.core.cst$kw$changed_QMARK_,true);
} else {
return and__5043__auto__;
}
})()], null),cljs.core.meta(loc));
}
}
}
});
