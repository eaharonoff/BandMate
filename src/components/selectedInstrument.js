import React from 'react'

const SelectedInstrument = ({instrument, remove}) => {
  return (
    <center>
      <div className="selected-style">
        {instrument} <a data-instrument={instrument} onClick={remove} href='#'>remove</a>
      </div>
    </center>
  )
}
export default SelectedInstrument
