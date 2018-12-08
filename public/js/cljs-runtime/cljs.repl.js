goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__13446){
var map__13447 = p__13446;
var map__13447__$1 = (((((!((map__13447 == null))))?(((((map__13447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13447):map__13447);
var m = map__13447__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13447__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13447__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__13450_13485 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13451_13486 = null;
var count__13452_13487 = (0);
var i__13453_13488 = (0);
while(true){
if((i__13453_13488 < count__13452_13487)){
var f_13489 = chunk__13451_13486.cljs$core$IIndexed$_nth$arity$2(null,i__13453_13488);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_13489], 0));


var G__13490 = seq__13450_13485;
var G__13491 = chunk__13451_13486;
var G__13492 = count__13452_13487;
var G__13493 = (i__13453_13488 + (1));
seq__13450_13485 = G__13490;
chunk__13451_13486 = G__13491;
count__13452_13487 = G__13492;
i__13453_13488 = G__13493;
continue;
} else {
var temp__5457__auto___13495 = cljs.core.seq(seq__13450_13485);
if(temp__5457__auto___13495){
var seq__13450_13496__$1 = temp__5457__auto___13495;
if(cljs.core.chunked_seq_QMARK_(seq__13450_13496__$1)){
var c__4461__auto___13497 = cljs.core.chunk_first(seq__13450_13496__$1);
var G__13498 = cljs.core.chunk_rest(seq__13450_13496__$1);
var G__13499 = c__4461__auto___13497;
var G__13500 = cljs.core.count(c__4461__auto___13497);
var G__13501 = (0);
seq__13450_13485 = G__13498;
chunk__13451_13486 = G__13499;
count__13452_13487 = G__13500;
i__13453_13488 = G__13501;
continue;
} else {
var f_13502 = cljs.core.first(seq__13450_13496__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_13502], 0));


var G__13503 = cljs.core.next(seq__13450_13496__$1);
var G__13504 = null;
var G__13505 = (0);
var G__13506 = (0);
seq__13450_13485 = G__13503;
chunk__13451_13486 = G__13504;
count__13452_13487 = G__13505;
i__13453_13488 = G__13506;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_13508 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_13508], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_13508)))?cljs.core.second(arglists_13508):arglists_13508)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__13457_13512 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13458_13513 = null;
var count__13459_13514 = (0);
var i__13460_13515 = (0);
while(true){
if((i__13460_13515 < count__13459_13514)){
var vec__13461_13516 = chunk__13458_13513.cljs$core$IIndexed$_nth$arity$2(null,i__13460_13515);
var name_13517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13461_13516,(0),null);
var map__13464_13518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13461_13516,(1),null);
var map__13464_13519__$1 = (((((!((map__13464_13518 == null))))?(((((map__13464_13518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13464_13518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13464_13518):map__13464_13518);
var doc_13520 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13464_13519__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_13521 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13464_13519__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_13517], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_13521], 0));

if(cljs.core.truth_(doc_13520)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_13520], 0));
} else {
}


var G__13522 = seq__13457_13512;
var G__13523 = chunk__13458_13513;
var G__13524 = count__13459_13514;
var G__13525 = (i__13460_13515 + (1));
seq__13457_13512 = G__13522;
chunk__13458_13513 = G__13523;
count__13459_13514 = G__13524;
i__13460_13515 = G__13525;
continue;
} else {
var temp__5457__auto___13526 = cljs.core.seq(seq__13457_13512);
if(temp__5457__auto___13526){
var seq__13457_13527__$1 = temp__5457__auto___13526;
if(cljs.core.chunked_seq_QMARK_(seq__13457_13527__$1)){
var c__4461__auto___13528 = cljs.core.chunk_first(seq__13457_13527__$1);
var G__13529 = cljs.core.chunk_rest(seq__13457_13527__$1);
var G__13530 = c__4461__auto___13528;
var G__13531 = cljs.core.count(c__4461__auto___13528);
var G__13532 = (0);
seq__13457_13512 = G__13529;
chunk__13458_13513 = G__13530;
count__13459_13514 = G__13531;
i__13460_13515 = G__13532;
continue;
} else {
var vec__13466_13533 = cljs.core.first(seq__13457_13527__$1);
var name_13534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13466_13533,(0),null);
var map__13469_13535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13466_13533,(1),null);
var map__13469_13536__$1 = (((((!((map__13469_13535 == null))))?(((((map__13469_13535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13469_13535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13469_13535):map__13469_13535);
var doc_13537 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13469_13536__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_13538 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13469_13536__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_13534], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_13538], 0));

if(cljs.core.truth_(doc_13537)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_13537], 0));
} else {
}


var G__13542 = cljs.core.next(seq__13457_13527__$1);
var G__13543 = null;
var G__13544 = (0);
var G__13545 = (0);
seq__13457_13512 = G__13542;
chunk__13458_13513 = G__13543;
count__13459_13514 = G__13544;
i__13460_13515 = G__13545;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__13474 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__13475 = null;
var count__13476 = (0);
var i__13477 = (0);
while(true){
if((i__13477 < count__13476)){
var role = chunk__13475.cljs$core$IIndexed$_nth$arity$2(null,i__13477);
var temp__5457__auto___13546__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___13546__$1)){
var spec_13547 = temp__5457__auto___13546__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_13547)], 0));
} else {
}


var G__13549 = seq__13474;
var G__13550 = chunk__13475;
var G__13551 = count__13476;
var G__13552 = (i__13477 + (1));
seq__13474 = G__13549;
chunk__13475 = G__13550;
count__13476 = G__13551;
i__13477 = G__13552;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__13474);
if(temp__5457__auto____$1){
var seq__13474__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__13474__$1)){
var c__4461__auto__ = cljs.core.chunk_first(seq__13474__$1);
var G__13554 = cljs.core.chunk_rest(seq__13474__$1);
var G__13555 = c__4461__auto__;
var G__13556 = cljs.core.count(c__4461__auto__);
var G__13557 = (0);
seq__13474 = G__13554;
chunk__13475 = G__13555;
count__13476 = G__13556;
i__13477 = G__13557;
continue;
} else {
var role = cljs.core.first(seq__13474__$1);
var temp__5457__auto___13559__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___13559__$2)){
var spec_13560 = temp__5457__auto___13559__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_13560)], 0));
} else {
}


var G__13561 = cljs.core.next(seq__13474__$1);
var G__13562 = null;
var G__13563 = (0);
var G__13564 = (0);
seq__13474 = G__13561;
chunk__13475 = G__13562;
count__13476 = G__13563;
i__13477 = G__13564;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=cljs.repl.js.map
