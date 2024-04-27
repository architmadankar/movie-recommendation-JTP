import React, { useState,useEffect } from 'react'
import { getDropdowns, getMovies } from '../global/api';


const Dashboard = () => {
    const [options,setOptions] = useState(['One', 'Two', 'Three', 'Four', 'Five']);
    const [rec, setRec] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(()=>{
        getDropdowns().then(res => {
            setOptions(res)
        }).catch(err => { setError("Unable To Fetch"); console.log(err) })
            .finally(() => {
              setLoading(false)
            })

    },[])

    const onOptionChangeHandler = (event) => {
        console.log("User Selected Value - ", event.target.value)
        setLoading(true)
        setRec([])
        getMovies({ movie: event.target.value}).then(res => {
            setRec(res)
          }).catch(err => { setError("Unable To Fetch"); console.log(err) })
            .finally(() => {
              setLoading(false)
            })
    }
    return (
        
            <div style={{marginLeft:'1rem', marginRight:'1rem'}}>

                <div style={{marginBottom:'3rem', display: 'grid', placeItems:'center'}}>
            <p style={{fontSize:'1.5rem', paddingTop:'10px', paddingBottom:'10px'}}>Select a movie </p>
            

            <div style={{ height: '200px', overflow: 'auto' }}>
                <select size={options.length + 1} onChange={onOptionChangeHandler}>
                    {options.map((option, index) => {
                        return <option key={index}>
                    {option.title}
                            </option>
                                })}
                </select>
            </div>

            {error && <p style={{fontSize:'0.875rem', color: 'ef4444', marginTop:'1rem'}}>{error}</p>}
            {loading && <div style={{ display: 'grid', placeItems: 'center', padding: '1rem' }}>
                <p>Loading...</p>
                </div>}
            </div>
            {rec.length>0
            &&
            <p style={{fontSize: '1.5rem'}}>suggestions:</p>
            }
            {rec.map((item, idx) => {
                return (
                    <div key={idx} style={{boxShadow:'2px 2px 4px rgba(0,0,0,0.1)',padding:'1rem', marginTop:'0.5rem', marginBottom:'0.5rem', borderRadius:'0.375rem', display:'flex', alignItems:'center',justifyContent: 'space-between'}}>
                        
                        <p>{item.title}</p>
                        <p>{item.genre}</p>
                        
                    </div>
                )
            })}
        </div>
    )
}

export default Dashboard