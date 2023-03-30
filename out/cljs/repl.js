// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__1479){
var map__1480 = p__1479;
var map__1480__$1 = cljs.core.__destructure_map.call(null,map__1480);
var m = map__1480__$1;
var n = cljs.core.get.call(null,map__1480__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__1480__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__1481_1509 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1482_1510 = null;
var count__1483_1511 = (0);
var i__1484_1512 = (0);
while(true){
if((i__1484_1512 < count__1483_1511)){
var f_1513 = cljs.core._nth.call(null,chunk__1482_1510,i__1484_1512);
cljs.core.println.call(null,"  ",f_1513);


var G__1514 = seq__1481_1509;
var G__1515 = chunk__1482_1510;
var G__1516 = count__1483_1511;
var G__1517 = (i__1484_1512 + (1));
seq__1481_1509 = G__1514;
chunk__1482_1510 = G__1515;
count__1483_1511 = G__1516;
i__1484_1512 = G__1517;
continue;
} else {
var temp__5804__auto___1518 = cljs.core.seq.call(null,seq__1481_1509);
if(temp__5804__auto___1518){
var seq__1481_1519__$1 = temp__5804__auto___1518;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1481_1519__$1)){
var c__5568__auto___1520 = cljs.core.chunk_first.call(null,seq__1481_1519__$1);
var G__1521 = cljs.core.chunk_rest.call(null,seq__1481_1519__$1);
var G__1522 = c__5568__auto___1520;
var G__1523 = cljs.core.count.call(null,c__5568__auto___1520);
var G__1524 = (0);
seq__1481_1509 = G__1521;
chunk__1482_1510 = G__1522;
count__1483_1511 = G__1523;
i__1484_1512 = G__1524;
continue;
} else {
var f_1525 = cljs.core.first.call(null,seq__1481_1519__$1);
cljs.core.println.call(null,"  ",f_1525);


var G__1526 = cljs.core.next.call(null,seq__1481_1519__$1);
var G__1527 = null;
var G__1528 = (0);
var G__1529 = (0);
seq__1481_1509 = G__1526;
chunk__1482_1510 = G__1527;
count__1483_1511 = G__1528;
i__1484_1512 = G__1529;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_1530 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_1530);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_1530)))?cljs.core.second.call(null,arglists_1530):arglists_1530));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__1485_1531 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1486_1532 = null;
var count__1487_1533 = (0);
var i__1488_1534 = (0);
while(true){
if((i__1488_1534 < count__1487_1533)){
var vec__1497_1535 = cljs.core._nth.call(null,chunk__1486_1532,i__1488_1534);
var name_1536 = cljs.core.nth.call(null,vec__1497_1535,(0),null);
var map__1500_1537 = cljs.core.nth.call(null,vec__1497_1535,(1),null);
var map__1500_1538__$1 = cljs.core.__destructure_map.call(null,map__1500_1537);
var doc_1539 = cljs.core.get.call(null,map__1500_1538__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1540 = cljs.core.get.call(null,map__1500_1538__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1536);

cljs.core.println.call(null," ",arglists_1540);

if(cljs.core.truth_(doc_1539)){
cljs.core.println.call(null," ",doc_1539);
} else {
}


var G__1541 = seq__1485_1531;
var G__1542 = chunk__1486_1532;
var G__1543 = count__1487_1533;
var G__1544 = (i__1488_1534 + (1));
seq__1485_1531 = G__1541;
chunk__1486_1532 = G__1542;
count__1487_1533 = G__1543;
i__1488_1534 = G__1544;
continue;
} else {
var temp__5804__auto___1545 = cljs.core.seq.call(null,seq__1485_1531);
if(temp__5804__auto___1545){
var seq__1485_1546__$1 = temp__5804__auto___1545;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1485_1546__$1)){
var c__5568__auto___1547 = cljs.core.chunk_first.call(null,seq__1485_1546__$1);
var G__1548 = cljs.core.chunk_rest.call(null,seq__1485_1546__$1);
var G__1549 = c__5568__auto___1547;
var G__1550 = cljs.core.count.call(null,c__5568__auto___1547);
var G__1551 = (0);
seq__1485_1531 = G__1548;
chunk__1486_1532 = G__1549;
count__1487_1533 = G__1550;
i__1488_1534 = G__1551;
continue;
} else {
var vec__1501_1552 = cljs.core.first.call(null,seq__1485_1546__$1);
var name_1553 = cljs.core.nth.call(null,vec__1501_1552,(0),null);
var map__1504_1554 = cljs.core.nth.call(null,vec__1501_1552,(1),null);
var map__1504_1555__$1 = cljs.core.__destructure_map.call(null,map__1504_1554);
var doc_1556 = cljs.core.get.call(null,map__1504_1555__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1557 = cljs.core.get.call(null,map__1504_1555__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1553);

cljs.core.println.call(null," ",arglists_1557);

if(cljs.core.truth_(doc_1556)){
cljs.core.println.call(null," ",doc_1556);
} else {
}


var G__1558 = cljs.core.next.call(null,seq__1485_1546__$1);
var G__1559 = null;
var G__1560 = (0);
var G__1561 = (0);
seq__1485_1531 = G__1558;
chunk__1486_1532 = G__1559;
count__1487_1533 = G__1560;
i__1488_1534 = G__1561;
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
var temp__5804__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.call(null,"Spec");

var seq__1505 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__1506 = null;
var count__1507 = (0);
var i__1508 = (0);
while(true){
if((i__1508 < count__1507)){
var role = cljs.core._nth.call(null,chunk__1506,i__1508);
var temp__5804__auto___1562__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___1562__$1)){
var spec_1563 = temp__5804__auto___1562__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1563));
} else {
}


var G__1564 = seq__1505;
var G__1565 = chunk__1506;
var G__1566 = count__1507;
var G__1567 = (i__1508 + (1));
seq__1505 = G__1564;
chunk__1506 = G__1565;
count__1507 = G__1566;
i__1508 = G__1567;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq.call(null,seq__1505);
if(temp__5804__auto____$1){
var seq__1505__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1505__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__1505__$1);
var G__1568 = cljs.core.chunk_rest.call(null,seq__1505__$1);
var G__1569 = c__5568__auto__;
var G__1570 = cljs.core.count.call(null,c__5568__auto__);
var G__1571 = (0);
seq__1505 = G__1568;
chunk__1506 = G__1569;
count__1507 = G__1570;
i__1508 = G__1571;
continue;
} else {
var role = cljs.core.first.call(null,seq__1505__$1);
var temp__5804__auto___1572__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___1572__$2)){
var spec_1573 = temp__5804__auto___1572__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1573));
} else {
}


var G__1574 = cljs.core.next.call(null,seq__1505__$1);
var G__1575 = null;
var G__1576 = (0);
var G__1577 = (0);
seq__1505 = G__1574;
chunk__1506 = G__1575;
count__1507 = G__1576;
i__1508 = G__1577;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__1578 = cljs.core.conj.call(null,via,t);
var G__1579 = cljs.core.ex_cause.call(null,t);
via = G__1578;
t = G__1579;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
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
var map__1582 = datafied_throwable;
var map__1582__$1 = cljs.core.__destructure_map.call(null,map__1582);
var via = cljs.core.get.call(null,map__1582__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__1582__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__1582__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__1583 = cljs.core.last.call(null,via);
var map__1583__$1 = cljs.core.__destructure_map.call(null,map__1583);
var type = cljs.core.get.call(null,map__1583__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__1583__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__1583__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__1584 = data;
var map__1584__$1 = cljs.core.__destructure_map.call(null,map__1584);
var problems = cljs.core.get.call(null,map__1584__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__1584__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__1584__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__1585 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__1585__$1 = cljs.core.__destructure_map.call(null,map__1585);
var top_data = map__1585__$1;
var source = cljs.core.get.call(null,map__1585__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__1586 = phase;
var G__1586__$1 = (((G__1586 instanceof cljs.core.Keyword))?G__1586.fqn:null);
switch (G__1586__$1) {
case "read-source":
var map__1587 = data;
var map__1587__$1 = cljs.core.__destructure_map.call(null,map__1587);
var line = cljs.core.get.call(null,map__1587__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__1587__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__1588 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__1588__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__1588,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__1588);
var G__1588__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__1588__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__1588__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__1588__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__1588__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__1589 = top_data;
var G__1589__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__1589,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__1589);
var G__1589__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__1589__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__1589__$1);
var G__1589__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__1589__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__1589__$2);
var G__1589__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__1589__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__1589__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__1589__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__1589__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__1590 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__1590,(0),null);
var method = cljs.core.nth.call(null,vec__1590,(1),null);
var file = cljs.core.nth.call(null,vec__1590,(2),null);
var line = cljs.core.nth.call(null,vec__1590,(3),null);
var G__1593 = top_data;
var G__1593__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__1593,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__1593);
var G__1593__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__1593__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__1593__$1);
var G__1593__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.call(null,G__1593__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__1593__$2);
var G__1593__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__1593__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__1593__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__1593__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__1593__$4;
}

break;
case "execution":
var vec__1594 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__1594,(0),null);
var method = cljs.core.nth.call(null,vec__1594,(1),null);
var file = cljs.core.nth.call(null,vec__1594,(2),null);
var line = cljs.core.nth.call(null,vec__1594,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__1581_SHARP_){
var or__5045__auto__ = (p1__1581_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__1581_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__1597 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__1597__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__1597,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__1597);
var G__1597__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__1597__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__1597__$1);
var G__1597__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__1597__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__1597__$2);
var G__1597__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__1597__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__1597__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__1597__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__1597__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1586__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__1601){
var map__1602 = p__1601;
var map__1602__$1 = cljs.core.__destructure_map.call(null,map__1602);
var triage_data = map__1602__$1;
var phase = cljs.core.get.call(null,map__1602__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__1602__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__1602__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__1602__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__1602__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__1602__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__1602__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__1602__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var class_name = cljs.core.name.call(null,(function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__1603 = phase;
var G__1603__$1 = (((G__1603 instanceof cljs.core.Keyword))?G__1603.fqn:null);
switch (G__1603__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1604_1613 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1605_1614 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1606_1615 = true;
var _STAR_print_fn_STAR__temp_val__1607_1616 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1606_1615);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1607_1616);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__1599_SHARP_){
return cljs.core.dissoc.call(null,p1__1599_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1605_1614);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1604_1613);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1608_1617 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1609_1618 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1610_1619 = true;
var _STAR_print_fn_STAR__temp_val__1611_1620 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1610_1619);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1611_1620);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__1600_SHARP_){
return cljs.core.dissoc.call(null,p1__1600_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1609_1618);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1608_1617);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1603__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
