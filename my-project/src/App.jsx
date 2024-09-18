import { useState } from 'react'
import './App.css'
import Header from './components/Header'

function App() {
  const [mainContent, setMainContent] = useState('')
  console.log(mainContent)
  
  let handleSelectContent = (content) =>{
    // console.log(content)
    setMainContent(content)
  }

  return (
    <div className="wrapper bg-[#323437] py-7 w-[80%] h-screen m-auto">
      <Header handleSelectContent={handleSelectContent}></Header>
    </div>
  )
}

export default App
