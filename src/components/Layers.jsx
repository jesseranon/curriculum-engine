import React, {useState, useEffect} from 'react'
import LayersList from './LayersList'
import Spinner from './Spinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashArrowUp, faCalendarPlus, faCirclePlus, faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import DraggableSelection from './DraggableSelection'

const Layers = () => {
  const [layers, setLayers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchLayers = async () => {
      const apiURL = '/api/layers'
      try {
        const res = await fetch(apiURL)
        const data = await res.json()
        // console.log(data.layers)
        const sortedLayers = data.layers.sort((a, b) => {
          return a.order - b.order
        })
        setLayers([...sortedLayers])
      } catch (error) {
        console.log('Error fetching data', error)
      } finally {
        setLoading(false)
      }
    }
    fetchLayers()
  },[])
      
  return (
    <section className="h-2/5 w-full">
        <div className="text-2xl font-semibold flex flex-row content-center justify-center">
          <span className="w-80">Layers</span>
          <DraggableSelection classes="p-2.5" id="layer-selector" />
          <button className="p-2.5 restore"><FontAwesomeIcon icon={faTrashArrowUp} /></button>
        </div>
        <div className="text-xl flex flex-row justify-between min-w-full">
          <div className="basis-1/5">Edit</div>
          <div className="basis-1/5">Visibility</div>
          <button className="basis-2/5"><FontAwesomeIcon icon={faCirclePlus} /> Add a Layer</button>
          <div className="basis-1/5"><FontAwesomeIcon icon={faLayerGroup} /> Sort</div>
        </div>
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <LayersList layers={layers} />
        )}
    </section>
  )
}

export default Layers