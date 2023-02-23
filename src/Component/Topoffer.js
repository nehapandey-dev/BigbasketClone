import React from 'react'


function Topoffer() {
    return (
        <>
            <section className='topoffers'><h4>Top Offers</h4><hr></hr>
                <div className='topoffer-section'>
                    <img className='topoffer-img' src='/topoffer-img/topoffer-1.webp' alt='offer-img' width={260} />
                    <img className='topoffer-img' src='/topoffer-img/offer-2.webp' alt='offer-img' width={260} />
                    <img className='topoffer-img' src='/topoffer-img/offer-3.webp' alt='offer-img' width={260} />
                    <img className='topoffer-img' src='/topoffer-img/offer-4.webp' alt='offer-img' width={260} />
                </div>
            </section>
        </>
    )
}

export default Topoffer