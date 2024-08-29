import React from 'react'

function InputField({placeholder  , id , type}) {
  return (
    <input
    type={type}
    id={id}
    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
    placeholder={placeholder}
  />
  )
}

export default InputField