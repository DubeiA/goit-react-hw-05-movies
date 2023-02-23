import { useState } from 'react';
import css from '../Searchbar/Searchbar.module.css';
import PropTypes from 'prop-types';

export default function Searchbar({ onSubmit }) {
  const [searchName, setSearchName] = useState('');

  const handleNameChange = event => {
    setSearchName(event.currentTarget.value.toLowerCase());
  };

  const submitForm = event => {
    event.preventDefault();

    if (searchName.trim() === '') {
      alert('Something go wrong. Try one more time');
      return;
    }
    onSubmit(searchName);
    setSearchName('');
  };

  return (
    <form className={css.search} onSubmit={submitForm}>
      <input
        className={css.searchTerm}
        type="text"
        autoComplete="off"
        autoFocus
        value={searchName}
        onChange={handleNameChange}
      />

      <button className={css.searchButton} type="submit">
        Search
      </button>
    </form>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
