import { useRef, useState } from "react"

export default function FirstNameInput(props) {

    const inputElement = useRef(null)

    const [error, setError] = useState(null)

    function inputHandler(event) {
        
        const value = inputElement.current.value;

        if (value.length <2) {
            setError('Name is too short');
        } else {
            setError(null)
        }

    }
 return (
<>
<input ref={inputElement}  onInput={inputHandler} name="firstName" placeholder="First Name" {...props} required />
{error && <p>{error} </p> }
</>
   )
    }