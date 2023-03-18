import propTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ image, onClick }) => (
  <li className={css.ImageGalleryItem } id={image.id} onClick={onClick}>
    <img className={css.ImageGalleryItem_image} src={image.webformatURL} name={image.largeImageURL} alt={image.tags} />
  </li>
);

ImageGalleryItem.propTypes = {
  image: propTypes.object.isRequired,
  onClick: propTypes.func.isRequired,
};
