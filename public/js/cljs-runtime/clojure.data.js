goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__16113){
var vec__16115 = p__16113;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16115,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16115,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__16120 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16120,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16120,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16120,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__16127 = arguments.length;
switch (G__16127) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4135__auto__ = cljs.core.count(a);
var y__4136__auto__ = cljs.core.count(b);
return ((x__4135__auto__ > y__4136__auto__) ? x__4135__auto__ : y__4136__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4347__auto__ = (((x == null))?null:x);
var m__4348__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4348__auto__.call(null,x));
} else {
var m__4348__auto____$1 = (clojure.data.equality_partition["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__4348__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4347__auto__ = (((a == null))?null:a);
var m__4348__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return (m__4348__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4348__auto__.call(null,a,b));
} else {
var m__4348__auto____$1 = (clojure.data.diff_similar["_"]);
if((!((m__4348__auto____$1 == null)))){
return (m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4348__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__4348__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__16139_16213 = clojure.data.equality_partition;
var G__16140_16214 = "null";
var G__16141_16215 = ((function (G__16139_16213,G__16140_16214){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__16139_16213,G__16140_16214))
;
goog.object.set(G__16139_16213,G__16140_16214,G__16141_16215);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__16142_16216 = clojure.data.equality_partition;
var G__16143_16217 = "string";
var G__16144_16218 = ((function (G__16142_16216,G__16143_16217){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__16142_16216,G__16143_16217))
;
goog.object.set(G__16142_16216,G__16143_16217,G__16144_16218);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__16145_16223 = clojure.data.equality_partition;
var G__16146_16224 = "number";
var G__16147_16225 = ((function (G__16145_16223,G__16146_16224){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__16145_16223,G__16146_16224))
;
goog.object.set(G__16145_16223,G__16146_16224,G__16147_16225);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__16149_16227 = clojure.data.equality_partition;
var G__16150_16228 = "array";
var G__16151_16229 = ((function (G__16149_16227,G__16150_16228){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__16149_16227,G__16150_16228))
;
goog.object.set(G__16149_16227,G__16150_16228,G__16151_16229);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__16153_16230 = clojure.data.equality_partition;
var G__16154_16231 = "function";
var G__16155_16232 = ((function (G__16153_16230,G__16154_16231){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__16153_16230,G__16154_16231))
;
goog.object.set(G__16153_16230,G__16154_16231,G__16155_16232);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__16156_16236 = clojure.data.equality_partition;
var G__16157_16237 = "boolean";
var G__16158_16238 = ((function (G__16156_16236,G__16157_16237){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__16156_16236,G__16157_16237))
;
goog.object.set(G__16156_16236,G__16157_16237,G__16158_16238);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__16159_16241 = clojure.data.equality_partition;
var G__16160_16242 = "_";
var G__16161_16243 = ((function (G__16159_16241,G__16160_16242){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__16159_16241,G__16160_16242))
;
goog.object.set(G__16159_16241,G__16160_16242,G__16161_16243);
goog.object.set(clojure.data.Diff,"null",true);

var G__16165_16245 = clojure.data.diff_similar;
var G__16166_16246 = "null";
var G__16167_16247 = ((function (G__16165_16245,G__16166_16246){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__16165_16245,G__16166_16246))
;
goog.object.set(G__16165_16245,G__16166_16246,G__16167_16247);

goog.object.set(clojure.data.Diff,"string",true);

var G__16172_16248 = clojure.data.diff_similar;
var G__16173_16249 = "string";
var G__16174_16250 = ((function (G__16172_16248,G__16173_16249){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__16172_16248,G__16173_16249))
;
goog.object.set(G__16172_16248,G__16173_16249,G__16174_16250);

goog.object.set(clojure.data.Diff,"number",true);

var G__16175_16251 = clojure.data.diff_similar;
var G__16176_16252 = "number";
var G__16177_16253 = ((function (G__16175_16251,G__16176_16252){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__16175_16251,G__16176_16252))
;
goog.object.set(G__16175_16251,G__16176_16252,G__16177_16253);

goog.object.set(clojure.data.Diff,"array",true);

var G__16180_16254 = clojure.data.diff_similar;
var G__16181_16255 = "array";
var G__16182_16256 = ((function (G__16180_16254,G__16181_16255){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__16180_16254,G__16181_16255))
;
goog.object.set(G__16180_16254,G__16181_16255,G__16182_16256);

goog.object.set(clojure.data.Diff,"function",true);

var G__16183_16257 = clojure.data.diff_similar;
var G__16184_16258 = "function";
var G__16185_16259 = ((function (G__16183_16257,G__16184_16258){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__16183_16257,G__16184_16258))
;
goog.object.set(G__16183_16257,G__16184_16258,G__16185_16259);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__16189_16262 = clojure.data.diff_similar;
var G__16190_16263 = "boolean";
var G__16191_16264 = ((function (G__16189_16262,G__16190_16263){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__16189_16262,G__16190_16263))
;
goog.object.set(G__16189_16262,G__16190_16263,G__16191_16264);

goog.object.set(clojure.data.Diff,"_",true);

var G__16192_16265 = clojure.data.diff_similar;
var G__16193_16266 = "_";
var G__16194_16267 = ((function (G__16192_16265,G__16193_16266){
return (function (a,b){
var fexpr__16196 = (function (){var G__16197 = clojure.data.equality_partition(a);
var G__16197__$1 = (((G__16197 instanceof cljs.core.Keyword))?G__16197.fqn:null);
switch (G__16197__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16197__$1)].join('')));

}
})();
return (fexpr__16196.cljs$core$IFn$_invoke$arity$2 ? fexpr__16196.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__16196.call(null,a,b));
});})(G__16192_16265,G__16193_16266))
;
goog.object.set(G__16192_16265,G__16193_16266,G__16194_16267);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
