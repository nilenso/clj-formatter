// Compiled by ClojureScript 1.11.60 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('rewrite_clj.node.stringz');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('cljs.tools.reader.edn');
goog.require('rewrite_clj.node.protocols');
rewrite_clj.node.stringz.wrap_string = (function rewrite_clj$node$stringz$wrap_string(s){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"\""].join('');
});
rewrite_clj.node.stringz.join_lines = (function rewrite_clj$node$stringz$join_lines(lines){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",lines);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {rewrite_clj.node.stringz.Object}
 * @implements {cljs.core.IIterable}
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.stringz.StringNode = (function (lines,__meta,__extmap,__hash){
this.lines = lines;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_clj.node.stringz.StringNode.prototype.toString = (function (){
var self__ = this;
var node = this;
return node.rewrite_clj$node$protocols$Node$string$arity$1(null);
}));

(rewrite_clj.node.stringz.StringNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(rewrite_clj.node.stringz.StringNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k7146,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__7150 = k7146;
var G__7150__$1 = (((G__7150 instanceof cljs.core.Keyword))?G__7150.fqn:null);
switch (G__7150__$1) {
case "lines":
return self__.lines;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k7146,else__5346__auto__);

}
}));

(rewrite_clj.node.stringz.StringNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__7151){
var vec__7152 = p__7151;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7152,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7152,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(rewrite_clj.node.stringz.StringNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#rewrite-clj.node.stringz.StringNode{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$lines,self__.lines],null))], null),self__.__extmap));
}));

(rewrite_clj.node.stringz.StringNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__7145){
var self__ = this;
var G__7145__$1 = this;
return (new cljs.core.RecordIter((0),G__7145__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lines], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_clj.node.stringz.StringNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(rewrite_clj.node.stringz.StringNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new rewrite_clj.node.stringz.StringNode(self__.lines,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.stringz.StringNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(rewrite_clj.node.stringz.StringNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (){var fexpr__7155 = (function (coll__5340__auto__){
return (1538615006 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
});
return fexpr__7155(this__5339__auto____$1);
})();
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(rewrite_clj.node.stringz.StringNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this7147,other7148){
var self__ = this;
var this7147__$1 = this;
return (((!((other7148 == null)))) && ((((this7147__$1.constructor === other7148.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7147__$1.lines,other7148.lines)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7147__$1.__extmap,other7148.__extmap)))))));
}));

(rewrite_clj.node.stringz.StringNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.stringz.StringNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
if(cljs.core.next(self__.lines)){
return cljs.core.cst$kw$multi_DASH_line;
} else {
return cljs.core.cst$kw$token;
}
}));

(rewrite_clj.node.stringz.StringNode.prototype.rewrite_clj$node$protocols$Node$node_type$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return cljs.core.cst$kw$string;
}));

(rewrite_clj.node.stringz.StringNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return false;
}));

(rewrite_clj.node.stringz.StringNode.prototype.rewrite_clj$node$protocols$Node$sexpr_STAR_$arity$2 = (function (_node,_opts){
var self__ = this;
var _node__$1 = this;
return rewrite_clj.node.stringz.join_lines(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.tools.reader.edn.read_string,rewrite_clj.node.stringz.wrap_string),self__.lines));
}));

(rewrite_clj.node.stringz.StringNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return ((2) + cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,self__.lines)));
}));

(rewrite_clj.node.stringz.StringNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return rewrite_clj.node.stringz.wrap_string(rewrite_clj.node.stringz.join_lines(self__.lines));
}));

(rewrite_clj.node.stringz.StringNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$lines,null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new rewrite_clj.node.stringz.StringNode(self__.lines,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(rewrite_clj.node.stringz.StringNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k7146){
var self__ = this;
var this__5350__auto____$1 = this;
var G__7156 = k7146;
var G__7156__$1 = (((G__7156 instanceof cljs.core.Keyword))?G__7156.fqn:null);
switch (G__7156__$1) {
case "lines":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k7146);

}
}));

(rewrite_clj.node.stringz.StringNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__7145){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__7157 = cljs.core.keyword_identical_QMARK_;
var expr__7158 = k__5352__auto__;
if(cljs.core.truth_((function (){var G__7160 = cljs.core.cst$kw$lines;
var G__7161 = expr__7158;
return (pred__7157.cljs$core$IFn$_invoke$arity$2 ? pred__7157.cljs$core$IFn$_invoke$arity$2(G__7160,G__7161) : pred__7157.call(null,G__7160,G__7161));
})())){
return (new rewrite_clj.node.stringz.StringNode(G__7145,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.stringz.StringNode(self__.lines,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__7145),null));
}
}));

(rewrite_clj.node.stringz.StringNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$lines,self__.lines,null))], null),self__.__extmap));
}));

(rewrite_clj.node.stringz.StringNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__7145){
var self__ = this;
var this__5342__auto____$1 = this;
return (new rewrite_clj.node.stringz.StringNode(self__.lines,G__7145,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.stringz.StringNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5349__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(rewrite_clj.node.stringz.StringNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$lines], null);
}));

(rewrite_clj.node.stringz.StringNode.cljs$lang$type = true);

(rewrite_clj.node.stringz.StringNode.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.stringz/StringNode",null,(1),null));
}));

(rewrite_clj.node.stringz.StringNode.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"rewrite-clj.node.stringz/StringNode");
}));

/**
 * Positional factory function for rewrite-clj.node.stringz/StringNode.
 */
rewrite_clj.node.stringz.__GT_StringNode = (function rewrite_clj$node$stringz$__GT_StringNode(lines){
return (new rewrite_clj.node.stringz.StringNode(lines,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.stringz/StringNode, taking a map of keywords to field values.
 */
rewrite_clj.node.stringz.map__GT_StringNode = (function rewrite_clj$node$stringz$map__GT_StringNode(G__7149){
var extmap__5385__auto__ = (function (){var G__7162 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__7149,cljs.core.cst$kw$lines);
if(cljs.core.record_QMARK_(G__7149)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__7162);
} else {
return G__7162;
}
})();
return (new rewrite_clj.node.stringz.StringNode(cljs.core.cst$kw$lines.cljs$core$IFn$_invoke$arity$1(G__7149),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

rewrite_clj.node.protocols.make_printable_BANG_(rewrite_clj.node.stringz.StringNode);
/**
 * Create node representing a string value where `lines` can be a sequence of strings or a single string.
 * 
 *   When `lines` is a sequence, the resulting node will `tag` will be `:multi-line`, otherwise `:token`.
 * 
 *   ```Clojure
 *   (require '[rewrite-clj.node :as n])
 * 
 *   (-> (n/string-node "hello")
 *    n/string)
 *   ;; => "\"hello\""
 * 
 *   (-> (n/string-node ["line1" "" "line3"])
 *     n/string)
 *   ;; => "\"line1\n\nline3\""
 *   ```
 */
rewrite_clj.node.stringz.string_node = (function rewrite_clj$node$stringz$string_node(lines){
if(typeof lines === 'string'){
return rewrite_clj.node.stringz.__GT_StringNode(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lines], null));
} else {
return rewrite_clj.node.stringz.__GT_StringNode(lines);
}
});
