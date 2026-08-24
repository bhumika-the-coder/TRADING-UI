import { Link } from 'react-router-dom';
function Hero() {
    return ( 
        <div className='container p-3 p-md-5 mb-5'>
            <div className="row text-center">
                <img src="media/images/homeHero.png" alt="Hero Image" className='mb-3'/>
                <h1 className='mt-4 mt-md-5'>Invest in everything</h1>
                <p className='px-2'>online platform to invest in stocks,derivatives,mutual funds, and more</p>
                <Link to="/signup" style={{width:"25%" ,margin:"0 auto"}} className="p-2 fs-5 btn btn-primary mb-5 w-75 w-md-25 mx-auto">Signup Now</Link>
            </div>

        </div>
     );
}

export default Hero;