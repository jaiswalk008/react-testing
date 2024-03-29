import { useState } from "react";

const Greeting = () =>{
    const [changeText , setChangeText] = useState(false);
    const changeTextHandler = () => setChangeText(true);
    return (
        <div>
            <h1>Hello World!!</h1>
            {!changeText && <p>Its good to see you</p>}
            {changeText && <p>Changed!</p>}
            <strong>Testing...</strong>
            <button onClick={changeTextHandler}>Change Text!</button>
        </div>
    )
}
export default Greeting;