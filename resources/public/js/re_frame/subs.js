// Compiled by ClojureScript 1.9.227 {}
goog.provide('re_frame.subs');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('re_frame.utils');
goog.require('re_frame.registrar');
re_frame.subs.kind = new cljs.core.Keyword(null,"sub","sub",-2093760025);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.subs.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register a subscription handler fucntion for an query id
 */
re_frame.subs.register_raw = (function re_frame$subs$register_raw(query_id,handler_fn){
return re_frame.registrar.register_handler.call(null,re_frame.subs.kind,query_id,handler_fn);
});
re_frame.subs.query__GT_reaction = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Unregisters all existing subscription handlers
 */
re_frame.subs.clear_all_handlers_BANG_ = (function re_frame$subs$clear_all_handlers_BANG_(){
re_frame.registrar.clear_handlers.call(null,re_frame.subs.kind);

return cljs.core.reset_BANG_.call(null,re_frame.subs.query__GT_reaction,cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * cache the reaction r
 */
re_frame.subs.cache_and_return = (function re_frame$subs$cache_and_return(query_v,dynv,r){
var cache_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dynv], null);
re_frame.interop.add_on_dispose_BANG_.call(null,r,((function (cache_key){
return (function (){
return cljs.core.swap_BANG_.call(null,re_frame.subs.query__GT_reaction,cljs.core.dissoc,cache_key);
});})(cache_key))
);

cljs.core.swap_BANG_.call(null,re_frame.subs.query__GT_reaction,cljs.core.assoc,cache_key,r);

return r;
});
re_frame.subs.cache_lookup = (function re_frame$subs$cache_lookup(var_args){
var args36318 = [];
var len__21524__auto___36321 = arguments.length;
var i__21525__auto___36322 = (0);
while(true){
if((i__21525__auto___36322 < len__21524__auto___36321)){
args36318.push((arguments[i__21525__auto___36322]));

var G__36323 = (i__21525__auto___36322 + (1));
i__21525__auto___36322 = G__36323;
continue;
} else {
}
break;
}

var G__36320 = args36318.length;
switch (G__36320) {
case 1:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36318.length)].join('')));

}
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
return re_frame.subs.cache_lookup.call(null,query_v,cljs.core.PersistentVector.EMPTY);
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2 = (function (query_v,dyn_v){
return cljs.core.get.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dyn_v], null));
});

re_frame.subs.cache_lookup.cljs$lang$maxFixedArity = 2;

/**
 * Returns a Reagent/reaction which contains a computation
 */
re_frame.subs.subscribe = (function re_frame$subs$subscribe(var_args){
var args36325 = [];
var len__21524__auto___36328 = arguments.length;
var i__21525__auto___36329 = (0);
while(true){
if((i__21525__auto___36329 < len__21524__auto___36328)){
args36325.push((arguments[i__21525__auto___36329]));

var G__36330 = (i__21525__auto___36329 + (1));
i__21525__auto___36329 = G__36330;
continue;
} else {
}
break;
}

var G__36327 = args36325.length;
switch (G__36327) {
case 1:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36325.length)].join('')));

}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,query_v);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query_v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(cljs.core.not.call(null,handler_fn)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no subscription handler registered for: \"",query_id,"\". Returning a nil subscription.");
} else {
}

return re_frame.subs.cache_and_return.call(null,query_v,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,re_frame.db.app_db,query_v));
}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (v,dynv){
var temp__4655__auto__ = re_frame.subs.cache_lookup.call(null,v,dynv);
if(cljs.core.truth_(temp__4655__auto__)){
var cached = temp__4655__auto__;
return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.interop.debug_enabled_QMARK_){
var temp__4657__auto___36332 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__4657__auto___36332)){
var not_reactive_36333 = temp__4657__auto___36332;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom: ",not_reactive_36333);
} else {
}
} else {
}

if((handler_fn == null)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no subscription handler registered for: \"",query_id,"\". Returning a nil subscription.");
} else {
var dyn_vals = re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__4655__auto__){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__4655__auto__))
);
var sub = re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__4655__auto__){
return (function (){
return handler_fn.call(null,re_frame.db.app_db,v,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__4655__auto__))
);
return re_frame.subs.cache_and_return.call(null,v,dynv,re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__4655__auto__){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__4655__auto__))
));
}
}
});

re_frame.subs.subscribe.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new version of 'm' in which 'f' has been applied to each value.
 *   (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}
 */
re_frame.subs.map_vals = (function re_frame$subs$map_vals(f,m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__21229__auto__ = (function re_frame$subs$map_vals_$_iter__36350(s__36351){
return (new cljs.core.LazySeq(null,(function (){
var s__36351__$1 = s__36351;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36351__$1);
if(temp__4657__auto__){
var s__36351__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36351__$2)){
var c__21227__auto__ = cljs.core.chunk_first.call(null,s__36351__$2);
var size__21228__auto__ = cljs.core.count.call(null,c__21227__auto__);
var b__36353 = cljs.core.chunk_buffer.call(null,size__21228__auto__);
if((function (){var i__36352 = (0);
while(true){
if((i__36352 < size__21228__auto__)){
var vec__36360 = cljs.core._nth.call(null,c__21227__auto__,i__36352);
var k = cljs.core.nth.call(null,vec__36360,(0),null);
var val = cljs.core.nth.call(null,vec__36360,(1),null);
cljs.core.chunk_append.call(null,b__36353,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null));

var G__36366 = (i__36352 + (1));
i__36352 = G__36366;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36353),re_frame$subs$map_vals_$_iter__36350.call(null,cljs.core.chunk_rest.call(null,s__36351__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36353),null);
}
} else {
var vec__36363 = cljs.core.first.call(null,s__36351__$2);
var k = cljs.core.nth.call(null,vec__36363,(0),null);
var val = cljs.core.nth.call(null,vec__36363,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null),re_frame$subs$map_vals_$_iter__36350.call(null,cljs.core.rest.call(null,s__36351__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21229__auto__.call(null,m);
})());
});
re_frame.subs.deref_input_signals = (function re_frame$subs$deref_input_signals(signals,query_id){
if(cljs.core.sequential_QMARK_.call(null,signals)){
return cljs.core.map.call(null,cljs.core.deref,signals);
} else {
if(cljs.core.map_QMARK_.call(null,signals)){
return re_frame.subs.map_vals.call(null,cljs.core.deref,signals);
} else {
if(cljs.core.truth_(re_frame.interop.deref_QMARK_.call(null,signals))){
return cljs.core.deref.call(null,signals);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: the reg-sub for ",query_id,", must be wrong. Return value from input-signals function is: ",signals);

}
}
}
});
/**
 * Register a given handler function for a given query id.
 * 
 *   There's 3 ways this function can be called
 * 
 *   1. (reg-sub
 *     :test-sub
 *     (fn [db [_]] db))
 *   The value in app-db is passed to the computation function as the 1st argument.
 * 
 *   2. (reg-sub
 *     :a-b-sub
 *     (fn [q-vec d-vec]
 *       [(subs/subscribe [:a-sub])
 *        (subs/subscribe [:b-sub])])
 *     (fn [[a b] [_]] {:a a :b b}))
 * 
 *   Two functions provided. The 2nd is computation fucntion, as before. The 1st
 *   is returns what `input signals` should be provided to the computation. The
 *   `input signals` function is called with two arguments: the query vector
 *   and the dynamic vector. The return value can be singleton reaction or
 *   a sequence of reactions.
 * 
 *   3. (reg-sub
 *     :a-b-sub
 *     :<- [:a-sub]
 *     :<- [:b-sub]
 *     (fn [[a b] [_]] {:a a :b b}))```
 *   This 3rd variation is just syntactic sugar for the 2nd. Pairs are supplied instead
 *   of an `input signals` functions. `:<-` is supplied followed by the subscription
 *   vector.
 *   
 */
re_frame.subs.reg_sub = (function re_frame$subs$reg_sub(var_args){
var args__21531__auto__ = [];
var len__21524__auto___36370 = arguments.length;
var i__21525__auto___36371 = (0);
while(true){
if((i__21525__auto___36371 < len__21524__auto___36370)){
args__21531__auto__.push((arguments[i__21525__auto___36371]));

var G__36372 = (i__21525__auto___36371 + (1));
i__21525__auto___36371 = G__36372;
continue;
} else {
}
break;
}

var argseq__21532__auto__ = ((((1) < args__21531__auto__.length))?(new cljs.core.IndexedSeq(args__21531__auto__.slice((1)),(0),null)):null);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21532__auto__);
});

re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
var computation_fn = cljs.core.last.call(null,args);
var input_args = cljs.core.butlast.call(null,args);
var err_header = [cljs.core.str("re-frame: reg-sub for "),cljs.core.str(query_id),cljs.core.str(", ")].join('');
var inputs_fn = (function (){var G__36369 = cljs.core.count.call(null,input_args);
switch (G__36369) {
case (0):
return ((function (G__36369,computation_fn,input_args,err_header){
return (function() {
var G__36374 = null;
var G__36374__1 = (function (_){
return re_frame.db.app_db;
});
var G__36374__2 = (function (_,___$1){
return re_frame.db.app_db;
});
G__36374 = function(_,___$1){
switch(arguments.length){
case 1:
return G__36374__1.call(this,_);
case 2:
return G__36374__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36374.cljs$core$IFn$_invoke$arity$1 = G__36374__1;
G__36374.cljs$core$IFn$_invoke$arity$2 = G__36374__2;
return G__36374;
})()
;})(G__36369,computation_fn,input_args,err_header))

break;
case (1):
var f = cljs.core.first.call(null,input_args);
if(cljs.core.fn_QMARK_.call(null,f)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"2nd argument expected to be an inputs function, got: ",f);
}

return f;

break;
case (2):
var ret_val = re_frame.subs.subscribe.call(null,cljs.core.second.call(null,input_args));
return ((function (ret_val,G__36369,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return ret_val;
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return ret_val;
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(ret_val,G__36369,computation_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.call(null,(2),input_args);
var vecs = cljs.core.map.call(null,cljs.core.last,pairs);
var ret_val = cljs.core.map.call(null,re_frame.subs.subscribe,vecs);
if(cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,vecs)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected pairs of :<- and vectors, got: ",pairs);
}

return ((function (pairs,vecs,ret_val,G__36369,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return ret_val;
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return ret_val;
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(pairs,vecs,ret_val,G__36369,computation_fn,input_args,err_header))

}
})();
return re_frame.registrar.register_handler.call(null,re_frame.subs.kind,query_id,((function (computation_fn,input_args,err_header,inputs_fn){
return (function() {
var re_frame$subs$subs_handler_fn = null;
var re_frame$subs$subs_handler_fn__2 = (function (db,query_vec){
var subscriptions = inputs_fn.call(null,query_vec);
return re_frame.interop.make_reaction.call(null,((function (subscriptions,computation_fn,input_args,err_header,inputs_fn){
return (function (){
return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
});})(subscriptions,computation_fn,input_args,err_header,inputs_fn))
);
});
var re_frame$subs$subs_handler_fn__3 = (function (db,query_vec,dyn_vec){
var subscriptions = inputs_fn.call(null,query_vec,dyn_vec);
return re_frame.interop.make_reaction.call(null,((function (subscriptions,computation_fn,input_args,err_header,inputs_fn){
return (function (){
return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
});})(subscriptions,computation_fn,input_args,err_header,inputs_fn))
);
});
re_frame$subs$subs_handler_fn = function(db,query_vec,dyn_vec){
switch(arguments.length){
case 2:
return re_frame$subs$subs_handler_fn__2.call(this,db,query_vec);
case 3:
return re_frame$subs$subs_handler_fn__3.call(this,db,query_vec,dyn_vec);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$subs_handler_fn__2;
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$3 = re_frame$subs$subs_handler_fn__3;
return re_frame$subs$subs_handler_fn;
})()
;})(computation_fn,input_args,err_header,inputs_fn))
);
});

re_frame.subs.reg_sub.cljs$lang$maxFixedArity = (1);

re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq36367){
var G__36368 = cljs.core.first.call(null,seq36367);
var seq36367__$1 = cljs.core.next.call(null,seq36367);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic(G__36368,seq36367__$1);
});


//# sourceMappingURL=subs.js.map?rel=1480335674776