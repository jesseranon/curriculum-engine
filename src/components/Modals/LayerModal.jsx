import React from 'react'

const LayerModal = ({open, onClose, children}) => {
  return (
    <div className={`fixed inset-0 justify-center items-center
      ${open ? "visible bg-black/20" : "invisible"}
    `}>
      <form action="">

      </form>
    </div>
  )
}

export default LayerModal