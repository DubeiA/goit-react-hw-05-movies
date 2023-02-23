const API_KEY_V3 = 'e0ed1638ffdd17848c4367fe92782c7d';

export const getTrendingFilms = () => {
  const queryParams = new URLSearchParams({
    api_key: API_KEY_V3,
  });
  return fetch(`https://api.themoviedb.org/3/trending/all/week?${queryParams}`)
    .then(res => res.json())
    .then(res => res.results);
};

export const getFilmsById = moveiID => {
  const queryParams = new URLSearchParams({
    api_key: API_KEY_V3,
  });
  return fetch(
    `https://api.themoviedb.org/3/movie/${moveiID}?${queryParams}&language=en-US`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(
      new Error(`We don't have information about this Movie`)
    );
  });
};

export const getFilmsByQuery = q => {
  const queryParams = new URLSearchParams({
    api_key: API_KEY_V3,
    q,
  });
  return fetch(
    `https://api.themoviedb.org/3/search/movie?${queryParams}&language=en-US&page=1&include_adult=false&query=${q}`
  )
    .then(res => res.json())
    .then(res => res.results);
};

export const getCastFilm = moveiID => {
  const queryParams = new URLSearchParams({
    api_key: API_KEY_V3,
  });
  return fetch(
    `https://api.themoviedb.org/3/movie/${moveiID}/credits?${queryParams}&language=en-US`
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      return Promise.reject(new Error(`We don't have about this Movie`));
    })
    .then(res => res.cast);
};

export const getReviewFilm = moveiID => {
  const queryParams = new URLSearchParams({
    api_key: API_KEY_V3,
  });
  return fetch(
    `https://api.themoviedb.org/3/movie/${moveiID}/reviews?${queryParams}&language=en-US&page=1`
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      }

      return Promise.reject(new Error(`We don't have about this Movie`));
    })
    .then(res => res.results);
};
