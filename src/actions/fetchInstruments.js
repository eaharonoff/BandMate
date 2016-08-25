function fetchInstruments(instruments){

  return {
    type: 'FETCH_INSTRUMENTS',
    payload: instruments
  }
}
export default fetchInstruments
