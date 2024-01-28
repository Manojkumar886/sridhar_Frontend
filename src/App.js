import UsingArrow, { List, Marks, MyfirstFunction, } from "./Sample";

function App() {
    return (
        <>
            <table cellPadding={'4px'} border={'3px'}>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
            </table >
            <MyfirstFunction />
            <UsingArrow />
            <List />
            <Marks />
        </>
    )
}


export default App;