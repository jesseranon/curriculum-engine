import React, {useState, useEffect} from 'react'
import LayersList from './LayersList'
import Spinner from './Spinner'

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
    <section className="h-1/2 w-full">
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <LayersList layers={layers} />
        )}
    </section>
  )
}

export default Layers