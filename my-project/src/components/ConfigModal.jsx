import events from "inquirer/lib/utils/events"
import { forwardRef, useRef, useImperativeHandle } from "react"
import { createPortal } from 'react-dom'
 

const ConfigModal = forwardRef(function ConfigModal({selectedInterval, setInterval, closeModal, typingMode}, ref){
    const dialog = useRef()

    let intervalsIndex = typingMode === 'time' ? 0 : 1;
    let handleInputChange = (input) =>{
        let value = input.length > 0 ? parseInt(input) : 0;
        let intervals = [...selectedInterval]
        intervals[intervalsIndex] = value

        setInterval(intervals)
    }

    useImperativeHandle(ref, ()=>{
        return {
            open(){
                dialog.current.showModal()
            },
            close(){
                dialog.current.close()
            }
        }
    })


    // console.log(selectedInterval)
    return createPortal(
        <div id="modal-wrapper">
            <dialog ref={dialog} onClose={closeModal} className="bg-[#323437] border-2 border-[#28282b] py-10 px-8 w-96 rounded-md" >
                <h1 className="text-[#636768] text-2xl mb-2">Test duration</h1>
                <p className="text-[#C8C8BD] text-xs">{selectedInterval[intervalsIndex]} seconds</p>
                <input className="bg-[#2C2E31] w-full text-[#636768] outline-[#C8C8BD] rounded p-1 my-2 appearance-none" 
                    type="number"
                    onChange={(e) => handleInputChange(e.target.value)}
                    value={selectedInterval[intervalsIndex] || ''}
                />
                <form method='dialog'>
                    <button className="bg-[#2C2E31] text-[#C8C8BD] rounded w-full py-1 hover:bg-[#C8C8BD] hover:text-[#2C2E31]">ok</button>
                </form>
            </dialog>
        </div>

    , document.getElementById('modal-root'))
})

export default ConfigModal;