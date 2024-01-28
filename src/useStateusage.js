import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export let MyfirstHook = () => {

    let [chocolatename, setChocolatename] = useState("");

    let gettingvalue = (temp) => {
        setChocolatename(temp.target.value);
    }

    let print = () => {
        alert(" my favoriate chocolate name is :" + chocolatename)
    }
    return (
        <>
            <div className='form-group mt-5'>
                <label className='form-label'>CHOCOLATE NAME</label>
                <input type='text'
                    onChange={gettingvalue}
                    placeholder='Enter your fav chocolate'
                    className='form-control' />
            </div>
            <button className='btn btn-outline-success mt-4'
                onClick={print}>SHOW ME</button>
        </>
    );
}

