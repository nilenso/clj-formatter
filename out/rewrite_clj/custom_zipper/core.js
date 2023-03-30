// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('rewrite_clj.custom_zipper.core');
goog.require('cljs.core');
goog.require('clojure.zip');
goog.require('rewrite_clj.custom_zipper.switchable');
goog.require('rewrite_clj.node.protocols');
rewrite_clj.custom_zipper.core.custom_zipper = (function rewrite_clj$custom_zipper$core$custom_zipper(root){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("rewrite-clj.custom-zipper.core","custom?","rewrite-clj.custom-zipper.core/custom?",-1122119625),true,new cljs.core.Keyword(null,"node","node",581201198),root,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.List.EMPTY], null);
});
rewrite_clj.custom_zipper.core.zipper = (function rewrite_clj$custom_zipper$core$zipper(root){
return clojure.zip.zipper.call(null,rewrite_clj.node.protocols.inner_QMARK_,cljs.core.comp.call(null,cljs.core.seq,rewrite_clj.node.protocols.children),rewrite_clj.node.protocols.replace_children,root);
});
rewrite_clj.custom_zipper.core.custom_zipper_QMARK_ = (function rewrite_clj$custom_zipper$core$custom_zipper_QMARK_(value){
return new cljs.core.Keyword("rewrite-clj.custom-zipper.core","custom?","rewrite-clj.custom-zipper.core/custom?",-1122119625).cljs$core$IFn$_invoke$arity$1(value);
});
/**
 * Returns the current node in `zloc`.
 */
rewrite_clj.custom_zipper.core.node = (function rewrite_clj$custom_zipper$core$node(G__635){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_.call(null,G__635))){
var zloc = G__635;
return new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(zloc);
} else {
return clojure.zip.node.call(null,G__635);
}
});
/**
 * Returns true if the current node in `zloc` is a branch.
 */
rewrite_clj.custom_zipper.core.branch_QMARK_ = (function rewrite_clj$custom_zipper$core$branch_QMARK_(G__636){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_.call(null,G__636))){
var zloc = G__636;
return rewrite_clj.node.protocols.inner_QMARK_.call(null,new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(zloc));
} else {
return clojure.zip.branch_QMARK_.call(null,G__636);
}
});
/**
 * Returns a seq of the children of current node in `zloc`, which must be a branch.
 */
rewrite_clj.custom_zipper.core.children = (function rewrite_clj$custom_zipper$core$children(G__637){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_.call(null,G__637))){
var map__638 = G__637;
var map__638__$1 = cljs.core.__destructure_map.call(null,map__638);
var zloc = map__638__$1;
var node = cljs.core.get.call(null,map__638__$1,new cljs.core.Keyword(null,"node","node",581201198));
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.branch_QMARK_.call(null,zloc))){
return cljs.core.seq.call(null,rewrite_clj.node.protocols.children.call(null,node));
} else {
throw cljs.core.ex_info.call(null,"called children on a leaf node",cljs.core.PersistentArrayMap.EMPTY);
}
} else {
return clojure.zip.children.call(null,G__637);
}
});
/**
 * Returns a new branch node, given an existing `node` and new
 *   `children`. 
 */
rewrite_clj.custom_zipper.core.make_node = (function rewrite_clj$custom_zipper$core$make_node(G__639,G__640,G__641){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_.call(null,G__639))){
var _zloc = G__639;
var node = G__640;
var children = G__641;
return rewrite_clj.node.protocols.replace_children.call(null,node,children);
} else {
return clojure.zip.make_node.call(null,G__639,G__640,G__641);
}
});
/**
 * Returns the ones-based `[row col]` of the start of the current node in `zloc`.
 * 
 *   Throws if `zloc` was not created with [position tracking](/doc/01-user-guide.adoc#position-tracking).
 */
rewrite_clj.custom_zipper.core.position = (function rewrite_clj$custom_zipper$core$position(zloc){
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.custom_zipper_QMARK_.call(null,zloc))){
return new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(zloc);
} else {
throw cljs.core.ex_info.call(null,["to use position functions, please construct your zipper with ","':track-position?'  set to true."].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Returns the ones-based `[[start-row start-col] [end-row end-col]]` of the current node in `zloc`.
 *   `end-col` is exclusive.
 * 
 *   Throws if `zloc` was not created with [position tracking](/doc/01-user-guide.adoc#position-tracking).
 */
rewrite_clj.custom_zipper.core.position_span = (function rewrite_clj$custom_zipper$core$position_span(zloc){
var start_pos = rewrite_clj.custom_zipper.core.position.call(null,zloc);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_pos,rewrite_clj.node.protocols._PLUS_extent.call(null,start_pos,rewrite_clj.node.protocols.extent.call(null,rewrite_clj.custom_zipper.core.node.call(null,zloc)))], null);
});
/**
 * Returns a seq of the left siblings of current node in `zloc`.
 */
rewrite_clj.custom_zipper.core.lefts = (function rewrite_clj$custom_zipper$core$lefts(G__642){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_.call(null,G__642))){
var zloc = G__642;
return cljs.core.map.call(null,cljs.core.first,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(zloc));
} else {
return clojure.zip.lefts.call(null,G__642);
}
});
/**
 * Returns zipper with the location at the leftmost child of current node in `zloc`, or
 *   nil if no children.
 */
rewrite_clj.custom_zipper.core.down = (function rewrite_clj$custom_zipper$core$down(G__643){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_.call(null,G__643))){
var zloc = G__643;
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.branch_QMARK_.call(null,zloc))){
var map__644 = zloc;
var map__644__$1 = cljs.core.__destructure_map.call(null,map__644);
var vec__645 = cljs.core.get.call(null,map__644__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var row = cljs.core.nth.call(null,vec__645,(0),null);
var col = cljs.core.nth.call(null,vec__645,(1),null);
var node = cljs.core.get.call(null,map__644__$1,new cljs.core.Keyword(null,"node","node",581201198));
var vec__648 = rewrite_clj.custom_zipper.core.children.call(null,zloc);
var seq__649 = cljs.core.seq.call(null,vec__648);
var first__650 = cljs.core.first.call(null,seq__649);
var seq__649__$1 = cljs.core.next.call(null,seq__649);
var c = first__650;
var cnext = seq__649__$1;
var cs = vec__648;
if(cljs.core.truth_(cs)){
return cljs.core.with_meta.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("rewrite-clj.custom-zipper.core","custom?","rewrite-clj.custom-zipper.core/custom?",-1122119625),true,new cljs.core.Keyword(null,"node","node",581201198),c,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(col + rewrite_clj.node.protocols.leader_length.call(null,node))], null),new cljs.core.Keyword(null,"parent","parent",-878878779),zloc,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"right","right",-452581833),cnext], null),cljs.core.meta.call(null,zloc));
} else {
return null;
}
} else {
return null;
}
} else {
return clojure.zip.down.call(null,G__643);
}
});
/**
 * Returns zipper with the location at the parent of current node in `zloc`, or nil if at
 *   the top.
 */
rewrite_clj.custom_zipper.core.up = (function rewrite_clj$custom_zipper$core$up(G__651){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_.call(null,G__651))){
var zloc = G__651;
var map__652 = zloc;
var map__652__$1 = cljs.core.__destructure_map.call(null,map__652);
var node = cljs.core.get.call(null,map__652__$1,new cljs.core.Keyword(null,"node","node",581201198));
var parent = cljs.core.get.call(null,map__652__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var left = cljs.core.get.call(null,map__652__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.call(null,map__652__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var changed_QMARK_ = cljs.core.get.call(null,map__652__$1,new cljs.core.Keyword(null,"changed?","changed?",-437828330));
if(cljs.core.truth_(parent)){
if(cljs.core.truth_(changed_QMARK_)){
return cljs.core.assoc.call(null,parent,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,new cljs.core.Keyword(null,"node","node",581201198),rewrite_clj.custom_zipper.core.make_node.call(null,zloc,new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(parent),cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,left),cljs.core.cons.call(null,node,right))));
} else {
return parent;
}
} else {
return null;
}
} else {
return clojure.zip.up.call(null,G__651);
}
});
/**
 * Zips all the way up `zloc` and returns the root node, reflecting any changes.
 */
rewrite_clj.custom_zipper.core.root = (function rewrite_clj$custom_zipper$core$root(G__653){
while(true){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_.call(null,G__653))){
var zloc = G__653;
if(cljs.core.truth_(new cljs.core.Keyword(null,"end?","end?",-1423391609).cljs$core$IFn$_invoke$arity$1(zloc))){
return rewrite_clj.custom_zipper.core.node.call(null,zloc);
} else {
var p = rewrite_clj.custom_zipper.core.up.call(null,zloc);
if(cljs.core.truth_(p)){
var G__654 = p;
G__653 = G__654;
continue;
} else {
return rewrite_clj.custom_zipper.core.node.call(null,zloc);
}
}
} else {
return clojure.zip.root.call(null,G__653);
}
break;
}
});
/**
 * Returns zipper with location at the right sibling of the current node in `zloc`, or nil.
 */
rewrite_clj.custom_zipper.core.right = (function rewrite_clj$custom_zipper$core$right(G__655){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_.call(null,G__655))){
var zloc = G__655;
var map__656 = zloc;
var map__656__$1 = cljs.core.__destructure_map.call(null,map__656);
var vec__657 = cljs.core.get.call(null,map__656__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var seq__658 = cljs.core.seq.call(null,vec__657);
var first__659 = cljs.core.first.call(null,seq__658);
var seq__658__$1 = cljs.core.next.call(null,seq__658);
var r = first__659;
var rnext = seq__658__$1;
var right = vec__657;
var node = cljs.core.get.call(null,map__656__$1,new cljs.core.Keyword(null,"node","node",581201198));
var parent = cljs.core.get.call(null,map__656__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var position = cljs.core.get.call(null,map__656__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var left = cljs.core.get.call(null,map__656__$1,new cljs.core.Keyword(null,"left","left",-399115937));
if(cljs.core.truth_((function (){var and__5043__auto__ = parent;
if(cljs.core.truth_(and__5043__auto__)){
return right;
} else {
return and__5043__auto__;
}
})())){
return cljs.core.assoc.call(null,zloc,new cljs.core.Keyword(null,"node","node",581201198),r,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.conj.call(null,left,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,position], null)),new cljs.core.Keyword(null,"right","right",-452581833),rnext,new cljs.core.Keyword(null,"position","position",-2011731912),rewrite_clj.node.protocols._PLUS_extent.call(null,position,rewrite_clj.node.protocols.extent.call(null,node)));
} else {
return null;
}
} else {
return clojure.zip.right.call(null,G__655);
}
});
/**
 * Returns zipper with location at the rightmost sibling of the current node in `zloc`, or self.
 */
rewrite_clj.custom_zipper.core.rightmost = (function rewrite_clj$custom_zipper$core$rightmost(G__660){
while(true){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_.call(null,G__660))){
var zloc = G__660;
var temp__5802__auto__ = rewrite_clj.custom_zipper.core.right.call(null,zloc);
if(cljs.core.truth_(temp__5802__auto__)){
var next = temp__5802__auto__;
var G__661 = next;
G__660 = G__661;
continue;
} else {
return zloc;
}
} else {
return clojure.zip.rightmost.call(null,G__660);
}
break;
}
});
/**
 * Returns zipper with location at the left sibling of the current node in `zloc`, or nil.
 */
rewrite_clj.custom_zipper.core.left = (function rewrite_clj$custom_zipper$core$left(G__662){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_.call(null,G__662))){
var zloc = G__662;
var map__663 = zloc;
var map__663__$1 = cljs.core.__destructure_map.call(null,map__663);
var node = cljs.core.get.call(null,map__663__$1,new cljs.core.Keyword(null,"node","node",581201198));
var parent = cljs.core.get.call(null,map__663__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var left = cljs.core.get.call(null,map__663__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.call(null,map__663__$1,new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.truth_((function (){var and__5043__auto__ = parent;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.seq.call(null,left);
} else {
return and__5043__auto__;
}
})())){
var vec__664 = cljs.core.peek.call(null,left);
var lnode = cljs.core.nth.call(null,vec__664,(0),null);
var lpos = cljs.core.nth.call(null,vec__664,(1),null);
return cljs.core.assoc.call(null,zloc,new cljs.core.Keyword(null,"node","node",581201198),lnode,new cljs.core.Keyword(null,"position","position",-2011731912),lpos,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.pop.call(null,left),new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.cons.call(null,node,right));
} else {
return null;
}
} else {
return clojure.zip.left.call(null,G__662);
}
});
/**
 * Returns zipper with location at the leftmost sibling of the current node in `zloc`, or self.
 */
rewrite_clj.custom_zipper.core.leftmost = (function rewrite_clj$custom_zipper$core$leftmost(G__667){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_.call(null,G__667))){
var zloc = G__667;
var map__668 = zloc;
var map__668__$1 = cljs.core.__destructure_map.call(null,map__668);
var node = cljs.core.get.call(null,map__668__$1,new cljs.core.Keyword(null,"node","node",581201198));
var parent = cljs.core.get.call(null,map__668__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var left = cljs.core.get.call(null,map__668__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.call(null,map__668__$1,new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.truth_((function (){var and__5043__auto__ = parent;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.seq.call(null,left);
} else {
return and__5043__auto__;
}
})())){
var vec__669 = cljs.core.first.call(null,left);
var lnode = cljs.core.nth.call(null,vec__669,(0),null);
var lpos = cljs.core.nth.call(null,vec__669,(1),null);
return cljs.core.assoc.call(null,zloc,new cljs.core.Keyword(null,"node","node",581201198),lnode,new cljs.core.Keyword(null,"position","position",-2011731912),lpos,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,cljs.core.rest.call(null,left)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),right));
} else {
return zloc;
}
} else {
return clojure.zip.leftmost.call(null,G__667);
}
});
/**
 * Returns zipper with node `item` inserted as the left sibling of current node in `zloc`,
 *  without moving location.
 */
rewrite_clj.custom_zipper.core.insert_left = (function rewrite_clj$custom_zipper$core$insert_left(G__672,G__673){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_.call(null,G__672))){
var zloc = G__672;
var item = G__673;
var map__674 = zloc;
var map__674__$1 = cljs.core.__destructure_map.call(null,map__674);
var parent = cljs.core.get.call(null,map__674__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var position = cljs.core.get.call(null,map__674__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var left = cljs.core.get.call(null,map__674__$1,new cljs.core.Keyword(null,"left","left",-399115937));
if(cljs.core.not.call(null,parent)){
throw cljs.core.ex_info.call(null,"cannot insert left at top",cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.assoc.call(null,zloc,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.conj.call(null,left,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,position], null)),new cljs.core.Keyword(null,"position","position",-2011731912),rewrite_clj.node.protocols._PLUS_extent.call(null,position,rewrite_clj.node.protocols.extent.call(null,item)));
}
} else {
return clojure.zip.insert_left.call(null,G__672,G__673);
}
});
/**
 * Returns zipper with node `item` inserted as the right sibling of the current node in `zloc`,
 *   without moving location.
 */
rewrite_clj.custom_zipper.core.insert_right = (function rewrite_clj$custom_zipper$core$insert_right(G__675,G__676){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_.call(null,G__675))){
var zloc = G__675;
var item = G__676;
var map__677 = zloc;
var map__677__$1 = cljs.core.__destructure_map.call(null,map__677);
var parent = cljs.core.get.call(null,map__677__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var right = cljs.core.get.call(null,map__677__$1,new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.not.call(null,parent)){
throw cljs.core.ex_info.call(null,"cannot insert right at top",cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.assoc.call(null,zloc,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.cons.call(null,item,right));
}
} else {
return clojure.zip.insert_right.call(null,G__675,G__676);
}
});
/**
 * Returns zipper with node `item` replacing current node in `zloc`, without moving location.
 */
rewrite_clj.custom_zipper.core.replace = (function rewrite_clj$custom_zipper$core$replace(G__678,G__679){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_.call(null,G__678))){
var zloc = G__678;
var item = G__679;
return cljs.core.assoc.call(null,zloc,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,new cljs.core.Keyword(null,"node","node",581201198),item);
} else {
return clojure.zip.replace.call(null,G__678,G__679);
}
});
/**
 * Returns zipper with value of `(apply f current-node args)` replacing current node in `zloc`.
 * 
 * The result of `f` should be a rewrite-clj node.
 */
rewrite_clj.custom_zipper.core.edit = (function rewrite_clj$custom_zipper$core$edit(var_args){
var args__5775__auto__ = [];
var len__5769__auto___683 = arguments.length;
var i__5770__auto___684 = (0);
while(true){
if((i__5770__auto___684 < len__5769__auto___683)){
args__5775__auto__.push((arguments[i__5770__auto___684]));

var G__685 = (i__5770__auto___684 + (1));
i__5770__auto___684 = G__685;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return rewrite_clj.custom_zipper.core.edit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(rewrite_clj.custom_zipper.core.edit.cljs$core$IFn$_invoke$arity$variadic = (function (zloc,f,args){
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.custom_zipper_QMARK_.call(null,zloc))){
return rewrite_clj.custom_zipper.core.replace.call(null,zloc,cljs.core.apply.call(null,f,rewrite_clj.custom_zipper.core.node.call(null,zloc),args));
} else {
return cljs.core.apply.call(null,clojure.zip.edit,zloc,f,args);
}
}));

(rewrite_clj.custom_zipper.core.edit.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rewrite_clj.custom_zipper.core.edit.cljs$lang$applyTo = (function (seq680){
var G__681 = cljs.core.first.call(null,seq680);
var seq680__$1 = cljs.core.next.call(null,seq680);
var G__682 = cljs.core.first.call(null,seq680__$1);
var seq680__$2 = cljs.core.next.call(null,seq680__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__681,G__682,seq680__$2);
}));

/**
 * Returns zipper with node `item` inserted as the leftmost child of the current node in `zloc`,
 *   without moving location.
 */
rewrite_clj.custom_zipper.core.insert_child = (function rewrite_clj$custom_zipper$core$insert_child(G__686,G__687){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_.call(null,G__686))){
var zloc = G__686;
var item = G__687;
return rewrite_clj.custom_zipper.core.replace.call(null,zloc,rewrite_clj.custom_zipper.core.make_node.call(null,zloc,rewrite_clj.custom_zipper.core.node.call(null,zloc),cljs.core.cons.call(null,item,rewrite_clj.custom_zipper.core.children.call(null,zloc))));
} else {
return clojure.zip.insert_child.call(null,G__686,G__687);
}
});
/**
 * Returns zipper with node `item` inserted as the rightmost child of the current node in `zloc`,
 *   without moving.
 */
rewrite_clj.custom_zipper.core.append_child = (function rewrite_clj$custom_zipper$core$append_child(G__688,G__689){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_.call(null,G__688))){
var zloc = G__688;
var item = G__689;
return rewrite_clj.custom_zipper.core.replace.call(null,zloc,rewrite_clj.custom_zipper.core.make_node.call(null,zloc,rewrite_clj.custom_zipper.core.node.call(null,zloc),cljs.core.concat.call(null,rewrite_clj.custom_zipper.core.children.call(null,zloc),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null))));
} else {
return clojure.zip.append_child.call(null,G__688,G__689);
}
});
/**
 * Returns zipper with location at the next depth-first location in the hierarchy in `zloc`.
 *   When reaching the end, returns a distinguished zipper detectable via [[end?]]. If already
 *   at the end, stays there.
 */
rewrite_clj.custom_zipper.core.next = (function rewrite_clj$custom_zipper$core$next(G__690){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_.call(null,G__690))){
var zloc = G__690;
if(cljs.core.truth_(new cljs.core.Keyword(null,"end?","end?",-1423391609).cljs$core$IFn$_invoke$arity$1(zloc))){
return zloc;
} else {
var or__5045__auto__ = (function (){var and__5043__auto__ = rewrite_clj.custom_zipper.core.branch_QMARK_.call(null,zloc);
if(cljs.core.truth_(and__5043__auto__)){
return rewrite_clj.custom_zipper.core.down.call(null,zloc);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = rewrite_clj.custom_zipper.core.right.call(null,zloc);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var p = zloc;
while(true){
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.up.call(null,p))){
var or__5045__auto____$2 = rewrite_clj.custom_zipper.core.right.call(null,rewrite_clj.custom_zipper.core.up.call(null,p));
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var G__691 = rewrite_clj.custom_zipper.core.up.call(null,p);
p = G__691;
continue;
}
} else {
return cljs.core.assoc.call(null,p,new cljs.core.Keyword(null,"end?","end?",-1423391609),true);
}
break;
}
}
}
}
} else {
return clojure.zip.next.call(null,G__690);
}
});
/**
 * Returns zipper with location at the previous depth-first location in the hierarchy in `zloc`.
 *   If already at the root, returns nil.
 */
rewrite_clj.custom_zipper.core.prev = (function rewrite_clj$custom_zipper$core$prev(G__692){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_.call(null,G__692))){
var zloc = G__692;
var temp__5802__auto__ = rewrite_clj.custom_zipper.core.left.call(null,zloc);
if(cljs.core.truth_(temp__5802__auto__)){
var lloc = temp__5802__auto__;
var zloc__$1 = lloc;
while(true){
var temp__5802__auto____$1 = (function (){var and__5043__auto__ = rewrite_clj.custom_zipper.core.branch_QMARK_.call(null,zloc__$1);
if(cljs.core.truth_(and__5043__auto__)){
return rewrite_clj.custom_zipper.core.down.call(null,zloc__$1);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto____$1)){
var child = temp__5802__auto____$1;
var G__693 = rewrite_clj.custom_zipper.core.rightmost.call(null,child);
zloc__$1 = G__693;
continue;
} else {
return zloc__$1;
}
break;
}
} else {
return rewrite_clj.custom_zipper.core.up.call(null,zloc);
}
} else {
return clojure.zip.prev.call(null,G__692);
}
});
/**
 * Returns true if at end of depth-first walk in `zloc`.
 */
rewrite_clj.custom_zipper.core.end_QMARK_ = (function rewrite_clj$custom_zipper$core$end_QMARK_(G__694){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_.call(null,G__694))){
var zloc = G__694;
return new cljs.core.Keyword(null,"end?","end?",-1423391609).cljs$core$IFn$_invoke$arity$1(zloc);
} else {
return clojure.zip.end_QMARK_.call(null,G__694);
}
});
/**
 * Returns zipper with current node in `zloc` removed, with location at node that would have preceded
 *   it in a depth-first walk.
 */
rewrite_clj.custom_zipper.core.remove = (function rewrite_clj$custom_zipper$core$remove(G__695){
if(cljs.core.truth_(rewrite_clj.custom_zipper.switchable.custom_zipper_QMARK_.call(null,G__695))){
var zloc = G__695;
var map__696 = zloc;
var map__696__$1 = cljs.core.__destructure_map.call(null,map__696);
var parent = cljs.core.get.call(null,map__696__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var left = cljs.core.get.call(null,map__696__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var right = cljs.core.get.call(null,map__696__$1,new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.not.call(null,parent)){
throw cljs.core.ex_info.call(null,"cannot remove at top",cljs.core.PersistentArrayMap.EMPTY);
} else {
if(cljs.core.seq.call(null,left)){
var zloc__$1 = (function (){var vec__700 = cljs.core.peek.call(null,left);
var lnode = cljs.core.nth.call(null,vec__700,(0),null);
var lpos = cljs.core.nth.call(null,vec__700,(1),null);
return cljs.core.assoc.call(null,zloc,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,new cljs.core.Keyword(null,"position","position",-2011731912),lpos,new cljs.core.Keyword(null,"node","node",581201198),lnode,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.pop.call(null,left));
})();
while(true){
var temp__5802__auto__ = (function (){var and__5043__auto__ = rewrite_clj.custom_zipper.core.branch_QMARK_.call(null,zloc__$1);
if(cljs.core.truth_(and__5043__auto__)){
return rewrite_clj.custom_zipper.core.down.call(null,zloc__$1);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
var G__703 = rewrite_clj.custom_zipper.core.rightmost.call(null,child);
zloc__$1 = G__703;
continue;
} else {
return zloc__$1;
}
break;
}
} else {
return cljs.core.assoc.call(null,parent,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,new cljs.core.Keyword(null,"node","node",581201198),rewrite_clj.custom_zipper.core.make_node.call(null,zloc,new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(parent),right));
}
}
} else {
return clojure.zip.remove.call(null,G__695);
}
});

//# sourceMappingURL=core.js.map
