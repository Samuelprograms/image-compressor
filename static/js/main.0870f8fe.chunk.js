(this["webpackJsonpimage-compressor"]=this["webpackJsonpimage-compressor"]||[]).push([[0],{33:function(n,e,t){},34:function(n,e,t){"use strict";t.r(e);var i,r,c,a,o,s=t(0),l=t.n(s),p=t(18),b=t.n(p),d=t(15),u=t(7),j=t(9),x=t(11),f=t(19),h=t(3),m=t(4),g=m.a.div(i||(i=Object(h.a)(['\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  background-image: url("https://images.pexels.com/photos/2433985/pexels-photo-2433985.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");\n  background-size: cover;\n  background-position: center center;\n']))),O=m.a.div(r||(r=Object(h.a)(["\n  input {\n    display: none;\n  }\n  label {\n    padding: 10px 20px;\n    margin: 10px 0;\n    border: 1px solid #fff;\n    background: rgba(100, 100, 100, 0.7);\n    color: #fff;\n    cursor: pointer;\n    &:hover {\n      background: rgba(100, 100, 100, 0.8);\n    }\n  }\n"]))),v=m.a.div(c||(c=Object(h.a)(["\n  position: relative;\n  margin: 10px 20px 0 0;\n  img {\n    width: 500px;\n    height: 290px;\n    object-fit: fill;\n    object-position: center center;\n    @media screen and (max-width: 650px) {\n      width: 300px;\n      height: 290px;\n    }\n  }\n  button,\n  a {\n    border: none;\n    position: absolute;\n    cursor: pointer;\n    border-radius: 50%;\n    &:hover {\n      box-shadow: -10px 10px 20px 5px #000;\n    }\n  }\n  button {\n    top: -10px;\n    right: -10px;\n    background: #fff;\n  }\n  a {\n    top: 5px;\n    right: 5px;\n    background: transparent;\n    text-decoration: none;\n  }\n"]))),k=m.a.div(a||(a=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  width: 600px;\n  overflow-x: scroll;\n  @media screen and (max-width: 650px) {\n    width: 90%;\n  }\n"]))),w=m.a.button(o||(o=Object(h.a)(["\n  padding: 10px 20px;\n  margin: 10px 0;\n  border: 1px solid #fff;\n  background: rgba(100, 100, 100, 0.7);\n  color: #fff;\n  cursor: pointer;\n  &:hover {\n    background: rgba(100, 100, 100, 0.8);\n  }\n  @media screen and (max-width: 650px) {\n    padding: 5px 20px;\n  }\n"]))),y=t(2),z=function(n){var e=n.newImage;return Object(y.jsx)(k,{children:e.map((function(n,e){return Object(y.jsxs)(v,{children:[Object(y.jsx)("img",{src:n.link,alt:n.name}),Object(y.jsx)("a",{href:n.link,download:n.name,children:Object(y.jsx)(j.a,{style:{color:"#fff",fontSize:"30px"},icon:x.a})})]},e)}))})},S=function(){var n=Object(s.useState)([]),e=Object(u.a)(n,2),t=e[0],i=e[1],r=Object(s.useState)([]),c=Object(u.a)(r,2),a=c[0],o=c[1],l=Object(s.useState)(!1),p=Object(u.a)(l,2),b=p[0],h=p[1],m=Object(s.useState)(!1),S=Object(u.a)(m,2),C=S[0],R=S[1],E=function(){i([]),o([]),R(!1),h(!1)};return Object(s.useEffect)((function(){R(!1)}),[t]),Object(y.jsxs)(g,{children:[b?Object(y.jsx)(k,{children:t.map((function(n,e){return Object(y.jsxs)(v,{children:[Object(y.jsx)("img",{src:n.link,alt:n.name}),Object(y.jsx)("button",{onClick:function(e){return function(n,e){if(n.preventDefault(),1===t.length)E();else{var r=Object(d.a)(t).filter((function(n){return n.link!==e}));i(r)}}(e,n.link)},children:Object(y.jsx)(j.a,{style:{color:"red",fontSize:"30px"},icon:x.b})})]},e)}))}):Object(y.jsxs)(O,{children:[Object(y.jsx)("input",{type:"file",id:"file",accept:"image/*",multiple:!0,onChange:function(n){return function(n){n.preventDefault();var e=[];Object.values(n.target.files).forEach((function(n){e.push({image:n,link:URL.createObjectURL(n),name:n.name,size:n.size})})),i(e),h(!0),R(!1)}(n)}}),Object(y.jsx)("label",{htmlFor:"file",children:"Select your images"})]}),b&&Object(y.jsx)(w,{onClick:function(n){return function(){var n={maxSizeMB:1,maxWidthOrHeight:500,useWebWorker:!0};t.forEach((function(e){if(e.size/1024<=n.maxSizeMB)return alert("Image is too small, can't be Compressed!"),void R(!1);var i=[];Object(f.a)(e.image,n).then((function(n){var t=URL.createObjectURL(n);i.push({link:t,name:e.name,size:n.size})})),o([].concat(Object(d.a)(t),i))})),R(!0)}()},children:"Compress"}),C&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(z,{newImage:a}),Object(y.jsx)(w,{onClick:function(n){return E(n)},children:"Reset"})]})]})};t(33);b.a.render(Object(y.jsx)(l.a.StrictMode,{children:Object(y.jsx)(S,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.0870f8fe.chunk.js.map