import { List } from "./ArrayList";
import { Mynavigation } from "./Navigation";
import { MyExpression } from "./TernaryOperator";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MyfirstHook } from "./useStateusage";


function App() {
    return (
        <>
            <BrowserRouter>
                <Mynavigation />
                <Routes>
                    <Route path="myhome" exact eleme />} />
                    <Route path="about" exact element={<MyExpression />} />
                    <Route path="w3school" exact element={<okok />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}


export default App;