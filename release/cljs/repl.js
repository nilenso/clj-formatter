// Compiled by ClojureScript 1.11.60 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__11002){
var map__11003 = p__11002;
var map__11003__$1 = cljs.core.__destructure_map(map__11003);
var m = map__11003__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11003__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11003__$1,cljs.core.cst$kw$name);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = cljs.core.cst$kw$spec.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m))){
var seq__11004_11032 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__11005_11033 = null;
var count__11006_11034 = (0);
var i__11007_11035 = (0);
while(true){
if((i__11007_11035 < count__11006_11034)){
var f_11036 = chunk__11005_11033.cljs$core$IIndexed$_nth$arity$2(null,i__11007_11035);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_11036], 0));


var G__11037 = seq__11004_11032;
var G__11038 = chunk__11005_11033;
var G__11039 = count__11006_11034;
var G__11040 = (i__11007_11035 + (1));
seq__11004_11032 = G__11037;
chunk__11005_11033 = G__11038;
count__11006_11034 = G__11039;
i__11007_11035 = G__11040;
continue;
} else {
var temp__5804__auto___11041 = cljs.core.seq(seq__11004_11032);
if(temp__5804__auto___11041){
var seq__11004_11042__$1 = temp__5804__auto___11041;
if(cljs.core.chunked_seq_QMARK_(seq__11004_11042__$1)){
var c__5568__auto___11043 = cljs.core.chunk_first(seq__11004_11042__$1);
var G__11044 = cljs.core.chunk_rest(seq__11004_11042__$1);
var G__11045 = c__5568__auto___11043;
var G__11046 = cljs.core.count(c__5568__auto___11043);
var G__11047 = (0);
seq__11004_11032 = G__11044;
chunk__11005_11033 = G__11045;
count__11006_11034 = G__11046;
i__11007_11035 = G__11047;
continue;
} else {
var f_11048 = cljs.core.first(seq__11004_11042__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_11048], 0));


var G__11049 = cljs.core.next(seq__11004_11042__$1);
var G__11050 = null;
var G__11051 = (0);
var G__11052 = (0);
seq__11004_11032 = G__11049;
chunk__11005_11033 = G__11050;
count__11006_11034 = G__11051;
i__11007_11035 = G__11052;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_11053 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_11053], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_11053)))?cljs.core.second(arglists_11053):arglists_11053)], 0));
}
} else {
}
}

if(cljs.core.truth_(cljs.core.cst$kw$special_DASH_form.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,cljs.core.cst$kw$url)){
if(cljs.core.truth_(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$spec.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
var seq__11008_11054 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__11009_11055 = null;
var count__11010_11056 = (0);
var i__11011_11057 = (0);
while(true){
if((i__11011_11057 < count__11010_11056)){
var vec__11020_11058 = chunk__11009_11055.cljs$core$IIndexed$_nth$arity$2(null,i__11011_11057);
var name_11059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11020_11058,(0),null);
var map__11023_11060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11020_11058,(1),null);
var map__11023_11061__$1 = cljs.core.__destructure_map(map__11023_11060);
var doc_11062 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11023_11061__$1,cljs.core.cst$kw$doc);
var arglists_11063 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11023_11061__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_11059], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_11063], 0));

if(cljs.core.truth_(doc_11062)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_11062], 0));
} else {
}


var G__11064 = seq__11008_11054;
var G__11065 = chunk__11009_11055;
var G__11066 = count__11010_11056;
var G__11067 = (i__11011_11057 + (1));
seq__11008_11054 = G__11064;
chunk__11009_11055 = G__11065;
count__11010_11056 = G__11066;
i__11011_11057 = G__11067;
continue;
} else {
var temp__5804__auto___11068 = cljs.core.seq(seq__11008_11054);
if(temp__5804__auto___11068){
var seq__11008_11069__$1 = temp__5804__auto___11068;
if(cljs.core.chunked_seq_QMARK_(seq__11008_11069__$1)){
var c__5568__auto___11070 = cljs.core.chunk_first(seq__11008_11069__$1);
var G__11071 = cljs.core.chunk_rest(seq__11008_11069__$1);
var G__11072 = c__5568__auto___11070;
var G__11073 = cljs.core.count(c__5568__auto___11070);
var G__11074 = (0);
seq__11008_11054 = G__11071;
chunk__11009_11055 = G__11072;
count__11010_11056 = G__11073;
i__11011_11057 = G__11074;
continue;
} else {
var vec__11024_11075 = cljs.core.first(seq__11008_11069__$1);
var name_11076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11024_11075,(0),null);
var map__11027_11077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11024_11075,(1),null);
var map__11027_11078__$1 = cljs.core.__destructure_map(map__11027_11077);
var doc_11079 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11027_11078__$1,cljs.core.cst$kw$doc);
var arglists_11080 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11027_11078__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_11076], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_11080], 0));

if(cljs.core.truth_(doc_11079)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_11079], 0));
} else {
}


var G__11081 = cljs.core.next(seq__11008_11069__$1);
var G__11082 = null;
var G__11083 = (0);
var G__11084 = (0);
seq__11008_11054 = G__11081;
chunk__11009_11055 = G__11082;
count__11010_11056 = G__11083;
i__11011_11057 = G__11084;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__11028 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args,cljs.core.cst$kw$ret,cljs.core.cst$kw$fn], null));
var chunk__11029 = null;
var count__11030 = (0);
var i__11031 = (0);
while(true){
if((i__11031 < count__11030)){
var role = chunk__11029.cljs$core$IIndexed$_nth$arity$2(null,i__11031);
var temp__5804__auto___11085__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___11085__$1)){
var spec_11086 = temp__5804__auto___11085__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_11086)], 0));
} else {
}


var G__11087 = seq__11028;
var G__11088 = chunk__11029;
var G__11089 = count__11030;
var G__11090 = (i__11031 + (1));
seq__11028 = G__11087;
chunk__11029 = G__11088;
count__11030 = G__11089;
i__11031 = G__11090;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__11028);
if(temp__5804__auto____$1){
var seq__11028__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__11028__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__11028__$1);
var G__11091 = cljs.core.chunk_rest(seq__11028__$1);
var G__11092 = c__5568__auto__;
var G__11093 = cljs.core.count(c__5568__auto__);
var G__11094 = (0);
seq__11028 = G__11091;
chunk__11029 = G__11092;
count__11030 = G__11093;
i__11031 = G__11094;
continue;
} else {
var role = cljs.core.first(seq__11028__$1);
var temp__5804__auto___11095__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___11095__$2)){
var spec_11096 = temp__5804__auto___11095__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_11096)], 0));
} else {
}


var G__11097 = cljs.core.next(seq__11028__$1);
var G__11098 = null;
var G__11099 = (0);
var G__11100 = (0);
seq__11028 = G__11097;
chunk__11029 = G__11098;
count__11030 = G__11099;
i__11031 = G__11100;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,(((t instanceof cljs.core.ExceptionInfo))?cljs.core.cst$sym$cljs$core_SLASH_ExceptionInfo:(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$message,msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__11101 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__11102 = cljs.core.ex_cause(t);
via = G__11101;
t = G__11102;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$via,cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),cljs.core.cst$kw$trace,null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cause,root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.cst$kw$clojure$error_SLASH_phase.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$phase,phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__11105 = datafied_throwable;
var map__11105__$1 = cljs.core.__destructure_map(map__11105);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11105__$1,cljs.core.cst$kw$via);
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11105__$1,cljs.core.cst$kw$trace);
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11105__$1,cljs.core.cst$kw$phase,cljs.core.cst$kw$execution);
var map__11106 = cljs.core.last(via);
var map__11106__$1 = cljs.core.__destructure_map(map__11106);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11106__$1,cljs.core.cst$kw$type);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11106__$1,cljs.core.cst$kw$message);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11106__$1,cljs.core.cst$kw$data);
var map__11107 = data;
var map__11107__$1 = cljs.core.__destructure_map(map__11107);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11107__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems);
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11107__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_fn);
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11107__$1,cljs.core.cst$kw$cljs$spec$test$alpha_SLASH_caller);
var map__11108 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__11108__$1 = cljs.core.__destructure_map(map__11108);
var top_data = map__11108__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11108__$1,cljs.core.cst$kw$clojure$error_SLASH_source);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__11109 = phase;
var G__11109__$1 = (((G__11109 instanceof cljs.core.Keyword))?G__11109.fqn:null);
switch (G__11109__$1) {
case "read-source":
var map__11110 = data;
var map__11110__$1 = cljs.core.__destructure_map(map__11110);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11110__$1,cljs.core.cst$kw$clojure$error_SLASH_line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11110__$1,cljs.core.cst$kw$clojure$error_SLASH_column);
var G__11111 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__11111__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11111,cljs.core.cst$kw$clojure$error_SLASH_source,source):G__11111);
var G__11111__$2 = (cljs.core.truth_((function (){var fexpr__11112 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__11112.cljs$core$IFn$_invoke$arity$1 ? fexpr__11112.cljs$core$IFn$_invoke$arity$1(source) : fexpr__11112.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__11111__$1,cljs.core.cst$kw$clojure$error_SLASH_source):G__11111__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11111__$2,cljs.core.cst$kw$clojure$error_SLASH_cause,message);
} else {
return G__11111__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__11113 = top_data;
var G__11113__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11113,cljs.core.cst$kw$clojure$error_SLASH_source,source):G__11113);
var G__11113__$2 = (cljs.core.truth_((function (){var fexpr__11114 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__11114.cljs$core$IFn$_invoke$arity$1 ? fexpr__11114.cljs$core$IFn$_invoke$arity$1(source) : fexpr__11114.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__11113__$1,cljs.core.cst$kw$clojure$error_SLASH_source):G__11113__$1);
var G__11113__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11113__$2,cljs.core.cst$kw$clojure$error_SLASH_class,type):G__11113__$2);
var G__11113__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11113__$3,cljs.core.cst$kw$clojure$error_SLASH_cause,message):G__11113__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11113__$4,cljs.core.cst$kw$clojure$error_SLASH_spec,data);
} else {
return G__11113__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__11115 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11115,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11115,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11115,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11115,(3),null);
var G__11118 = top_data;
var G__11118__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11118,cljs.core.cst$kw$clojure$error_SLASH_line,line):G__11118);
var G__11118__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11118__$1,cljs.core.cst$kw$clojure$error_SLASH_source,file):G__11118__$1);
var G__11118__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11118__$2,cljs.core.cst$kw$clojure$error_SLASH_symbol,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__11118__$2);
var G__11118__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11118__$3,cljs.core.cst$kw$clojure$error_SLASH_class,type):G__11118__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11118__$4,cljs.core.cst$kw$clojure$error_SLASH_cause,message);
} else {
return G__11118__$4;
}

break;
case "execution":
var vec__11119 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11119,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11119,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11119,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11119,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__11104_SHARP_){
var or__5045__auto__ = (p1__11104_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__11122 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__11122.cljs$core$IFn$_invoke$arity$1 ? fexpr__11122.cljs$core$IFn$_invoke$arity$1(p1__11104_SHARP_) : fexpr__11122.call(null,p1__11104_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__11123 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clojure$error_SLASH_class,type], null);
var G__11123__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11123,cljs.core.cst$kw$clojure$error_SLASH_line,err_line):G__11123);
var G__11123__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11123__$1,cljs.core.cst$kw$clojure$error_SLASH_cause,message):G__11123__$1);
var G__11123__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11123__$2,cljs.core.cst$kw$clojure$error_SLASH_symbol,(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__11123__$2);
var G__11123__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11123__$3,cljs.core.cst$kw$clojure$error_SLASH_source,file__$1):G__11123__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11123__$4,cljs.core.cst$kw$clojure$error_SLASH_spec,data);
} else {
return G__11123__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11109__$1)].join('')));

}
})(),cljs.core.cst$kw$clojure$error_SLASH_phase,phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__11127){
var map__11128 = p__11127;
var map__11128__$1 = cljs.core.__destructure_map(map__11128);
var triage_data = map__11128__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11128__$1,cljs.core.cst$kw$clojure$error_SLASH_phase);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11128__$1,cljs.core.cst$kw$clojure$error_SLASH_source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11128__$1,cljs.core.cst$kw$clojure$error_SLASH_line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11128__$1,cljs.core.cst$kw$clojure$error_SLASH_column);
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11128__$1,cljs.core.cst$kw$clojure$error_SLASH_symbol);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11128__$1,cljs.core.cst$kw$clojure$error_SLASH_class);
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11128__$1,cljs.core.cst$kw$clojure$error_SLASH_cause);
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11128__$1,cljs.core.cst$kw$clojure$error_SLASH_spec);
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__11129 = phase;
var G__11129__$1 = (((G__11129 instanceof cljs.core.Keyword))?G__11129.fqn:null);
switch (G__11129__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__11130 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__11131 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__11132 = loc;
var G__11133 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11134_11167 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11135_11168 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11136_11169 = true;
var _STAR_print_fn_STAR__temp_val__11137_11170 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11136_11169);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11137_11170);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__11125_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__11125_SHARP_,cljs.core.cst$kw$in);
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11135_11168);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11134_11167);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__11130,G__11131,G__11132,G__11133) : format.call(null,G__11130,G__11131,G__11132,G__11133));

break;
case "macroexpansion":
var G__11138 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__11139 = cause_type;
var G__11140 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__11141 = loc;
var G__11142 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__11138,G__11139,G__11140,G__11141,G__11142) : format.call(null,G__11138,G__11139,G__11140,G__11141,G__11142));

break;
case "compile-syntax-check":
var G__11143 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__11144 = cause_type;
var G__11145 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__11146 = loc;
var G__11147 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__11143,G__11144,G__11145,G__11146,G__11147) : format.call(null,G__11143,G__11144,G__11145,G__11146,G__11147));

break;
case "compilation":
var G__11148 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__11149 = cause_type;
var G__11150 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__11151 = loc;
var G__11152 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__11148,G__11149,G__11150,G__11151,G__11152) : format.call(null,G__11148,G__11149,G__11150,G__11151,G__11152));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__11153 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__11154 = symbol;
var G__11155 = loc;
var G__11156 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11157_11171 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11158_11172 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11159_11173 = true;
var _STAR_print_fn_STAR__temp_val__11160_11174 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11159_11173);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11160_11174);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__11126_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__11126_SHARP_,cljs.core.cst$kw$in);
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11158_11172);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11157_11171);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__11153,G__11154,G__11155,G__11156) : format.call(null,G__11153,G__11154,G__11155,G__11156));
} else {
var G__11161 = "Execution error%s at %s(%s).\n%s\n";
var G__11162 = cause_type;
var G__11163 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__11164 = loc;
var G__11165 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__11161,G__11162,G__11163,G__11164,G__11165) : format.call(null,G__11161,G__11162,G__11163,G__11164,G__11165));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11129__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});
