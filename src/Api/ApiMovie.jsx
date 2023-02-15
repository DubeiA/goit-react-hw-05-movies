const API_KEY_V3 = "e0ed1638ffdd17848c4367fe92782c7d";

export const getTrendingFilms = () => {
  const queryParams = new URLSearchParams({
    api_key: API_KEY_V3,
  });
  return fetch(`https://api.themoviedb.org/3/trending/all/week?${queryParams}`)
    .then((res) => res.json())
    .then((res) => res.results);
};

export const getFilmsById = (moveiID) => {
  const queryParams = new URLSearchParams({
    api_key: API_KEY_V3,
  });
  return fetch(`https://api.themoviedb.org/3/movie/${moveiID}?${queryParams}&language=en-US`)
    .then((res) => res.json())
    
};

// export const getFilmsByQuery = (q) => {
//   const queryParams = new URLSearchParams({
//     api_key: API_KEY_V3,
//     q,
//   });
//   return fetch(`https://api.themoviedb.org/3/search/company?${queryParams}&page=1`)
//     .then((res) => res.json())
//     .then((res) => res.results);
// };

// export const searchGiphs = () => {};