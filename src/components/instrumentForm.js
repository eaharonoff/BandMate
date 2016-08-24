import React from 'react'

const InstrumentForm = ({submit}) => {
  return (
    <form onSubmit={submit}>
      <label>Select Instruments!</label>
      <input type='text'/>
      <input type='submit'/>
    </form>
  )
}

export default InstrumentForm
