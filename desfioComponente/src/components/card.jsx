import '../styles/card.sass'

function Card(){
    return(
        <div className='container-card'>
            <div className="container-info">
                <h1>
                Get <span>insights</span> that help <br /> your busines grow.
                </h1>
                <p className='area-txt'>
                Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall eficciency.
                </p>
                <div className="container-num">
                    <div className="num1 global"><h2>10K+</h2><p className='txt-num'>COMPANTES</p></div>
                    <div className="num2 global"><h2>314</h2><p className='txt-num'>TEMPLATES</p></div>
                    <div className="num3 global"><h2>12M+</h2><p className='txt-num'>QUERTES</p></div>
                    
                </div>
            </div>
            <div className='container-img'>
                    <img src="../../../../images/image-header-desktop.jpg" alt="" />
            </div>
        </div>
    )
}

export default Card