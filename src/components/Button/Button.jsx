import PropTypes from 'prop-types';
import css from './Button.module.css';


export const Button = ({btnReadMore}) => (
    <button className={css.Button} onClick={btnReadMore}>
LoadMore
    </button>
)

Button.propTypes ={
    btnReadMore: PropTypes.func.isRequired
}