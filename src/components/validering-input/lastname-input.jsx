import { useRef, useState } from "react"

export default function LastNameInput(props) {

    const inputElement = useRef(null)

    const [error, setError] = useState(null)

    function inputHandler(event) {
        
        const value = inputElement.current.value;

        if (value.length <2) {
            setError('Lastname is too short');
        } else {
            setError(null)
        }

    }
 return (
<>
<input ref={inputElement}  onInput={inputHandler} name="lastName" placeholder="Last Name..." {...props} required />
{error && <p>{error} </p> }
</>
   )
    }