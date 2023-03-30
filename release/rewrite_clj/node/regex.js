// Compiled by ClojureScript 1.11.60 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('rewrite_clj.node.regex');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rewrite_clj.node.protocols');

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
 * @implements {cljs.core.IIterable}
 * @implements {rewrite_clj.node.regex.Object}
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.regex.RegexNode = (function (pattern,__meta,__extmap,__hash){
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_clj.node.regex.RegexNode.prototype.toString = (function (){
var self__ = this;
var node = this;
return node.rewrite_clj$node$protocols$Node$string$arity$1(null);
}));

(rewrite_clj.node.regex.RegexNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(rewrite_clj.node.regex.RegexNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k7291,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__7295 = k7291;
var G__7295__$1 = (((G__7295 instanceof cljs.core.Keyword))?G__7295.fqn:null);
switch (G__7295__$1) {
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k7291,else__5346__auto__);

}
}));

(rewrite_clj.node.regex.RegexNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__7296){
var vec__7297 = p__7296;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7297,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7297,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(rewrite_clj.node.regex.RegexNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#rewrite-clj.node.regex.RegexNode{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pattern,self__.pattern],null))], null),self__.__extmap));
}));

(rewrite_clj.node.regex.RegexNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__7290){
var self__ = this;
var G__7290__$1 = this;
return (new cljs.core.RecordIter((0),G__7290__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pattern], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_clj.node.regex.RegexNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(rewrite_clj.node.regex.RegexNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new rewrite_clj.node.regex.RegexNode(self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.regex.RegexNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(rewrite_clj.node.regex.RegexNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (){var fexpr__7300 = (function (coll__5340__auto__){
return (705094795 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
});
return fexpr__7300(this__5339__auto____$1);
})();
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(rewrite_clj.node.regex.RegexNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this7292,other7293){
var self__ = this;
var this7292__$1 = this;
return (((!((other7293 == null)))) && ((((this7292__$1.constructor === other7293.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7292__$1.pattern,other7293.pattern)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7292__$1.__extmap,other7293.__extmap)))))));
}));

(rewrite_clj.node.regex.RegexNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.regex.RegexNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return cljs.core.cst$kw$regex;
}));

(rewrite_clj.node.regex.RegexNode.prototype.rewrite_clj$node$protocols$Node$node_type$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return cljs.core.cst$kw$regex;
}));

(rewrite_clj.node.regex.RegexNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return false;
}));

(rewrite_clj.node.regex.RegexNode.prototype.rewrite_clj$node$protocols$Node$sexpr_STAR_$arity$2 = (function (_node,_opts){
var self__ = this;
var _node__$1 = this;
return (new cljs.core.List(null,cljs.core.cst$sym$re_DASH_pattern,(new cljs.core.List(null,self__.pattern,null,(1),null)),(2),null));
}));

(rewrite_clj.node.regex.RegexNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return ((3) + cljs.core.count(self__.pattern));
}));

(rewrite_clj.node.regex.RegexNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return ["#\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.pattern),"\""].join('');
}));

(rewrite_clj.node.regex.RegexNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pattern,null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new rewrite_clj.node.regex.RegexNode(self__.pattern,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(rewrite_clj.node.regex.RegexNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k7291){
var self__ = this;
var this__5350__auto____$1 = this;
var G__7301 = k7291;
var G__7301__$1 = (((G__7301 instanceof cljs.core.Keyword))?G__7301.fqn:null);
switch (G__7301__$1) {
case "pattern":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k7291);

}
}));

(rewrite_clj.node.regex.RegexNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__7290){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__7302 = cljs.core.keyword_identical_QMARK_;
var expr__7303 = k__5352__auto__;
if(cljs.core.truth_((function (){var G__7305 = cljs.core.cst$kw$pattern;
var G__7306 = expr__7303;
return (pred__7302.cljs$core$IFn$_invoke$arity$2 ? pred__7302.cljs$core$IFn$_invoke$arity$2(G__7305,G__7306) : pred__7302.call(null,G__7305,G__7306));
})())){
return (new rewrite_clj.node.regex.RegexNode(G__7290,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.regex.RegexNode(self__.pattern,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__7290),null));
}
}));

(rewrite_clj.node.regex.RegexNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$pattern,self__.pattern,null))], null),self__.__extmap));
}));

(rewrite_clj.node.regex.RegexNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__7290){
var self__ = this;
var this__5342__auto____$1 = this;
return (new rewrite_clj.node.regex.RegexNode(self__.pattern,G__7290,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.regex.RegexNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5349__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(rewrite_clj.node.regex.RegexNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$pattern], null);
}));

(rewrite_clj.node.regex.RegexNode.cljs$lang$type = true);

(rewrite_clj.node.regex.RegexNode.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.regex/RegexNode",null,(1),null));
}));

(rewrite_clj.node.regex.RegexNode.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"rewrite-clj.node.regex/RegexNode");
}));

/**
 * Positional factory function for rewrite-clj.node.regex/RegexNode.
 */
rewrite_clj.node.regex.__GT_RegexNode = (function rewrite_clj$node$regex$__GT_RegexNode(pattern){
return (new rewrite_clj.node.regex.RegexNode(pattern,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.regex/RegexNode, taking a map of keywords to field values.
 */
rewrite_clj.node.regex.map__GT_RegexNode = (function rewrite_clj$node$regex$map__GT_RegexNode(G__7294){
var extmap__5385__auto__ = (function (){var G__7307 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__7294,cljs.core.cst$kw$pattern);
if(cljs.core.record_QMARK_(G__7294)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__7307);
} else {
return G__7307;
}
})();
return (new rewrite_clj.node.regex.RegexNode(cljs.core.cst$kw$pattern.cljs$core$IFn$_invoke$arity$1(G__7294),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

rewrite_clj.node.protocols.make_printable_BANG_(rewrite_clj.node.regex.RegexNode);
rewrite_clj.node.regex.pattern_string_for_regex = (function rewrite_clj$node$regex$pattern_string_for_regex(regex){
return regex.source;
});
/**
 * Create node representing a regex with `pattern-string`.
 * Use same escape rules for `pattern-string` as you would for `(re-pattern "pattern-string")`
 * 
 * ```Clojure
 * (require '[rewrite-clj.node :as n])
 * 
 * (-> (n/regex-node "my\\.lil.*regex")
 *     n/string)
 * ;; => "#\"my\\.lil.*regex\""
 * ```
 */
rewrite_clj.node.regex.regex_node = (function rewrite_clj$node$regex$regex_node(pattern_string){
return rewrite_clj.node.regex.__GT_RegexNode(pattern_string);
});
