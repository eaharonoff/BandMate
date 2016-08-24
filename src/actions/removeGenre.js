function removeGenre(genre){
  return {
    type: 'REMOVE_GENRE',
    payload: genre
  }
}
export default removeGenre
