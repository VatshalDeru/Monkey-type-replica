import { useState } from 'react'
import './App.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="wrapper bg-[#323437] py-7 w-[80%] h-screen m-auto">
      <Header></Header>
    </div>
  )
}

export default App
