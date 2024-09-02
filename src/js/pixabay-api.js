import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';

export const fetchPhotos = (inputValue, page) => {
  const photosOptions = {
    params: {
      key: '45736267-1794b9732fa70958098f9f4da',
      q: inputValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page: page,
    },
  };
  return axios.get(`/api/`, photosOptions);
};
