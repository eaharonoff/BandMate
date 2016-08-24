import React from 'react'

const SelectedInstrument = ({instrument, remove}) => {
  return (
    <div>
      {instrument} <a data-instrument={instrument} onClick={remove} href='#'>remove</a>
    </div>
  )
}
export default SelectedInstrument
