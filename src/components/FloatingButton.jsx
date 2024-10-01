import React from 'react'

function FloatingButton({onClick}) {
  return (
    <div
    onClick={onClick}
      className="fixed bottom-6 right-6  text-white p-4 rounded-full shadow-lg cursor-pointer bg-gradient-to-r from-yellow-400 via-yellow-400 to-yellow-600 transition-colors"
    >
      Text
    </div>
  )
}

export default FloatingButton;