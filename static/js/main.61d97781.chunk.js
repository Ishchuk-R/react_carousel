(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(6),c=n.n(r),s=n(1),l=n(2),o=n(4),m=n(3),u=(n(12),n(13),function(e){Object(o.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={index:0,visibleItem:4,widthItem:130},e.prevClick=function(){e.setState((function(t){return{index:0===t.index?e.props.images.length-t.visibleItem:t.index-1}}))},e.nextClick=function(){e.setState((function(t){return{index:t.index+t.visibleItem===e.props.images.length?0:t.index+1}}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.images,t=this.state,n=t.index,a=t.visibleItem,r=t.widthItem;return i.a.createElement("div",{style:{width:"".concat(r*a,"px")},className:"Carousel"},i.a.createElement("ul",{style:{transform:"translateX(-".concat(n*r,"px)")},className:"Carousel__list"},e.map((function(e){return i.a.createElement("li",{key:e},i.a.createElement("img",{src:e,alt:"index"}))}))),i.a.createElement("button",{onClick:this.prevClick,type:"button"},"Prev"),i.a.createElement("button",{onClick:this.nextClick,type:"button"},"Next"))}}]),n}(i.a.Component)),p=function(e){Object(o.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"]},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.images;return i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"Carousel with ",e.length," images"),i.a.createElement(u,{images:e}))}}]),n}(i.a.Component);c.a.render(i.a.createElement(p,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.61d97781.chunk.js.map