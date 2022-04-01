import React from 'react'
import './OpenMenu.scss'

interface OpenMenuProps{
  handleOpenMenu:() => void
}

const OpenMenu = ({handleOpenMenu}: OpenMenuProps) => {
  return (
    <div className='openMenu'><span className="fas fa-bars fa-2x openMenu_span" onClick={handleOpenMenu}/></div>
  )
}

export default OpenMenu