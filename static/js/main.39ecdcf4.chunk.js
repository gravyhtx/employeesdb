(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{15:function(e){e.exports=JSON.parse('[{"id":1,"name":"SpongeBob","image":"https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014","occupation":"Fry Cook","location":"A Pineapple Under the Sea"},{"id":2,"name":"Mr. Krabs","image":"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131","occupation":"Restaurant Owner","location":"A Giant Anchor"},{"id":3,"name":"Squidward","image":"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626","occupation":"Cashier","location":"An Easter Island Head"},{"id":4,"name":"Dexter","image":"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png","occupation":"Boy Genius","location":"A Secret Laboratory"},{"id":5,"name":"Courage","image":"https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423","occupation":"A Cowardly Dog","location":"Nowhere, Kansas"},{"id":6,"name":"Doug Funnie","image":"https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511","occupation":"Student","location":"Bluffington"},{"id":7,"name":"Bugs Bunny","image":"https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607","occupation":"Looney Toon","location":"A Rabbit Burrow"},{"id":8,"name":"Johnny Bravo","image":"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist","occupation":"Ladies Man","location":"Aron City"},{"id":9,"name":"Tommy Pickles","image":"https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641","occupation":"Adventurer","location":"California"},{"id":10,"name":"Rocko","image":"http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416","occupation":"Cashier","location":"O-Town, California"},{"id":11,"name":"Captain Planet","image":"http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836","occupation":"Superhero","location":"Earth"},{"id":12,"name":"Ickis","image":"http://static.tvtropes.org/pmwiki/pub/images/ickis.png","occupation":"Ahhhh! A Real Monster!","location":"Under a City Dump"}]')},18:function(e,n,t){e.exports=t(45)},23:function(e,n,t){},24:function(e,n,t){},25:function(e,n,t){},43:function(e,n,t){},44:function(e,n,t){},45:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),o=t(11),c=t.n(o),r=t(12),s=t(13),l=t(16),m=t(17);t(23);var u=function(e){return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image})),i.a.createElement("div",{className:"content"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("strong",null,"Name:")," ",e.name),i.a.createElement("li",null,i.a.createElement("strong",null,"Occupation:")," ",e.occupation),i.a.createElement("li",null,i.a.createElement("strong",null,"Location:")," ",e.location))),i.a.createElement("span",{onClick:function(){return e.removeFriend(e.id)},className:"remove"},"FIRE"))};t(24);var p=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)};t(25);var g=function(e){return i.a.createElement("h1",{className:"title"},e.children)},d=t(14),v=t.n(d);t(43);var h=function(){v()({method:"post",url:"/user/12345",data:{firstName:"Fred",lastName:"Flintstone"}})},f=t(15),k=function(e){Object(m.a)(t,e);var n=Object(l.a)(t);function t(){var e;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=n.call.apply(n,[this].concat(i))).state={friends:f},e.removeFriend=function(n){var t=e.state.friends.filter((function(e){return e.id!==n}));e.setState({friends:t})},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(p,null,i.a.createElement(g,null,"Employee List"),i.a.createElement(h,null),this.state.friends.map((function(n){return i.a.createElement(u,{removeFriend:e.removeFriend,id:n.id,key:n.id,name:n.name,image:n.image,occupation:n.occupation,location:n.location})})))}}]),t}(a.Component);t(44);c.a.render(i.a.createElement(k,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.39ecdcf4.chunk.js.map