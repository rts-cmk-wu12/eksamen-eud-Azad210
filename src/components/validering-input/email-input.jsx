import { useRef, useState } from "react"

export default function EmailInput(props) {

    const inputElement = useRef(null)

    const [error, setError] = useState(null)

    function inputHandler(event) {
        
        const value = inputElement.current.value;

        if (value.includes ("@")) {
            setError(null)
        } else {
             setError('Email must contain @');
        }

    }
 return (
<>
<input ref={inputElement}  onInput={inputHandler} name="email" placeholder="Email" {...props} required />
{error && <p>{error} </p> }
</>
   )
    }