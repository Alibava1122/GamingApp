import React from 'react'

function InputField({placeholder  , id , type , value , onChange , ...props}) {
  return (
    <input
    type={type}
    id={id}
    value={value}
    onChange={onChange}
    className=""
    placeholder={placeholder}
    {...props}
  />
  )
}

export default InputField;