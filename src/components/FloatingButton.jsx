import React from 'react'

function FloatingButton({onClick}) {
  return (
    <div
    onClick={onClick}
      className="fixed bottom-6 right-6 bg-gray-500 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-gray-400 transition-colors"
    >
      Text
    </div>
  )
}

export default FloatingButton;