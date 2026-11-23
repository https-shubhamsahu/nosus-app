((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,A,B={
d6Z(d,e){return new B.b2P(d,!0)},
b2P:function b2P(d,e){this.a=d
this.d=e},
aGa:function aGa(d,e,f,g,h,i,j,k,l,m){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=null
_.y=!1
_.z=l
_.Q=null
_.as=m
_.at=!0
_.ay=_.ax=null
_.ch=0
_.CW=null},
bW4:function bW4(){},
apQ:function apQ(d,e){this.a=d
this.b=e}}
J=c[1]
C=c[0]
A=c[2]
B=a.updateHolder(c[6],B)
B.b2P.prototype={
jz(d){var y=this.a,x=new B.aGa(d,y,'"',null,!0,null,!1,!1,new C.dv(""),[])
x.x=y
if(y==null)x.Q=new C.dv("")
return x}}
B.aGa.prototype={
A(d,e){var y=this.ay
if(y!=null){e=y+e
this.ay=null}this.Yx(e,0,e.length,!1)},
hv(d,e,f,g){var y=this,x=y.ay
if(x!=null){d=x+A.h.X(d,e,f)
y.ay=null
y.Yx(d,0,d.length,g)}else y.Yx(d,e,f,g)},
Yx(b4,b5,b6,b7){var y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this
if(b6-b5<=0){if(b7)b3.aK(0)
return}if(b3.at){if(b3.x==null){y=b3.Q
y.toString
y.a+=A.h.X(b4,b5,b6)
x=y.k(0)
for(b6=x.length,w=0,v=0;v<b6;++v)if(x.charCodeAt(v)===10)++w
u=w>=10||b6>=2048
t=b6>=32||A.h.n(x,"\n")||A.h.n(x,"\r")
if(!b7)y=!t||!u
else y=!1
if(y)return
s=b3.apI(x)
if(b3.x==null)b3.x=b3.ara(A.h.bh(x,s))
b3.Q=null
b5=s
b4=x}else if(A.h.fO(b4,"\ufeff",b5))++b5
b3.at=!1}y=!b7
if(y&&b6>b5){r=b3.c
q=r.charCodeAt(0)
for(p=b6-1,o=p,n=0;o>=b5;--o)if(b4.charCodeAt(o)===q)++n
else break
if(A.f.a7(n,2)===1){b3.ay=r
b6=p}}m=!1
if(y)if(!b3.y){m=b3.x
m=m!=null&&m.length>1&&b6>b5}if(m){l=b3.x
k=l.length-1
j=b6-b5
if(k>j)k=j
for(i=k;i>0;--i){g=b6-i
v=0
for(;;){if(!(v<i)){h=!0
break}if(b4.charCodeAt(g+v)!==l.charCodeAt(v)){h=!1
break}++v}if(h){b3.ay=A.h.X(b4,g,b6)
b6=g
break}}}if(b3.ay==null&&y&&!b3.y&&b6>b5&&b4.charCodeAt(b6-1)===13){b3.ay="\r";--b6}if(b6<=b5)return
r=b3.c
l=b3.x
f=r.charCodeAt(0)
q=r.charCodeAt(0)
m=l.length
e=m===1?l.charCodeAt(0):null
for(d=b3.z,a0=m-1,a1=m>1,a2=e==null,a3=!a2,a4=b5,p=a4;p<b6;){a5=b4.charCodeAt(p)
if(b3.y){if(a5===q){a6=p+1
a6=a6<b6&&b4.charCodeAt(a6)===f}else a6=!1
if(a6){if(p>a4)d.a+=A.h.X(b4,a4,p)
d.a+=r;++p
a4=p+1}else if(a5===f){a7=p+1
if(a7===b6)a8=!0
else if(a3){a9=b4.charCodeAt(a7)
a8=a9===e||a9===10||a9===13}else{a6=!1
if(y)if(a7<b6)a6=a1
if(a6){b0=b6-a7
if(b0<m){v=0
for(;;){if(!(v<b0)){h=!0
break}if(b4.charCodeAt(a7+v)!==l.charCodeAt(v)){h=!1
break}++v}if(h){b3.ay=A.h.X(b4,p,b6)
b6=p
break}}}a8=A.h.fO(b4,l,a7)||A.h.fO(b4,"\n",a7)||A.h.fO(b4,"\r",a7)}if(a8){if(p>a4)d.a+=A.h.X(b4,a4,p)
b3.y=!1
a4=a7}}}else if(a5===f&&d.a.length===0&&p===a4){b3.y=!0
a4=p+1}else if(a3?a5===e:A.h.fO(b4,l,p)){if(p>a4)d.a+=A.h.X(b4,a4,p)
a6=b3.as
b1=d.a
a6.push(b3.adc(b1.charCodeAt(0)==0?b1:b1));++b3.ch
d.a=""
if(a2)p+=a0
a4=p+1}else{a6=a5===13
if(a6||a5===10){if(p>a4)d.a+=A.h.X(b4,a4,p)
b1=b3.as
b2=d.a
b1.push(b3.adc(b2.charCodeAt(0)==0?b2:b2));++b3.ch
d.a=""
b3.as8()
o=p+1
if(o<b6&&a6&&b4.charCodeAt(o)===10)p=o
a4=p+1}}++p}if(a4<b6)d.a+=A.h.X(b4,a4,b6)
if(b7)b3.aK(0)},
apI(d){var y,x,w=A.h.bg(d,"\ufeff")?1:0,v=A.h.bh(d,w)
if(A.h.bg(v,"sep=")){y=A.h.df(v,C.a9("\\r\\n|\\r|\\n",!0,!1,!1,!1))
if(y!==-1){x=A.h.ag(A.h.bh(A.h.X(v,0,y),4))
if(x.length!==0){this.x=x
w+=y
w=A.h.bg(A.h.bh(v,y),"\r\n")?w+2:w+1}}}return w},
as8(){var y,x=this,w=A.e.c7(x.as,new B.bW4())
if(w){w=x.ax
y=x.as
if(w!=null)y=new B.apQ(y,w)
x.a.A(0,y)}x.as=[]
x.ch=0},
adc(d){return d},
aK(d){var y,x,w,v,u=this,t=u.at
if(t){y=u.Q
y=y!=null&&y.a.length!==0}else y=!1
if(y){x=J.dh(u.Q)
w=u.apI(x)
if(u.x==null)u.x=u.ara(A.h.bh(x,w))
u.at=!1
u.Q=null
u.Yx(A.h.bh(x,w),0,x.length-w,!0)
return}if(!t||u.z.a.length!==0||u.as.length!==0){t=u.as
if(t.length!==0||u.z.a.length!==0){y=u.z
v=y.a
t.push(u.adc(v.charCodeAt(0)==0?v:v));++u.ch
u.as8()
y.a=""}}u.a.aK(0)},
ara(d){var y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(d.length===0)return","
y=[",",";","\t","|"]
x=A.h.li(d,C.a9("\\r\\n|\\r|\\n",!0,!1,!1,!1))
for(w=null,v=-1,u=0;u<4;++u){t=y[u]
if(!C.mG(d,t,0))continue
s=0
r=-1
q=0
p=0
for(;;){o=x.length
if(!(p<(o>10?10:o)))break
A:{n=x[p]
if(n.length===0)break A
m=A.h.fS(t,n).gu(0)
if(m>0){s+=m
if(r!==-1&&m===r)q+=2
r=m}}++p}l=s+q
if(l>v){v=l
w=t}}return w==null?",":w}}
B.apQ.prototype={
gu(d){return this.a.length},
su(d,e){A.e.su(this.a,e)},
h(d,e){var y,x=this
if(C.hz(e))return x.a[e]
else if(typeof e=="string"){y=x.b.h(0,e)
if(y!=null&&y<x.a.length)return x.a[y]}return null},
l(d,e,f){this.a[e]=f}}
var z=a.updateTypes([])
B.bW4.prototype={
$1(d){return!J.f(d,"")},
$S:91};(function inheritance(){var y=a.inherit
y(B.b2P,C.VV)
y(B.aGa,C.ni)
y(B.bW4,C.q3)
y(B.apQ,C.aa)})()
C.ajY(b.typeUniverse,JSON.parse('{"aGa":{"ni":[]},"apQ":{"aa":["@"],"v":["@"],"bj":["@"],"C":["@"],"aa.E":"@","C.E":"@"}}'))};
(a=>{a["xJlhDoC/JC5SXDbDobHQ1sWBKGk="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.dart.js_8.part.js.map
