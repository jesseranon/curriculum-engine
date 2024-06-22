import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import StandardsList from './StandardsList'
import Spinner from './Spinner'

const Standards = () => {
  const [standards, setStandards] = useState([])
  const [currentStrand, setCurrentStrand] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStandards = async () => {
        const apiURL = '/api/commonCoreStateStandards'
        try {
            const res = await fetch(apiURL)
            const data = await res.json()
            // console.log(data.strands[currentStrand])
            setStandards(data.strands.map(strand => strand))
        } catch (error) {
            console.log('Error fetching data', error)
        } finally {
            setLoading(false)
        }
    }
    fetchStandards()
  },[])

  function traverseStrands(num) {
    if (currentStrand === 0 && num === -1) setCurrentStrand(4)
    if (currentStrand === 4 && num === 1) setCurrentStrand(0)
    setCurrentStrand(currentStrand + num)
  }

  return (
    <section>
        <div className="flex flex-row justify-around">
            {loading ? (
                <Spinner loading={loading} />
            ) : (
                <>
                    {currentStrand > 0 && <FontAwesomeIcon icon={faCaretLeft} onClick={() => traverseStrands(-1)} />}
                    <span className="text-xl">{standards[currentStrand].title}</span>
                    {currentStrand < 4 && <FontAwesomeIcon icon={faCaretRight} onClick= {() => traverseStrands(1)} />}
                    <StandardsList strand={standards[currentStrand]} />
                </>
            )}
        </div>
        
    </section>
  )
}

export default Standards