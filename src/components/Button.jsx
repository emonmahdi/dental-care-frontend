import React from 'react'

const Button = ({ children }) => {
  return (
    <button className="bg-primary py-3 px-8 text-secondary hover:bg-secondary hover:text-primary rounded-lg transition-all duration-300 ease-in-out cursor-pointer">
      {children}
    </button>
  )
}

export default Button
