import { Link } from 'react-router-dom';
function OpenAccount() {
    return ( 
       <div className='container p-5 mb-5'>
            <div className="row text-center">
                <h1 className='mt-5 '>Open a TRADE-UI account</h1>
                <p>Modern platform and apps,₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <Link to="/signup" style={{width:"25%" ,margin:"0 auto"}} className='p-2 fs-5 btn btn-primary mb-5'>Signup Now</Link>
            </div>

        </div>
     );
}

export default OpenAccount;