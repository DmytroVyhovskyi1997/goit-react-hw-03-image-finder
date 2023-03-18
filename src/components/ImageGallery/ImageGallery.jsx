import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';

export const ImageGallery = ({images, onImageClick })=>(
    <ul className={css.ImageGallery}  >
  {images.map((image, index)=>(
    <ImageGalleryItem onclick={onImageClick} image={image} key={index}/>
  ))}
</ul>
)

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
};
