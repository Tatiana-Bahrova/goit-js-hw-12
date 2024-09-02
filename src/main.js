import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

import { createGallery } from './js/render-function';
import { fetchPhotos } from './js/pixabay-api';

const form = document.querySelector('.js-search-form');
const gallery = document.querySelector('.js-gallery');
const loader = document.querySelector('.js-loader');
const loadBtn = document.querySelector('.load-btn');
const observerEl = document.querySelector('.js-observer');

let currentPage = 1;
let userInputValue = '';
let photoHight = 0;

let lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

const observerOptions = {
  root: null,
  rootMargin: '0px 0px 400px 0px',
  threshold: 1,
};

const observerCallBack = entries => {
  if (entries[0].isIntersecting) {
  }
};

const observer = new IntersectionObserver(observerCallBack, observerOptions);

const onForm = async event => {
  try {
    event.preventDefault();

    userInputValue = form.elements.user_query.value;

    loader.classList.remove('is-hidden');

    currentPage = 1;

    const response = await fetchPhotos(userInputValue, currentPage);
    console.log(response);

    if (response.data.total === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    }
    const galleryCardList = response.data.hits
      .map(imgInfo => createGallery(imgInfo))
      .join('');

    gallery.innerHTML = galleryCardList;

    const galleryPhoto = gallery.querySelector('li');
    photoHight = galleryPhoto.getBoundingClientRect().height;

    observer.observe(observerEl);

    loadBtn.classList.remove('is-hidden');

    lightbox.refresh();
  } catch (error) {
    console.log(error);
  }

  loader.classList.add('is-hidden');
  form.reset();
};

const onLoadBtnClick = async () => {
  try {
    loader.classList.remove('is-hidden');

    currentPage++;
    const response = await fetchPhotos(userInputValue, currentPage);
    const galleryCardList = response.data.hits
      .map(imgInfo => createGallery(imgInfo))
      .join('');

    gallery.insertAdjacentHTML('beforeend', galleryCardList);

    scrollBy({
      top: photoHight * 2,
      behavior: 'smooth',
    });

    loadBtn.classList.remove('is-hidden');

    lightbox.refresh();

    const totalPages = Math.ceil(response.data.totalHits / 15);
    if (currentPage >= totalPages) {
      loadBtn.classList.add('is-hidden');
      iziToast.info({
        position: 'topRight',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

form.addEventListener('submit', onForm);
loadBtn.addEventListener('click', onLoadBtnClick);
