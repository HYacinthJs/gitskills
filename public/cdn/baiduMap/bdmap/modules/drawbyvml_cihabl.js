_jsload2&&_jsload2('drawbyvml', 'function vg(a){this.C=a;this.GU={strokeweight:"weight",strokecolor:"color",fillcolor:"color",strokeopacity:"opacity",fillopacity:"opacity",strokestyle:"dashstyle"};this.Nb="vml"}vg.kK={orange:"#ffa500"};vg.prototype=new z.Yy;var wg=vg.prototype; wg.setAttribute=function(a,b,c){a&&(0==b.indexOf("stroke")?a=a.getElementsByTagName("stroke")[0]:0==b.indexOf("fill")&&(a=a.getElementsByTagName("fill")[0]),0<b.indexOf("color")&&(c?(a.on=o,vg.kK[c]&&(c=vg.kK[c])):a.on=q),"strokestyle"==b&&(c="solid"==c?"solid":"4 2 1 2"),"strokeweight"==b&&(c+="px"),a[this.Wq(b)]=c||"")};wg.Wq=function(a){return this.GU[a]||a};wg.yo=function(){return xb(this.C.Qf().yt,\'<v:shape style="behavior:url(#default#VML);z-index:1;width:1px;height:1px;position:absolute;left:0;top:0;"coordsize="1,1" coordorigin="0,0" filled="t" fillcolor="white"><v:stroke style="behavior:url(#default#VML);" endcap="round" oned="true" /><v:fill style="behavior:url(#default#VML)" /></v:shape>\')}; wg.ke=function(a,b){this.setAttribute(a,"path",this.jA(b));6==x.da.la&&(a.style.display="none",a.style.display="")};wg.jA=function(a){if(0==a.length)return"";var b=[];x.kc.Gb(a,function(a){if(!(2>a.length)){b.push("m "+a[0].x+" "+a[0].y+" l");for(var d=1,e=a.length;d<e;d++)b.push(a[d].x),b.push(a[d].y);b.push("e")}});return b.join(" ")||" "};z.IP=vg; ');
