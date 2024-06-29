import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import LayerItem from './LayerItem'

const LayersList = ({layers}) => {
  return (
    <ol className="min-w-full">
      {layers.map(layer => <LayerItem key={layer.id} {...layer} />)}
    </ol>
  )
}

export default LayersList