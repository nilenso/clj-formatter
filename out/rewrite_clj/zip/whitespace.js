// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('rewrite_clj.zip.whitespace');
goog.require('cljs.core');
goog.require('rewrite_clj.custom_zipper.core');
goog.require('rewrite_clj.node.comment');
goog.require('rewrite_clj.node.extras');
goog.require('rewrite_clj.node.whitespace');
/**
 * Returns true when the current the node in `zloc` is a Clojure whitespace (which includes the comma).
 */
rewrite_clj.zip.whitespace.whitespace_QMARK_ = (function rewrite_clj$zip$whitespace$whitespace_QMARK_(zloc){
var G__2585 = zloc;
var G__2585__$1 = (((G__2585 == null))?null:rewrite_clj.custom_zipper.core.node.call(null,G__2585));
if((G__2585__$1 == null)){
return null;
} else {
return rewrite_clj.node.whitespace.whitespace_QMARK_.call(null,G__2585__$1);
}
});
/**
 * Returns true when the current node in `zloc` is a linebreak.
 */
rewrite_clj.zip.whitespace.linebreak_QMARK_ = (function rewrite_clj$zip$whitespace$linebreak_QMARK_(zloc){
var G__2586 = zloc;
var G__2586__$1 = (((G__2586 == null))?null:rewrite_clj.custom_zipper.core.node.call(null,G__2586));
if((G__2586__$1 == null)){
return null;
} else {
return rewrite_clj.node.whitespace.linebreak_QMARK_.call(null,G__2586__$1);
}
});
/**
 * Returns true when the current node in `zloc` is a comment.
 */
rewrite_clj.zip.whitespace.comment_QMARK_ = (function rewrite_clj$zip$whitespace$comment_QMARK_(zloc){
var G__2587 = zloc;
var G__2587__$1 = (((G__2587 == null))?null:rewrite_clj.custom_zipper.core.node.call(null,G__2587));
if((G__2587__$1 == null)){
return null;
} else {
return rewrite_clj.node.comment.comment_QMARK_.call(null,G__2587__$1);
}
});
/**
 * Returns true when current node in `zloc` is a whitespace but not a linebreak.
 */
rewrite_clj.zip.whitespace.whitespace_not_linebreak_QMARK_ = (function rewrite_clj$zip$whitespace$whitespace_not_linebreak_QMARK_(zloc){
var and__5043__auto__ = rewrite_clj.zip.whitespace.whitespace_QMARK_.call(null,zloc);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not.call(null,rewrite_clj.zip.whitespace.linebreak_QMARK_.call(null,zloc));
} else {
return and__5043__auto__;
}
});
/**
 * Returns true when current node in `zloc` is whitespace or a comment.
 */
rewrite_clj.zip.whitespace.whitespace_or_comment_QMARK_ = (function rewrite_clj$zip$whitespace$whitespace_or_comment_QMARK_(zloc){
var G__2588 = zloc;
var G__2588__$1 = (((G__2588 == null))?null:rewrite_clj.custom_zipper.core.node.call(null,G__2588));
if((G__2588__$1 == null)){
return null;
} else {
return rewrite_clj.node.extras.whitespace_or_comment_QMARK_.call(null,G__2588__$1);
}
});
/**
 * Return zipper with location moved to first location not satisfying predicate `p?` starting from the node in
 * `zloc` and traversing by function `f`.
 */
rewrite_clj.zip.whitespace.skip = (function rewrite_clj$zip$whitespace$skip(f,p_QMARK_,zloc){
return cljs.core.first.call(null,cljs.core.drop_while.call(null,p_QMARK_,cljs.core.take_while.call(null,cljs.core.complement.call(null,rewrite_clj.custom_zipper.core.end_QMARK_),cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,f,zloc)))));
});
/**
 * Return zipper with location moved to first non-whitespace/non-comment starting from current node in `zloc`
 * and traversing by function `f`.
 * 
 * `f` defaults to [[right]]
 */
rewrite_clj.zip.whitespace.skip_whitespace = (function rewrite_clj$zip$whitespace$skip_whitespace(var_args){
var G__2590 = arguments.length;
switch (G__2590) {
case 1:
return rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.whitespace.skip_whitespace.call(null,rewrite_clj.custom_zipper.core.right,zloc);
}));

(rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$2 = (function (f,zloc){
return rewrite_clj.zip.whitespace.skip.call(null,f,rewrite_clj.zip.whitespace.whitespace_or_comment_QMARK_,zloc);
}));

(rewrite_clj.zip.whitespace.skip_whitespace.cljs$lang$maxFixedArity = 2);

/**
 * Return zipper with location moved to first non-whitespace/non-comment starting from current node in `zloc` traversing left.
 */
rewrite_clj.zip.whitespace.skip_whitespace_left = (function rewrite_clj$zip$whitespace$skip_whitespace_left(zloc){
return rewrite_clj.zip.whitespace.skip_whitespace.call(null,rewrite_clj.custom_zipper.core.left,zloc);
});
/**
 * Return zipper with `n` space whitespace node inserted to the left of the current node in `zloc`, without moving location.
 * `n` defaults to 1.
 */
rewrite_clj.zip.whitespace.insert_space_left = (function rewrite_clj$zip$whitespace$insert_space_left(var_args){
var G__2593 = arguments.length;
switch (G__2593) {
case 1:
return rewrite_clj.zip.whitespace.insert_space_left.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.whitespace.insert_space_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.whitespace.insert_space_left.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.whitespace.insert_space_left.call(null,zloc,(1));
}));

(rewrite_clj.zip.whitespace.insert_space_left.cljs$core$IFn$_invoke$arity$2 = (function (zloc,n){
if((n >= (0))){
} else {
throw (new Error("Assert failed: (>= n 0)"));
}

if((n > (0))){
return rewrite_clj.custom_zipper.core.insert_left.call(null,zloc,rewrite_clj.node.whitespace.spaces.call(null,n));
} else {
return zloc;
}
}));

(rewrite_clj.zip.whitespace.insert_space_left.cljs$lang$maxFixedArity = 2);

/**
 * Return zipper with `n` space whitespace node inserted to the right of the current node in `zloc`, without moving location.
 * `n` defaults to 1.
 */
rewrite_clj.zip.whitespace.insert_space_right = (function rewrite_clj$zip$whitespace$insert_space_right(var_args){
var G__2596 = arguments.length;
switch (G__2596) {
case 1:
return rewrite_clj.zip.whitespace.insert_space_right.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.whitespace.insert_space_right.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.whitespace.insert_space_right.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.whitespace.insert_space_right.call(null,zloc,(1));
}));

(rewrite_clj.zip.whitespace.insert_space_right.cljs$core$IFn$_invoke$arity$2 = (function (zloc,n){
if((n >= (0))){
} else {
throw (new Error("Assert failed: (>= n 0)"));
}

if((n > (0))){
return rewrite_clj.custom_zipper.core.insert_right.call(null,zloc,rewrite_clj.node.whitespace.spaces.call(null,n));
} else {
return zloc;
}
}));

(rewrite_clj.zip.whitespace.insert_space_right.cljs$lang$maxFixedArity = 2);

/**
 * Return zipper with `n` newlines node inserted to the left of the current node in `zloc`, without moving location.
 * `n` defaults to 1.
 */
rewrite_clj.zip.whitespace.insert_newline_left = (function rewrite_clj$zip$whitespace$insert_newline_left(var_args){
var G__2599 = arguments.length;
switch (G__2599) {
case 1:
return rewrite_clj.zip.whitespace.insert_newline_left.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.whitespace.insert_newline_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.whitespace.insert_newline_left.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.whitespace.insert_newline_left.call(null,zloc,(1));
}));

(rewrite_clj.zip.whitespace.insert_newline_left.cljs$core$IFn$_invoke$arity$2 = (function (zloc,n){
return rewrite_clj.custom_zipper.core.insert_left.call(null,zloc,rewrite_clj.node.whitespace.newlines.call(null,n));
}));

(rewrite_clj.zip.whitespace.insert_newline_left.cljs$lang$maxFixedArity = 2);

/**
 * Return zipper with `n` newlines node inserted to the right of the current node in `zloc`, without moving location.
 * `n` defaults to 1.
 */
rewrite_clj.zip.whitespace.insert_newline_right = (function rewrite_clj$zip$whitespace$insert_newline_right(var_args){
var G__2602 = arguments.length;
switch (G__2602) {
case 1:
return rewrite_clj.zip.whitespace.insert_newline_right.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.whitespace.insert_newline_right.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.whitespace.insert_newline_right.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.whitespace.insert_newline_right.call(null,zloc,(1));
}));

(rewrite_clj.zip.whitespace.insert_newline_right.cljs$core$IFn$_invoke$arity$2 = (function (zloc,n){
return rewrite_clj.custom_zipper.core.insert_right.call(null,zloc,rewrite_clj.node.whitespace.newlines.call(null,n));
}));

(rewrite_clj.zip.whitespace.insert_newline_right.cljs$lang$maxFixedArity = 2);

/**
 * DEPRECATED: renamed to [[insert-space-left]].
 */
rewrite_clj.zip.whitespace.prepend_space = (function rewrite_clj$zip$whitespace$prepend_space(var_args){
var G__2605 = arguments.length;
switch (G__2605) {
case 2:
return rewrite_clj.zip.whitespace.prepend_space.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return rewrite_clj.zip.whitespace.prepend_space.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.whitespace.prepend_space.cljs$core$IFn$_invoke$arity$2 = (function (zloc,n){
return rewrite_clj.zip.whitespace.insert_space_left.call(null,zloc,(function (){var or__5045__auto__ = n;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})());
}));

(rewrite_clj.zip.whitespace.prepend_space.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.whitespace.prepend_space.call(null,zloc,null);
}));

(rewrite_clj.zip.whitespace.prepend_space.cljs$lang$maxFixedArity = 2);

/**
 * DEPRECATED: renamed to [[insert-space-right]].
 */
rewrite_clj.zip.whitespace.append_space = (function rewrite_clj$zip$whitespace$append_space(var_args){
var G__2608 = arguments.length;
switch (G__2608) {
case 2:
return rewrite_clj.zip.whitespace.append_space.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return rewrite_clj.zip.whitespace.append_space.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.whitespace.append_space.cljs$core$IFn$_invoke$arity$2 = (function (zloc,n){
return rewrite_clj.zip.whitespace.insert_space_right.call(null,zloc,(function (){var or__5045__auto__ = n;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})());
}));

(rewrite_clj.zip.whitespace.append_space.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.whitespace.append_space.call(null,zloc,null);
}));

(rewrite_clj.zip.whitespace.append_space.cljs$lang$maxFixedArity = 2);

/**
 * DEPRECATED: renamed to [[insert-newline-left]].
 */
rewrite_clj.zip.whitespace.prepend_newline = (function rewrite_clj$zip$whitespace$prepend_newline(var_args){
var G__2611 = arguments.length;
switch (G__2611) {
case 2:
return rewrite_clj.zip.whitespace.prepend_newline.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return rewrite_clj.zip.whitespace.prepend_newline.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.whitespace.prepend_newline.cljs$core$IFn$_invoke$arity$2 = (function (zloc,n){
return rewrite_clj.zip.whitespace.insert_newline_left.call(null,zloc,(function (){var or__5045__auto__ = n;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})());
}));

(rewrite_clj.zip.whitespace.prepend_newline.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.whitespace.prepend_newline.call(null,zloc,null);
}));

(rewrite_clj.zip.whitespace.prepend_newline.cljs$lang$maxFixedArity = 2);

/**
 * DEPRECATED: renamed to [[insert-newline-right]].
 */
rewrite_clj.zip.whitespace.append_newline = (function rewrite_clj$zip$whitespace$append_newline(var_args){
var G__2614 = arguments.length;
switch (G__2614) {
case 2:
return rewrite_clj.zip.whitespace.append_newline.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return rewrite_clj.zip.whitespace.append_newline.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.whitespace.append_newline.cljs$core$IFn$_invoke$arity$2 = (function (zloc,n){
return rewrite_clj.zip.whitespace.insert_newline_right.call(null,zloc,(function (){var or__5045__auto__ = n;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})());
}));

(rewrite_clj.zip.whitespace.append_newline.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.whitespace.append_newline.call(null,zloc,null);
}));

(rewrite_clj.zip.whitespace.append_newline.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=whitespace.js.map
