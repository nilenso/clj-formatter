// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('rewrite_clj.node.fn');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('rewrite_clj.interop');
goog.require('rewrite_clj.node.protocols');
/**
 * Construct function form.
 */
rewrite_clj.node.fn.construct_fn = (function rewrite_clj$node$fn$construct_fn(fixed_arg_syms,vararg_sym,body){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.concat.call(null,fixed_arg_syms,(cljs.core.truth_(vararg_sym)?(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),(new cljs.core.List(null,vararg_sym,null,(1),null)),(2),null)):null))),(new cljs.core.List(null,body,null,(1),null)),(2),null)),(3),null));
});
/**
 * Get index based on the substring following the arg's `%`.
 * Zero means vararg.
 */
rewrite_clj.node.fn.arg_index = (function rewrite_clj$node$fn$arg_index(n){
if(cljs.core._EQ_.call(null,n,"&")){
return (0);
} else {
if(cljs.core._EQ_.call(null,n,"")){
return (1);
} else {
if(cljs.core.truth_(cljs.core.re_matches.call(null,/\d+/,n))){
return rewrite_clj.interop.str__GT_int.call(null,n);
} else {
throw cljs.core.ex_info.call(null,"arg literal must be %, %& or %integer.",cljs.core.PersistentArrayMap.EMPTY);

}
}
}
});
/**
 * If symbol starting with `%`, convert to respective gensym.
 */
rewrite_clj.node.fn.arg_symbol__GT_gensym = (function rewrite_clj$node$fn$arg_symbol__GT_gensym(gensym_seq,vararg_QMARK_,max_fixed_arg_ndx,sym){
if((sym instanceof cljs.core.Symbol)){
var nm = cljs.core.name.call(null,sym);
if(clojure.string.starts_with_QMARK_.call(null,nm,"%")){
var param_ndx = rewrite_clj.node.fn.arg_index.call(null,cljs.core.subs.call(null,nm,(1)));
if(((cljs.core._EQ_.call(null,param_ndx,(0))) && (cljs.core.not.call(null,cljs.core.deref.call(null,vararg_QMARK_))))){
cljs.core.reset_BANG_.call(null,vararg_QMARK_,true);
} else {
}

cljs.core.swap_BANG_.call(null,max_fixed_arg_ndx,cljs.core.max,param_ndx);

return cljs.core.nth.call(null,gensym_seq,param_ndx);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Walk the form and create an expand function form.
 */
rewrite_clj.node.fn.fn_walk = (function rewrite_clj$node$fn$fn_walk(form){
var sym_seq = (function (){var iter__5523__auto__ = (function rewrite_clj$node$fn$fn_walk_$_iter__2780(s__2781){
return (new cljs.core.LazySeq(null,(function (){
var s__2781__$1 = s__2781;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__2781__$1);
if(temp__5804__auto__){
var s__2781__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2781__$2)){
var c__5521__auto__ = cljs.core.chunk_first.call(null,s__2781__$2);
var size__5522__auto__ = cljs.core.count.call(null,c__5521__auto__);
var b__2783 = cljs.core.chunk_buffer.call(null,size__5522__auto__);
if((function (){var i__2782 = (0);
while(true){
if((i__2782 < size__5522__auto__)){
var i = cljs.core._nth.call(null,c__5521__auto__,i__2782);
var base = ((cljs.core._EQ_.call(null,i,(0)))?"rest__":["p",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),"__"].join(''));
var s = cljs.core.name.call(null,cljs.core.gensym.call(null,base));
cljs.core.chunk_append.call(null,b__2783,cljs.core.symbol.call(null,[s,"#"].join('')));

var G__2784 = (i__2782 + (1));
i__2782 = G__2784;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2783),rewrite_clj$node$fn$fn_walk_$_iter__2780.call(null,cljs.core.chunk_rest.call(null,s__2781__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2783),null);
}
} else {
var i = cljs.core.first.call(null,s__2781__$2);
var base = ((cljs.core._EQ_.call(null,i,(0)))?"rest__":["p",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),"__"].join(''));
var s = cljs.core.name.call(null,cljs.core.gensym.call(null,base));
return cljs.core.cons.call(null,cljs.core.symbol.call(null,[s,"#"].join('')),rewrite_clj$node$fn$fn_walk_$_iter__2780.call(null,cljs.core.rest.call(null,s__2781__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__.call(null,cljs.core.range.call(null));
})();
var max_fixed_arg_ndx = cljs.core.atom.call(null,(0));
var vararg_QMARK_ = cljs.core.atom.call(null,false);
var body = clojure.walk.prewalk.call(null,(function (p1__2779_SHARP_){
var or__5045__auto__ = rewrite_clj.node.fn.arg_symbol__GT_gensym.call(null,sym_seq,vararg_QMARK_,max_fixed_arg_ndx,p1__2779_SHARP_);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return p1__2779_SHARP_;
}
}),form);
return rewrite_clj.node.fn.construct_fn.call(null,cljs.core.take.call(null,cljs.core.deref.call(null,max_fixed_arg_ndx),cljs.core.rest.call(null,sym_seq)),(cljs.core.truth_(cljs.core.deref.call(null,vararg_QMARK_))?cljs.core.first.call(null,sym_seq):null),body);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
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
 * @implements {rewrite_clj.node.fn.Object}
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.fn.FnNode = (function (children,__meta,__extmap,__hash){
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_clj.node.fn.FnNode.prototype.toString = (function (){
var self__ = this;
var node = this;
return node.rewrite_clj$node$protocols$Node$string$arity$1(null);
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k2786,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__2790 = k2786;
var G__2790__$1 = (((G__2790 instanceof cljs.core.Keyword))?G__2790.fqn:null);
switch (G__2790__$1) {
case "children":
return self__.children;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k2786,else__5346__auto__);

}
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__5366__auto__,p__2791){
var vec__2792 = p__2791;
var k__5367__auto__ = cljs.core.nth.call(null,vec__2792,(0),null);
var v__5368__auto__ = cljs.core.nth.call(null,vec__2792,(1),null);
return f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__);
}),init__5365__auto__,this__5363__auto____$1);
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__5359__auto__,pr_pair__5361__auto__,"#rewrite-clj.node.fn.FnNode{",", ","}",opts__5360__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__2785){
var self__ = this;
var G__2785__$1 = this;
return (new cljs.core.RecordIter((0),G__2785__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new rewrite_clj.node.fn.FnNode(self__.children,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1740346885 ^ cljs.core.hash_unordered_coll.call(null,coll__5340__auto__));
}).call(null,this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this2787,other2788){
var self__ = this;
var this2787__$1 = this;
return (((!((other2788 == null)))) && ((((this2787__$1.constructor === other2788.constructor)) && (((cljs.core._EQ_.call(null,this2787__$1.children,other2788.children)) && (cljs.core._EQ_.call(null,this2787__$1.__extmap,other2788.__extmap)))))));
}));

(rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"fn","fn",-1175266204);
}));

(rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$node_type$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return new cljs.core.Keyword(null,"fn","fn",-1175266204);
}));

(rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return false;
}));

(rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$sexpr_STAR_$arity$2 = (function (_node,opts){
var self__ = this;
var _node__$1 = this;
return rewrite_clj.node.fn.fn_walk.call(null,rewrite_clj.node.protocols.sexprs.call(null,self__.children,opts));
}));

(rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return ((3) + rewrite_clj.node.protocols.sum_lengths.call(null,self__.children));
}));

(rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return ["#(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_clj.node.protocols.concat_strings.call(null,self__.children)),")"].join('');
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new rewrite_clj.node.fn.FnNode(self__.children,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5354__auto__)),null));
}
}));

(rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$InnerNode$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return true;
}));

(rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$InnerNode$children$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return self__.children;
}));

(rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 = (function (node,children_SINGLEQUOTE_){
var self__ = this;
var node__$1 = this;
return cljs.core.assoc.call(null,node__$1,new cljs.core.Keyword(null,"children","children",-940561982),children_SINGLEQUOTE_);
}));

(rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$InnerNode$leader_length$arity$1 = (function (_node){
var self__ = this;
var _node__$1 = this;
return (2);
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k2786){
var self__ = this;
var this__5350__auto____$1 = this;
var G__2795 = k2786;
var G__2795__$1 = (((G__2795 instanceof cljs.core.Keyword))?G__2795.fqn:null);
switch (G__2795__$1) {
case "children":
return true;

break;
default:
return cljs.core.contains_QMARK_.call(null,self__.__extmap,k2786);

}
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__2785){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__2796 = cljs.core.keyword_identical_QMARK_;
var expr__2797 = k__5352__auto__;
if(cljs.core.truth_(pred__2796.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__2797))){
return (new rewrite_clj.node.fn.FnNode(G__2785,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.fn.FnNode(self__.children,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5352__auto__,G__2785),null));
}
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null))], null),self__.__extmap));
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__2785){
var self__ = this;
var this__5342__auto____$1 = this;
return (new rewrite_clj.node.fn.FnNode(self__.children,G__2785,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__5349__auto__,(0)),cljs.core._nth.call(null,entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(rewrite_clj.node.fn.FnNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",699969545,null)], null);
}));

(rewrite_clj.node.fn.FnNode.cljs$lang$type = true);

(rewrite_clj.node.fn.FnNode.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.fn/FnNode",null,(1),null));
}));

(rewrite_clj.node.fn.FnNode.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write.call(null,writer__5390__auto__,"rewrite-clj.node.fn/FnNode");
}));

/**
 * Positional factory function for rewrite-clj.node.fn/FnNode.
 */
rewrite_clj.node.fn.__GT_FnNode = (function rewrite_clj$node$fn$__GT_FnNode(children){
return (new rewrite_clj.node.fn.FnNode(children,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.fn/FnNode, taking a map of keywords to field values.
 */
rewrite_clj.node.fn.map__GT_FnNode = (function rewrite_clj$node$fn$map__GT_FnNode(G__2789){
var extmap__5385__auto__ = (function (){var G__2799 = cljs.core.dissoc.call(null,G__2789,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.record_QMARK_.call(null,G__2789)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__2799);
} else {
return G__2799;
}
})();
return (new rewrite_clj.node.fn.FnNode(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__2789),null,cljs.core.not_empty.call(null,extmap__5385__auto__),null));
});

rewrite_clj.node.protocols.make_printable_BANG_.call(null,rewrite_clj.node.fn.FnNode);
/**
 * Create node representing an anonymous function with `children`.
 * 
 * ```Clojure
 * (require '[rewrite-clj.node :as n])
 * 
 * (-> (n/fn-node [(n/token-node '+)
 *                 (n/spaces 1)
 *                 (n/token-node 1)
 *                 (n/spaces 1)
 *                 (n/token-node '%1)])
 *     n/string)
 * ;; => "#(+ 1 %1)"
 * ```
 */
rewrite_clj.node.fn.fn_node = (function rewrite_clj$node$fn$fn_node(children){
return rewrite_clj.node.fn.__GT_FnNode.call(null,children);
});

//# sourceMappingURL=fn.js.map
