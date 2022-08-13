import React from 'react'
import '../components/InfoSection/Section.css'

const ErrorCard = () => {
  return (
    <div>
        <div className='bg-error'>
        <div className=' img-margin'>
          <img
                className="img-fluid rounded mx-auto d-block"
                src={require('../assets/images/errorsg.png')}
                alt="First slide"
                />
        </div>
      
       </div>
    </div>
  )
}

export default ErrorCard