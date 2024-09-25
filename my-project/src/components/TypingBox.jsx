import { useState } from "react"


const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random?minLength=140&maxLength=150'


export default function TypingBox(){
    const quote = useState(getRandomQuote)

    const getRandomQuote = async ()  =>{
        return await fetch(RANDOM_QUOTE_API_URL)
            .then(res => res.json())
            .then(data => data.content)
    }


    
    return(
        <textarea name="" id="">{quote}asd</textarea>
    )
}