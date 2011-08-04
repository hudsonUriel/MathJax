/*
 *  /MathJax/jax/output/HTML-CSS/autoload/mtable.js
 *  
 *  Copyright (c) 2010 Design Science, Inc.
 *
 *  Part of the MathJax library.
 *  See http://www.mathjax.org for details.
 * 
 *  Licensed under the Apache License, Version 2.0;
 *  you may not use this file except in compliance with the License.
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 */

MathJax.Hub.Register.StartupHook("HTML-CSS Jax Ready",function(){var c="1.1.1";var a=MathJax.ElementJax.mml,b=MathJax.OutputJax["HTML-CSS"];a.mtable.Augment({toHTML:function(X){X=this.HTMLcreateSpan(X);if(this.data.length===0){return X}var aJ=this.getValues("columnalign","rowalign","columnspacing","rowspacing","columnwidth","equalcolumns","equalrows","columnlines","rowlines","frame","framespacing","align","useHeight","width","side","minlabelspacing");var r=aJ.width.match(/%$/);var ag=b.createStack(X);var am=this.HTMLgetScale();var aH=-1;var w=[],I=[],l=[],O=[],K=[],aF,aE,v=-1,aC,t,ay,R;var aL=b.FONTDATA.baselineskip*am*aJ.useHeight,Z=b.FONTDATA.lineH*am,af=b.FONTDATA.lineD*am;for(aF=0,aC=this.data.length;aF<aC;aF++){R=this.data[aF];ay=(R.type==="mlabeledtr"?aH:0);O[aF]=[];w[aF]=I[aF]=0;for(aE=ay,t=R.data.length+ay;aE<t;aE++){if(l[aE]==null){if(aE>v){v=aE}K[aE]=b.createStack(b.createBox(ag));l[aE]=-b.BIGDIMEN}O[aF][aE]=b.createBox(K[aE]);b.Measured(R.data[aE-ay].toHTML(O[aF][aE]),O[aF][aE]);if(R.data[aE-ay].isMultiline){O[aF][aE].style.width="100%"}if(O[aF][aE].bbox.h>w[aF]){w[aF]=O[aF][aE].bbox.h}if(O[aF][aE].bbox.d>I[aF]){I[aF]=O[aF][aE].bbox.d}if(O[aF][aE].bbox.w>l[aE]){l[aE]=O[aF][aE].bbox.w}}}if(w[0]+I[0]){w[0]=Math.max(w[0],Z)}if(w[O.length-1]+I[O.length-1]){I[O.length-1]=Math.max(I[O.length-1],af)}var al=aJ.columnspacing.split(/ /),S=aJ.rowspacing.split(/ /),ah=aJ.columnalign.split(/ /),L=aJ.rowalign.split(/ /),N=aJ.columnlines.split(/ /),k=aJ.rowlines.split(/ /),ap=aJ.columnwidth.split(/ /),au=[];for(aF=0,aC=al.length;aF<aC;aF++){al[aF]=b.length2em(al[aF])}for(aF=0,aC=S.length;aF<aC;aF++){S[aF]=b.length2em(S[aF])}while(al.length<v){al.push(al[al.length-1])}while(ah.length<=v){ah.push(ah[ah.length-1])}while(N.length<v){N.push(N[N.length-1])}while(ap.length<=v){ap.push(ap[ap.length-1])}while(S.length<O.length){S.push(S[S.length-1])}while(L.length<=O.length){L.push(L[L.length-1])}while(k.length<O.length){k.push(k[k.length-1])}if(K[aH]){ah[aH]=(aJ.side.substr(0,1)==="l"?"left":"right");al[aH]=-l[aH]}for(aF=0,aC=O.length;aF<aC;aF++){R=this.data[aF];au[aF]=[];if(R.rowalign){L[aF]=R.rowalign}if(R.columnalign){au[aF]=R.columnalign.split(/ /);while(au[aF].length<=v){au[aF].push(au[aF][au[aF].length-1])}}}if(aJ.equalrows){var T=Math.max.apply(Math,w),ao=Math.max.apply(Math,I);for(aF=0,aC=O.length;aF<aC;aF++){ay=((T+ao)-(w[aF]+I[aF]))/2;w[aF]+=ay;I[aF]+=ay}}var az=w[0]+I[O.length-1];for(aF=0,aC=O.length-1;aF<aC;aF++){az+=Math.max((w[aF]+I[aF]?aL:0),I[aF]+w[aF+1]+S[aF])}var ac=0,aa=0,aA,aI=az;if(aJ.frame!=="none"||(aJ.columnlines+aJ.rowlines).match(/solid|dashed/)){ac=b.length2em(aJ.framespacing.split(/[, ]+/)[0]);aa=b.length2em(aJ.framespacing.split(/[, ]+/)[1]);aI=az+2*aa}var h,ax;if(String(aJ.align).match(/^\d+$/)){h=az/2+b.TeX.axis_height*am-w[0];ax=-(az/2+aa)}else{h=({top:-(w[0]+aa),bottom:az+aa-w[0],center:az/2-w[0],baseline:az/2-w[0],axis:az/2+b.TeX.axis_height*am-w[0]})[aJ.align];ax=({top:-(az+2*aa),bottom:0,center:-(az/2+aa),baseline:-(az/2+aa),axis:b.TeX.axis_height*am-az/2-aa})[aJ.align]}var aq,aw=0,U=0,V=0,aB=0,aG=0,o=[],B=[],ai=1;if(aJ.equalcolumns&&aJ.width!=="auto"){if(r){aq=(100/(v+1)).toFixed(2).replace(/\.?0+$/,"")+"%";for(aF=0,aC=Math.min(v+1,ap.length);aF<aC;aF++){ap[aF]=aq}aq=0;aw=1;aG=v+1;for(aF=0,aC=Math.min(v+1,al.length);aF<aC;aF++){aq+=al[aF]}}else{aq=b.length2em(aJ.width);for(aF=0,aC=Math.min(v+1,al.length);aF<aC;aF++){aq-=al[aF]}aq/=v+1;for(aF=0,aC=Math.min(v+1,ap.length);aF<aC;aF++){l[aF]=aq}}}else{for(aF=0,aC=Math.min(v+1,ap.length);aF<aC;aF++){if(ap[aF]==="auto"){U+=l[aF]}else{if(ap[aF]==="fit"){B[aG]=aF;aG++;U+=l[aF]}else{if(ap[aF].match(/%$/)){o[aB]=aF;aB++;V+=l[aF];aw+=b.length2em(ap[aF],1)}else{l[aF]=b.length2em(ap[aF]);U+=l[aF]}}}}if(r){aq=0;for(aF=0,aC=Math.min(v,al.length);aF<aC;aF++){aq+=al[aF]}if(aw>0.98){ai=0.98/aw;aw=0.98}}else{if(aJ.width==="auto"){if(aw>0.98){ai=V/(U+V);aq=U+V}else{aq=U/(1-aw)}}else{aq=b.length2em(aJ.width);for(aF=0,aC=Math.min(v+1,al.length);aF<aC;aF++){aq-=al[aF]}}for(aF=0,aC=o.length;aF<aC;aF++){l[o[aF]]=b.length2em(ap[o[aF]],aq*ai);U+=l[o[aF]]}if(Math.abs(aq-U)>0.01){if(aG&&aq>U){aq=(aq-U)/aG;for(aF=0,aC=B.length;aF<aC;aF++){l[B[aF]]+=aq}}else{aq=aq/U;for(aE=0;aE<=v;aE++){l[aE]*=aq}}}if(aJ.equalcolumns){var ad=Math.max.apply(Math,l);for(aE=0;aE<=v;aE++){l[aE]=ad}}}}var ar=h,n,u,aD;ay=(K[aH]?aH:0);for(aE=ay;aE<=v;aE++){for(aF=0,aC=O.length;aF<aC;aF++){if(O[aF][aE]){ay=(this.data[aF].type==="mlabeledtr"?aH:0);var ak=this.data[aF].data[aE-ay];if(ak.HTMLcanStretch("Horizontal")){O[aF][aE].bbox=ak.HTMLstretchH(K[aE],l[aE]).bbox}else{if(ak.HTMLcanStretch("Vertical")){var z=ak.CoreMO();var ab=z.symmetric;z.symmetric=false;O[aF][aE].bbox=ak.HTMLstretchV(K[aE],w[aF],I[aF]).bbox;z.symmetric=ab}}aD=ak.rowalign||this.data[aF].rowalign||L[aF];n=({top:w[aF]-O[aF][aE].bbox.h,bottom:O[aF][aE].bbox.d-I[aF],center:((w[aF]-I[aF])-(O[aF][aE].bbox.h-O[aF][aE].bbox.d))/2,baseline:0,axis:0})[aD];alert([aD,ar,n,w[aF],I[aF],O[aF][aE].bbox.h,O[aF][aE].bbox.d]);aD=(ak.columnalign||au[aF][aE]||ah[aE]);b.alignBox(O[aF][aE],aD,ar+n)}if(aF<O.length-1){ar-=Math.max((w[aF]+I[aF]?aL:0),I[aF]+w[aF+1]+S[aF])}}ar=h}if(r){var q=b.createBox(ag);q.style.left=q.style.top=0;q.style.right=b.Em(aq+2*ac);q.style.display="inline-block";q.style.height="0px";if(b.msieRelativeWidthBug){q=b.createBox(q);q.style.position="relative";q.style.height="1em";q.style.width="100%";q.bbox=ag.bbox}var an=0,av=ac,aK,g;if(aG){aK=100*(1-aw)/aG,g=U/aG}else{aK=100*(1-aw)/(v+1);g=U/(v+1)}for(aE=0;aE<=v;aE++){b.placeBox(K[aE].parentNode,0,0);K[aE].style.position="relative";K[aE].style.left=b.Em(av);K[aE].style.width="100%";K[aE].parentNode.parentNode.removeChild(K[aE].parentNode);var e=b.createBox(q);b.addBox(e,K[aE]);K[aE]=e;var ae=e.style;ae.display="inline-block";ae.left=an+"%";if(ap[aE].match(/%$/)){var G=parseFloat(ap[aE])*ai;if(aG===0){ae.width=(aK+G)+"%";an+=aK+G;e=b.createBox(e);b.addBox(e,K[aE].firstChild);e.style.left=0;e.style.right=b.Em(g);av-=g}else{ae.width=G+"%";an+=G}}else{if(ap[aE]==="fit"||aG===0){ae.width=aK+"%";e=b.createBox(e);b.addBox(e,K[aE].firstChild);e.style.left=0;e.style.right=b.Em(g-l[aE]);av+=l[aE]-g;an+=aK}else{ae.width=b.Em(l[aE]);av+=l[aE]}}if(b.msieRelativeWidthBug){b.addText(e.firstChild,b.NBSP);e.firstChild.style.position="relative"}av+=al[aE];if(N[aE]!=="none"&&aE<v&&aE!==aH){u=b.createBox(q);u.style.left=an+"%";u=b.createRule(u,aI,0,1.25/b.em);u.style.position="absolute";u.bbox={h:aI,d:0,w:0,rw:1.25/b.em,lw:0};u.parentNode.bbox=ag.bbox;b.placeBox(u,av-al[aE]/2,ax,true);u.style.borderStyle=N[aE]}}}else{var at=ac;for(aE=0;aE<=v;aE++){if(!K[aE].bbox.width){b.setStackWidth(K[aE],l[aE])}if(ap[aE]!=="auto"&&ap[aE]!=="fit"){K[aE].bbox.width=l[aE];K[aE].bbox.isFixed=true}b.placeBox(K[aE].parentNode,at,0);at+=l[aE]+al[aE];if(N[aE]!=="none"&&aE<v&&aE!==aH){u=b.createRule(ag,aI,0,1.25/b.em);b.addBox(ag,u);u.bbox={h:aI,d:0,w:0,rw:1.25/b.em,lw:0};b.placeBox(u,at-al[aE]/2,ax,true);u.style.borderStyle=N[aE]}}}aA=ag.bbox.w+ac;var d;if(aJ.frame!=="none"){d=b.createFrame(ag,aI,0,aA,1.25/b.em,aJ.frame);b.addBox(ag,d);b.placeBox(d,0,ax,true);if(r){d.style.width="100%"}}ar=h;for(aF=0,aC=O.length-1;aF<aC;aF++){n=Math.max(aL,I[aF]+w[aF+1]+S[aF]);if(k[aF]!=="none"){u=b.createRule(ag,1.25/b.em,0,aA);b.addBox(ag,u);u.bbox={h:1.25/b.em,d:0,w:aA,rw:aA,lw:0};b.placeBox(u,0,ar-I[aF]-(n-I[aF]-w[aF+1])/2,true);if(k[aF]==="dashed"||r){u.style.borderTop=u.style.height+" "+k[aF];u.style.height=0;u.style.width=u.style.borderLeftWidth;u.style.borderLeft="";if(r){u.style.width="100%"}}}ar-=n}if(r){X.bbox.width=aJ.width;ag.style.width="100%"}if(K[aH]){var Q=this.getValues("indentalignfirst","indentshiftfirst","indentalign","indentshift");if(Q.indentalignfirst!==a.INDENTALIGN.INDENTALIGN){Q.indentalign=Q.indentalignfirst}if(Q.indentalign===a.INDENTALIGN.AUTO){Q.indentalign=this.displayAlign}if(Q.indentshiftfirst!==a.INDENTSHIFT.INDENTSHIFT){Q.indentshift=Q.indentshiftfirst}if(Q.indentshift==="auto"){Q.indentshift=this.displayIndent}var E=b.createStack(X,false,"100%");b.addBox(E,ag);b.alignBox(ag,Q.indentalign,0);if(Q.indentshift&&Q.indentalign!==a.INDENTALIGN.CENTER){ag.style[{left:"Left",right:"Right"}[Q.indentalign]]=b.Em(b.length2em(Q.indentshift))}K[aH].parentNode.parentNode.removeChild(K[aH].parentNode);b.addBox(E,K[aH]);b.alignBox(K[aH],ah[aH],0);if(b.msieRelativeWidthBug){ag.style.top=K[aH].style.top=""}if(r){ag.style.width=aJ.width;X.bbox.width="100%"}K[aH].style.marginRight=K[aH].style.marginLeft=b.Em(b.length2em(aJ.minlabelspacing))}if(!r){this.HTMLhandleSpace(X)}var aj=this.HTMLhandleColor(X);if(aj&&r){if(!d){d=b.createFrame(ag,aI,0,aA,0,"none");b.addBox(ag,d);b.placeBox(d,0,ax,true);d.style.width="100%"}d.style.backgroundColor=aj.style.backgroundColor;d.parentNode.insertBefore(d,d.parentNode.firstChild);aj.parentNode.removeChild(aj)}return X},HTMLhandleSpace:function(d){d.style.paddingLeft=d.style.paddingRight=".1667em"}});a.mtd.Augment({toHTML:function(e,d,g){e=this.HTMLcreateSpan(e);if(this.data[0]){var f=b.Measured(this.data[0].toHTML(e),e);if(g!=null){b.Remeasured(this.data[0].HTMLstretchV(e,d,g),e)}else{if(d!=null){b.Remeasured(this.data[0].HTMLstretchH(e,d),e)}}e.bbox=f.bbox}this.HTMLhandleSpace(e);this.HTMLhandleColor(e);return e},HTMLstretchH:a.mbase.HTMLstretchH,HTMLstretchV:a.mbase.HTMLstretchV});MathJax.Hub.Startup.signal.Post("HTML-CSS mtable Ready");MathJax.Ajax.loadComplete(b.autoloadDir+"/mtable.js")});

