import React from 'react'

const InstrumentForm = ({submit}) => {
  return (
    <form className='col-centered' onSubmit={submit}>
      <label>Select Instruments</label>
      <br></br>
      <input type='text'/>
      <input type='submit' value='add' className="btn btn-default"/>
    </form>
  )
}

export default InstrumentForm
