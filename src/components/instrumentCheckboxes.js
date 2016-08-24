import React from 'react'

const InstrumentCheckboxes = () => {
  var instruments = ['guitar', 'drums', 'bass_guitar', 'mandolin', 'accordion', 'bagpipes', 'banjo', 'clarinet', 'fiddle', 'flute', 'harmonica', 'piano', 'ukulele', 'alto_saxophone', 'tenor_saxophone', 'trumpet']
  var boxes = instruments.map(instrument => {
    return (
      <div className='instruments required'>
        <label>{instrument}</label><input key={instrument} type="checkbox" className='instrumentCheckbox' value={instrument}/>
      </div>
    )
  })
  return <div>{boxes}</div>
}

export default InstrumentCheckboxes
