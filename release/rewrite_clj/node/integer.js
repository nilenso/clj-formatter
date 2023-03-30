// Compiled by ClojureScript 1.11.60 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('rewrite_clj.node.integer');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rewrite_clj.interop');
goog.require('rewrite_clj.node.protocols');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {rewrite_clj.node.integer.Object}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.integer.IntNode = (function (value,base,__meta,__extmap,__hash){
this.value = value;
this.base = base;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_clj.node.integer.IntNode.prototype.toString = (function (){
var self__ = this;
var node = this;
return node.rewrite_clj$node$protocols$Node$string$arity$1(null);
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k8793,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__8797 = k8793;
var G__8797__$1 = (((G__8797 instanceof cljs.core.Keyword))?G__8797.fqn:null);
switch (G__8797__$1) {
case "value":
return self__.value;

break;
case "base":
return self__.base;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8793,else__5346__auto__);

}
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__8798){
var vec__8799 = p__8798;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8799,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8799,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#rewrite-clj.node.integer.IntNode{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$value,self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$base,self__.base],null))], null),self__.__extmap));
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8792){
var self__ = this;
var G__8792__$1 = this;
return (new cljs.core.RecordIter((0),G__8792__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value,cljs.core.cst$kw$base], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new rewrite_clj.node.integer.IntNode(self__.value,self__.base,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (){var fexpr__8802 = (function (coll__5340__auto__){
return (-2088146928 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
});
return fexpr__8802(this__5339__auto____$1);
})();
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8794,other8795){
var self__ = this;
var this8794__$1 = this;
return (((!((other8795 == null)))) && ((((this8794__$1.constructor === other8795.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8794__$1.value,other8795.value)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8794__$1.base,other8795.base)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8794__$1.__extmap,other8795.__extmap)))))))));
}));

(rewrite_clj.node.integer.IntNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.integer.IntNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return cljs.core.cst$kw$token;
}));

(rewrite_clj.node.integer.IntNode.prototype.rewrite_clj$node$protocols$Node$node_type$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return cljs.core.cst$kw$int;
}));

(rewrite_clj.node.integer.IntNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return false;
}));

(rewrite_clj.node.integer.IntNode.prototype.rewrite_clj$node$protocols$Node$sexpr_STAR_$arity$2 = (function (_node,_opts){
var self__ = this;
var _node__$1 = this;
return self__.value;
}));

(rewrite_clj.node.integer.IntNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (node){
var self__ = this;
var node__$1 = this;
return cljs.core.count(node__$1.rewrite_clj$node$protocols$Node$string$arity$1(null));
}));

(rewrite_clj.node.integer.IntNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
var sign = (((self__.value < (0)))?"-":null);
var abs_value = (function (){var G__8803 = self__.value;
if((self__.value < (0))){
return (- G__8803);
} else {
return G__8803;
}
})();
var s = rewrite_clj.interop.int__GT_str(abs_value,self__.base);
var prefix = (function (){var G__8804 = cljs.core.long$(self__.base);
switch (G__8804) {
case (8):
return "0";

break;
case (10):
return "";

break;
case (16):
return "0x";

break;
default:
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.base),"r"].join('');

}
})();
return [sign,cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,null,cljs.core.cst$kw$base,null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new rewrite_clj.node.integer.IntNode(self__.value,self__.base,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k8793){
var self__ = this;
var this__5350__auto____$1 = this;
var G__8805 = k8793;
var G__8805__$1 = (((G__8805 instanceof cljs.core.Keyword))?G__8805.fqn:null);
switch (G__8805__$1) {
case "value":
case "base":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k8793);

}
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__8792){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__8806 = cljs.core.keyword_identical_QMARK_;
var expr__8807 = k__5352__auto__;
if(cljs.core.truth_((function (){var G__8809 = cljs.core.cst$kw$value;
var G__8810 = expr__8807;
return (pred__8806.cljs$core$IFn$_invoke$arity$2 ? pred__8806.cljs$core$IFn$_invoke$arity$2(G__8809,G__8810) : pred__8806.call(null,G__8809,G__8810));
})())){
return (new rewrite_clj.node.integer.IntNode(G__8792,self__.base,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__8811 = cljs.core.cst$kw$base;
var G__8812 = expr__8807;
return (pred__8806.cljs$core$IFn$_invoke$arity$2 ? pred__8806.cljs$core$IFn$_invoke$arity$2(G__8811,G__8812) : pred__8806.call(null,G__8811,G__8812));
})())){
return (new rewrite_clj.node.integer.IntNode(self__.value,G__8792,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.integer.IntNode(self__.value,self__.base,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__8792),null));
}
}
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$value,self__.value,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$base,self__.base,null))], null),self__.__extmap));
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__8792){
var self__ = this;
var this__5342__auto____$1 = this;
return (new rewrite_clj.node.integer.IntNode(self__.value,self__.base,G__8792,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.integer.IntNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5349__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(rewrite_clj.node.integer.IntNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$value,cljs.core.cst$sym$base], null);
}));

(rewrite_clj.node.integer.IntNode.cljs$lang$type = true);

(rewrite_clj.node.integer.IntNode.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.integer/IntNode",null,(1),null));
}));

(rewrite_clj.node.integer.IntNode.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"rewrite-clj.node.integer/IntNode");
}));

/**
 * Positional factory function for rewrite-clj.node.integer/IntNode.
 */
rewrite_clj.node.integer.__GT_IntNode = (function rewrite_clj$node$integer$__GT_IntNode(value,base){
return (new rewrite_clj.node.integer.IntNode(value,base,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.integer/IntNode, taking a map of keywords to field values.
 */
rewrite_clj.node.integer.map__GT_IntNode = (function rewrite_clj$node$integer$map__GT_IntNode(G__8796){
var extmap__5385__auto__ = (function (){var G__8813 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__8796,cljs.core.cst$kw$value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$base], 0));
if(cljs.core.record_QMARK_(G__8796)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__8813);
} else {
return G__8813;
}
})();
return (new rewrite_clj.node.integer.IntNode(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(G__8796),cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(G__8796),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

rewrite_clj.node.protocols.make_printable_BANG_(rewrite_clj.node.integer.IntNode);
/**
 * Create node representing an integer `value` in `base`.
 * 
 *   `base` defaults to 10.
 * 
 * ```Clojure
 * (require '[rewrite-clj.node :as n])
 * 
 * (-> (n/integer-node 42)
 *     n/string)
 * ;; => "42"
 * 
 * (-> (n/integer-node 31 2)
 *     n/string)
 * ;; => "2r11111"
 * ```
 * 
 * Note: the parser does not currently parse to integer-nodes, but they fully supported for output.
 */
rewrite_clj.node.integer.integer_node = (function rewrite_clj$node$integer$integer_node(var_args){
var G__8818 = arguments.length;
switch (G__8818) {
case 1:
return rewrite_clj.node.integer.integer_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.node.integer.integer_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.node.integer.integer_node.cljs$core$IFn$_invoke$arity$1 = (function (value){
return rewrite_clj.node.integer.integer_node.cljs$core$IFn$_invoke$arity$2(value,(10));
}));

(rewrite_clj.node.integer.integer_node.cljs$core$IFn$_invoke$arity$2 = (function (value,base){
if(cljs.core.integer_QMARK_(value)){
} else {
throw (new Error("Assert failed: (integer? value)"));
}

if(cljs.core.integer_QMARK_(base)){
} else {
throw (new Error("Assert failed: (integer? base)"));
}

if(((((1) < base)) && ((base < (37))))){
} else {
throw (new Error("Assert failed: (< 1 base 37)"));
}

return rewrite_clj.node.integer.__GT_IntNode(value,base);
}));

(rewrite_clj.node.integer.integer_node.cljs$lang$maxFixedArity = 2);

