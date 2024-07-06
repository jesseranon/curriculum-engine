import React, {useState, useEffect} from 'react'
import Calendar from './Calendar'
import Layers from './Layers'
import Spinner from './Spinner'

const Corkboard = () => {
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
        <div className="flex flex-col justify-start min-h-full max-h-full w-1/2">
            <Calendar />
            <Layers layers={layers} loading={loading} />
        </div>
    )
}

export default Corkboard