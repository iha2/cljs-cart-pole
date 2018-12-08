goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__16107 = arguments.length;
switch (G__16107) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16110 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16110 = (function (f,blockable,meta16111){
this.f = f;
this.blockable = blockable;
this.meta16111 = meta16111;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16112,meta16111__$1){
var self__ = this;
var _16112__$1 = this;
return (new cljs.core.async.t_cljs$core$async16110(self__.f,self__.blockable,meta16111__$1));
});

cljs.core.async.t_cljs$core$async16110.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16112){
var self__ = this;
var _16112__$1 = this;
return self__.meta16111;
});

cljs.core.async.t_cljs$core$async16110.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16110.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16110.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async16110.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async16110.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta16111","meta16111",-1123533575,null)], null);
});

cljs.core.async.t_cljs$core$async16110.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16110.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16110";

cljs.core.async.t_cljs$core$async16110.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async16110");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16110.
 */
cljs.core.async.__GT_t_cljs$core$async16110 = (function cljs$core$async$__GT_t_cljs$core$async16110(f__$1,blockable__$1,meta16111){
return (new cljs.core.async.t_cljs$core$async16110(f__$1,blockable__$1,meta16111));
});

}

return (new cljs.core.async.t_cljs$core$async16110(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__16130 = arguments.length;
switch (G__16130) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__16133 = arguments.length;
switch (G__16133) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__16138 = arguments.length;
switch (G__16138) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_18571 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18571) : fn1.call(null,val_18571));
} else {
cljs.core.async.impl.dispatch.run(((function (val_18571,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18571) : fn1.call(null,val_18571));
});})(val_18571,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__16152 = arguments.length;
switch (G__16152) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4518__auto___18582 = n;
var x_18583 = (0);
while(true){
if((x_18583 < n__4518__auto___18582)){
(a[x_18583] = (0));

var G__18584 = (x_18583 + (1));
x_18583 = G__18584;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__18585 = (i + (1));
i = G__18585;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16186 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16186 = (function (flag,meta16187){
this.flag = flag;
this.meta16187 = meta16187;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16188,meta16187__$1){
var self__ = this;
var _16188__$1 = this;
return (new cljs.core.async.t_cljs$core$async16186(self__.flag,meta16187__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async16186.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16188){
var self__ = this;
var _16188__$1 = this;
return self__.meta16187;
});})(flag))
;

cljs.core.async.t_cljs$core$async16186.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16186.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async16186.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16186.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16186.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta16187","meta16187",783038678,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async16186.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16186.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16186";

cljs.core.async.t_cljs$core$async16186.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async16186");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16186.
 */
cljs.core.async.__GT_t_cljs$core$async16186 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async16186(flag__$1,meta16187){
return (new cljs.core.async.t_cljs$core$async16186(flag__$1,meta16187));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async16186(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16202 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16202 = (function (flag,cb,meta16203){
this.flag = flag;
this.cb = cb;
this.meta16203 = meta16203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16204,meta16203__$1){
var self__ = this;
var _16204__$1 = this;
return (new cljs.core.async.t_cljs$core$async16202(self__.flag,self__.cb,meta16203__$1));
});

cljs.core.async.t_cljs$core$async16202.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16204){
var self__ = this;
var _16204__$1 = this;
return self__.meta16203;
});

cljs.core.async.t_cljs$core$async16202.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16202.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async16202.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16202.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async16202.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta16203","meta16203",1441609130,null)], null);
});

cljs.core.async.t_cljs$core$async16202.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16202.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16202";

cljs.core.async.t_cljs$core$async16202.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async16202");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16202.
 */
cljs.core.async.__GT_t_cljs$core$async16202 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async16202(flag__$1,cb__$1,meta16203){
return (new cljs.core.async.t_cljs$core$async16202(flag__$1,cb__$1,meta16203));
});

}

return (new cljs.core.async.t_cljs$core$async16202(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16208_SHARP_){
var G__16211 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16208_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16211) : fret.call(null,G__16211));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16209_SHARP_){
var G__16212 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16209_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16212) : fret.call(null,G__16212));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4047__auto__ = wport;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18605 = (i + (1));
i = G__18605;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4047__auto__ = ret;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__4036__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4036__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___18612 = arguments.length;
var i__4642__auto___18613 = (0);
while(true){
if((i__4642__auto___18613 < len__4641__auto___18612)){
args__4647__auto__.push((arguments[i__4642__auto___18613]));

var G__18615 = (i__4642__auto___18613 + (1));
i__4642__auto___18613 = G__18615;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__16239){
var map__16240 = p__16239;
var map__16240__$1 = (((((!((map__16240 == null))))?(((((map__16240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16240):map__16240);
var opts = map__16240__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq16222){
var G__16226 = cljs.core.first(seq16222);
var seq16222__$1 = cljs.core.next(seq16222);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16226,seq16222__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__16261 = arguments.length;
switch (G__16261) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__16024__auto___18628 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16024__auto___18628){
return (function (){
var f__16025__auto__ = (function (){var switch__15718__auto__ = ((function (c__16024__auto___18628){
return (function (state_16299){
var state_val_16300 = (state_16299[(1)]);
if((state_val_16300 === (7))){
var inst_16294 = (state_16299[(2)]);
var state_16299__$1 = state_16299;
var statearr_16307_18633 = state_16299__$1;
(statearr_16307_18633[(2)] = inst_16294);

(statearr_16307_18633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16300 === (1))){
var state_16299__$1 = state_16299;
var statearr_16308_18634 = state_16299__$1;
(statearr_16308_18634[(2)] = null);

(statearr_16308_18634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16300 === (4))){
var inst_16277 = (state_16299[(7)]);
var inst_16277__$1 = (state_16299[(2)]);
var inst_16278 = (inst_16277__$1 == null);
var state_16299__$1 = (function (){var statearr_16311 = state_16299;
(statearr_16311[(7)] = inst_16277__$1);

return statearr_16311;
})();
if(cljs.core.truth_(inst_16278)){
var statearr_16314_18639 = state_16299__$1;
(statearr_16314_18639[(1)] = (5));

} else {
var statearr_16315_18641 = state_16299__$1;
(statearr_16315_18641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16300 === (13))){
var state_16299__$1 = state_16299;
var statearr_16316_18642 = state_16299__$1;
(statearr_16316_18642[(2)] = null);

(statearr_16316_18642[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16300 === (6))){
var inst_16277 = (state_16299[(7)]);
var state_16299__$1 = state_16299;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16299__$1,(11),to,inst_16277);
} else {
if((state_val_16300 === (3))){
var inst_16296 = (state_16299[(2)]);
var state_16299__$1 = state_16299;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16299__$1,inst_16296);
} else {
if((state_val_16300 === (12))){
var state_16299__$1 = state_16299;
var statearr_16317_18645 = state_16299__$1;
(statearr_16317_18645[(2)] = null);

(statearr_16317_18645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16300 === (2))){
var state_16299__$1 = state_16299;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16299__$1,(4),from);
} else {
if((state_val_16300 === (11))){
var inst_16287 = (state_16299[(2)]);
var state_16299__$1 = state_16299;
if(cljs.core.truth_(inst_16287)){
var statearr_16318_18648 = state_16299__$1;
(statearr_16318_18648[(1)] = (12));

} else {
var statearr_16319_18649 = state_16299__$1;
(statearr_16319_18649[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16300 === (9))){
var state_16299__$1 = state_16299;
var statearr_16322_18650 = state_16299__$1;
(statearr_16322_18650[(2)] = null);

(statearr_16322_18650[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16300 === (5))){
var state_16299__$1 = state_16299;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16323_18654 = state_16299__$1;
(statearr_16323_18654[(1)] = (8));

} else {
var statearr_16324_18656 = state_16299__$1;
(statearr_16324_18656[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16300 === (14))){
var inst_16292 = (state_16299[(2)]);
var state_16299__$1 = state_16299;
var statearr_16325_18660 = state_16299__$1;
(statearr_16325_18660[(2)] = inst_16292);

(statearr_16325_18660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16300 === (10))){
var inst_16284 = (state_16299[(2)]);
var state_16299__$1 = state_16299;
var statearr_16330_18661 = state_16299__$1;
(statearr_16330_18661[(2)] = inst_16284);

(statearr_16330_18661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16300 === (8))){
var inst_16281 = cljs.core.async.close_BANG_(to);
var state_16299__$1 = state_16299;
var statearr_16333_18662 = state_16299__$1;
(statearr_16333_18662[(2)] = inst_16281);

(statearr_16333_18662[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16024__auto___18628))
;
return ((function (switch__15718__auto__,c__16024__auto___18628){
return (function() {
var cljs$core$async$state_machine__15719__auto__ = null;
var cljs$core$async$state_machine__15719__auto____0 = (function (){
var statearr_16336 = [null,null,null,null,null,null,null,null];
(statearr_16336[(0)] = cljs$core$async$state_machine__15719__auto__);

(statearr_16336[(1)] = (1));

return statearr_16336;
});
var cljs$core$async$state_machine__15719__auto____1 = (function (state_16299){
while(true){
var ret_value__15720__auto__ = (function (){try{while(true){
var result__15721__auto__ = switch__15718__auto__(state_16299);
if(cljs.core.keyword_identical_QMARK_(result__15721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15721__auto__;
}
break;
}
}catch (e16342){if((e16342 instanceof Object)){
var ex__15722__auto__ = e16342;
var statearr_16343_18665 = state_16299;
(statearr_16343_18665[(5)] = ex__15722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16342;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18669 = state_16299;
state_16299 = G__18669;
continue;
} else {
return ret_value__15720__auto__;
}
break;
}
});
cljs$core$async$state_machine__15719__auto__ = function(state_16299){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15719__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15719__auto____1.call(this,state_16299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15719__auto____0;
cljs$core$async$state_machine__15719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15719__auto____1;
return cljs$core$async$state_machine__15719__auto__;
})()
;})(switch__15718__auto__,c__16024__auto___18628))
})();
var state__16026__auto__ = (function (){var statearr_16350 = (f__16025__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16025__auto__.cljs$core$IFn$_invoke$arity$0() : f__16025__auto__.call(null));
(statearr_16350[(6)] = c__16024__auto___18628);

return statearr_16350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16026__auto__);
});})(c__16024__auto___18628))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__16358){
var vec__16359 = p__16358;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16359,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16359,(1),null);
var job = vec__16359;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__16024__auto___18673 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16024__auto___18673,res,vec__16359,v,p,job,jobs,results){
return (function (){
var f__16025__auto__ = (function (){var switch__15718__auto__ = ((function (c__16024__auto___18673,res,vec__16359,v,p,job,jobs,results){
return (function (state_16366){
var state_val_16367 = (state_16366[(1)]);
if((state_val_16367 === (1))){
var state_16366__$1 = state_16366;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16366__$1,(2),res,v);
} else {
if((state_val_16367 === (2))){
var inst_16363 = (state_16366[(2)]);
var inst_16364 = cljs.core.async.close_BANG_(res);
var state_16366__$1 = (function (){var statearr_16372 = state_16366;
(statearr_16372[(7)] = inst_16363);

return statearr_16372;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16366__$1,inst_16364);
} else {
return null;
}
}
});})(c__16024__auto___18673,res,vec__16359,v,p,job,jobs,results))
;
return ((function (switch__15718__auto__,c__16024__auto___18673,res,vec__16359,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15719__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15719__auto____0 = (function (){
var statearr_16373 = [null,null,null,null,null,null,null,null];
(statearr_16373[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15719__auto__);

(statearr_16373[(1)] = (1));

return statearr_16373;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15719__auto____1 = (function (state_16366){
while(true){
var ret_value__15720__auto__ = (function (){try{while(true){
var result__15721__auto__ = switch__15718__auto__(state_16366);
if(cljs.core.keyword_identical_QMARK_(result__15721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15721__auto__;
}
break;
}
}catch (e16375){if((e16375 instanceof Object)){
var ex__15722__auto__ = e16375;
var statearr_16377_18678 = state_16366;
(statearr_16377_18678[(5)] = ex__15722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16375;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18679 = state_16366;
state_16366 = G__18679;
continue;
} else {
return ret_value__15720__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15719__auto__ = function(state_16366){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15719__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15719__auto____1.call(this,state_16366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15719__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15719__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15719__auto__;
})()
;})(switch__15718__auto__,c__16024__auto___18673,res,vec__16359,v,p,job,jobs,results))
})();
var state__16026__auto__ = (function (){var statearr_16378 = (f__16025__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16025__auto__.cljs$core$IFn$_invoke$arity$0() : f__16025__auto__.call(null));
(statearr_16378[(6)] = c__16024__auto___18673);

return statearr_16378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16026__auto__);
});})(c__16024__auto___18673,res,vec__16359,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__16379){
var vec__16380 = p__16379;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16380,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16380,(1),null);
var job = vec__16380;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4518__auto___18682 = n;
var __18683 = (0);
while(true){
if((__18683 < n__4518__auto___18682)){
var G__16383_18686 = type;
var G__16383_18687__$1 = (((G__16383_18686 instanceof cljs.core.Keyword))?G__16383_18686.fqn:null);
switch (G__16383_18687__$1) {
case "compute":
var c__16024__auto___18689 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18683,c__16024__auto___18689,G__16383_18686,G__16383_18687__$1,n__4518__auto___18682,jobs,results,process,async){
return (function (){
var f__16025__auto__ = (function (){var switch__15718__auto__ = ((function (__18683,c__16024__auto___18689,G__16383_18686,G__16383_18687__$1,n__4518__auto___18682,jobs,results,process,async){
return (function (state_16396){
var state_val_16397 = (state_16396[(1)]);
if((state_val_16397 === (1))){
var state_16396__$1 = state_16396;
var statearr_16399_18701 = state_16396__$1;
(statearr_16399_18701[(2)] = null);

(statearr_16399_18701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16397 === (2))){
var state_16396__$1 = state_16396;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16396__$1,(4),jobs);
} else {
if((state_val_16397 === (3))){
var inst_16394 = (state_16396[(2)]);
var state_16396__$1 = state_16396;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16396__$1,inst_16394);
} else {
if((state_val_16397 === (4))){
var inst_16386 = (state_16396[(2)]);
var inst_16387 = process(inst_16386);
var state_16396__$1 = state_16396;
if(cljs.core.truth_(inst_16387)){
var statearr_16401_18705 = state_16396__$1;
(statearr_16401_18705[(1)] = (5));

} else {
var statearr_16402_18706 = state_16396__$1;
(statearr_16402_18706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16397 === (5))){
var state_16396__$1 = state_16396;
var statearr_16407_18709 = state_16396__$1;
(statearr_16407_18709[(2)] = null);

(statearr_16407_18709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16397 === (6))){
var state_16396__$1 = state_16396;
var statearr_16412_18710 = state_16396__$1;
(statearr_16412_18710[(2)] = null);

(statearr_16412_18710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16397 === (7))){
var inst_16392 = (state_16396[(2)]);
var state_16396__$1 = state_16396;
var statearr_16413_18712 = state_16396__$1;
(statearr_16413_18712[(2)] = inst_16392);

(statearr_16413_18712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18683,c__16024__auto___18689,G__16383_18686,G__16383_18687__$1,n__4518__auto___18682,jobs,results,process,async))
;
return ((function (__18683,switch__15718__auto__,c__16024__auto___18689,G__16383_18686,G__16383_18687__$1,n__4518__auto___18682,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15719__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15719__auto____0 = (function (){
var statearr_16418 = [null,null,null,null,null,null,null];
(statearr_16418[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15719__auto__);

(statearr_16418[(1)] = (1));

return statearr_16418;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15719__auto____1 = (function (state_16396){
while(true){
var ret_value__15720__auto__ = (function (){try{while(true){
var result__15721__auto__ = switch__15718__auto__(state_16396);
if(cljs.core.keyword_identical_QMARK_(result__15721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15721__auto__;
}
break;
}
}catch (e16419){if((e16419 instanceof Object)){
var ex__15722__auto__ = e16419;
var statearr_16420_18716 = state_16396;
(statearr_16420_18716[(5)] = ex__15722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16419;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18717 = state_16396;
state_16396 = G__18717;
continue;
} else {
return ret_value__15720__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15719__auto__ = function(state_16396){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15719__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15719__auto____1.call(this,state_16396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15719__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15719__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15719__auto__;
})()
;})(__18683,switch__15718__auto__,c__16024__auto___18689,G__16383_18686,G__16383_18687__$1,n__4518__auto___18682,jobs,results,process,async))
})();
var state__16026__auto__ = (function (){var statearr_16422 = (f__16025__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16025__auto__.cljs$core$IFn$_invoke$arity$0() : f__16025__auto__.call(null));
(statearr_16422[(6)] = c__16024__auto___18689);

return statearr_16422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16026__auto__);
});})(__18683,c__16024__auto___18689,G__16383_18686,G__16383_18687__$1,n__4518__auto___18682,jobs,results,process,async))
);


break;
case "async":
var c__16024__auto___18720 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18683,c__16024__auto___18720,G__16383_18686,G__16383_18687__$1,n__4518__auto___18682,jobs,results,process,async){
return (function (){
var f__16025__auto__ = (function (){var switch__15718__auto__ = ((function (__18683,c__16024__auto___18720,G__16383_18686,G__16383_18687__$1,n__4518__auto___18682,jobs,results,process,async){
return (function (state_16435){
var state_val_16436 = (state_16435[(1)]);
if((state_val_16436 === (1))){
var state_16435__$1 = state_16435;
var statearr_16437_18725 = state_16435__$1;
(statearr_16437_18725[(2)] = null);

(statearr_16437_18725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16436 === (2))){
var state_16435__$1 = state_16435;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16435__$1,(4),jobs);
} else {
if((state_val_16436 === (3))){
var inst_16433 = (state_16435[(2)]);
var state_16435__$1 = state_16435;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16435__$1,inst_16433);
} else {
if((state_val_16436 === (4))){
var inst_16425 = (state_16435[(2)]);
var inst_16426 = async(inst_16425);
var state_16435__$1 = state_16435;
if(cljs.core.truth_(inst_16426)){
var statearr_16440_18727 = state_16435__$1;
(statearr_16440_18727[(1)] = (5));

} else {
var statearr_16441_18728 = state_16435__$1;
(statearr_16441_18728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16436 === (5))){
var state_16435__$1 = state_16435;
var statearr_16447_18729 = state_16435__$1;
(statearr_16447_18729[(2)] = null);

(statearr_16447_18729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16436 === (6))){
var state_16435__$1 = state_16435;
var statearr_16448_18730 = state_16435__$1;
(statearr_16448_18730[(2)] = null);

(statearr_16448_18730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16436 === (7))){
var inst_16431 = (state_16435[(2)]);
var state_16435__$1 = state_16435;
var statearr_16453_18731 = state_16435__$1;
(statearr_16453_18731[(2)] = inst_16431);

(statearr_16453_18731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18683,c__16024__auto___18720,G__16383_18686,G__16383_18687__$1,n__4518__auto___18682,jobs,results,process,async))
;
return ((function (__18683,switch__15718__auto__,c__16024__auto___18720,G__16383_18686,G__16383_18687__$1,n__4518__auto___18682,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15719__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15719__auto____0 = (function (){
var statearr_16461 = [null,null,null,null,null,null,null];
(statearr_16461[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15719__auto__);

(statearr_16461[(1)] = (1));

return statearr_16461;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15719__auto____1 = (function (state_16435){
while(true){
var ret_value__15720__auto__ = (function (){try{while(true){
var result__15721__auto__ = switch__15718__auto__(state_16435);
if(cljs.core.keyword_identical_QMARK_(result__15721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15721__auto__;
}
break;
}
}catch (e16465){if((e16465 instanceof Object)){
var ex__15722__auto__ = e16465;
var statearr_16466_18750 = state_16435;
(statearr_16466_18750[(5)] = ex__15722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16465;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18751 = state_16435;
state_16435 = G__18751;
continue;
} else {
return ret_value__15720__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15719__auto__ = function(state_16435){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15719__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15719__auto____1.call(this,state_16435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15719__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15719__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15719__auto__;
})()
;})(__18683,switch__15718__auto__,c__16024__auto___18720,G__16383_18686,G__16383_18687__$1,n__4518__auto___18682,jobs,results,process,async))
})();
var state__16026__auto__ = (function (){var statearr_16472 = (f__16025__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16025__auto__.cljs$core$IFn$_invoke$arity$0() : f__16025__auto__.call(null));
(statearr_16472[(6)] = c__16024__auto___18720);

return statearr_16472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16026__auto__);
});})(__18683,c__16024__auto___18720,G__16383_18686,G__16383_18687__$1,n__4518__auto___18682,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16383_18687__$1)].join('')));

}

var G__18753 = (__18683 + (1));
__18683 = G__18753;
continue;
} else {
}
break;
}

var c__16024__auto___18754 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16024__auto___18754,jobs,results,process,async){
return (function (){
var f__16025__auto__ = (function (){var switch__15718__auto__ = ((function (c__16024__auto___18754,jobs,results,process,async){
return (function (state_16494){
var state_val_16495 = (state_16494[(1)]);
if((state_val_16495 === (1))){
var state_16494__$1 = state_16494;
var statearr_16498_18759 = state_16494__$1;
(statearr_16498_18759[(2)] = null);

(statearr_16498_18759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (2))){
var state_16494__$1 = state_16494;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16494__$1,(4),from);
} else {
if((state_val_16495 === (3))){
var inst_16492 = (state_16494[(2)]);
var state_16494__$1 = state_16494;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16494__$1,inst_16492);
} else {
if((state_val_16495 === (4))){
var inst_16475 = (state_16494[(7)]);
var inst_16475__$1 = (state_16494[(2)]);
var inst_16476 = (inst_16475__$1 == null);
var state_16494__$1 = (function (){var statearr_16503 = state_16494;
(statearr_16503[(7)] = inst_16475__$1);

return statearr_16503;
})();
if(cljs.core.truth_(inst_16476)){
var statearr_16507_18761 = state_16494__$1;
(statearr_16507_18761[(1)] = (5));

} else {
var statearr_16508_18766 = state_16494__$1;
(statearr_16508_18766[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (5))){
var inst_16478 = cljs.core.async.close_BANG_(jobs);
var state_16494__$1 = state_16494;
var statearr_16509_18771 = state_16494__$1;
(statearr_16509_18771[(2)] = inst_16478);

(statearr_16509_18771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (6))){
var inst_16475 = (state_16494[(7)]);
var inst_16480 = (state_16494[(8)]);
var inst_16480__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16481 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16482 = [inst_16475,inst_16480__$1];
var inst_16483 = (new cljs.core.PersistentVector(null,2,(5),inst_16481,inst_16482,null));
var state_16494__$1 = (function (){var statearr_16512 = state_16494;
(statearr_16512[(8)] = inst_16480__$1);

return statearr_16512;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16494__$1,(8),jobs,inst_16483);
} else {
if((state_val_16495 === (7))){
var inst_16490 = (state_16494[(2)]);
var state_16494__$1 = state_16494;
var statearr_16513_18787 = state_16494__$1;
(statearr_16513_18787[(2)] = inst_16490);

(statearr_16513_18787[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16495 === (8))){
var inst_16480 = (state_16494[(8)]);
var inst_16485 = (state_16494[(2)]);
var state_16494__$1 = (function (){var statearr_16514 = state_16494;
(statearr_16514[(9)] = inst_16485);

return statearr_16514;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16494__$1,(9),results,inst_16480);
} else {
if((state_val_16495 === (9))){
var inst_16487 = (state_16494[(2)]);
var state_16494__$1 = (function (){var statearr_16515 = state_16494;
(statearr_16515[(10)] = inst_16487);

return statearr_16515;
})();
var statearr_16516_18793 = state_16494__$1;
(statearr_16516_18793[(2)] = null);

(statearr_16516_18793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__16024__auto___18754,jobs,results,process,async))
;
return ((function (switch__15718__auto__,c__16024__auto___18754,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15719__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15719__auto____0 = (function (){
var statearr_16517 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16517[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15719__auto__);

(statearr_16517[(1)] = (1));

return statearr_16517;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15719__auto____1 = (function (state_16494){
while(true){
var ret_value__15720__auto__ = (function (){try{while(true){
var result__15721__auto__ = switch__15718__auto__(state_16494);
if(cljs.core.keyword_identical_QMARK_(result__15721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15721__auto__;
}
break;
}
}catch (e16518){if((e16518 instanceof Object)){
var ex__15722__auto__ = e16518;
var statearr_16519_18805 = state_16494;
(statearr_16519_18805[(5)] = ex__15722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16518;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18806 = state_16494;
state_16494 = G__18806;
continue;
} else {
return ret_value__15720__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15719__auto__ = function(state_16494){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15719__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15719__auto____1.call(this,state_16494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15719__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15719__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15719__auto__;
})()
;})(switch__15718__auto__,c__16024__auto___18754,jobs,results,process,async))
})();
var state__16026__auto__ = (function (){var statearr_16520 = (f__16025__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16025__auto__.cljs$core$IFn$_invoke$arity$0() : f__16025__auto__.call(null));
(statearr_16520[(6)] = c__16024__auto___18754);

return statearr_16520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16026__auto__);
});})(c__16024__auto___18754,jobs,results,process,async))
);


var c__16024__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16024__auto__,jobs,results,process,async){
return (function (){
var f__16025__auto__ = (function (){var switch__15718__auto__ = ((function (c__16024__auto__,jobs,results,process,async){
return (function (state_16562){
var state_val_16563 = (state_16562[(1)]);
if((state_val_16563 === (7))){
var inst_16558 = (state_16562[(2)]);
var state_16562__$1 = state_16562;
var statearr_16565_18822 = state_16562__$1;
(statearr_16565_18822[(2)] = inst_16558);

(statearr_16565_18822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16563 === (20))){
var state_16562__$1 = state_16562;
var statearr_16568_18823 = state_16562__$1;
(statearr_16568_18823[(2)] = null);

(statearr_16568_18823[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16563 === (1))){
var state_16562__$1 = state_16562;
var statearr_16573_18824 = state_16562__$1;
(statearr_16573_18824[(2)] = null);

(statearr_16573_18824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16563 === (4))){
var inst_16523 = (state_16562[(7)]);
var inst_16523__$1 = (state_16562[(2)]);
var inst_16524 = (inst_16523__$1 == null);
var state_16562__$1 = (function (){var statearr_16574 = state_16562;
(statearr_16574[(7)] = inst_16523__$1);

return statearr_16574;
})();
if(cljs.core.truth_(inst_16524)){
var statearr_16576_18825 = state_16562__$1;
(statearr_16576_18825[(1)] = (5));

} else {
var statearr_16577_18826 = state_16562__$1;
(statearr_16577_18826[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16563 === (15))){
var inst_16536 = (state_16562[(8)]);
var state_16562__$1 = state_16562;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16562__$1,(18),to,inst_16536);
} else {
if((state_val_16563 === (21))){
var inst_16553 = (state_16562[(2)]);
var state_16562__$1 = state_16562;
var statearr_16579_18827 = state_16562__$1;
(statearr_16579_18827[(2)] = inst_16553);

(statearr_16579_18827[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16563 === (13))){
var inst_16555 = (state_16562[(2)]);
var state_16562__$1 = (function (){var statearr_16580 = state_16562;
(statearr_16580[(9)] = inst_16555);

return statearr_16580;
})();
var statearr_16581_18829 = state_16562__$1;
(statearr_16581_18829[(2)] = null);

(statearr_16581_18829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16563 === (6))){
var inst_16523 = (state_16562[(7)]);
var state_16562__$1 = state_16562;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16562__$1,(11),inst_16523);
} else {
if((state_val_16563 === (17))){
var inst_16548 = (state_16562[(2)]);
var state_16562__$1 = state_16562;
if(cljs.core.truth_(inst_16548)){
var statearr_16582_18832 = state_16562__$1;
(statearr_16582_18832[(1)] = (19));

} else {
var statearr_16583_18833 = state_16562__$1;
(statearr_16583_18833[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16563 === (3))){
var inst_16560 = (state_16562[(2)]);
var state_16562__$1 = state_16562;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16562__$1,inst_16560);
} else {
if((state_val_16563 === (12))){
var inst_16533 = (state_16562[(10)]);
var state_16562__$1 = state_16562;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16562__$1,(14),inst_16533);
} else {
if((state_val_16563 === (2))){
var state_16562__$1 = state_16562;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16562__$1,(4),results);
} else {
if((state_val_16563 === (19))){
var state_16562__$1 = state_16562;
var statearr_16584_18838 = state_16562__$1;
(statearr_16584_18838[(2)] = null);

(statearr_16584_18838[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16563 === (11))){
var inst_16533 = (state_16562[(2)]);
var state_16562__$1 = (function (){var statearr_16585 = state_16562;
(statearr_16585[(10)] = inst_16533);

return statearr_16585;
})();
var statearr_16586_18839 = state_16562__$1;
(statearr_16586_18839[(2)] = null);

(statearr_16586_18839[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16563 === (9))){
var state_16562__$1 = state_16562;
var statearr_16590_18840 = state_16562__$1;
(statearr_16590_18840[(2)] = null);

(statearr_16590_18840[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16563 === (5))){
var state_16562__$1 = state_16562;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16593_18841 = state_16562__$1;
(statearr_16593_18841[(1)] = (8));

} else {
var statearr_16595_18842 = state_16562__$1;
(statearr_16595_18842[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16563 === (14))){
var inst_16542 = (state_16562[(11)]);
var inst_16536 = (state_16562[(8)]);
var inst_16536__$1 = (state_16562[(2)]);
var inst_16541 = (inst_16536__$1 == null);
var inst_16542__$1 = cljs.core.not(inst_16541);
var state_16562__$1 = (function (){var statearr_16596 = state_16562;
(statearr_16596[(11)] = inst_16542__$1);

(statearr_16596[(8)] = inst_16536__$1);

return statearr_16596;
})();
if(inst_16542__$1){
var statearr_16597_18850 = state_16562__$1;
(statearr_16597_18850[(1)] = (15));

} else {
var statearr_16598_18852 = state_16562__$1;
(statearr_16598_18852[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16563 === (16))){
var inst_16542 = (state_16562[(11)]);
var state_16562__$1 = state_16562;
var statearr_16599_18853 = state_16562__$1;
(statearr_16599_18853[(2)] = inst_16542);

(statearr_16599_18853[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16563 === (10))){
var inst_16530 = (state_16562[(2)]);
var state_16562__$1 = state_16562;
var statearr_16600_18854 = state_16562__$1;
(statearr_16600_18854[(2)] = inst_16530);

(statearr_16600_18854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16563 === (18))){
var inst_16545 = (state_16562[(2)]);
var state_16562__$1 = state_16562;
var statearr_16601_18855 = state_16562__$1;
(statearr_16601_18855[(2)] = inst_16545);

(statearr_16601_18855[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16563 === (8))){
var inst_16527 = cljs.core.async.close_BANG_(to);
var state_16562__$1 = state_16562;
var statearr_16602_18856 = state_16562__$1;
(statearr_16602_18856[(2)] = inst_16527);

(statearr_16602_18856[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16024__auto__,jobs,results,process,async))
;
return ((function (switch__15718__auto__,c__16024__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15719__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15719__auto____0 = (function (){
var statearr_16603 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16603[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15719__auto__);

(statearr_16603[(1)] = (1));

return statearr_16603;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15719__auto____1 = (function (state_16562){
while(true){
var ret_value__15720__auto__ = (function (){try{while(true){
var result__15721__auto__ = switch__15718__auto__(state_16562);
if(cljs.core.keyword_identical_QMARK_(result__15721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15721__auto__;
}
break;
}
}catch (e16604){if((e16604 instanceof Object)){
var ex__15722__auto__ = e16604;
var statearr_16607_18857 = state_16562;
(statearr_16607_18857[(5)] = ex__15722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16604;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18858 = state_16562;
state_16562 = G__18858;
continue;
} else {
return ret_value__15720__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15719__auto__ = function(state_16562){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15719__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15719__auto____1.call(this,state_16562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15719__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15719__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15719__auto__;
})()
;})(switch__15718__auto__,c__16024__auto__,jobs,results,process,async))
})();
var state__16026__auto__ = (function (){var statearr_16612 = (f__16025__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16025__auto__.cljs$core$IFn$_invoke$arity$0() : f__16025__auto__.call(null));
(statearr_16612[(6)] = c__16024__auto__);

return statearr_16612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16026__auto__);
});})(c__16024__auto__,jobs,results,process,async))
);

return c__16024__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__16614 = arguments.length;
switch (G__16614) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__16619 = arguments.length;
switch (G__16619) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__16626 = arguments.length;
switch (G__16626) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__16024__auto___18873 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16024__auto___18873,tc,fc){
return (function (){
var f__16025__auto__ = (function (){var switch__15718__auto__ = ((function (c__16024__auto___18873,tc,fc){
return (function (state_16653){
var state_val_16654 = (state_16653[(1)]);
if((state_val_16654 === (7))){
var inst_16649 = (state_16653[(2)]);
var state_16653__$1 = state_16653;
var statearr_16656_18874 = state_16653__$1;
(statearr_16656_18874[(2)] = inst_16649);

(statearr_16656_18874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16654 === (1))){
var state_16653__$1 = state_16653;
var statearr_16657_18875 = state_16653__$1;
(statearr_16657_18875[(2)] = null);

(statearr_16657_18875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16654 === (4))){
var inst_16630 = (state_16653[(7)]);
var inst_16630__$1 = (state_16653[(2)]);
var inst_16631 = (inst_16630__$1 == null);
var state_16653__$1 = (function (){var statearr_16658 = state_16653;
(statearr_16658[(7)] = inst_16630__$1);

return statearr_16658;
})();
if(cljs.core.truth_(inst_16631)){
var statearr_16659_18876 = state_16653__$1;
(statearr_16659_18876[(1)] = (5));

} else {
var statearr_16660_18878 = state_16653__$1;
(statearr_16660_18878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16654 === (13))){
var state_16653__$1 = state_16653;
var statearr_16661_18879 = state_16653__$1;
(statearr_16661_18879[(2)] = null);

(statearr_16661_18879[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16654 === (6))){
var inst_16630 = (state_16653[(7)]);
var inst_16636 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16630) : p.call(null,inst_16630));
var state_16653__$1 = state_16653;
if(cljs.core.truth_(inst_16636)){
var statearr_16662_18883 = state_16653__$1;
(statearr_16662_18883[(1)] = (9));

} else {
var statearr_16663_18884 = state_16653__$1;
(statearr_16663_18884[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16654 === (3))){
var inst_16651 = (state_16653[(2)]);
var state_16653__$1 = state_16653;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16653__$1,inst_16651);
} else {
if((state_val_16654 === (12))){
var state_16653__$1 = state_16653;
var statearr_16664_18887 = state_16653__$1;
(statearr_16664_18887[(2)] = null);

(statearr_16664_18887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16654 === (2))){
var state_16653__$1 = state_16653;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16653__$1,(4),ch);
} else {
if((state_val_16654 === (11))){
var inst_16630 = (state_16653[(7)]);
var inst_16640 = (state_16653[(2)]);
var state_16653__$1 = state_16653;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16653__$1,(8),inst_16640,inst_16630);
} else {
if((state_val_16654 === (9))){
var state_16653__$1 = state_16653;
var statearr_16665_18890 = state_16653__$1;
(statearr_16665_18890[(2)] = tc);

(statearr_16665_18890[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16654 === (5))){
var inst_16633 = cljs.core.async.close_BANG_(tc);
var inst_16634 = cljs.core.async.close_BANG_(fc);
var state_16653__$1 = (function (){var statearr_16666 = state_16653;
(statearr_16666[(8)] = inst_16633);

return statearr_16666;
})();
var statearr_16668_18898 = state_16653__$1;
(statearr_16668_18898[(2)] = inst_16634);

(statearr_16668_18898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16654 === (14))){
var inst_16647 = (state_16653[(2)]);
var state_16653__$1 = state_16653;
var statearr_16669_18899 = state_16653__$1;
(statearr_16669_18899[(2)] = inst_16647);

(statearr_16669_18899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16654 === (10))){
var state_16653__$1 = state_16653;
var statearr_16670_18900 = state_16653__$1;
(statearr_16670_18900[(2)] = fc);

(statearr_16670_18900[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16654 === (8))){
var inst_16642 = (state_16653[(2)]);
var state_16653__$1 = state_16653;
if(cljs.core.truth_(inst_16642)){
var statearr_16671_18907 = state_16653__$1;
(statearr_16671_18907[(1)] = (12));

} else {
var statearr_16672_18908 = state_16653__$1;
(statearr_16672_18908[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16024__auto___18873,tc,fc))
;
return ((function (switch__15718__auto__,c__16024__auto___18873,tc,fc){
return (function() {
var cljs$core$async$state_machine__15719__auto__ = null;
var cljs$core$async$state_machine__15719__auto____0 = (function (){
var statearr_16673 = [null,null,null,null,null,null,null,null,null];
(statearr_16673[(0)] = cljs$core$async$state_machine__15719__auto__);

(statearr_16673[(1)] = (1));

return statearr_16673;
});
var cljs$core$async$state_machine__15719__auto____1 = (function (state_16653){
while(true){
var ret_value__15720__auto__ = (function (){try{while(true){
var result__15721__auto__ = switch__15718__auto__(state_16653);
if(cljs.core.keyword_identical_QMARK_(result__15721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15721__auto__;
}
break;
}
}catch (e16674){if((e16674 instanceof Object)){
var ex__15722__auto__ = e16674;
var statearr_16675_18909 = state_16653;
(statearr_16675_18909[(5)] = ex__15722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16674;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18910 = state_16653;
state_16653 = G__18910;
continue;
} else {
return ret_value__15720__auto__;
}
break;
}
});
cljs$core$async$state_machine__15719__auto__ = function(state_16653){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15719__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15719__auto____1.call(this,state_16653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15719__auto____0;
cljs$core$async$state_machine__15719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15719__auto____1;
return cljs$core$async$state_machine__15719__auto__;
})()
;})(switch__15718__auto__,c__16024__auto___18873,tc,fc))
})();
var state__16026__auto__ = (function (){var statearr_16679 = (f__16025__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16025__auto__.cljs$core$IFn$_invoke$arity$0() : f__16025__auto__.call(null));
(statearr_16679[(6)] = c__16024__auto___18873);

return statearr_16679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16026__auto__);
});})(c__16024__auto___18873,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__16024__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16024__auto__){
return (function (){
var f__16025__auto__ = (function (){var switch__15718__auto__ = ((function (c__16024__auto__){
return (function (state_16703){
var state_val_16704 = (state_16703[(1)]);
if((state_val_16704 === (7))){
var inst_16699 = (state_16703[(2)]);
var state_16703__$1 = state_16703;
var statearr_16705_18911 = state_16703__$1;
(statearr_16705_18911[(2)] = inst_16699);

(statearr_16705_18911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16704 === (1))){
var inst_16682 = init;
var state_16703__$1 = (function (){var statearr_16706 = state_16703;
(statearr_16706[(7)] = inst_16682);

return statearr_16706;
})();
var statearr_16707_18912 = state_16703__$1;
(statearr_16707_18912[(2)] = null);

(statearr_16707_18912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16704 === (4))){
var inst_16685 = (state_16703[(8)]);
var inst_16685__$1 = (state_16703[(2)]);
var inst_16686 = (inst_16685__$1 == null);
var state_16703__$1 = (function (){var statearr_16708 = state_16703;
(statearr_16708[(8)] = inst_16685__$1);

return statearr_16708;
})();
if(cljs.core.truth_(inst_16686)){
var statearr_16709_18913 = state_16703__$1;
(statearr_16709_18913[(1)] = (5));

} else {
var statearr_16710_18920 = state_16703__$1;
(statearr_16710_18920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16704 === (6))){
var inst_16682 = (state_16703[(7)]);
var inst_16685 = (state_16703[(8)]);
var inst_16689 = (state_16703[(9)]);
var inst_16689__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16682,inst_16685) : f.call(null,inst_16682,inst_16685));
var inst_16690 = cljs.core.reduced_QMARK_(inst_16689__$1);
var state_16703__$1 = (function (){var statearr_16711 = state_16703;
(statearr_16711[(9)] = inst_16689__$1);

return statearr_16711;
})();
if(inst_16690){
var statearr_16712_18921 = state_16703__$1;
(statearr_16712_18921[(1)] = (8));

} else {
var statearr_16713_18922 = state_16703__$1;
(statearr_16713_18922[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16704 === (3))){
var inst_16701 = (state_16703[(2)]);
var state_16703__$1 = state_16703;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16703__$1,inst_16701);
} else {
if((state_val_16704 === (2))){
var state_16703__$1 = state_16703;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16703__$1,(4),ch);
} else {
if((state_val_16704 === (9))){
var inst_16689 = (state_16703[(9)]);
var inst_16682 = inst_16689;
var state_16703__$1 = (function (){var statearr_16714 = state_16703;
(statearr_16714[(7)] = inst_16682);

return statearr_16714;
})();
var statearr_16715_18923 = state_16703__$1;
(statearr_16715_18923[(2)] = null);

(statearr_16715_18923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16704 === (5))){
var inst_16682 = (state_16703[(7)]);
var state_16703__$1 = state_16703;
var statearr_16717_18924 = state_16703__$1;
(statearr_16717_18924[(2)] = inst_16682);

(statearr_16717_18924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16704 === (10))){
var inst_16697 = (state_16703[(2)]);
var state_16703__$1 = state_16703;
var statearr_16718_18925 = state_16703__$1;
(statearr_16718_18925[(2)] = inst_16697);

(statearr_16718_18925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16704 === (8))){
var inst_16689 = (state_16703[(9)]);
var inst_16692 = cljs.core.deref(inst_16689);
var state_16703__$1 = state_16703;
var statearr_16719_18926 = state_16703__$1;
(statearr_16719_18926[(2)] = inst_16692);

(statearr_16719_18926[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__16024__auto__))
;
return ((function (switch__15718__auto__,c__16024__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15719__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15719__auto____0 = (function (){
var statearr_16720 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16720[(0)] = cljs$core$async$reduce_$_state_machine__15719__auto__);

(statearr_16720[(1)] = (1));

return statearr_16720;
});
var cljs$core$async$reduce_$_state_machine__15719__auto____1 = (function (state_16703){
while(true){
var ret_value__15720__auto__ = (function (){try{while(true){
var result__15721__auto__ = switch__15718__auto__(state_16703);
if(cljs.core.keyword_identical_QMARK_(result__15721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15721__auto__;
}
break;
}
}catch (e16721){if((e16721 instanceof Object)){
var ex__15722__auto__ = e16721;
var statearr_16722_18927 = state_16703;
(statearr_16722_18927[(5)] = ex__15722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16721;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18928 = state_16703;
state_16703 = G__18928;
continue;
} else {
return ret_value__15720__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15719__auto__ = function(state_16703){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15719__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15719__auto____1.call(this,state_16703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15719__auto____0;
cljs$core$async$reduce_$_state_machine__15719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15719__auto____1;
return cljs$core$async$reduce_$_state_machine__15719__auto__;
})()
;})(switch__15718__auto__,c__16024__auto__))
})();
var state__16026__auto__ = (function (){var statearr_16723 = (f__16025__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16025__auto__.cljs$core$IFn$_invoke$arity$0() : f__16025__auto__.call(null));
(statearr_16723[(6)] = c__16024__auto__);

return statearr_16723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16026__auto__);
});})(c__16024__auto__))
);

return c__16024__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__16024__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16024__auto__,f__$1){
return (function (){
var f__16025__auto__ = (function (){var switch__15718__auto__ = ((function (c__16024__auto__,f__$1){
return (function (state_16730){
var state_val_16731 = (state_16730[(1)]);
if((state_val_16731 === (1))){
var inst_16724 = cljs.core.async.reduce(f__$1,init,ch);
var state_16730__$1 = state_16730;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16730__$1,(2),inst_16724);
} else {
if((state_val_16731 === (2))){
var inst_16726 = (state_16730[(2)]);
var inst_16727 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_16726) : f__$1.call(null,inst_16726));
var state_16730__$1 = state_16730;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16730__$1,inst_16727);
} else {
return null;
}
}
});})(c__16024__auto__,f__$1))
;
return ((function (switch__15718__auto__,c__16024__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__15719__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15719__auto____0 = (function (){
var statearr_16732 = [null,null,null,null,null,null,null];
(statearr_16732[(0)] = cljs$core$async$transduce_$_state_machine__15719__auto__);

(statearr_16732[(1)] = (1));

return statearr_16732;
});
var cljs$core$async$transduce_$_state_machine__15719__auto____1 = (function (state_16730){
while(true){
var ret_value__15720__auto__ = (function (){try{while(true){
var result__15721__auto__ = switch__15718__auto__(state_16730);
if(cljs.core.keyword_identical_QMARK_(result__15721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15721__auto__;
}
break;
}
}catch (e16733){if((e16733 instanceof Object)){
var ex__15722__auto__ = e16733;
var statearr_16734_18935 = state_16730;
(statearr_16734_18935[(5)] = ex__15722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16733;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18936 = state_16730;
state_16730 = G__18936;
continue;
} else {
return ret_value__15720__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15719__auto__ = function(state_16730){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15719__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15719__auto____1.call(this,state_16730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15719__auto____0;
cljs$core$async$transduce_$_state_machine__15719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15719__auto____1;
return cljs$core$async$transduce_$_state_machine__15719__auto__;
})()
;})(switch__15718__auto__,c__16024__auto__,f__$1))
})();
var state__16026__auto__ = (function (){var statearr_16738 = (f__16025__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16025__auto__.cljs$core$IFn$_invoke$arity$0() : f__16025__auto__.call(null));
(statearr_16738[(6)] = c__16024__auto__);

return statearr_16738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16026__auto__);
});})(c__16024__auto__,f__$1))
);

return c__16024__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__16740 = arguments.length;
switch (G__16740) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__16024__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16024__auto__){
return (function (){
var f__16025__auto__ = (function (){var switch__15718__auto__ = ((function (c__16024__auto__){
return (function (state_16765){
var state_val_16766 = (state_16765[(1)]);
if((state_val_16766 === (7))){
var inst_16747 = (state_16765[(2)]);
var state_16765__$1 = state_16765;
var statearr_16767_18942 = state_16765__$1;
(statearr_16767_18942[(2)] = inst_16747);

(statearr_16767_18942[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16766 === (1))){
var inst_16741 = cljs.core.seq(coll);
var inst_16742 = inst_16741;
var state_16765__$1 = (function (){var statearr_16768 = state_16765;
(statearr_16768[(7)] = inst_16742);

return statearr_16768;
})();
var statearr_16769_18943 = state_16765__$1;
(statearr_16769_18943[(2)] = null);

(statearr_16769_18943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16766 === (4))){
var inst_16742 = (state_16765[(7)]);
var inst_16745 = cljs.core.first(inst_16742);
var state_16765__$1 = state_16765;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16765__$1,(7),ch,inst_16745);
} else {
if((state_val_16766 === (13))){
var inst_16759 = (state_16765[(2)]);
var state_16765__$1 = state_16765;
var statearr_16770_18944 = state_16765__$1;
(statearr_16770_18944[(2)] = inst_16759);

(statearr_16770_18944[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16766 === (6))){
var inst_16750 = (state_16765[(2)]);
var state_16765__$1 = state_16765;
if(cljs.core.truth_(inst_16750)){
var statearr_16771_18945 = state_16765__$1;
(statearr_16771_18945[(1)] = (8));

} else {
var statearr_16772_18946 = state_16765__$1;
(statearr_16772_18946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16766 === (3))){
var inst_16763 = (state_16765[(2)]);
var state_16765__$1 = state_16765;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16765__$1,inst_16763);
} else {
if((state_val_16766 === (12))){
var state_16765__$1 = state_16765;
var statearr_16773_18948 = state_16765__$1;
(statearr_16773_18948[(2)] = null);

(statearr_16773_18948[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16766 === (2))){
var inst_16742 = (state_16765[(7)]);
var state_16765__$1 = state_16765;
if(cljs.core.truth_(inst_16742)){
var statearr_16774_18950 = state_16765__$1;
(statearr_16774_18950[(1)] = (4));

} else {
var statearr_16775_18951 = state_16765__$1;
(statearr_16775_18951[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16766 === (11))){
var inst_16756 = cljs.core.async.close_BANG_(ch);
var state_16765__$1 = state_16765;
var statearr_16776_18952 = state_16765__$1;
(statearr_16776_18952[(2)] = inst_16756);

(statearr_16776_18952[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16766 === (9))){
var state_16765__$1 = state_16765;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16781_18953 = state_16765__$1;
(statearr_16781_18953[(1)] = (11));

} else {
var statearr_16782_18954 = state_16765__$1;
(statearr_16782_18954[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16766 === (5))){
var inst_16742 = (state_16765[(7)]);
var state_16765__$1 = state_16765;
var statearr_16787_18955 = state_16765__$1;
(statearr_16787_18955[(2)] = inst_16742);

(statearr_16787_18955[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16766 === (10))){
var inst_16761 = (state_16765[(2)]);
var state_16765__$1 = state_16765;
var statearr_16792_18956 = state_16765__$1;
(statearr_16792_18956[(2)] = inst_16761);

(statearr_16792_18956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16766 === (8))){
var inst_16742 = (state_16765[(7)]);
var inst_16752 = cljs.core.next(inst_16742);
var inst_16742__$1 = inst_16752;
var state_16765__$1 = (function (){var statearr_16793 = state_16765;
(statearr_16793[(7)] = inst_16742__$1);

return statearr_16793;
})();
var statearr_16794_18957 = state_16765__$1;
(statearr_16794_18957[(2)] = null);

(statearr_16794_18957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16024__auto__))
;
return ((function (switch__15718__auto__,c__16024__auto__){
return (function() {
var cljs$core$async$state_machine__15719__auto__ = null;
var cljs$core$async$state_machine__15719__auto____0 = (function (){
var statearr_16795 = [null,null,null,null,null,null,null,null];
(statearr_16795[(0)] = cljs$core$async$state_machine__15719__auto__);

(statearr_16795[(1)] = (1));

return statearr_16795;
});
var cljs$core$async$state_machine__15719__auto____1 = (function (state_16765){
while(true){
var ret_value__15720__auto__ = (function (){try{while(true){
var result__15721__auto__ = switch__15718__auto__(state_16765);
if(cljs.core.keyword_identical_QMARK_(result__15721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15721__auto__;
}
break;
}
}catch (e16796){if((e16796 instanceof Object)){
var ex__15722__auto__ = e16796;
var statearr_16797_18958 = state_16765;
(statearr_16797_18958[(5)] = ex__15722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16796;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18959 = state_16765;
state_16765 = G__18959;
continue;
} else {
return ret_value__15720__auto__;
}
break;
}
});
cljs$core$async$state_machine__15719__auto__ = function(state_16765){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15719__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15719__auto____1.call(this,state_16765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15719__auto____0;
cljs$core$async$state_machine__15719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15719__auto____1;
return cljs$core$async$state_machine__15719__auto__;
})()
;})(switch__15718__auto__,c__16024__auto__))
})();
var state__16026__auto__ = (function (){var statearr_16800 = (f__16025__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16025__auto__.cljs$core$IFn$_invoke$arity$0() : f__16025__auto__.call(null));
(statearr_16800[(6)] = c__16024__auto__);

return statearr_16800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16026__auto__);
});})(c__16024__auto__))
);

return c__16024__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4347__auto__ = (((_ == null))?null:_);
var m__4348__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4348__auto__.call(null,_));
} else {
var m__4348__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4348__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4348__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4348__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4348__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto__.call(null,m,ch));
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4348__auto__.call(null,m));
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4348__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16826 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16826 = (function (ch,cs,meta16827){
this.ch = ch;
this.cs = cs;
this.meta16827 = meta16827;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16828,meta16827__$1){
var self__ = this;
var _16828__$1 = this;
return (new cljs.core.async.t_cljs$core$async16826(self__.ch,self__.cs,meta16827__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async16826.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16828){
var self__ = this;
var _16828__$1 = this;
return self__.meta16827;
});})(cs))
;

cljs.core.async.t_cljs$core$async16826.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16826.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async16826.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16826.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16826.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16826.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16826.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16827","meta16827",1078854221,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async16826.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16826.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16826";

cljs.core.async.t_cljs$core$async16826.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async16826");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16826.
 */
cljs.core.async.__GT_t_cljs$core$async16826 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async16826(ch__$1,cs__$1,meta16827){
return (new cljs.core.async.t_cljs$core$async16826(ch__$1,cs__$1,meta16827));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async16826(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__16024__auto___18971 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16024__auto___18971,cs,m,dchan,dctr,done){
return (function (){
var f__16025__auto__ = (function (){var switch__15718__auto__ = ((function (c__16024__auto___18971,cs,m,dchan,dctr,done){
return (function (state_17011){
var state_val_17012 = (state_17011[(1)]);
if((state_val_17012 === (7))){
var inst_17006 = (state_17011[(2)]);
var state_17011__$1 = state_17011;
var statearr_17013_18975 = state_17011__$1;
(statearr_17013_18975[(2)] = inst_17006);

(statearr_17013_18975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (20))){
var inst_16901 = (state_17011[(7)]);
var inst_16915 = cljs.core.first(inst_16901);
var inst_16916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16915,(0),null);
var inst_16917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16915,(1),null);
var state_17011__$1 = (function (){var statearr_17014 = state_17011;
(statearr_17014[(8)] = inst_16916);

return statearr_17014;
})();
if(cljs.core.truth_(inst_16917)){
var statearr_17015_18980 = state_17011__$1;
(statearr_17015_18980[(1)] = (22));

} else {
var statearr_17016_18984 = state_17011__$1;
(statearr_17016_18984[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (27))){
var inst_16865 = (state_17011[(9)]);
var inst_16950 = (state_17011[(10)]);
var inst_16952 = (state_17011[(11)]);
var inst_16957 = (state_17011[(12)]);
var inst_16957__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16950,inst_16952);
var inst_16958 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16957__$1,inst_16865,done);
var state_17011__$1 = (function (){var statearr_17017 = state_17011;
(statearr_17017[(12)] = inst_16957__$1);

return statearr_17017;
})();
if(cljs.core.truth_(inst_16958)){
var statearr_17018_18985 = state_17011__$1;
(statearr_17018_18985[(1)] = (30));

} else {
var statearr_17019_18986 = state_17011__$1;
(statearr_17019_18986[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (1))){
var state_17011__$1 = state_17011;
var statearr_17020_18987 = state_17011__$1;
(statearr_17020_18987[(2)] = null);

(statearr_17020_18987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (24))){
var inst_16901 = (state_17011[(7)]);
var inst_16923 = (state_17011[(2)]);
var inst_16926 = cljs.core.next(inst_16901);
var inst_16876 = inst_16926;
var inst_16877 = null;
var inst_16878 = (0);
var inst_16879 = (0);
var state_17011__$1 = (function (){var statearr_17021 = state_17011;
(statearr_17021[(13)] = inst_16879);

(statearr_17021[(14)] = inst_16877);

(statearr_17021[(15)] = inst_16923);

(statearr_17021[(16)] = inst_16878);

(statearr_17021[(17)] = inst_16876);

return statearr_17021;
})();
var statearr_17022_18988 = state_17011__$1;
(statearr_17022_18988[(2)] = null);

(statearr_17022_18988[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (39))){
var state_17011__$1 = state_17011;
var statearr_17030_18991 = state_17011__$1;
(statearr_17030_18991[(2)] = null);

(statearr_17030_18991[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (4))){
var inst_16865 = (state_17011[(9)]);
var inst_16865__$1 = (state_17011[(2)]);
var inst_16866 = (inst_16865__$1 == null);
var state_17011__$1 = (function (){var statearr_17032 = state_17011;
(statearr_17032[(9)] = inst_16865__$1);

return statearr_17032;
})();
if(cljs.core.truth_(inst_16866)){
var statearr_17033_18992 = state_17011__$1;
(statearr_17033_18992[(1)] = (5));

} else {
var statearr_17034_18994 = state_17011__$1;
(statearr_17034_18994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (15))){
var inst_16879 = (state_17011[(13)]);
var inst_16877 = (state_17011[(14)]);
var inst_16878 = (state_17011[(16)]);
var inst_16876 = (state_17011[(17)]);
var inst_16895 = (state_17011[(2)]);
var inst_16896 = (inst_16879 + (1));
var tmp17026 = inst_16877;
var tmp17027 = inst_16878;
var tmp17028 = inst_16876;
var inst_16876__$1 = tmp17028;
var inst_16877__$1 = tmp17026;
var inst_16878__$1 = tmp17027;
var inst_16879__$1 = inst_16896;
var state_17011__$1 = (function (){var statearr_17036 = state_17011;
(statearr_17036[(13)] = inst_16879__$1);

(statearr_17036[(14)] = inst_16877__$1);

(statearr_17036[(16)] = inst_16878__$1);

(statearr_17036[(18)] = inst_16895);

(statearr_17036[(17)] = inst_16876__$1);

return statearr_17036;
})();
var statearr_17037_18998 = state_17011__$1;
(statearr_17037_18998[(2)] = null);

(statearr_17037_18998[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (21))){
var inst_16929 = (state_17011[(2)]);
var state_17011__$1 = state_17011;
var statearr_17041_18999 = state_17011__$1;
(statearr_17041_18999[(2)] = inst_16929);

(statearr_17041_18999[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (31))){
var inst_16957 = (state_17011[(12)]);
var inst_16961 = done(null);
var inst_16962 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16957);
var state_17011__$1 = (function (){var statearr_17042 = state_17011;
(statearr_17042[(19)] = inst_16961);

return statearr_17042;
})();
var statearr_17043_19000 = state_17011__$1;
(statearr_17043_19000[(2)] = inst_16962);

(statearr_17043_19000[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (32))){
var inst_16951 = (state_17011[(20)]);
var inst_16950 = (state_17011[(10)]);
var inst_16952 = (state_17011[(11)]);
var inst_16949 = (state_17011[(21)]);
var inst_16964 = (state_17011[(2)]);
var inst_16965 = (inst_16952 + (1));
var tmp17038 = inst_16951;
var tmp17039 = inst_16950;
var tmp17040 = inst_16949;
var inst_16949__$1 = tmp17040;
var inst_16950__$1 = tmp17039;
var inst_16951__$1 = tmp17038;
var inst_16952__$1 = inst_16965;
var state_17011__$1 = (function (){var statearr_17044 = state_17011;
(statearr_17044[(20)] = inst_16951__$1);

(statearr_17044[(10)] = inst_16950__$1);

(statearr_17044[(22)] = inst_16964);

(statearr_17044[(11)] = inst_16952__$1);

(statearr_17044[(21)] = inst_16949__$1);

return statearr_17044;
})();
var statearr_17045_19004 = state_17011__$1;
(statearr_17045_19004[(2)] = null);

(statearr_17045_19004[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (40))){
var inst_16978 = (state_17011[(23)]);
var inst_16982 = done(null);
var inst_16983 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16978);
var state_17011__$1 = (function (){var statearr_17046 = state_17011;
(statearr_17046[(24)] = inst_16982);

return statearr_17046;
})();
var statearr_17047_19008 = state_17011__$1;
(statearr_17047_19008[(2)] = inst_16983);

(statearr_17047_19008[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (33))){
var inst_16968 = (state_17011[(25)]);
var inst_16970 = cljs.core.chunked_seq_QMARK_(inst_16968);
var state_17011__$1 = state_17011;
if(inst_16970){
var statearr_17051_19009 = state_17011__$1;
(statearr_17051_19009[(1)] = (36));

} else {
var statearr_17052_19010 = state_17011__$1;
(statearr_17052_19010[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (13))){
var inst_16889 = (state_17011[(26)]);
var inst_16892 = cljs.core.async.close_BANG_(inst_16889);
var state_17011__$1 = state_17011;
var statearr_17055_19011 = state_17011__$1;
(statearr_17055_19011[(2)] = inst_16892);

(statearr_17055_19011[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (22))){
var inst_16916 = (state_17011[(8)]);
var inst_16920 = cljs.core.async.close_BANG_(inst_16916);
var state_17011__$1 = state_17011;
var statearr_17057_19012 = state_17011__$1;
(statearr_17057_19012[(2)] = inst_16920);

(statearr_17057_19012[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (36))){
var inst_16968 = (state_17011[(25)]);
var inst_16972 = cljs.core.chunk_first(inst_16968);
var inst_16973 = cljs.core.chunk_rest(inst_16968);
var inst_16974 = cljs.core.count(inst_16972);
var inst_16949 = inst_16973;
var inst_16950 = inst_16972;
var inst_16951 = inst_16974;
var inst_16952 = (0);
var state_17011__$1 = (function (){var statearr_17061 = state_17011;
(statearr_17061[(20)] = inst_16951);

(statearr_17061[(10)] = inst_16950);

(statearr_17061[(11)] = inst_16952);

(statearr_17061[(21)] = inst_16949);

return statearr_17061;
})();
var statearr_17062_19013 = state_17011__$1;
(statearr_17062_19013[(2)] = null);

(statearr_17062_19013[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (41))){
var inst_16968 = (state_17011[(25)]);
var inst_16985 = (state_17011[(2)]);
var inst_16986 = cljs.core.next(inst_16968);
var inst_16949 = inst_16986;
var inst_16950 = null;
var inst_16951 = (0);
var inst_16952 = (0);
var state_17011__$1 = (function (){var statearr_17063 = state_17011;
(statearr_17063[(20)] = inst_16951);

(statearr_17063[(10)] = inst_16950);

(statearr_17063[(27)] = inst_16985);

(statearr_17063[(11)] = inst_16952);

(statearr_17063[(21)] = inst_16949);

return statearr_17063;
})();
var statearr_17064_19018 = state_17011__$1;
(statearr_17064_19018[(2)] = null);

(statearr_17064_19018[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (43))){
var state_17011__$1 = state_17011;
var statearr_17065_19019 = state_17011__$1;
(statearr_17065_19019[(2)] = null);

(statearr_17065_19019[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (29))){
var inst_16994 = (state_17011[(2)]);
var state_17011__$1 = state_17011;
var statearr_17068_19024 = state_17011__$1;
(statearr_17068_19024[(2)] = inst_16994);

(statearr_17068_19024[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (44))){
var inst_17003 = (state_17011[(2)]);
var state_17011__$1 = (function (){var statearr_17069 = state_17011;
(statearr_17069[(28)] = inst_17003);

return statearr_17069;
})();
var statearr_17075_19026 = state_17011__$1;
(statearr_17075_19026[(2)] = null);

(statearr_17075_19026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (6))){
var inst_16939 = (state_17011[(29)]);
var inst_16938 = cljs.core.deref(cs);
var inst_16939__$1 = cljs.core.keys(inst_16938);
var inst_16940 = cljs.core.count(inst_16939__$1);
var inst_16941 = cljs.core.reset_BANG_(dctr,inst_16940);
var inst_16948 = cljs.core.seq(inst_16939__$1);
var inst_16949 = inst_16948;
var inst_16950 = null;
var inst_16951 = (0);
var inst_16952 = (0);
var state_17011__$1 = (function (){var statearr_17076 = state_17011;
(statearr_17076[(20)] = inst_16951);

(statearr_17076[(10)] = inst_16950);

(statearr_17076[(11)] = inst_16952);

(statearr_17076[(30)] = inst_16941);

(statearr_17076[(21)] = inst_16949);

(statearr_17076[(29)] = inst_16939__$1);

return statearr_17076;
})();
var statearr_17077_19028 = state_17011__$1;
(statearr_17077_19028[(2)] = null);

(statearr_17077_19028[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (28))){
var inst_16949 = (state_17011[(21)]);
var inst_16968 = (state_17011[(25)]);
var inst_16968__$1 = cljs.core.seq(inst_16949);
var state_17011__$1 = (function (){var statearr_17078 = state_17011;
(statearr_17078[(25)] = inst_16968__$1);

return statearr_17078;
})();
if(inst_16968__$1){
var statearr_17079_19029 = state_17011__$1;
(statearr_17079_19029[(1)] = (33));

} else {
var statearr_17080_19030 = state_17011__$1;
(statearr_17080_19030[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (25))){
var inst_16951 = (state_17011[(20)]);
var inst_16952 = (state_17011[(11)]);
var inst_16954 = (inst_16952 < inst_16951);
var inst_16955 = inst_16954;
var state_17011__$1 = state_17011;
if(cljs.core.truth_(inst_16955)){
var statearr_17081_19035 = state_17011__$1;
(statearr_17081_19035[(1)] = (27));

} else {
var statearr_17082_19036 = state_17011__$1;
(statearr_17082_19036[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (34))){
var state_17011__$1 = state_17011;
var statearr_17087_19037 = state_17011__$1;
(statearr_17087_19037[(2)] = null);

(statearr_17087_19037[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (17))){
var state_17011__$1 = state_17011;
var statearr_17089_19038 = state_17011__$1;
(statearr_17089_19038[(2)] = null);

(statearr_17089_19038[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (3))){
var inst_17008 = (state_17011[(2)]);
var state_17011__$1 = state_17011;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17011__$1,inst_17008);
} else {
if((state_val_17012 === (12))){
var inst_16934 = (state_17011[(2)]);
var state_17011__$1 = state_17011;
var statearr_17113_19039 = state_17011__$1;
(statearr_17113_19039[(2)] = inst_16934);

(statearr_17113_19039[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (2))){
var state_17011__$1 = state_17011;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17011__$1,(4),ch);
} else {
if((state_val_17012 === (23))){
var state_17011__$1 = state_17011;
var statearr_17122_19040 = state_17011__$1;
(statearr_17122_19040[(2)] = null);

(statearr_17122_19040[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (35))){
var inst_16992 = (state_17011[(2)]);
var state_17011__$1 = state_17011;
var statearr_17127_19041 = state_17011__$1;
(statearr_17127_19041[(2)] = inst_16992);

(statearr_17127_19041[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (19))){
var inst_16901 = (state_17011[(7)]);
var inst_16905 = cljs.core.chunk_first(inst_16901);
var inst_16906 = cljs.core.chunk_rest(inst_16901);
var inst_16907 = cljs.core.count(inst_16905);
var inst_16876 = inst_16906;
var inst_16877 = inst_16905;
var inst_16878 = inst_16907;
var inst_16879 = (0);
var state_17011__$1 = (function (){var statearr_17128 = state_17011;
(statearr_17128[(13)] = inst_16879);

(statearr_17128[(14)] = inst_16877);

(statearr_17128[(16)] = inst_16878);

(statearr_17128[(17)] = inst_16876);

return statearr_17128;
})();
var statearr_17129_19042 = state_17011__$1;
(statearr_17129_19042[(2)] = null);

(statearr_17129_19042[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (11))){
var inst_16901 = (state_17011[(7)]);
var inst_16876 = (state_17011[(17)]);
var inst_16901__$1 = cljs.core.seq(inst_16876);
var state_17011__$1 = (function (){var statearr_17135 = state_17011;
(statearr_17135[(7)] = inst_16901__$1);

return statearr_17135;
})();
if(inst_16901__$1){
var statearr_17136_19043 = state_17011__$1;
(statearr_17136_19043[(1)] = (16));

} else {
var statearr_17137_19044 = state_17011__$1;
(statearr_17137_19044[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (9))){
var inst_16936 = (state_17011[(2)]);
var state_17011__$1 = state_17011;
var statearr_17138_19046 = state_17011__$1;
(statearr_17138_19046[(2)] = inst_16936);

(statearr_17138_19046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (5))){
var inst_16874 = cljs.core.deref(cs);
var inst_16875 = cljs.core.seq(inst_16874);
var inst_16876 = inst_16875;
var inst_16877 = null;
var inst_16878 = (0);
var inst_16879 = (0);
var state_17011__$1 = (function (){var statearr_17139 = state_17011;
(statearr_17139[(13)] = inst_16879);

(statearr_17139[(14)] = inst_16877);

(statearr_17139[(16)] = inst_16878);

(statearr_17139[(17)] = inst_16876);

return statearr_17139;
})();
var statearr_17141_19047 = state_17011__$1;
(statearr_17141_19047[(2)] = null);

(statearr_17141_19047[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (14))){
var state_17011__$1 = state_17011;
var statearr_17142_19048 = state_17011__$1;
(statearr_17142_19048[(2)] = null);

(statearr_17142_19048[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (45))){
var inst_17000 = (state_17011[(2)]);
var state_17011__$1 = state_17011;
var statearr_17144_19049 = state_17011__$1;
(statearr_17144_19049[(2)] = inst_17000);

(statearr_17144_19049[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (26))){
var inst_16939 = (state_17011[(29)]);
var inst_16996 = (state_17011[(2)]);
var inst_16997 = cljs.core.seq(inst_16939);
var state_17011__$1 = (function (){var statearr_17145 = state_17011;
(statearr_17145[(31)] = inst_16996);

return statearr_17145;
})();
if(inst_16997){
var statearr_17146_19050 = state_17011__$1;
(statearr_17146_19050[(1)] = (42));

} else {
var statearr_17147_19051 = state_17011__$1;
(statearr_17147_19051[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (16))){
var inst_16901 = (state_17011[(7)]);
var inst_16903 = cljs.core.chunked_seq_QMARK_(inst_16901);
var state_17011__$1 = state_17011;
if(inst_16903){
var statearr_17148_19052 = state_17011__$1;
(statearr_17148_19052[(1)] = (19));

} else {
var statearr_17149_19053 = state_17011__$1;
(statearr_17149_19053[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (38))){
var inst_16989 = (state_17011[(2)]);
var state_17011__$1 = state_17011;
var statearr_17150_19059 = state_17011__$1;
(statearr_17150_19059[(2)] = inst_16989);

(statearr_17150_19059[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (30))){
var state_17011__$1 = state_17011;
var statearr_17151_19062 = state_17011__$1;
(statearr_17151_19062[(2)] = null);

(statearr_17151_19062[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (10))){
var inst_16879 = (state_17011[(13)]);
var inst_16877 = (state_17011[(14)]);
var inst_16888 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16877,inst_16879);
var inst_16889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16888,(0),null);
var inst_16890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16888,(1),null);
var state_17011__$1 = (function (){var statearr_17154 = state_17011;
(statearr_17154[(26)] = inst_16889);

return statearr_17154;
})();
if(cljs.core.truth_(inst_16890)){
var statearr_17155_19063 = state_17011__$1;
(statearr_17155_19063[(1)] = (13));

} else {
var statearr_17156_19064 = state_17011__$1;
(statearr_17156_19064[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (18))){
var inst_16932 = (state_17011[(2)]);
var state_17011__$1 = state_17011;
var statearr_17159_19065 = state_17011__$1;
(statearr_17159_19065[(2)] = inst_16932);

(statearr_17159_19065[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (42))){
var state_17011__$1 = state_17011;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17011__$1,(45),dchan);
} else {
if((state_val_17012 === (37))){
var inst_16865 = (state_17011[(9)]);
var inst_16978 = (state_17011[(23)]);
var inst_16968 = (state_17011[(25)]);
var inst_16978__$1 = cljs.core.first(inst_16968);
var inst_16979 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16978__$1,inst_16865,done);
var state_17011__$1 = (function (){var statearr_17162 = state_17011;
(statearr_17162[(23)] = inst_16978__$1);

return statearr_17162;
})();
if(cljs.core.truth_(inst_16979)){
var statearr_17164_19067 = state_17011__$1;
(statearr_17164_19067[(1)] = (39));

} else {
var statearr_17165_19069 = state_17011__$1;
(statearr_17165_19069[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17012 === (8))){
var inst_16879 = (state_17011[(13)]);
var inst_16878 = (state_17011[(16)]);
var inst_16881 = (inst_16879 < inst_16878);
var inst_16882 = inst_16881;
var state_17011__$1 = state_17011;
if(cljs.core.truth_(inst_16882)){
var statearr_17168_19070 = state_17011__$1;
(statearr_17168_19070[(1)] = (10));

} else {
var statearr_17169_19071 = state_17011__$1;
(statearr_17169_19071[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16024__auto___18971,cs,m,dchan,dctr,done))
;
return ((function (switch__15718__auto__,c__16024__auto___18971,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15719__auto__ = null;
var cljs$core$async$mult_$_state_machine__15719__auto____0 = (function (){
var statearr_17174 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17174[(0)] = cljs$core$async$mult_$_state_machine__15719__auto__);

(statearr_17174[(1)] = (1));

return statearr_17174;
});
var cljs$core$async$mult_$_state_machine__15719__auto____1 = (function (state_17011){
while(true){
var ret_value__15720__auto__ = (function (){try{while(true){
var result__15721__auto__ = switch__15718__auto__(state_17011);
if(cljs.core.keyword_identical_QMARK_(result__15721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15721__auto__;
}
break;
}
}catch (e17175){if((e17175 instanceof Object)){
var ex__15722__auto__ = e17175;
var statearr_17176_19074 = state_17011;
(statearr_17176_19074[(5)] = ex__15722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17175;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19075 = state_17011;
state_17011 = G__19075;
continue;
} else {
return ret_value__15720__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15719__auto__ = function(state_17011){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15719__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15719__auto____1.call(this,state_17011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15719__auto____0;
cljs$core$async$mult_$_state_machine__15719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15719__auto____1;
return cljs$core$async$mult_$_state_machine__15719__auto__;
})()
;})(switch__15718__auto__,c__16024__auto___18971,cs,m,dchan,dctr,done))
})();
var state__16026__auto__ = (function (){var statearr_17177 = (f__16025__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16025__auto__.cljs$core$IFn$_invoke$arity$0() : f__16025__auto__.call(null));
(statearr_17177[(6)] = c__16024__auto___18971);

return statearr_17177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16026__auto__);
});})(c__16024__auto___18971,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__17180 = arguments.length;
switch (G__17180) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto__.call(null,m,ch));
} else {
var m__4348__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto__.call(null,m,ch));
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4348__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4348__auto__.call(null,m));
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4348__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4348__auto__.call(null,m,state_map));
} else {
var m__4348__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4348__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4348__auto__.call(null,m,mode));
} else {
var m__4348__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4348__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___19088 = arguments.length;
var i__4642__auto___19089 = (0);
while(true){
if((i__4642__auto___19089 < len__4641__auto___19088)){
args__4647__auto__.push((arguments[i__4642__auto___19089]));

var G__19095 = (i__4642__auto___19089 + (1));
i__4642__auto___19089 = G__19095;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17211){
var map__17212 = p__17211;
var map__17212__$1 = (((((!((map__17212 == null))))?(((((map__17212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17212):map__17212);
var opts = map__17212__$1;
var statearr_17217_19098 = state;
(statearr_17217_19098[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__17212,map__17212__$1,opts){
return (function (val){
var statearr_17218_19099 = state;
(statearr_17218_19099[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__17212,map__17212__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_17221_19100 = state;
(statearr_17221_19100[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17204){
var G__17205 = cljs.core.first(seq17204);
var seq17204__$1 = cljs.core.next(seq17204);
var G__17206 = cljs.core.first(seq17204__$1);
var seq17204__$2 = cljs.core.next(seq17204__$1);
var G__17207 = cljs.core.first(seq17204__$2);
var seq17204__$3 = cljs.core.next(seq17204__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17205,G__17206,G__17207,seq17204__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17241 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17241 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta17242){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta17242 = meta17242;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17243,meta17242__$1){
var self__ = this;
var _17243__$1 = this;
return (new cljs.core.async.t_cljs$core$async17241(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta17242__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17241.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17243){
var self__ = this;
var _17243__$1 = this;
return self__.meta17242;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17241.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17241.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17241.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17241.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17241.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17241.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17241.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17241.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17241.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta17242","meta17242",-852718147,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17241.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17241.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17241";

cljs.core.async.t_cljs$core$async17241.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async17241");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17241.
 */
cljs.core.async.__GT_t_cljs$core$async17241 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async17241(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta17242){
return (new cljs.core.async.t_cljs$core$async17241(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta17242));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async17241(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16024__auto___19113 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16024__auto___19113,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16025__auto__ = (function (){var switch__15718__auto__ = ((function (c__16024__auto___19113,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17360){
var state_val_17361 = (state_17360[(1)]);
if((state_val_17361 === (7))){
var inst_17273 = (state_17360[(2)]);
var state_17360__$1 = state_17360;
var statearr_17362_19114 = state_17360__$1;
(statearr_17362_19114[(2)] = inst_17273);

(statearr_17362_19114[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17361 === (20))){
var inst_17287 = (state_17360[(7)]);
var state_17360__$1 = state_17360;
var statearr_17363_19116 = state_17360__$1;
(statearr_17363_19116[(2)] = inst_17287);

(statearr_17363_19116[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17361 === (27))){
var state_17360__$1 = state_17360;
var statearr_17365_19117 = state_17360__$1;
(statearr_17365_19117[(2)] = null);

(statearr_17365_19117[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17361 === (1))){
var inst_17258 = (state_17360[(8)]);
var inst_17258__$1 = calc_state();
var inst_17261 = (inst_17258__$1 == null);
var inst_17262 = cljs.core.not(inst_17261);
var state_17360__$1 = (function (){var statearr_17366 = state_17360;
(statearr_17366[(8)] = inst_17258__$1);

return statearr_17366;
})();
if(inst_17262){
var statearr_17368_19118 = state_17360__$1;
(statearr_17368_19118[(1)] = (2));

} else {
var statearr_17370_19119 = state_17360__$1;
(statearr_17370_19119[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17361 === (24))){
var inst_17311 = (state_17360[(9)]);
var inst_17334 = (state_17360[(10)]);
var inst_17320 = (state_17360[(11)]);
var inst_17334__$1 = (inst_17311.cljs$core$IFn$_invoke$arity$1 ? inst_17311.cljs$core$IFn$_invoke$arity$1(inst_17320) : inst_17311.call(null,inst_17320));
var state_17360__$1 = (function (){var statearr_17372 = state_17360;
(statearr_17372[(10)] = inst_17334__$1);

return statearr_17372;
})();
if(cljs.core.truth_(inst_17334__$1)){
var statearr_17373_19120 = state_17360__$1;
(statearr_17373_19120[(1)] = (29));

} else {
var statearr_17374_19122 = state_17360__$1;
(statearr_17374_19122[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17361 === (4))){
var inst_17277 = (state_17360[(2)]);
var state_17360__$1 = state_17360;
if(cljs.core.truth_(inst_17277)){
var statearr_17375_19123 = state_17360__$1;
(statearr_17375_19123[(1)] = (8));

} else {
var statearr_17380_19125 = state_17360__$1;
(statearr_17380_19125[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17361 === (15))){
var inst_17305 = (state_17360[(2)]);
var state_17360__$1 = state_17360;
if(cljs.core.truth_(inst_17305)){
var statearr_17381_19126 = state_17360__$1;
(statearr_17381_19126[(1)] = (19));

} else {
var statearr_17382_19127 = state_17360__$1;
(statearr_17382_19127[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17361 === (21))){
var inst_17310 = (state_17360[(12)]);
var inst_17310__$1 = (state_17360[(2)]);
var inst_17311 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17310__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17310__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17313 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17310__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_17360__$1 = (function (){var statearr_17388 = state_17360;
(statearr_17388[(13)] = inst_17312);

(statearr_17388[(9)] = inst_17311);

(statearr_17388[(12)] = inst_17310__$1);

return statearr_17388;
})();
return cljs.core.async.ioc_alts_BANG_(state_17360__$1,(22),inst_17313);
} else {
if((state_val_17361 === (31))){
var inst_17342 = (state_17360[(2)]);
var state_17360__$1 = state_17360;
if(cljs.core.truth_(inst_17342)){
var statearr_17389_19138 = state_17360__$1;
(statearr_17389_19138[(1)] = (32));

} else {
var statearr_17390_19139 = state_17360__$1;
(statearr_17390_19139[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17361 === (32))){
var inst_17319 = (state_17360[(14)]);
var state_17360__$1 = state_17360;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17360__$1,(35),out,inst_17319);
} else {
if((state_val_17361 === (33))){
var inst_17310 = (state_17360[(12)]);
var inst_17287 = inst_17310;
var state_17360__$1 = (function (){var statearr_17397 = state_17360;
(statearr_17397[(7)] = inst_17287);

return statearr_17397;
})();
var statearr_17398_19159 = state_17360__$1;
(statearr_17398_19159[(2)] = null);

(statearr_17398_19159[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17361 === (13))){
var inst_17287 = (state_17360[(7)]);
var inst_17294 = inst_17287.cljs$lang$protocol_mask$partition0$;
var inst_17295 = (inst_17294 & (64));
var inst_17296 = inst_17287.cljs$core$ISeq$;
var inst_17297 = (cljs.core.PROTOCOL_SENTINEL === inst_17296);
var inst_17298 = ((inst_17295) || (inst_17297));
var state_17360__$1 = state_17360;
if(cljs.core.truth_(inst_17298)){
var statearr_17399_19160 = state_17360__$1;
(statearr_17399_19160[(1)] = (16));

} else {
var statearr_17400_19161 = state_17360__$1;
(statearr_17400_19161[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17361 === (22))){
var inst_17319 = (state_17360[(14)]);
var inst_17320 = (state_17360[(11)]);
var inst_17318 = (state_17360[(2)]);
var inst_17319__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17318,(0),null);
var inst_17320__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17318,(1),null);
var inst_17321 = (inst_17319__$1 == null);
var inst_17322 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17320__$1,change);
var inst_17323 = ((inst_17321) || (inst_17322));
var state_17360__$1 = (function (){var statearr_17402 = state_17360;
(statearr_17402[(14)] = inst_17319__$1);

(statearr_17402[(11)] = inst_17320__$1);

return statearr_17402;
})();
if(cljs.core.truth_(inst_17323)){
var statearr_17404_19162 = state_17360__$1;
(statearr_17404_19162[(1)] = (23));

} else {
var statearr_17405_19163 = state_17360__$1;
(statearr_17405_19163[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17361 === (36))){
var inst_17310 = (state_17360[(12)]);
var inst_17287 = inst_17310;
var state_17360__$1 = (function (){var statearr_17406 = state_17360;
(statearr_17406[(7)] = inst_17287);

return statearr_17406;
})();
var statearr_17407_19170 = state_17360__$1;
(statearr_17407_19170[(2)] = null);

(statearr_17407_19170[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17361 === (29))){
var inst_17334 = (state_17360[(10)]);
var state_17360__$1 = state_17360;
var statearr_17408_19171 = state_17360__$1;
(statearr_17408_19171[(2)] = inst_17334);

(statearr_17408_19171[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17361 === (6))){
var state_17360__$1 = state_17360;
var statearr_17410_19172 = state_17360__$1;
(statearr_17410_19172[(2)] = false);

(statearr_17410_19172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17361 === (28))){
var inst_17330 = (state_17360[(2)]);
var inst_17331 = calc_state();
var inst_17287 = inst_17331;
var state_17360__$1 = (function (){var statearr_17411 = state_17360;
(statearr_17411[(7)] = inst_17287);

(statearr_17411[(15)] = inst_17330);

return statearr_17411;
})();
var statearr_17412_19173 = state_17360__$1;
(statearr_17412_19173[(2)] = null);

(statearr_17412_19173[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17361 === (25))){
var inst_17356 = (state_17360[(2)]);
var state_17360__$1 = state_17360;
var statearr_17413_19177 = state_17360__$1;
(statearr_17413_19177[(2)] = inst_17356);

(statearr_17413_19177[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17361 === (34))){
var inst_17354 = (state_17360[(2)]);
var state_17360__$1 = state_17360;
var statearr_17414_19178 = state_17360__$1;
(statearr_17414_19178[(2)] = inst_17354);

(statearr_17414_19178[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17361 === (17))){
var state_17360__$1 = state_17360;
var statearr_17415_19179 = state_17360__$1;
(statearr_17415_19179[(2)] = false);

(statearr_17415_19179[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17361 === (3))){
var state_17360__$1 = state_17360;
var statearr_17416_19180 = state_17360__$1;
(statearr_17416_19180[(2)] = false);

(statearr_17416_19180[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17361 === (12))){
var inst_17358 = (state_17360[(2)]);
var state_17360__$1 = state_17360;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17360__$1,inst_17358);
} else {
if((state_val_17361 === (2))){
var inst_17258 = (state_17360[(8)]);
var inst_17264 = inst_17258.cljs$lang$protocol_mask$partition0$;
var inst_17265 = (inst_17264 & (64));
var inst_17266 = inst_17258.cljs$core$ISeq$;
var inst_17267 = (cljs.core.PROTOCOL_SENTINEL === inst_17266);
var inst_17268 = ((inst_17265) || (inst_17267));
var state_17360__$1 = state_17360;
if(cljs.core.truth_(inst_17268)){
var statearr_17418_19184 = state_17360__$1;
(statearr_17418_19184[(1)] = (5));

} else {
var statearr_17419_19185 = state_17360__$1;
(statearr_17419_19185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17361 === (23))){
var inst_17319 = (state_17360[(14)]);
var inst_17325 = (inst_17319 == null);
var state_17360__$1 = state_17360;
if(cljs.core.truth_(inst_17325)){
var statearr_17420_19188 = state_17360__$1;
(statearr_17420_19188[(1)] = (26));

} else {
var statearr_17421_19189 = state_17360__$1;
(statearr_17421_19189[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17361 === (35))){
var inst_17345 = (state_17360[(2)]);
var state_17360__$1 = state_17360;
if(cljs.core.truth_(inst_17345)){
var statearr_17425_19190 = state_17360__$1;
(statearr_17425_19190[(1)] = (36));

} else {
var statearr_17426_19191 = state_17360__$1;
(statearr_17426_19191[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17361 === (19))){
var inst_17287 = (state_17360[(7)]);
var inst_17307 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17287);
var state_17360__$1 = state_17360;
var statearr_17427_19192 = state_17360__$1;
(statearr_17427_19192[(2)] = inst_17307);

(statearr_17427_19192[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17361 === (11))){
var inst_17287 = (state_17360[(7)]);
var inst_17291 = (inst_17287 == null);
var inst_17292 = cljs.core.not(inst_17291);
var state_17360__$1 = state_17360;
if(inst_17292){
var statearr_17428_19193 = state_17360__$1;
(statearr_17428_19193[(1)] = (13));

} else {
var statearr_17429_19194 = state_17360__$1;
(statearr_17429_19194[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17361 === (9))){
var inst_17258 = (state_17360[(8)]);
var state_17360__$1 = state_17360;
var statearr_17430_19195 = state_17360__$1;
(statearr_17430_19195[(2)] = inst_17258);

(statearr_17430_19195[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17361 === (5))){
var state_17360__$1 = state_17360;
var statearr_17431_19196 = state_17360__$1;
(statearr_17431_19196[(2)] = true);

(statearr_17431_19196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17361 === (14))){
var state_17360__$1 = state_17360;
var statearr_17432_19197 = state_17360__$1;
(statearr_17432_19197[(2)] = false);

(statearr_17432_19197[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17361 === (26))){
var inst_17320 = (state_17360[(11)]);
var inst_17327 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17320);
var state_17360__$1 = state_17360;
var statearr_17433_19198 = state_17360__$1;
(statearr_17433_19198[(2)] = inst_17327);

(statearr_17433_19198[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17361 === (16))){
var state_17360__$1 = state_17360;
var statearr_17435_19199 = state_17360__$1;
(statearr_17435_19199[(2)] = true);

(statearr_17435_19199[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17361 === (38))){
var inst_17350 = (state_17360[(2)]);
var state_17360__$1 = state_17360;
var statearr_17437_19200 = state_17360__$1;
(statearr_17437_19200[(2)] = inst_17350);

(statearr_17437_19200[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17361 === (30))){
var inst_17312 = (state_17360[(13)]);
var inst_17311 = (state_17360[(9)]);
var inst_17320 = (state_17360[(11)]);
var inst_17337 = cljs.core.empty_QMARK_(inst_17311);
var inst_17338 = (inst_17312.cljs$core$IFn$_invoke$arity$1 ? inst_17312.cljs$core$IFn$_invoke$arity$1(inst_17320) : inst_17312.call(null,inst_17320));
var inst_17339 = cljs.core.not(inst_17338);
var inst_17340 = ((inst_17337) && (inst_17339));
var state_17360__$1 = state_17360;
var statearr_17438_19201 = state_17360__$1;
(statearr_17438_19201[(2)] = inst_17340);

(statearr_17438_19201[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17361 === (10))){
var inst_17258 = (state_17360[(8)]);
var inst_17282 = (state_17360[(2)]);
var inst_17283 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17282,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17284 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17282,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17286 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17282,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17287 = inst_17258;
var state_17360__$1 = (function (){var statearr_17439 = state_17360;
(statearr_17439[(16)] = inst_17284);

(statearr_17439[(7)] = inst_17287);

(statearr_17439[(17)] = inst_17286);

(statearr_17439[(18)] = inst_17283);

return statearr_17439;
})();
var statearr_17440_19204 = state_17360__$1;
(statearr_17440_19204[(2)] = null);

(statearr_17440_19204[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17361 === (18))){
var inst_17302 = (state_17360[(2)]);
var state_17360__$1 = state_17360;
var statearr_17441_19205 = state_17360__$1;
(statearr_17441_19205[(2)] = inst_17302);

(statearr_17441_19205[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17361 === (37))){
var state_17360__$1 = state_17360;
var statearr_17442_19206 = state_17360__$1;
(statearr_17442_19206[(2)] = null);

(statearr_17442_19206[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17361 === (8))){
var inst_17258 = (state_17360[(8)]);
var inst_17279 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17258);
var state_17360__$1 = state_17360;
var statearr_17443_19207 = state_17360__$1;
(statearr_17443_19207[(2)] = inst_17279);

(statearr_17443_19207[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16024__auto___19113,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15718__auto__,c__16024__auto___19113,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15719__auto__ = null;
var cljs$core$async$mix_$_state_machine__15719__auto____0 = (function (){
var statearr_17444 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17444[(0)] = cljs$core$async$mix_$_state_machine__15719__auto__);

(statearr_17444[(1)] = (1));

return statearr_17444;
});
var cljs$core$async$mix_$_state_machine__15719__auto____1 = (function (state_17360){
while(true){
var ret_value__15720__auto__ = (function (){try{while(true){
var result__15721__auto__ = switch__15718__auto__(state_17360);
if(cljs.core.keyword_identical_QMARK_(result__15721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15721__auto__;
}
break;
}
}catch (e17445){if((e17445 instanceof Object)){
var ex__15722__auto__ = e17445;
var statearr_17446_19217 = state_17360;
(statearr_17446_19217[(5)] = ex__15722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17445;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19218 = state_17360;
state_17360 = G__19218;
continue;
} else {
return ret_value__15720__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15719__auto__ = function(state_17360){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15719__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15719__auto____1.call(this,state_17360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15719__auto____0;
cljs$core$async$mix_$_state_machine__15719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15719__auto____1;
return cljs$core$async$mix_$_state_machine__15719__auto__;
})()
;})(switch__15718__auto__,c__16024__auto___19113,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16026__auto__ = (function (){var statearr_17449 = (f__16025__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16025__auto__.cljs$core$IFn$_invoke$arity$0() : f__16025__auto__.call(null));
(statearr_17449[(6)] = c__16024__auto___19113);

return statearr_17449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16026__auto__);
});})(c__16024__auto___19113,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4348__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4348__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4348__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4348__auto__.call(null,p,v,ch));
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4348__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__17466 = arguments.length;
switch (G__17466) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4348__auto__.call(null,p));
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__4348__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4348__auto__.call(null,p,v));
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__4348__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__17471 = arguments.length;
switch (G__17471) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4047__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4047__auto__,mults){
return (function (p1__17469_SHARP_){
if(cljs.core.truth_((p1__17469_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17469_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17469_SHARP_.call(null,topic)))){
return p1__17469_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17469_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17478 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17478 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17479){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17479 = meta17479;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17480,meta17479__$1){
var self__ = this;
var _17480__$1 = this;
return (new cljs.core.async.t_cljs$core$async17478(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17479__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17478.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17480){
var self__ = this;
var _17480__$1 = this;
return self__.meta17479;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17478.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17478.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17478.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17478.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17478.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17478.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17478.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17478.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta17479","meta17479",1778792730,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17478.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17478.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17478";

cljs.core.async.t_cljs$core$async17478.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async17478");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17478.
 */
cljs.core.async.__GT_t_cljs$core$async17478 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async17478(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17479){
return (new cljs.core.async.t_cljs$core$async17478(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17479));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async17478(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16024__auto___19226 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16024__auto___19226,mults,ensure_mult,p){
return (function (){
var f__16025__auto__ = (function (){var switch__15718__auto__ = ((function (c__16024__auto___19226,mults,ensure_mult,p){
return (function (state_17564){
var state_val_17565 = (state_17564[(1)]);
if((state_val_17565 === (7))){
var inst_17560 = (state_17564[(2)]);
var state_17564__$1 = state_17564;
var statearr_17567_19227 = state_17564__$1;
(statearr_17567_19227[(2)] = inst_17560);

(statearr_17567_19227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (20))){
var state_17564__$1 = state_17564;
var statearr_17568_19228 = state_17564__$1;
(statearr_17568_19228[(2)] = null);

(statearr_17568_19228[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (1))){
var state_17564__$1 = state_17564;
var statearr_17571_19229 = state_17564__$1;
(statearr_17571_19229[(2)] = null);

(statearr_17571_19229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (24))){
var inst_17542 = (state_17564[(7)]);
var inst_17552 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17542);
var state_17564__$1 = state_17564;
var statearr_17573_19230 = state_17564__$1;
(statearr_17573_19230[(2)] = inst_17552);

(statearr_17573_19230[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (4))){
var inst_17489 = (state_17564[(8)]);
var inst_17489__$1 = (state_17564[(2)]);
var inst_17490 = (inst_17489__$1 == null);
var state_17564__$1 = (function (){var statearr_17576 = state_17564;
(statearr_17576[(8)] = inst_17489__$1);

return statearr_17576;
})();
if(cljs.core.truth_(inst_17490)){
var statearr_17577_19231 = state_17564__$1;
(statearr_17577_19231[(1)] = (5));

} else {
var statearr_17578_19232 = state_17564__$1;
(statearr_17578_19232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (15))){
var inst_17534 = (state_17564[(2)]);
var state_17564__$1 = state_17564;
var statearr_17579_19233 = state_17564__$1;
(statearr_17579_19233[(2)] = inst_17534);

(statearr_17579_19233[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (21))){
var inst_17557 = (state_17564[(2)]);
var state_17564__$1 = (function (){var statearr_17580 = state_17564;
(statearr_17580[(9)] = inst_17557);

return statearr_17580;
})();
var statearr_17581_19235 = state_17564__$1;
(statearr_17581_19235[(2)] = null);

(statearr_17581_19235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (13))){
var inst_17514 = (state_17564[(10)]);
var inst_17517 = cljs.core.chunked_seq_QMARK_(inst_17514);
var state_17564__$1 = state_17564;
if(inst_17517){
var statearr_17582_19236 = state_17564__$1;
(statearr_17582_19236[(1)] = (16));

} else {
var statearr_17583_19237 = state_17564__$1;
(statearr_17583_19237[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (22))){
var inst_17548 = (state_17564[(2)]);
var state_17564__$1 = state_17564;
if(cljs.core.truth_(inst_17548)){
var statearr_17585_19239 = state_17564__$1;
(statearr_17585_19239[(1)] = (23));

} else {
var statearr_17586_19244 = state_17564__$1;
(statearr_17586_19244[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (6))){
var inst_17542 = (state_17564[(7)]);
var inst_17544 = (state_17564[(11)]);
var inst_17489 = (state_17564[(8)]);
var inst_17542__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17489) : topic_fn.call(null,inst_17489));
var inst_17543 = cljs.core.deref(mults);
var inst_17544__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17543,inst_17542__$1);
var state_17564__$1 = (function (){var statearr_17592 = state_17564;
(statearr_17592[(7)] = inst_17542__$1);

(statearr_17592[(11)] = inst_17544__$1);

return statearr_17592;
})();
if(cljs.core.truth_(inst_17544__$1)){
var statearr_17593_19247 = state_17564__$1;
(statearr_17593_19247[(1)] = (19));

} else {
var statearr_17595_19248 = state_17564__$1;
(statearr_17595_19248[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (25))){
var inst_17554 = (state_17564[(2)]);
var state_17564__$1 = state_17564;
var statearr_17598_19249 = state_17564__$1;
(statearr_17598_19249[(2)] = inst_17554);

(statearr_17598_19249[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (17))){
var inst_17514 = (state_17564[(10)]);
var inst_17525 = cljs.core.first(inst_17514);
var inst_17526 = cljs.core.async.muxch_STAR_(inst_17525);
var inst_17527 = cljs.core.async.close_BANG_(inst_17526);
var inst_17528 = cljs.core.next(inst_17514);
var inst_17499 = inst_17528;
var inst_17500 = null;
var inst_17501 = (0);
var inst_17502 = (0);
var state_17564__$1 = (function (){var statearr_17606 = state_17564;
(statearr_17606[(12)] = inst_17499);

(statearr_17606[(13)] = inst_17500);

(statearr_17606[(14)] = inst_17527);

(statearr_17606[(15)] = inst_17501);

(statearr_17606[(16)] = inst_17502);

return statearr_17606;
})();
var statearr_17610_19250 = state_17564__$1;
(statearr_17610_19250[(2)] = null);

(statearr_17610_19250[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (3))){
var inst_17562 = (state_17564[(2)]);
var state_17564__$1 = state_17564;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17564__$1,inst_17562);
} else {
if((state_val_17565 === (12))){
var inst_17536 = (state_17564[(2)]);
var state_17564__$1 = state_17564;
var statearr_17613_19251 = state_17564__$1;
(statearr_17613_19251[(2)] = inst_17536);

(statearr_17613_19251[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (2))){
var state_17564__$1 = state_17564;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17564__$1,(4),ch);
} else {
if((state_val_17565 === (23))){
var state_17564__$1 = state_17564;
var statearr_17616_19252 = state_17564__$1;
(statearr_17616_19252[(2)] = null);

(statearr_17616_19252[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (19))){
var inst_17544 = (state_17564[(11)]);
var inst_17489 = (state_17564[(8)]);
var inst_17546 = cljs.core.async.muxch_STAR_(inst_17544);
var state_17564__$1 = state_17564;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17564__$1,(22),inst_17546,inst_17489);
} else {
if((state_val_17565 === (11))){
var inst_17499 = (state_17564[(12)]);
var inst_17514 = (state_17564[(10)]);
var inst_17514__$1 = cljs.core.seq(inst_17499);
var state_17564__$1 = (function (){var statearr_17620 = state_17564;
(statearr_17620[(10)] = inst_17514__$1);

return statearr_17620;
})();
if(inst_17514__$1){
var statearr_17621_19262 = state_17564__$1;
(statearr_17621_19262[(1)] = (13));

} else {
var statearr_17622_19263 = state_17564__$1;
(statearr_17622_19263[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (9))){
var inst_17538 = (state_17564[(2)]);
var state_17564__$1 = state_17564;
var statearr_17623_19270 = state_17564__$1;
(statearr_17623_19270[(2)] = inst_17538);

(statearr_17623_19270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (5))){
var inst_17496 = cljs.core.deref(mults);
var inst_17497 = cljs.core.vals(inst_17496);
var inst_17498 = cljs.core.seq(inst_17497);
var inst_17499 = inst_17498;
var inst_17500 = null;
var inst_17501 = (0);
var inst_17502 = (0);
var state_17564__$1 = (function (){var statearr_17624 = state_17564;
(statearr_17624[(12)] = inst_17499);

(statearr_17624[(13)] = inst_17500);

(statearr_17624[(15)] = inst_17501);

(statearr_17624[(16)] = inst_17502);

return statearr_17624;
})();
var statearr_17625_19278 = state_17564__$1;
(statearr_17625_19278[(2)] = null);

(statearr_17625_19278[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (14))){
var state_17564__$1 = state_17564;
var statearr_17629_19281 = state_17564__$1;
(statearr_17629_19281[(2)] = null);

(statearr_17629_19281[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (16))){
var inst_17514 = (state_17564[(10)]);
var inst_17520 = cljs.core.chunk_first(inst_17514);
var inst_17521 = cljs.core.chunk_rest(inst_17514);
var inst_17522 = cljs.core.count(inst_17520);
var inst_17499 = inst_17521;
var inst_17500 = inst_17520;
var inst_17501 = inst_17522;
var inst_17502 = (0);
var state_17564__$1 = (function (){var statearr_17630 = state_17564;
(statearr_17630[(12)] = inst_17499);

(statearr_17630[(13)] = inst_17500);

(statearr_17630[(15)] = inst_17501);

(statearr_17630[(16)] = inst_17502);

return statearr_17630;
})();
var statearr_17631_19283 = state_17564__$1;
(statearr_17631_19283[(2)] = null);

(statearr_17631_19283[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (10))){
var inst_17499 = (state_17564[(12)]);
var inst_17500 = (state_17564[(13)]);
var inst_17501 = (state_17564[(15)]);
var inst_17502 = (state_17564[(16)]);
var inst_17507 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17500,inst_17502);
var inst_17508 = cljs.core.async.muxch_STAR_(inst_17507);
var inst_17509 = cljs.core.async.close_BANG_(inst_17508);
var inst_17510 = (inst_17502 + (1));
var tmp17626 = inst_17499;
var tmp17627 = inst_17500;
var tmp17628 = inst_17501;
var inst_17499__$1 = tmp17626;
var inst_17500__$1 = tmp17627;
var inst_17501__$1 = tmp17628;
var inst_17502__$1 = inst_17510;
var state_17564__$1 = (function (){var statearr_17632 = state_17564;
(statearr_17632[(12)] = inst_17499__$1);

(statearr_17632[(13)] = inst_17500__$1);

(statearr_17632[(17)] = inst_17509);

(statearr_17632[(15)] = inst_17501__$1);

(statearr_17632[(16)] = inst_17502__$1);

return statearr_17632;
})();
var statearr_17633_19284 = state_17564__$1;
(statearr_17633_19284[(2)] = null);

(statearr_17633_19284[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (18))){
var inst_17531 = (state_17564[(2)]);
var state_17564__$1 = state_17564;
var statearr_17634_19290 = state_17564__$1;
(statearr_17634_19290[(2)] = inst_17531);

(statearr_17634_19290[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17565 === (8))){
var inst_17501 = (state_17564[(15)]);
var inst_17502 = (state_17564[(16)]);
var inst_17504 = (inst_17502 < inst_17501);
var inst_17505 = inst_17504;
var state_17564__$1 = state_17564;
if(cljs.core.truth_(inst_17505)){
var statearr_17635_19301 = state_17564__$1;
(statearr_17635_19301[(1)] = (10));

} else {
var statearr_17636_19302 = state_17564__$1;
(statearr_17636_19302[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16024__auto___19226,mults,ensure_mult,p))
;
return ((function (switch__15718__auto__,c__16024__auto___19226,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15719__auto__ = null;
var cljs$core$async$state_machine__15719__auto____0 = (function (){
var statearr_17637 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17637[(0)] = cljs$core$async$state_machine__15719__auto__);

(statearr_17637[(1)] = (1));

return statearr_17637;
});
var cljs$core$async$state_machine__15719__auto____1 = (function (state_17564){
while(true){
var ret_value__15720__auto__ = (function (){try{while(true){
var result__15721__auto__ = switch__15718__auto__(state_17564);
if(cljs.core.keyword_identical_QMARK_(result__15721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15721__auto__;
}
break;
}
}catch (e17638){if((e17638 instanceof Object)){
var ex__15722__auto__ = e17638;
var statearr_17642_19311 = state_17564;
(statearr_17642_19311[(5)] = ex__15722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17638;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19319 = state_17564;
state_17564 = G__19319;
continue;
} else {
return ret_value__15720__auto__;
}
break;
}
});
cljs$core$async$state_machine__15719__auto__ = function(state_17564){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15719__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15719__auto____1.call(this,state_17564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15719__auto____0;
cljs$core$async$state_machine__15719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15719__auto____1;
return cljs$core$async$state_machine__15719__auto__;
})()
;})(switch__15718__auto__,c__16024__auto___19226,mults,ensure_mult,p))
})();
var state__16026__auto__ = (function (){var statearr_17650 = (f__16025__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16025__auto__.cljs$core$IFn$_invoke$arity$0() : f__16025__auto__.call(null));
(statearr_17650[(6)] = c__16024__auto___19226);

return statearr_17650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16026__auto__);
});})(c__16024__auto___19226,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__17655 = arguments.length;
switch (G__17655) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__17669 = arguments.length;
switch (G__17669) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__17674 = arguments.length;
switch (G__17674) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__16024__auto___19344 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16024__auto___19344,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16025__auto__ = (function (){var switch__15718__auto__ = ((function (c__16024__auto___19344,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17714){
var state_val_17715 = (state_17714[(1)]);
if((state_val_17715 === (7))){
var state_17714__$1 = state_17714;
var statearr_17720_19346 = state_17714__$1;
(statearr_17720_19346[(2)] = null);

(statearr_17720_19346[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17715 === (1))){
var state_17714__$1 = state_17714;
var statearr_17725_19351 = state_17714__$1;
(statearr_17725_19351[(2)] = null);

(statearr_17725_19351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17715 === (4))){
var inst_17678 = (state_17714[(7)]);
var inst_17680 = (inst_17678 < cnt);
var state_17714__$1 = state_17714;
if(cljs.core.truth_(inst_17680)){
var statearr_17730_19352 = state_17714__$1;
(statearr_17730_19352[(1)] = (6));

} else {
var statearr_17731_19353 = state_17714__$1;
(statearr_17731_19353[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17715 === (15))){
var inst_17710 = (state_17714[(2)]);
var state_17714__$1 = state_17714;
var statearr_17732_19354 = state_17714__$1;
(statearr_17732_19354[(2)] = inst_17710);

(statearr_17732_19354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17715 === (13))){
var inst_17703 = cljs.core.async.close_BANG_(out);
var state_17714__$1 = state_17714;
var statearr_17733_19355 = state_17714__$1;
(statearr_17733_19355[(2)] = inst_17703);

(statearr_17733_19355[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17715 === (6))){
var state_17714__$1 = state_17714;
var statearr_17735_19356 = state_17714__$1;
(statearr_17735_19356[(2)] = null);

(statearr_17735_19356[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17715 === (3))){
var inst_17712 = (state_17714[(2)]);
var state_17714__$1 = state_17714;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17714__$1,inst_17712);
} else {
if((state_val_17715 === (12))){
var inst_17700 = (state_17714[(8)]);
var inst_17700__$1 = (state_17714[(2)]);
var inst_17701 = cljs.core.some(cljs.core.nil_QMARK_,inst_17700__$1);
var state_17714__$1 = (function (){var statearr_17739 = state_17714;
(statearr_17739[(8)] = inst_17700__$1);

return statearr_17739;
})();
if(cljs.core.truth_(inst_17701)){
var statearr_17741_19360 = state_17714__$1;
(statearr_17741_19360[(1)] = (13));

} else {
var statearr_17743_19361 = state_17714__$1;
(statearr_17743_19361[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17715 === (2))){
var inst_17677 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17678 = (0);
var state_17714__$1 = (function (){var statearr_17745 = state_17714;
(statearr_17745[(7)] = inst_17678);

(statearr_17745[(9)] = inst_17677);

return statearr_17745;
})();
var statearr_17746_19372 = state_17714__$1;
(statearr_17746_19372[(2)] = null);

(statearr_17746_19372[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17715 === (11))){
var inst_17678 = (state_17714[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_17714,(10),Object,null,(9));
var inst_17687 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17678) : chs__$1.call(null,inst_17678));
var inst_17688 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17678) : done.call(null,inst_17678));
var inst_17689 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17687,inst_17688);
var state_17714__$1 = state_17714;
var statearr_17750_19387 = state_17714__$1;
(statearr_17750_19387[(2)] = inst_17689);


cljs.core.async.impl.ioc_helpers.process_exception(state_17714__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17715 === (9))){
var inst_17678 = (state_17714[(7)]);
var inst_17691 = (state_17714[(2)]);
var inst_17692 = (inst_17678 + (1));
var inst_17678__$1 = inst_17692;
var state_17714__$1 = (function (){var statearr_17751 = state_17714;
(statearr_17751[(7)] = inst_17678__$1);

(statearr_17751[(10)] = inst_17691);

return statearr_17751;
})();
var statearr_17752_19398 = state_17714__$1;
(statearr_17752_19398[(2)] = null);

(statearr_17752_19398[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17715 === (5))){
var inst_17698 = (state_17714[(2)]);
var state_17714__$1 = (function (){var statearr_17755 = state_17714;
(statearr_17755[(11)] = inst_17698);

return statearr_17755;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17714__$1,(12),dchan);
} else {
if((state_val_17715 === (14))){
var inst_17700 = (state_17714[(8)]);
var inst_17705 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17700);
var state_17714__$1 = state_17714;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17714__$1,(16),out,inst_17705);
} else {
if((state_val_17715 === (16))){
var inst_17707 = (state_17714[(2)]);
var state_17714__$1 = (function (){var statearr_17759 = state_17714;
(statearr_17759[(12)] = inst_17707);

return statearr_17759;
})();
var statearr_17760_19414 = state_17714__$1;
(statearr_17760_19414[(2)] = null);

(statearr_17760_19414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17715 === (10))){
var inst_17682 = (state_17714[(2)]);
var inst_17683 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17714__$1 = (function (){var statearr_17761 = state_17714;
(statearr_17761[(13)] = inst_17682);

return statearr_17761;
})();
var statearr_17764_19424 = state_17714__$1;
(statearr_17764_19424[(2)] = inst_17683);


cljs.core.async.impl.ioc_helpers.process_exception(state_17714__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17715 === (8))){
var inst_17696 = (state_17714[(2)]);
var state_17714__$1 = state_17714;
var statearr_17767_19430 = state_17714__$1;
(statearr_17767_19430[(2)] = inst_17696);

(statearr_17767_19430[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16024__auto___19344,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15718__auto__,c__16024__auto___19344,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15719__auto__ = null;
var cljs$core$async$state_machine__15719__auto____0 = (function (){
var statearr_17768 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17768[(0)] = cljs$core$async$state_machine__15719__auto__);

(statearr_17768[(1)] = (1));

return statearr_17768;
});
var cljs$core$async$state_machine__15719__auto____1 = (function (state_17714){
while(true){
var ret_value__15720__auto__ = (function (){try{while(true){
var result__15721__auto__ = switch__15718__auto__(state_17714);
if(cljs.core.keyword_identical_QMARK_(result__15721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15721__auto__;
}
break;
}
}catch (e17771){if((e17771 instanceof Object)){
var ex__15722__auto__ = e17771;
var statearr_17773_19451 = state_17714;
(statearr_17773_19451[(5)] = ex__15722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17771;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19456 = state_17714;
state_17714 = G__19456;
continue;
} else {
return ret_value__15720__auto__;
}
break;
}
});
cljs$core$async$state_machine__15719__auto__ = function(state_17714){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15719__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15719__auto____1.call(this,state_17714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15719__auto____0;
cljs$core$async$state_machine__15719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15719__auto____1;
return cljs$core$async$state_machine__15719__auto__;
})()
;})(switch__15718__auto__,c__16024__auto___19344,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16026__auto__ = (function (){var statearr_17774 = (f__16025__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16025__auto__.cljs$core$IFn$_invoke$arity$0() : f__16025__auto__.call(null));
(statearr_17774[(6)] = c__16024__auto___19344);

return statearr_17774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16026__auto__);
});})(c__16024__auto___19344,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__17780 = arguments.length;
switch (G__17780) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16024__auto___19462 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16024__auto___19462,out){
return (function (){
var f__16025__auto__ = (function (){var switch__15718__auto__ = ((function (c__16024__auto___19462,out){
return (function (state_17815){
var state_val_17816 = (state_17815[(1)]);
if((state_val_17816 === (7))){
var inst_17792 = (state_17815[(7)]);
var inst_17791 = (state_17815[(8)]);
var inst_17791__$1 = (state_17815[(2)]);
var inst_17792__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17791__$1,(0),null);
var inst_17793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17791__$1,(1),null);
var inst_17794 = (inst_17792__$1 == null);
var state_17815__$1 = (function (){var statearr_17823 = state_17815;
(statearr_17823[(7)] = inst_17792__$1);

(statearr_17823[(9)] = inst_17793);

(statearr_17823[(8)] = inst_17791__$1);

return statearr_17823;
})();
if(cljs.core.truth_(inst_17794)){
var statearr_17824_19474 = state_17815__$1;
(statearr_17824_19474[(1)] = (8));

} else {
var statearr_17825_19475 = state_17815__$1;
(statearr_17825_19475[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17816 === (1))){
var inst_17781 = cljs.core.vec(chs);
var inst_17782 = inst_17781;
var state_17815__$1 = (function (){var statearr_17826 = state_17815;
(statearr_17826[(10)] = inst_17782);

return statearr_17826;
})();
var statearr_17827_19476 = state_17815__$1;
(statearr_17827_19476[(2)] = null);

(statearr_17827_19476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17816 === (4))){
var inst_17782 = (state_17815[(10)]);
var state_17815__$1 = state_17815;
return cljs.core.async.ioc_alts_BANG_(state_17815__$1,(7),inst_17782);
} else {
if((state_val_17816 === (6))){
var inst_17808 = (state_17815[(2)]);
var state_17815__$1 = state_17815;
var statearr_17828_19480 = state_17815__$1;
(statearr_17828_19480[(2)] = inst_17808);

(statearr_17828_19480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17816 === (3))){
var inst_17810 = (state_17815[(2)]);
var state_17815__$1 = state_17815;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17815__$1,inst_17810);
} else {
if((state_val_17816 === (2))){
var inst_17782 = (state_17815[(10)]);
var inst_17784 = cljs.core.count(inst_17782);
var inst_17785 = (inst_17784 > (0));
var state_17815__$1 = state_17815;
if(cljs.core.truth_(inst_17785)){
var statearr_17830_19481 = state_17815__$1;
(statearr_17830_19481[(1)] = (4));

} else {
var statearr_17831_19482 = state_17815__$1;
(statearr_17831_19482[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17816 === (11))){
var inst_17782 = (state_17815[(10)]);
var inst_17801 = (state_17815[(2)]);
var tmp17829 = inst_17782;
var inst_17782__$1 = tmp17829;
var state_17815__$1 = (function (){var statearr_17832 = state_17815;
(statearr_17832[(10)] = inst_17782__$1);

(statearr_17832[(11)] = inst_17801);

return statearr_17832;
})();
var statearr_17833_19483 = state_17815__$1;
(statearr_17833_19483[(2)] = null);

(statearr_17833_19483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17816 === (9))){
var inst_17792 = (state_17815[(7)]);
var state_17815__$1 = state_17815;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17815__$1,(11),out,inst_17792);
} else {
if((state_val_17816 === (5))){
var inst_17806 = cljs.core.async.close_BANG_(out);
var state_17815__$1 = state_17815;
var statearr_17834_19484 = state_17815__$1;
(statearr_17834_19484[(2)] = inst_17806);

(statearr_17834_19484[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17816 === (10))){
var inst_17804 = (state_17815[(2)]);
var state_17815__$1 = state_17815;
var statearr_17835_19485 = state_17815__$1;
(statearr_17835_19485[(2)] = inst_17804);

(statearr_17835_19485[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17816 === (8))){
var inst_17792 = (state_17815[(7)]);
var inst_17782 = (state_17815[(10)]);
var inst_17793 = (state_17815[(9)]);
var inst_17791 = (state_17815[(8)]);
var inst_17796 = (function (){var cs = inst_17782;
var vec__17787 = inst_17791;
var v = inst_17792;
var c = inst_17793;
return ((function (cs,vec__17787,v,c,inst_17792,inst_17782,inst_17793,inst_17791,state_val_17816,c__16024__auto___19462,out){
return (function (p1__17777_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17777_SHARP_);
});
;})(cs,vec__17787,v,c,inst_17792,inst_17782,inst_17793,inst_17791,state_val_17816,c__16024__auto___19462,out))
})();
var inst_17797 = cljs.core.filterv(inst_17796,inst_17782);
var inst_17782__$1 = inst_17797;
var state_17815__$1 = (function (){var statearr_17836 = state_17815;
(statearr_17836[(10)] = inst_17782__$1);

return statearr_17836;
})();
var statearr_17837_19494 = state_17815__$1;
(statearr_17837_19494[(2)] = null);

(statearr_17837_19494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16024__auto___19462,out))
;
return ((function (switch__15718__auto__,c__16024__auto___19462,out){
return (function() {
var cljs$core$async$state_machine__15719__auto__ = null;
var cljs$core$async$state_machine__15719__auto____0 = (function (){
var statearr_17838 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17838[(0)] = cljs$core$async$state_machine__15719__auto__);

(statearr_17838[(1)] = (1));

return statearr_17838;
});
var cljs$core$async$state_machine__15719__auto____1 = (function (state_17815){
while(true){
var ret_value__15720__auto__ = (function (){try{while(true){
var result__15721__auto__ = switch__15718__auto__(state_17815);
if(cljs.core.keyword_identical_QMARK_(result__15721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15721__auto__;
}
break;
}
}catch (e17839){if((e17839 instanceof Object)){
var ex__15722__auto__ = e17839;
var statearr_17840_19500 = state_17815;
(statearr_17840_19500[(5)] = ex__15722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17839;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19502 = state_17815;
state_17815 = G__19502;
continue;
} else {
return ret_value__15720__auto__;
}
break;
}
});
cljs$core$async$state_machine__15719__auto__ = function(state_17815){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15719__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15719__auto____1.call(this,state_17815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15719__auto____0;
cljs$core$async$state_machine__15719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15719__auto____1;
return cljs$core$async$state_machine__15719__auto__;
})()
;})(switch__15718__auto__,c__16024__auto___19462,out))
})();
var state__16026__auto__ = (function (){var statearr_17841 = (f__16025__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16025__auto__.cljs$core$IFn$_invoke$arity$0() : f__16025__auto__.call(null));
(statearr_17841[(6)] = c__16024__auto___19462);

return statearr_17841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16026__auto__);
});})(c__16024__auto___19462,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__17845 = arguments.length;
switch (G__17845) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16024__auto___19533 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16024__auto___19533,out){
return (function (){
var f__16025__auto__ = (function (){var switch__15718__auto__ = ((function (c__16024__auto___19533,out){
return (function (state_17869){
var state_val_17870 = (state_17869[(1)]);
if((state_val_17870 === (7))){
var inst_17851 = (state_17869[(7)]);
var inst_17851__$1 = (state_17869[(2)]);
var inst_17852 = (inst_17851__$1 == null);
var inst_17853 = cljs.core.not(inst_17852);
var state_17869__$1 = (function (){var statearr_17871 = state_17869;
(statearr_17871[(7)] = inst_17851__$1);

return statearr_17871;
})();
if(inst_17853){
var statearr_17872_19543 = state_17869__$1;
(statearr_17872_19543[(1)] = (8));

} else {
var statearr_17873_19545 = state_17869__$1;
(statearr_17873_19545[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17870 === (1))){
var inst_17846 = (0);
var state_17869__$1 = (function (){var statearr_17874 = state_17869;
(statearr_17874[(8)] = inst_17846);

return statearr_17874;
})();
var statearr_17875_19553 = state_17869__$1;
(statearr_17875_19553[(2)] = null);

(statearr_17875_19553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17870 === (4))){
var state_17869__$1 = state_17869;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17869__$1,(7),ch);
} else {
if((state_val_17870 === (6))){
var inst_17864 = (state_17869[(2)]);
var state_17869__$1 = state_17869;
var statearr_17882_19558 = state_17869__$1;
(statearr_17882_19558[(2)] = inst_17864);

(statearr_17882_19558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17870 === (3))){
var inst_17866 = (state_17869[(2)]);
var inst_17867 = cljs.core.async.close_BANG_(out);
var state_17869__$1 = (function (){var statearr_17885 = state_17869;
(statearr_17885[(9)] = inst_17866);

return statearr_17885;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17869__$1,inst_17867);
} else {
if((state_val_17870 === (2))){
var inst_17846 = (state_17869[(8)]);
var inst_17848 = (inst_17846 < n);
var state_17869__$1 = state_17869;
if(cljs.core.truth_(inst_17848)){
var statearr_17886_19563 = state_17869__$1;
(statearr_17886_19563[(1)] = (4));

} else {
var statearr_17891_19564 = state_17869__$1;
(statearr_17891_19564[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17870 === (11))){
var inst_17846 = (state_17869[(8)]);
var inst_17856 = (state_17869[(2)]);
var inst_17857 = (inst_17846 + (1));
var inst_17846__$1 = inst_17857;
var state_17869__$1 = (function (){var statearr_17894 = state_17869;
(statearr_17894[(10)] = inst_17856);

(statearr_17894[(8)] = inst_17846__$1);

return statearr_17894;
})();
var statearr_17897_19565 = state_17869__$1;
(statearr_17897_19565[(2)] = null);

(statearr_17897_19565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17870 === (9))){
var state_17869__$1 = state_17869;
var statearr_17898_19566 = state_17869__$1;
(statearr_17898_19566[(2)] = null);

(statearr_17898_19566[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17870 === (5))){
var state_17869__$1 = state_17869;
var statearr_17900_19567 = state_17869__$1;
(statearr_17900_19567[(2)] = null);

(statearr_17900_19567[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17870 === (10))){
var inst_17861 = (state_17869[(2)]);
var state_17869__$1 = state_17869;
var statearr_17903_19568 = state_17869__$1;
(statearr_17903_19568[(2)] = inst_17861);

(statearr_17903_19568[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17870 === (8))){
var inst_17851 = (state_17869[(7)]);
var state_17869__$1 = state_17869;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17869__$1,(11),out,inst_17851);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16024__auto___19533,out))
;
return ((function (switch__15718__auto__,c__16024__auto___19533,out){
return (function() {
var cljs$core$async$state_machine__15719__auto__ = null;
var cljs$core$async$state_machine__15719__auto____0 = (function (){
var statearr_17904 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17904[(0)] = cljs$core$async$state_machine__15719__auto__);

(statearr_17904[(1)] = (1));

return statearr_17904;
});
var cljs$core$async$state_machine__15719__auto____1 = (function (state_17869){
while(true){
var ret_value__15720__auto__ = (function (){try{while(true){
var result__15721__auto__ = switch__15718__auto__(state_17869);
if(cljs.core.keyword_identical_QMARK_(result__15721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15721__auto__;
}
break;
}
}catch (e17905){if((e17905 instanceof Object)){
var ex__15722__auto__ = e17905;
var statearr_17906_19571 = state_17869;
(statearr_17906_19571[(5)] = ex__15722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17905;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19572 = state_17869;
state_17869 = G__19572;
continue;
} else {
return ret_value__15720__auto__;
}
break;
}
});
cljs$core$async$state_machine__15719__auto__ = function(state_17869){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15719__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15719__auto____1.call(this,state_17869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15719__auto____0;
cljs$core$async$state_machine__15719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15719__auto____1;
return cljs$core$async$state_machine__15719__auto__;
})()
;})(switch__15718__auto__,c__16024__auto___19533,out))
})();
var state__16026__auto__ = (function (){var statearr_17917 = (f__16025__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16025__auto__.cljs$core$IFn$_invoke$arity$0() : f__16025__auto__.call(null));
(statearr_17917[(6)] = c__16024__auto___19533);

return statearr_17917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16026__auto__);
});})(c__16024__auto___19533,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17923 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17923 = (function (f,ch,meta17924){
this.f = f;
this.ch = ch;
this.meta17924 = meta17924;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17925,meta17924__$1){
var self__ = this;
var _17925__$1 = this;
return (new cljs.core.async.t_cljs$core$async17923(self__.f,self__.ch,meta17924__$1));
});

cljs.core.async.t_cljs$core$async17923.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17925){
var self__ = this;
var _17925__$1 = this;
return self__.meta17924;
});

cljs.core.async.t_cljs$core$async17923.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17923.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17923.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17923.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17923.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17935 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17935 = (function (f,ch,meta17924,_,fn1,meta17936){
this.f = f;
this.ch = ch;
this.meta17924 = meta17924;
this._ = _;
this.fn1 = fn1;
this.meta17936 = meta17936;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17937,meta17936__$1){
var self__ = this;
var _17937__$1 = this;
return (new cljs.core.async.t_cljs$core$async17935(self__.f,self__.ch,self__.meta17924,self__._,self__.fn1,meta17936__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async17935.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17937){
var self__ = this;
var _17937__$1 = this;
return self__.meta17936;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17935.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17935.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17935.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17935.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17920_SHARP_){
var G__17941 = (((p1__17920_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17920_SHARP_) : self__.f.call(null,p1__17920_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17941) : f1.call(null,G__17941));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async17935.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17924","meta17924",-1363012031,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17923","cljs.core.async/t_cljs$core$async17923",-1825808397,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17936","meta17936",-1488147852,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17935.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17935.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17935";

cljs.core.async.t_cljs$core$async17935.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async17935");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17935.
 */
cljs.core.async.__GT_t_cljs$core$async17935 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17935(f__$1,ch__$1,meta17924__$1,___$2,fn1__$1,meta17936){
return (new cljs.core.async.t_cljs$core$async17935(f__$1,ch__$1,meta17924__$1,___$2,fn1__$1,meta17936));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async17935(self__.f,self__.ch,self__.meta17924,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4036__auto__ = ret;
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17947 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17947) : self__.f.call(null,G__17947));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async17923.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17923.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async17923.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17924","meta17924",-1363012031,null)], null);
});

cljs.core.async.t_cljs$core$async17923.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17923.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17923";

cljs.core.async.t_cljs$core$async17923.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async17923");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17923.
 */
cljs.core.async.__GT_t_cljs$core$async17923 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17923(f__$1,ch__$1,meta17924){
return (new cljs.core.async.t_cljs$core$async17923(f__$1,ch__$1,meta17924));
});

}

return (new cljs.core.async.t_cljs$core$async17923(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17967 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17967 = (function (f,ch,meta17968){
this.f = f;
this.ch = ch;
this.meta17968 = meta17968;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17967.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17969,meta17968__$1){
var self__ = this;
var _17969__$1 = this;
return (new cljs.core.async.t_cljs$core$async17967(self__.f,self__.ch,meta17968__$1));
});

cljs.core.async.t_cljs$core$async17967.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17969){
var self__ = this;
var _17969__$1 = this;
return self__.meta17968;
});

cljs.core.async.t_cljs$core$async17967.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17967.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17967.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17967.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17967.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17967.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async17967.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17968","meta17968",187076458,null)], null);
});

cljs.core.async.t_cljs$core$async17967.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17967.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17967";

cljs.core.async.t_cljs$core$async17967.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async17967");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17967.
 */
cljs.core.async.__GT_t_cljs$core$async17967 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17967(f__$1,ch__$1,meta17968){
return (new cljs.core.async.t_cljs$core$async17967(f__$1,ch__$1,meta17968));
});

}

return (new cljs.core.async.t_cljs$core$async17967(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17991 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17991 = (function (p,ch,meta17992){
this.p = p;
this.ch = ch;
this.meta17992 = meta17992;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17993,meta17992__$1){
var self__ = this;
var _17993__$1 = this;
return (new cljs.core.async.t_cljs$core$async17991(self__.p,self__.ch,meta17992__$1));
});

cljs.core.async.t_cljs$core$async17991.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17993){
var self__ = this;
var _17993__$1 = this;
return self__.meta17992;
});

cljs.core.async.t_cljs$core$async17991.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17991.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17991.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17991.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17991.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17991.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17991.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async17991.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17992","meta17992",1613661468,null)], null);
});

cljs.core.async.t_cljs$core$async17991.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17991.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17991";

cljs.core.async.t_cljs$core$async17991.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"cljs.core.async/t_cljs$core$async17991");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17991.
 */
cljs.core.async.__GT_t_cljs$core$async17991 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17991(p__$1,ch__$1,meta17992){
return (new cljs.core.async.t_cljs$core$async17991(p__$1,ch__$1,meta17992));
});

}

return (new cljs.core.async.t_cljs$core$async17991(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__18021 = arguments.length;
switch (G__18021) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16024__auto___19607 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16024__auto___19607,out){
return (function (){
var f__16025__auto__ = (function (){var switch__15718__auto__ = ((function (c__16024__auto___19607,out){
return (function (state_18056){
var state_val_18057 = (state_18056[(1)]);
if((state_val_18057 === (7))){
var inst_18052 = (state_18056[(2)]);
var state_18056__$1 = state_18056;
var statearr_18063_19609 = state_18056__$1;
(statearr_18063_19609[(2)] = inst_18052);

(statearr_18063_19609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18057 === (1))){
var state_18056__$1 = state_18056;
var statearr_18067_19610 = state_18056__$1;
(statearr_18067_19610[(2)] = null);

(statearr_18067_19610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18057 === (4))){
var inst_18032 = (state_18056[(7)]);
var inst_18032__$1 = (state_18056[(2)]);
var inst_18035 = (inst_18032__$1 == null);
var state_18056__$1 = (function (){var statearr_18074 = state_18056;
(statearr_18074[(7)] = inst_18032__$1);

return statearr_18074;
})();
if(cljs.core.truth_(inst_18035)){
var statearr_18079_19612 = state_18056__$1;
(statearr_18079_19612[(1)] = (5));

} else {
var statearr_18084_19613 = state_18056__$1;
(statearr_18084_19613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18057 === (6))){
var inst_18032 = (state_18056[(7)]);
var inst_18042 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18032) : p.call(null,inst_18032));
var state_18056__$1 = state_18056;
if(cljs.core.truth_(inst_18042)){
var statearr_18098_19614 = state_18056__$1;
(statearr_18098_19614[(1)] = (8));

} else {
var statearr_18102_19615 = state_18056__$1;
(statearr_18102_19615[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18057 === (3))){
var inst_18054 = (state_18056[(2)]);
var state_18056__$1 = state_18056;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18056__$1,inst_18054);
} else {
if((state_val_18057 === (2))){
var state_18056__$1 = state_18056;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18056__$1,(4),ch);
} else {
if((state_val_18057 === (11))){
var inst_18046 = (state_18056[(2)]);
var state_18056__$1 = state_18056;
var statearr_18124_19616 = state_18056__$1;
(statearr_18124_19616[(2)] = inst_18046);

(statearr_18124_19616[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18057 === (9))){
var state_18056__$1 = state_18056;
var statearr_18131_19617 = state_18056__$1;
(statearr_18131_19617[(2)] = null);

(statearr_18131_19617[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18057 === (5))){
var inst_18038 = cljs.core.async.close_BANG_(out);
var state_18056__$1 = state_18056;
var statearr_18136_19618 = state_18056__$1;
(statearr_18136_19618[(2)] = inst_18038);

(statearr_18136_19618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18057 === (10))){
var inst_18049 = (state_18056[(2)]);
var state_18056__$1 = (function (){var statearr_18137 = state_18056;
(statearr_18137[(8)] = inst_18049);

return statearr_18137;
})();
var statearr_18142_19619 = state_18056__$1;
(statearr_18142_19619[(2)] = null);

(statearr_18142_19619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18057 === (8))){
var inst_18032 = (state_18056[(7)]);
var state_18056__$1 = state_18056;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18056__$1,(11),out,inst_18032);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16024__auto___19607,out))
;
return ((function (switch__15718__auto__,c__16024__auto___19607,out){
return (function() {
var cljs$core$async$state_machine__15719__auto__ = null;
var cljs$core$async$state_machine__15719__auto____0 = (function (){
var statearr_18145 = [null,null,null,null,null,null,null,null,null];
(statearr_18145[(0)] = cljs$core$async$state_machine__15719__auto__);

(statearr_18145[(1)] = (1));

return statearr_18145;
});
var cljs$core$async$state_machine__15719__auto____1 = (function (state_18056){
while(true){
var ret_value__15720__auto__ = (function (){try{while(true){
var result__15721__auto__ = switch__15718__auto__(state_18056);
if(cljs.core.keyword_identical_QMARK_(result__15721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15721__auto__;
}
break;
}
}catch (e18149){if((e18149 instanceof Object)){
var ex__15722__auto__ = e18149;
var statearr_18153_19620 = state_18056;
(statearr_18153_19620[(5)] = ex__15722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18149;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19621 = state_18056;
state_18056 = G__19621;
continue;
} else {
return ret_value__15720__auto__;
}
break;
}
});
cljs$core$async$state_machine__15719__auto__ = function(state_18056){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15719__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15719__auto____1.call(this,state_18056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15719__auto____0;
cljs$core$async$state_machine__15719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15719__auto____1;
return cljs$core$async$state_machine__15719__auto__;
})()
;})(switch__15718__auto__,c__16024__auto___19607,out))
})();
var state__16026__auto__ = (function (){var statearr_18156 = (f__16025__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16025__auto__.cljs$core$IFn$_invoke$arity$0() : f__16025__auto__.call(null));
(statearr_18156[(6)] = c__16024__auto___19607);

return statearr_18156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16026__auto__);
});})(c__16024__auto___19607,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18164 = arguments.length;
switch (G__18164) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__16024__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16024__auto__){
return (function (){
var f__16025__auto__ = (function (){var switch__15718__auto__ = ((function (c__16024__auto__){
return (function (state_18258){
var state_val_18259 = (state_18258[(1)]);
if((state_val_18259 === (7))){
var inst_18254 = (state_18258[(2)]);
var state_18258__$1 = state_18258;
var statearr_18275_19623 = state_18258__$1;
(statearr_18275_19623[(2)] = inst_18254);

(statearr_18275_19623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18259 === (20))){
var inst_18215 = (state_18258[(7)]);
var inst_18234 = (state_18258[(2)]);
var inst_18235 = cljs.core.next(inst_18215);
var inst_18196 = inst_18235;
var inst_18197 = null;
var inst_18198 = (0);
var inst_18199 = (0);
var state_18258__$1 = (function (){var statearr_18276 = state_18258;
(statearr_18276[(8)] = inst_18197);

(statearr_18276[(9)] = inst_18198);

(statearr_18276[(10)] = inst_18199);

(statearr_18276[(11)] = inst_18234);

(statearr_18276[(12)] = inst_18196);

return statearr_18276;
})();
var statearr_18279_19630 = state_18258__$1;
(statearr_18279_19630[(2)] = null);

(statearr_18279_19630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18259 === (1))){
var state_18258__$1 = state_18258;
var statearr_18280_19631 = state_18258__$1;
(statearr_18280_19631[(2)] = null);

(statearr_18280_19631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18259 === (4))){
var inst_18183 = (state_18258[(13)]);
var inst_18183__$1 = (state_18258[(2)]);
var inst_18185 = (inst_18183__$1 == null);
var state_18258__$1 = (function (){var statearr_18285 = state_18258;
(statearr_18285[(13)] = inst_18183__$1);

return statearr_18285;
})();
if(cljs.core.truth_(inst_18185)){
var statearr_18288_19634 = state_18258__$1;
(statearr_18288_19634[(1)] = (5));

} else {
var statearr_18289_19635 = state_18258__$1;
(statearr_18289_19635[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18259 === (15))){
var state_18258__$1 = state_18258;
var statearr_18296_19636 = state_18258__$1;
(statearr_18296_19636[(2)] = null);

(statearr_18296_19636[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18259 === (21))){
var state_18258__$1 = state_18258;
var statearr_18300_19637 = state_18258__$1;
(statearr_18300_19637[(2)] = null);

(statearr_18300_19637[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18259 === (13))){
var inst_18197 = (state_18258[(8)]);
var inst_18198 = (state_18258[(9)]);
var inst_18199 = (state_18258[(10)]);
var inst_18196 = (state_18258[(12)]);
var inst_18209 = (state_18258[(2)]);
var inst_18210 = (inst_18199 + (1));
var tmp18292 = inst_18197;
var tmp18293 = inst_18198;
var tmp18294 = inst_18196;
var inst_18196__$1 = tmp18294;
var inst_18197__$1 = tmp18292;
var inst_18198__$1 = tmp18293;
var inst_18199__$1 = inst_18210;
var state_18258__$1 = (function (){var statearr_18306 = state_18258;
(statearr_18306[(14)] = inst_18209);

(statearr_18306[(8)] = inst_18197__$1);

(statearr_18306[(9)] = inst_18198__$1);

(statearr_18306[(10)] = inst_18199__$1);

(statearr_18306[(12)] = inst_18196__$1);

return statearr_18306;
})();
var statearr_18307_19641 = state_18258__$1;
(statearr_18307_19641[(2)] = null);

(statearr_18307_19641[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18259 === (22))){
var state_18258__$1 = state_18258;
var statearr_18310_19642 = state_18258__$1;
(statearr_18310_19642[(2)] = null);

(statearr_18310_19642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18259 === (6))){
var inst_18183 = (state_18258[(13)]);
var inst_18194 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18183) : f.call(null,inst_18183));
var inst_18195 = cljs.core.seq(inst_18194);
var inst_18196 = inst_18195;
var inst_18197 = null;
var inst_18198 = (0);
var inst_18199 = (0);
var state_18258__$1 = (function (){var statearr_18313 = state_18258;
(statearr_18313[(8)] = inst_18197);

(statearr_18313[(9)] = inst_18198);

(statearr_18313[(10)] = inst_18199);

(statearr_18313[(12)] = inst_18196);

return statearr_18313;
})();
var statearr_18316_19651 = state_18258__$1;
(statearr_18316_19651[(2)] = null);

(statearr_18316_19651[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18259 === (17))){
var inst_18215 = (state_18258[(7)]);
var inst_18223 = cljs.core.chunk_first(inst_18215);
var inst_18224 = cljs.core.chunk_rest(inst_18215);
var inst_18225 = cljs.core.count(inst_18223);
var inst_18196 = inst_18224;
var inst_18197 = inst_18223;
var inst_18198 = inst_18225;
var inst_18199 = (0);
var state_18258__$1 = (function (){var statearr_18324 = state_18258;
(statearr_18324[(8)] = inst_18197);

(statearr_18324[(9)] = inst_18198);

(statearr_18324[(10)] = inst_18199);

(statearr_18324[(12)] = inst_18196);

return statearr_18324;
})();
var statearr_18327_19654 = state_18258__$1;
(statearr_18327_19654[(2)] = null);

(statearr_18327_19654[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18259 === (3))){
var inst_18256 = (state_18258[(2)]);
var state_18258__$1 = state_18258;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18258__$1,inst_18256);
} else {
if((state_val_18259 === (12))){
var inst_18243 = (state_18258[(2)]);
var state_18258__$1 = state_18258;
var statearr_18331_19655 = state_18258__$1;
(statearr_18331_19655[(2)] = inst_18243);

(statearr_18331_19655[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18259 === (2))){
var state_18258__$1 = state_18258;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18258__$1,(4),in$);
} else {
if((state_val_18259 === (23))){
var inst_18252 = (state_18258[(2)]);
var state_18258__$1 = state_18258;
var statearr_18334_19656 = state_18258__$1;
(statearr_18334_19656[(2)] = inst_18252);

(statearr_18334_19656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18259 === (19))){
var inst_18238 = (state_18258[(2)]);
var state_18258__$1 = state_18258;
var statearr_18335_19657 = state_18258__$1;
(statearr_18335_19657[(2)] = inst_18238);

(statearr_18335_19657[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18259 === (11))){
var inst_18196 = (state_18258[(12)]);
var inst_18215 = (state_18258[(7)]);
var inst_18215__$1 = cljs.core.seq(inst_18196);
var state_18258__$1 = (function (){var statearr_18336 = state_18258;
(statearr_18336[(7)] = inst_18215__$1);

return statearr_18336;
})();
if(inst_18215__$1){
var statearr_18337_19658 = state_18258__$1;
(statearr_18337_19658[(1)] = (14));

} else {
var statearr_18338_19659 = state_18258__$1;
(statearr_18338_19659[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18259 === (9))){
var inst_18245 = (state_18258[(2)]);
var inst_18247 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18258__$1 = (function (){var statearr_18339 = state_18258;
(statearr_18339[(15)] = inst_18245);

return statearr_18339;
})();
if(cljs.core.truth_(inst_18247)){
var statearr_18340_19660 = state_18258__$1;
(statearr_18340_19660[(1)] = (21));

} else {
var statearr_18341_19661 = state_18258__$1;
(statearr_18341_19661[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18259 === (5))){
var inst_18187 = cljs.core.async.close_BANG_(out);
var state_18258__$1 = state_18258;
var statearr_18342_19662 = state_18258__$1;
(statearr_18342_19662[(2)] = inst_18187);

(statearr_18342_19662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18259 === (14))){
var inst_18215 = (state_18258[(7)]);
var inst_18219 = cljs.core.chunked_seq_QMARK_(inst_18215);
var state_18258__$1 = state_18258;
if(inst_18219){
var statearr_18344_19671 = state_18258__$1;
(statearr_18344_19671[(1)] = (17));

} else {
var statearr_18345_19673 = state_18258__$1;
(statearr_18345_19673[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18259 === (16))){
var inst_18241 = (state_18258[(2)]);
var state_18258__$1 = state_18258;
var statearr_18346_19674 = state_18258__$1;
(statearr_18346_19674[(2)] = inst_18241);

(statearr_18346_19674[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18259 === (10))){
var inst_18197 = (state_18258[(8)]);
var inst_18199 = (state_18258[(10)]);
var inst_18207 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18197,inst_18199);
var state_18258__$1 = state_18258;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18258__$1,(13),out,inst_18207);
} else {
if((state_val_18259 === (18))){
var inst_18215 = (state_18258[(7)]);
var inst_18231 = cljs.core.first(inst_18215);
var state_18258__$1 = state_18258;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18258__$1,(20),out,inst_18231);
} else {
if((state_val_18259 === (8))){
var inst_18198 = (state_18258[(9)]);
var inst_18199 = (state_18258[(10)]);
var inst_18202 = (inst_18199 < inst_18198);
var inst_18203 = inst_18202;
var state_18258__$1 = state_18258;
if(cljs.core.truth_(inst_18203)){
var statearr_18347_19686 = state_18258__$1;
(statearr_18347_19686[(1)] = (10));

} else {
var statearr_18348_19690 = state_18258__$1;
(statearr_18348_19690[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16024__auto__))
;
return ((function (switch__15718__auto__,c__16024__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15719__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15719__auto____0 = (function (){
var statearr_18349 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18349[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15719__auto__);

(statearr_18349[(1)] = (1));

return statearr_18349;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15719__auto____1 = (function (state_18258){
while(true){
var ret_value__15720__auto__ = (function (){try{while(true){
var result__15721__auto__ = switch__15718__auto__(state_18258);
if(cljs.core.keyword_identical_QMARK_(result__15721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15721__auto__;
}
break;
}
}catch (e18350){if((e18350 instanceof Object)){
var ex__15722__auto__ = e18350;
var statearr_18351_19693 = state_18258;
(statearr_18351_19693[(5)] = ex__15722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18350;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19698 = state_18258;
state_18258 = G__19698;
continue;
} else {
return ret_value__15720__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15719__auto__ = function(state_18258){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15719__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15719__auto____1.call(this,state_18258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15719__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15719__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15719__auto__;
})()
;})(switch__15718__auto__,c__16024__auto__))
})();
var state__16026__auto__ = (function (){var statearr_18353 = (f__16025__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16025__auto__.cljs$core$IFn$_invoke$arity$0() : f__16025__auto__.call(null));
(statearr_18353[(6)] = c__16024__auto__);

return statearr_18353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16026__auto__);
});})(c__16024__auto__))
);

return c__16024__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__18357 = arguments.length;
switch (G__18357) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__18360 = arguments.length;
switch (G__18360) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__18370 = arguments.length;
switch (G__18370) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16024__auto___19731 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16024__auto___19731,out){
return (function (){
var f__16025__auto__ = (function (){var switch__15718__auto__ = ((function (c__16024__auto___19731,out){
return (function (state_18398){
var state_val_18399 = (state_18398[(1)]);
if((state_val_18399 === (7))){
var inst_18393 = (state_18398[(2)]);
var state_18398__$1 = state_18398;
var statearr_18400_19740 = state_18398__$1;
(statearr_18400_19740[(2)] = inst_18393);

(statearr_18400_19740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (1))){
var inst_18375 = null;
var state_18398__$1 = (function (){var statearr_18401 = state_18398;
(statearr_18401[(7)] = inst_18375);

return statearr_18401;
})();
var statearr_18402_19748 = state_18398__$1;
(statearr_18402_19748[(2)] = null);

(statearr_18402_19748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (4))){
var inst_18378 = (state_18398[(8)]);
var inst_18378__$1 = (state_18398[(2)]);
var inst_18379 = (inst_18378__$1 == null);
var inst_18380 = cljs.core.not(inst_18379);
var state_18398__$1 = (function (){var statearr_18403 = state_18398;
(statearr_18403[(8)] = inst_18378__$1);

return statearr_18403;
})();
if(inst_18380){
var statearr_18404_19760 = state_18398__$1;
(statearr_18404_19760[(1)] = (5));

} else {
var statearr_18405_19761 = state_18398__$1;
(statearr_18405_19761[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (6))){
var state_18398__$1 = state_18398;
var statearr_18406_19763 = state_18398__$1;
(statearr_18406_19763[(2)] = null);

(statearr_18406_19763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (3))){
var inst_18395 = (state_18398[(2)]);
var inst_18396 = cljs.core.async.close_BANG_(out);
var state_18398__$1 = (function (){var statearr_18407 = state_18398;
(statearr_18407[(9)] = inst_18395);

return statearr_18407;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18398__$1,inst_18396);
} else {
if((state_val_18399 === (2))){
var state_18398__$1 = state_18398;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18398__$1,(4),ch);
} else {
if((state_val_18399 === (11))){
var inst_18378 = (state_18398[(8)]);
var inst_18387 = (state_18398[(2)]);
var inst_18375 = inst_18378;
var state_18398__$1 = (function (){var statearr_18409 = state_18398;
(statearr_18409[(10)] = inst_18387);

(statearr_18409[(7)] = inst_18375);

return statearr_18409;
})();
var statearr_18410_19779 = state_18398__$1;
(statearr_18410_19779[(2)] = null);

(statearr_18410_19779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (9))){
var inst_18378 = (state_18398[(8)]);
var state_18398__$1 = state_18398;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18398__$1,(11),out,inst_18378);
} else {
if((state_val_18399 === (5))){
var inst_18375 = (state_18398[(7)]);
var inst_18378 = (state_18398[(8)]);
var inst_18382 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18378,inst_18375);
var state_18398__$1 = state_18398;
if(inst_18382){
var statearr_18412_19788 = state_18398__$1;
(statearr_18412_19788[(1)] = (8));

} else {
var statearr_18413_19793 = state_18398__$1;
(statearr_18413_19793[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (10))){
var inst_18390 = (state_18398[(2)]);
var state_18398__$1 = state_18398;
var statearr_18414_19798 = state_18398__$1;
(statearr_18414_19798[(2)] = inst_18390);

(statearr_18414_19798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (8))){
var inst_18375 = (state_18398[(7)]);
var tmp18411 = inst_18375;
var inst_18375__$1 = tmp18411;
var state_18398__$1 = (function (){var statearr_18415 = state_18398;
(statearr_18415[(7)] = inst_18375__$1);

return statearr_18415;
})();
var statearr_18416_19811 = state_18398__$1;
(statearr_18416_19811[(2)] = null);

(statearr_18416_19811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16024__auto___19731,out))
;
return ((function (switch__15718__auto__,c__16024__auto___19731,out){
return (function() {
var cljs$core$async$state_machine__15719__auto__ = null;
var cljs$core$async$state_machine__15719__auto____0 = (function (){
var statearr_18417 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18417[(0)] = cljs$core$async$state_machine__15719__auto__);

(statearr_18417[(1)] = (1));

return statearr_18417;
});
var cljs$core$async$state_machine__15719__auto____1 = (function (state_18398){
while(true){
var ret_value__15720__auto__ = (function (){try{while(true){
var result__15721__auto__ = switch__15718__auto__(state_18398);
if(cljs.core.keyword_identical_QMARK_(result__15721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15721__auto__;
}
break;
}
}catch (e18418){if((e18418 instanceof Object)){
var ex__15722__auto__ = e18418;
var statearr_18419_19822 = state_18398;
(statearr_18419_19822[(5)] = ex__15722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18418;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19825 = state_18398;
state_18398 = G__19825;
continue;
} else {
return ret_value__15720__auto__;
}
break;
}
});
cljs$core$async$state_machine__15719__auto__ = function(state_18398){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15719__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15719__auto____1.call(this,state_18398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15719__auto____0;
cljs$core$async$state_machine__15719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15719__auto____1;
return cljs$core$async$state_machine__15719__auto__;
})()
;})(switch__15718__auto__,c__16024__auto___19731,out))
})();
var state__16026__auto__ = (function (){var statearr_18420 = (f__16025__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16025__auto__.cljs$core$IFn$_invoke$arity$0() : f__16025__auto__.call(null));
(statearr_18420[(6)] = c__16024__auto___19731);

return statearr_18420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16026__auto__);
});})(c__16024__auto___19731,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18422 = arguments.length;
switch (G__18422) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16024__auto___19832 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16024__auto___19832,out){
return (function (){
var f__16025__auto__ = (function (){var switch__15718__auto__ = ((function (c__16024__auto___19832,out){
return (function (state_18460){
var state_val_18461 = (state_18460[(1)]);
if((state_val_18461 === (7))){
var inst_18456 = (state_18460[(2)]);
var state_18460__$1 = state_18460;
var statearr_18462_19834 = state_18460__$1;
(statearr_18462_19834[(2)] = inst_18456);

(statearr_18462_19834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18461 === (1))){
var inst_18423 = (new Array(n));
var inst_18424 = inst_18423;
var inst_18425 = (0);
var state_18460__$1 = (function (){var statearr_18463 = state_18460;
(statearr_18463[(7)] = inst_18425);

(statearr_18463[(8)] = inst_18424);

return statearr_18463;
})();
var statearr_18464_19837 = state_18460__$1;
(statearr_18464_19837[(2)] = null);

(statearr_18464_19837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18461 === (4))){
var inst_18428 = (state_18460[(9)]);
var inst_18428__$1 = (state_18460[(2)]);
var inst_18429 = (inst_18428__$1 == null);
var inst_18430 = cljs.core.not(inst_18429);
var state_18460__$1 = (function (){var statearr_18465 = state_18460;
(statearr_18465[(9)] = inst_18428__$1);

return statearr_18465;
})();
if(inst_18430){
var statearr_18466_19841 = state_18460__$1;
(statearr_18466_19841[(1)] = (5));

} else {
var statearr_18467_19842 = state_18460__$1;
(statearr_18467_19842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18461 === (15))){
var inst_18450 = (state_18460[(2)]);
var state_18460__$1 = state_18460;
var statearr_18468_19845 = state_18460__$1;
(statearr_18468_19845[(2)] = inst_18450);

(statearr_18468_19845[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18461 === (13))){
var state_18460__$1 = state_18460;
var statearr_18469_19846 = state_18460__$1;
(statearr_18469_19846[(2)] = null);

(statearr_18469_19846[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18461 === (6))){
var inst_18425 = (state_18460[(7)]);
var inst_18446 = (inst_18425 > (0));
var state_18460__$1 = state_18460;
if(cljs.core.truth_(inst_18446)){
var statearr_18470_19847 = state_18460__$1;
(statearr_18470_19847[(1)] = (12));

} else {
var statearr_18471_19848 = state_18460__$1;
(statearr_18471_19848[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18461 === (3))){
var inst_18458 = (state_18460[(2)]);
var state_18460__$1 = state_18460;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18460__$1,inst_18458);
} else {
if((state_val_18461 === (12))){
var inst_18424 = (state_18460[(8)]);
var inst_18448 = cljs.core.vec(inst_18424);
var state_18460__$1 = state_18460;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18460__$1,(15),out,inst_18448);
} else {
if((state_val_18461 === (2))){
var state_18460__$1 = state_18460;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18460__$1,(4),ch);
} else {
if((state_val_18461 === (11))){
var inst_18440 = (state_18460[(2)]);
var inst_18441 = (new Array(n));
var inst_18424 = inst_18441;
var inst_18425 = (0);
var state_18460__$1 = (function (){var statearr_18472 = state_18460;
(statearr_18472[(7)] = inst_18425);

(statearr_18472[(8)] = inst_18424);

(statearr_18472[(10)] = inst_18440);

return statearr_18472;
})();
var statearr_18473_19851 = state_18460__$1;
(statearr_18473_19851[(2)] = null);

(statearr_18473_19851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18461 === (9))){
var inst_18424 = (state_18460[(8)]);
var inst_18438 = cljs.core.vec(inst_18424);
var state_18460__$1 = state_18460;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18460__$1,(11),out,inst_18438);
} else {
if((state_val_18461 === (5))){
var inst_18425 = (state_18460[(7)]);
var inst_18433 = (state_18460[(11)]);
var inst_18424 = (state_18460[(8)]);
var inst_18428 = (state_18460[(9)]);
var inst_18432 = (inst_18424[inst_18425] = inst_18428);
var inst_18433__$1 = (inst_18425 + (1));
var inst_18434 = (inst_18433__$1 < n);
var state_18460__$1 = (function (){var statearr_18474 = state_18460;
(statearr_18474[(11)] = inst_18433__$1);

(statearr_18474[(12)] = inst_18432);

return statearr_18474;
})();
if(cljs.core.truth_(inst_18434)){
var statearr_18475_19854 = state_18460__$1;
(statearr_18475_19854[(1)] = (8));

} else {
var statearr_18476_19855 = state_18460__$1;
(statearr_18476_19855[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18461 === (14))){
var inst_18453 = (state_18460[(2)]);
var inst_18454 = cljs.core.async.close_BANG_(out);
var state_18460__$1 = (function (){var statearr_18478 = state_18460;
(statearr_18478[(13)] = inst_18453);

return statearr_18478;
})();
var statearr_18479_19856 = state_18460__$1;
(statearr_18479_19856[(2)] = inst_18454);

(statearr_18479_19856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18461 === (10))){
var inst_18444 = (state_18460[(2)]);
var state_18460__$1 = state_18460;
var statearr_18480_19857 = state_18460__$1;
(statearr_18480_19857[(2)] = inst_18444);

(statearr_18480_19857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18461 === (8))){
var inst_18433 = (state_18460[(11)]);
var inst_18424 = (state_18460[(8)]);
var tmp18477 = inst_18424;
var inst_18424__$1 = tmp18477;
var inst_18425 = inst_18433;
var state_18460__$1 = (function (){var statearr_18481 = state_18460;
(statearr_18481[(7)] = inst_18425);

(statearr_18481[(8)] = inst_18424__$1);

return statearr_18481;
})();
var statearr_18482_19862 = state_18460__$1;
(statearr_18482_19862[(2)] = null);

(statearr_18482_19862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16024__auto___19832,out))
;
return ((function (switch__15718__auto__,c__16024__auto___19832,out){
return (function() {
var cljs$core$async$state_machine__15719__auto__ = null;
var cljs$core$async$state_machine__15719__auto____0 = (function (){
var statearr_18483 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18483[(0)] = cljs$core$async$state_machine__15719__auto__);

(statearr_18483[(1)] = (1));

return statearr_18483;
});
var cljs$core$async$state_machine__15719__auto____1 = (function (state_18460){
while(true){
var ret_value__15720__auto__ = (function (){try{while(true){
var result__15721__auto__ = switch__15718__auto__(state_18460);
if(cljs.core.keyword_identical_QMARK_(result__15721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15721__auto__;
}
break;
}
}catch (e18484){if((e18484 instanceof Object)){
var ex__15722__auto__ = e18484;
var statearr_18485_19864 = state_18460;
(statearr_18485_19864[(5)] = ex__15722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18484;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19865 = state_18460;
state_18460 = G__19865;
continue;
} else {
return ret_value__15720__auto__;
}
break;
}
});
cljs$core$async$state_machine__15719__auto__ = function(state_18460){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15719__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15719__auto____1.call(this,state_18460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15719__auto____0;
cljs$core$async$state_machine__15719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15719__auto____1;
return cljs$core$async$state_machine__15719__auto__;
})()
;})(switch__15718__auto__,c__16024__auto___19832,out))
})();
var state__16026__auto__ = (function (){var statearr_18486 = (f__16025__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16025__auto__.cljs$core$IFn$_invoke$arity$0() : f__16025__auto__.call(null));
(statearr_18486[(6)] = c__16024__auto___19832);

return statearr_18486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16026__auto__);
});})(c__16024__auto___19832,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18488 = arguments.length;
switch (G__18488) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16024__auto___19867 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16024__auto___19867,out){
return (function (){
var f__16025__auto__ = (function (){var switch__15718__auto__ = ((function (c__16024__auto___19867,out){
return (function (state_18530){
var state_val_18531 = (state_18530[(1)]);
if((state_val_18531 === (7))){
var inst_18526 = (state_18530[(2)]);
var state_18530__$1 = state_18530;
var statearr_18532_19868 = state_18530__$1;
(statearr_18532_19868[(2)] = inst_18526);

(statearr_18532_19868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (1))){
var inst_18489 = [];
var inst_18490 = inst_18489;
var inst_18491 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18530__$1 = (function (){var statearr_18533 = state_18530;
(statearr_18533[(7)] = inst_18491);

(statearr_18533[(8)] = inst_18490);

return statearr_18533;
})();
var statearr_18534_19869 = state_18530__$1;
(statearr_18534_19869[(2)] = null);

(statearr_18534_19869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (4))){
var inst_18494 = (state_18530[(9)]);
var inst_18494__$1 = (state_18530[(2)]);
var inst_18495 = (inst_18494__$1 == null);
var inst_18496 = cljs.core.not(inst_18495);
var state_18530__$1 = (function (){var statearr_18535 = state_18530;
(statearr_18535[(9)] = inst_18494__$1);

return statearr_18535;
})();
if(inst_18496){
var statearr_18536_19870 = state_18530__$1;
(statearr_18536_19870[(1)] = (5));

} else {
var statearr_18537_19871 = state_18530__$1;
(statearr_18537_19871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (15))){
var inst_18520 = (state_18530[(2)]);
var state_18530__$1 = state_18530;
var statearr_18538_19872 = state_18530__$1;
(statearr_18538_19872[(2)] = inst_18520);

(statearr_18538_19872[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (13))){
var state_18530__$1 = state_18530;
var statearr_18539_19873 = state_18530__$1;
(statearr_18539_19873[(2)] = null);

(statearr_18539_19873[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (6))){
var inst_18490 = (state_18530[(8)]);
var inst_18515 = inst_18490.length;
var inst_18516 = (inst_18515 > (0));
var state_18530__$1 = state_18530;
if(cljs.core.truth_(inst_18516)){
var statearr_18540_19874 = state_18530__$1;
(statearr_18540_19874[(1)] = (12));

} else {
var statearr_18541_19875 = state_18530__$1;
(statearr_18541_19875[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (3))){
var inst_18528 = (state_18530[(2)]);
var state_18530__$1 = state_18530;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18530__$1,inst_18528);
} else {
if((state_val_18531 === (12))){
var inst_18490 = (state_18530[(8)]);
var inst_18518 = cljs.core.vec(inst_18490);
var state_18530__$1 = state_18530;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18530__$1,(15),out,inst_18518);
} else {
if((state_val_18531 === (2))){
var state_18530__$1 = state_18530;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18530__$1,(4),ch);
} else {
if((state_val_18531 === (11))){
var inst_18494 = (state_18530[(9)]);
var inst_18498 = (state_18530[(10)]);
var inst_18508 = (state_18530[(2)]);
var inst_18509 = [];
var inst_18510 = inst_18509.push(inst_18494);
var inst_18490 = inst_18509;
var inst_18491 = inst_18498;
var state_18530__$1 = (function (){var statearr_18542 = state_18530;
(statearr_18542[(7)] = inst_18491);

(statearr_18542[(8)] = inst_18490);

(statearr_18542[(11)] = inst_18510);

(statearr_18542[(12)] = inst_18508);

return statearr_18542;
})();
var statearr_18543_19876 = state_18530__$1;
(statearr_18543_19876[(2)] = null);

(statearr_18543_19876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (9))){
var inst_18490 = (state_18530[(8)]);
var inst_18506 = cljs.core.vec(inst_18490);
var state_18530__$1 = state_18530;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18530__$1,(11),out,inst_18506);
} else {
if((state_val_18531 === (5))){
var inst_18491 = (state_18530[(7)]);
var inst_18494 = (state_18530[(9)]);
var inst_18498 = (state_18530[(10)]);
var inst_18498__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18494) : f.call(null,inst_18494));
var inst_18499 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18498__$1,inst_18491);
var inst_18500 = cljs.core.keyword_identical_QMARK_(inst_18491,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_18501 = ((inst_18499) || (inst_18500));
var state_18530__$1 = (function (){var statearr_18544 = state_18530;
(statearr_18544[(10)] = inst_18498__$1);

return statearr_18544;
})();
if(cljs.core.truth_(inst_18501)){
var statearr_18545_19879 = state_18530__$1;
(statearr_18545_19879[(1)] = (8));

} else {
var statearr_18546_19880 = state_18530__$1;
(statearr_18546_19880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (14))){
var inst_18523 = (state_18530[(2)]);
var inst_18524 = cljs.core.async.close_BANG_(out);
var state_18530__$1 = (function (){var statearr_18548 = state_18530;
(statearr_18548[(13)] = inst_18523);

return statearr_18548;
})();
var statearr_18549_19881 = state_18530__$1;
(statearr_18549_19881[(2)] = inst_18524);

(statearr_18549_19881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (10))){
var inst_18513 = (state_18530[(2)]);
var state_18530__$1 = state_18530;
var statearr_18550_19882 = state_18530__$1;
(statearr_18550_19882[(2)] = inst_18513);

(statearr_18550_19882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18531 === (8))){
var inst_18494 = (state_18530[(9)]);
var inst_18490 = (state_18530[(8)]);
var inst_18498 = (state_18530[(10)]);
var inst_18503 = inst_18490.push(inst_18494);
var tmp18547 = inst_18490;
var inst_18490__$1 = tmp18547;
var inst_18491 = inst_18498;
var state_18530__$1 = (function (){var statearr_18551 = state_18530;
(statearr_18551[(7)] = inst_18491);

(statearr_18551[(8)] = inst_18490__$1);

(statearr_18551[(14)] = inst_18503);

return statearr_18551;
})();
var statearr_18552_19887 = state_18530__$1;
(statearr_18552_19887[(2)] = null);

(statearr_18552_19887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16024__auto___19867,out))
;
return ((function (switch__15718__auto__,c__16024__auto___19867,out){
return (function() {
var cljs$core$async$state_machine__15719__auto__ = null;
var cljs$core$async$state_machine__15719__auto____0 = (function (){
var statearr_18553 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18553[(0)] = cljs$core$async$state_machine__15719__auto__);

(statearr_18553[(1)] = (1));

return statearr_18553;
});
var cljs$core$async$state_machine__15719__auto____1 = (function (state_18530){
while(true){
var ret_value__15720__auto__ = (function (){try{while(true){
var result__15721__auto__ = switch__15718__auto__(state_18530);
if(cljs.core.keyword_identical_QMARK_(result__15721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15721__auto__;
}
break;
}
}catch (e18554){if((e18554 instanceof Object)){
var ex__15722__auto__ = e18554;
var statearr_18555_19893 = state_18530;
(statearr_18555_19893[(5)] = ex__15722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18554;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19894 = state_18530;
state_18530 = G__19894;
continue;
} else {
return ret_value__15720__auto__;
}
break;
}
});
cljs$core$async$state_machine__15719__auto__ = function(state_18530){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15719__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15719__auto____1.call(this,state_18530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15719__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15719__auto____0;
cljs$core$async$state_machine__15719__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15719__auto____1;
return cljs$core$async$state_machine__15719__auto__;
})()
;})(switch__15718__auto__,c__16024__auto___19867,out))
})();
var state__16026__auto__ = (function (){var statearr_18556 = (f__16025__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16025__auto__.cljs$core$IFn$_invoke$arity$0() : f__16025__auto__.call(null));
(statearr_18556[(6)] = c__16024__auto___19867);

return statearr_18556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16026__auto__);
});})(c__16024__auto___19867,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
