import React from 'react'
import { useState } from 'react'

const WorkoutForm = () => {
    const [title, setTitle] = useState("")
    const [load, setLoad] = useState("")
    const [reps, setReps] = useState("")
    const [error, setError] = useState(null)
    
   
    const workouts={title,load,reps}
    const options ={
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(workouts)
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        
        const response=await fetch('http://localhost:4000/api/workouts',options)
        const resp=await response.json()
        if(!response.ok){
            setError(resp.error)
            console.log(resp.error)
        }
        if(response.ok){
            setError(null)
            setTitle('')
            setLoad('')
            setReps('')
            console.log('new added')
        }
        // alert(resp)

    }
  return (
    <div className="container ">

        

<form className='w-full md:w-1/2 mx-auto ' onSubmit={handleSubmit}>
          <h2 className="text-xl text-center p-4 text-gray-400">Register Here</h2>
          <input 
            value={title} 
            onChange={(e)=>setTitle(e.target.value)} 
            type="text"
            className='w-full px-2 py-1 rounded bg-transparent border text-gray-200 my-2 outline-none' 
            placeholder='Enter Title'/>
          <input 
            value={load} 
            onChange={(e)=>setLoad(e.target.value)} 
            type="number" 
            className='w-full px-2 py-1 rounded bg-transparent border text-gray-200 my-2 outline-none' 
            placeholder='Enter Load'/>
          <input 
            value={reps} 
            onChange={(e)=>setReps(e.target.value)} 
            type="number" 
            className='w-full px-2 py-1 rounded bg-transparent border text-gray-200 my-2 outline-none' 
            placeholder='Enter Reps'/>

          <button  className='border rounded-lg p-2 text-gray-400 border-emerald-700 w-full hover:border-emerald-800 hover:bg-emerald-800 hover:text-gray-200' >Register</button>
          {error && 
          <p className="error text-gray-200">{error}</p>
          }
        </form>

    </div>
  )
}

export default WorkoutForm