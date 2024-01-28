import './external.css'

function MyfirstFunction() {
    let mystyle = {
        textDecoration: 'line-through'
    }

    return (
        <>
            <h1 style={mystyle}>WHAT IS REACT JS?</h1>
            <p>React is a JavaScript library for building user interfaces.
                React is not a framework.its a liabrary.
                Data flow is always in a single direction.
                React is used to build single-page applications.</p>

        </>
    )
}



let UsingArrow = () => {
    return (
        <>
            <h1>ORDER LIST </h1>
            <ol >
                Chocolate Names
                <li>KITKAT</li>
                <li>MUNCH</li>
                <li>CADBURY</li>
            </ol>
        </>
    );
}


export var List = () => {


    return (
        <>
            <ul style={{ backgroundColor: 'seagreen', color: 'red', textDecoration: 'underline white' }}>
                Web technologies
                <li>HTML</li>
                <li>CSS</li>
                <li>BOOTSTRAP</li>
                <li>JAVA SCRIPT</li>
            </ul>
        </>
    )
}
export var Marks = () => {
    return (
        <>
            <table>
                <tr>
                    <td>Student name</td>
                    <td>Tamil</td>
                    <td>English</td>
                    <td>Maths</td>
                    <td>Science</td>
                    <td>social</td>
                </tr>
                <tr>
                    <td>Sridhar</td>
                    <td>90</td>
                    <td>85</td>
                    <td>77</td>
                    <td>90</td>
                    <td>90</td>
                </tr>
                <tr>
                    <td>Sarathi</td>
                    <td>89</td>
                    <td>90</td>
                    <td>78</td>
                    <td>56</td>
                    <td>89</td>
                </tr>
            </table>
        </>
    )
}

export default UsingArrow;
export { MyfirstFunction };