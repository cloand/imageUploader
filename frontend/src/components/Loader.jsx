import { LinearProgress } from "@mui/material"
import { Box } from "@mui/system"

const Loader = () =>  {
    return(<>
        <div className='p-5 shadow-normal rounded-lg px-32 py-36'>
            <h1 className="text-18 text-medium pb-30">Uploading...</h1>
            <LinearProgress />
        </div>
    </>)
}

export default Loader