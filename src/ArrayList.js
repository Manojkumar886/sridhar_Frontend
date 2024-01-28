export let List = () => {
    let gasBrands = new Array("INDINE", "HP", "BHARAT", "QUIZ", "MildSteel");

    return (
        <>
            <h1 style={{ textDecoration: 'underline', textAlign: 'center' }}>I KNOW ONLY THESE GAS BRANDS ONLY</h1>
            <ol>
                {
                    gasBrands.map(
                        (temp) =>
                        (
                            <b style={{ textAlign: 'center', listStylePosition: 'inside' }}>  <li>{temp}</li></b>
                        )
                    )
                }
            </ol>
        </>
    );
}