const CheckboxHelper = () => {
  var genreNodes = document.getElementsByClassName('genreCheckbox')
  var genres = []
  for (let i = 0; i < genreNodes.length; i++) {
    if (genreNodes[i].checked) {
      genres.push(genreNodes[i].value)
    }
  }
  var instrumentNodes = document.getElementsByClassName('instrumentCheckbox')
  var instruments = []
  for (let i = 0; i < instrumentNodes.length; i++) {
    if (instrumentNodes[i].checked) {
      instruments.push(instrumentNodes[i].value)
    }
  }
  return {genres, instruments}
}

export default CheckboxHelper
