// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('clojure.browser.repl');
goog.require('cljs.core');
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
clojure.browser.repl.xpc_connection = cljs.core.atom.call(null,null);
clojure.browser.repl.parent_connected_QMARK_ = cljs.core.atom.call(null,false);
clojure.browser.repl.print_queue = [];
clojure.browser.repl.flush_print_queue_BANG_ = (function clojure$browser$repl$flush_print_queue_BANG_(conn){
var seq__1623_1627 = cljs.core.seq.call(null,clojure.browser.repl.print_queue);
var chunk__1624_1628 = null;
var count__1625_1629 = (0);
var i__1626_1630 = (0);
while(true){
if((i__1626_1630 < count__1625_1629)){
var str_1631 = cljs.core._nth.call(null,chunk__1624_1628,i__1626_1630);
clojure.browser.net.transmit.call(null,conn,new cljs.core.Keyword(null,"print","print",1299562414),goog.json.serialize(({"repl": clojure.browser.repl._STAR_repl_STAR_, "str": str_1631})));


var G__1632 = seq__1623_1627;
var G__1633 = chunk__1624_1628;
var G__1634 = count__1625_1629;
var G__1635 = (i__1626_1630 + (1));
seq__1623_1627 = G__1632;
chunk__1624_1628 = G__1633;
count__1625_1629 = G__1634;
i__1626_1630 = G__1635;
continue;
} else {
var temp__5804__auto___1636 = cljs.core.seq.call(null,seq__1623_1627);
if(temp__5804__auto___1636){
var seq__1623_1637__$1 = temp__5804__auto___1636;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1623_1637__$1)){
var c__5568__auto___1638 = cljs.core.chunk_first.call(null,seq__1623_1637__$1);
var G__1639 = cljs.core.chunk_rest.call(null,seq__1623_1637__$1);
var G__1640 = c__5568__auto___1638;
var G__1641 = cljs.core.count.call(null,c__5568__auto___1638);
var G__1642 = (0);
seq__1623_1627 = G__1639;
chunk__1624_1628 = G__1640;
count__1625_1629 = G__1641;
i__1626_1630 = G__1642;
continue;
} else {
var str_1643 = cljs.core.first.call(null,seq__1623_1637__$1);
clojure.browser.net.transmit.call(null,conn,new cljs.core.Keyword(null,"print","print",1299562414),goog.json.serialize(({"repl": clojure.browser.repl._STAR_repl_STAR_, "str": str_1643})));


var G__1644 = cljs.core.next.call(null,seq__1623_1637__$1);
var G__1645 = null;
var G__1646 = (0);
var G__1647 = (0);
seq__1623_1627 = G__1644;
chunk__1624_1628 = G__1645;
count__1625_1629 = G__1646;
i__1626_1630 = G__1647;
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
clojure.browser.repl.print_queue.push(cljs.core.pr_str.call(null,data));

if(cljs.core.truth_(cljs.core.deref.call(null,clojure.browser.repl.parent_connected_QMARK_))){
return clojure.browser.repl.flush_print_queue_BANG_.call(null,cljs.core.deref.call(null,clojure.browser.repl.xpc_connection));
} else {
return null;
}
});
(cljs.core._STAR_print_newline_STAR_ = true);
cljs.core.set_print_fn_BANG_.call(null,clojure.browser.repl.repl_print);
cljs.core.set_print_err_fn_BANG_.call(null,clojure.browser.repl.repl_print);
clojure.browser.repl.get_ua_product = (function clojure$browser$repl$get_ua_product(){
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
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
var result = (function (){try{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.str.cljs$core$IFn$_invoke$arity$1(eval(block))], null);
}catch (e1648){var e = e1648;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.repl.error__GT_str.call(null,e)], null);
}})();
return cljs.core.pr_str.call(null,result);
});
clojure.browser.repl.send_result = (function clojure$browser$repl$send_result(connection,url,data){
return clojure.browser.net.transmit.call(null,connection,url,"POST",data,null,(0));
});
/**
 * Send data to be printed in the REPL. If there is an error, try again
 *   up to 10 times.
 */
clojure.browser.repl.send_print = (function clojure$browser$repl$send_print(var_args){
var G__1650 = arguments.length;
switch (G__1650) {
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
return clojure.browser.repl.send_print.call(null,url,data,(0));
}));

(clojure.browser.repl.send_print.cljs$core$IFn$_invoke$arity$3 = (function (url,data,n){
var conn = clojure.browser.net.xhr_connection.call(null);
clojure.browser.event.listen.call(null,conn,new cljs.core.Keyword(null,"error","error",-978969032),(function (_){
if((n < (10))){
return clojure.browser.repl.send_print.call(null,url,data,(n + (1)));
} else {
return console.log(["Could not send ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)," after ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)," attempts."].join(''));
}
}));

return clojure.browser.net.transmit.call(null,conn,url,"POST",data,null,(0));
}));

(clojure.browser.repl.send_print.cljs$lang$maxFixedArity = 3);

clojure.browser.repl.order = cljs.core.atom.call(null,(0));
clojure.browser.repl.wrap_message = (function clojure$browser$repl$wrap_message(repl,t,data){
return cljs.core.pr_str.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"repl","repl",-35398667),repl,new cljs.core.Keyword(null,"type","type",1174270348),t,new cljs.core.Keyword(null,"content","content",15833224),data,new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.swap_BANG_.call(null,clojure.browser.repl.order,cljs.core.inc)], null));
});
/**
 * Start the REPL server connection process. This process runs inside the
 *   embedded iframe.
 */
clojure.browser.repl.start_evaluator = (function clojure$browser$repl$start_evaluator(url){
var temp__5802__auto__ = clojure.browser.net.xpc_connection.call(null);
if(cljs.core.truth_(temp__5802__auto__)){
var repl_connection = temp__5802__auto__;
var connection = clojure.browser.net.xhr_connection.call(null);
var repl_connected_QMARK_ = cljs.core.atom.call(null,false);
var try_handshake = (function clojure$browser$repl$start_evaluator_$_try_handshake(){
if(cljs.core.truth_(cljs.core.deref.call(null,repl_connected_QMARK_))){
return null;
} else {
return clojure.browser.net.transmit.call(null,repl_connection,new cljs.core.Keyword(null,"start-handshake","start-handshake",359692894),null);
}
});
clojure.browser.net.connect.call(null,repl_connection,try_handshake);

clojure.browser.net.register_service.call(null,repl_connection,new cljs.core.Keyword(null,"ack-handshake","ack-handshake",1651340387),(function (_){
if(cljs.core.truth_(cljs.core.deref.call(null,repl_connected_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_.call(null,repl_connected_QMARK_,true);

return clojure.browser.repl.send_result.call(null,connection,url,clojure.browser.repl.wrap_message.call(null,null,new cljs.core.Keyword(null,"ready","ready",1086465795),"ready"));
}
}));

clojure.browser.event.listen.call(null,connection,new cljs.core.Keyword(null,"error","error",-978969032),(function (e){
cljs.core.reset_BANG_.call(null,repl_connected_QMARK_,false);

clojure.browser.net.transmit.call(null,repl_connection,new cljs.core.Keyword(null,"reconnect","reconnect",596420411),null);

return setTimeout(try_handshake,(1000));
}));

clojure.browser.event.listen.call(null,connection,new cljs.core.Keyword(null,"success","success",1890645906),(function (e){
return clojure.browser.net.transmit.call(null,repl_connection,new cljs.core.Keyword(null,"evaluate-javascript","evaluate-javascript",-315749780),e.currentTarget.getResponseText(cljs.core.List.EMPTY));
}));

clojure.browser.net.register_service.call(null,repl_connection,new cljs.core.Keyword(null,"send-result","send-result",35388249),(function (json){
var obj = goog.json.parse(json);
var repl = clojure.browser.repl.goog$module$goog$object.get.call(null,obj,"repl");
var result = clojure.browser.repl.goog$module$goog$object.get.call(null,obj,"result");
return clojure.browser.repl.send_result.call(null,connection,url,clojure.browser.repl.wrap_message.call(null,repl,new cljs.core.Keyword(null,"result","result",1415092211),result));
}));

return clojure.browser.net.register_service.call(null,repl_connection,new cljs.core.Keyword(null,"print","print",1299562414),(function (json){
var obj = goog.json.parse(json);
var repl = clojure.browser.repl.goog$module$goog$object.get.call(null,obj,"repl");
var str = clojure.browser.repl.goog$module$goog$object.get.call(null,obj,"str");
return clojure.browser.repl.send_print.call(null,url,clojure.browser.repl.wrap_message.call(null,repl,new cljs.core.Keyword(null,"print","print",1299562414),str));
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
var loaded = cljs.core.atom.call(null,false);
var onload = (function (){
if(cljs.core.truth_((function (){var and__5043__auto__ = clojure.browser.repl.load_queue;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.deref.call(null,loaded) === false;
} else {
return and__5043__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,loaded,cljs.core.not);

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
var script__$1 = (function (){var G__1652 = script;
clojure.browser.repl.goog$module$goog$object.set.call(null,G__1652,"type","text/javascript");

clojure.browser.repl.goog$module$goog$object.set.call(null,G__1652,"onload",onload);

clojure.browser.repl.goog$module$goog$object.set.call(null,G__1652,"onreadystatechange",onload);

return G__1652;
})();
if((opt_sourceText == null)){
var G__1653 = script__$1;
clojure.browser.repl.goog$module$goog$object.set.call(null,G__1653,"src",src);

return G__1653;
} else {
var G__1654 = script__$1;
goog.dom.setTextContent(G__1654,opt_sourceText);

return G__1654;
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
if(cljs.core._EQ_.call(null,reload,"reload-all")){
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
var path_1655 = goog.debugLoader_.getPathFromDeps_(src);
clojure.browser.repl.goog$module$goog$object.remove.call(null,goog.debugLoader_.written_,path_1655);

clojure.browser.repl.goog$module$goog$object.remove.call(null,goog.debugLoader_.written_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_1655)].join(''));
} else {
var path_1656 = clojure.browser.repl.goog$module$goog$object.get.call(null,goog.dependencies_.nameToPath,src);
clojure.browser.repl.goog$module$goog$object.remove.call(null,goog.dependencies_.visited,path_1656);

clojure.browser.repl.goog$module$goog$object.remove.call(null,goog.dependencies_.written,path_1656);

clojure.browser.repl.goog$module$goog$object.remove.call(null,goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_1656)].join(''));
}
} else {
}

var ret = goog.require__(src);
if(cljs.core._EQ_.call(null,reload,"reload-all")){
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
var connected_QMARK_ = cljs.core.atom.call(null,false);
var repl_connection = clojure.browser.net.xpc_connection.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"peer_uri","peer_uri",910305997),repl_server_url], null));
cljs.core.swap_BANG_.call(null,clojure.browser.repl.xpc_connection,cljs.core.constantly.call(null,repl_connection));

clojure.browser.net.register_service.call(null,repl_connection,new cljs.core.Keyword(null,"start-handshake","start-handshake",359692894),(function (_){
if(cljs.core.truth_(cljs.core.deref.call(null,connected_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_.call(null,connected_QMARK_,true);

cljs.core.reset_BANG_.call(null,clojure.browser.repl.parent_connected_QMARK_,true);

clojure.browser.net.transmit.call(null,repl_connection,new cljs.core.Keyword(null,"ack-handshake","ack-handshake",1651340387),null);

return clojure.browser.repl.flush_print_queue_BANG_.call(null,repl_connection);
}
}));

clojure.browser.net.register_service.call(null,repl_connection,new cljs.core.Keyword(null,"reconnect","reconnect",596420411),(function (_){
cljs.core.reset_BANG_.call(null,connected_QMARK_,false);

return cljs.core.reset_BANG_.call(null,clojure.browser.repl.parent_connected_QMARK_,false);
}));

clojure.browser.net.register_service.call(null,repl_connection,new cljs.core.Keyword(null,"evaluate-javascript","evaluate-javascript",-315749780),(function (json){
var obj = goog.json.parse(json);
var repl = clojure.browser.repl.goog$module$goog$object.get.call(null,obj,"repl");
var form = clojure.browser.repl.goog$module$goog$object.get.call(null,obj,"form");
return clojure.browser.net.transmit.call(null,repl_connection,new cljs.core.Keyword(null,"send-result","send-result",35388249),goog.json.serialize(({"repl": repl, "result": (function (){var _STAR_repl_STAR__orig_val__1657 = clojure.browser.repl._STAR_repl_STAR_;
var _STAR_repl_STAR__temp_val__1658 = repl;
(clojure.browser.repl._STAR_repl_STAR_ = _STAR_repl_STAR__temp_val__1658);

try{return clojure.browser.repl.evaluate_javascript.call(null,repl_connection,form);
}finally {(clojure.browser.repl._STAR_repl_STAR_ = _STAR_repl_STAR__orig_val__1657);
}})()})));
}));

clojure.browser.net.connect.call(null,repl_connection,cljs.core.constantly.call(null,null),(function (iframe){
return (iframe.style.display = "none");
}));

clojure.browser.repl.bootstrap.call(null);

return repl_connection;
});

//# sourceMappingURL=repl.js.map
