// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('rewrite_clj.custom_zipper.utils');
goog.require('cljs.core');
goog.require('rewrite_clj.custom_zipper.core');
rewrite_clj.custom_zipper.utils.update_in_path = (function rewrite_clj$custom_zipper$utils$update_in_path(p__3026,k,f){
var vec__3027 = p__3026;
var node = cljs.core.nth.call(null,vec__3027,(0),null);
var path = cljs.core.nth.call(null,vec__3027,(1),null);
var loc = vec__3027;
var v = cljs.core.get.call(null,path,k);
if(cljs.core.seq.call(null,v)){
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.call(null,path,k,f.call(null,v),new cljs.core.Keyword(null,"changed?","changed?",-437828330),true)], null),cljs.core.meta.call(null,loc));
} else {
return loc;
}
});
/**
 * Remove right sibling of the current node (if there is one).
 */
rewrite_clj.custom_zipper.utils.remove_right = (function rewrite_clj$custom_zipper$utils$remove_right(loc){
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.custom_zipper_QMARK_.call(null,loc))){
var map__3030 = loc;
var map__3030__$1 = cljs.core.__destructure_map.call(null,map__3030);
var vec__3031 = cljs.core.get.call(null,map__3030__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var seq__3032 = cljs.core.seq.call(null,vec__3031);
var first__3033 = cljs.core.first.call(null,seq__3032);
var seq__3032__$1 = cljs.core.next.call(null,seq__3032);
var _r = first__3033;
var rs = seq__3032__$1;
return cljs.core.assoc.call(null,loc,new cljs.core.Keyword(null,"right","right",-452581833),rs,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true);
} else {
return rewrite_clj.custom_zipper.utils.update_in_path.call(null,loc,new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.next);
}
});
/**
 * Remove left sibling of the current node (if there is one).
 */
rewrite_clj.custom_zipper.utils.remove_left = (function rewrite_clj$custom_zipper$utils$remove_left(loc){
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.custom_zipper_QMARK_.call(null,loc))){
var map__3034 = loc;
var map__3034__$1 = cljs.core.__destructure_map.call(null,map__3034);
var left = cljs.core.get.call(null,map__3034__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var temp__5802__auto__ = cljs.core.peek.call(null,left);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__3035 = temp__5802__auto__;
var _ = cljs.core.nth.call(null,vec__3035,(0),null);
var lpos = cljs.core.nth.call(null,vec__3035,(1),null);
return cljs.core.assoc.call(null,loc,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.pop.call(null,left),new cljs.core.Keyword(null,"position","position",-2011731912),lpos,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true);
} else {
return loc;
}
} else {
return rewrite_clj.custom_zipper.utils.update_in_path.call(null,loc,new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.pop);
}
});
/**
 * Remove elements to the right of the current zipper location as long as
 * the given predicate matches.
 */
rewrite_clj.custom_zipper.utils.remove_right_while = (function rewrite_clj$custom_zipper$utils$remove_right_while(zloc,p_QMARK_){
var zloc__$1 = zloc;
while(true){
var temp__5802__auto__ = rewrite_clj.custom_zipper.core.right.call(null,zloc__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var rloc = temp__5802__auto__;
if(cljs.core.truth_(p_QMARK_.call(null,rloc))){
var G__3038 = rewrite_clj.custom_zipper.utils.remove_right.call(null,zloc__$1);
zloc__$1 = G__3038;
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
var temp__5802__auto__ = rewrite_clj.custom_zipper.core.left.call(null,zloc__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var lloc = temp__5802__auto__;
if(cljs.core.truth_(p_QMARK_.call(null,lloc))){
var G__3039 = rewrite_clj.custom_zipper.utils.remove_left.call(null,zloc__$1);
zloc__$1 = G__3039;
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
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.custom_zipper_QMARK_.call(null,loc))){
var map__3040 = loc;
var map__3040__$1 = cljs.core.__destructure_map.call(null,map__3040);
var left = cljs.core.get.call(null,map__3040__$1,new cljs.core.Keyword(null,"left","left",-399115937));
if(cljs.core.seq.call(null,left)){
var vec__3041 = cljs.core.peek.call(null,left);
var lnode = cljs.core.nth.call(null,vec__3041,(0),null);
var lpos = cljs.core.nth.call(null,vec__3041,(1),null);
return cljs.core.assoc.call(null,loc,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,new cljs.core.Keyword(null,"node","node",581201198),lnode,new cljs.core.Keyword(null,"position","position",-2011731912),lpos,new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.pop.call(null,left));
} else {
return null;
}
} else {
var vec__3044 = loc;
var _ = cljs.core.nth.call(null,vec__3044,(0),null);
var map__3047 = cljs.core.nth.call(null,vec__3044,(1),null);
var map__3047__$1 = cljs.core.__destructure_map.call(null,map__3047);
var path = map__3047__$1;
var l = cljs.core.get.call(null,map__3047__$1,new cljs.core.Keyword(null,"l","l",1395893423));
if(cljs.core.seq.call(null,l)){
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek.call(null,l),cljs.core.assoc.call(null,cljs.core.update_in.call(null,path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"l","l",1395893423)], null),cljs.core.pop),new cljs.core.Keyword(null,"changed?","changed?",-437828330),true)], null),cljs.core.meta.call(null,loc));
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
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.custom_zipper_QMARK_.call(null,loc))){
var map__3048 = loc;
var map__3048__$1 = cljs.core.__destructure_map.call(null,map__3048);
var right = cljs.core.get.call(null,map__3048__$1,new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.seq.call(null,right)){
return cljs.core.assoc.call(null,loc,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true,new cljs.core.Keyword(null,"node","node",581201198),cljs.core.first.call(null,right),new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.next.call(null,right));
} else {
return null;
}
} else {
var vec__3049 = loc;
var _ = cljs.core.nth.call(null,vec__3049,(0),null);
var map__3052 = cljs.core.nth.call(null,vec__3049,(1),null);
var map__3052__$1 = cljs.core.__destructure_map.call(null,map__3052);
var path = map__3052__$1;
var r = cljs.core.get.call(null,map__3052__$1,new cljs.core.Keyword(null,"r","r",-471384190));
if(cljs.core.seq.call(null,r)){
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,r),cljs.core.assoc.call(null,cljs.core.update_in.call(null,path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r","r",-471384190)], null),cljs.core.next),new cljs.core.Keyword(null,"changed?","changed?",-437828330),true)], null),cljs.core.meta.call(null,loc));
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
if(cljs.core.truth_(rewrite_clj.custom_zipper.core.custom_zipper_QMARK_.call(null,loc))){
var map__3053 = loc;
var map__3053__$1 = cljs.core.__destructure_map.call(null,map__3053);
var left = cljs.core.get.call(null,map__3053__$1,new cljs.core.Keyword(null,"left","left",-399115937));
if(cljs.core.seq.call(null,left)){
return rewrite_clj.custom_zipper.core.up.call(null,rewrite_clj.custom_zipper.core.remove.call(null,loc));
} else {
return rewrite_clj.custom_zipper.core.remove.call(null,loc);
}
} else {
var vec__3054 = loc;
var _node = cljs.core.nth.call(null,vec__3054,(0),null);
var map__3057 = cljs.core.nth.call(null,vec__3054,(1),null);
var map__3057__$1 = cljs.core.__destructure_map.call(null,map__3057);
var path = map__3057__$1;
var l = cljs.core.get.call(null,map__3057__$1,new cljs.core.Keyword(null,"l","l",1395893423));
var ppath = cljs.core.get.call(null,map__3057__$1,new cljs.core.Keyword(null,"ppath","ppath",-1758182784));
var pnodes = cljs.core.get.call(null,map__3057__$1,new cljs.core.Keyword(null,"pnodes","pnodes",1739080565));
var rs = cljs.core.get.call(null,map__3057__$1,new cljs.core.Keyword(null,"r","r",-471384190));
if((ppath == null)){
throw cljs.core.ex_info.call(null,"cannot remove at top",cljs.core.PersistentArrayMap.EMPTY);
} else {
if((cljs.core.count.call(null,l) > (0))){
return rewrite_clj.custom_zipper.core.up.call(null,cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek.call(null,l),cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.pop.call(null,l),new cljs.core.Keyword(null,"changed?","changed?",-437828330),true)], null),cljs.core.meta.call(null,loc)));
} else {
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewrite_clj.custom_zipper.core.make_node.call(null,loc,cljs.core.peek.call(null,pnodes),rs),(function (){var and__5043__auto__ = ppath;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.assoc.call(null,ppath,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true);
} else {
return and__5043__auto__;
}
})()], null),cljs.core.meta.call(null,loc));
}
}
}
});

//# sourceMappingURL=utils.js.map
