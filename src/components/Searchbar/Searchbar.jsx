import propTypes from 'prop-types';
import css from './Searchbar.module.css';

export const Searchbar = ({ handleSubmit }) => (
  <header className={css.Searchbar}>
    <form className={css.SearchForm} onSubmit={handleSubmit}>
      <button className={css.SearchForm_button} type="submit">
        <span className={css.SearchForm_button_label}>Search</span>
      </button>

      <input
        name="inputSearch"
        className={css.SearchForm_input}
        type="text"
        placeholder="Search images and photos"
      />
    </form>
  </header>
);

Searchbar.propTypes = {
  onSubmit: propTypes.func,
};
