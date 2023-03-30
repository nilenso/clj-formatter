// Compiled by ClojureScript 1.11.60 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('clojure.browser.repl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('goog.json');
goog.require('goog.userAgent.product');
goog.require('clojure.browser.net');
goog.require('clojure.browser.event');
goog.require('cljs.repl');
goog.require('goog.object');
goog.scope(function(){
clojure.browser.repl.goog$module$goog$object = goog.module.get('goog.object');
});
goog.require('goog.array');
goog.scope(function(){
clojure.browser.repl.goog$module$goog$array = goog.module.get('goog.array');
});

/**
 * @define {string}
 */
clojure.browser.repl.HOST = goog.define("clojure.browser.repl.HOST","localhost");

/**
 * @define {number}
 */
clojure.browser.repl.PORT = goog.define("clojure.browser.repl.PORT",(9000));
clojure.browser.repl._STAR_repl_STAR_ = null;
clojure.browser.repl.xpc_connection = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
clojure.browser.repl.parent_connected_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
clojure.browser.repl.print_queue = [];
clojure.browser.repl.flush_print_queue_BANG_ = (function clojure$browser$repl$flush_print_queue_BANG_(conn){
var seq__11177_11181 = cljs.core.seq(clojure.browser.repl.print_queue);
var chunk__11178_11182 = null;
var count__11179_11183 = (0);
var i__11180_11184 = (0);
while(true){
if((i__11180_11184 < count__11179_11183)){
var str_11185 = chunk__11178_11182.cljs$core$IIndexed$_nth$arity$2(null,i__11180_11184);
clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.cst$kw$print,goog.json.serialize(({"repl": clojure.browser.repl._STAR_repl_STAR_, "str": str_11185})));


var G__11186 = seq__11177_11181;
var G__11187 = chunk__11178_11182;
var G__11188 = count__11179_11183;
var G__11189 = (i__11180_11184 + (1));
seq__11177_11181 = G__11186;
chunk__11178_11182 = G__11187;
count__11179_11183 = G__11188;
i__11180_11184 = G__11189;
continue;
} else {
var temp__5804__auto___11190 = cljs.core.seq(seq__11177_11181);
if(temp__5804__auto___11190){
var seq__11177_11191__$1 = temp__5804__auto___11190;
if(cljs.core.chunked_seq_QMARK_(seq__11177_11191__$1)){
var c__5568__auto___11192 = cljs.core.chunk_first(seq__11177_11191__$1);
var G__11193 = cljs.core.chunk_rest(seq__11177_11191__$1);
var G__11194 = c__5568__auto___11192;
var G__11195 = cljs.core.count(c__5568__auto___11192);
var G__11196 = (0);
seq__11177_11181 = G__11193;
chunk__11178_11182 = G__11194;
count__11179_11183 = G__11195;
i__11180_11184 = G__11196;
continue;
} else {
var str_11197 = cljs.core.first(seq__11177_11191__$1);
clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.cst$kw$print,goog.json.serialize(({"repl": clojure.browser.repl._STAR_repl_STAR_, "str": str_11197})));


var G__11198 = cljs.core.next(seq__11177_11191__$1);
var G__11199 = null;
var G__11200 = (0);
var G__11201 = (0);
seq__11177_11181 = G__11198;
chunk__11178_11182 = G__11199;
count__11179_11183 = G__11200;
i__11180_11184 = G__11201;
continue;
}
} else {
}
}
break;
}

return clojure.browser.repl.goog$module$goog$array.clear.call(null,clojure.browser.repl.print_queue);
});
clojure.browser.repl.repl_print = (function clojure$browser$repl$repl_print(data){
clojure.browser.repl.print_queue.push(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0)));

if(cljs.core.truth_(cljs.core.deref(clojure.browser.repl.parent_connected_QMARK_))){
return clojure.browser.repl.flush_print_queue_BANG_(cljs.core.deref(clojure.browser.repl.xpc_connection));
} else {
return null;
}
});
(cljs.core._STAR_print_newline_STAR_ = true);
cljs.core.set_print_fn_BANG_(clojure.browser.repl.repl_print);
cljs.core.set_print_err_fn_BANG_(clojure.browser.repl.repl_print);
clojure.browser.repl.get_ua_product = (function clojure$browser$repl$get_ua_product(){
if(goog.userAgent.product.SAFARI){
return cljs.core.cst$kw$safari;
} else {
if(goog.userAgent.product.CHROME){
return cljs.core.cst$kw$chrome;
} else {
if(goog.userAgent.product.FIREFOX){
return cljs.core.cst$kw$firefox;
} else {
if(goog.userAgent.product.IE){
return cljs.core.cst$kw$ie;
} else {
return null;
}
}
}
}
});
/**
 * Process a single block of JavaScript received from the server
 */
clojure.browser.repl.evaluate_javascript = (function clojure$browser$repl$evaluate_javascript(conn,block){
var result = (function (){try{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$status,cljs.core.cst$kw$success,cljs.core.cst$kw$value,cljs.core.str.cljs$core$IFn$_invoke$arity$1(eval(block))], null);
}catch (e11202){var e = e11202;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$status,cljs.core.cst$kw$exception,cljs.core.cst$kw$value,cljs.repl.error__GT_str(e)], null);
}})();
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));
});
clojure.browser.repl.send_result = (function clojure$browser$repl$send_result(connection,url,data){
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$6(connection,url,"POST",data,null,(0));
});
/**
 * Send data to be printed in the REPL. If there is an error, try again
 *   up to 10 times.
 */
clojure.browser.repl.send_print = (function clojure$browser$repl$send_print(var_args){
var G__11204 = arguments.length;
switch (G__11204) {
case 2:
return clojure.browser.repl.send_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.browser.repl.send_print.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.browser.repl.send_print.cljs$core$IFn$_invoke$arity$2 = (function (url,data){
return clojure.browser.repl.send_print.cljs$core$IFn$_invoke$arity$3(url,data,(0));
}));

(clojure.browser.repl.send_print.cljs$core$IFn$_invoke$arity$3 = (function (url,data,n){
var conn = clojure.browser.net.xhr_connection();
clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.cst$kw$error,(function (_){
if((n < (10))){
return clojure.browser.repl.send_print.cljs$core$IFn$_invoke$arity$3(url,data,(n + (1)));
} else {
return console.log(["Could not send ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)," after ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)," attempts."].join(''));
}
}));

return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$6(conn,url,"POST",data,null,(0));
}));

(clojure.browser.repl.send_print.cljs$lang$maxFixedArity = 3);

clojure.browser.repl.order = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
clojure.browser.repl.wrap_message = (function clojure$browser$repl$wrap_message(repl,t,data){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$repl,repl,cljs.core.cst$kw$type,t,cljs.core.cst$kw$content,data,cljs.core.cst$kw$order,cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(clojure.browser.repl.order,cljs.core.inc)], null)], 0));
});
/**
 * Start the REPL server connection process. This process runs inside the
 *   embedded iframe.
 */
clojure.browser.repl.start_evaluator = (function clojure$browser$repl$start_evaluator(url){
var temp__5802__auto__ = clojure.browser.net.xpc_connection.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_(temp__5802__auto__)){
var repl_connection = temp__5802__auto__;
var connection = clojure.browser.net.xhr_connection();
var repl_connected_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var try_handshake = (function clojure$browser$repl$start_evaluator_$_try_handshake(){
if(cljs.core.truth_(cljs.core.deref(repl_connected_QMARK_))){
return null;
} else {
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.cst$kw$start_DASH_handshake,null);
}
});
clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$2(repl_connection,try_handshake);

clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.cst$kw$ack_DASH_handshake,(function (_){
if(cljs.core.truth_(cljs.core.deref(repl_connected_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_(repl_connected_QMARK_,true);

return clojure.browser.repl.send_result(connection,url,clojure.browser.repl.wrap_message(null,cljs.core.cst$kw$ready,"ready"));
}
}));

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(connection,cljs.core.cst$kw$error,(function (e){
cljs.core.reset_BANG_(repl_connected_QMARK_,false);

clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.cst$kw$reconnect,null);

return setTimeout(try_handshake,(1000));
}));

clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(connection,cljs.core.cst$kw$success,(function (e){
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.cst$kw$evaluate_DASH_javascript,e.currentTarget.getResponseText(cljs.core.List.EMPTY));
}));

clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.cst$kw$send_DASH_result,(function (json){
var obj = goog.json.parse(json);
var repl = clojure.browser.repl.goog$module$goog$object.get.call(null,obj,"repl");
var result = clojure.browser.repl.goog$module$goog$object.get.call(null,obj,"result");
return clojure.browser.repl.send_result(connection,url,clojure.browser.repl.wrap_message(repl,cljs.core.cst$kw$result,result));
}));

return clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.cst$kw$print,(function (json){
var obj = goog.json.parse(json);
var repl = clojure.browser.repl.goog$module$goog$object.get.call(null,obj,"repl");
var str = clojure.browser.repl.goog$module$goog$object.get.call(null,obj,"str");
return clojure.browser.repl.send_print.cljs$core$IFn$_invoke$arity$2(url,clojure.browser.repl.wrap_message(repl,cljs.core.cst$kw$print,str));
}));
} else {
return alert("No 'xpc' param provided to child iframe.");
}
});
clojure.browser.repl.load_queue = null;
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
clojure.browser.repl.bootstrap = (function clojure$browser$repl$bootstrap(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
(goog.require__ = goog.require);

(goog.isProvided_ = (function (name){
return false;
}));

goog.constructNamespace_("cljs.user");

(goog.writeScriptTag__ = (function (src,opt_sourceText){
var loaded = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var onload = (function (){
if(cljs.core.truth_((function (){var and__5043__auto__ = clojure.browser.repl.load_queue;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.deref(loaded) === false;
} else {
return and__5043__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(loaded,cljs.core.not);

if((clojure.browser.repl.load_queue.length === (0))){
return (clojure.browser.repl.load_queue = null);
} else {
return goog.writeScriptTag__.apply(null,clojure.browser.repl.load_queue.shift());
}
} else {
return null;
}
});
return document.body.appendChild((function (){var script = document.createElement("script");
var script__$1 = (function (){var G__11206 = script;
clojure.browser.repl.goog$module$goog$object.set.call(null,G__11206,"type","text/javascript");

clojure.browser.repl.goog$module$goog$object.set.call(null,G__11206,"onload",onload);

clojure.browser.repl.goog$module$goog$object.set.call(null,G__11206,"onreadystatechange",onload);

return G__11206;
})();
if((opt_sourceText == null)){
var G__11207 = script__$1;
clojure.browser.repl.goog$module$goog$object.set.call(null,G__11207,"src",src);

return G__11207;
} else {
var G__11208 = script__$1;
goog.dom.setTextContent(G__11208,opt_sourceText);

return G__11208;
}
})());
}));

(goog.writeScriptTag_ = (function (src,opt_sourceText){
if(cljs.core.truth_(clojure.browser.repl.load_queue)){
return clojure.browser.repl.load_queue.push([src,opt_sourceText]);
} else {
(clojure.browser.repl.load_queue = []);

return goog.writeScriptTag__(src,opt_sourceText);
}
}));

if(cljs.core.truth_(goog.debugLoader_)){
(CLOSURE_IMPORT_SCRIPT = goog.writeScriptTag_);
} else {
}

return (goog.require = (function (src,reload){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(reload,"reload-all")){
(goog.cljsReloadAll_ = true);
} else {
}

var reload_QMARK_ = (function (){var or__5045__auto__ = reload;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.cljsReloadAll_;
}
})();
if(cljs.core.truth_(reload_QMARK_)){
if((!((goog.debugLoader_ == null)))){
var path_11215 = goog.debugLoader_.getPathFromDeps_(src);
var G__11209_11216 = goog.debugLoader_.written_;
var G__11210_11217 = path_11215;
clojure.browser.repl.goog$module$goog$object.remove.call(null,G__11209_11216,G__11210_11217);

var G__11211_11218 = goog.debugLoader_.written_;
var G__11212_11219 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_11215)].join('');
clojure.browser.repl.goog$module$goog$object.remove.call(null,G__11211_11218,G__11212_11219);
} else {
var path_11220 = clojure.browser.repl.goog$module$goog$object.get.call(null,goog.dependencies_.nameToPath,src);
clojure.browser.repl.goog$module$goog$object.remove.call(null,goog.dependencies_.visited,path_11220);

clojure.browser.repl.goog$module$goog$object.remove.call(null,goog.dependencies_.written,path_11220);

var G__11213_11221 = goog.dependencies_.written;
var G__11214_11222 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_11220)].join('');
clojure.browser.repl.goog$module$goog$object.remove.call(null,G__11213_11221,G__11214_11222);
}
} else {
}

var ret = goog.require__(src);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(reload,"reload-all")){
(goog.cljsReloadAll_ = false);
} else {
}

if(cljs.core.truth_(goog.isInModuleLoader_())){
return goog.module.getInternal_(src);
} else {
return ret;
}
}));
}
});
/**
 * Connects to a REPL server from an HTML document. After the
 *   connection is made, the REPL will evaluate forms in the context of
 *   the document that called this function.
 */
clojure.browser.repl.connect = (function clojure$browser$repl$connect(repl_server_url){
var connected_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var repl_connection = clojure.browser.net.xpc_connection.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$peer_uri,repl_server_url], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(clojure.browser.repl.xpc_connection,cljs.core.constantly(repl_connection));

clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.cst$kw$start_DASH_handshake,(function (_){
if(cljs.core.truth_(cljs.core.deref(connected_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_(connected_QMARK_,true);

cljs.core.reset_BANG_(clojure.browser.repl.parent_connected_QMARK_,true);

clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.cst$kw$ack_DASH_handshake,null);

return clojure.browser.repl.flush_print_queue_BANG_(repl_connection);
}
}));

clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.cst$kw$reconnect,(function (_){
cljs.core.reset_BANG_(connected_QMARK_,false);

return cljs.core.reset_BANG_(clojure.browser.repl.parent_connected_QMARK_,false);
}));

clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.cst$kw$evaluate_DASH_javascript,(function (json){
var obj = goog.json.parse(json);
var repl = clojure.browser.repl.goog$module$goog$object.get.call(null,obj,"repl");
var form = clojure.browser.repl.goog$module$goog$object.get.call(null,obj,"form");
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.cst$kw$send_DASH_result,goog.json.serialize(({"repl": repl, "result": (function (){var _STAR_repl_STAR__orig_val__11223 = clojure.browser.repl._STAR_repl_STAR_;
var _STAR_repl_STAR__temp_val__11224 = repl;
(clojure.browser.repl._STAR_repl_STAR_ = _STAR_repl_STAR__temp_val__11224);

try{return clojure.browser.repl.evaluate_javascript(repl_connection,form);
}finally {(clojure.browser.repl._STAR_repl_STAR_ = _STAR_repl_STAR__orig_val__11223);
}})()})));
}));

clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constantly(null),(function (iframe){
return (iframe.style.display = "none");
}));

clojure.browser.repl.bootstrap();

return repl_connection;
});
