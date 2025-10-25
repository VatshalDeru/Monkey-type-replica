import { useState, useRef } from 'react'
import './App.css'
import Header from './components/Header'
import TypingModeBar from './components/TypingModeBar'
import ConfigModal from './components/ConfigModal'
import TypingBox from './components/TypingBox'

function App() {
  const [mainContent, setMainContent] = useState('')
  const [mode, setMode] = useState('time')
  const [configurating, setConfigurating] = useState(false)
  const [selectedInterval, setSelectedInterval] = useState([15, 10])
  
  const configModal = useRef()

  // console.log(selectedInterval)
  
  let handleSelectContent = (content) =>{
    console.log(content)
    setMainContent(content)
  }

  let handleSelectMode = (mode) =>{
    console.log(mode)
    setMode(mode)
  }

  let handleSelectInterval = (selection, typingMode) =>{

    let intervalArr = [...selectedInterval]

    if(typingMode === 'time'){
      intervalArr[0] = selection
    }else if(typingMode === 'words'){
      intervalArr[1] = selection
    }

    setSelectedInterval(intervalArr);
  }

  let handleOpenConfigModal = () =>{
    configModal.current.open()
    setConfigurating(true)
  }

  let handleCloseConfigModal = () =>{
    configModal.current.close()
    setConfigurating(false)
  }

  return (
    <div className="wrapper bg-[#323437] py-7 w-[80%] h-screen m-auto">
      <Header handleSelectContent={handleSelectContent}></Header>
      <TypingModeBar 
        handleSelectMode={handleSelectMode} 
        typingMode={mode} 
        handleOpenConfigModal={handleOpenConfigModal}
        configurating={configurating}
        handleSelectInterval={handleSelectInterval}
        selectedInterval = {selectedInterval}
      >
      </TypingModeBar>
      <TypingBox time={selectedInterval[0]}></TypingBox>
      <ConfigModal ref={configModal} 
        selectedInterval={selectedInterval} 
        setInterval={setSelectedInterval} 
        closeModal={handleCloseConfigModal}
        typingMode={mode}
      >
      </ConfigModal>
    </div>
  )
}

export default App
