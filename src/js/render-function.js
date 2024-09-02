export const createGallery = img => {
  return `
  <li class="gallery-card">
  <a href="${img.largeImageURL}" class="gallery-link">
  <img src="${img.webformatURL}" alt="${img.tags}" class="gallery-img" />
  </a>
  <ul class='gallery-li'>
  <li class='gallery-li-info'>
  <b>Likes</b>
  <span class="gallery-img-info">${img.likes}</span>
  </li>
  <li class='gallery-li-info'>
  <b>Views</b>
  <span class="gallery-img-info">${img.views}</span>
  </li>
  <li class='gallery-li-info'>
  <b>Comments</b>
   <span class="gallery-img-info">${img.comments}</span>
   </li>
  <li class='gallery-li-info'>
  <b>Downloads</b>
  <span class="gallery-img-info">${img.downloads}</span>
  </li>
</ul>
</li>
    `;
};
