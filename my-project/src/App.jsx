import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TypingModeBar from './components/TypingModeBar'

function App() {
  const [mainContent, setMainContent] = useState('')
  const [mode, setMode] = useState('time')

  
  let handleSelectContent = (content) =>{
    console.log(content)
    setMainContent(content)
  }

  let handleSelectMode = (mode) =>{
    console.log(mode)
    setMode(mode)
  }

  return (
    <div className="wrapper bg-[#323437] py-7 w-[80%] h-screen m-auto">
      <Header handleSelectContent={handleSelectContent}></Header>
      <TypingModeBar handleSelectMode={handleSelectMode} typingMode={mode}></TypingModeBar>
    </div>
  )
}

export default App
