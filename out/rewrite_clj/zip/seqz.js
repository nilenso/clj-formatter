// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('rewrite_clj.zip.seqz');
goog.require('cljs.core');
goog.require('rewrite_clj.custom_zipper.core');
goog.require('rewrite_clj.zip.base');
goog.require('rewrite_clj.zip.editz');
goog.require('rewrite_clj.zip.findz');
goog.require('rewrite_clj.zip.insert');
goog.require('rewrite_clj.zip.move');
/**
 * Returns true if current node in `zloc` is a sequence.
 */
rewrite_clj.zip.seqz.seq_QMARK_ = (function rewrite_clj$zip$seqz$seq_QMARK_(zloc){
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"namespaced-map","namespaced-map",1235665380),null,new cljs.core.Keyword(null,"vector","vector",1902966158),null,new cljs.core.Keyword(null,"list","list",765357683),null,new cljs.core.Keyword(null,"set","set",304602554),null,new cljs.core.Keyword(null,"map","map",1371690461),null,new cljs.core.Keyword(null,"forms","forms",2045992350),null], null), null),rewrite_clj.zip.base.tag.call(null,zloc));
});
/**
 * Returns true if current node in `zloc` is a list.
 */
rewrite_clj.zip.seqz.list_QMARK_ = (function rewrite_clj$zip$seqz$list_QMARK_(zloc){
return cljs.core._EQ_.call(null,rewrite_clj.zip.base.tag.call(null,zloc),new cljs.core.Keyword(null,"list","list",765357683));
});
/**
 * Returns true if current node in `zloc` is a vector.
 */
rewrite_clj.zip.seqz.vector_QMARK_ = (function rewrite_clj$zip$seqz$vector_QMARK_(zloc){
return cljs.core._EQ_.call(null,rewrite_clj.zip.base.tag.call(null,zloc),new cljs.core.Keyword(null,"vector","vector",1902966158));
});
/**
 * Returns true if current node in `zloc` is a set.
 */
rewrite_clj.zip.seqz.set_QMARK_ = (function rewrite_clj$zip$seqz$set_QMARK_(zloc){
return cljs.core._EQ_.call(null,rewrite_clj.zip.base.tag.call(null,zloc),new cljs.core.Keyword(null,"set","set",304602554));
});
/**
 * Returns true if current node in `zloc` is a map.
 */
rewrite_clj.zip.seqz.map_QMARK_ = (function rewrite_clj$zip$seqz$map_QMARK_(zloc){
return cljs.core._EQ_.call(null,rewrite_clj.zip.base.tag.call(null,zloc),new cljs.core.Keyword(null,"map","map",1371690461));
});
/**
 * Returns true if the current node in `zloc` is a namespaced map.
 */
rewrite_clj.zip.seqz.namespaced_map_QMARK_ = (function rewrite_clj$zip$seqz$namespaced_map_QMARK_(zloc){
return cljs.core._EQ_.call(null,rewrite_clj.zip.base.tag.call(null,zloc),new cljs.core.Keyword(null,"namespaced-map","namespaced-map",1235665380));
});
rewrite_clj.zip.seqz.map_seq = (function rewrite_clj$zip$seqz$map_seq(f,zloc){
if(rewrite_clj.zip.seqz.seq_QMARK_.call(null,zloc)){
} else {
throw (new Error("Assert failed: (seq? zloc)"));
}

var temp__5802__auto__ = rewrite_clj.zip.move.down.call(null,zloc);
if(cljs.core.truth_(temp__5802__auto__)){
var zloc_n0 = temp__5802__auto__;
var G__4555 = f.call(null,zloc_n0);
var G__4555__$1 = (((G__4555 == null))?null:cljs.core.iterate.call(null,(function (loc){
var temp__5804__auto__ = rewrite_clj.zip.move.right.call(null,loc);
if(cljs.core.truth_(temp__5804__auto__)){
var zloc_n = temp__5804__auto__;
return f.call(null,zloc_n);
} else {
return null;
}
}),G__4555));
var G__4555__$2 = (((G__4555__$1 == null))?null:cljs.core.take_while.call(null,cljs.core.identity,G__4555__$1));
var G__4555__$3 = (((G__4555__$2 == null))?null:cljs.core.last.call(null,G__4555__$2));
if((G__4555__$3 == null)){
return null;
} else {
return rewrite_clj.zip.move.up.call(null,G__4555__$3);
}
} else {
return zloc;
}
});
rewrite_clj.zip.seqz.map_vals_STAR_ = (function rewrite_clj$zip$seqz$map_vals_STAR_(f,map_loc){
var loc = rewrite_clj.zip.move.down.call(null,map_loc);
var parent = map_loc;
while(true){
if(cljs.core.not.call(null,(function (){var and__5043__auto__ = loc;
if(cljs.core.truth_(and__5043__auto__)){
return rewrite_clj.custom_zipper.core.node.call(null,loc);
} else {
return and__5043__auto__;
}
})())){
return parent;
} else {
var temp__5802__auto__ = rewrite_clj.zip.move.right.call(null,loc);
if(cljs.core.truth_(temp__5802__auto__)){
var zloc_map_value = temp__5802__auto__;
var temp__5802__auto____$1 = f.call(null,zloc_map_value);
if(cljs.core.truth_(temp__5802__auto____$1)){
var new_zloc_map_value = temp__5802__auto____$1;
var G__4556 = rewrite_clj.zip.move.right.call(null,new_zloc_map_value);
var G__4557 = rewrite_clj.zip.move.up.call(null,new_zloc_map_value);
loc = G__4556;
parent = G__4557;
continue;
} else {
var G__4558 = rewrite_clj.zip.move.right.call(null,zloc_map_value);
var G__4559 = parent;
loc = G__4558;
parent = G__4559;
continue;
}
} else {
return parent;
}
}
break;
}
});
rewrite_clj.zip.seqz.map_loc = (function rewrite_clj$zip$seqz$map_loc(zloc){
if(rewrite_clj.zip.seqz.namespaced_map_QMARK_.call(null,zloc)){
return rewrite_clj.zip.move.rightmost.call(null,rewrite_clj.zip.move.down.call(null,zloc));
} else {
return zloc;
}
});
rewrite_clj.zip.seqz.container_loc = (function rewrite_clj$zip$seqz$container_loc(zloc,map_loc){
if(rewrite_clj.zip.seqz.namespaced_map_QMARK_.call(null,zloc)){
return rewrite_clj.zip.move.up.call(null,map_loc);
} else {
return map_loc;
}
});
/**
 * Returns `zloc` with function `f` applied to each value node of the current node.
 * Current node must be map node.
 * 
 *   `zloc` location is unchanged.
 * 
 *   `f` arg is zloc positioned at value node and should return:
 *   - an updated zloc with zloc positioned at value node
 *   - a falsey value to leave value node unchanged
 * 
 *   Folks typically use [[edit]] for `f`.
 */
rewrite_clj.zip.seqz.map_vals = (function rewrite_clj$zip$seqz$map_vals(f,zloc){
if(((rewrite_clj.zip.seqz.map_QMARK_.call(null,zloc)) || (rewrite_clj.zip.seqz.namespaced_map_QMARK_.call(null,zloc)))){
} else {
throw (new Error("Assert failed: (or (map? zloc) (namespaced-map? zloc))"));
}

return rewrite_clj.zip.seqz.container_loc.call(null,zloc,rewrite_clj.zip.seqz.map_vals_STAR_.call(null,f,rewrite_clj.zip.seqz.map_loc.call(null,zloc)));
});
rewrite_clj.zip.seqz.map_keys_STAR_ = (function rewrite_clj$zip$seqz$map_keys_STAR_(f,map_loc){
var loc = rewrite_clj.zip.move.down.call(null,map_loc);
var parent = map_loc;
while(true){
if(cljs.core.not.call(null,(function (){var and__5043__auto__ = loc;
if(cljs.core.truth_(and__5043__auto__)){
return rewrite_clj.custom_zipper.core.node.call(null,loc);
} else {
return and__5043__auto__;
}
})())){
return parent;
} else {
var temp__5802__auto__ = f.call(null,loc);
if(cljs.core.truth_(temp__5802__auto__)){
var zloc_map_key = temp__5802__auto__;
var G__4560 = rewrite_clj.zip.move.right.call(null,rewrite_clj.zip.move.right.call(null,zloc_map_key));
var G__4561 = rewrite_clj.zip.move.up.call(null,zloc_map_key);
loc = G__4560;
parent = G__4561;
continue;
} else {
var G__4562 = rewrite_clj.zip.move.right.call(null,rewrite_clj.zip.move.right.call(null,loc));
var G__4563 = parent;
loc = G__4562;
parent = G__4563;
continue;
}
}
break;
}
});
/**
 * Returns `zloc` with function `f` applied to all key nodes of the current node.
 * Current node must be map node.
 * 
 *   `zloc` location is unchanged.
 * 
 *   `f` arg is zloc positioned at key node and should return:
 *   - an updated zloc with zloc positioned at key node
 *   - a falsey value to leave value node unchanged
 * 
 *   Folks typically use [[rewrite-clj.zip/edit]] for `f`.
 */
rewrite_clj.zip.seqz.map_keys = (function rewrite_clj$zip$seqz$map_keys(f,zloc){
if(((rewrite_clj.zip.seqz.map_QMARK_.call(null,zloc)) || (rewrite_clj.zip.seqz.namespaced_map_QMARK_.call(null,zloc)))){
} else {
throw (new Error("Assert failed: (or (map? zloc) (namespaced-map? zloc))"));
}

return rewrite_clj.zip.seqz.container_loc.call(null,zloc,rewrite_clj.zip.seqz.map_keys_STAR_.call(null,f,rewrite_clj.zip.seqz.map_loc.call(null,zloc)));
});
/**
 * Returns `zloc` with function `f` applied to all nodes of the current node.
 *   Current node must be a sequence node. Equivalent to [[rewrite-clj.zip/map-vals]] for maps.
 * 
 *   `zloc` location is unchanged.
 * 
 *   `f` arg is zloc positioned at
 *   - value nodes for maps
 *   - each element of a seq
 *   and is should return:
 *   - an updated zloc with zloc positioned at edited node
 *   - a falsey value to leave value node unchanged
 * 
 *   Folks typically use [[edit]] for `f`.
 */
rewrite_clj.zip.seqz.map = (function rewrite_clj$zip$seqz$map(f,zloc){
if(rewrite_clj.zip.seqz.seq_QMARK_.call(null,zloc)){
} else {
throw (new Error("Assert failed: (seq? zloc)"));
}

if(((rewrite_clj.zip.seqz.map_QMARK_.call(null,zloc)) || (rewrite_clj.zip.seqz.namespaced_map_QMARK_.call(null,zloc)))){
return rewrite_clj.zip.seqz.map_vals.call(null,f,zloc);
} else {
return rewrite_clj.zip.seqz.map_seq.call(null,f,zloc);
}
});
/**
 * Returns `zloc` located to map key node's sexpr value matching `k` else `nil`.
 * 
 *   `k` should be:
 *   - a key for maps
 *   - a zero-based index for sequences
 * 
 *   NOTE: `k` will be compared against resolved keywords in maps.
 *   See docs for sexpr behavior on [namespaced elements](/doc/01-user-guide.adoc#namespaced-elements).
 */
rewrite_clj.zip.seqz.get = (function rewrite_clj$zip$seqz$get(zloc,k){
if(((rewrite_clj.zip.seqz.map_QMARK_.call(null,zloc)) || (((rewrite_clj.zip.seqz.namespaced_map_QMARK_.call(null,zloc)) || (((rewrite_clj.zip.seqz.seq_QMARK_.call(null,zloc)) && (cljs.core.integer_QMARK_.call(null,k)))))))){
} else {
throw (new Error("Assert failed: (or (map? zloc) (namespaced-map? zloc) (and (seq? zloc) (integer? k)))"));
}

if(rewrite_clj.zip.seqz.map_QMARK_.call(null,zloc)){
var G__4564 = zloc;
var G__4564__$1 = (((G__4564 == null))?null:rewrite_clj.zip.move.down.call(null,G__4564));
var G__4564__$2 = (((G__4564__$1 == null))?null:rewrite_clj.zip.findz.find_value.call(null,G__4564__$1,k));
if((G__4564__$2 == null)){
return null;
} else {
return rewrite_clj.zip.move.right.call(null,G__4564__$2);
}
} else {
if(rewrite_clj.zip.seqz.namespaced_map_QMARK_.call(null,zloc)){
var G__4565 = zloc;
var G__4565__$1 = (((G__4565 == null))?null:rewrite_clj.zip.move.down.call(null,G__4565));
var G__4565__$2 = (((G__4565__$1 == null))?null:rewrite_clj.zip.move.rightmost.call(null,G__4565__$1));
var G__4565__$3 = (((G__4565__$2 == null))?null:rewrite_clj.zip.move.down.call(null,G__4565__$2));
var G__4565__$4 = (((G__4565__$3 == null))?null:rewrite_clj.zip.findz.find_value.call(null,G__4565__$3,k));
if((G__4565__$4 == null)){
return null;
} else {
return rewrite_clj.zip.move.right.call(null,G__4565__$4);
}
} else {
return cljs.core.nth.call(null,(function (){var G__4566 = rewrite_clj.zip.move.down.call(null,zloc);
var G__4566__$1 = (((G__4566 == null))?null:cljs.core.iterate.call(null,rewrite_clj.zip.move.right,G__4566));
if((G__4566__$1 == null)){
return null;
} else {
return cljs.core.take_while.call(null,cljs.core.identity,G__4566__$1);
}
})(),k);

}
}
});
/**
 * Returns `zloc` with current node's `k` set to value `v`.
 * 
 *   `zloc` location is unchanged.
 * 
 *   `k` should be:
 *   - a key for maps
 *   - a zero-based index for sequences, an exception is thrown if index is out of bounds
 * 
 *   NOTE: `k` will be compared against resolved keywords in maps.
 *   See docs for sexpr behavior on [namespaced elements](/doc/01-user-guide.adoc#namespaced-elements).
 */
rewrite_clj.zip.seqz.assoc = (function rewrite_clj$zip$seqz$assoc(zloc,k,v){
return rewrite_clj.zip.seqz.container_loc.call(null,zloc,(function (){var temp__5802__auto__ = rewrite_clj.zip.seqz.get.call(null,zloc,k);
if(cljs.core.truth_(temp__5802__auto__)){
var value_loc = temp__5802__auto__;
return rewrite_clj.zip.move.up.call(null,rewrite_clj.zip.editz.replace.call(null,value_loc,v));
} else {
if(((rewrite_clj.zip.seqz.map_QMARK_.call(null,zloc)) || (rewrite_clj.zip.seqz.namespaced_map_QMARK_.call(null,zloc)))){
return rewrite_clj.zip.insert.append_child.call(null,rewrite_clj.zip.insert.append_child.call(null,rewrite_clj.zip.seqz.map_loc.call(null,zloc),k),v);
} else {
throw cljs.core.ex_info.call(null,["index out of bounds: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}
})());
});

//# sourceMappingURL=seqz.js.map
