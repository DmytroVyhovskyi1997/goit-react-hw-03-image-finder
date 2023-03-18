import propTypes from 'prop-types';
// import css from './Button.module.css';


export const Modal = ({img:{src, alt}}, on) => {
  return(  <div >
  <div class="modal">
    <img src={src} alt={alt} />
  </div>
</div>
  )
}

Modal.propTypes ={
    src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,

}