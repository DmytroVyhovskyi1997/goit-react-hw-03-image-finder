import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import propTypes from 'prop-types';
import css from './ImageGallery.module.css';

export const ImageGallery = ({images, handleImageClick })=>(
    <ul className={css.ImageGallery}  >
  {images.map((image, index)=>(
    <ImageGalleryItem onclick={handleImageClick} image={image} key={index}/>
  ))}
</ul>
)

ImageGallery.propTypes = {
  images: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    })
  ),
  handleImageClick: propTypes.func.isRequired,
};