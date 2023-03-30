// Compiled by ClojureScript 1.11.60 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('cljfmt.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.parser');
goog.require('rewrite_clj.zip');
cljfmt.core.includes_QMARK_ = clojure.string.includes_QMARK_;
cljfmt.core.edit_all = (function cljfmt$core$edit_all(zloc,p_QMARK_,f){
var zloc__$1 = (cljs.core.truth_((p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? p_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : p_QMARK_.call(null,zloc)))?(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(zloc) : f.call(null,zloc)):zloc);
while(true){
var temp__5802__auto__ = rewrite_clj.zip.find_next.cljs$core$IFn$_invoke$arity$3(zloc__$1,rewrite_clj.zip.next_STAR_,p_QMARK_);
if(cljs.core.truth_(temp__5802__auto__)){
var zloc__$2 = temp__5802__auto__;
var G__11601 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(zloc__$2) : f.call(null,zloc__$2));
zloc__$1 = G__11601;
continue;
} else {
return zloc__$1;
}
break;
}
});
cljfmt.core.transform = (function cljfmt$core$transform(var_args){
var args__5775__auto__ = [];
var len__5769__auto___11605 = arguments.length;
var i__5770__auto___11606 = (0);
while(true){
if((i__5770__auto___11606 < len__5769__auto___11605)){
args__5775__auto__.push((arguments[i__5770__auto___11606]));

var G__11607 = (i__5770__auto___11606 + (1));
i__5770__auto___11606 = G__11607;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return cljfmt.core.transform.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(cljfmt.core.transform.cljs$core$IFn$_invoke$arity$variadic = (function (form,zf,args){
return rewrite_clj.zip.root(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(zf,rewrite_clj.zip.edn.cljs$core$IFn$_invoke$arity$1(form),args));
}));

(cljfmt.core.transform.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljfmt.core.transform.cljs$lang$applyTo = (function (seq11602){
var G__11603 = cljs.core.first(seq11602);
var seq11602__$1 = cljs.core.next(seq11602);
var G__11604 = cljs.core.first(seq11602__$1);
var seq11602__$2 = cljs.core.next(seq11602__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11603,G__11604,seq11602__$2);
}));

cljfmt.core.surrounding_QMARK_ = (function cljfmt$core$surrounding_QMARK_(zloc,p_QMARK_){
var and__5043__auto__ = (p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? p_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : p_QMARK_.call(null,zloc));
if(cljs.core.truth_(and__5043__auto__)){
return (((rewrite_clj.zip.left_STAR_(zloc) == null)) || ((rewrite_clj.zip.skip(rewrite_clj.zip.right_STAR_,p_QMARK_,zloc) == null)));
} else {
return and__5043__auto__;
}
});
cljfmt.core.root_QMARK_ = (function cljfmt$core$root_QMARK_(zloc){
return (rewrite_clj.zip.up_STAR_(zloc) == null);
});
cljfmt.core.top_QMARK_ = (function cljfmt$core$top_QMARK_(zloc){
var G__11608 = zloc;
var G__11608__$1 = (((G__11608 == null))?null:rewrite_clj.zip.up(G__11608));
if((G__11608__$1 == null)){
return null;
} else {
return cljfmt.core.root_QMARK_(G__11608__$1);
}
});
cljfmt.core.root = (function cljfmt$core$root(zloc){
while(true){
if(cljfmt.core.root_QMARK_(zloc)){
return zloc;
} else {
var G__11609 = rewrite_clj.zip.up(zloc);
zloc = G__11609;
continue;
}
break;
}
});
cljfmt.core.clojure_whitespace_QMARK_ = (function cljfmt$core$clojure_whitespace_QMARK_(zloc){
return rewrite_clj.zip.whitespace_QMARK_(zloc);
});
cljfmt.core.surrounding_whitespace_QMARK_ = (function cljfmt$core$surrounding_whitespace_QMARK_(zloc){
var and__5043__auto__ = cljs.core.not(cljfmt.core.top_QMARK_(zloc));
if(and__5043__auto__){
return cljfmt.core.surrounding_QMARK_(zloc,cljfmt.core.clojure_whitespace_QMARK_);
} else {
return and__5043__auto__;
}
});
cljfmt.core.remove_surrounding_whitespace = (function cljfmt$core$remove_surrounding_whitespace(form){
return cljfmt.core.transform.cljs$core$IFn$_invoke$arity$variadic(form,cljfmt.core.edit_all,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljfmt.core.surrounding_whitespace_QMARK_,rewrite_clj.zip.remove_STAR_], 0));
});
cljfmt.core.element_QMARK_ = (function cljfmt$core$element_QMARK_(zloc){
var and__5043__auto__ = zloc;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(rewrite_clj.zip.whitespace_or_comment_QMARK_(zloc));
} else {
return and__5043__auto__;
}
});
cljfmt.core.reader_macro_QMARK_ = (function cljfmt$core$reader_macro_QMARK_(zloc){
var and__5043__auto__ = zloc;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.node.tag(rewrite_clj.zip.node(zloc)),cljs.core.cst$kw$reader_DASH_macro);
} else {
return and__5043__auto__;
}
});
cljfmt.core.namespaced_map_QMARK_ = (function cljfmt$core$namespaced_map_QMARK_(zloc){
var and__5043__auto__ = zloc;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.node.tag(rewrite_clj.zip.node(zloc)),cljs.core.cst$kw$namespaced_DASH_map);
} else {
return and__5043__auto__;
}
});
cljfmt.core.missing_whitespace_QMARK_ = (function cljfmt$core$missing_whitespace_QMARK_(zloc){
var and__5043__auto__ = cljfmt.core.element_QMARK_(zloc);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = cljs.core.not(cljfmt.core.reader_macro_QMARK_(rewrite_clj.zip.up_STAR_(zloc)));
if(and__5043__auto____$1){
var and__5043__auto____$2 = cljs.core.not(cljfmt.core.namespaced_map_QMARK_(rewrite_clj.zip.up_STAR_(zloc)));
if(and__5043__auto____$2){
return cljfmt.core.element_QMARK_(rewrite_clj.zip.right_STAR_(zloc));
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
});
cljfmt.core.insert_missing_whitespace = (function cljfmt$core$insert_missing_whitespace(form){
return cljfmt.core.transform.cljs$core$IFn$_invoke$arity$variadic(form,cljfmt.core.edit_all,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljfmt.core.missing_whitespace_QMARK_,rewrite_clj.zip.insert_space_right], 0));
});
cljfmt.core.space_QMARK_ = (function cljfmt$core$space_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.tag(zloc),cljs.core.cst$kw$whitespace);
});
cljfmt.core.comment_QMARK_ = (function cljfmt$core$comment_QMARK_(zloc){
var G__11610 = zloc;
var G__11610__$1 = (((G__11610 == null))?null:rewrite_clj.zip.node(G__11610));
if((G__11610__$1 == null)){
return null;
} else {
return rewrite_clj.node.comment_QMARK_(G__11610__$1);
}
});
cljfmt.core.comma_QMARK_ = (function cljfmt$core$comma_QMARK_(zloc){
var G__11611 = zloc;
var G__11611__$1 = (((G__11611 == null))?null:rewrite_clj.zip.node(G__11611));
if((G__11611__$1 == null)){
return null;
} else {
return rewrite_clj.node.comma_QMARK_(G__11611__$1);
}
});
cljfmt.core.line_break_QMARK_ = (function cljfmt$core$line_break_QMARK_(zloc){
var or__5045__auto__ = rewrite_clj.zip.linebreak_QMARK_(zloc);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljfmt.core.comment_QMARK_(zloc);
}
});
cljfmt.core.skip_whitespace = (function cljfmt$core$skip_whitespace(zloc){
return rewrite_clj.zip.skip(rewrite_clj.zip.next_STAR_,cljfmt.core.space_QMARK_,zloc);
});
cljfmt.core.skip_whitespace_and_commas = (function cljfmt$core$skip_whitespace_and_commas(zloc){
return rewrite_clj.zip.skip(rewrite_clj.zip.next_STAR_,(function (p1__11612_SHARP_){
var or__5045__auto__ = cljfmt.core.space_QMARK_(p1__11612_SHARP_);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return cljfmt.core.comma_QMARK_(p1__11612_SHARP_);
}
}),zloc);
});
cljfmt.core.skip_clojure_whitespace = (function cljfmt$core$skip_clojure_whitespace(var_args){
var G__11614 = arguments.length;
switch (G__11614) {
case 1:
return cljfmt.core.skip_clojure_whitespace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljfmt.core.skip_clojure_whitespace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljfmt.core.skip_clojure_whitespace.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return cljfmt.core.skip_clojure_whitespace.cljs$core$IFn$_invoke$arity$2(zloc,rewrite_clj.zip.next_STAR_);
}));

(cljfmt.core.skip_clojure_whitespace.cljs$core$IFn$_invoke$arity$2 = (function (zloc,f){
return rewrite_clj.zip.skip(f,cljfmt.core.clojure_whitespace_QMARK_,zloc);
}));

(cljfmt.core.skip_clojure_whitespace.cljs$lang$maxFixedArity = 2);

cljfmt.core.count_newlines = (function cljfmt$core$count_newlines(zloc){
var zloc_SINGLEQUOTE_ = zloc;
var newlines = (0);
while(true){
if(cljs.core.truth_(rewrite_clj.zip.linebreak_QMARK_(zloc_SINGLEQUOTE_))){
var G__11616 = cljfmt.core.skip_whitespace_and_commas(rewrite_clj.zip.right_STAR_(zloc_SINGLEQUOTE_));
var G__11617 = (cljs.core.count(rewrite_clj.zip.string(zloc_SINGLEQUOTE_)) + newlines);
zloc_SINGLEQUOTE_ = G__11616;
newlines = G__11617;
continue;
} else {
if(cljs.core.truth_(cljfmt.core.comment_QMARK_(cljfmt.core.skip_clojure_whitespace.cljs$core$IFn$_invoke$arity$2(zloc,rewrite_clj.zip.left_STAR_)))){
return (newlines + (1));
} else {
return newlines;
}
}
break;
}
});
cljfmt.core.final_transform_element_QMARK_ = (function cljfmt$core$final_transform_element_QMARK_(zloc){
return (cljfmt.core.skip_clojure_whitespace.cljs$core$IFn$_invoke$arity$1(rewrite_clj.zip.next_STAR_(zloc)) == null);
});
cljfmt.core.consecutive_blank_line_QMARK_ = (function cljfmt$core$consecutive_blank_line_QMARK_(zloc){
return (((cljfmt.core.count_newlines(zloc) > (2))) && ((!(cljfmt.core.final_transform_element_QMARK_(zloc)))));
});
cljfmt.core.remove_clojure_whitespace = (function cljfmt$core$remove_clojure_whitespace(zloc){
while(true){
if(cljs.core.truth_(cljfmt.core.clojure_whitespace_QMARK_(zloc))){
var G__11618 = rewrite_clj.zip.remove_STAR_(zloc);
zloc = G__11618;
continue;
} else {
return zloc;
}
break;
}
});
cljfmt.core.replace_consecutive_blank_lines = (function cljfmt$core$replace_consecutive_blank_lines(zloc){
var zloc_elem_before = cljfmt.core.remove_clojure_whitespace(rewrite_clj.zip.prev_STAR_(cljfmt.core.skip_clojure_whitespace.cljs$core$IFn$_invoke$arity$1(zloc)));
return rewrite_clj.zip.insert_left_STAR_(rewrite_clj.zip.next_STAR_(zloc_elem_before),rewrite_clj.node.newlines((cljs.core.truth_(cljfmt.core.comment_QMARK_(zloc_elem_before))?(1):(2))));
});
cljfmt.core.remove_consecutive_blank_lines = (function cljfmt$core$remove_consecutive_blank_lines(form){
return cljfmt.core.transform.cljs$core$IFn$_invoke$arity$variadic(form,cljfmt.core.edit_all,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljfmt.core.consecutive_blank_line_QMARK_,cljfmt.core.replace_consecutive_blank_lines], 0));
});
cljfmt.core.indentation_QMARK_ = (function cljfmt$core$indentation_QMARK_(zloc){
var and__5043__auto__ = cljfmt.core.line_break_QMARK_(rewrite_clj.zip.prev_STAR_(zloc));
if(cljs.core.truth_(and__5043__auto__)){
return cljfmt.core.space_QMARK_(zloc);
} else {
return and__5043__auto__;
}
});
cljfmt.core.comment_next_QMARK_ = (function cljfmt$core$comment_next_QMARK_(zloc){
return cljfmt.core.comment_QMARK_(cljfmt.core.skip_whitespace(rewrite_clj.zip.next_STAR_(zloc)));
});
cljfmt.core.should_indent_QMARK_ = (function cljfmt$core$should_indent_QMARK_(zloc){
var and__5043__auto__ = cljfmt.core.line_break_QMARK_(zloc);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljfmt.core.comment_next_QMARK_(zloc));
} else {
return and__5043__auto__;
}
});
cljfmt.core.should_unindent_QMARK_ = (function cljfmt$core$should_unindent_QMARK_(zloc){
var and__5043__auto__ = cljfmt.core.indentation_QMARK_(zloc);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljfmt.core.comment_next_QMARK_(zloc));
} else {
return and__5043__auto__;
}
});
cljfmt.core.unindent = (function cljfmt$core$unindent(form){
return cljfmt.core.transform.cljs$core$IFn$_invoke$arity$variadic(form,cljfmt.core.edit_all,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljfmt.core.should_unindent_QMARK_,rewrite_clj.zip.remove_STAR_], 0));
});
cljfmt.core.start_element = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$fn,cljs.core.cst$kw$namespaced_DASH_map,cljs.core.cst$kw$meta,cljs.core.cst$kw$unquote_DASH_splicing,cljs.core.cst$kw$reader_DASH_macro,cljs.core.cst$kw$unquote,cljs.core.cst$kw$meta_STAR_,cljs.core.cst$kw$uneval,cljs.core.cst$kw$vector,cljs.core.cst$kw$syntax_DASH_quote,cljs.core.cst$kw$list,cljs.core.cst$kw$var,cljs.core.cst$kw$quote,cljs.core.cst$kw$deref,cljs.core.cst$kw$set,cljs.core.cst$kw$map,cljs.core.cst$kw$eval],["#(","#","^","~@","#","~","#^","#_","[","`","(","#'","'","@","#{","{","#="]);
cljfmt.core.prior_line_string = (function cljfmt$core$prior_line_string(zloc){
var zloc__$1 = zloc;
var worklist = cljs.core.List.EMPTY;
while(true){
var temp__5802__auto__ = rewrite_clj.zip.left_STAR_(zloc__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var p = temp__5802__auto__;
var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_clj.node.string(rewrite_clj.zip.node(p)));
var new_worklist = cljs.core.cons(s,worklist);
if(cljs.core.not((cljfmt.core.includes_QMARK_.cljs$core$IFn$_invoke$arity$2 ? cljfmt.core.includes_QMARK_.cljs$core$IFn$_invoke$arity$2(s,"\n") : cljfmt.core.includes_QMARK_.call(null,s,"\n")))){
var G__11621 = p;
var G__11622 = new_worklist;
zloc__$1 = G__11621;
worklist = G__11622;
continue;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new_worklist);
}
} else {
var temp__5802__auto____$1 = rewrite_clj.zip.up_STAR_(zloc__$1);
if(cljs.core.truth_(temp__5802__auto____$1)){
var p = temp__5802__auto____$1;
var G__11623 = p;
var G__11624 = cljs.core.cons((function (){var G__11620 = rewrite_clj.node.tag(rewrite_clj.zip.node(p));
return (cljfmt.core.start_element.cljs$core$IFn$_invoke$arity$1 ? cljfmt.core.start_element.cljs$core$IFn$_invoke$arity$1(G__11620) : cljfmt.core.start_element.call(null,G__11620));
})(),worklist);
zloc__$1 = G__11623;
worklist = G__11624;
continue;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,worklist);
}
}
break;
}
});
cljfmt.core.last_line_in_string = (function cljfmt$core$last_line_in_string(s){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(s.lastIndexOf("\n") + (1)));
});
cljfmt.core.margin = (function cljfmt$core$margin(zloc){
return ((cljfmt.core.last_line_in_string(cljfmt.core.prior_line_string(zloc))).length);
});
cljfmt.core.whitespace = (function cljfmt$core$whitespace(width){
return rewrite_clj.node.whitespace_node(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(width," ")));
});
cljfmt.core.coll_indent = (function cljfmt$core$coll_indent(zloc){
return cljfmt.core.margin(rewrite_clj.zip.leftmost_STAR_(zloc));
});
cljfmt.core.uneval_QMARK_ = (function cljfmt$core$uneval_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.tag(zloc),cljs.core.cst$kw$uneval);
});
cljfmt.core.index_of = (function cljfmt$core$index_of(zloc){
return (cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljfmt.core.uneval_QMARK_,cljs.core.iterate(rewrite_clj.zip.left,zloc)))) - (1));
});
cljfmt.core.list_indent = (function cljfmt$core$list_indent(zloc){
if((cljfmt.core.index_of(zloc) > (1))){
return cljfmt.core.margin(rewrite_clj.zip.right(rewrite_clj.zip.leftmost_STAR_(zloc)));
} else {
return cljfmt.core.coll_indent(zloc);
}
});
cljfmt.core.indent_size = (2);
cljfmt.core.indent_width = (function cljfmt$core$indent_width(zloc){
var G__11625 = rewrite_clj.zip.tag(zloc);
var G__11625__$1 = (((G__11625 instanceof cljs.core.Keyword))?G__11625.fqn:null);
switch (G__11625__$1) {
case "list":
return cljfmt.core.indent_size;

break;
case "fn":
return (cljfmt.core.indent_size + (1));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11625__$1)].join('')));

}
});
cljfmt.core.remove_namespace = (function cljfmt$core$remove_namespace(x){
if((x instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(x));
} else {
return x;
}
});
cljfmt.core.pattern_QMARK_ = (function cljfmt$core$pattern_QMARK_(v){
return (v instanceof RegExp);
});
cljfmt.core.token_QMARK_ = (function cljfmt$core$token_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.tag(zloc),cljs.core.cst$kw$token);
});
cljfmt.core.ns_token_QMARK_ = (function cljfmt$core$ns_token_QMARK_(zloc){
return ((cljfmt.core.token_QMARK_(zloc)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$ns,rewrite_clj.zip.sexpr(zloc))));
});
cljfmt.core.ns_form_QMARK_ = (function cljfmt$core$ns_form_QMARK_(zloc){
var and__5043__auto__ = cljfmt.core.top_QMARK_(zloc);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.tag(zloc),cljs.core.cst$kw$list);
if(and__5043__auto____$1){
var G__11627 = zloc;
var G__11627__$1 = (((G__11627 == null))?null:rewrite_clj.zip.down(G__11627));
if((G__11627__$1 == null)){
return null;
} else {
return cljfmt.core.ns_token_QMARK_(G__11627__$1);
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
});
cljfmt.core.indent_matches_QMARK_ = (function cljfmt$core$indent_matches_QMARK_(key,sym){
if((sym instanceof cljs.core.Symbol)){
if((key instanceof cljs.core.Symbol)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,sym);
} else {
if(cljfmt.core.pattern_QMARK_(key)){
return cljs.core.re_find(key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym));
} else {
return null;
}
}
} else {
return null;
}
});
cljfmt.core.token_value = (function cljfmt$core$token_value(zloc){
if(cljfmt.core.token_QMARK_(zloc)){
return rewrite_clj.zip.sexpr(zloc);
} else {
return null;
}
});
cljfmt.core.reader_conditional_QMARK_ = (function cljfmt$core$reader_conditional_QMARK_(zloc){
var and__5043__auto__ = cljfmt.core.reader_macro_QMARK_(zloc);
if(cljs.core.truth_(and__5043__auto__)){
var G__11629 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljfmt.core.token_value(rewrite_clj.zip.down(zloc)));
var fexpr__11628 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["?",null,"?@",null], null), null);
return (fexpr__11628.cljs$core$IFn$_invoke$arity$1 ? fexpr__11628.cljs$core$IFn$_invoke$arity$1(G__11629) : fexpr__11628.call(null,G__11629));
} else {
return and__5043__auto__;
}
});
cljfmt.core.form_symbol = (function cljfmt$core$form_symbol(zloc){
return cljfmt.core.token_value(rewrite_clj.zip.leftmost(zloc));
});
cljfmt.core.index_matches_top_argument_QMARK_ = (function cljfmt$core$index_matches_top_argument_QMARK_(zloc,depth,idx){
return (((depth > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((idx + (1)),cljfmt.core.index_of(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.iterate(rewrite_clj.zip.up,zloc),depth)))));
});
cljfmt.core.qualify_symbol_by_alias_map = (function cljfmt$core$qualify_symbol_by_alias_map(possible_sym,alias_map){
var temp__5804__auto__ = cljs.core.namespace(possible_sym);
if(cljs.core.truth_(temp__5804__auto__)){
var ns_str = temp__5804__auto__;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(alias_map,ns_str,ns_str),cljs.core.name(possible_sym));
} else {
return null;
}
});
cljfmt.core.qualify_symbol_by_ns_name = (function cljfmt$core$qualify_symbol_by_ns_name(possible_sym,ns_name){
if(cljs.core.truth_(ns_name)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(ns_name),cljs.core.name(possible_sym));
} else {
return null;
}
});
cljfmt.core.fully_qualified_symbol = (function cljfmt$core$fully_qualified_symbol(zloc,context){
var possible_sym = cljfmt.core.form_symbol(zloc);
if((possible_sym instanceof cljs.core.Symbol)){
var or__5045__auto__ = cljfmt.core.qualify_symbol_by_alias_map(possible_sym,cljs.core.cst$kw$alias_DASH_map.cljs$core$IFn$_invoke$arity$1(context));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljfmt.core.qualify_symbol_by_ns_name(possible_sym,cljs.core.cst$kw$ns_DASH_name.cljs$core$IFn$_invoke$arity$1(context));
}
} else {
return possible_sym;
}
});
cljfmt.core.inner_indent = (function cljfmt$core$inner_indent(zloc,key,depth,idx,context){
var top = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.iterate(rewrite_clj.zip.up,zloc),depth);
if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = cljfmt.core.indent_matches_QMARK_(key,cljfmt.core.fully_qualified_symbol(zloc,context));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljfmt.core.indent_matches_QMARK_(key,cljfmt.core.remove_namespace(cljfmt.core.form_symbol(top)));
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return (((idx == null)) || (cljfmt.core.index_matches_top_argument_QMARK_(zloc,depth,idx)));
} else {
return and__5043__auto__;
}
})())){
var zup = rewrite_clj.zip.up(zloc);
return (cljfmt.core.margin(zup) + cljfmt.core.indent_width(zup));
} else {
return null;
}
});
cljfmt.core.nth_form = (function cljfmt$core$nth_form(zloc,n){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (z,f){
if(cljs.core.truth_(z)){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(z) : f.call(null,z));
} else {
return null;
}
}),rewrite_clj.zip.leftmost(zloc),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,rewrite_clj.zip.right));
});
cljfmt.core.first_form_in_line_QMARK_ = (function cljfmt$core$first_form_in_line_QMARK_(zloc){
while(true){
var and__5043__auto__ = (!((zloc == null)));
if(and__5043__auto__){
var temp__5802__auto__ = rewrite_clj.zip.left_STAR_(zloc);
if(cljs.core.truth_(temp__5802__auto__)){
var zloc__$1 = temp__5802__auto__;
if(cljfmt.core.space_QMARK_(zloc__$1)){
var G__11630 = zloc__$1;
zloc = G__11630;
continue;
} else {
var or__5045__auto__ = rewrite_clj.zip.linebreak_QMARK_(zloc__$1);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljfmt.core.comment_QMARK_(zloc__$1);
}
}
} else {
return true;
}
} else {
return and__5043__auto__;
}
break;
}
});
cljfmt.core.block_indent = (function cljfmt$core$block_indent(zloc,key,idx,context){
if(cljs.core.truth_((function (){var or__5045__auto__ = cljfmt.core.indent_matches_QMARK_(key,cljfmt.core.fully_qualified_symbol(zloc,context));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljfmt.core.indent_matches_QMARK_(key,cljfmt.core.remove_namespace(cljfmt.core.form_symbol(zloc)));
}
})())){
var zloc_after_idx = (function (){var G__11631 = zloc;
if((G__11631 == null)){
return null;
} else {
return cljfmt.core.nth_form(G__11631,(idx + (1)));
}
})();
if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = (zloc_after_idx == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return cljfmt.core.first_form_in_line_QMARK_(zloc_after_idx);
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return (cljfmt.core.index_of(zloc) > idx);
} else {
return and__5043__auto__;
}
})())){
return cljfmt.core.inner_indent(zloc,key,(0),null,context);
} else {
return cljfmt.core.list_indent(zloc);
}
} else {
return null;
}
});
cljfmt.core.default_indents = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$are,cljs.core.cst$sym$when_DASH_first,cljs.core.cst$sym$cond_DASH__GT__GT_,cljs.core.cst$sym$while,cljs.core.cst$sym$try,cljs.core.cst$sym$bound_DASH_fn,cljs.core.cst$sym$delay,cljs.core.cst$sym$match,cljs.core.cst$sym$testing,cljs.core.cst$sym$if_DASH_not,cljs.core.cst$sym$doseq,cljs.core.cst$sym$finally,cljs.core.cst$sym$deftype,cljs.core.cst$sym$when_DASH_let,cljs.core.cst$sym$go,cljs.core.cst$sym$if_DASH_some,cljs.core.cst$sym$with_DASH_precision,cljs.core.cst$sym$let,cljs.core.cst$sym$defstruct,cljs.core.cst$sym$doto,cljs.core.cst$sym$future,cljs.core.cst$sym$fn,cljs.core.cst$sym$alt_BANG_,cljs.core.cst$sym$as_DASH__GT_,cljs.core.cst$sym$do,cljs.core.cst$sym$when_DASH_not,cljs.core.cst$sym$when,cljs.core.cst$sym$extend,cljs.core.cst$sym$go_DASH_loop,cljs.core.cst$sym$defn,cljs.core.cst$sym$if,cljs.core.cst$sym$ns,cljs.core.cst$sym$deftest,cljs.core.cst$sym$extend_DASH_type,cljs.core.cst$sym$defmethod,cljs.core.cst$sym$struct_DASH_map,cljs.core.cst$sym$extend_DASH_protocol,cljs.core.cst$sym$cond_DASH__GT_,cljs.core.cst$sym$dotimes,cljs.core.cst$sym$reify,cljs.core.cst$sym$with_DASH_open,cljs.core.cst$sym$defonce,cljs.core.cst$sym$defn_DASH_,cljs.core.cst$sym$alt_BANG__BANG_,cljs.core.cst$sym$defprotocol,cljs.core.cst$sym$letfn,cljs.core.cst$sym$use_DASH_fixtures,cljs.core.cst$sym$loop,cljs.core.cst$sym$with_DASH_out_DASH_str,cljs.core.cst$sym$condp,cljs.core.cst$sym$cond,cljs.core.cst$sym$for,cljs.core.cst$sym$binding,cljs.core.cst$sym$with_DASH_local_DASH_vars,cljs.core.cst$sym$defmacro,cljs.core.cst$sym$proxy,cljs.core.cst$sym$with_DASH_redefs,cljs.core.cst$sym$locking,cljs.core.cst$sym$defmulti,cljs.core.cst$sym$if_DASH_let,cljs.core.cst$sym$case,cljs.core.cst$sym$catch,cljs.core.cst$sym$thread,cljs.core.cst$sym$comment,cljs.core.cst$sym$defrecord,cljs.core.cst$sym$when_DASH_some,cljs.core.cst$sym$def,cljs.core.cst$sym$fdef],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inner,(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inner,(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inner,(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inner,(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inner,(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inner,(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inner,(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inner,(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inner,(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inner,(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inner,(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inner,(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inner,(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inner,(2),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inner,(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inner,(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inner,(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inner,(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inner,(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inner,(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inner,(0)], null)], null)]),cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$defroutes,cljs.core.cst$sym$PUT,cljs.core.cst$sym$POST,cljs.core.cst$sym$let_DASH_routes,cljs.core.cst$sym$DELETE,cljs.core.cst$sym$rfn,cljs.core.cst$sym$ANY,cljs.core.cst$sym$GET,cljs.core.cst$sym$HEAD,cljs.core.cst$sym$PATCH,cljs.core.cst$sym$context,cljs.core.cst$sym$OPTIONS],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inner,(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inner,(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inner,(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$block,(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inner,(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inner,(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inner,(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inner,(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inner,(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inner,(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inner,(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inner,(0)], null)], null)]),new cljs.core.PersistentArrayMap(null, 2, [/^def(?!ault)(?!late)(?!er)/,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inner,(0)], null)], null),/^with-/,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$inner,(0)], null)], null)], null)], 0));
if((typeof cljfmt !== 'undefined') && (typeof cljfmt.core !== 'undefined') && (typeof cljfmt.core.indenter_fn !== 'undefined')){
} else {
cljfmt.core.indenter_fn = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__11632 = cljs.core.get_global_hierarchy;
return (fexpr__11632.cljs$core$IFn$_invoke$arity$0 ? fexpr__11632.cljs$core$IFn$_invoke$arity$0() : fexpr__11632.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljfmt.core","indenter-fn"),(function (sym,context,p__11633){
var vec__11634 = p__11633;
var seq__11635 = cljs.core.seq(vec__11634);
var first__11636 = cljs.core.first(seq__11635);
var seq__11635__$1 = cljs.core.next(seq__11635);
var type = first__11636;
var args = seq__11635__$1;
return type;
}),cljs.core.cst$kw$default,hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
cljfmt.core.indenter_fn.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$inner,(function (sym,context,p__11637){
var vec__11638 = p__11637;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11638,(0),null);
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11638,(1),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11638,(2),null);
return (function (zloc){
return cljfmt.core.inner_indent(zloc,sym,depth,idx,context);
});
}));
cljfmt.core.indenter_fn.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$block,(function (sym,context,p__11641){
var vec__11642 = p__11641;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11642,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11642,(1),null);
return (function (zloc){
return cljfmt.core.block_indent(zloc,sym,idx,context);
});
}));
cljfmt.core.make_indenter = (function cljfmt$core$make_indenter(p__11645,context){
var vec__11646 = p__11645;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11646,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11646,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some_fn,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljfmt.core.indenter_fn,key,context),opts));
});
cljfmt.core.indent_order = (function cljfmt$core$indent_order(p__11649){
var vec__11650 = p__11649;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11650,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11650,(1),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = (key instanceof cljs.core.Symbol);
if(and__5043__auto__){
return cljs.core.namespace(key);
} else {
return and__5043__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
} else {
if((key instanceof cljs.core.Symbol)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
} else {
if(cljfmt.core.pattern_QMARK_(key)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((2)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
} else {
return null;
}
}
}
});
cljfmt.core.custom_indent = (function cljfmt$core$custom_indent(zloc,indents,context){
if(cljs.core.empty_QMARK_(indents)){
return cljfmt.core.list_indent(zloc);
} else {
var indenter = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some_fn,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__11653_SHARP_){
return cljfmt.core.make_indenter(p1__11653_SHARP_,context);
}),indents));
var or__5045__auto__ = (indenter.cljs$core$IFn$_invoke$arity$1 ? indenter.cljs$core$IFn$_invoke$arity$1(zloc) : indenter.call(null,zloc));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljfmt.core.list_indent(zloc);
}
}
});
cljfmt.core.indent_amount = (function cljfmt$core$indent_amount(zloc,indents,context){
var tag = rewrite_clj.zip.tag(rewrite_clj.zip.up(zloc));
var gp = rewrite_clj.zip.up(rewrite_clj.zip.up(zloc));
if(cljs.core.truth_(cljfmt.core.reader_conditional_QMARK_(gp))){
return cljfmt.core.coll_indent(zloc);
} else {
if(cljs.core.truth_((function (){var fexpr__11654 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,null,cljs.core.cst$kw$list,null], null), null);
return (fexpr__11654.cljs$core$IFn$_invoke$arity$1 ? fexpr__11654.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__11654.call(null,tag));
})())){
return cljfmt.core.custom_indent(zloc,indents,context);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$meta,tag)){
var G__11655 = rewrite_clj.zip.up(zloc);
var G__11656 = indents;
var G__11657 = context;
return (cljfmt.core.indent_amount.cljs$core$IFn$_invoke$arity$3 ? cljfmt.core.indent_amount.cljs$core$IFn$_invoke$arity$3(G__11655,G__11656,G__11657) : cljfmt.core.indent_amount.call(null,G__11655,G__11656,G__11657));
} else {
return cljfmt.core.coll_indent(zloc);

}
}
}
});
cljfmt.core.indent_line = (function cljfmt$core$indent_line(zloc,indents,context){
var width = cljfmt.core.indent_amount(zloc,indents,context);
if((width > (0))){
return rewrite_clj.zip.insert_right_STAR_(zloc,cljfmt.core.whitespace(width));
} else {
return zloc;
}
});
cljfmt.core.find_namespace = (function cljfmt$core$find_namespace(zloc){
var G__11658 = zloc;
var G__11658__$1 = (((G__11658 == null))?null:cljfmt.core.root(G__11658));
var G__11658__$2 = (((G__11658__$1 == null))?null:rewrite_clj.zip.down(G__11658__$1));
var G__11658__$3 = (((G__11658__$2 == null))?null:rewrite_clj.zip.find.cljs$core$IFn$_invoke$arity$3(G__11658__$2,rewrite_clj.zip.right,cljfmt.core.ns_form_QMARK_));
var G__11658__$4 = (((G__11658__$3 == null))?null:rewrite_clj.zip.down(G__11658__$3));
var G__11658__$5 = (((G__11658__$4 == null))?null:rewrite_clj.zip.next(G__11658__$4));
if((G__11658__$5 == null)){
return null;
} else {
return rewrite_clj.zip.sexpr(G__11658__$5);
}
});
cljfmt.core.indent = (function cljfmt$core$indent(var_args){
var G__11661 = arguments.length;
switch (G__11661) {
case 1:
return cljfmt.core.indent.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljfmt.core.indent.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljfmt.core.indent.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljfmt.core.indent.cljs$core$IFn$_invoke$arity$1 = (function (form){
return cljfmt.core.indent.cljs$core$IFn$_invoke$arity$3(form,cljfmt.core.default_indents,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljfmt.core.indent.cljs$core$IFn$_invoke$arity$2 = (function (form,indents){
return cljfmt.core.indent.cljs$core$IFn$_invoke$arity$3(form,indents,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljfmt.core.indent.cljs$core$IFn$_invoke$arity$3 = (function (form,indents,alias_map){
var ns_name = cljfmt.core.find_namespace(rewrite_clj.zip.edn.cljs$core$IFn$_invoke$arity$1(form));
var sorted_indents = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljfmt.core.indent_order,indents);
return cljfmt.core.transform.cljs$core$IFn$_invoke$arity$variadic(form,cljfmt.core.edit_all,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljfmt.core.should_indent_QMARK_,(function (p1__11659_SHARP_){
return cljfmt.core.indent_line(p1__11659_SHARP_,sorted_indents,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$alias_DASH_map,alias_map,cljs.core.cst$kw$ns_DASH_name,ns_name], null));
})], 0));
}));

(cljfmt.core.indent.cljs$lang$maxFixedArity = 3);

cljfmt.core.map_key_QMARK_ = (function cljfmt$core$map_key_QMARK_(zloc){
return ((rewrite_clj.zip.map_QMARK_(rewrite_clj.zip.up(zloc))) && (((cljs.core.even_QMARK_(cljfmt.core.index_of(zloc))) && ((((!(cljfmt.core.uneval_QMARK_(zloc)))) && (cljs.core.not(rewrite_clj.zip.whitespace_or_comment_QMARK_(zloc))))))));
});
cljfmt.core.preceded_by_line_break_QMARK_ = (function cljfmt$core$preceded_by_line_break_QMARK_(zloc){
var previous = rewrite_clj.zip.left_STAR_(zloc);
while(true){
if(cljs.core.truth_(cljfmt.core.line_break_QMARK_(previous))){
return true;
} else {
if(cljs.core.truth_(rewrite_clj.zip.whitespace_or_comment_QMARK_(previous))){
var G__11663 = rewrite_clj.zip.left_STAR_(previous);
previous = G__11663;
continue;
} else {
return null;
}
}
break;
}
});
cljfmt.core.map_key_without_line_break_QMARK_ = (function cljfmt$core$map_key_without_line_break_QMARK_(zloc){
return ((cljfmt.core.map_key_QMARK_(zloc)) && (cljs.core.not(cljfmt.core.preceded_by_line_break_QMARK_(zloc))));
});
cljfmt.core.insert_newline_left = (function cljfmt$core$insert_newline_left(zloc){
return rewrite_clj.zip.insert_left_STAR_(zloc,rewrite_clj.node.newlines((1)));
});
cljfmt.core.split_keypairs_over_multiple_lines = (function cljfmt$core$split_keypairs_over_multiple_lines(form){
return cljfmt.core.transform.cljs$core$IFn$_invoke$arity$variadic(form,cljfmt.core.edit_all,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljfmt.core.map_key_without_line_break_QMARK_,cljfmt.core.insert_newline_left], 0));
});
cljfmt.core.reindent = (function cljfmt$core$reindent(var_args){
var G__11665 = arguments.length;
switch (G__11665) {
case 1:
return cljfmt.core.reindent.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljfmt.core.reindent.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljfmt.core.reindent.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljfmt.core.reindent.cljs$core$IFn$_invoke$arity$1 = (function (form){
return cljfmt.core.indent.cljs$core$IFn$_invoke$arity$1(cljfmt.core.unindent(form));
}));

(cljfmt.core.reindent.cljs$core$IFn$_invoke$arity$2 = (function (form,indents){
return cljfmt.core.indent.cljs$core$IFn$_invoke$arity$2(cljfmt.core.unindent(form),indents);
}));

(cljfmt.core.reindent.cljs$core$IFn$_invoke$arity$3 = (function (form,indents,alias_map){
return cljfmt.core.indent.cljs$core$IFn$_invoke$arity$3(cljfmt.core.unindent(form),indents,alias_map);
}));

(cljfmt.core.reindent.cljs$lang$maxFixedArity = 3);

cljfmt.core.final_QMARK_ = (function cljfmt$core$final_QMARK_(zloc){
return (((rewrite_clj.zip.right_STAR_(zloc) == null)) && (cljfmt.core.root_QMARK_(rewrite_clj.zip.up_STAR_(zloc))));
});
cljfmt.core.trailing_whitespace_QMARK_ = (function cljfmt$core$trailing_whitespace_QMARK_(zloc){
var and__5043__auto__ = cljfmt.core.space_QMARK_(zloc);
if(and__5043__auto__){
var or__5045__auto__ = rewrite_clj.zip.linebreak_QMARK_(rewrite_clj.zip.right_STAR_(zloc));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljfmt.core.final_QMARK_(zloc);
}
} else {
return and__5043__auto__;
}
});
cljfmt.core.remove_trailing_whitespace = (function cljfmt$core$remove_trailing_whitespace(form){
return cljfmt.core.transform.cljs$core$IFn$_invoke$arity$variadic(form,cljfmt.core.edit_all,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljfmt.core.trailing_whitespace_QMARK_,rewrite_clj.zip.remove_STAR_], 0));
});
cljfmt.core.replace_with_one_space = (function cljfmt$core$replace_with_one_space(zloc){
return rewrite_clj.zip.replace_STAR_(zloc,cljfmt.core.whitespace((1)));
});
cljfmt.core.non_indenting_whitespace_QMARK_ = (function cljfmt$core$non_indenting_whitespace_QMARK_(zloc){
return ((cljfmt.core.space_QMARK_(zloc)) && (cljs.core.not(cljfmt.core.indentation_QMARK_(zloc))));
});
cljfmt.core.remove_multiple_non_indenting_spaces = (function cljfmt$core$remove_multiple_non_indenting_spaces(form){
return cljfmt.core.transform.cljs$core$IFn$_invoke$arity$variadic(form,cljfmt.core.edit_all,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljfmt.core.non_indenting_whitespace_QMARK_,cljfmt.core.replace_with_one_space], 0));
});
cljfmt.core.ns_reference_symbols = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$use,null,cljs.core.cst$kw$require,null,cljs.core.cst$kw$require_DASH_macros,null,cljs.core.cst$kw$import,null], null), null);
cljfmt.core.ns_reference_QMARK_ = (function cljfmt$core$ns_reference_QMARK_(zloc){
var and__5043__auto__ = rewrite_clj.zip.list_QMARK_(zloc);
if(and__5043__auto__){
var and__5043__auto____$1 = (function (){var G__11667 = zloc;
var G__11667__$1 = (((G__11667 == null))?null:rewrite_clj.zip.up(G__11667));
if((G__11667__$1 == null)){
return null;
} else {
return cljfmt.core.ns_form_QMARK_(G__11667__$1);
}
})();
if(cljs.core.truth_(and__5043__auto____$1)){
var G__11668 = cljs.core.first(rewrite_clj.zip.sexpr(zloc));
return (cljfmt.core.ns_reference_symbols.cljs$core$IFn$_invoke$arity$1 ? cljfmt.core.ns_reference_symbols.cljs$core$IFn$_invoke$arity$1(G__11668) : cljfmt.core.ns_reference_symbols.call(null,G__11668));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
});
cljfmt.core.re_indexes = (function cljfmt$core$re_indexes(re,s){
var matcher = (new RegExp(re.source,"g"));
var next_match = (function (){
var temp__5804__auto__ = matcher.exec(s);
if(cljs.core.truth_(temp__5804__auto__)){
var result = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result.index,matcher.lastIndex], null);
} else {
return null;
}
});
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(next_match));
});
cljfmt.core.re_seq_matcher = (function cljfmt$core$re_seq_matcher(re,charmap,coll){
if(cljs.core.truth_(cljs.core.every_QMARK_)){
} else {
throw (new Error("Assert failed: every?"));
}

if(cljs.core.truth_(charmap)){
} else {
throw (new Error("Assert failed: charmap"));
}

if(cljs.core.truth_(coll)){
} else {
throw (new Error("Assert failed: coll"));
}

var s = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(charmap,coll));
var v = cljs.core.vec(coll);
var iter__5523__auto__ = (function cljfmt$core$re_seq_matcher_$_iter__11669(s__11670){
return (new cljs.core.LazySeq(null,(function (){
var s__11670__$1 = s__11670;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__11670__$1);
if(temp__5804__auto__){
var s__11670__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11670__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__11670__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__11672 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__11671 = (0);
while(true){
if((i__11671 < size__5522__auto__)){
var vec__11673 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5521__auto__,i__11671);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11673,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11673,(1),null);
cljs.core.chunk_append(b__11672,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start,end),cljs.core.cst$kw$start,start,cljs.core.cst$kw$end,end], null));

var G__11679 = (i__11671 + (1));
i__11671 = G__11679;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11672),cljfmt$core$re_seq_matcher_$_iter__11669(cljs.core.chunk_rest(s__11670__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11672),null);
}
} else {
var vec__11676 = cljs.core.first(s__11670__$2);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11676,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11676,(1),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start,end),cljs.core.cst$kw$start,start,cljs.core.cst$kw$end,end], null),cljfmt$core$re_seq_matcher_$_iter__11669(cljs.core.rest(s__11670__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljfmt.core.re_indexes(re,s));
});
cljfmt.core.find_elements_with_comments = (function cljfmt$core$find_elements_with_comments(nodes){
return cljfmt.core.re_seq_matcher(/(CNS*)*E(S*C)?/,(function (p1__11680_SHARP_){
var G__11681 = rewrite_clj.node.tag(p1__11680_SHARP_);
var G__11681__$1 = (((G__11681 instanceof cljs.core.Keyword))?G__11681.fqn:null);
switch (G__11681__$1) {
case "whitespace":
case "comma":
return "S";

break;
case "comment":
return "C";

break;
case "newline":
return "N";

break;
default:
return "E";

}
}),nodes);
});
cljfmt.core.splice_into = (function cljfmt$core$splice_into(coll,splices){
var splice = (function cljfmt$core$splice_into_$_splice(v,i,splices__$1){
var temp__5804__auto__ = cljs.core.seq(splices__$1);
if(temp__5804__auto__){
var vec__11687 = temp__5804__auto__;
var seq__11688 = cljs.core.seq(vec__11687);
var first__11689 = cljs.core.first(seq__11688);
var seq__11688__$1 = cljs.core.next(seq__11688);
var map__11690 = first__11689;
var map__11690__$1 = cljs.core.__destructure_map(map__11690);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11690__$1,cljs.core.cst$kw$value);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11690__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11690__$1,cljs.core.cst$kw$end);
var splices__$2 = seq__11688__$1;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.LazySeq(null,(function (){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,i,start);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
return value;
}),null,null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.LazySeq(null,(function (){
return cljfmt$core$splice_into_$_splice(v,end,splices__$2);
}),null,null))], 0));
} else {
return null;
}
});
return splice(cljs.core.vec(coll),(0),splices);
});
cljfmt.core.add_newlines_after_comments = (function cljfmt$core$add_newlines_after_comments(nodes){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__11691_SHARP_){
if(rewrite_clj.node.comment_QMARK_(p1__11691_SHARP_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11691_SHARP_,rewrite_clj.node.newlines((1))], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11691_SHARP_], null);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0));
});
cljfmt.core.remove_newlines_after_comments = (function cljfmt$core$remove_newlines_after_comments(nodes){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__11692_SHARP_,p2__11693_SHARP_){
if(cljs.core.truth_((function (){var and__5043__auto__ = p1__11692_SHARP_;
if(cljs.core.truth_(and__5043__auto__)){
return ((rewrite_clj.node.comment_QMARK_(p1__11692_SHARP_)) && (rewrite_clj.node.linebreak_QMARK_(p2__11693_SHARP_)));
} else {
return and__5043__auto__;
}
})())){
return null;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p2__11693_SHARP_], null);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cons(null,nodes),nodes], 0));
});
cljfmt.core.sort_node_arguments_by = (function cljfmt$core$sort_node_arguments_by(f,nodes){
var nodes__$1 = cljfmt.core.add_newlines_after_comments(nodes);
var args = cljs.core.rest(cljfmt.core.find_elements_with_comments(nodes__$1));
var sorted = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$value,args));
return cljfmt.core.remove_newlines_after_comments(cljfmt.core.splice_into(nodes__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__11694_SHARP_,p2__11695_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__11694_SHARP_,cljs.core.cst$kw$value,p2__11695_SHARP_);
}),args,sorted)));
});
cljfmt.core.update_children = (function cljfmt$core$update_children(zloc,f){
var node = rewrite_clj.zip.node(zloc);
return rewrite_clj.zip.replace(zloc,rewrite_clj.node.replace_children(node,(function (){var G__11696 = rewrite_clj.node.children(node);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__11696) : f.call(null,G__11696));
})()));
});
cljfmt.core.nodes_string = (function cljfmt$core$nodes_string(nodes){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(rewrite_clj.node.string,nodes));
});
cljfmt.core.remove_node_metadata = (function cljfmt$core$remove_node_metadata(nodes){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__11697_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.node.tag(p1__11697_SHARP_),cljs.core.cst$kw$meta)){
return cljs.core.rest(rewrite_clj.node.children(p1__11697_SHARP_));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11697_SHARP_], null);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0));
});
cljfmt.core.node_sort_string = (function cljfmt$core$node_sort_string(nodes){
return clojure.string.trim(clojure.string.replace(cljfmt.core.nodes_string(cljfmt.core.remove_node_metadata(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(rewrite_clj.node.comment_QMARK_,rewrite_clj.node.whitespace_QMARK_),nodes))),/[\[\]\(\)\{\}]/,""));
});
cljfmt.core.sort_arguments = (function cljfmt$core$sort_arguments(zloc){
return cljfmt.core.update_children(zloc,(function (p1__11698_SHARP_){
return cljfmt.core.sort_node_arguments_by(cljfmt.core.node_sort_string,p1__11698_SHARP_);
}));
});
cljfmt.core.sort_ns_references = (function cljfmt$core$sort_ns_references(form){
return cljfmt.core.transform.cljs$core$IFn$_invoke$arity$variadic(form,cljfmt.core.edit_all,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljfmt.core.ns_reference_QMARK_,cljfmt.core.sort_arguments], 0));
});
cljfmt.core.default_options = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$remove_DASH_consecutive_DASH_blank_DASH_lines_QMARK_,cljs.core.cst$kw$insert_DASH_missing_DASH_whitespace_QMARK_,cljs.core.cst$kw$remove_DASH_trailing_DASH_whitespace_QMARK_,cljs.core.cst$kw$split_DASH_keypairs_DASH_over_DASH_multiple_DASH_lines_QMARK_,cljs.core.cst$kw$sort_DASH_ns_DASH_references_QMARK_,cljs.core.cst$kw$indents,cljs.core.cst$kw$indentation_QMARK_,cljs.core.cst$kw$remove_DASH_multiple_DASH_non_DASH_indenting_DASH_spaces_QMARK_,cljs.core.cst$kw$remove_DASH_surrounding_DASH_whitespace_QMARK_,cljs.core.cst$kw$alias_DASH_map],[true,true,true,false,false,cljfmt.core.default_indents,true,false,true,cljs.core.PersistentArrayMap.EMPTY]);
cljfmt.core.reformat_form = (function cljfmt$core$reformat_form(var_args){
var G__11700 = arguments.length;
switch (G__11700) {
case 1:
return cljfmt.core.reformat_form.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljfmt.core.reformat_form.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljfmt.core.reformat_form.cljs$core$IFn$_invoke$arity$1 = (function (form){
return cljfmt.core.reformat_form.cljs$core$IFn$_invoke$arity$2(form,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljfmt.core.reformat_form.cljs$core$IFn$_invoke$arity$2 = (function (form,opts){
var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljfmt.core.default_options,opts], 0));
var G__11701 = (function (){var G__11702 = (function (){var G__11703 = (function (){var G__11704 = (function (){var G__11705 = (function (){var G__11706 = (function (){var G__11707 = (function (){var G__11708 = form;
if(cljs.core.truth_(cljs.core.cst$kw$sort_DASH_ns_DASH_references_QMARK_.cljs$core$IFn$_invoke$arity$1(opts__$1))){
return cljfmt.core.sort_ns_references(G__11708);
} else {
return G__11708;
}
})();
if(cljs.core.truth_(cljs.core.cst$kw$split_DASH_keypairs_DASH_over_DASH_multiple_DASH_lines_QMARK_.cljs$core$IFn$_invoke$arity$1(opts__$1))){
return cljfmt.core.split_keypairs_over_multiple_lines(G__11707);
} else {
return G__11707;
}
})();
if(cljs.core.truth_(cljs.core.cst$kw$remove_DASH_consecutive_DASH_blank_DASH_lines_QMARK_.cljs$core$IFn$_invoke$arity$1(opts__$1))){
return cljfmt.core.remove_consecutive_blank_lines(G__11706);
} else {
return G__11706;
}
})();
if(cljs.core.truth_(cljs.core.cst$kw$remove_DASH_surrounding_DASH_whitespace_QMARK_.cljs$core$IFn$_invoke$arity$1(opts__$1))){
return cljfmt.core.remove_surrounding_whitespace(G__11705);
} else {
return G__11705;
}
})();
if(cljs.core.truth_(cljs.core.cst$kw$insert_DASH_missing_DASH_whitespace_QMARK_.cljs$core$IFn$_invoke$arity$1(opts__$1))){
return cljfmt.core.insert_missing_whitespace(G__11704);
} else {
return G__11704;
}
})();
if(cljs.core.truth_(cljs.core.cst$kw$remove_DASH_multiple_DASH_non_DASH_indenting_DASH_spaces_QMARK_.cljs$core$IFn$_invoke$arity$1(opts__$1))){
return cljfmt.core.remove_multiple_non_indenting_spaces(G__11703);
} else {
return G__11703;
}
})();
if(cljs.core.truth_(cljs.core.cst$kw$indentation_QMARK_.cljs$core$IFn$_invoke$arity$1(opts__$1))){
return cljfmt.core.reindent.cljs$core$IFn$_invoke$arity$3(G__11702,cljs.core.cst$kw$indents.cljs$core$IFn$_invoke$arity$1(opts__$1),cljs.core.cst$kw$alias_DASH_map.cljs$core$IFn$_invoke$arity$1(opts__$1));
} else {
return G__11702;
}
})();
if(cljs.core.truth_(cljs.core.cst$kw$remove_DASH_trailing_DASH_whitespace_QMARK_.cljs$core$IFn$_invoke$arity$1(opts__$1))){
return cljfmt.core.remove_trailing_whitespace(G__11701);
} else {
return G__11701;
}
}));

(cljfmt.core.reformat_form.cljs$lang$maxFixedArity = 2);

cljfmt.core.reformat_string = (function cljfmt$core$reformat_string(var_args){
var G__11711 = arguments.length;
switch (G__11711) {
case 1:
return cljfmt.core.reformat_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljfmt.core.reformat_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljfmt.core.reformat_string.cljs$core$IFn$_invoke$arity$1 = (function (form_string){
return cljfmt.core.reformat_string.cljs$core$IFn$_invoke$arity$2(form_string,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljfmt.core.reformat_string.cljs$core$IFn$_invoke$arity$2 = (function (form_string,options){
var parsed_form = rewrite_clj.parser.parse_string_all(form_string);
var alias_map = cljs.core.cst$kw$alias_DASH_map.cljs$core$IFn$_invoke$arity$1(options);
return rewrite_clj.node.string(cljfmt.core.reformat_form.cljs$core$IFn$_invoke$arity$2(parsed_form,(function (){var G__11712 = options;
if(cljs.core.truth_(alias_map)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11712,cljs.core.cst$kw$alias_DASH_map,alias_map);
} else {
return G__11712;
}
})()));
}));

(cljfmt.core.reformat_string.cljs$lang$maxFixedArity = 2);

cljfmt.core.default_line_separator = "\n";
cljfmt.core.normalize_newlines = (function cljfmt$core$normalize_newlines(s){
return clojure.string.replace(s,/\r\n/,"\n");
});
cljfmt.core.replace_newlines = (function cljfmt$core$replace_newlines(s,sep){
return clojure.string.replace(s,/\n/,sep);
});
cljfmt.core.find_line_separator = (function cljfmt$core$find_line_separator(s){
var or__5045__auto__ = cljs.core.re_find(/\r?\n/,s);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljfmt.core.default_line_separator;
}
});
cljfmt.core.wrap_normalize_newlines = (function cljfmt$core$wrap_normalize_newlines(f){
return (function (s){
var sep = cljfmt.core.find_line_separator(s);
return cljfmt.core.replace_newlines((function (){var G__11714 = cljfmt.core.normalize_newlines(s);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__11714) : f.call(null,G__11714));
})(),sep);
});
});
