function removeInstrument(instrument){
  return {
    type: 'REMOVE_INSTRUMENT',
    payload: instrument
  }
}
export default removeInstrument
