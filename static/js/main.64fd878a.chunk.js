(this["webpackJsonpreact-clone"]=this["webpackJsonpreact-clone"]||[]).push([[0],{11:function(e,a,t){e.exports={resultsContainer:"resultList_resultsContainer__3KiyV",results:"resultList_results__2pDrk",movieItem:"resultList_movieItem__370Vz"}},16:function(e,a,t){e.exports=t(36)},21:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(10),o=t.n(i),c=(t(21),t(6)),l=t(2),s=t(7),m=t.n(s);var v=function(){const[e,a]=Object(n.useState)(!1);return Object(n.useEffect)(()=>{const e=()=>{window.scrollY>100?a(!0):a(!1)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),r.a.createElement("div",{className:`${m.a.navbar} ${e?m.a.black:m.a.transparent}`},r.a.createElement("div",{className:m.a["navbar-left"]},r.a.createElement(c.b,{to:"/",className:m.a["navbar-brand"]}," Movie App ")),r.a.createElement("div",{className:m.a["navbar-right"]},r.a.createElement(c.b,{to:"/search",className:m.a["search-icon"]},r.a.createElement("svg",{fill:"#ccc","aria-hidden":"true","data-prefix":"fas","data-icon":"search",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},r.a.createElement("path",{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"})))))},d=t(8),u=t.n(d);const h="a090b75e1744dd94d481ba67ad26903e",_={fetchTrending:`/trending/all/week?api_key=${h}&language=en-US`,fetchNetflixOriginals:`/discover/tv?api_key=${h}&with_network=123`,fetchTopRated:`/movie/top_rated?api_key=${h}&language=en-US`,fetchActionMovies:`/discover/movie?api_key=${h}&with_genres=28`,fetchComedyMovies:`/discover/movie?api_key=${h}&with_genres=35`,fetchHorrorMovies:`/discover/movie?api_key=${h}&with_genres=27`,fetchRomanceMovies:`/discover/movie?api_key=${h}&with_genres=10749`,fetchDocumentaries:`/discover/movie?api_key=${h}&with_genres=99`,fetchSearch:`/search/movie?api_key=${h}&language=en-US`};function g(e){let{category:a,fetchUrl:t,isOriginals:i}=e;const[o,c]=Object(n.useState)([]),s=Object(l.o)();Object(n.useEffect)(()=>{!async function(){const e=await fetch("https://api.themoviedb.org/3"+t),a=await e.json();c(a.results)}()},[t]);return r.a.createElement("div",{className:u.a.group},r.a.createElement("h2",null,a),r.a.createElement("div",{className:u.a.movieContainer},"Hellow hajskjsd",o.map(e=>r.a.createElement("div",{key:e.id,className:`${u.a.movieItem} ${i?u.a.netflixOriginals:u.a.otherGenres}`,onClick:()=>{return t=e.id,void s("/movie/"+t,{state:{mediaType:i?"tv":"movie",category:a}});var t}},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500"+(i?e.poster_path:e.backdrop_path),alt:e.name,className:u.a.movieImage})))))}var p=function(){return r.a.createElement("div",null,r.a.createElement(g,{category:"",fetchUrl:_.fetchNetflixOriginals,isOriginals:!0}),r.a.createElement(g,{category:"Xu h\u01b0\u1edbng",fetchUrl:_.fetchTrending,isOriginals:!1}),r.a.createElement(g,{category:"X\u1ebfp h\u1ea1ng cao",fetchUrl:_.fetchTopRated,isOriginals:!1}),r.a.createElement(g,{category:"H\xe0nh \u0111\u1ed9ng",fetchUrl:_.fetchActionMovies,isOriginals:!1}),r.a.createElement(g,{category:"H\xe0i",fetchUrl:_.fetchComedyMovies,isOriginals:!1}),r.a.createElement(g,{category:"Kinh d\u1ecb",fetchUrl:_.fetchHorrorMovies,isOriginals:!1}),r.a.createElement(g,{category:"L\xe3ng m\u1ea1n",fetchUrl:_.fetchRomanceMovies,isOriginals:!1}),r.a.createElement(g,{category:"T\xe0i li\u1ec7u",fetchUrl:_.fetchDocumentaries,isOriginals:!1}))},b=t(5),f=t.n(b);const E="/discover/tv?api_key=a090b75e1744dd94d481ba67ad26903e&with_network=123";var w=function(){const[e,a]=Object(n.useState)([]);return Object(n.useEffect)(()=>{!async function(){const e=await fetch("https://api.themoviedb.org/3"+E),t=await e.json(),n=t.results[Math.floor(Math.random()*t.results.length)];a(n)}()},[]),e?r.a.createElement("div",null,r.a.createElement("header",{className:f.a.banner,style:{backgroundSize:"cover",backgroundImage:`url("https://image.tmdb.org/t/p/original${null===e||void 0===e?void 0:e.backdrop_path}")`,backgroundPosition:"center center"}},r.a.createElement("div",{className:f.a.bannerContents},r.a.createElement("h1",{className:f.a.bannerTitle},e.name),r.a.createElement("div",{className:f.a.bannerDescription},(null===e||void 0===e?void 0:e.overview)&&e.overview.length>150?e.overview.substr(0,150)+"...":e.overview),r.a.createElement("div",{className:f.a.bannerButtons},r.a.createElement("button",{className:f.a.bannerButton},"Play"),r.a.createElement("button",{className:f.a.bannerButton},"My List"))),r.a.createElement("div",{className:f.a.bannerFadeBottom}))):null};var y=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(v,null),r.a.createElement(w,null),r.a.createElement(p,null))},k=t(9),N=t.n(k),C=t(11),O=t.n(C);var j=function(e){let{movies:a=[],handleMovieClick:t}=e;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Search Result"),r.a.createElement("div",{className:O.a.resultsContainer},a.length>0?r.a.createElement("div",{className:O.a.results},a.map(e=>r.a.createElement("div",{key:e.id,className:O.a.movieItem,onClick:()=>t(e.id)},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w200"+e.poster_path,alt:e.title||e.name})))):r.a.createElement("p",null,"No results found")))};var B=function(){const[e,a]=Object(n.useState)(""),[t,i]=Object(n.useState)([]),o=Object(l.o)();return r.a.createElement("div",{className:N.a.searchForm},r.a.createElement("form",{className:N.a.form,onSubmit:async a=>{if(a.preventDefault(),e.trim())try{const a=await fetch("https://api.themoviedb.org/3/search/movie?api_key=a090b75e1744dd94d481ba67ad26903e&language=en&query="+e),n=await a.json();i(n.results||[]),console.log(t)}catch(n){console.error("Error fetching search results:",n),i([])}}},r.a.createElement("div",{className:N.a.inputContent},r.a.createElement("input",{type:"text",value:e,onChange:e=>a(e.target.value),placeholder:"Search for a movie..."}),r.a.createElement("svg",{className:N.a.searchIcon,fill:"#ccc","aria-hidden":"true","data-prefix":"fas","data-icon":"search",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},r.a.createElement("path",{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}))),r.a.createElement("div",{className:N.a.buttonGroup},r.a.createElement("button",{type:"reset",onClick:()=>a("")},"RESET"),r.a.createElement("button",{type:"submit"},"SEARCH"))),r.a.createElement(j,{movies:t,handleMovieClick:e=>{o("/movie/"+e)}}))};var T=()=>r.a.createElement("div",{className:"app"},r.a.createElement(v,null),r.a.createElement(B,null)),S=t(13),I=t(4),x=t.n(I);const D={height:"400",width:"100%",playerVars:{autoplay:0}};var U=function(){var e,a;const{movieId:t}=Object(l.q)(),i=Object(l.m)(),o=(null===(e=i.state)||void 0===e?void 0:e.category)||"",c=(null===(a=i.state)||void 0===a?void 0:a.mediaType)||"movie",s=Object(l.o)(),[m,d]=Object(n.useState)(null),[u,h]=Object(n.useState)(null),[_,g]=Object(n.useState)([]);return Object(n.useEffect)(()=>{!async function(){try{const e="tv"===c?"/tv/"+t:"/movie/"+t,a=await fetch(`https://api.themoviedb.org/3${e}?api_key=a090b75e1744dd94d481ba67ad26903e&language=en-US`),n=await a.json();if(d(n),n.genres&&n.genres.length>0){!async function(e){try{const a="tv"===c?`/discover/tv?api_key=a090b75e1744dd94d481ba67ad26903e&with_genres=${e}&with_network=123`:"/discover/movie?api_key=a090b75e1744dd94d481ba67ad26903e&with_genres="+e,t=await fetch("https://api.themoviedb.org/3"+a),n=await t.json();g(n.results)}catch(a){console.error("Error fetching same genre movies/TV shows:",a)}}(n.genres[0].id)}}catch(e){console.error("Error fetching movie/TV show details:",e)}}(),async function(){const e="tv"===c?"/tv/"+t:"/movie/"+t,a=await fetch(`https://api.themoviedb.org/3${e}/videos?api_key=a090b75e1744dd94d481ba67ad26903e`),n=await a.json(),r=n.results.find(e=>"YouTube"===e.site&&"Trailer"===e.type),i=n.results.find(e=>"YouTube"===e.site&&"Teaser"===e.type);h(r?r.key:i?i.key:null)}()},[t,c]),m?r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement("div",{style:{marginTop:"50px"}}),r.a.createElement("div",{className:x.a.group},r.a.createElement("h2",null,o),r.a.createElement("div",{className:x.a.movieContainer},_.map(e=>r.a.createElement("div",{key:e.id,className:x.a.movieItem,onClick:()=>{var a;(a=e.id)===parseInt(t)?s("/"):s("/movie/"+a,{state:{category:o,mediaType:c}})}},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w200"+e.backdrop_path,alt:e.title||e.name}))))),r.a.createElement("div",{className:x.a.movieDetails},r.a.createElement("div",{className:x.a.movieContent},r.a.createElement("h2",null,m.name||m.title),r.a.createElement("hr",{className:x.a.line}),r.a.createElement("p",null,r.a.createElement("strong",null,"Release Date:")," ",m.release_date),r.a.createElement("p",null,r.a.createElement("strong",null,"Rating:")," ",m.vote_average),r.a.createElement("p",null,m.overview)),r.a.createElement("div",{className:x.a.movieTrailer},r.a.createElement("div",{className:x.a.videoContainer},u?r.a.createElement(S.a,{videoId:u,opts:D}):r.a.createElement("img",{src:"https://image.tmdb.org/t/p/original"+m.backdrop_path,alt:m.name,className:x.a.movieBackdrop}))))):r.a.createElement("div",null,"Loading...")};var M=function(){return r.a.createElement(c.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/",element:r.a.createElement(y,null)}),r.a.createElement(l.a,{path:"/search",element:r.a.createElement(T,null)}),r.a.createElement(l.a,{path:"/movie/:movieId",element:r.a.createElement(U,null)})))};const $=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,a){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=()=>{const t=e.installing;null!=t&&(t.onstatechange=()=>{"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}}).catch(e=>{console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(M,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",()=>{const a="/service-worker.js";$?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then(t=>{const n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):R(e,a)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(a,e),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):R(a,e)})}}()},4:function(e,a,t){e.exports={movieDetails:"movieDetails_movieDetails__36QED",movieContent:"movieDetails_movieContent__2hubY",movieTrailer:"movieDetails_movieTrailer__mVzm8",hr:"movieDetails_hr__2leNT",videoContainer:"movieDetails_videoContainer__1eDE1",movieBackdrop:"movieDetails_movieBackdrop__2kUFm",group:"movieDetails_group__pr2oU",movieContainer:"movieDetails_movieContainer__3Rz_T",movieItem:"movieDetails_movieItem__1b_Bo",movieImage:"movieDetails_movieImage__1BU4F"}},5:function(e,a,t){e.exports={banner:"banner_banner__1mlTE",bannerContents:"banner_bannerContents__3BtVY",bannerTitle:"banner_bannerTitle__2URfH",bannerButtons:"banner_bannerButtons__R28vh",bannerButton:"banner_bannerButton__1GdjZ",bannerDescription:"banner_bannerDescription__2lhI8",bannerFadeBottom:"banner_bannerFadeBottom__2wYKW"}},7:function(e,a,t){e.exports={navbar:"navBar_navbar__2UHsn",transparent:"navBar_transparent__lzkzr",black:"navBar_black__cx66L","navbar-left":"navBar_navbar-left__1p1QS","navbar-right":"navBar_navbar-right__3CgN_","navbar-brand":"navBar_navbar-brand__3rqe3","search-icon":"navBar_search-icon__3RXMh"}},8:function(e,a,t){e.exports={group:"movie_group__1YL8_",movieContainer:"movie_movieContainer__3d8AB",movieItem:"movie_movieItem__13poJ",movieImage:"movie_movieImage__xhZZv",netflixOriginals:"movie_netflixOriginals__3lbLa",otherGenres:"movie_otherGenres__14NMl"}},9:function(e,a,t){e.exports={searchForm:"searchForm_searchForm__3JZhO",form:"searchForm_form__20IJK",inputContent:"searchForm_inputContent__taglc",searchIcon:"searchForm_searchIcon__26cZK",buttonGroup:"searchForm_buttonGroup__1R-a0"}}},[[16,1,2]]]);
//# sourceMappingURL=main.64fd878a.chunk.js.map