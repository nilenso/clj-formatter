// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('cljfmt.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.parser');
goog.require('rewrite_clj.zip');
cljfmt.core.includes_QMARK_ = clojure.string.includes_QMARK_;
cljfmt.core.edit_all = (function cljfmt$core$edit_all(zloc,p_QMARK_,f){
var zloc__$1 = (cljs.core.truth_(p_QMARK_.call(null,zloc))?f.call(null,zloc):zloc);
while(true){
var temp__5802__auto__ = rewrite_clj.zip.find_next.call(null,zloc__$1,rewrite_clj.zip.next_STAR_,p_QMARK_);
if(cljs.core.truth_(temp__5802__auto__)){
var zloc__$2 = temp__5802__auto__;
var G__5770 = f.call(null,zloc__$2);
zloc__$1 = G__5770;
continue;
} else {
return zloc__$1;
}
break;
}
});
cljfmt.core.transform = (function cljfmt$core$transform(var_args){
var args__5775__auto__ = [];
var len__5769__auto___5774 = arguments.length;
var i__5770__auto___5775 = (0);
while(true){
if((i__5770__auto___5775 < len__5769__auto___5774)){
args__5775__auto__.push((arguments[i__5770__auto___5775]));

var G__5776 = (i__5770__auto___5775 + (1));
i__5770__auto___5775 = G__5776;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return cljfmt.core.transform.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(cljfmt.core.transform.cljs$core$IFn$_invoke$arity$variadic = (function (form,zf,args){
return rewrite_clj.zip.root.call(null,cljs.core.apply.call(null,zf,rewrite_clj.zip.edn.call(null,form),args));
}));

(cljfmt.core.transform.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljfmt.core.transform.cljs$lang$applyTo = (function (seq5771){
var G__5772 = cljs.core.first.call(null,seq5771);
var seq5771__$1 = cljs.core.next.call(null,seq5771);
var G__5773 = cljs.core.first.call(null,seq5771__$1);
var seq5771__$2 = cljs.core.next.call(null,seq5771__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5772,G__5773,seq5771__$2);
}));

cljfmt.core.surrounding_QMARK_ = (function cljfmt$core$surrounding_QMARK_(zloc,p_QMARK_){
var and__5043__auto__ = p_QMARK_.call(null,zloc);
if(cljs.core.truth_(and__5043__auto__)){
return (((rewrite_clj.zip.left_STAR_.call(null,zloc) == null)) || ((rewrite_clj.zip.skip.call(null,rewrite_clj.zip.right_STAR_,p_QMARK_,zloc) == null)));
} else {
return and__5043__auto__;
}
});
cljfmt.core.root_QMARK_ = (function cljfmt$core$root_QMARK_(zloc){
return (rewrite_clj.zip.up_STAR_.call(null,zloc) == null);
});
cljfmt.core.top_QMARK_ = (function cljfmt$core$top_QMARK_(zloc){
var G__5777 = zloc;
var G__5777__$1 = (((G__5777 == null))?null:rewrite_clj.zip.up.call(null,G__5777));
if((G__5777__$1 == null)){
return null;
} else {
return cljfmt.core.root_QMARK_.call(null,G__5777__$1);
}
});
cljfmt.core.root = (function cljfmt$core$root(zloc){
while(true){
if(cljfmt.core.root_QMARK_.call(null,zloc)){
return zloc;
} else {
var G__5778 = rewrite_clj.zip.up.call(null,zloc);
zloc = G__5778;
continue;
}
break;
}
});
cljfmt.core.clojure_whitespace_QMARK_ = (function cljfmt$core$clojure_whitespace_QMARK_(zloc){
return rewrite_clj.zip.whitespace_QMARK_.call(null,zloc);
});
cljfmt.core.surrounding_whitespace_QMARK_ = (function cljfmt$core$surrounding_whitespace_QMARK_(zloc){
var and__5043__auto__ = cljs.core.not.call(null,cljfmt.core.top_QMARK_.call(null,zloc));
if(and__5043__auto__){
return cljfmt.core.surrounding_QMARK_.call(null,zloc,cljfmt.core.clojure_whitespace_QMARK_);
} else {
return and__5043__auto__;
}
});
cljfmt.core.remove_surrounding_whitespace = (function cljfmt$core$remove_surrounding_whitespace(form){
return cljfmt.core.transform.call(null,form,cljfmt.core.edit_all,cljfmt.core.surrounding_whitespace_QMARK_,rewrite_clj.zip.remove_STAR_);
});
cljfmt.core.element_QMARK_ = (function cljfmt$core$element_QMARK_(zloc){
var and__5043__auto__ = zloc;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not.call(null,rewrite_clj.zip.whitespace_or_comment_QMARK_.call(null,zloc));
} else {
return and__5043__auto__;
}
});
cljfmt.core.reader_macro_QMARK_ = (function cljfmt$core$reader_macro_QMARK_(zloc){
var and__5043__auto__ = zloc;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.call(null,rewrite_clj.node.tag.call(null,rewrite_clj.zip.node.call(null,zloc)),new cljs.core.Keyword(null,"reader-macro","reader-macro",750056422));
} else {
return and__5043__auto__;
}
});
cljfmt.core.namespaced_map_QMARK_ = (function cljfmt$core$namespaced_map_QMARK_(zloc){
var and__5043__auto__ = zloc;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.call(null,rewrite_clj.node.tag.call(null,rewrite_clj.zip.node.call(null,zloc)),new cljs.core.Keyword(null,"namespaced-map","namespaced-map",1235665380));
} else {
return and__5043__auto__;
}
});
cljfmt.core.missing_whitespace_QMARK_ = (function cljfmt$core$missing_whitespace_QMARK_(zloc){
var and__5043__auto__ = cljfmt.core.element_QMARK_.call(null,zloc);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = cljs.core.not.call(null,cljfmt.core.reader_macro_QMARK_.call(null,rewrite_clj.zip.up_STAR_.call(null,zloc)));
if(and__5043__auto____$1){
var and__5043__auto____$2 = cljs.core.not.call(null,cljfmt.core.namespaced_map_QMARK_.call(null,rewrite_clj.zip.up_STAR_.call(null,zloc)));
if(and__5043__auto____$2){
return cljfmt.core.element_QMARK_.call(null,rewrite_clj.zip.right_STAR_.call(null,zloc));
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
return cljfmt.core.transform.call(null,form,cljfmt.core.edit_all,cljfmt.core.missing_whitespace_QMARK_,rewrite_clj.zip.insert_space_right);
});
cljfmt.core.space_QMARK_ = (function cljfmt$core$space_QMARK_(zloc){
return cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,zloc),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483));
});
cljfmt.core.comment_QMARK_ = (function cljfmt$core$comment_QMARK_(zloc){
var G__5779 = zloc;
var G__5779__$1 = (((G__5779 == null))?null:rewrite_clj.zip.node.call(null,G__5779));
if((G__5779__$1 == null)){
return null;
} else {
return rewrite_clj.node.comment_QMARK_.call(null,G__5779__$1);
}
});
cljfmt.core.comma_QMARK_ = (function cljfmt$core$comma_QMARK_(zloc){
var G__5780 = zloc;
var G__5780__$1 = (((G__5780 == null))?null:rewrite_clj.zip.node.call(null,G__5780));
if((G__5780__$1 == null)){
return null;
} else {
return rewrite_clj.node.comma_QMARK_.call(null,G__5780__$1);
}
});
cljfmt.core.line_break_QMARK_ = (function cljfmt$core$line_break_QMARK_(zloc){
var or__5045__auto__ = rewrite_clj.zip.linebreak_QMARK_.call(null,zloc);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljfmt.core.comment_QMARK_.call(null,zloc);
}
});
cljfmt.core.skip_whitespace = (function cljfmt$core$skip_whitespace(zloc){
return rewrite_clj.zip.skip.call(null,rewrite_clj.zip.next_STAR_,cljfmt.core.space_QMARK_,zloc);
});
cljfmt.core.skip_whitespace_and_commas = (function cljfmt$core$skip_whitespace_and_commas(zloc){
return rewrite_clj.zip.skip.call(null,rewrite_clj.zip.next_STAR_,(function (p1__5781_SHARP_){
var or__5045__auto__ = cljfmt.core.space_QMARK_.call(null,p1__5781_SHARP_);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return cljfmt.core.comma_QMARK_.call(null,p1__5781_SHARP_);
}
}),zloc);
});
cljfmt.core.skip_clojure_whitespace = (function cljfmt$core$skip_clojure_whitespace(var_args){
var G__5783 = arguments.length;
switch (G__5783) {
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
return cljfmt.core.skip_clojure_whitespace.call(null,zloc,rewrite_clj.zip.next_STAR_);
}));

(cljfmt.core.skip_clojure_whitespace.cljs$core$IFn$_invoke$arity$2 = (function (zloc,f){
return rewrite_clj.zip.skip.call(null,f,cljfmt.core.clojure_whitespace_QMARK_,zloc);
}));

(cljfmt.core.skip_clojure_whitespace.cljs$lang$maxFixedArity = 2);

cljfmt.core.count_newlines = (function cljfmt$core$count_newlines(zloc){
var zloc_SINGLEQUOTE_ = zloc;
var newlines = (0);
while(true){
if(cljs.core.truth_(rewrite_clj.zip.linebreak_QMARK_.call(null,zloc_SINGLEQUOTE_))){
var G__5785 = cljfmt.core.skip_whitespace_and_commas.call(null,rewrite_clj.zip.right_STAR_.call(null,zloc_SINGLEQUOTE_));
var G__5786 = (cljs.core.count.call(null,rewrite_clj.zip.string.call(null,zloc_SINGLEQUOTE_)) + newlines);
zloc_SINGLEQUOTE_ = G__5785;
newlines = G__5786;
continue;
} else {
if(cljs.core.truth_(cljfmt.core.comment_QMARK_.call(null,cljfmt.core.skip_clojure_whitespace.call(null,zloc,rewrite_clj.zip.left_STAR_)))){
return (newlines + (1));
} else {
return newlines;
}
}
break;
}
});
cljfmt.core.final_transform_element_QMARK_ = (function cljfmt$core$final_transform_element_QMARK_(zloc){
return (cljfmt.core.skip_clojure_whitespace.call(null,rewrite_clj.zip.next_STAR_.call(null,zloc)) == null);
});
cljfmt.core.consecutive_blank_line_QMARK_ = (function cljfmt$core$consecutive_blank_line_QMARK_(zloc){
return (((cljfmt.core.count_newlines.call(null,zloc) > (2))) && ((!(cljfmt.core.final_transform_element_QMARK_.call(null,zloc)))));
});
cljfmt.core.remove_clojure_whitespace = (function cljfmt$core$remove_clojure_whitespace(zloc){
while(true){
if(cljs.core.truth_(cljfmt.core.clojure_whitespace_QMARK_.call(null,zloc))){
var G__5787 = rewrite_clj.zip.remove_STAR_.call(null,zloc);
zloc = G__5787;
continue;
} else {
return zloc;
}
break;
}
});
cljfmt.core.replace_consecutive_blank_lines = (function cljfmt$core$replace_consecutive_blank_lines(zloc){
var zloc_elem_before = cljfmt.core.remove_clojure_whitespace.call(null,rewrite_clj.zip.prev_STAR_.call(null,cljfmt.core.skip_clojure_whitespace.call(null,zloc)));
return rewrite_clj.zip.insert_left_STAR_.call(null,rewrite_clj.zip.next_STAR_.call(null,zloc_elem_before),rewrite_clj.node.newlines.call(null,(cljs.core.truth_(cljfmt.core.comment_QMARK_.call(null,zloc_elem_before))?(1):(2))));
});
cljfmt.core.remove_consecutive_blank_lines = (function cljfmt$core$remove_consecutive_blank_lines(form){
return cljfmt.core.transform.call(null,form,cljfmt.core.edit_all,cljfmt.core.consecutive_blank_line_QMARK_,cljfmt.core.replace_consecutive_blank_lines);
});
cljfmt.core.indentation_QMARK_ = (function cljfmt$core$indentation_QMARK_(zloc){
var and__5043__auto__ = cljfmt.core.line_break_QMARK_.call(null,rewrite_clj.zip.prev_STAR_.call(null,zloc));
if(cljs.core.truth_(and__5043__auto__)){
return cljfmt.core.space_QMARK_.call(null,zloc);
} else {
return and__5043__auto__;
}
});
cljfmt.core.comment_next_QMARK_ = (function cljfmt$core$comment_next_QMARK_(zloc){
return cljfmt.core.comment_QMARK_.call(null,cljfmt.core.skip_whitespace.call(null,rewrite_clj.zip.next_STAR_.call(null,zloc)));
});
cljfmt.core.should_indent_QMARK_ = (function cljfmt$core$should_indent_QMARK_(zloc){
var and__5043__auto__ = cljfmt.core.line_break_QMARK_.call(null,zloc);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not.call(null,cljfmt.core.comment_next_QMARK_.call(null,zloc));
} else {
return and__5043__auto__;
}
});
cljfmt.core.should_unindent_QMARK_ = (function cljfmt$core$should_unindent_QMARK_(zloc){
var and__5043__auto__ = cljfmt.core.indentation_QMARK_.call(null,zloc);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not.call(null,cljfmt.core.comment_next_QMARK_.call(null,zloc));
} else {
return and__5043__auto__;
}
});
cljfmt.core.unindent = (function cljfmt$core$unindent(form){
return cljfmt.core.transform.call(null,form,cljfmt.core.edit_all,cljfmt.core.should_unindent_QMARK_,rewrite_clj.zip.remove_STAR_);
});
cljfmt.core.start_element = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"namespaced-map","namespaced-map",1235665380),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"unquote-splicing","unquote-splicing",1295267556),new cljs.core.Keyword(null,"reader-macro","reader-macro",750056422),new cljs.core.Keyword(null,"unquote","unquote",1649741032),new cljs.core.Keyword(null,"meta*","meta*",-949431606),new cljs.core.Keyword(null,"uneval","uneval",1932037707),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"deref","deref",-145586795),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"eval","eval",-1103567905)],["#(","#","^","~@","#","~","#^","#_","[","`","(","#'","'","@","#{","{","#="]);
cljfmt.core.prior_line_string = (function cljfmt$core$prior_line_string(zloc){
var zloc__$1 = zloc;
var worklist = cljs.core.List.EMPTY;
while(true){
var temp__5802__auto__ = rewrite_clj.zip.left_STAR_.call(null,zloc__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var p = temp__5802__auto__;
var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_clj.node.string.call(null,rewrite_clj.zip.node.call(null,p)));
var new_worklist = cljs.core.cons.call(null,s,worklist);
if(cljs.core.not.call(null,cljfmt.core.includes_QMARK_.call(null,s,"\n"))){
var G__5788 = p;
var G__5789 = new_worklist;
zloc__$1 = G__5788;
worklist = G__5789;
continue;
} else {
return cljs.core.apply.call(null,cljs.core.str,new_worklist);
}
} else {
var temp__5802__auto____$1 = rewrite_clj.zip.up_STAR_.call(null,zloc__$1);
if(cljs.core.truth_(temp__5802__auto____$1)){
var p = temp__5802__auto____$1;
var G__5790 = p;
var G__5791 = cljs.core.cons.call(null,cljfmt.core.start_element.call(null,rewrite_clj.node.tag.call(null,rewrite_clj.zip.node.call(null,p))),worklist);
zloc__$1 = G__5790;
worklist = G__5791;
continue;
} else {
return cljs.core.apply.call(null,cljs.core.str,worklist);
}
}
break;
}
});
cljfmt.core.last_line_in_string = (function cljfmt$core$last_line_in_string(s){
return cljs.core.subs.call(null,s,(s.lastIndexOf("\n") + (1)));
});
cljfmt.core.margin = (function cljfmt$core$margin(zloc){
return ((cljfmt.core.last_line_in_string.call(null,cljfmt.core.prior_line_string.call(null,zloc))).length);
});
cljfmt.core.whitespace = (function cljfmt$core$whitespace(width){
return rewrite_clj.node.whitespace_node.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,width," ")));
});
cljfmt.core.coll_indent = (function cljfmt$core$coll_indent(zloc){
return cljfmt.core.margin.call(null,rewrite_clj.zip.leftmost_STAR_.call(null,zloc));
});
cljfmt.core.uneval_QMARK_ = (function cljfmt$core$uneval_QMARK_(zloc){
return cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,zloc),new cljs.core.Keyword(null,"uneval","uneval",1932037707));
});
cljfmt.core.index_of = (function cljfmt$core$index_of(zloc){
return (cljs.core.count.call(null,cljs.core.take_while.call(null,cljs.core.identity,cljs.core.remove.call(null,cljfmt.core.uneval_QMARK_,cljs.core.iterate.call(null,rewrite_clj.zip.left,zloc)))) - (1));
});
cljfmt.core.list_indent = (function cljfmt$core$list_indent(zloc){
if((cljfmt.core.index_of.call(null,zloc) > (1))){
return cljfmt.core.margin.call(null,rewrite_clj.zip.right.call(null,rewrite_clj.zip.leftmost_STAR_.call(null,zloc)));
} else {
return cljfmt.core.coll_indent.call(null,zloc);
}
});
cljfmt.core.indent_size = (2);
cljfmt.core.indent_width = (function cljfmt$core$indent_width(zloc){
var G__5792 = rewrite_clj.zip.tag.call(null,zloc);
var G__5792__$1 = (((G__5792 instanceof cljs.core.Keyword))?G__5792.fqn:null);
switch (G__5792__$1) {
case "list":
return cljfmt.core.indent_size;

break;
case "fn":
return (cljfmt.core.indent_size + (1));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__5792__$1)].join('')));

}
});
cljfmt.core.remove_namespace = (function cljfmt$core$remove_namespace(x){
if((x instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,cljs.core.name.call(null,x));
} else {
return x;
}
});
cljfmt.core.pattern_QMARK_ = (function cljfmt$core$pattern_QMARK_(v){
return (v instanceof RegExp);
});
cljfmt.core.token_QMARK_ = (function cljfmt$core$token_QMARK_(zloc){
return cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,zloc),new cljs.core.Keyword(null,"token","token",-1211463215));
});
cljfmt.core.ns_token_QMARK_ = (function cljfmt$core$ns_token_QMARK_(zloc){
return ((cljfmt.core.token_QMARK_.call(null,zloc)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"ns","ns",2082130287,null),rewrite_clj.zip.sexpr.call(null,zloc))));
});
cljfmt.core.ns_form_QMARK_ = (function cljfmt$core$ns_form_QMARK_(zloc){
var and__5043__auto__ = cljfmt.core.top_QMARK_.call(null,zloc);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,zloc),new cljs.core.Keyword(null,"list","list",765357683));
if(and__5043__auto____$1){
var G__5794 = zloc;
var G__5794__$1 = (((G__5794 == null))?null:rewrite_clj.zip.down.call(null,G__5794));
if((G__5794__$1 == null)){
return null;
} else {
return cljfmt.core.ns_token_QMARK_.call(null,G__5794__$1);
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
return cljs.core._EQ_.call(null,key,sym);
} else {
if(cljfmt.core.pattern_QMARK_.call(null,key)){
return cljs.core.re_find.call(null,key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym));
} else {
return null;
}
}
} else {
return null;
}
});
cljfmt.core.token_value = (function cljfmt$core$token_value(zloc){
if(cljfmt.core.token_QMARK_.call(null,zloc)){
return rewrite_clj.zip.sexpr.call(null,zloc);
} else {
return null;
}
});
cljfmt.core.reader_conditional_QMARK_ = (function cljfmt$core$reader_conditional_QMARK_(zloc){
var and__5043__auto__ = cljfmt.core.reader_macro_QMARK_.call(null,zloc);
if(cljs.core.truth_(and__5043__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["?",null,"?@",null], null), null).call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljfmt.core.token_value.call(null,rewrite_clj.zip.down.call(null,zloc))));
} else {
return and__5043__auto__;
}
});
cljfmt.core.form_symbol = (function cljfmt$core$form_symbol(zloc){
return cljfmt.core.token_value.call(null,rewrite_clj.zip.leftmost.call(null,zloc));
});
cljfmt.core.index_matches_top_argument_QMARK_ = (function cljfmt$core$index_matches_top_argument_QMARK_(zloc,depth,idx){
return (((depth > (0))) && (cljs.core._EQ_.call(null,(idx + (1)),cljfmt.core.index_of.call(null,cljs.core.nth.call(null,cljs.core.iterate.call(null,rewrite_clj.zip.up,zloc),depth)))));
});
cljfmt.core.qualify_symbol_by_alias_map = (function cljfmt$core$qualify_symbol_by_alias_map(possible_sym,alias_map){
var temp__5804__auto__ = cljs.core.namespace.call(null,possible_sym);
if(cljs.core.truth_(temp__5804__auto__)){
var ns_str = temp__5804__auto__;
return cljs.core.symbol.call(null,cljs.core.get.call(null,alias_map,ns_str,ns_str),cljs.core.name.call(null,possible_sym));
} else {
return null;
}
});
cljfmt.core.qualify_symbol_by_ns_name = (function cljfmt$core$qualify_symbol_by_ns_name(possible_sym,ns_name){
if(cljs.core.truth_(ns_name)){
return cljs.core.symbol.call(null,cljs.core.name.call(null,ns_name),cljs.core.name.call(null,possible_sym));
} else {
return null;
}
});
cljfmt.core.fully_qualified_symbol = (function cljfmt$core$fully_qualified_symbol(zloc,context){
var possible_sym = cljfmt.core.form_symbol.call(null,zloc);
if((possible_sym instanceof cljs.core.Symbol)){
var or__5045__auto__ = cljfmt.core.qualify_symbol_by_alias_map.call(null,possible_sym,new cljs.core.Keyword(null,"alias-map","alias-map",-1075881570).cljs$core$IFn$_invoke$arity$1(context));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljfmt.core.qualify_symbol_by_ns_name.call(null,possible_sym,new cljs.core.Keyword(null,"ns-name","ns-name",-2077346323).cljs$core$IFn$_invoke$arity$1(context));
}
} else {
return possible_sym;
}
});
cljfmt.core.inner_indent = (function cljfmt$core$inner_indent(zloc,key,depth,idx,context){
var top = cljs.core.nth.call(null,cljs.core.iterate.call(null,rewrite_clj.zip.up,zloc),depth);
if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = cljfmt.core.indent_matches_QMARK_.call(null,key,cljfmt.core.fully_qualified_symbol.call(null,zloc,context));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljfmt.core.indent_matches_QMARK_.call(null,key,cljfmt.core.remove_namespace.call(null,cljfmt.core.form_symbol.call(null,top)));
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return (((idx == null)) || (cljfmt.core.index_matches_top_argument_QMARK_.call(null,zloc,depth,idx)));
} else {
return and__5043__auto__;
}
})())){
var zup = rewrite_clj.zip.up.call(null,zloc);
return (cljfmt.core.margin.call(null,zup) + cljfmt.core.indent_width.call(null,zup));
} else {
return null;
}
});
cljfmt.core.nth_form = (function cljfmt$core$nth_form(zloc,n){
return cljs.core.reduce.call(null,(function (z,f){
if(cljs.core.truth_(z)){
return f.call(null,z);
} else {
return null;
}
}),rewrite_clj.zip.leftmost.call(null,zloc),cljs.core.repeat.call(null,n,rewrite_clj.zip.right));
});
cljfmt.core.first_form_in_line_QMARK_ = (function cljfmt$core$first_form_in_line_QMARK_(zloc){
while(true){
var and__5043__auto__ = (!((zloc == null)));
if(and__5043__auto__){
var temp__5802__auto__ = rewrite_clj.zip.left_STAR_.call(null,zloc);
if(cljs.core.truth_(temp__5802__auto__)){
var zloc__$1 = temp__5802__auto__;
if(cljfmt.core.space_QMARK_.call(null,zloc__$1)){
var G__5795 = zloc__$1;
zloc = G__5795;
continue;
} else {
var or__5045__auto__ = rewrite_clj.zip.linebreak_QMARK_.call(null,zloc__$1);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljfmt.core.comment_QMARK_.call(null,zloc__$1);
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
if(cljs.core.truth_((function (){var or__5045__auto__ = cljfmt.core.indent_matches_QMARK_.call(null,key,cljfmt.core.fully_qualified_symbol.call(null,zloc,context));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljfmt.core.indent_matches_QMARK_.call(null,key,cljfmt.core.remove_namespace.call(null,cljfmt.core.form_symbol.call(null,zloc)));
}
})())){
var zloc_after_idx = (function (){var G__5796 = zloc;
if((G__5796 == null)){
return null;
} else {
return cljfmt.core.nth_form.call(null,G__5796,(idx + (1)));
}
})();
if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = (zloc_after_idx == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return cljfmt.core.first_form_in_line_QMARK_.call(null,zloc_after_idx);
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return (cljfmt.core.index_of.call(null,zloc) > idx);
} else {
return and__5043__auto__;
}
})())){
return cljfmt.core.inner_indent.call(null,zloc,key,(0),null,context);
} else {
return cljfmt.core.list_indent.call(null,zloc);
}
} else {
return null;
}
});
cljfmt.core.default_indents = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"are","are",1713001856,null),new cljs.core.Symbol(null,"when-first","when-first",821699168,null),new cljs.core.Symbol(null,"cond->>","cond->>",348844960,null),new cljs.core.Symbol(null,"while","while",-1691317983,null),new cljs.core.Symbol(null,"try","try",-1273693247,null),new cljs.core.Symbol(null,"bound-fn","bound-fn",125411266,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"testing","testing",-1492767066,null),new cljs.core.Symbol(null,"if-not","if-not",-265415609,null),new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.Symbol(null,"finally","finally",-1065347064,null),new cljs.core.Symbol(null,"deftype","deftype",1980826088,null),new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.Symbol(null,"go","go",1493584872,null),new cljs.core.Symbol(null,"if-some","if-some",1960677609,null),new cljs.core.Symbol(null,"with-precision","with-precision",393049897,null),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"defstruct","defstruct",-506568086,null),new cljs.core.Symbol(null,"doto","doto",1252536074,null),new cljs.core.Symbol(null,"future","future",-776593045,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"alt!","alt!",1759993452,null),new cljs.core.Symbol(null,"as->","as->",1430690540,null),new cljs.core.Symbol(null,"do","do",1686842252,null),new cljs.core.Symbol(null,"when-not","when-not",-1223136340,null),new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"extend","extend",-817951763,null),new cljs.core.Symbol(null,"go-loop","go-loop",692273294,null),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"deftest","deftest",938248815,null),new cljs.core.Symbol(null,"extend-type","extend-type",1123355921,null),new cljs.core.Symbol(null,"defmethod","defmethod",-579171823,null),new cljs.core.Symbol(null,"struct-map","struct-map",-1387540878,null),new cljs.core.Symbol(null,"extend-protocol","extend-protocol",306378578,null),new cljs.core.Symbol(null,"cond->","cond->",561741875,null),new cljs.core.Symbol(null,"dotimes","dotimes",-818708397,null),new cljs.core.Symbol(null,"reify","reify",1885539699,null),new cljs.core.Symbol(null,"with-open","with-open",172119667,null),new cljs.core.Symbol(null,"defonce","defonce",-1681484013,null),new cljs.core.Symbol(null,"defn-","defn-",1097765044,null),new cljs.core.Symbol(null,"alt!!","alt!!",662409428,null),new cljs.core.Symbol(null,"defprotocol","defprotocol",1388695348,null),new cljs.core.Symbol(null,"letfn","letfn",-480490827,null),new cljs.core.Symbol(null,"use-fixtures","use-fixtures",-1608548619,null),new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.Symbol(null,"with-out-str","with-out-str",-140201577,null),new cljs.core.Symbol(null,"condp","condp",1054325175,null),new cljs.core.Symbol(null,"cond","cond",1606708055,null),new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Symbol(null,"with-local-vars","with-local-vars",837642072,null),new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),new cljs.core.Symbol(null,"proxy","proxy",1523077913,null),new cljs.core.Symbol(null,"with-redefs","with-redefs",-1143728263,null),new cljs.core.Symbol(null,"locking","locking",1542862874,null),new cljs.core.Symbol(null,"defmulti","defmulti",1936112154,null),new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.Symbol(null,"case","case",-1510733573,null),new cljs.core.Symbol(null,"catch","catch",-1616370245,null),new cljs.core.Symbol(null,"thread","thread",-1707434245,null),new cljs.core.Symbol(null,"comment","comment",-2122229700,null),new cljs.core.Symbol(null,"defrecord","defrecord",273038109,null),new cljs.core.Symbol(null,"when-some","when-some",1700415903,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"fdef","fdef",459719359,null)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(2),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(2)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null)]),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"defroutes","defroutes",-1310011104,null),new cljs.core.Symbol(null,"PUT","PUT",-201468416,null),new cljs.core.Symbol(null,"POST","POST",1750988384,null),new cljs.core.Symbol(null,"let-routes","let-routes",-376261774,null),new cljs.core.Symbol(null,"DELETE","DELETE",-965761997,null),new cljs.core.Symbol(null,"rfn","rfn",649648083,null),new cljs.core.Symbol(null,"ANY","ANY",1875082901,null),new cljs.core.Symbol(null,"GET","GET",-917844743,null),new cljs.core.Symbol(null,"HEAD","HEAD",1903810169,null),new cljs.core.Symbol(null,"PATCH","PATCH",-1233173284,null),new cljs.core.Symbol(null,"context","context",810340414,null),new cljs.core.Symbol(null,"OPTIONS","OPTIONS",742094783,null)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),(1)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null)]),new cljs.core.PersistentArrayMap(null, 2, [/^def(?!ault)(?!late)(?!er)/,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null),/^with-/,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner","inner",-1383171215),(0)], null)], null)], null));
if((typeof cljfmt !== 'undefined') && (typeof cljfmt.core !== 'undefined') && (typeof cljfmt.core.indenter_fn !== 'undefined')){
} else {
cljfmt.core.indenter_fn = (function (){var method_table__5642__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljfmt.core","indenter-fn"),(function (sym,context,p__5797){
var vec__5798 = p__5797;
var seq__5799 = cljs.core.seq.call(null,vec__5798);
var first__5800 = cljs.core.first.call(null,seq__5799);
var seq__5799__$1 = cljs.core.next.call(null,seq__5799);
var type = first__5800;
var args = seq__5799__$1;
return type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
cljs.core._add_method.call(null,cljfmt.core.indenter_fn,new cljs.core.Keyword(null,"inner","inner",-1383171215),(function (sym,context,p__5801){
var vec__5802 = p__5801;
var _ = cljs.core.nth.call(null,vec__5802,(0),null);
var depth = cljs.core.nth.call(null,vec__5802,(1),null);
var idx = cljs.core.nth.call(null,vec__5802,(2),null);
return (function (zloc){
return cljfmt.core.inner_indent.call(null,zloc,sym,depth,idx,context);
});
}));
cljs.core._add_method.call(null,cljfmt.core.indenter_fn,new cljs.core.Keyword(null,"block","block",664686210),(function (sym,context,p__5805){
var vec__5806 = p__5805;
var _ = cljs.core.nth.call(null,vec__5806,(0),null);
var idx = cljs.core.nth.call(null,vec__5806,(1),null);
return (function (zloc){
return cljfmt.core.block_indent.call(null,zloc,sym,idx,context);
});
}));
cljfmt.core.make_indenter = (function cljfmt$core$make_indenter(p__5809,context){
var vec__5810 = p__5809;
var key = cljs.core.nth.call(null,vec__5810,(0),null);
var opts = cljs.core.nth.call(null,vec__5810,(1),null);
return cljs.core.apply.call(null,cljs.core.some_fn,cljs.core.map.call(null,cljs.core.partial.call(null,cljfmt.core.indenter_fn,key,context),opts));
});
cljfmt.core.indent_order = (function cljfmt$core$indent_order(p__5813){
var vec__5814 = p__5813;
var key = cljs.core.nth.call(null,vec__5814,(0),null);
var _ = cljs.core.nth.call(null,vec__5814,(1),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = (key instanceof cljs.core.Symbol);
if(and__5043__auto__){
return cljs.core.namespace.call(null,key);
} else {
return and__5043__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
} else {
if((key instanceof cljs.core.Symbol)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
} else {
if(cljfmt.core.pattern_QMARK_.call(null,key)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((2)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
} else {
return null;
}
}
}
});
cljfmt.core.custom_indent = (function cljfmt$core$custom_indent(zloc,indents,context){
if(cljs.core.empty_QMARK_.call(null,indents)){
return cljfmt.core.list_indent.call(null,zloc);
} else {
var indenter = cljs.core.apply.call(null,cljs.core.some_fn,cljs.core.map.call(null,(function (p1__5817_SHARP_){
return cljfmt.core.make_indenter.call(null,p1__5817_SHARP_,context);
}),indents));
var or__5045__auto__ = indenter.call(null,zloc);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljfmt.core.list_indent.call(null,zloc);
}
}
});
cljfmt.core.indent_amount = (function cljfmt$core$indent_amount(zloc,indents,context){
var tag = rewrite_clj.zip.tag.call(null,rewrite_clj.zip.up.call(null,zloc));
var gp = rewrite_clj.zip.up.call(null,rewrite_clj.zip.up.call(null,zloc));
if(cljs.core.truth_(cljfmt.core.reader_conditional_QMARK_.call(null,gp))){
return cljfmt.core.coll_indent.call(null,zloc);
} else {
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"list","list",765357683),null], null), null).call(null,tag))){
return cljfmt.core.custom_indent.call(null,zloc,indents,context);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"meta","meta",1499536964),tag)){
return cljfmt.core.indent_amount.call(null,rewrite_clj.zip.up.call(null,zloc),indents,context);
} else {
return cljfmt.core.coll_indent.call(null,zloc);

}
}
}
});
cljfmt.core.indent_line = (function cljfmt$core$indent_line(zloc,indents,context){
var width = cljfmt.core.indent_amount.call(null,zloc,indents,context);
if((width > (0))){
return rewrite_clj.zip.insert_right_STAR_.call(null,zloc,cljfmt.core.whitespace.call(null,width));
} else {
return zloc;
}
});
cljfmt.core.find_namespace = (function cljfmt$core$find_namespace(zloc){
var G__5818 = zloc;
var G__5818__$1 = (((G__5818 == null))?null:cljfmt.core.root.call(null,G__5818));
var G__5818__$2 = (((G__5818__$1 == null))?null:rewrite_clj.zip.down.call(null,G__5818__$1));
var G__5818__$3 = (((G__5818__$2 == null))?null:rewrite_clj.zip.find.call(null,G__5818__$2,rewrite_clj.zip.right,cljfmt.core.ns_form_QMARK_));
var G__5818__$4 = (((G__5818__$3 == null))?null:rewrite_clj.zip.down.call(null,G__5818__$3));
var G__5818__$5 = (((G__5818__$4 == null))?null:rewrite_clj.zip.next.call(null,G__5818__$4));
if((G__5818__$5 == null)){
return null;
} else {
return rewrite_clj.zip.sexpr.call(null,G__5818__$5);
}
});
cljfmt.core.indent = (function cljfmt$core$indent(var_args){
var G__5821 = arguments.length;
switch (G__5821) {
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
return cljfmt.core.indent.call(null,form,cljfmt.core.default_indents,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljfmt.core.indent.cljs$core$IFn$_invoke$arity$2 = (function (form,indents){
return cljfmt.core.indent.call(null,form,indents,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljfmt.core.indent.cljs$core$IFn$_invoke$arity$3 = (function (form,indents,alias_map){
var ns_name = cljfmt.core.find_namespace.call(null,rewrite_clj.zip.edn.call(null,form));
var sorted_indents = cljs.core.sort_by.call(null,cljfmt.core.indent_order,indents);
return cljfmt.core.transform.call(null,form,cljfmt.core.edit_all,cljfmt.core.should_indent_QMARK_,(function (p1__5819_SHARP_){
return cljfmt.core.indent_line.call(null,p1__5819_SHARP_,sorted_indents,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"alias-map","alias-map",-1075881570),alias_map,new cljs.core.Keyword(null,"ns-name","ns-name",-2077346323),ns_name], null));
}));
}));

(cljfmt.core.indent.cljs$lang$maxFixedArity = 3);

cljfmt.core.map_key_QMARK_ = (function cljfmt$core$map_key_QMARK_(zloc){
return ((rewrite_clj.zip.map_QMARK_.call(null,rewrite_clj.zip.up.call(null,zloc))) && (((cljs.core.even_QMARK_.call(null,cljfmt.core.index_of.call(null,zloc))) && ((((!(cljfmt.core.uneval_QMARK_.call(null,zloc)))) && (cljs.core.not.call(null,rewrite_clj.zip.whitespace_or_comment_QMARK_.call(null,zloc))))))));
});
cljfmt.core.preceded_by_line_break_QMARK_ = (function cljfmt$core$preceded_by_line_break_QMARK_(zloc){
var previous = rewrite_clj.zip.left_STAR_.call(null,zloc);
while(true){
if(cljs.core.truth_(cljfmt.core.line_break_QMARK_.call(null,previous))){
return true;
} else {
if(cljs.core.truth_(rewrite_clj.zip.whitespace_or_comment_QMARK_.call(null,previous))){
var G__5823 = rewrite_clj.zip.left_STAR_.call(null,previous);
previous = G__5823;
continue;
} else {
return null;
}
}
break;
}
});
cljfmt.core.map_key_without_line_break_QMARK_ = (function cljfmt$core$map_key_without_line_break_QMARK_(zloc){
return ((cljfmt.core.map_key_QMARK_.call(null,zloc)) && (cljs.core.not.call(null,cljfmt.core.preceded_by_line_break_QMARK_.call(null,zloc))));
});
cljfmt.core.insert_newline_left = (function cljfmt$core$insert_newline_left(zloc){
return rewrite_clj.zip.insert_left_STAR_.call(null,zloc,rewrite_clj.node.newlines.call(null,(1)));
});
cljfmt.core.split_keypairs_over_multiple_lines = (function cljfmt$core$split_keypairs_over_multiple_lines(form){
return cljfmt.core.transform.call(null,form,cljfmt.core.edit_all,cljfmt.core.map_key_without_line_break_QMARK_,cljfmt.core.insert_newline_left);
});
cljfmt.core.reindent = (function cljfmt$core$reindent(var_args){
var G__5825 = arguments.length;
switch (G__5825) {
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
return cljfmt.core.indent.call(null,cljfmt.core.unindent.call(null,form));
}));

(cljfmt.core.reindent.cljs$core$IFn$_invoke$arity$2 = (function (form,indents){
return cljfmt.core.indent.call(null,cljfmt.core.unindent.call(null,form),indents);
}));

(cljfmt.core.reindent.cljs$core$IFn$_invoke$arity$3 = (function (form,indents,alias_map){
return cljfmt.core.indent.call(null,cljfmt.core.unindent.call(null,form),indents,alias_map);
}));

(cljfmt.core.reindent.cljs$lang$maxFixedArity = 3);

cljfmt.core.final_QMARK_ = (function cljfmt$core$final_QMARK_(zloc){
return (((rewrite_clj.zip.right_STAR_.call(null,zloc) == null)) && (cljfmt.core.root_QMARK_.call(null,rewrite_clj.zip.up_STAR_.call(null,zloc))));
});
cljfmt.core.trailing_whitespace_QMARK_ = (function cljfmt$core$trailing_whitespace_QMARK_(zloc){
var and__5043__auto__ = cljfmt.core.space_QMARK_.call(null,zloc);
if(and__5043__auto__){
var or__5045__auto__ = rewrite_clj.zip.linebreak_QMARK_.call(null,rewrite_clj.zip.right_STAR_.call(null,zloc));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljfmt.core.final_QMARK_.call(null,zloc);
}
} else {
return and__5043__auto__;
}
});
cljfmt.core.remove_trailing_whitespace = (function cljfmt$core$remove_trailing_whitespace(form){
return cljfmt.core.transform.call(null,form,cljfmt.core.edit_all,cljfmt.core.trailing_whitespace_QMARK_,rewrite_clj.zip.remove_STAR_);
});
cljfmt.core.replace_with_one_space = (function cljfmt$core$replace_with_one_space(zloc){
return rewrite_clj.zip.replace_STAR_.call(null,zloc,cljfmt.core.whitespace.call(null,(1)));
});
cljfmt.core.non_indenting_whitespace_QMARK_ = (function cljfmt$core$non_indenting_whitespace_QMARK_(zloc){
return ((cljfmt.core.space_QMARK_.call(null,zloc)) && (cljs.core.not.call(null,cljfmt.core.indentation_QMARK_.call(null,zloc))));
});
cljfmt.core.remove_multiple_non_indenting_spaces = (function cljfmt$core$remove_multiple_non_indenting_spaces(form){
return cljfmt.core.transform.call(null,form,cljfmt.core.edit_all,cljfmt.core.non_indenting_whitespace_QMARK_,cljfmt.core.replace_with_one_space);
});
cljfmt.core.ns_reference_symbols = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"use","use",-1846382424),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),null,new cljs.core.Keyword(null,"import","import",-1399500709),null], null), null);
cljfmt.core.ns_reference_QMARK_ = (function cljfmt$core$ns_reference_QMARK_(zloc){
var and__5043__auto__ = rewrite_clj.zip.list_QMARK_.call(null,zloc);
if(and__5043__auto__){
var and__5043__auto____$1 = (function (){var G__5827 = zloc;
var G__5827__$1 = (((G__5827 == null))?null:rewrite_clj.zip.up.call(null,G__5827));
if((G__5827__$1 == null)){
return null;
} else {
return cljfmt.core.ns_form_QMARK_.call(null,G__5827__$1);
}
})();
if(cljs.core.truth_(and__5043__auto____$1)){
return cljfmt.core.ns_reference_symbols.call(null,cljs.core.first.call(null,rewrite_clj.zip.sexpr.call(null,zloc)));
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
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.repeatedly.call(null,next_match));
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

var s = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,charmap,coll));
var v = cljs.core.vec.call(null,coll);
var iter__5523__auto__ = (function cljfmt$core$re_seq_matcher_$_iter__5828(s__5829){
return (new cljs.core.LazySeq(null,(function (){
var s__5829__$1 = s__5829;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__5829__$1);
if(temp__5804__auto__){
var s__5829__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5829__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__5829__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__5831 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__5830 = (0);
while(true){
if((i__5830 < size__5522__auto__)){
var vec__5832 = cljs.core._nth.call(null,c__5521__auto__,i__5830);
var start = cljs.core.nth.call(null,vec__5832,(0),null);
var end = cljs.core.nth.call(null,vec__5832,(1),null);
cljs.core.chunk_append.call(null,b__5831,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.subvec.call(null,v,start,end),new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"end","end",-268185958),end], null));

var G__5838 = (i__5830 + (1));
i__5830 = G__5838;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5831),cljfmt$core$re_seq_matcher_$_iter__5828.call(null,cljs.core.chunk_rest.call(null,s__5829__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5831),null);
}
} else {
var vec__5835 = cljs.core.first.call(null,s__5829__$2);
var start = cljs.core.nth.call(null,vec__5835,(0),null);
var end = cljs.core.nth.call(null,vec__5835,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.subvec.call(null,v,start,end),new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"end","end",-268185958),end], null),cljfmt$core$re_seq_matcher_$_iter__5828.call(null,cljs.core.rest.call(null,s__5829__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljfmt.core.re_indexes.call(null,re,s));
});
cljfmt.core.find_elements_with_comments = (function cljfmt$core$find_elements_with_comments(nodes){
return cljfmt.core.re_seq_matcher.call(null,/(CNS*)*E(S*C)?/,(function (p1__5839_SHARP_){
var G__5840 = rewrite_clj.node.tag.call(null,p1__5839_SHARP_);
var G__5840__$1 = (((G__5840 instanceof cljs.core.Keyword))?G__5840.fqn:null);
switch (G__5840__$1) {
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
var temp__5804__auto__ = cljs.core.seq.call(null,splices__$1);
if(temp__5804__auto__){
var vec__5846 = temp__5804__auto__;
var seq__5847 = cljs.core.seq.call(null,vec__5846);
var first__5848 = cljs.core.first.call(null,seq__5847);
var seq__5847__$1 = cljs.core.next.call(null,seq__5847);
var map__5849 = first__5848;
var map__5849__$1 = cljs.core.__destructure_map.call(null,map__5849);
var value = cljs.core.get.call(null,map__5849__$1,new cljs.core.Keyword(null,"value","value",305978217));
var start = cljs.core.get.call(null,map__5849__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__5849__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var splices__$2 = seq__5847__$1;
return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){
return cljs.core.subvec.call(null,v,i,start);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
return value;
}),null,null)),(new cljs.core.LazySeq(null,(function (){
return cljfmt$core$splice_into_$_splice.call(null,v,end,splices__$2);
}),null,null)));
} else {
return null;
}
});
return splice.call(null,cljs.core.vec.call(null,coll),(0),splices);
});
cljfmt.core.add_newlines_after_comments = (function cljfmt$core$add_newlines_after_comments(nodes){
return cljs.core.mapcat.call(null,(function (p1__5850_SHARP_){
if(rewrite_clj.node.comment_QMARK_.call(null,p1__5850_SHARP_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__5850_SHARP_,rewrite_clj.node.newlines.call(null,(1))], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__5850_SHARP_], null);
}
}),nodes);
});
cljfmt.core.remove_newlines_after_comments = (function cljfmt$core$remove_newlines_after_comments(nodes){
return cljs.core.mapcat.call(null,(function (p1__5851_SHARP_,p2__5852_SHARP_){
if(cljs.core.truth_((function (){var and__5043__auto__ = p1__5851_SHARP_;
if(cljs.core.truth_(and__5043__auto__)){
return ((rewrite_clj.node.comment_QMARK_.call(null,p1__5851_SHARP_)) && (rewrite_clj.node.linebreak_QMARK_.call(null,p2__5852_SHARP_)));
} else {
return and__5043__auto__;
}
})())){
return null;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p2__5852_SHARP_], null);
}
}),cljs.core.cons.call(null,null,nodes),nodes);
});
cljfmt.core.sort_node_arguments_by = (function cljfmt$core$sort_node_arguments_by(f,nodes){
var nodes__$1 = cljfmt.core.add_newlines_after_comments.call(null,nodes);
var args = cljs.core.rest.call(null,cljfmt.core.find_elements_with_comments.call(null,nodes__$1));
var sorted = cljs.core.sort_by.call(null,f,cljs.core.map.call(null,new cljs.core.Keyword(null,"value","value",305978217),args));
return cljfmt.core.remove_newlines_after_comments.call(null,cljfmt.core.splice_into.call(null,nodes__$1,cljs.core.map.call(null,(function (p1__5853_SHARP_,p2__5854_SHARP_){
return cljs.core.assoc.call(null,p1__5853_SHARP_,new cljs.core.Keyword(null,"value","value",305978217),p2__5854_SHARP_);
}),args,sorted)));
});
cljfmt.core.update_children = (function cljfmt$core$update_children(zloc,f){
var node = rewrite_clj.zip.node.call(null,zloc);
return rewrite_clj.zip.replace.call(null,zloc,rewrite_clj.node.replace_children.call(null,node,f.call(null,rewrite_clj.node.children.call(null,node))));
});
cljfmt.core.nodes_string = (function cljfmt$core$nodes_string(nodes){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,rewrite_clj.node.string,nodes));
});
cljfmt.core.remove_node_metadata = (function cljfmt$core$remove_node_metadata(nodes){
return cljs.core.mapcat.call(null,(function (p1__5855_SHARP_){
if(cljs.core._EQ_.call(null,rewrite_clj.node.tag.call(null,p1__5855_SHARP_),new cljs.core.Keyword(null,"meta","meta",1499536964))){
return cljs.core.rest.call(null,rewrite_clj.node.children.call(null,p1__5855_SHARP_));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__5855_SHARP_], null);
}
}),nodes);
});
cljfmt.core.node_sort_string = (function cljfmt$core$node_sort_string(nodes){
return clojure.string.trim.call(null,clojure.string.replace.call(null,cljfmt.core.nodes_string.call(null,cljfmt.core.remove_node_metadata.call(null,cljs.core.remove.call(null,cljs.core.some_fn.call(null,rewrite_clj.node.comment_QMARK_,rewrite_clj.node.whitespace_QMARK_),nodes))),/[\[\]\(\)\{\}]/,""));
});
cljfmt.core.sort_arguments = (function cljfmt$core$sort_arguments(zloc){
return cljfmt.core.update_children.call(null,zloc,(function (p1__5856_SHARP_){
return cljfmt.core.sort_node_arguments_by.call(null,cljfmt.core.node_sort_string,p1__5856_SHARP_);
}));
});
cljfmt.core.sort_ns_references = (function cljfmt$core$sort_ns_references(form){
return cljfmt.core.transform.call(null,form,cljfmt.core.edit_all,cljfmt.core.ns_reference_QMARK_,cljfmt.core.sort_arguments);
});
cljfmt.core.default_options = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"remove-consecutive-blank-lines?","remove-consecutive-blank-lines?",982824512),new cljs.core.Keyword(null,"insert-missing-whitespace?","insert-missing-whitespace?",-1012188573),new cljs.core.Keyword(null,"remove-trailing-whitespace?","remove-trailing-whitespace?",251206854),new cljs.core.Keyword(null,"split-keypairs-over-multiple-lines?","split-keypairs-over-multiple-lines?",-1451743095),new cljs.core.Keyword(null,"sort-ns-references?","sort-ns-references?",656713197),new cljs.core.Keyword(null,"indents","indents",-569647275),new cljs.core.Keyword(null,"indentation?","indentation?",-649129482),new cljs.core.Keyword(null,"remove-multiple-non-indenting-spaces?","remove-multiple-non-indenting-spaces?",-1486794728),new cljs.core.Keyword(null,"remove-surrounding-whitespace?","remove-surrounding-whitespace?",-2083582887),new cljs.core.Keyword(null,"alias-map","alias-map",-1075881570)],[true,true,true,false,false,cljfmt.core.default_indents,true,false,true,cljs.core.PersistentArrayMap.EMPTY]);
cljfmt.core.reformat_form = (function cljfmt$core$reformat_form(var_args){
var G__5858 = arguments.length;
switch (G__5858) {
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
return cljfmt.core.reformat_form.call(null,form,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljfmt.core.reformat_form.cljs$core$IFn$_invoke$arity$2 = (function (form,opts){
var opts__$1 = cljs.core.merge.call(null,cljfmt.core.default_options,opts);
var G__5859 = (function (){var G__5860 = (function (){var G__5861 = (function (){var G__5862 = (function (){var G__5863 = (function (){var G__5864 = (function (){var G__5865 = (function (){var G__5866 = form;
if(cljs.core.truth_(new cljs.core.Keyword(null,"sort-ns-references?","sort-ns-references?",656713197).cljs$core$IFn$_invoke$arity$1(opts__$1))){
return cljfmt.core.sort_ns_references.call(null,G__5866);
} else {
return G__5866;
}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"split-keypairs-over-multiple-lines?","split-keypairs-over-multiple-lines?",-1451743095).cljs$core$IFn$_invoke$arity$1(opts__$1))){
return cljfmt.core.split_keypairs_over_multiple_lines.call(null,G__5865);
} else {
return G__5865;
}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"remove-consecutive-blank-lines?","remove-consecutive-blank-lines?",982824512).cljs$core$IFn$_invoke$arity$1(opts__$1))){
return cljfmt.core.remove_consecutive_blank_lines.call(null,G__5864);
} else {
return G__5864;
}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"remove-surrounding-whitespace?","remove-surrounding-whitespace?",-2083582887).cljs$core$IFn$_invoke$arity$1(opts__$1))){
return cljfmt.core.remove_surrounding_whitespace.call(null,G__5863);
} else {
return G__5863;
}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"insert-missing-whitespace?","insert-missing-whitespace?",-1012188573).cljs$core$IFn$_invoke$arity$1(opts__$1))){
return cljfmt.core.insert_missing_whitespace.call(null,G__5862);
} else {
return G__5862;
}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"remove-multiple-non-indenting-spaces?","remove-multiple-non-indenting-spaces?",-1486794728).cljs$core$IFn$_invoke$arity$1(opts__$1))){
return cljfmt.core.remove_multiple_non_indenting_spaces.call(null,G__5861);
} else {
return G__5861;
}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"indentation?","indentation?",-649129482).cljs$core$IFn$_invoke$arity$1(opts__$1))){
return cljfmt.core.reindent.call(null,G__5860,new cljs.core.Keyword(null,"indents","indents",-569647275).cljs$core$IFn$_invoke$arity$1(opts__$1),new cljs.core.Keyword(null,"alias-map","alias-map",-1075881570).cljs$core$IFn$_invoke$arity$1(opts__$1));
} else {
return G__5860;
}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"remove-trailing-whitespace?","remove-trailing-whitespace?",251206854).cljs$core$IFn$_invoke$arity$1(opts__$1))){
return cljfmt.core.remove_trailing_whitespace.call(null,G__5859);
} else {
return G__5859;
}
}));

(cljfmt.core.reformat_form.cljs$lang$maxFixedArity = 2);

cljfmt.core.reformat_string = (function cljfmt$core$reformat_string(var_args){
var G__5869 = arguments.length;
switch (G__5869) {
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
return cljfmt.core.reformat_string.call(null,form_string,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljfmt.core.reformat_string.cljs$core$IFn$_invoke$arity$2 = (function (form_string,options){
var parsed_form = rewrite_clj.parser.parse_string_all.call(null,form_string);
var alias_map = new cljs.core.Keyword(null,"alias-map","alias-map",-1075881570).cljs$core$IFn$_invoke$arity$1(options);
return rewrite_clj.node.string.call(null,cljfmt.core.reformat_form.call(null,parsed_form,(function (){var G__5870 = options;
if(cljs.core.truth_(alias_map)){
return cljs.core.assoc.call(null,G__5870,new cljs.core.Keyword(null,"alias-map","alias-map",-1075881570),alias_map);
} else {
return G__5870;
}
})()));
}));

(cljfmt.core.reformat_string.cljs$lang$maxFixedArity = 2);

cljfmt.core.default_line_separator = "\n";
cljfmt.core.normalize_newlines = (function cljfmt$core$normalize_newlines(s){
return clojure.string.replace.call(null,s,/\r\n/,"\n");
});
cljfmt.core.replace_newlines = (function cljfmt$core$replace_newlines(s,sep){
return clojure.string.replace.call(null,s,/\n/,sep);
});
cljfmt.core.find_line_separator = (function cljfmt$core$find_line_separator(s){
var or__5045__auto__ = cljs.core.re_find.call(null,/\r?\n/,s);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljfmt.core.default_line_separator;
}
});
cljfmt.core.wrap_normalize_newlines = (function cljfmt$core$wrap_normalize_newlines(f){
return (function (s){
var sep = cljfmt.core.find_line_separator.call(null,s);
return cljfmt.core.replace_newlines.call(null,f.call(null,cljfmt.core.normalize_newlines.call(null,s)),sep);
});
});

//# sourceMappingURL=core.js.map
