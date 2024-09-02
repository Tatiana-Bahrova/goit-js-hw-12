import{a as f,S as L,i as g}from"./assets/vendor-D3eAW7nd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const y=e=>`
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
    `;f.defaults.baseURL="https://pixabay.com";const h=(e,t)=>{const o={params:{key:"45736267-1794b9732fa70958098f9f4da",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}};return f.get("/api/",o)},c=document.querySelector(".js-search-form"),d=document.querySelector(".js-gallery"),p=document.querySelector(".js-loader"),i=document.querySelector(".load-btn"),v=document.querySelector(".js-observer");let l=1,u="",m=0,b=new L(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});const q={root:null,rootMargin:"0px 0px 400px 0px",threshold:1},w=e=>{e[0].isIntersecting},P=new IntersectionObserver(w,q),S=async e=>{try{e.preventDefault(),u=c.elements.user_query.value,p.classList.remove("is-hidden"),l=1;const t=await h(u,l);console.log(t),t.data.total===0&&(i.classList.add("is-hidden"),g.error({message:"Sorry, there are no images matching your search query. Please try again!"}));const o=t.data.hits.map(s=>y(s)).join("");d.innerHTML=o,m=d.querySelector("li").getBoundingClientRect().height,P.observe(v),i.classList.remove("is-hidden"),b.refresh()}catch(t){console.log(t)}p.classList.add("is-hidden"),c.reset()},O=async()=>{try{l++;const e=await h(u,l),t=e.data.hits.map(a=>y(a)).join("");d.insertAdjacentHTML("beforeend",t),scrollBy({top:m*2,behavior:"smooth"}),i.classList.remove("is-hidden"),b.refresh();const o=Math.ceil(e.data.totalHits/15);l>=o&&(i.classList.add("is-hidden"),g.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}))}catch(e){console.log(e)}};c.addEventListener("submit",S);i.addEventListener("click",O);
//# sourceMappingURL=index.js.map
