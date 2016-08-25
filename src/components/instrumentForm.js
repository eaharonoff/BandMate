import React from 'react'

const InstrumentForm = ({submit}) => {
  return (
    <form className='col-centered' onSubmit={submit}>
      <label>Select Instruments</label>
      <br></br>
      <input type='text' className='form-control'/>
      <input type='submit' value='add' className="btn btn-default"/>
    </form>
  )
}

export default InstrumentForm
