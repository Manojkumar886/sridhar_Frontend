import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

export let Bootstrapusage = () => {
    return (
        <>
            <div className='container row justify-content-center'>
                <button className='col-3 btn btn-outline-primary'>ROW<i class="bi bi-1-circle"></i></button>
                <button className='col-4 btn btn-danger'>COLUMN<i class="bi bi-2-circle-fill"></i></button>
                <button className='col-3 btn btn-outline-info'>TOP<i class="bi bi-3-square-fill"></i></button>
            </div>
        </>
    )
}