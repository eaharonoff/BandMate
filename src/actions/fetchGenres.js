function fetchGenres(genres){

  return {
    type: 'FETCH_GENRES',
    payload: genres
  }
}
export default fetchGenres
