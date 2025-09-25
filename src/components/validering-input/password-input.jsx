import { useRef, useState } from "react"

export default function PasswordInput(props) {

    const inputElement = useRef(null)

    const [error, setError] = useState(null)

    function inputHandler(event) {
        
        const value = inputElement.current.value;

        if (value.length <4) {
            setError('Password is too short');
        } else {
            setError(null)
        }

    }
 return (
<>
<input ref={inputElement}  onInput={inputHandler} name="password" type="password" placeholder="Password..." {...props} required />
{error && <p>{error} </p> }
</>
   )
    }