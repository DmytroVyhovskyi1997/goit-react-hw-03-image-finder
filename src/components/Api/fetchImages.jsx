import axios from 'axios';

const BASE_URL = `https://pixabay.com/api/`

export const FetchImages = async (inputValue, page) =>{
    const response = await axios.get(`${BASE_URL}?q=${inputValue}&${page}&key=33274070-f9f176f3b3b7b71ec712df31b&image_type=photo&orientation=horizontal&per_page=12`)
    return response.data.hits.map(image => {
        return {
          id: image.id,
          webformatURL: image.webformatURL,
          largeImageURL: image.largeImageURL,
          tags: image.tags,
        };
      });
}