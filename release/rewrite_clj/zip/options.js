// Compiled by ClojureScript 1.11.60 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('rewrite_clj.zip.options');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rewrite_clj.node.protocols');
rewrite_clj.zip.options.default_zipper_opts = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$track_DASH_position_QMARK_,false,cljs.core.cst$kw$auto_DASH_resolve,rewrite_clj.node.protocols.default_auto_resolve], null);
rewrite_clj.zip.options.get_opts = (function rewrite_clj$zip$options$get_opts(zloc){
return cljs.core.cst$kw$rewrite_DASH_clj$zip_SLASH_opts.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(zloc));
});
rewrite_clj.zip.options.set_opts = (function rewrite_clj$zip$options$set_opts(zloc,opts){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(zloc,cljs.core.assoc,cljs.core.cst$kw$rewrite_DASH_clj$zip_SLASH_opts,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rewrite_clj.zip.options.default_zipper_opts,opts], 0)));
});
