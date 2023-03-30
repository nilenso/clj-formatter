// Compiled by ClojureScript 1.11.60 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('rewrite_clj.node.seq');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rewrite_clj.interop');
goog.require('rewrite_clj.node.protocols');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {rewrite_clj.node.seq.Object}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {rewrite_clj.node.protocols.InnerNode}
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
rewrite_clj.node.seq.SeqNode = (function (tag,format_string,wrap_length,seq_fn,children,__meta,__extmap,__hash){
this.tag = tag;
this.format_string = format_string;
this.wrap_length = wrap_length;
this.seq_fn = seq_fn;
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_clj.node.seq.SeqNode.prototype.toString = (function (){
var self__ = this;
var node = this;
return node.rewrite_clj$node$protocols$Node$string$arity$1(null);
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k6986,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__6990 = k6986;
var G__6990__$1 = (((G__6990 instanceof cljs.core.Keyword))?G__6990.fqn:null);
switch (G__6990__$1) {
case "tag":
return self__.tag;

break;
case "format-string":
return self__.format_string;

break;
case "wrap-length":
return self__.wrap_length;

break;
case "seq-fn":
return self__.seq_fn;

break;
case "children":
return self__.children;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k6986,else__5346__auto__);

}
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__6991){
var vec__6992 = p__6991;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6992,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6992,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#rewrite-clj.node.seq.SeqNode{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tag,self__.tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$format_DASH_string,self__.format_string],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$wrap_DASH_length,self__.wrap_length],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$seq_DASH_fn,self__.seq_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$children,self__.children],null))], null),self__.__extmap));
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__6985){
var self__ = this;
var G__6985__$1 = this;
return (new cljs.core.RecordIter((0),G__6985__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tag,cljs.core.cst$kw$format_DASH_string,cljs.core.cst$kw$wrap_DASH_length,cljs.core.cst$kw$seq_DASH_fn,cljs.core.cst$kw$children], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.format_string,self__.wrap_length,self__.seq_fn,self__.children,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (){var fexpr__6995 = (function (coll__5340__auto__){
return (580297420 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
});
return fexpr__6995(this__5339__auto____$1);
})();
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this6987,other6988){
var self__ = this;
var this6987__$1 = this;
return (((!((other6988 == null)))) && ((((this6987__$1.constructor === other6988.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6987__$1.tag,other6988.tag)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6987__$1.format_string,other6988.format_string)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6987__$1.wrap_length,other6988.wrap_length)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6987__$1.seq_fn,other6988.seq_fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6987__$1.children,other6988.children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6987__$1.__extmap,other6988.__extmap)))))))))))))));
}));

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return self__.tag;
}));

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$Node$node_type$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return cljs.core.cst$kw$seq;
}));

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return false;
}));

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$Node$sexpr_STAR_$arity$2 = (function (_node,opts){
var self__ = this;
var _node__$1 = this;
var G__6996 = rewrite_clj.node.protocols.sexprs.cljs$core$IFn$_invoke$arity$2(self__.children,opts);
return (self__.seq_fn.cljs$core$IFn$_invoke$arity$1 ? self__.seq_fn.cljs$core$IFn$_invoke$arity$1(G__6996) : self__.seq_fn.call(null,G__6996));
}));

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return (self__.wrap_length + rewrite_clj.node.protocols.sum_lengths(self__.children));
}));

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return rewrite_clj.interop.simple_format.cljs$core$IFn$_invoke$arity$variadic(self__.format_string,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rewrite_clj.node.protocols.concat_strings(self__.children)], 0));
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$children,null,cljs.core.cst$kw$format_DASH_string,null,cljs.core.cst$kw$seq_DASH_fn,null,cljs.core.cst$kw$wrap_DASH_length,null,cljs.core.cst$kw$tag,null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.format_string,self__.wrap_length,self__.seq_fn,self__.children,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$InnerNode$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return true;
}));

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$InnerNode$children$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return self__.children;
}));

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 = (function (node,children_SINGLEQUOTE_){
var self__ = this;
var node__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node__$1,cljs.core.cst$kw$children,children_SINGLEQUOTE_);
}));

(rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$InnerNode$leader_length$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return (self__.wrap_length - (1));
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k6986){
var self__ = this;
var this__5350__auto____$1 = this;
var G__6997 = k6986;
var G__6997__$1 = (((G__6997 instanceof cljs.core.Keyword))?G__6997.fqn:null);
switch (G__6997__$1) {
case "tag":
case "format-string":
case "wrap-length":
case "seq-fn":
case "children":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k6986);

}
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__6985){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__6998 = cljs.core.keyword_identical_QMARK_;
var expr__6999 = k__5352__auto__;
if(cljs.core.truth_((function (){var G__7001 = cljs.core.cst$kw$tag;
var G__7002 = expr__6999;
return (pred__6998.cljs$core$IFn$_invoke$arity$2 ? pred__6998.cljs$core$IFn$_invoke$arity$2(G__7001,G__7002) : pred__6998.call(null,G__7001,G__7002));
})())){
return (new rewrite_clj.node.seq.SeqNode(G__6985,self__.format_string,self__.wrap_length,self__.seq_fn,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__7003 = cljs.core.cst$kw$format_DASH_string;
var G__7004 = expr__6999;
return (pred__6998.cljs$core$IFn$_invoke$arity$2 ? pred__6998.cljs$core$IFn$_invoke$arity$2(G__7003,G__7004) : pred__6998.call(null,G__7003,G__7004));
})())){
return (new rewrite_clj.node.seq.SeqNode(self__.tag,G__6985,self__.wrap_length,self__.seq_fn,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__7005 = cljs.core.cst$kw$wrap_DASH_length;
var G__7006 = expr__6999;
return (pred__6998.cljs$core$IFn$_invoke$arity$2 ? pred__6998.cljs$core$IFn$_invoke$arity$2(G__7005,G__7006) : pred__6998.call(null,G__7005,G__7006));
})())){
return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.format_string,G__6985,self__.seq_fn,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__7007 = cljs.core.cst$kw$seq_DASH_fn;
var G__7008 = expr__6999;
return (pred__6998.cljs$core$IFn$_invoke$arity$2 ? pred__6998.cljs$core$IFn$_invoke$arity$2(G__7007,G__7008) : pred__6998.call(null,G__7007,G__7008));
})())){
return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.format_string,self__.wrap_length,G__6985,self__.children,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__7009 = cljs.core.cst$kw$children;
var G__7010 = expr__6999;
return (pred__6998.cljs$core$IFn$_invoke$arity$2 ? pred__6998.cljs$core$IFn$_invoke$arity$2(G__7009,G__7010) : pred__6998.call(null,G__7009,G__7010));
})())){
return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.format_string,self__.wrap_length,self__.seq_fn,G__6985,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.format_string,self__.wrap_length,self__.seq_fn,self__.children,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__6985),null));
}
}
}
}
}
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$tag,self__.tag,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$format_DASH_string,self__.format_string,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$wrap_DASH_length,self__.wrap_length,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$seq_DASH_fn,self__.seq_fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$children,self__.children,null))], null),self__.__extmap));
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__6985){
var self__ = this;
var this__5342__auto____$1 = this;
return (new rewrite_clj.node.seq.SeqNode(self__.tag,self__.format_string,self__.wrap_length,self__.seq_fn,self__.children,G__6985,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.seq.SeqNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5349__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(rewrite_clj.node.seq.SeqNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$tag,cljs.core.cst$sym$format_DASH_string,cljs.core.cst$sym$wrap_DASH_length,cljs.core.cst$sym$seq_DASH_fn,cljs.core.cst$sym$children], null);
}));

(rewrite_clj.node.seq.SeqNode.cljs$lang$type = true);

(rewrite_clj.node.seq.SeqNode.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.seq/SeqNode",null,(1),null));
}));

(rewrite_clj.node.seq.SeqNode.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"rewrite-clj.node.seq/SeqNode");
}));

/**
 * Positional factory function for rewrite-clj.node.seq/SeqNode.
 */
rewrite_clj.node.seq.__GT_SeqNode = (function rewrite_clj$node$seq$__GT_SeqNode(tag,format_string,wrap_length,seq_fn,children){
return (new rewrite_clj.node.seq.SeqNode(tag,format_string,wrap_length,seq_fn,children,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.seq/SeqNode, taking a map of keywords to field values.
 */
rewrite_clj.node.seq.map__GT_SeqNode = (function rewrite_clj$node$seq$map__GT_SeqNode(G__6989){
var extmap__5385__auto__ = (function (){var G__7011 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__6989,cljs.core.cst$kw$tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$format_DASH_string,cljs.core.cst$kw$wrap_DASH_length,cljs.core.cst$kw$seq_DASH_fn,cljs.core.cst$kw$children], 0));
if(cljs.core.record_QMARK_(G__6989)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__7011);
} else {
return G__7011;
}
})();
return (new rewrite_clj.node.seq.SeqNode(cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(G__6989),cljs.core.cst$kw$format_DASH_string.cljs$core$IFn$_invoke$arity$1(G__6989),cljs.core.cst$kw$wrap_DASH_length.cljs$core$IFn$_invoke$arity$1(G__6989),cljs.core.cst$kw$seq_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__6989),cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(G__6989),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

rewrite_clj.node.protocols.make_printable_BANG_(rewrite_clj.node.seq.SeqNode);
/**
 * Create a node representing a list with `children`.
 * 
 * ```Clojure
 * (require '[rewrite-clj.node :as n])
 * 
 * (-> (n/list-node [(n/token-node 1)
 *                   (n/spaces 1)
 *                   (n/token-node 2)
 *                   (n/spaces 1)
 *                   (n/token-node 3)])
 *     n/string)
 * ;; => "(1 2 3)"
 * ```
 */
rewrite_clj.node.seq.list_node = (function rewrite_clj$node$seq$list_node(children){
return rewrite_clj.node.seq.__GT_SeqNode(cljs.core.cst$kw$list,"(%s)",(2),(function (p1__7014_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,p1__7014_SHARP_);
}),children);
});
/**
 * Create a node representing a vector with `children`.
 * 
 * ```Clojure
 * (require '[rewrite-clj.node :as n])
 * 
 * (-> (n/vector-node [(n/token-node 1)
 *                     (n/spaces 1)
 *                     (n/token-node 2)
 *                     (n/spaces 1)
 *                     (n/token-node 3)])
 *     n/string)
 * ;; => "[1 2 3]"
 * ```
 */
rewrite_clj.node.seq.vector_node = (function rewrite_clj$node$seq$vector_node(children){
return rewrite_clj.node.seq.__GT_SeqNode(cljs.core.cst$kw$vector,"[%s]",(2),cljs.core.vec,children);
});
/**
 * Create a node representing a set with `children`.
 * 
 * ```Clojure
 * (require '[rewrite-clj.node :as n])
 * 
 * (-> (n/set-node [(n/token-node 1)
 *                  (n/spaces 1)
 *                  (n/token-node 2)
 *                  (n/spaces 1)
 *                  (n/token-node 3)])
 *     n/string)
 * ;; => "#{1 2 3}"
 * ```
 * 
 * Note that rewrite-clj allows the, technically illegal, set with duplicate values:
 * ```Clojure
 * (-> (n/set-node [(n/token-node 1)
 *                  (n/spaces 1)
 *                  (n/token-node 1)])
 *     (n/string))
 * ;; => "#{1 1}"
 * ```
 * 
 * See [docs on sets with duplicate values](/doc/01-user-guide.adoc#sets-with-duplicate-values).
 */
rewrite_clj.node.seq.set_node = (function rewrite_clj$node$seq$set_node(children){
return rewrite_clj.node.seq.__GT_SeqNode(cljs.core.cst$kw$set,"#{%s}",(3),cljs.core.set,children);
});
/**
 * Create a node representing a map with `children`.
 * ```Clojure
 * (require '[rewrite-clj.node :as n])
 * 
 * (-> (n/map-node [(n/keyword-node :a)
 *                  (n/spaces 1)
 *                  (n/token-node 1)
 *                  (n/spaces 1)
 *                  (n/keyword-node :b)
 *                  (n/spaces 1)
 *                  (n/token-node 2)])
 *     (n/string))
 * ;; => "{:a 1 :b 2}"
 * ```
 * 
 * Note that rewrite-clj allows the, technically illegal, unbalanced map:
 * ```Clojure
 * (-> (n/map-node [(n/keyword-node :a)])
 *     (n/string))
 * ;; => "{:a}"
 * ```
 * See [docs on unbalanced maps](/doc/01-user-guide.adoc#unbalanced-maps).
 * 
 * Rewrite-clj also allows the, also technically illegal, map with duplicate keys:
 * ```Clojure
 * (-> (n/map-node [(n/keyword-node :a)
 *                  (n/spaces 1)
 *                  (n/token-node 1)
 *                  (n/spaces 1)
 *                  (n/keyword-node :a)
 *                  (n/spaces 1)
 *                  (n/token-node 2)])
 *     (n/string))
 * ;; => "{:a 1 :a 2}"
 * ```
 * See [docs on maps with duplicate keys](/doc/01-user-guide.adoc#maps-with-duplicate-keys).
 */
rewrite_clj.node.seq.map_node = (function rewrite_clj$node$seq$map_node(children){
return rewrite_clj.node.seq.__GT_SeqNode(cljs.core.cst$kw$map,"{%s}",(2),(function (p1__7015_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,p1__7015_SHARP_);
}),children);
});
