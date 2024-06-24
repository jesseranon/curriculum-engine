import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import LayerItem from './LayerItem'

const LayersList = ({layers}) => {
  return (
    <ol className="min-w-full">
      <li key="options" className="flex flex-row justify-between min-w-full">
        <div className="basis-1/5">Edit</div>
        <div className="basis-1/5">Visibility</div>
        <div className="basis-2/5 cursor-pointer"><FontAwesomeIcon icon={faCirclePlus} />Add a Layer</div>
        <div className="basis-1/5"><FontAwesomeIcon icon={faLayerGroup} /> Sort</div>
      </li>
      {layers.map(layer => <LayerItem key={layer.id} {...layer} />)}
    </ol>
  )
}

export default LayersList