// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('rewrite_clj.zip.move');
goog.require('cljs.core');
goog.require('rewrite_clj.custom_zipper.core');
goog.require('rewrite_clj.zip.whitespace');
/**
 * Return zipper with location moved right to next non-whitespace/non-comment sibling of current node in `zloc`.
 */
rewrite_clj.zip.move.right = (function rewrite_clj$zip$move$right(zloc){
var G__2618 = zloc;
var G__2618__$1 = (((G__2618 == null))?null:rewrite_clj.custom_zipper.core.right.call(null,G__2618));
if((G__2618__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace.call(null,G__2618__$1);
}
});
/**
 * Return zipper with location moved left to next non-whitespace/non-comment sibling of current node in `zloc`.
 */
rewrite_clj.zip.move.left = (function rewrite_clj$zip$move$left(zloc){
var G__2619 = zloc;
var G__2619__$1 = (((G__2619 == null))?null:rewrite_clj.custom_zipper.core.left.call(null,G__2619));
if((G__2619__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace_left.call(null,G__2619__$1);
}
});
/**
 * Return zipper with location moved down to the first non-whitespace/non-comment child node of the current node in `zloc`, or nil if no applicable children.
 */
rewrite_clj.zip.move.down = (function rewrite_clj$zip$move$down(zloc){
var G__2620 = zloc;
var G__2620__$1 = (((G__2620 == null))?null:rewrite_clj.custom_zipper.core.down.call(null,G__2620));
if((G__2620__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace.call(null,G__2620__$1);
}
});
/**
 * Return zipper with location moved up to next non-whitespace/non-comment parent of current node in `zloc`, or `nil` if at the top.
 */
rewrite_clj.zip.move.up = (function rewrite_clj$zip$move$up(zloc){
var G__2621 = zloc;
var G__2621__$1 = (((G__2621 == null))?null:rewrite_clj.custom_zipper.core.up.call(null,G__2621));
if((G__2621__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace_left.call(null,G__2621__$1);
}
});
/**
 * Return zipper with location moved to the next depth-first non-whitespace/non-comment node in `zloc`.
 * End can be detected with [[end?]], if already at end, stays there.
 */
rewrite_clj.zip.move.next = (function rewrite_clj$zip$move$next(zloc){
if(cljs.core.truth_(zloc)){
var or__5045__auto__ = (function (){var G__2622 = zloc;
var G__2622__$1 = (((G__2622 == null))?null:rewrite_clj.custom_zipper.core.next.call(null,G__2622));
if((G__2622__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace.call(null,rewrite_clj.custom_zipper.core.next,G__2622__$1);
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.vary_meta.call(null,zloc,cljs.core.assoc,new cljs.core.Keyword("rewrite-clj.zip.move","end?","rewrite-clj.zip.move/end?",891526475),true);
}
} else {
return null;
}
});
/**
 * Return true if `zloc` is at end of depth-first traversal.
 */
rewrite_clj.zip.move.end_QMARK_ = (function rewrite_clj$zip$move$end_QMARK_(zloc){
var or__5045__auto__ = cljs.core.not.call(null,zloc);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = rewrite_clj.custom_zipper.core.end_QMARK_.call(null,zloc);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return new cljs.core.Keyword("rewrite-clj.zip.move","end?","rewrite-clj.zip.move/end?",891526475).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,zloc));
}
}
});
/**
 * Return true if at rightmost non-whitespace/non-comment sibling node in `zloc`.
 */
rewrite_clj.zip.move.rightmost_QMARK_ = (function rewrite_clj$zip$move$rightmost_QMARK_(zloc){
return (rewrite_clj.zip.whitespace.skip_whitespace.call(null,rewrite_clj.custom_zipper.core.right.call(null,zloc)) == null);
});
/**
 * Return true if at leftmost non-whitespace/non-comment sibling node in `zloc`.
 */
rewrite_clj.zip.move.leftmost_QMARK_ = (function rewrite_clj$zip$move$leftmost_QMARK_(zloc){
return (rewrite_clj.zip.whitespace.skip_whitespace_left.call(null,rewrite_clj.custom_zipper.core.left.call(null,zloc)) == null);
});
/**
 * Return zipper with location moved to the previous depth-first non-whitespace/non-comment node in `zloc`. If already at root, returns nil.
 */
rewrite_clj.zip.move.prev = (function rewrite_clj$zip$move$prev(zloc){
var G__2623 = zloc;
var G__2623__$1 = (((G__2623 == null))?null:rewrite_clj.custom_zipper.core.prev.call(null,G__2623));
if((G__2623__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace.call(null,rewrite_clj.custom_zipper.core.prev,G__2623__$1);
}
});
/**
 * Return zipper with location moved to the leftmost non-whitespace/non-comment sibling of current node in `zloc`.
 */
rewrite_clj.zip.move.leftmost = (function rewrite_clj$zip$move$leftmost(zloc){
var G__2624 = zloc;
var G__2624__$1 = (((G__2624 == null))?null:rewrite_clj.custom_zipper.core.leftmost.call(null,G__2624));
if((G__2624__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace.call(null,G__2624__$1);
}
});
/**
 * Return zipper with location moved to the rightmost non-whitespace/non-comment sibling of current node in `zloc`.
 */
rewrite_clj.zip.move.rightmost = (function rewrite_clj$zip$move$rightmost(zloc){
var G__2625 = zloc;
var G__2625__$1 = (((G__2625 == null))?null:rewrite_clj.custom_zipper.core.rightmost.call(null,G__2625));
if((G__2625__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace_left.call(null,G__2625__$1);
}
});

//# sourceMappingURL=move.js.map
