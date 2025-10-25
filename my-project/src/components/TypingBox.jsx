import { useState, useEffect } from "react"


const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random?minLength=300&maxLength=320'

let counter = 0;

const getRandomQuote = async ()  =>{
    return await fetch(RANDOM_QUOTE_API_URL)
        .then(res => res.json())
        .then(data => data.content)
}

// render random quote
const renderNewQuote = async () => {
    let randomQuote = await getRandomQuote()

    // console.log(randomQuote)

    return randomQuote
};

// let randomQuote = await renderNewQuote()
// console.log(randomQuote)

export default function TypingBox({time}){
    const [quote, setQuote] = useState()

    useEffect(() => {
        const fetchQuote = async () => {
            let newQuote = await getRandomQuote();
            setQuote(newQuote);
        };
        
        fetchQuote();
    }, []);

    // console.log(quote)

    return(
        <div id="typingbox-container" className="flex h-[60%] items-center">
            <div id="container" className="w-full flex flex-col h-fit ">
                <div className="timer">
                    <p className="text-3xl text-[#E2B714]">{time}</p>
                </div>
                <textarea type="text" value={quote} className="w-full h-40  leading-normal outline-none appearance-none whitespace-normal overflow-hidden resize-none bg-[#323437] text-[#646669] text-4xl" /> 
            </div>
        </div>
        
    )

        // <input name="" id="">{quote}asd</input
}