import React from 'react'

const TextField = ({ label, inputProps, onChange, value }) => {
  return (
    <div className="form-group">
      <label className='form-group'>{label}</label>
      <input
        className='form-control'
        {...inputProps}
        onChange={onChange}
        value={value}
      />
    </div>
  )
}

export default TextField