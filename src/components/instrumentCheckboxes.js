import React from 'react'

const InstrumentCheckboxes = () => {
  var instruments = ['guitar', 'drums']
  var boxes = instruments.map(instrument => {
    return (
      <div>
        <label>{instrument}</label><input key={instrument} type="checkbox" className='instrumentCheckbox' value={instrument}/>
      </div>
    )
  })
  return <div>{boxes}</div>
}

export default InstrumentCheckboxes
