// Compiled by ClojureScript 1.11.60 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('rewrite_clj.custom_zipper.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.zip');
goog.require('rewrite_clj.custom_zipper.switchable');
goog.require('rewrite_clj.node.protocols');
rewrite_clj.custom_zipper.core.custom_zipper = (function rewrite_clj$custom_zipper$core$custom_zipper(root){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$rewrite_DASH_clj$custom_DASH_zipper$core_SLASH_custom_QMARK_,true,cljs.core.cst$kw$node,root,cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),cljs.core.cst$kw$parent,null,cljs.core.cst$kw$left,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$right,cljs.core.List.EMPTY], null);
});
rewrite_clj.custom_zipper.core.zipper = (function rewrite_clj$custom_zipper$core$zipper(root){
return clojure.zip.zipper(rewrite_clj.node.protocols.inner_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,rewrite_clj.node.protocols.children),rewrite_clj.node.protocols.replace_children,root);
});
rewrite_clj.custom_zipper.core.custom_zipper_QMARK_ = (function rewrite_clj$custom_zipper$core$custom_zipper_QMARK_(value){
return cljs.core.cst$kw$rewrite_DASH_clj$custom_DASH_zipper$core_SLASH_custom_QMARK_.cljs$core$IFn$_invoke$arity$1(value);
});
/**
 * Returns the current node in `zloc`.
 */
rewrite_clj.custom_zipper.core.node = (function rewrite_clj$custom_zipper$core$node(G__4721){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__4721))){
var zloc = G__4721;
return cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(zloc);
} else {
return clojure.zip.node(G__4721);
}
});
/**
 * Returns true if the current node in `zloc` is a branch.
 */
rewrite_clj.custom_zipper.core.branch_QMARK_ = (function rewrite_clj$custom_zipper$core$branch_QMARK_(G__4722){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__4722))){
var zloc = G__4722;
return rewrite_clj.node.protocols.inner_QMARK_(cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(zloc));
} else {
return clojure.zip.branch_QMARK_(G__4722);
}
});
/**
 * Returns a seq of the children of current node in `zloc`, which must be a branch.
 */
rewrite_clj.custom_zipper.core.children = (function rewrite_clj$custom_zipper$core$children(G__4723){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__4723))){
var map__4724 = G__4723;
var map__4724__$1 = cljs.core.__destructure_map(map__4724);
var zloc = map__4724__$1;
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4724__$1,cljs.core.cst$kw$node);
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.branch_QMARK_(zloc))){
return cljs.core.seq(rewrite_clj.node.protocols.children(node));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("called children on a leaf node",cljs.core.PersistentArrayMap.EMPTY);
}
} else {
return clojure.zip.children(G__4723);
}
});
/**
 * Returns a new branch node, given an existing `node` and new
 *   `children`. 
 */
rewrite_clj.custom_zipper.core.make_node = (function rewrite_clj$custom_zipper$core$make_node(G__4725,G__4726,G__4727){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__4725))){
var _zloc = G__4725;
var node = G__4726;
var children = G__4727;
return rewrite_clj.node.protocols.replace_children(node,children);
} else {
return clojure.zip.make_node(G__4725,G__4726,G__4727);
}
});
/**
 * Returns the ones-based `[row col]` of the start of the current node in `zloc`.
 * 
 *   Throws if `zloc` was not created with [position tracking](/doc/01-user-guide.adoc#position-tracking).
 */
rewrite_clj.custom_zipper.core.position = (function rewrite_clj$custom_zipper$core$position(zloc){
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.custom_zipper_QMARK_(zloc))){
return cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(zloc);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["to use position functions, please construct your zipper with ","':track-position?'  set to true."].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Returns the ones-based `[[start-row start-col] [end-row end-col]]` of the current node in `zloc`.
 *   `end-col` is exclusive.
 * 
 *   Throws if `zloc` was not created with [position tracking](/doc/01-user-guide.adoc#position-tracking).
 */
rewrite_clj.custom_zipper.core.position_span = (function rewrite_clj$custom_zipper$core$position_span(zloc){
var start_pos = rewrite_clj.custom_zipper.core.position(zloc);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_pos,rewrite_clj.node.protocols._PLUS_extent(start_pos,rewrite_clj.node.protocols.extent(rewrite_clj.custom_zipper.core.node(zloc)))], null);
});
/**
 * Returns a seq of the left siblings of current node in `zloc`.
 */
rewrite_clj.custom_zipper.core.lefts = (function rewrite_clj$custom_zipper$core$lefts(G__4728){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__4728))){
var zloc = G__4728;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.cst$kw$left.cljs$core$IFn$_invoke$arity$1(zloc));
} else {
return clojure.zip.lefts(G__4728);
}
});
/**
 * Returns zipper with the location at the leftmost child of current node in `zloc`, or
 *   nil if no children.
 */
rewrite_clj.custom_zipper.core.down = (function rewrite_clj$custom_zipper$core$down(G__4729){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__4729))){
var zloc = G__4729;
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.branch_QMARK_(zloc))){
var map__4730 = zloc;
var map__4730__$1 = cljs.core.__destructure_map(map__4730);
var vec__4731 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4730__$1,cljs.core.cst$kw$position);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4731,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4731,(1),null);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4730__$1,cljs.core.cst$kw$node);
var vec__4734 = rewrite_clj.custom_zipper.core.children(zloc);
var seq__4735 = cljs.core.seq(vec__4734);
var first__4736 = cljs.core.first(seq__4735);
var seq__4735__$1 = cljs.core.next(seq__4735);
var c = first__4736;
var cnext = seq__4735__$1;
var cs = vec__4734;
if(cljs.core.truth_(cs)){
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$rewrite_DASH_clj$custom_DASH_zipper$core_SLASH_custom_QMARK_,true,cljs.core.cst$kw$node,c,cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(col + rewrite_clj.node.protocols.leader_length(node))], null),cljs.core.cst$kw$parent,zloc,cljs.core.cst$kw$left,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$right,cnext], null),cljs.core.meta(zloc));
} else {
return null;
}
} else {
return null;
}
} else {
return clojure.zip.down(G__4729);
}
});
/**
 * Returns zipper with the location at the parent of current node in `zloc`, or nil if at
 *   the top.
 */
rewrite_clj.custom_zipper.core.up = (function rewrite_clj$custom_zipper$core$up(G__4737){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__4737))){
var zloc = G__4737;
var map__4738 = zloc;
var map__4738__$1 = cljs.core.__destructure_map(map__4738);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4738__$1,cljs.core.cst$kw$node);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4738__$1,cljs.core.cst$kw$parent);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4738__$1,cljs.core.cst$kw$left);
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4738__$1,cljs.core.cst$kw$right);
var changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4738__$1,cljs.core.cst$kw$changed_QMARK_);
if(cljs.core.truth_(parent)){
if(cljs.core.truth_(changed_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(parent,cljs.core.cst$kw$changed_QMARK_,true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$node,rewrite_clj.custom_zipper.core.make_node(zloc,cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(parent),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,left),cljs.core.cons(node,right)))], 0));
} else {
return parent;
}
} else {
return null;
}
} else {
return clojure.zip.up(G__4737);
}
});
/**
 * Zips all the way up `zloc` and returns the root node, reflecting any changes.
 */
rewrite_clj.custom_zipper.core.root = (function rewrite_clj$custom_zipper$core$root(G__4739){
while(true){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__4739))){
var zloc = G__4739;
if(cljs.core.truth_(cljs.core.cst$kw$end_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc))){
return rewrite_clj.custom_zipper.core.node(zloc);
} else {
var p = rewrite_clj.custom_zipper.core.up(zloc);
if(cljs.core.truth_(p)){
var G__4740 = p;
G__4739 = G__4740;
continue;
} else {
return rewrite_clj.custom_zipper.core.node(zloc);
}
}
} else {
return clojure.zip.root(G__4739);
}
break;
}
});
/**
 * Returns zipper with location at the right sibling of the current node in `zloc`, or nil.
 */
rewrite_clj.custom_zipper.core.right = (function rewrite_clj$custom_zipper$core$right(G__4741){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__4741))){
var zloc = G__4741;
var map__4742 = zloc;
var map__4742__$1 = cljs.core.__destructure_map(map__4742);
var vec__4743 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4742__$1,cljs.core.cst$kw$right);
var seq__4744 = cljs.core.seq(vec__4743);
var first__4745 = cljs.core.first(seq__4744);
var seq__4744__$1 = cljs.core.next(seq__4744);
var r = first__4745;
var rnext = seq__4744__$1;
var right = vec__4743;
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4742__$1,cljs.core.cst$kw$node);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4742__$1,cljs.core.cst$kw$parent);
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4742__$1,cljs.core.cst$kw$position);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4742__$1,cljs.core.cst$kw$left);
if(cljs.core.truth_((function (){var and__5043__auto__ = parent;
if(cljs.core.truth_(and__5043__auto__)){
return right;
} else {
return and__5043__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,cljs.core.cst$kw$node,r,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$left,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(left,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,position], null)),cljs.core.cst$kw$right,rnext,cljs.core.cst$kw$position,rewrite_clj.node.protocols._PLUS_extent(position,rewrite_clj.node.protocols.extent(node))], 0));
} else {
return null;
}
} else {
return clojure.zip.right(G__4741);
}
});
/**
 * Returns zipper with location at the rightmost sibling of the current node in `zloc`, or self.
 */
rewrite_clj.custom_zipper.core.rightmost = (function rewrite_clj$custom_zipper$core$rightmost(G__4746){
while(true){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__4746))){
var zloc = G__4746;
var temp__5802__auto__ = rewrite_clj.custom_zipper.core.right(zloc);
if(cljs.core.truth_(temp__5802__auto__)){
var next = temp__5802__auto__;
var G__4747 = next;
G__4746 = G__4747;
continue;
} else {
return zloc;
}
} else {
return clojure.zip.rightmost(G__4746);
}
break;
}
});
/**
 * Returns zipper with location at the left sibling of the current node in `zloc`, or nil.
 */
rewrite_clj.custom_zipper.core.left = (function rewrite_clj$custom_zipper$core$left(G__4748){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__4748))){
var zloc = G__4748;
var map__4749 = zloc;
var map__4749__$1 = cljs.core.__destructure_map(map__4749);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4749__$1,cljs.core.cst$kw$node);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4749__$1,cljs.core.cst$kw$parent);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4749__$1,cljs.core.cst$kw$left);
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4749__$1,cljs.core.cst$kw$right);
if(cljs.core.truth_((function (){var and__5043__auto__ = parent;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.seq(left);
} else {
return and__5043__auto__;
}
})())){
var vec__4750 = cljs.core.peek(left);
var lnode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4750,(0),null);
var lpos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4750,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,cljs.core.cst$kw$node,lnode,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$position,lpos,cljs.core.cst$kw$left,cljs.core.pop(left),cljs.core.cst$kw$right,cljs.core.cons(node,right)], 0));
} else {
return null;
}
} else {
return clojure.zip.left(G__4748);
}
});
/**
 * Returns zipper with location at the leftmost sibling of the current node in `zloc`, or self.
 */
rewrite_clj.custom_zipper.core.leftmost = (function rewrite_clj$custom_zipper$core$leftmost(G__4753){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__4753))){
var zloc = G__4753;
var map__4754 = zloc;
var map__4754__$1 = cljs.core.__destructure_map(map__4754);
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4754__$1,cljs.core.cst$kw$node);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4754__$1,cljs.core.cst$kw$parent);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4754__$1,cljs.core.cst$kw$left);
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4754__$1,cljs.core.cst$kw$right);
if(cljs.core.truth_((function (){var and__5043__auto__ = parent;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.seq(left);
} else {
return and__5043__auto__;
}
})())){
var vec__4755 = cljs.core.first(left);
var lnode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4755,(0),null);
var lpos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4755,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,cljs.core.cst$kw$node,lnode,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$position,lpos,cljs.core.cst$kw$left,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$right,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest(left)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([right], 0))], 0));
} else {
return zloc;
}
} else {
return clojure.zip.leftmost(G__4753);
}
});
/**
 * Returns zipper with node `item` inserted as the left sibling of current node in `zloc`,
 *  without moving location.
 */
rewrite_clj.custom_zipper.core.insert_left = (function rewrite_clj$custom_zipper$core$insert_left(G__4758,G__4759){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__4758))){
var zloc = G__4758;
var item = G__4759;
var map__4760 = zloc;
var map__4760__$1 = cljs.core.__destructure_map(map__4760);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4760__$1,cljs.core.cst$kw$parent);
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4760__$1,cljs.core.cst$kw$position);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4760__$1,cljs.core.cst$kw$left);
if(cljs.core.not(parent)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("cannot insert left at top",cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,cljs.core.cst$kw$changed_QMARK_,true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$left,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(left,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,position], null)),cljs.core.cst$kw$position,rewrite_clj.node.protocols._PLUS_extent(position,rewrite_clj.node.protocols.extent(item))], 0));
}
} else {
return clojure.zip.insert_left(G__4758,G__4759);
}
});
/**
 * Returns zipper with node `item` inserted as the right sibling of the current node in `zloc`,
 *   without moving location.
 */
rewrite_clj.custom_zipper.core.insert_right = (function rewrite_clj$custom_zipper$core$insert_right(G__4761,G__4762){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__4761))){
var zloc = G__4761;
var item = G__4762;
var map__4763 = zloc;
var map__4763__$1 = cljs.core.__destructure_map(map__4763);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4763__$1,cljs.core.cst$kw$parent);
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4763__$1,cljs.core.cst$kw$right);
if(cljs.core.not(parent)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("cannot insert right at top",cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,cljs.core.cst$kw$changed_QMARK_,true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$right,cljs.core.cons(item,right)], 0));
}
} else {
return clojure.zip.insert_right(G__4761,G__4762);
}
});
/**
 * Returns zipper with node `item` replacing current node in `zloc`, without moving location.
 */
rewrite_clj.custom_zipper.core.replace = (function rewrite_clj$custom_zipper$core$replace(G__4764,G__4765){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__4764))){
var zloc = G__4764;
var item = G__4765;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,cljs.core.cst$kw$changed_QMARK_,true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$node,item], 0));
} else {
return clojure.zip.replace(G__4764,G__4765);
}
});
/**
 * Returns zipper with value of `(apply f current-node args)` replacing current node in `zloc`.
 * 
 * The result of `f` should be a rewrite-clj node.
 */
rewrite_clj.custom_zipper.core.edit = (function rewrite_clj$custom_zipper$core$edit(var_args){
var args__5775__auto__ = [];
var len__5769__auto___4769 = arguments.length;
var i__5770__auto___4770 = (0);
while(true){
if((i__5770__auto___4770 < len__5769__auto___4769)){
args__5775__auto__.push((arguments[i__5770__auto___4770]));

var G__4771 = (i__5770__auto___4770 + (1));
i__5770__auto___4770 = G__4771;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return rewrite_clj.custom_zipper.core.edit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(rewrite_clj.custom_zipper.core.edit.cljs$core$IFn$_invoke$arity$variadic = (function (zloc,f,args){
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.custom_zipper_QMARK_(zloc))){
return rewrite_clj.custom_zipper.core.replace(zloc,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,rewrite_clj.custom_zipper.core.node(zloc),args));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(clojure.zip.edit,zloc,f,args);
}
}));

(rewrite_clj.custom_zipper.core.edit.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rewrite_clj.custom_zipper.core.edit.cljs$lang$applyTo = (function (seq4766){
var G__4767 = cljs.core.first(seq4766);
var seq4766__$1 = cljs.core.next(seq4766);
var G__4768 = cljs.core.first(seq4766__$1);
var seq4766__$2 = cljs.core.next(seq4766__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4767,G__4768,seq4766__$2);
}));

/**
 * Returns zipper with node `item` inserted as the leftmost child of the current node in `zloc`,
 *   without moving location.
 */
rewrite_clj.custom_zipper.core.insert_child = (function rewrite_clj$custom_zipper$core$insert_child(G__4772,G__4773){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__4772))){
var zloc = G__4772;
var item = G__4773;
return rewrite_clj.custom_zipper.core.replace(zloc,rewrite_clj.custom_zipper.core.make_node(zloc,rewrite_clj.custom_zipper.core.node(zloc),cljs.core.cons(item,rewrite_clj.custom_zipper.core.children(zloc))));
} else {
return clojure.zip.insert_child(G__4772,G__4773);
}
});
/**
 * Returns zipper with node `item` inserted as the rightmost child of the current node in `zloc`,
 *   without moving.
 */
rewrite_clj.custom_zipper.core.append_child = (function rewrite_clj$custom_zipper$core$append_child(G__4774,G__4775){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__4774))){
var zloc = G__4774;
var item = G__4775;
return rewrite_clj.custom_zipper.core.replace(zloc,rewrite_clj.custom_zipper.core.make_node(zloc,rewrite_clj.custom_zipper.core.node(zloc),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rewrite_clj.custom_zipper.core.children(zloc),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null))));
} else {
return clojure.zip.append_child(G__4774,G__4775);
}
});
/**
 * Returns zipper with location at the next depth-first location in the hierarchy in `zloc`.
 *   When reaching the end, returns a distinguished zipper detectable via [[end?]]. If already
 *   at the end, stays there.
 */
rewrite_clj.custom_zipper.core.next = (function rewrite_clj$custom_zipper$core$next(G__4776){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__4776))){
var zloc = G__4776;
if(cljs.core.truth_(cljs.core.cst$kw$end_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc))){
return zloc;
} else {
var or__5045__auto__ = (function (){var and__5043__auto__ = rewrite_clj.custom_zipper.core.branch_QMARK_(zloc);
if(cljs.core.truth_(and__5043__auto__)){
return rewrite_clj.custom_zipper.core.down(zloc);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = rewrite_clj.custom_zipper.core.right(zloc);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var p = zloc;
while(true){
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.up(p))){
var or__5045__auto____$2 = rewrite_clj.custom_zipper.core.right(rewrite_clj.custom_zipper.core.up(p));
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var G__4777 = rewrite_clj.custom_zipper.core.up(p);
p = G__4777;
continue;
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p,cljs.core.cst$kw$end_QMARK_,true);
}
break;
}
}
}
}
} else {
return clojure.zip.next(G__4776);
}
});
/**
 * Returns zipper with location at the previous depth-first location in the hierarchy in `zloc`.
 *   If already at the root, returns nil.
 */
rewrite_clj.custom_zipper.core.prev = (function rewrite_clj$custom_zipper$core$prev(G__4778){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__4778))){
var zloc = G__4778;
var temp__5802__auto__ = rewrite_clj.custom_zipper.core.left(zloc);
if(cljs.core.truth_(temp__5802__auto__)){
var lloc = temp__5802__auto__;
var zloc__$1 = lloc;
while(true){
var temp__5802__auto____$1 = (function (){var and__5043__auto__ = rewrite_clj.custom_zipper.core.branch_QMARK_(zloc__$1);
if(cljs.core.truth_(and__5043__auto__)){
return rewrite_clj.custom_zipper.core.down(zloc__$1);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto____$1)){
var child = temp__5802__auto____$1;
var G__4779 = rewrite_clj.custom_zipper.core.rightmost(child);
zloc__$1 = G__4779;
continue;
} else {
return zloc__$1;
}
break;
}
} else {
return rewrite_clj.custom_zipper.core.up(zloc);
}
} else {
return clojure.zip.prev(G__4778);
}
});
/**
 * Returns true if at end of depth-first walk in `zloc`.
 */
rewrite_clj.custom_zipper.core.end_QMARK_ = (function rewrite_clj$custom_zipper$core$end_QMARK_(G__4780){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__4780))){
var zloc = G__4780;
return cljs.core.cst$kw$end_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc);
} else {
return clojure.zip.end_QMARK_(G__4780);
}
});
/**
 * Returns zipper with current node in `zloc` removed, with location at node that would have preceded
 *   it in a depth-first walk.
 */
rewrite_clj.custom_zipper.core.remove = (function rewrite_clj$custom_zipper$core$remove(G__4781){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_(G__4781))){
var zloc = G__4781;
var map__4782 = zloc;
var map__4782__$1 = cljs.core.__destructure_map(map__4782);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4782__$1,cljs.core.cst$kw$parent);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4782__$1,cljs.core.cst$kw$left);
var right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4782__$1,cljs.core.cst$kw$right);
if(cljs.core.not(parent)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("cannot remove at top",cljs.core.PersistentArrayMap.EMPTY);
} else {
if(cljs.core.seq(left)){
var zloc__$1 = (function (){var vec__4786 = cljs.core.peek(left);
var lnode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4786,(0),null);
var lpos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4786,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(zloc,cljs.core.cst$kw$changed_QMARK_,true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$position,lpos,cljs.core.cst$kw$node,lnode,cljs.core.cst$kw$left,cljs.core.pop(left)], 0));
})();
while(true){
var temp__5802__auto__ = (function (){var and__5043__auto__ = rewrite_clj.custom_zipper.core.branch_QMARK_(zloc__$1);
if(cljs.core.truth_(and__5043__auto__)){
return rewrite_clj.custom_zipper.core.down(zloc__$1);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
var G__4789 = rewrite_clj.custom_zipper.core.rightmost(child);
zloc__$1 = G__4789;
continue;
} else {
return zloc__$1;
}
break;
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(parent,cljs.core.cst$kw$changed_QMARK_,true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$node,rewrite_clj.custom_zipper.core.make_node(zloc,cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(parent),right)], 0));
}
}
} else {
return clojure.zip.remove(G__4781);
}
});
