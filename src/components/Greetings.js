import {useState} from "react";
import Output from "./output";

const Greetings = () => {
    const [changeText, setChangeText] = useState(false)

    const changeTextHandler = () => {
        setChangeText(true)

    }
    return (
        <div>
            <h2>This is a test page.</h2>
            {!changeText && <Output> Click the button to change the text!</Output>}
            {changeText && <Output>The text has been changed!</Output>}
            <button onClick={changeTextHandler}>Change Text Here!</button>
        </div>
    )
};

export default Greetings