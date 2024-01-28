import { useState } from 'react'
export const MyExpression = () => {
    const [uservalue, setUservalue] = useState("");

    const [cssstyle, setCssstyle] = useState({ backgroundColor: 'black' });

    const [display, setdisplay] = useState("");

    const getting = (temp) => {
        setUservalue(temp.target.value);
    }
    const ternary = () => {
        uservalue === "blue" ?
            setCssstyle({ backgroundColor: 'blue' }) :
            uservalue === "yellow" ?
                setCssstyle({ backgroundColor: 'yellow' }) :
                uservalue === "red" ?
                    setCssstyle({ backgroundColor: 'red' }) :
                    setCssstyle({ color: 'white', backgroundColor: 'black' })
        setdisplay(uservalue)
    }

    return (
        <>
            <h1> One color you choose (which one color you choose it. that color is changed a your content)</h1>
            <input type='text'
                placeholder='Enter your favoriate color'
                onChange={getting}
            />
            <button onClick={ternary}> CLICK</button>


            <p style={cssstyle}>
                your favoriate color is {display}
            </p>
        </>
    );
}