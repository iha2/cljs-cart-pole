goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto__.call(null,this$));
} else {
var m__4348__auto____$1 = (shadow.dom._to_dom["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto__.call(null,this$));
} else {
var m__4348__auto____$1 = (shadow.dom._to_svg["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4348__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__18596 = coll;
var G__18597 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__18596,G__18597) : shadow.dom.lazy_native_coll_seq.call(null,G__18596,G__18597));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4047__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write(writer__4291__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__18643 = arguments.length;
switch (G__18643) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__18655 = arguments.length;
switch (G__18655) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__18668 = arguments.length;
switch (G__18668) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__18676 = arguments.length;
switch (G__18676) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__18681 = arguments.length;
switch (G__18681) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__18684 = document;
var G__18685 = shadow.dom.dom_node(el);
return goog.dom.contains(G__18684,G__18685);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__18690 = shadow.dom.dom_node(parent);
var G__18691 = shadow.dom.dom_node(el);
return goog.dom.contains(G__18690,G__18691);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__18703 = shadow.dom.dom_node(el);
var G__18704 = cls;
return goog.dom.classlist.add(G__18703,G__18704);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__18707 = shadow.dom.dom_node(el);
var G__18708 = cls;
return goog.dom.classlist.remove(G__18707,G__18708);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__18713 = arguments.length;
switch (G__18713) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__18714 = shadow.dom.dom_node(el);
var G__18715 = cls;
return goog.dom.classlist.toggle(G__18714,G__18715);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4047__auto__ = (!((typeof document !== 'undefined')));
if(or__4047__auto__){
return or__4047__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e18724){if((e18724 instanceof Object)){
var e = e18724;
return console.log("didnt support attachEvent",el,e);
} else {
throw e18724;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4047__auto__ = (!((typeof document !== 'undefined')));
if(or__4047__auto__){
return or__4047__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__18732 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__18733 = null;
var count__18734 = (0);
var i__18735 = (0);
while(true){
if((i__18735 < count__18734)){
var el = chunk__18733.cljs$core$IIndexed$_nth$arity$2(null,i__18735);
var handler_19253__$1 = ((function (seq__18732,chunk__18733,count__18734,i__18735,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__18732,chunk__18733,count__18734,i__18735,el))
;
var G__18736_19254 = el;
var G__18737_19255 = cljs.core.name(ev);
var G__18738_19256 = handler_19253__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__18736_19254,G__18737_19255,G__18738_19256) : shadow.dom.dom_listen.call(null,G__18736_19254,G__18737_19255,G__18738_19256));


var G__19257 = seq__18732;
var G__19258 = chunk__18733;
var G__19259 = count__18734;
var G__19260 = (i__18735 + (1));
seq__18732 = G__19257;
chunk__18733 = G__19258;
count__18734 = G__19259;
i__18735 = G__19260;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__18732);
if(temp__5457__auto__){
var seq__18732__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18732__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__18732__$1);
var G__19264 = cljs.core.chunk_rest(seq__18732__$1);
var G__19265 = c__4461__auto__;
var G__19266 = cljs.core.count(c__4461__auto__);
var G__19267 = (0);
seq__18732 = G__19264;
chunk__18733 = G__19265;
count__18734 = G__19266;
i__18735 = G__19267;
continue;
} else {
var el = cljs.core.first(seq__18732__$1);
var handler_19269__$1 = ((function (seq__18732,chunk__18733,count__18734,i__18735,el,seq__18732__$1,temp__5457__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__18732,chunk__18733,count__18734,i__18735,el,seq__18732__$1,temp__5457__auto__))
;
var G__18739_19271 = el;
var G__18740_19272 = cljs.core.name(ev);
var G__18741_19273 = handler_19269__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__18739_19271,G__18740_19272,G__18741_19273) : shadow.dom.dom_listen.call(null,G__18739_19271,G__18740_19272,G__18741_19273));


var G__19274 = cljs.core.next(seq__18732__$1);
var G__19275 = null;
var G__19276 = (0);
var G__19277 = (0);
seq__18732 = G__19274;
chunk__18733 = G__19275;
count__18734 = G__19276;
i__18735 = G__19277;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__18749 = arguments.length;
switch (G__18749) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__18755 = shadow.dom.dom_node(el);
var G__18756 = cljs.core.name(ev);
var G__18757 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__18755,G__18756,G__18757) : shadow.dom.dom_listen.call(null,G__18755,G__18756,G__18757));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__18762 = shadow.dom.dom_node(el);
var G__18763 = cljs.core.name(ev);
var G__18764 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__18762,G__18763,G__18764) : shadow.dom.dom_listen_remove.call(null,G__18762,G__18763,G__18764));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__18776 = cljs.core.seq(events);
var chunk__18777 = null;
var count__18778 = (0);
var i__18779 = (0);
while(true){
if((i__18779 < count__18778)){
var vec__18785 = chunk__18777.cljs$core$IIndexed$_nth$arity$2(null,i__18779);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18785,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18785,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19286 = seq__18776;
var G__19287 = chunk__18777;
var G__19288 = count__18778;
var G__19289 = (i__18779 + (1));
seq__18776 = G__19286;
chunk__18777 = G__19287;
count__18778 = G__19288;
i__18779 = G__19289;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__18776);
if(temp__5457__auto__){
var seq__18776__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18776__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__18776__$1);
var G__19291 = cljs.core.chunk_rest(seq__18776__$1);
var G__19292 = c__4461__auto__;
var G__19293 = cljs.core.count(c__4461__auto__);
var G__19294 = (0);
seq__18776 = G__19291;
chunk__18777 = G__19292;
count__18778 = G__19293;
i__18779 = G__19294;
continue;
} else {
var vec__18798 = cljs.core.first(seq__18776__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18798,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18798,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19297 = cljs.core.next(seq__18776__$1);
var G__19298 = null;
var G__19299 = (0);
var G__19300 = (0);
seq__18776 = G__19297;
chunk__18777 = G__19298;
count__18778 = G__19299;
i__18779 = G__19300;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__18808 = cljs.core.seq(styles);
var chunk__18809 = null;
var count__18810 = (0);
var i__18811 = (0);
while(true){
if((i__18811 < count__18810)){
var vec__18816 = chunk__18809.cljs$core$IIndexed$_nth$arity$2(null,i__18811);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18816,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18816,(1),null);
var G__18819_19303 = dom;
var G__18820_19304 = cljs.core.name(k);
var G__18821_19305 = (((v == null))?"":v);
goog.style.setStyle(G__18819_19303,G__18820_19304,G__18821_19305);


var G__19307 = seq__18808;
var G__19308 = chunk__18809;
var G__19309 = count__18810;
var G__19310 = (i__18811 + (1));
seq__18808 = G__19307;
chunk__18809 = G__19308;
count__18810 = G__19309;
i__18811 = G__19310;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__18808);
if(temp__5457__auto__){
var seq__18808__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18808__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__18808__$1);
var G__19312 = cljs.core.chunk_rest(seq__18808__$1);
var G__19313 = c__4461__auto__;
var G__19314 = cljs.core.count(c__4461__auto__);
var G__19315 = (0);
seq__18808 = G__19312;
chunk__18809 = G__19313;
count__18810 = G__19314;
i__18811 = G__19315;
continue;
} else {
var vec__18844 = cljs.core.first(seq__18808__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18844,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18844,(1),null);
var G__18847_19316 = dom;
var G__18848_19317 = cljs.core.name(k);
var G__18849_19318 = (((v == null))?"":v);
goog.style.setStyle(G__18847_19316,G__18848_19317,G__18849_19318);


var G__19320 = cljs.core.next(seq__18808__$1);
var G__19321 = null;
var G__19322 = (0);
var G__19323 = (0);
seq__18808 = G__19320;
chunk__18809 = G__19321;
count__18810 = G__19322;
i__18811 = G__19323;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__18851_19324 = key;
var G__18851_19325__$1 = (((G__18851_19324 instanceof cljs.core.Keyword))?G__18851_19324.fqn:null);
switch (G__18851_19325__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_19334 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4047__auto__ = goog.string.startsWith(ks_19334,"data-");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return goog.string.startsWith(ks_19334,"aria-");
}
})())){
el.setAttribute(ks_19334,value);
} else {
(el[ks_19334] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__18859 = shadow.dom.dom_node(el);
var G__18860 = cls;
return goog.dom.classlist.contains(G__18859,G__18860);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1)].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__18862){
var map__18863 = p__18862;
var map__18863__$1 = (((((!((map__18863 == null))))?(((((map__18863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18863):map__18863);
var props = map__18863__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18863__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__18866 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18866,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18866,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18866,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__18869 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__18869,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__18869;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__18871 = arguments.length;
switch (G__18871) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__18877){
var vec__18880 = p__18877;
var seq__18881 = cljs.core.seq(vec__18880);
var first__18882 = cljs.core.first(seq__18881);
var seq__18881__$1 = cljs.core.next(seq__18881);
var nn = first__18882;
var first__18882__$1 = cljs.core.first(seq__18881__$1);
var seq__18881__$2 = cljs.core.next(seq__18881__$1);
var np = first__18882__$1;
var nc = seq__18881__$2;
var node = vec__18880;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18885 = nn;
var G__18886 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18885,G__18886) : create_fn.call(null,G__18885,G__18886));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18888 = nn;
var G__18889 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18888,G__18889) : create_fn.call(null,G__18888,G__18889));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__18891 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18891,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18891,(1),null);
var seq__18894_19362 = cljs.core.seq(node_children);
var chunk__18895_19363 = null;
var count__18896_19364 = (0);
var i__18897_19365 = (0);
while(true){
if((i__18897_19365 < count__18896_19364)){
var child_struct_19366 = chunk__18895_19363.cljs$core$IIndexed$_nth$arity$2(null,i__18897_19365);
var children_19367 = shadow.dom.dom_node(child_struct_19366);
if(cljs.core.seq_QMARK_(children_19367)){
var seq__18901_19368 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19367));
var chunk__18903_19369 = null;
var count__18904_19370 = (0);
var i__18905_19371 = (0);
while(true){
if((i__18905_19371 < count__18904_19370)){
var child_19373 = chunk__18903_19369.cljs$core$IIndexed$_nth$arity$2(null,i__18905_19371);
if(cljs.core.truth_(child_19373)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19373);


var G__19375 = seq__18901_19368;
var G__19376 = chunk__18903_19369;
var G__19378 = count__18904_19370;
var G__19379 = (i__18905_19371 + (1));
seq__18901_19368 = G__19375;
chunk__18903_19369 = G__19376;
count__18904_19370 = G__19378;
i__18905_19371 = G__19379;
continue;
} else {
var G__19381 = seq__18901_19368;
var G__19382 = chunk__18903_19369;
var G__19383 = count__18904_19370;
var G__19384 = (i__18905_19371 + (1));
seq__18901_19368 = G__19381;
chunk__18903_19369 = G__19382;
count__18904_19370 = G__19383;
i__18905_19371 = G__19384;
continue;
}
} else {
var temp__5457__auto___19385 = cljs.core.seq(seq__18901_19368);
if(temp__5457__auto___19385){
var seq__18901_19386__$1 = temp__5457__auto___19385;
if(cljs.core.chunked_seq_QMARK_(seq__18901_19386__$1)){
var c__4461__auto___19388 = cljs.core.chunk_first(seq__18901_19386__$1);
var G__19389 = cljs.core.chunk_rest(seq__18901_19386__$1);
var G__19390 = c__4461__auto___19388;
var G__19391 = cljs.core.count(c__4461__auto___19388);
var G__19392 = (0);
seq__18901_19368 = G__19389;
chunk__18903_19369 = G__19390;
count__18904_19370 = G__19391;
i__18905_19371 = G__19392;
continue;
} else {
var child_19393 = cljs.core.first(seq__18901_19386__$1);
if(cljs.core.truth_(child_19393)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19393);


var G__19394 = cljs.core.next(seq__18901_19386__$1);
var G__19395 = null;
var G__19396 = (0);
var G__19397 = (0);
seq__18901_19368 = G__19394;
chunk__18903_19369 = G__19395;
count__18904_19370 = G__19396;
i__18905_19371 = G__19397;
continue;
} else {
var G__19399 = cljs.core.next(seq__18901_19386__$1);
var G__19400 = null;
var G__19401 = (0);
var G__19402 = (0);
seq__18901_19368 = G__19399;
chunk__18903_19369 = G__19400;
count__18904_19370 = G__19401;
i__18905_19371 = G__19402;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19367);
}


var G__19403 = seq__18894_19362;
var G__19404 = chunk__18895_19363;
var G__19405 = count__18896_19364;
var G__19406 = (i__18897_19365 + (1));
seq__18894_19362 = G__19403;
chunk__18895_19363 = G__19404;
count__18896_19364 = G__19405;
i__18897_19365 = G__19406;
continue;
} else {
var temp__5457__auto___19407 = cljs.core.seq(seq__18894_19362);
if(temp__5457__auto___19407){
var seq__18894_19408__$1 = temp__5457__auto___19407;
if(cljs.core.chunked_seq_QMARK_(seq__18894_19408__$1)){
var c__4461__auto___19409 = cljs.core.chunk_first(seq__18894_19408__$1);
var G__19410 = cljs.core.chunk_rest(seq__18894_19408__$1);
var G__19411 = c__4461__auto___19409;
var G__19412 = cljs.core.count(c__4461__auto___19409);
var G__19413 = (0);
seq__18894_19362 = G__19410;
chunk__18895_19363 = G__19411;
count__18896_19364 = G__19412;
i__18897_19365 = G__19413;
continue;
} else {
var child_struct_19415 = cljs.core.first(seq__18894_19408__$1);
var children_19416 = shadow.dom.dom_node(child_struct_19415);
if(cljs.core.seq_QMARK_(children_19416)){
var seq__18914_19420 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19416));
var chunk__18916_19421 = null;
var count__18917_19422 = (0);
var i__18918_19423 = (0);
while(true){
if((i__18918_19423 < count__18917_19422)){
var child_19425 = chunk__18916_19421.cljs$core$IIndexed$_nth$arity$2(null,i__18918_19423);
if(cljs.core.truth_(child_19425)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19425);


var G__19426 = seq__18914_19420;
var G__19427 = chunk__18916_19421;
var G__19428 = count__18917_19422;
var G__19429 = (i__18918_19423 + (1));
seq__18914_19420 = G__19426;
chunk__18916_19421 = G__19427;
count__18917_19422 = G__19428;
i__18918_19423 = G__19429;
continue;
} else {
var G__19431 = seq__18914_19420;
var G__19432 = chunk__18916_19421;
var G__19433 = count__18917_19422;
var G__19434 = (i__18918_19423 + (1));
seq__18914_19420 = G__19431;
chunk__18916_19421 = G__19432;
count__18917_19422 = G__19433;
i__18918_19423 = G__19434;
continue;
}
} else {
var temp__5457__auto___19435__$1 = cljs.core.seq(seq__18914_19420);
if(temp__5457__auto___19435__$1){
var seq__18914_19436__$1 = temp__5457__auto___19435__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18914_19436__$1)){
var c__4461__auto___19437 = cljs.core.chunk_first(seq__18914_19436__$1);
var G__19438 = cljs.core.chunk_rest(seq__18914_19436__$1);
var G__19439 = c__4461__auto___19437;
var G__19440 = cljs.core.count(c__4461__auto___19437);
var G__19441 = (0);
seq__18914_19420 = G__19438;
chunk__18916_19421 = G__19439;
count__18917_19422 = G__19440;
i__18918_19423 = G__19441;
continue;
} else {
var child_19442 = cljs.core.first(seq__18914_19436__$1);
if(cljs.core.truth_(child_19442)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19442);


var G__19443 = cljs.core.next(seq__18914_19436__$1);
var G__19444 = null;
var G__19445 = (0);
var G__19446 = (0);
seq__18914_19420 = G__19443;
chunk__18916_19421 = G__19444;
count__18917_19422 = G__19445;
i__18918_19423 = G__19446;
continue;
} else {
var G__19447 = cljs.core.next(seq__18914_19436__$1);
var G__19448 = null;
var G__19449 = (0);
var G__19450 = (0);
seq__18914_19420 = G__19447;
chunk__18916_19421 = G__19448;
count__18917_19422 = G__19449;
i__18918_19423 = G__19450;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19416);
}


var G__19452 = cljs.core.next(seq__18894_19408__$1);
var G__19453 = null;
var G__19454 = (0);
var G__19455 = (0);
seq__18894_19362 = G__19452;
chunk__18895_19363 = G__19453;
count__18896_19364 = G__19454;
i__18897_19365 = G__19455;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__18929 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__18929);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__18931 = cljs.core.seq(node);
var chunk__18932 = null;
var count__18933 = (0);
var i__18934 = (0);
while(true){
if((i__18934 < count__18933)){
var n = chunk__18932.cljs$core$IIndexed$_nth$arity$2(null,i__18934);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19458 = seq__18931;
var G__19459 = chunk__18932;
var G__19460 = count__18933;
var G__19461 = (i__18934 + (1));
seq__18931 = G__19458;
chunk__18932 = G__19459;
count__18933 = G__19460;
i__18934 = G__19461;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__18931);
if(temp__5457__auto__){
var seq__18931__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18931__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__18931__$1);
var G__19463 = cljs.core.chunk_rest(seq__18931__$1);
var G__19464 = c__4461__auto__;
var G__19465 = cljs.core.count(c__4461__auto__);
var G__19466 = (0);
seq__18931 = G__19463;
chunk__18932 = G__19464;
count__18933 = G__19465;
i__18934 = G__19466;
continue;
} else {
var n = cljs.core.first(seq__18931__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19467 = cljs.core.next(seq__18931__$1);
var G__19468 = null;
var G__19469 = (0);
var G__19470 = (0);
seq__18931 = G__19467;
chunk__18932 = G__19468;
count__18933 = G__19469;
i__18934 = G__19470;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__18937 = shadow.dom.dom_node(new$);
var G__18938 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__18937,G__18938);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__18941 = arguments.length;
switch (G__18941) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__18949 = arguments.length;
switch (G__18949) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__18961 = arguments.length;
switch (G__18961) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4047__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4647__auto__ = [];
var len__4641__auto___19498 = arguments.length;
var i__4642__auto___19499 = (0);
while(true){
if((i__4642__auto___19499 < len__4641__auto___19498)){
args__4647__auto__.push((arguments[i__4642__auto___19499]));

var G__19501 = (i__4642__auto___19499 + (1));
i__4642__auto___19499 = G__19501;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__18963_19503 = cljs.core.seq(nodes);
var chunk__18964_19504 = null;
var count__18965_19505 = (0);
var i__18966_19506 = (0);
while(true){
if((i__18966_19506 < count__18965_19505)){
var node_19507 = chunk__18964_19504.cljs$core$IIndexed$_nth$arity$2(null,i__18966_19506);
fragment.appendChild(shadow.dom._to_dom(node_19507));


var G__19508 = seq__18963_19503;
var G__19509 = chunk__18964_19504;
var G__19510 = count__18965_19505;
var G__19511 = (i__18966_19506 + (1));
seq__18963_19503 = G__19508;
chunk__18964_19504 = G__19509;
count__18965_19505 = G__19510;
i__18966_19506 = G__19511;
continue;
} else {
var temp__5457__auto___19513 = cljs.core.seq(seq__18963_19503);
if(temp__5457__auto___19513){
var seq__18963_19514__$1 = temp__5457__auto___19513;
if(cljs.core.chunked_seq_QMARK_(seq__18963_19514__$1)){
var c__4461__auto___19515 = cljs.core.chunk_first(seq__18963_19514__$1);
var G__19516 = cljs.core.chunk_rest(seq__18963_19514__$1);
var G__19517 = c__4461__auto___19515;
var G__19518 = cljs.core.count(c__4461__auto___19515);
var G__19519 = (0);
seq__18963_19503 = G__19516;
chunk__18964_19504 = G__19517;
count__18965_19505 = G__19518;
i__18966_19506 = G__19519;
continue;
} else {
var node_19523 = cljs.core.first(seq__18963_19514__$1);
fragment.appendChild(shadow.dom._to_dom(node_19523));


var G__19525 = cljs.core.next(seq__18963_19514__$1);
var G__19526 = null;
var G__19527 = (0);
var G__19528 = (0);
seq__18963_19503 = G__19525;
chunk__18964_19504 = G__19526;
count__18965_19505 = G__19527;
i__18966_19506 = G__19528;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq18962){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18962));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__18967_19529 = cljs.core.seq(scripts);
var chunk__18968_19530 = null;
var count__18969_19531 = (0);
var i__18970_19532 = (0);
while(true){
if((i__18970_19532 < count__18969_19531)){
var vec__18972_19534 = chunk__18968_19530.cljs$core$IIndexed$_nth$arity$2(null,i__18970_19532);
var script_tag_19535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18972_19534,(0),null);
var script_body_19536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18972_19534,(1),null);
eval(script_body_19536);


var G__19537 = seq__18967_19529;
var G__19538 = chunk__18968_19530;
var G__19539 = count__18969_19531;
var G__19540 = (i__18970_19532 + (1));
seq__18967_19529 = G__19537;
chunk__18968_19530 = G__19538;
count__18969_19531 = G__19539;
i__18970_19532 = G__19540;
continue;
} else {
var temp__5457__auto___19541 = cljs.core.seq(seq__18967_19529);
if(temp__5457__auto___19541){
var seq__18967_19542__$1 = temp__5457__auto___19541;
if(cljs.core.chunked_seq_QMARK_(seq__18967_19542__$1)){
var c__4461__auto___19544 = cljs.core.chunk_first(seq__18967_19542__$1);
var G__19546 = cljs.core.chunk_rest(seq__18967_19542__$1);
var G__19547 = c__4461__auto___19544;
var G__19548 = cljs.core.count(c__4461__auto___19544);
var G__19549 = (0);
seq__18967_19529 = G__19546;
chunk__18968_19530 = G__19547;
count__18969_19531 = G__19548;
i__18970_19532 = G__19549;
continue;
} else {
var vec__18976_19550 = cljs.core.first(seq__18967_19542__$1);
var script_tag_19551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18976_19550,(0),null);
var script_body_19552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18976_19550,(1),null);
eval(script_body_19552);


var G__19554 = cljs.core.next(seq__18967_19542__$1);
var G__19555 = null;
var G__19556 = (0);
var G__19557 = (0);
seq__18967_19529 = G__19554;
chunk__18968_19530 = G__19555;
count__18969_19531 = G__19556;
i__18970_19532 = G__19557;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__18979){
var vec__18981 = p__18979;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18981,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18981,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__18989 = shadow.dom.dom_node(el);
var G__18990 = cls;
return goog.dom.getAncestorByClass(G__18989,G__18990);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__18995 = arguments.length;
switch (G__18995) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__18996 = shadow.dom.dom_node(el);
var G__18997 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__18996,G__18997);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__19001 = shadow.dom.dom_node(el);
var G__19002 = cljs.core.name(tag);
var G__19003 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__19001,G__19002,G__19003);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__19005 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__19005);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__19006 = shadow.dom.dom_node(dom);
var G__19007 = value;
return goog.dom.forms.setValue(G__19006,G__19007);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__19014 = cljs.core.seq(style_keys);
var chunk__19015 = null;
var count__19016 = (0);
var i__19017 = (0);
while(true){
if((i__19017 < count__19016)){
var it = chunk__19015.cljs$core$IIndexed$_nth$arity$2(null,i__19017);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19580 = seq__19014;
var G__19581 = chunk__19015;
var G__19582 = count__19016;
var G__19583 = (i__19017 + (1));
seq__19014 = G__19580;
chunk__19015 = G__19581;
count__19016 = G__19582;
i__19017 = G__19583;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__19014);
if(temp__5457__auto__){
var seq__19014__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19014__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__19014__$1);
var G__19588 = cljs.core.chunk_rest(seq__19014__$1);
var G__19589 = c__4461__auto__;
var G__19590 = cljs.core.count(c__4461__auto__);
var G__19591 = (0);
seq__19014 = G__19588;
chunk__19015 = G__19589;
count__19016 = G__19590;
i__19017 = G__19591;
continue;
} else {
var it = cljs.core.first(seq__19014__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19592 = cljs.core.next(seq__19014__$1);
var G__19593 = null;
var G__19594 = (0);
var G__19595 = (0);
seq__19014 = G__19592;
chunk__19015 = G__19593;
count__19016 = G__19594;
i__19017 = G__19595;
continue;
}
} else {
return null;
}
}
break;
}
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
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k19021,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__19027 = k19021;
var G__19027__$1 = (((G__19027 instanceof cljs.core.Keyword))?G__19027.fqn:null);
switch (G__19027__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19021,else__4304__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__19031){
var vec__19032 = p__19031;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19032,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19032,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19020){
var self__ = this;
var G__19020__$1 = this;
return (new cljs.core.RecordIter((0),G__19020__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__19045 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__19045(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19022,other19023){
var self__ = this;
var this19022__$1 = this;
return (((!((other19023 == null)))) && ((this19022__$1.constructor === other19023.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19022__$1.x,other19023.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19022__$1.y,other19023.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19022__$1.__extmap,other19023.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__19020){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__19054 = cljs.core.keyword_identical_QMARK_;
var expr__19055 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__19057 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__19058 = expr__19055;
return (pred__19054.cljs$core$IFn$_invoke$arity$2 ? pred__19054.cljs$core$IFn$_invoke$arity$2(G__19057,G__19058) : pred__19054.call(null,G__19057,G__19058));
})())){
return (new shadow.dom.Coordinate(G__19020,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19060 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__19061 = expr__19055;
return (pred__19054.cljs$core$IFn$_invoke$arity$2 ? pred__19054.cljs$core$IFn$_invoke$arity$2(G__19060,G__19061) : pred__19054.call(null,G__19060,G__19061));
})())){
return (new shadow.dom.Coordinate(self__.x,G__19020,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__19020),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__19020){
var self__ = this;
var this__4300__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__19020,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__19025){
var extmap__4340__auto__ = (function (){var G__19066 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19025,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__19025)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19066);
} else {
return G__19066;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__19025),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__19025),null,cljs.core.not_empty(extmap__4340__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__19068 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__19068);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__19072 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__19072);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__19073 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__19073);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
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
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k19077,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__19082 = k19077;
var G__19082__$1 = (((G__19082 instanceof cljs.core.Keyword))?G__19082.fqn:null);
switch (G__19082__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19077,else__4304__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__19083){
var vec__19084 = p__19083;
var k__4324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19084,(0),null);
var v__4325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19084,(1),null);
return (f__4321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4321__auto__.cljs$core$IFn$_invoke$arity$3(ret__4323__auto__,k__4324__auto__,v__4325__auto__) : f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__));
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer(writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4316__auto__,pr_pair__4318__auto__,"#shadow.dom.Size{",", ","}",opts__4317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19076){
var self__ = this;
var G__19076__$1 = this;
return (new cljs.core.RecordIter((0),G__19076__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = (function (){var fexpr__19087 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
;
return fexpr__19087(this__4297__auto____$1);
})();
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19078,other19079){
var self__ = this;
var this19078__$1 = this;
return (((!((other19079 == null)))) && ((this19078__$1.constructor === other19079.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19078__$1.w,other19079.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19078__$1.h,other19079.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19078__$1.__extmap,other19079.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4311__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__19076){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__19090 = cljs.core.keyword_identical_QMARK_;
var expr__19091 = k__4309__auto__;
if(cljs.core.truth_((function (){var G__19093 = new cljs.core.Keyword(null,"w","w",354169001);
var G__19094 = expr__19091;
return (pred__19090.cljs$core$IFn$_invoke$arity$2 ? pred__19090.cljs$core$IFn$_invoke$arity$2(G__19093,G__19094) : pred__19090.call(null,G__19093,G__19094));
})())){
return (new shadow.dom.Size(G__19076,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19096 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__19097 = expr__19091;
return (pred__19090.cljs$core$IFn$_invoke$arity$2 ? pred__19090.cljs$core$IFn$_invoke$arity$2(G__19096,G__19097) : pred__19090.call(null,G__19096,G__19097));
})())){
return (new shadow.dom.Size(self__.w,G__19076,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4309__auto__,G__19076),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__19076){
var self__ = this;
var this__4300__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__19076,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write(writer__4345__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__19080){
var extmap__4340__auto__ = (function (){var G__19101 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19080,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__19080)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19101);
} else {
return G__19101;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__19080),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__19080),null,cljs.core.not_empty(extmap__4340__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__19102 = shadow.dom.dom_node(el);
return goog.style.getSize(G__19102);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4515__auto__ = opts;
var l__4516__auto__ = a__4515__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4516__auto__)){
var G__19632 = (i + (1));
var G__19633 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__19632;
ret = G__19633;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19103){
var vec__19104 = p__19103;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19104,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19104,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__19108 = arguments.length;
switch (G__19108) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__19109_19643 = new_node;
var G__19110_19644 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__19109_19643,G__19110_19644);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__19111_19649 = new_node;
var G__19112_19650 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__19111_19649,G__19112_19650);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5455__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5455__auto__)){
var child = temp__5455__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__19652 = ps;
var G__19653 = (i + (1));
el__$1 = G__19652;
i = G__19653;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__19115 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__19115);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__19121 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__19121);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__19124 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__19124);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__19128 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19128,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19128,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19128,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__19131_19663 = cljs.core.seq(props);
var chunk__19132_19664 = null;
var count__19133_19665 = (0);
var i__19134_19666 = (0);
while(true){
if((i__19134_19666 < count__19133_19665)){
var vec__19135_19667 = chunk__19132_19664.cljs$core$IIndexed$_nth$arity$2(null,i__19134_19666);
var k_19668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19135_19667,(0),null);
var v_19669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19135_19667,(1),null);
el.setAttributeNS((function (){var temp__5457__auto__ = cljs.core.namespace(k_19668);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19668),v_19669);


var G__19675 = seq__19131_19663;
var G__19676 = chunk__19132_19664;
var G__19677 = count__19133_19665;
var G__19678 = (i__19134_19666 + (1));
seq__19131_19663 = G__19675;
chunk__19132_19664 = G__19676;
count__19133_19665 = G__19677;
i__19134_19666 = G__19678;
continue;
} else {
var temp__5457__auto___19679 = cljs.core.seq(seq__19131_19663);
if(temp__5457__auto___19679){
var seq__19131_19680__$1 = temp__5457__auto___19679;
if(cljs.core.chunked_seq_QMARK_(seq__19131_19680__$1)){
var c__4461__auto___19681 = cljs.core.chunk_first(seq__19131_19680__$1);
var G__19682 = cljs.core.chunk_rest(seq__19131_19680__$1);
var G__19683 = c__4461__auto___19681;
var G__19684 = cljs.core.count(c__4461__auto___19681);
var G__19685 = (0);
seq__19131_19663 = G__19682;
chunk__19132_19664 = G__19683;
count__19133_19665 = G__19684;
i__19134_19666 = G__19685;
continue;
} else {
var vec__19140_19687 = cljs.core.first(seq__19131_19680__$1);
var k_19688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19140_19687,(0),null);
var v_19689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19140_19687,(1),null);
el.setAttributeNS((function (){var temp__5457__auto____$1 = cljs.core.namespace(k_19688);
if(cljs.core.truth_(temp__5457__auto____$1)){
var ns = temp__5457__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19688),v_19689);


var G__19694 = cljs.core.next(seq__19131_19680__$1);
var G__19695 = null;
var G__19696 = (0);
var G__19697 = (0);
seq__19131_19663 = G__19694;
chunk__19132_19664 = G__19695;
count__19133_19665 = G__19696;
i__19134_19666 = G__19697;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__19144 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19144,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19144,(1),null);
var seq__19147_19701 = cljs.core.seq(node_children);
var chunk__19149_19702 = null;
var count__19150_19703 = (0);
var i__19151_19704 = (0);
while(true){
if((i__19151_19704 < count__19150_19703)){
var child_struct_19705 = chunk__19149_19702.cljs$core$IIndexed$_nth$arity$2(null,i__19151_19704);
if((!((child_struct_19705 == null)))){
if(typeof child_struct_19705 === 'string'){
var text_19706 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19706),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_19705)].join(''));
} else {
var children_19707 = shadow.dom.svg_node(child_struct_19705);
if(cljs.core.seq_QMARK_(children_19707)){
var seq__19153_19708 = cljs.core.seq(children_19707);
var chunk__19155_19709 = null;
var count__19156_19710 = (0);
var i__19157_19711 = (0);
while(true){
if((i__19157_19711 < count__19156_19710)){
var child_19713 = chunk__19155_19709.cljs$core$IIndexed$_nth$arity$2(null,i__19157_19711);
if(cljs.core.truth_(child_19713)){
node.appendChild(child_19713);


var G__19714 = seq__19153_19708;
var G__19715 = chunk__19155_19709;
var G__19716 = count__19156_19710;
var G__19717 = (i__19157_19711 + (1));
seq__19153_19708 = G__19714;
chunk__19155_19709 = G__19715;
count__19156_19710 = G__19716;
i__19157_19711 = G__19717;
continue;
} else {
var G__19718 = seq__19153_19708;
var G__19719 = chunk__19155_19709;
var G__19720 = count__19156_19710;
var G__19721 = (i__19157_19711 + (1));
seq__19153_19708 = G__19718;
chunk__19155_19709 = G__19719;
count__19156_19710 = G__19720;
i__19157_19711 = G__19721;
continue;
}
} else {
var temp__5457__auto___19722 = cljs.core.seq(seq__19153_19708);
if(temp__5457__auto___19722){
var seq__19153_19723__$1 = temp__5457__auto___19722;
if(cljs.core.chunked_seq_QMARK_(seq__19153_19723__$1)){
var c__4461__auto___19725 = cljs.core.chunk_first(seq__19153_19723__$1);
var G__19726 = cljs.core.chunk_rest(seq__19153_19723__$1);
var G__19727 = c__4461__auto___19725;
var G__19728 = cljs.core.count(c__4461__auto___19725);
var G__19729 = (0);
seq__19153_19708 = G__19726;
chunk__19155_19709 = G__19727;
count__19156_19710 = G__19728;
i__19157_19711 = G__19729;
continue;
} else {
var child_19730 = cljs.core.first(seq__19153_19723__$1);
if(cljs.core.truth_(child_19730)){
node.appendChild(child_19730);


var G__19732 = cljs.core.next(seq__19153_19723__$1);
var G__19733 = null;
var G__19734 = (0);
var G__19735 = (0);
seq__19153_19708 = G__19732;
chunk__19155_19709 = G__19733;
count__19156_19710 = G__19734;
i__19157_19711 = G__19735;
continue;
} else {
var G__19736 = cljs.core.next(seq__19153_19723__$1);
var G__19737 = null;
var G__19738 = (0);
var G__19739 = (0);
seq__19153_19708 = G__19736;
chunk__19155_19709 = G__19737;
count__19156_19710 = G__19738;
i__19157_19711 = G__19739;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19707);
}
}


var G__19741 = seq__19147_19701;
var G__19742 = chunk__19149_19702;
var G__19743 = count__19150_19703;
var G__19744 = (i__19151_19704 + (1));
seq__19147_19701 = G__19741;
chunk__19149_19702 = G__19742;
count__19150_19703 = G__19743;
i__19151_19704 = G__19744;
continue;
} else {
var G__19745 = seq__19147_19701;
var G__19746 = chunk__19149_19702;
var G__19747 = count__19150_19703;
var G__19749 = (i__19151_19704 + (1));
seq__19147_19701 = G__19745;
chunk__19149_19702 = G__19746;
count__19150_19703 = G__19747;
i__19151_19704 = G__19749;
continue;
}
} else {
var temp__5457__auto___19751 = cljs.core.seq(seq__19147_19701);
if(temp__5457__auto___19751){
var seq__19147_19754__$1 = temp__5457__auto___19751;
if(cljs.core.chunked_seq_QMARK_(seq__19147_19754__$1)){
var c__4461__auto___19755 = cljs.core.chunk_first(seq__19147_19754__$1);
var G__19756 = cljs.core.chunk_rest(seq__19147_19754__$1);
var G__19757 = c__4461__auto___19755;
var G__19758 = cljs.core.count(c__4461__auto___19755);
var G__19759 = (0);
seq__19147_19701 = G__19756;
chunk__19149_19702 = G__19757;
count__19150_19703 = G__19758;
i__19151_19704 = G__19759;
continue;
} else {
var child_struct_19762 = cljs.core.first(seq__19147_19754__$1);
if((!((child_struct_19762 == null)))){
if(typeof child_struct_19762 === 'string'){
var text_19764 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19764),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_19762)].join(''));
} else {
var children_19765 = shadow.dom.svg_node(child_struct_19762);
if(cljs.core.seq_QMARK_(children_19765)){
var seq__19164_19766 = cljs.core.seq(children_19765);
var chunk__19166_19767 = null;
var count__19167_19768 = (0);
var i__19168_19769 = (0);
while(true){
if((i__19168_19769 < count__19167_19768)){
var child_19770 = chunk__19166_19767.cljs$core$IIndexed$_nth$arity$2(null,i__19168_19769);
if(cljs.core.truth_(child_19770)){
node.appendChild(child_19770);


var G__19771 = seq__19164_19766;
var G__19772 = chunk__19166_19767;
var G__19773 = count__19167_19768;
var G__19774 = (i__19168_19769 + (1));
seq__19164_19766 = G__19771;
chunk__19166_19767 = G__19772;
count__19167_19768 = G__19773;
i__19168_19769 = G__19774;
continue;
} else {
var G__19775 = seq__19164_19766;
var G__19776 = chunk__19166_19767;
var G__19777 = count__19167_19768;
var G__19778 = (i__19168_19769 + (1));
seq__19164_19766 = G__19775;
chunk__19166_19767 = G__19776;
count__19167_19768 = G__19777;
i__19168_19769 = G__19778;
continue;
}
} else {
var temp__5457__auto___19780__$1 = cljs.core.seq(seq__19164_19766);
if(temp__5457__auto___19780__$1){
var seq__19164_19781__$1 = temp__5457__auto___19780__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19164_19781__$1)){
var c__4461__auto___19782 = cljs.core.chunk_first(seq__19164_19781__$1);
var G__19783 = cljs.core.chunk_rest(seq__19164_19781__$1);
var G__19784 = c__4461__auto___19782;
var G__19785 = cljs.core.count(c__4461__auto___19782);
var G__19786 = (0);
seq__19164_19766 = G__19783;
chunk__19166_19767 = G__19784;
count__19167_19768 = G__19785;
i__19168_19769 = G__19786;
continue;
} else {
var child_19787 = cljs.core.first(seq__19164_19781__$1);
if(cljs.core.truth_(child_19787)){
node.appendChild(child_19787);


var G__19789 = cljs.core.next(seq__19164_19781__$1);
var G__19790 = null;
var G__19791 = (0);
var G__19792 = (0);
seq__19164_19766 = G__19789;
chunk__19166_19767 = G__19790;
count__19167_19768 = G__19791;
i__19168_19769 = G__19792;
continue;
} else {
var G__19794 = cljs.core.next(seq__19164_19781__$1);
var G__19795 = null;
var G__19796 = (0);
var G__19797 = (0);
seq__19164_19766 = G__19794;
chunk__19166_19767 = G__19795;
count__19167_19768 = G__19796;
i__19168_19769 = G__19797;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19765);
}
}


var G__19799 = cljs.core.next(seq__19147_19754__$1);
var G__19800 = null;
var G__19801 = (0);
var G__19802 = (0);
seq__19147_19701 = G__19799;
chunk__19149_19702 = G__19800;
count__19150_19703 = G__19801;
i__19151_19704 = G__19802;
continue;
} else {
var G__19803 = cljs.core.next(seq__19147_19754__$1);
var G__19804 = null;
var G__19805 = (0);
var G__19806 = (0);
seq__19147_19701 = G__19803;
chunk__19149_19702 = G__19804;
count__19150_19703 = G__19805;
i__19151_19704 = G__19806;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__19174_19808 = shadow.dom._to_svg;
var G__19175_19809 = "string";
var G__19176_19810 = ((function (G__19174_19808,G__19175_19809){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__19174_19808,G__19175_19809))
;
goog.object.set(G__19174_19808,G__19175_19809,G__19176_19810);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__19181_19819 = shadow.dom._to_svg;
var G__19182_19820 = "null";
var G__19183_19821 = ((function (G__19181_19819,G__19182_19820){
return (function (_){
return null;
});})(G__19181_19819,G__19182_19820))
;
goog.object.set(G__19181_19819,G__19182_19820,G__19183_19821);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4647__auto__ = [];
var len__4641__auto___19823 = arguments.length;
var i__4642__auto___19824 = (0);
while(true){
if((i__4642__auto___19824 < len__4641__auto___19823)){
args__4647__auto__.push((arguments[i__4642__auto___19824]));

var G__19826 = (i__4642__auto___19824 + (1));
i__4642__auto___19824 = G__19826;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq19186){
var G__19187 = cljs.core.first(seq19186);
var seq19186__$1 = cljs.core.next(seq19186);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19187,seq19186__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__19203 = arguments.length;
switch (G__19203) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__19208_19838 = shadow.dom.dom_node(el);
var G__19209_19839 = cljs.core.name(event);
var G__19210_19840 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__19208_19838,G__19209_19839,G__19210_19840) : shadow.dom.dom_listen.call(null,G__19208_19838,G__19209_19839,G__19210_19840));

if(cljs.core.truth_((function (){var and__4036__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4036__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4036__auto__;
}
})())){
var c__16024__auto___19844 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16024__auto___19844,buf,chan,event_fn){
return (function (){
var f__16025__auto__ = (function (){var switch__15718__auto__ = ((function (c__16024__auto___19844,buf,chan,event_fn){
return (function (state_19215){
var state_val_19216 = (state_19215[(1)]);
if((state_val_19216 === (1))){
var state_19215__$1 = state_19215;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19215__$1,(2),once_or_cleanup);
} else {
if((state_val_19216 === (2))){
var inst_19212 = (state_19215[(2)]);
var inst_19213 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_19215__$1 = (function (){var statearr_19220 = state_19215;
(statearr_19220[(7)] = inst_19212);

return statearr_19220;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19215__$1,inst_19213);
} else {
return null;
}
}
});})(c__16024__auto___19844,buf,chan,event_fn))
;
return ((function (switch__15718__auto__,c__16024__auto___19844,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__15719__auto__ = null;
var shadow$dom$state_machine__15719__auto____0 = (function (){
var statearr_19221 = [null,null,null,null,null,null,null,null];
(statearr_19221[(0)] = shadow$dom$state_machine__15719__auto__);

(statearr_19221[(1)] = (1));

return statearr_19221;
});
var shadow$dom$state_machine__15719__auto____1 = (function (state_19215){
while(true){
var ret_value__15720__auto__ = (function (){try{while(true){
var result__15721__auto__ = switch__15718__auto__(state_19215);
if(cljs.core.keyword_identical_QMARK_(result__15721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15721__auto__;
}
break;
}
}catch (e19222){if((e19222 instanceof Object)){
var ex__15722__auto__ = e19222;
var statearr_19223_19849 = state_19215;
(statearr_19223_19849[(5)] = ex__15722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19222;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19850 = state_19215;
state_19215 = G__19850;
continue;
} else {
return ret_value__15720__auto__;
}
break;
}
});
shadow$dom$state_machine__15719__auto__ = function(state_19215){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__15719__auto____0.call(this);
case 1:
return shadow$dom$state_machine__15719__auto____1.call(this,state_19215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__15719__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__15719__auto____0;
shadow$dom$state_machine__15719__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__15719__auto____1;
return shadow$dom$state_machine__15719__auto__;
})()
;})(switch__15718__auto__,c__16024__auto___19844,buf,chan,event_fn))
})();
var state__16026__auto__ = (function (){var statearr_19225 = (f__16025__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16025__auto__.cljs$core$IFn$_invoke$arity$0() : f__16025__auto__.call(null));
(statearr_19225[(6)] = c__16024__auto___19844);

return statearr_19225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16026__auto__);
});})(c__16024__auto___19844,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
