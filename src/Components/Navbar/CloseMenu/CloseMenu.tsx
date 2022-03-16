import React from 'react'
import './CloseMenu.scss'

interface CloseMenuProps{
    handleCloseMenu: any
}

const CloseMenu = ({handleCloseMenu}:CloseMenuProps) => {
  return (
    <div className='closeMenu'><div onClick={handleCloseMenu}/></div>
  )
}

export default CloseMenu