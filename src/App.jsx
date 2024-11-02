import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1 className='text-4xl font-bold text-center bg-lime-400'>Coffe_Book Projects</h1>
      <button className="btn btn-warning">Click Me</button>
      
    </>
  )
}

export default App
