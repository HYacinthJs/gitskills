_jsload2&&_jsload2('othersearch', 'x.extend(Fd.prototype,{Qd:function(){for(var a=0,b=this.Pa.length;a<b;a++){var c=this.Pa[a];this[c.method].apply(this,c.arguments)}delete this.Pa},ym:function(a,b,c){c=c||"\\u5317\\u4eac\\u5e02";/^[ \\s]*$/.test(a)||cd.cb(function(a){if(a&&a.result&&35==a.result.type){var c=a.result,a=a.content,f=p,g=p;if(c&&0==c.error&&a)var c=a.cn,g=a.sc,i=a.wd,k=a.prc,l=a.fuzzy_score,m=a.catalog,f=new H(a.coord.x,a.coord.y),f=S.Ab(f),g={city:c,citycode:g,address:i,precise:k,confidence:l,level:m};b&&b(f,g)}},{qt:"gc", wd:a,cn:c})},um:function(a,b,c){if(!(a instanceof H)&&b)b(p);else{var a=S.zb(a),d=a.lng,a=a.lat,c=c||{};cd.cb(function(a){var c=p;if(a&&a.result&&44==a.result.type){var d=a.content,i={},k=[];if(0==a.result.error&&d){c=d.address_detail;a=c.city;c&&(i.streetNumber=c.street_number,i.street=c.street,i.district=c.district,i.city=a,i.province=c.province);var c=d.point,c=new H(c.x,c.y),c=S.Ab(c),l=d.surround_poi;if(l&&l.length)for(var m=0,n=l.length;m<n;m++){var t={},v=l[m];t.title=v.name;t.uid=v.uid;var w= new H(v.point.x,v.point.y),w=S.Ab(w);t.point=w;t.city=a;t.Si=v.poiType;t.type=0;t.address=v.addr;t.postcode=v.zip||p;t.phoneNumber=v.tel||p;v=t.Si;0!==v.length&&(t.ju=v.split(","));k.push(t)}c={point:c,address:d.address,addressComponents:i,surroundingPois:k,business:d.business}}}b&&b(c)},{qt:"rgc",x:d,y:a,dis_poi:c.poiRadius||100,poi_num:c.numPois||10,latest_admin:"1"})}}});T(Gd,{getPoint:Gd.ym,getLocation:Gd.um});function Dh(a){var b=document.createElement("script");b.onload=function(){b.parentNode.removeChild(b)};b.src=a;document.getElementsByTagName("head")[0].appendChild(b)} x.extend(Geolocation.prototype,{getCurrentPosition:function(a,b){function c(){!i&&!k&&(l&&(clearTimeout(l),l=p),b.apply(g,arguments),k=o)}function d(b){if(!i&&!k&&(l&&(clearTimeout(l),l=p),g.SW=b,z!==p))a.apply(g,arguments),i=o,Qa(8E3,{longitude:b.longitude,latitude:b.latitude,accuracy:b.accuracy})}function e(a){navigator.geolocation?(new Eh({timeout:5E3,maximumAge:g.D.maximumAge})).getCurrentPosition(function(a){d(a)},function(){a()}):a()}function f(a){(new Fh({timeout:g.D.timeout,maximumAge:g.D.maximumAge})).getCurrentPosition(function(a){d(a)}, function(){a()})}z.alog("cus.fire","count","z_geolocation");var g=this,i=q,k=q,l=setTimeout(function(){if(!i&&!k){var a=new Gh;a.errorCode=a.Zy;a.mf="\\u6574\\u4f53\\u5b9a\\u4f4d\\u8d85\\u65f6";c(a)}},g.D.timeout);(function(a){(new Hh({bl:g.D.bl})).getCurrentPosition(function(a){d(a)},function(){a()})})(function(){e(function(){f(function(){var a=new Gh;a.mf="\\u6240\\u6709\\u7684\\u5b9a\\u4f4d\\u90fd\\u4e0d\\u53ef\\u7528\\u6216\\u5931\\u8d25";a.errorCode=a.Ej;c(a)})})})},zm:function(){return this.SW?0:2}}); Geolocation.prototype.getCurrentPosition=Geolocation.prototype.getCurrentPosition;Geolocation.prototype.getStatus=Geolocation.prototype.zm; x.extend(function(a){a=a||{};this.D={domain:a.domain||".baidu.com",path:a.path||"/",sC:a.sC||"H_LOC_MI",ah:a.ah||18E5}}.prototype,{UZ:function(a){var b=this.D.sC,a=a.wO(),a=encodeURIComponent(a),c={path:this.path,domain:this.domain,ah:this.ah};if(RegExp(\'^[^\\\\x00-\\\\x20\\\\x7f\\\\(\\\\)<>@,;:\\\\\\\\\\\\"\\\\[\\\\]\\\\?=\\\\{\\\\}\\\\/\\\\u0080-\\\\uffff]+$\').test(b)){var c=c||{},d=c.ah;"number"==typeof c.ah&&(d=new Date,d.setTime(d.getTime()+c.ah));document.cookie=b+"="+a+(c.path?"; path="+c.path:"")+(d?"; expires="+d.toGMTString(): "")+(c.domain?"; domain="+c.domain:"")+(c.IZ?"; secure":"")}},fX:function(a,b){var c;var d=this.D.sC;RegExp(\'^[^\\\\x00-\\\\x20\\\\x7f\\\\(\\\\)<>@,;:\\\\\\\\\\\\"\\\\[\\\\]\\\\?=\\\\{\\\\}\\\\/\\\\u0080-\\\\uffff]+$\').test(d)&&(d=RegExp("(^| )"+d+"=([^;]*)(;|$)").exec(document.cookie))&&(c=d[2]||p);c=c||p;c="string"==typeof c?decodeURIComponent(c):p;c===p?(c=new Gh,c.mf="Cookie\\u4e2d\\u4e0d\\u5b58\\u5728\\u5730\\u7406\\u4f4d\\u7f6e\\u4fe1\\u606f",c.errorCode=c.Ej,b(c)):(d=new Ih,d.sN(c),a(d))}}); x.extend(function(){this.D={EM:"H_LOC_MI"}}.prototype,{fX:function(a,b){var c=localStorage.getItem(this.D.EM);if(c===p)c=new Gh,c.errorCode=c.Ej,c.mf="localStorage\\u4e2d\\u4e0d\\u5b58\\u5728\\u5730\\u7406\\u4f4d\\u7f6e\\u4fe1\\u606f",b(c);else{var d=new Ih;d.sN(c);a(d)}},UZ:function(a){a=a.wO();localStorage.setItem(this.D.EM,a)}}); x.extend(function(a){this.D={timeout:a.timeout||3E3,maximumAge:a.maximumAge||6E5}}.prototype,{getCurrentPosition:function(a,b){function c(){var c="_cbk"+Math.floor(1E5*Math.random());window[c]=function(c){if(0==c.error){var d=new Ih;d.accuracy=c.coords.accuracy;d.longitude=c.coords.longitude;d.latitude=c.coords.latitude;a(d)}else 1==c.error?(c=Gh(),c.errorCode=c.Ej,c.mf="\\u6ca1\\u6709\\u68c0\\u6d4b\\u5230\\u5b9a\\u4f4d\\u6a21\\u5757",b(c)):1==c.error&&(c=Gh(),c.errorCode=c.Ej,c.mf="\\u5b9a\\u4f4d\\u5931\\u8d25", b(c))};Dh("http://127.0.0.1:6259/geolocation?"+["timeout="+d.D.timeout,"callback="+c].join("&"))}var d=this;(function(a){var c="_cbk"+Math.floor(1E5*Math.random()),d=q,i=q;setTimeout(function(){i=o;if(!d){var a=new Gh;a.errorCode=a.Zy;a.mf="\\u8bf7\\u6c42APN\\u8d85\\u65f6";b(a)}},1200);window[c]=function(c){i||(c&&0==c.error?(d=o,a()):(c=Gh(),c.errorCode=c.Ej,c.mf="\\u8bf7\\u6c42APN\\u5931\\u8d25",b(c)))};Dh("http://127.0.0.1:6259/getapn?callback="+c)})(function(){c()})}}); function Hh(a){this.D={bl:a.bl||q}} x.extend(Hh.prototype,{getCurrentPosition:function(a,b){var c=Math.floor(1E5*Math.random()),d="_cbk"+c;window.baidu=window.baidu||{};window.baidu[d]=function(e){(e=JSON.parse(e))&&1===e.errorcode?(c=Math.floor(1E5*Math.random()),d="_cbk"+c,window.baidu=window.baidu||{},window.baidu[d]=function(b){var b=new H(b.x,b.y),c=new Ih;c.longitude=b.lng;c.latitude=b.lat;c.point=new H(b.lng,b.lat);(new Fd).um(b,function(b){if(b=b.addressComponents)b.province&&(c.address.province=b.province),b.city&&(c.address.city= b.city),b.district&&(c.address.district=b.district),b.street&&(c.address.street=b.street),b.streetNumber&&(c.address.street_number=b.streetNumber);a(c)})},Dh(z.wc+"?"+["qt=coordtrans","x="+e.longitude,"y="+e.latitude,"from=0&to=4","callback=baidu."+d].join("&"))):b()};this.D.bl&&window.BaiduLocAssistant&&window.BaiduLocAssistant.sendMessage?window.BaiduLocAssistant.sendMessage(JSON.stringify({action:"requestLoc",callback:"baidu."+d})):b()}}); function Eh(a){this.D={timeout:a.timeout||5E3,maximumAge:a.maximumAge||6E5}} x.extend(Eh.prototype,{getCurrentPosition:function(a,b){function c(a){var c=new Gh;a.code===a.PERMISSION_DENIED&&(c.errorCode=c.nP,c.mf="\\u7528\\u6237\\u51b3\\u7edd\\u5b9a\\u4f4d\\u8bf7\\u6c42");a.code===a.POSITION_UNAVAILABLE&&(c.errorCode=c.Ej,c.mf="\\u5b9a\\u4f4d\\u4e0d\\u53ef\\u7528");a.code===a.TIMEOUT&&(c.errorCode=c.Zy,c.mf="\\u5b9a\\u4f4d\\u8d85\\u65f6");b(c)}function d(b){if(/BIDUBrowser/i.test(navigator.userAgent))(new Fd).um(new H(b.coords.longitude,b.coords.latitude),function(c){var d=new Ih;d.accuracy= 1999<b.coords.accuracy?1999:b.coords.accuracy;d.longitude=b.coords.longitude;d.latitude=b.coords.latitude;d.point=new H(d.longitude,d.latitude);c.addressComponents&&(c.addressComponents.province&&(d.address.province=c.addressComponents.province),c.addressComponents.city&&(d.address.city=c.addressComponents.city),c.addressComponents.district&&(d.address.district=c.addressComponents.district),c.addressComponents.street&&(d.address.street=c.addressComponents.street),c.addressComponents.streetNumber&& (d.address.street_number=c.addressComponents.streetNumber));a(d)});else{var c="_cbk"+Math.floor(1E5*Math.random());window.baidu=window.baidu||{};window.baidu[c]=function(c){var c=new H(c.x,c.y),d=new Ih;d.accuracy=1999<b.coords.accuracy?1999:b.coords.accuracy;d.longitude=c.lng;d.latitude=c.lat;d.point=new H(c.lng,c.lat);(new Fd).um(c,function(b){if(b=b.addressComponents)b.province&&(d.address.province=b.province),b.city&&(d.address.city=b.city),b.district&&(d.address.district=b.district),b.street&& (d.address.street=b.street),b.streetNumber&&(d.address.street_number=b.streetNumber);a(d)})};Dh(z.wc+"?"+["qt=coordtrans","x="+b.coords.longitude,"y="+b.coords.latitude,"from=0&to=4","callback=baidu."+c].join("&"))}}var e=navigator.userAgent.toLowerCase(),f;0<e.indexOf("like mac os x")&&(f=(e.match(/os [\\d._]*/gi)+"").replace(/[^0-9|_.]/ig,"").replace(/_/ig,"."));e=f+"";"undefined"!=e&&0<e.length&&10<=parseInt(f)?(f=document.createElement("iframe"),f.height=0,f.width=0,f.style.borderWidth=0,f.src= "https://api.map.baidu.com/res/staticPages/location.html?timeout="+this.D.timeout+"&maximumAge="+this.D.maximumAge+"&type=2",document.body.appendChild(f),window.addEventListener("message",function(a){if(a.data)try{var b=JSON.parse(a.data);b.code?c(b):d(b)}catch(e){}},q)):navigator.geolocation.getCurrentPosition(d,c,{enableHighAccuracy:q,timeout:this.D.timeout,maximumAge:this.D.maximumAge})}});function Fh(a){this.D={timeout:a.timeout||5E3}} x.extend(Fh.prototype,{getCurrentPosition:function(a,b){var c="_cbk"+Math.floor(1E5*Math.random());window[c]=function(c){if(c&&c.content&&c.content.point){var e=new Ih;e.longitude=c.content.point.x;e.latitude=c.content.point.y;e.point=new H(c.content.point.x,c.content.point.y);c.content.address_detail&&(c.content.address_detail.city&&(e.address.city=c.content.address_detail.city),c.content.address_detail.province&&(e.address.province=c.content.address_detail.province),c.content.address_detail.district&& (e.address.district=c.content.address_detail.district),c.content.address_detail.street&&(e.address.street=c.content.address_detail.street),c.content.address_detail.street_number&&(e.address.street_number=c.content.address_detail.street_number));a(e)}else c=Gh(),c.errorCode=c.Ej,c.mf="\\u8bf7\\u6c42IP\\u5730\\u7406\\u5b9a\\u4f4d\\u4fe1\\u606f\\u5931\\u8d25",b(c)};Dh(z.wc+"location/ip?"+["qt=loc&coor=bd09ll&ak=Er8iGG4UMfSd3Ckuc6w8C56peI4ge1Ih","timeout="+this.D.timeout,"callback="+c].join("&"))},C2:s()}); function Ih(){this.point=this.timestamp=this.speed=this.longitude=this.latitude=this.heading=this.altitudeAccuracy=this.altitude=this.accuracy=p;this.address={city:"",city_code:0,district:"",province:"",street:"",street_number:""}} x.extend(Ih.prototype,{n4:function(a){this.accuracy=a.accuracy;this.altitude=a.altitude;this.altitudeAccuracy=a.altitudeAccuracy;this.heading=a.heading;this.latitude=a.latitude;this.longitude=a.longitude;this.speed=a.speed;this.address=a.address;this.timestamp=a.timestamp;this.point=new H(a.longitude,a.latitude)},H2:function(){return{accuracy:this.accuracy,longitude:this.longitude,latitude:this.latitude,altitude:this.altitude,address:this.address,timestamp:this.timestamp}},wO:function(){return JSON.stringify({accuracy:this.accuracy, longitude:this.longitude,latitude:this.latitude,altitude:this.altitude,address:this.address,timestamp:this.timestamp})},sN:function(a){a=JSON.parse(a);this.accuracy=a.accuracy;this.longitude=a.longitude;this.latitude=a.latitude;this.altitude=a.altitude;this.address=a.address;this.timestamp=a.timestamp}});function Gh(){this.mf=j;this.nP=this.errorCode=1;this.Ej=2;this.Zy=3};x.extend(Hd.prototype,{Qd:function(){for(var a=0,b=this.Pa.length;a<b;a++){var c=this.Pa[a];this[c.method].apply(this,c.arguments)}delete this.Pa},get:function(a){var b=this;cd.cb(function(c){if(c&&c.result&&2==c.result.type){var d=c.result,c=c.content;if(d&&0==d.error){var d=b.k.ka.map,e=c.level,f=c.cname,g=c.code,i=O.vb(c.geo,o).point,e=O.gx(e,d);d&&d.Dd(i,e)}a&&a({center:i,level:e,name:f,code:g})}},{qt:"dec"})}});x.extend(Id.prototype,{Qd:function(){for(var a=0,b=this.Pa.length;a<b;a++){var c=this.Pa[a];this[c.method].apply(this,c.arguments)}delete this.Pa},get:function(a,b){var c={boundaries:[]},d="119.590757,23.808251;119.268804,23.41408;119.422881,23.163397;119.758632,23.201668;119.726437,23.588002;119.70804,23.763808;119.645949,23.797671 121.642055,25.312114;121.752439,25.169879;121.945611,25.186621;121.991604,25.052618;122.055995,24.985561;121.872022,24.834547;121.88122,24.624496;121.899617,24.498294;121.798432,24.270807;121.697247,24.135805;121.642055,23.958396;121.504076,23.288798;121.439685,23.178281;121.310904,22.991042;121.255712,22.812068;121.053342,22.624316;120.933759,22.290847;121.016547,21.990891;120.86017,21.887901;120.648601,21.947988;120.584211,22.376429;120.289854,22.51325;120.11508,22.939931;120.013895,23.118734;119.9771,23.543483;120.372642,24.11892;120.694595,24.641313;121.126931,25.119638;121.559268,25.337197;121.623658,25.345557 120.38414,22.372151;120.423234,22.355038;120.372642,22.307967;120.347346,22.329365;120.351945,22.355038;120.356544,22.363595 121.506375,22.696888;121.552369,22.660607;121.517874,22.611506;121.469581,22.64353;121.464981,22.690486;121.492577,22.701155 121.589163,22.100236;121.600661,22.050934;121.623658,22.012338;121.637456,21.939406;121.596062,21.93726;121.550069,22.014483;121.499476,22.044502;121.501776,22.102379;121.54087,22.102379 122.08819,25.668005;122.110037,25.488627;121.911116,25.435387;122.027249,25.658625;122.057144,25.669047 123.686455,25.955273;123.730149,25.909524;123.58527,25.699264;123.454189,25.743012;123.557674,25.817972;123.594468,25.84711 124.589072,25.924082;124.60172,25.894964;124.564926,25.902244;124.567226,25.929282;124.571825,25.930321 115.973388,21.36321;116.152762,21.298566;116.152762,21.164878;116.148163,21.039704;116.056176,21.000836;115.863004,21.035386;115.835409,21.143304;115.830809,21.26839;115.844607,21.358902;115.922796,21.36321 118.474702,24.527161;118.4862,24.509276;118.491949,24.487706;118.498848,24.46771;118.501148,24.448764;118.501148,24.435079;118.492524,24.422972;118.481026,24.411916;118.467228,24.406125;118.443082,24.39928;118.41721,24.386643;118.378116,24.379797;118.314301,24.369264;118.28728,24.371898;118.247035,24.378217;118.230363,24.377164;118.202192,24.376111;118.182645,24.375584;118.167122,24.375584;118.159073,24.378744;118.156199,24.389802;118.160223,24.397174;118.167697,24.407178;118.17862,24.424024;118.194718,24.434026;118.210241,24.444027;118.232088,24.457185;118.254509,24.472972;118.275206,24.488232;118.289579,24.497702;118.316025,24.506646;118.35052,24.521375;118.368918,24.529791;118.386165,24.537154;118.405137,24.540836;118.425834,24.543465;118.449981,24.541888;118.460904,24.53768".split(" "); if("\\u53f0\\u6e7e\\u7701"===a||"\\u53f0\\u6e7e"===a){for(var e=0;6>e;e++)c.boundaries[e]=d[e];c.boundaries[6]=d[9];b&&b(c)}else if("\\u9493\\u9c7c\\u5c9b"===a){for(e=0;1>e;e++)c.boundaries[e]=d[6];b&&b(c)}else if("\\u8d64\\u5c3e\\u5c7f"===a){for(e=0;1>e;e++)c.boundaries[e]=d[7];b&&b(c)}else cd.cb(function(e){e&&e.content&&e.content.uid?cd.cb(function(e){if(e&&e.content&&e.content.geo){var f=O.vb(e.content.geo,q);if(f.Gd&&f.Gd.length&&0<f.Gd.length)for(var k=f.Gd.length,e=0;e<k;e++){var l=f.Gd[e];if(l&&l.length&& 0<l.length){for(var m=l.length-1,n=[],t=q,v=0,w=0,y=0;y<m;y+=2){var B=new H(l[y],l[y+1]),B=S.Ab(B);if(y<m-3)var A=new H(l[y+2],l[y+3]),A=S.Ab(A);var E=function(a,b){if(a.lng>109&&a.lng<113&&a.lat>15&&a.lat<19){if(a.lng-b.lng>1&&a.lat-b.lat<-1){t=o;v=y/2}if(a.lng-b.lng<-1&&a.lat-b.lat>1){t=o;w=y/2}}};if(-1<a.indexOf("\\u5168\\u56fd")||-1<a.indexOf("\\u4e2d\\u56fd")||-1<a.indexOf("\\u4e2d\\u534e\\u4eba\\u6c11\\u5171\\u548c\\u56fd")){if(117.546263<=B.lng&&118.711042>=B.lng&&38.697981<=B.lat&&38.91302>=B.lat||113.576516<= B.lng&&113.638822>=B.lng&&22.146067<=B.lat&&22.156645>=B.lat){n.length=0;break}E(B,A)}-1<a.indexOf("\\u6d77\\u5357")&&E(B,A);n.push(B.lng+", "+B.lat)}t===o?(v>w&&(l=v,v=w,w=l),l=n,n=n.splice(v+1),m=n.splice(w-v),l=l.concat(m),c.boundaries.push(l.join(";")),c.boundaries.push(n.join(";")),t=q):0!==n.length&&c.boundaries.push(n.join(";"))}}}A=c.boundaries.length;if(("\\u4e2d\\u56fd"===a||"\\u5168\\u56fd"===a||"\\u4e2d\\u534e\\u4eba\\u6c11\\u5171\\u548c\\u56fd"===a)&&0<c.boundaries.length)for(e=0;e<d.length-1;e++)c.boundaries[A+ e]=d[e];b&&b(c)},{qt:"ext",num:1E3,l:10,uid:e.content.uid}):b&&b(c)},{qt:"s",wd:a})},d1:function(a){var b=[];if("string"!=typeof a)return b;for(var a=a.split("|")[2].split(";"),c=0;c<a.length-1;c++){for(var d=[],e=a[c].split(","),f=0;f<e.length;f+=2){var g=new H(e[f],e[f+1]),g=S.Ab(g);d.push(g.lng+", "+g.lat)}b.push(d.join(";"))}return b}});T(wf,{get:wf.get}); ');
