import axios from 'axios';

axios.defaults.baseURL = `https://pixabay.com/api`;
const API_KEY  = '33274070-f9f176f3b3b7b71ec712df31b'

export const fetchImages = async (inputValue, page , per_page = 12 ) => {
  const response = await axios.get(`/?q=${inputValue}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&${per_page}`
  );
  return response.data.hits.map(image => {
    return {
      id: image.id,
      webformatURL: image.webformatURL,
      largeImageURL: image.largeImageURL,
      tags: image.tags,
    };
  });
}