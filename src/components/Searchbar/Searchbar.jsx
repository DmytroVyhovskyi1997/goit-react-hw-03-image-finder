// import propTypes from 'prop-types';
// import css from './Button.module.css';

export const Searchbar = ({ onSubmit })=>(
    <header >
  <form class="form" onSubmit={onSubmit}>
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>

    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
)