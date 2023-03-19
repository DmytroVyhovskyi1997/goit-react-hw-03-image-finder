import propTypes from 'prop-types';
import css from './Modal.module.css';


export const Modal = ({src, alt, closeModal}) => {
  return(  
  <div className={css.Modal} onClick={closeModal}>
    <img className={css.Overlay} src={src} alt={alt} />
  </div>

  )
}

Modal.propTypes ={
    src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,

}