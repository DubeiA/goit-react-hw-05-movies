"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[135],{726:function(e,t,n){n.d(t,{JS:function(){return r},Kd:function(){return o},mt:function(){return a},s9:function(){return s},vU:function(){return c}});var i="e0ed1638ffdd17848c4367fe92782c7d",r=function(){var e=new URLSearchParams({api_key:i});return fetch("https://api.themoviedb.org/3/trending/all/week?".concat(e)).then((function(e){return e.json()})).then((function(e){return e.results}))},s=function(e){var t=new URLSearchParams({api_key:i});return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?").concat(t,"&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("We don't have information about this Movie"))}))},o=function(e){var t=new URLSearchParams({api_key:i,q:e});return fetch("https://api.themoviedb.org/3/search/movie?".concat(t,"&language=en-US&page=1&include_adult=false&query=").concat(e)).then((function(e){return e.json()})).then((function(e){return e.results}))},a=function(e){var t=new URLSearchParams({api_key:i});return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?").concat(t,"&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("We don't have about this Movie"))})).then((function(e){return e.cast}))},c=function(e){var t=new URLSearchParams({api_key:i});return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?").concat(t,"&language=en-US&page=1")).then((function(e){return e.ok?e.json():Promise.reject(new Error("We don't have about this Movie"))})).then((function(e){return e.results}))}},135:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var i=n(439),r=n(791),s=n(87),o=n(689),a="MovieDetails_container__Ys+c9",c="MovieDetails_second_container__dQyHj",l="MovieDetails_movie_pic__qHRf+",u="MovieDetails_title__cUGs9",v="MovieDetails_user_score__D3Cud",h="MovieDetails_overview__U5Vnb",d="MovieDetails_overview_text__OOuMT",m="MovieDetails_genres__Pnmgt",_="MovieDetails_genres_list__14ciI",f="MovieDetails_genres_padding_list__k8z4A",p="MovieDetails_button__uXZxd",g="MovieDetails_option__4wZyM",j="MovieDetails_link__U+v+7",w=n(726),x=n(184),M=function(){var e,t,n,M,b,k,U=(0,o.UO)().movieId,N=(0,r.useState)([]),D=(0,i.Z)(N,2),y=D[0],S=D[1],P=(0,o.TH)();(0,r.useEffect)((function(){w.s9(U).then(S)}),[U]);var R=null!==(e=null===(t=P.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/goit-react-hw-05-movies/movies",C=y.genres;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(s.rU,{className:p,to:R,children:"Back"}),y.status?(0,x.jsxs)("div",{className:a,children:[y.poster_path&&(0,x.jsx)("img",{className:l,width:"360",src:"https://image.tmdb.org/t/p/w780".concat(y.poster_path),alt:y.title}),(0,x.jsxs)("div",{className:c,children:[(0,x.jsxs)("b",{className:u,children:[y.title," (",Number.parseInt(y.release_date),")"]}),(0,x.jsxs)("p",{className:v,children:["User Score: ",(10*y.vote_average).toFixed(2),"%"]}),(0,x.jsx)("b",{className:h,children:"Overview"}),(0,x.jsx)("p",{className:d,children:y.overview}),(0,x.jsx)("b",{className:m,children:"Genres"}),(0,x.jsx)("ul",{className:_,children:C&&C.map((function(e){return(0,x.jsx)("li",{className:f,children:e.name},e.id)}))})]})]}):(0,x.jsx)("div",{style:{height:"50vh",display:"flex",justifyContent:"center",alignItems:"center",fontSize:40,color:"#010101"},children:"  We dont have any information about this Movie, try to find another one "}),y.status&&(0,x.jsxs)("div",{children:[(0,x.jsxs)("ul",{className:g,children:[(0,x.jsx)("li",{children:(0,x.jsx)(s.rU,{className:j,to:"/goit-react-hw-05-movies/movies/".concat(U,"/cast"),state:{from:null!==(n=null===(M=P.state)||void 0===M?void 0:M.from)&&void 0!==n?n:"/goit-react-hw-05-movies/movies"},children:"Cast"})}),(0,x.jsx)("li",{children:(0,x.jsx)(s.rU,{className:j,to:"/goit-react-hw-05-movies/movies/".concat(U,"/reviews"),state:{from:null!==(b=null===(k=P.state)||void 0===k?void 0:k.from)&&void 0!==b?b:"/goit-react-hw-05-movies/movies"},children:"Reviews"})})]}),(0,x.jsx)(o.j3,{})]})]})}}}]);
//# sourceMappingURL=135.403509d1.chunk.js.map