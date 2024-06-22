import React from 'react'
import LayerItem from './LayerItem'

const LayersList = () => {
  return (
    <section>
      <ul>
          <LayerItem key="1" />
          <LayerItem key="2" />
          <LayerItem key="3" />
          <LayerItem key="4" />
      </ul>
    </section>
  )
}

export default LayersList