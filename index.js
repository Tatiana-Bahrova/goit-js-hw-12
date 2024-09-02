import{a as f,S as L,i as p}from"./assets/vendor-D3eAW7nd.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(s){if(s.ep)return;s.ep=!0;const t=o(s);fetch(s.href,t)}})();const y=e=>`
  <li class="gallery-card">
  <a href="${e.largeImageURL}" class="gallery-link">
  <img src="${e.webformatURL}" alt="${e.tags}" class="gallery-img" />
  </a>
  <ul class='gallery-li'>
  <li class='gallery-li-info'>
  <b>Likes</b>
  <span class="gallery-img-info">${e.likes}</span>
  </li>
  <li class='gallery-li-info'>
  <b>Views</b>
  <span class="gallery-img-info">${e.views}</span>
  </li>
  <li class='gallery-li-info'>
  <b>Comments</b>
   <span class="gallery-img-info">${e.comments}</span>
   </li>
  <li class='gallery-li-info'>
  <b>Downloads</b>
  <span class="gallery-img-info">${e.downloads}</span>
  </li>
</ul>
</li>
    `;f.defaults.baseURL="https://pixabay.com";const g=(e,r)=>{const o={params:{key:"45736267-1794b9732fa70958098f9f4da",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}};return f.get("/api/",o)},c=document.querySelector(".js-search-form"),m=document.querySelector(".js-gallery"),u=document.querySelector(".js-loader"),n=document.querySelector(".load-btn"),v=document.querySelector(".js-observer");let a=1,d="",h=new L(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});const w={root:null,rootMargin:"0px 0px 400px 0px",threshold:1},q=e=>{e[0].isIntersecting&&console.log("hello")},b=new IntersectionObserver(q,w);console.log(b);const O=async e=>{try{e.preventDefault(),d=c.elements.user_query.value,u.classList.remove("is-hidden"),a=1;const r=await g(d,a);console.log(r),r.data.total===0&&p.error({message:"Sorry, there are no images matching your search query. Please try again!"});const o=r.data.hits.map(l=>y(l)).join("");m.innerHTML=o,b.observe(v),n.classList.remove("is-hidden"),h.refresh()}catch(r){console.log(r)}u.classList.add("is-hidden"),c.reset()},S=async()=>{try{a++;const e=await g(d,a),r=e.data.hits.map(o=>y(o)).join("");m.insertAdjacentHTML("beforeend",r),n.classList.remove("is-hidden"),h.refresh(),a===e.data.totalHits&&(n.classList.add("is-hidden"),p.info({message:"We're sorry, but you've reached the end of search results."}))}catch(e){console.log(e)}};c.addEventListener("submit",O);n.addEventListener("click",S);
//# sourceMappingURL=index.js.map
