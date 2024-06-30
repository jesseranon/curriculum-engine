import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import StandardsList from './StandardsList'
import Spinner from './Spinner'

const Standards = () => {
  const [standards, setStandards] = useState([])
  const [strand, setStrand] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStandards = async () => {
        const apiURL = '/api/commonCoreStateStandards'
        try {
            const res = await fetch(apiURL)
            const data = await res.json()
            // console.log(data.strands[currentStrand])
            setStandards(data.strands)
        } catch (error) {
            console.log('Error fetching data', error)
        } finally {
            setLoading(false)
        }
    }
    fetchStandards()
  },[])

  function traverseStrands(num) {
    if (strand === 0 && num === -1) return
    if (strand === 4 && num === 1) return
    setStrand(strand + num)
  }

  return (
    <section className="w-1/2 min-h-full">
            {loading ? (
                <Spinner loading={loading} />
            ) : (
                <>
                    <div className="text-2xl font-semibold flex flex-row content-center justify-center">
                        <button className={`p-2.5 ${strand === 0 && "pointer-events-none opacity-25"}`} onClick={() => traverseStrands(-1)}><FontAwesomeIcon icon={faCaretLeft} /></button>
                        <div className="w-80">{standards[strand].title}</div>
                        <button className={`p-2.5 ${strand === 4 && "pointer-events-none opacity-25"}`} onClick={() => traverseStrands(1)}><FontAwesomeIcon icon={faCaretRight} /></button>
                    </div>
                    <StandardsList className="max-h-full overflow-y-auto" strand={standards[strand]} />
                </>
            )}   
    </section>
  )
}

export default Standards