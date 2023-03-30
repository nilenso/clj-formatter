// Compiled by ClojureScript 1.11.60 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.browser.event');
goog.require('goog.json');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.WebSocket');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.Uri');
goog.require('goog.object');
goog.scope(function(){
clojure.browser.net.goog$module$goog$object = goog.module.get('goog.object');
});
clojure.browser.net._STAR_timeout_STAR_ = (10000);
clojure.browser.net.event_types = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__9709){
var vec__9710 = p__9709;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9710,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9710,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v], null);
}),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(goog.net.EventType)], 0))));

/**
 * @interface
 */
clojure.browser.net.IConnection = function(){};

var clojure$browser$net$IConnection$connect$dyn_9717 = (function() {
var G__9718 = null;
var G__9718__1 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (clojure.browser.net.connect[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (clojure.browser.net.connect["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IConnection.connect",this$);
}
}
});
var G__9718__2 = (function (this$,opt1){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (clojure.browser.net.connect[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,opt1) : m__5394__auto__.call(null,this$,opt1));
} else {
var m__5392__auto__ = (clojure.browser.net.connect["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,opt1) : m__5392__auto__.call(null,this$,opt1));
} else {
throw cljs.core.missing_protocol("IConnection.connect",this$);
}
}
});
var G__9718__3 = (function (this$,opt1,opt2){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (clojure.browser.net.connect[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(this$,opt1,opt2) : m__5394__auto__.call(null,this$,opt1,opt2));
} else {
var m__5392__auto__ = (clojure.browser.net.connect["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(this$,opt1,opt2) : m__5392__auto__.call(null,this$,opt1,opt2));
} else {
throw cljs.core.missing_protocol("IConnection.connect",this$);
}
}
});
var G__9718__4 = (function (this$,opt1,opt2,opt3){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (clojure.browser.net.connect[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(this$,opt1,opt2,opt3) : m__5394__auto__.call(null,this$,opt1,opt2,opt3));
} else {
var m__5392__auto__ = (clojure.browser.net.connect["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(this$,opt1,opt2,opt3) : m__5392__auto__.call(null,this$,opt1,opt2,opt3));
} else {
throw cljs.core.missing_protocol("IConnection.connect",this$);
}
}
});
G__9718 = function(this$,opt1,opt2,opt3){
switch(arguments.length){
case 1:
return G__9718__1.call(this,this$);
case 2:
return G__9718__2.call(this,this$,opt1);
case 3:
return G__9718__3.call(this,this$,opt1,opt2);
case 4:
return G__9718__4.call(this,this$,opt1,opt2,opt3);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__9718.cljs$core$IFn$_invoke$arity$1 = G__9718__1;
G__9718.cljs$core$IFn$_invoke$arity$2 = G__9718__2;
G__9718.cljs$core$IFn$_invoke$arity$3 = G__9718__3;
G__9718.cljs$core$IFn$_invoke$arity$4 = G__9718__4;
return G__9718;
})()
;
clojure.browser.net.connect = (function clojure$browser$net$connect(var_args){
var G__9714 = arguments.length;
switch (G__9714) {
case 1:
return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((((!((this$ == null)))) && ((!((this$.clojure$browser$net$IConnection$connect$arity$1 == null)))))){
return this$.clojure$browser$net$IConnection$connect$arity$1(this$);
} else {
return clojure$browser$net$IConnection$connect$dyn_9717.cljs$core$IFn$_invoke$arity$1(this$);
}
}));

(clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$2 = (function (this$,opt1){
if((((!((this$ == null)))) && ((!((this$.clojure$browser$net$IConnection$connect$arity$2 == null)))))){
return this$.clojure$browser$net$IConnection$connect$arity$2(this$,opt1);
} else {
return clojure$browser$net$IConnection$connect$dyn_9717.cljs$core$IFn$_invoke$arity$2(this$,opt1);
}
}));

(clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$3 = (function (this$,opt1,opt2){
if((((!((this$ == null)))) && ((!((this$.clojure$browser$net$IConnection$connect$arity$3 == null)))))){
return this$.clojure$browser$net$IConnection$connect$arity$3(this$,opt1,opt2);
} else {
return clojure$browser$net$IConnection$connect$dyn_9717.cljs$core$IFn$_invoke$arity$3(this$,opt1,opt2);
}
}));

(clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$4 = (function (this$,opt1,opt2,opt3){
if((((!((this$ == null)))) && ((!((this$.clojure$browser$net$IConnection$connect$arity$4 == null)))))){
return this$.clojure$browser$net$IConnection$connect$arity$4(this$,opt1,opt2,opt3);
} else {
return clojure$browser$net$IConnection$connect$dyn_9717.cljs$core$IFn$_invoke$arity$4(this$,opt1,opt2,opt3);
}
}));

(clojure.browser.net.connect.cljs$lang$maxFixedArity = 4);


var clojure$browser$net$IConnection$transmit$dyn_9720 = (function() {
var G__9721 = null;
var G__9721__2 = (function (this$,opt){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (clojure.browser.net.transmit[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,opt) : m__5394__auto__.call(null,this$,opt));
} else {
var m__5392__auto__ = (clojure.browser.net.transmit["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,opt) : m__5392__auto__.call(null,this$,opt));
} else {
throw cljs.core.missing_protocol("IConnection.transmit",this$);
}
}
});
var G__9721__3 = (function (this$,opt,opt2){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (clojure.browser.net.transmit[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(this$,opt,opt2) : m__5394__auto__.call(null,this$,opt,opt2));
} else {
var m__5392__auto__ = (clojure.browser.net.transmit["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(this$,opt,opt2) : m__5392__auto__.call(null,this$,opt,opt2));
} else {
throw cljs.core.missing_protocol("IConnection.transmit",this$);
}
}
});
var G__9721__4 = (function (this$,opt,opt2,opt3){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (clojure.browser.net.transmit[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(this$,opt,opt2,opt3) : m__5394__auto__.call(null,this$,opt,opt2,opt3));
} else {
var m__5392__auto__ = (clojure.browser.net.transmit["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(this$,opt,opt2,opt3) : m__5392__auto__.call(null,this$,opt,opt2,opt3));
} else {
throw cljs.core.missing_protocol("IConnection.transmit",this$);
}
}
});
var G__9721__5 = (function (this$,opt,opt2,opt3,opt4){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (clojure.browser.net.transmit[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$5 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$5(this$,opt,opt2,opt3,opt4) : m__5394__auto__.call(null,this$,opt,opt2,opt3,opt4));
} else {
var m__5392__auto__ = (clojure.browser.net.transmit["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$5 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$5(this$,opt,opt2,opt3,opt4) : m__5392__auto__.call(null,this$,opt,opt2,opt3,opt4));
} else {
throw cljs.core.missing_protocol("IConnection.transmit",this$);
}
}
});
var G__9721__6 = (function (this$,opt,opt2,opt3,opt4,opt5){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (clojure.browser.net.transmit[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$6 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$6(this$,opt,opt2,opt3,opt4,opt5) : m__5394__auto__.call(null,this$,opt,opt2,opt3,opt4,opt5));
} else {
var m__5392__auto__ = (clojure.browser.net.transmit["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$6 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$6(this$,opt,opt2,opt3,opt4,opt5) : m__5392__auto__.call(null,this$,opt,opt2,opt3,opt4,opt5));
} else {
throw cljs.core.missing_protocol("IConnection.transmit",this$);
}
}
});
G__9721 = function(this$,opt,opt2,opt3,opt4,opt5){
switch(arguments.length){
case 2:
return G__9721__2.call(this,this$,opt);
case 3:
return G__9721__3.call(this,this$,opt,opt2);
case 4:
return G__9721__4.call(this,this$,opt,opt2,opt3);
case 5:
return G__9721__5.call(this,this$,opt,opt2,opt3,opt4);
case 6:
return G__9721__6.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__9721.cljs$core$IFn$_invoke$arity$2 = G__9721__2;
G__9721.cljs$core$IFn$_invoke$arity$3 = G__9721__3;
G__9721.cljs$core$IFn$_invoke$arity$4 = G__9721__4;
G__9721.cljs$core$IFn$_invoke$arity$5 = G__9721__5;
G__9721.cljs$core$IFn$_invoke$arity$6 = G__9721__6;
return G__9721;
})()
;
clojure.browser.net.transmit = (function clojure$browser$net$transmit(var_args){
var G__9716 = arguments.length;
switch (G__9716) {
case 2:
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$2 = (function (this$,opt){
if((((!((this$ == null)))) && ((!((this$.clojure$browser$net$IConnection$transmit$arity$2 == null)))))){
return this$.clojure$browser$net$IConnection$transmit$arity$2(this$,opt);
} else {
return clojure$browser$net$IConnection$transmit$dyn_9720.cljs$core$IFn$_invoke$arity$2(this$,opt);
}
}));

(clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$3 = (function (this$,opt,opt2){
if((((!((this$ == null)))) && ((!((this$.clojure$browser$net$IConnection$transmit$arity$3 == null)))))){
return this$.clojure$browser$net$IConnection$transmit$arity$3(this$,opt,opt2);
} else {
return clojure$browser$net$IConnection$transmit$dyn_9720.cljs$core$IFn$_invoke$arity$3(this$,opt,opt2);
}
}));

(clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$4 = (function (this$,opt,opt2,opt3){
if((((!((this$ == null)))) && ((!((this$.clojure$browser$net$IConnection$transmit$arity$4 == null)))))){
return this$.clojure$browser$net$IConnection$transmit$arity$4(this$,opt,opt2,opt3);
} else {
return clojure$browser$net$IConnection$transmit$dyn_9720.cljs$core$IFn$_invoke$arity$4(this$,opt,opt2,opt3);
}
}));

(clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$5 = (function (this$,opt,opt2,opt3,opt4){
if((((!((this$ == null)))) && ((!((this$.clojure$browser$net$IConnection$transmit$arity$5 == null)))))){
return this$.clojure$browser$net$IConnection$transmit$arity$5(this$,opt,opt2,opt3,opt4);
} else {
return clojure$browser$net$IConnection$transmit$dyn_9720.cljs$core$IFn$_invoke$arity$5(this$,opt,opt2,opt3,opt4);
}
}));

(clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$6 = (function (this$,opt,opt2,opt3,opt4,opt5){
if((((!((this$ == null)))) && ((!((this$.clojure$browser$net$IConnection$transmit$arity$6 == null)))))){
return this$.clojure$browser$net$IConnection$transmit$arity$6(this$,opt,opt2,opt3,opt4,opt5);
} else {
return clojure$browser$net$IConnection$transmit$dyn_9720.cljs$core$IFn$_invoke$arity$6(this$,opt,opt2,opt3,opt4,opt5);
}
}));

(clojure.browser.net.transmit.cljs$lang$maxFixedArity = 6);


var clojure$browser$net$IConnection$close$dyn_9723 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (clojure.browser.net.close[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (clojure.browser.net.close["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IConnection.close",this$);
}
}
});
clojure.browser.net.close = (function clojure$browser$net$close(this$){
if((((!((this$ == null)))) && ((!((this$.clojure$browser$net$IConnection$close$arity$1 == null)))))){
return this$.clojure$browser$net$IConnection$close$arity$1(this$);
} else {
return clojure$browser$net$IConnection$close$dyn_9723(this$);
}
});

(goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = cljs.core.PROTOCOL_SENTINEL);

(goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$2 = (function (this$,uri){
var this$__$1 = this;
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$6(this$__$1,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
}));

(goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$3 = (function (this$,uri,method){
var this$__$1 = this;
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$6(this$__$1,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
}));

(goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$4 = (function (this$,uri,method,content){
var this$__$1 = this;
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$6(this$__$1,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
}));

(goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$5 = (function (this$,uri,method,content,headers){
var this$__$1 = this;
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$6(this$__$1,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
}));

(goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$6 = (function (this$,uri,method,content,headers,timeout){
var this$__$1 = this;
this$__$1.setTimeoutInterval(timeout);

return this$__$1.send(uri,method,content,headers);
}));

(goog.net.XhrIo.prototype.clojure$browser$event$IEventType$ = cljs.core.PROTOCOL_SENTINEL);

(goog.net.XhrIo.prototype.clojure$browser$event$IEventType$event_types$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__9724){
var vec__9725 = p__9724;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9725,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9725,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v], null);
}),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(goog.net.EventType)], 0))));
}));
clojure.browser.net.xpc_config_fields = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__9728){
var vec__9729 = p__9728;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9729,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9729,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v], null);
}),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(goog.net.xpc.CfgFields)));
/**
 * Returns an XhrIo connection
 */
clojure.browser.net.xhr_connection = (function clojure$browser$net$xhr_connection(){
return (new goog.net.XhrIo());
});

/**
 * @interface
 */
clojure.browser.net.ICrossPageChannel = function(){};

var clojure$browser$net$ICrossPageChannel$register_service$dyn_9734 = (function() {
var G__9735 = null;
var G__9735__3 = (function (this$,service_name,fn){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (clojure.browser.net.register_service[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(this$,service_name,fn) : m__5394__auto__.call(null,this$,service_name,fn));
} else {
var m__5392__auto__ = (clojure.browser.net.register_service["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(this$,service_name,fn) : m__5392__auto__.call(null,this$,service_name,fn));
} else {
throw cljs.core.missing_protocol("ICrossPageChannel.register-service",this$);
}
}
});
var G__9735__4 = (function (this$,service_name,fn,encode_json_QMARK_){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (clojure.browser.net.register_service[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(this$,service_name,fn,encode_json_QMARK_) : m__5394__auto__.call(null,this$,service_name,fn,encode_json_QMARK_));
} else {
var m__5392__auto__ = (clojure.browser.net.register_service["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(this$,service_name,fn,encode_json_QMARK_) : m__5392__auto__.call(null,this$,service_name,fn,encode_json_QMARK_));
} else {
throw cljs.core.missing_protocol("ICrossPageChannel.register-service",this$);
}
}
});
G__9735 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case 3:
return G__9735__3.call(this,this$,service_name,fn);
case 4:
return G__9735__4.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__9735.cljs$core$IFn$_invoke$arity$3 = G__9735__3;
G__9735.cljs$core$IFn$_invoke$arity$4 = G__9735__4;
return G__9735;
})()
;
clojure.browser.net.register_service = (function clojure$browser$net$register_service(var_args){
var G__9733 = arguments.length;
switch (G__9733) {
case 3:
return clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$3 = (function (this$,service_name,fn){
if((((!((this$ == null)))) && ((!((this$.clojure$browser$net$ICrossPageChannel$register_service$arity$3 == null)))))){
return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$3(this$,service_name,fn);
} else {
return clojure$browser$net$ICrossPageChannel$register_service$dyn_9734.cljs$core$IFn$_invoke$arity$3(this$,service_name,fn);
}
}));

(clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$4 = (function (this$,service_name,fn,encode_json_QMARK_){
if((((!((this$ == null)))) && ((!((this$.clojure$browser$net$ICrossPageChannel$register_service$arity$4 == null)))))){
return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$4(this$,service_name,fn,encode_json_QMARK_);
} else {
return clojure$browser$net$ICrossPageChannel$register_service$dyn_9734.cljs$core$IFn$_invoke$arity$4(this$,service_name,fn,encode_json_QMARK_);
}
}));

(clojure.browser.net.register_service.cljs$lang$maxFixedArity = 4);


(goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$ = cljs.core.PROTOCOL_SENTINEL);

(goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service$arity$3 = (function (this$,service_name,fn){
var this$__$1 = this;
return clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$4(this$__$1,service_name,fn,false);
}));

(goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service$arity$4 = (function (this$,service_name,fn,encode_json_QMARK_){
var this$__$1 = this;
return this$__$1.registerService(cljs.core.name(service_name),fn,encode_json_QMARK_);
}));

(goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = cljs.core.PROTOCOL_SENTINEL);

(goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$1 = (function (this$){
var this$__$1 = this;
return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$2(this$__$1,null);
}));

(goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$2 = (function (this$,on_connect_fn){
var this$__$1 = this;
return this$__$1.connect(on_connect_fn);
}));

(goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$3 = (function (this$,on_connect_fn,config_iframe_fn){
var this$__$1 = this;
return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$4(this$__$1,on_connect_fn,config_iframe_fn,document.body);
}));

(goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$4 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
var this$__$1 = this;
this$__$1.createPeerIframe(iframe_parent,config_iframe_fn);

return this$__$1.connect(on_connect_fn);
}));

(goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$transmit$arity$3 = (function (this$,service_name,payload){
var this$__$1 = this;
return this$__$1.send(cljs.core.name(service_name),payload);
}));

(goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$close$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.close();
}));
/**
 * When passed with a config hash-map, returns a parent
 *   CrossPageChannel object. Keys in the config hash map are downcased
 *   versions of the goog.net.xpc.CfgFields enum keys,
 *   e.g. goog.net.xpc.CfgFields.PEER_URI becomes :peer_uri in the config
 *   hash.
 * 
 *   When passed with no args, creates a child CrossPageChannel object,
 *   and the config is automatically taken from the URL param 'xpc', as
 *   per the CrossPageChannel API.
 */
clojure.browser.net.xpc_connection = (function clojure$browser$net$xpc_connection(var_args){
var G__9738 = arguments.length;
switch (G__9738) {
case 0:
return clojure.browser.net.xpc_connection.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.browser.net.xpc_connection.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.browser.net.xpc_connection.cljs$core$IFn$_invoke$arity$0 = (function (){
var temp__5804__auto__ = (new goog.Uri(window.location.href)).getParameterValue("xpc");
if(cljs.core.truth_(temp__5804__auto__)){
var config = temp__5804__auto__;
return (new goog.net.xpc.CrossPageChannel(goog.json.parse(config)));
} else {
return null;
}
}));

(clojure.browser.net.xpc_connection.cljs$core$IFn$_invoke$arity$1 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (sum,p__9739){
var vec__9740 = p__9739;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9740,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9740,(1),null);
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clojure.browser.net.xpc_config_fields,k);
if(cljs.core.truth_(temp__5802__auto__)){
var field = temp__5802__auto__;
var G__9743 = sum;
clojure.browser.net.goog$module$goog$object.set.call(null,G__9743,field,v);

return G__9743;
} else {
return sum;
}
}),({}),config)));
}));

(clojure.browser.net.xpc_connection.cljs$lang$maxFixedArity = 1);


/**
 * @interface
 */
clojure.browser.net.IWebSocket = function(){};

var clojure$browser$net$IWebSocket$open_QMARK_$dyn_9747 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (clojure.browser.net.open_QMARK_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (clojure.browser.net.open_QMARK_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IWebSocket.open?",this$);
}
}
});
clojure.browser.net.open_QMARK_ = (function clojure$browser$net$open_QMARK_(this$){
if((((!((this$ == null)))) && ((!((this$.clojure$browser$net$IWebSocket$open_QMARK_$arity$1 == null)))))){
return this$.clojure$browser$net$IWebSocket$open_QMARK_$arity$1(this$);
} else {
return clojure$browser$net$IWebSocket$open_QMARK_$dyn_9747(this$);
}
});

(goog.net.WebSocket.prototype.clojure$browser$net$IWebSocket$ = cljs.core.PROTOCOL_SENTINEL);

(goog.net.WebSocket.prototype.clojure$browser$net$IWebSocket$open_QMARK_$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.isOpen(cljs.core.List.EMPTY);
}));

(goog.net.WebSocket.prototype.clojure$browser$net$IConnection$ = cljs.core.PROTOCOL_SENTINEL);

(goog.net.WebSocket.prototype.clojure$browser$net$IConnection$connect$arity$2 = (function (this$,url){
var this$__$1 = this;
return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$3(this$__$1,url,null);
}));

(goog.net.WebSocket.prototype.clojure$browser$net$IConnection$connect$arity$3 = (function (this$,url,protocol){
var this$__$1 = this;
return this$__$1.open(url,protocol);
}));

(goog.net.WebSocket.prototype.clojure$browser$net$IConnection$transmit$arity$2 = (function (this$,message){
var this$__$1 = this;
return this$__$1.send(message);
}));

(goog.net.WebSocket.prototype.clojure$browser$net$IConnection$close$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.close(cljs.core.List.EMPTY);
}));

(goog.net.WebSocket.prototype.clojure$browser$event$IEventType$ = cljs.core.PROTOCOL_SENTINEL);

(goog.net.WebSocket.prototype.clojure$browser$event$IEventType$event_types$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__9748){
var vec__9749 = p__9748;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9749,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9749,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v], null);
}),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(goog.net.WebSocket.EventType)], 0))));
}));
clojure.browser.net.websocket_connection = (function clojure$browser$net$websocket_connection(var_args){
var G__9753 = arguments.length;
switch (G__9753) {
case 0:
return clojure.browser.net.websocket_connection.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.browser.net.websocket_connection.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.browser.net.websocket_connection.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.browser.net.websocket_connection.cljs$core$IFn$_invoke$arity$0 = (function (){
return clojure.browser.net.websocket_connection.cljs$core$IFn$_invoke$arity$2(null,null);
}));

(clojure.browser.net.websocket_connection.cljs$core$IFn$_invoke$arity$1 = (function (auto_reconnect_QMARK_){
return clojure.browser.net.websocket_connection.cljs$core$IFn$_invoke$arity$2(auto_reconnect_QMARK_,null);
}));

(clojure.browser.net.websocket_connection.cljs$core$IFn$_invoke$arity$2 = (function (auto_reconnect_QMARK_,next_reconnect_fn){
return (new goog.net.WebSocket(auto_reconnect_QMARK_,next_reconnect_fn));
}));

(clojure.browser.net.websocket_connection.cljs$lang$maxFixedArity = 2);

