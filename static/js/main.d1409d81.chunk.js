(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"SpongeBob","image":"https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014","clicked":false},{"id":2,"name":"Mr. Krabs","image":"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131","clicked":false},{"id":3,"name":"Squidward","image":"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626","clicked":false},{"id":4,"name":"Dexter","image":"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png","clicked":false},{"id":5,"name":"Courage","image":"https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423","clicked":false},{"id":6,"name":"Doug Funnie","image":"https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511","clicked":false},{"id":7,"name":"Bugs Bunny","image":"https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607","clicked":false},{"id":8,"name":"Johnny Bravo","image":"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist","clicked":false},{"id":9,"name":"Tommy Pickles","image":"https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641","clicked":false},{"id":10,"name":"Rocko","image":"http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416","clicked":false},{"id":11,"name":"Captain Planet","image":"http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836","clicked":false},{"id":12,"name":"Ickis","image":"http://static.tvtropes.org/pmwiki/pub/images/ickis.png","clicked":false}]')},,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(2),o=a.n(c),s=(a(14),a(3)),l=a(4),r=a(7),m=a(5),g=a(8);a(15);var d=function(e){return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"img-container",onClick:function(){return e.handleClick(e.id)}},i.a.createElement("img",{alt:e.name,src:e.image})))};a(16);var u=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)};a(17);var k=function(e){return i.a.createElement("h1",{className:"title"},e.children)},p=a(6),f=[],h=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(r.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={objects:p,score:0,topScore:0},a.checkArray=function(e){console.log("check:"+e),-1===f.indexOf(e)?(f.push(e),console.log(f)):a.handleGameOver()},a.handleGameOver=function(){a.setState({score:0},(function(){console.log(a.state.score)}))},a.handleShuffle=function(){a.setState({objects:a.state.objects.sort((function(e,t){return.5-Math.random()}))})},a.handleClick=function(e){console.log("I've been clicked",e),a.checkArray(e),a.handleShuffle(e)},a}return Object(g.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(u,null,i.a.createElement(k,null,"Friends List"),this.state.objects.map((function(t){return i.a.createElement(d,{handleClick:e.handleClick,id:t.id,key:t.id,name:t.name,image:t.image,occupation:t.occupation,location:t.location})})))}}]),t}(n.Component);o.a.render(i.a.createElement(h,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.d1409d81.chunk.js.map