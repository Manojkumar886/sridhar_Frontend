// functional ,class components
import React from 'react'

// class components
export class Myclass extends React.Component {
    render() {
        function click() {
            alert(Date())
        }
        return (
            <>
                <button onClick={click}>Click Me</button>
            </>
        )
    }
}


// Functional Components
export function Myfunction() {
    let myfunc = () => {
        alert(Date())
    }
    return (
        <>
            <button onDoubleClick={myfunc}>CLICK</button>
        </>
    )
}