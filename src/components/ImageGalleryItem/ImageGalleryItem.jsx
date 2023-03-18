import propTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ image, onClick }) => (
  <li class="gallery-item" id={image.id} onClick={onClick}>
    <img src={image.webformatURL} name={image.largeImageURL} alt={image.tags} />
  </li>
);

ImageGalleryItem.propTypes = {
  image: propTypes.object.isRequired,
  onclick: propTypes.func.isRequired,
};
