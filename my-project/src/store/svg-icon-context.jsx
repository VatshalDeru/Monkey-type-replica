import { createContext } from "react";

export const SVGIconContext = createContext({
    typingMode: '',
    configurating: false,
    selectedInterval: null,
    handleSelectContent: () => {},
})

const typingModeIntervals = [
    [15, 30, 60, 120],
    [10, 25, 50, 100]
]

export default function SVGIconContextProvider({children}){
    const [mainContent, setMainContent] = useState('')
    const [mode, setMode] = useState('time')
    const [configurating, setConfigurating] = useState(false)
    const [selectedInterval, setSelectedInterval] = useState([15, 10])




    let checkIfSelected = (mode) =>{
        let intervalIndex = mode === 'time' ? 0 : 1
        let selected = typingModeIntervals[intervalIndex].every(interval => {
            interval !== selectedInterval[intervalIndex]
        })
        return selected
    }

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

      const ctxValue = {
        typingMode: mode,
        configurating,
        selectedInterval,
        handleSelectContent,
      }

      return (
      <SVGIconContext.Provider>
        {children}
      </SVGIconContext.Provider>
      )

}