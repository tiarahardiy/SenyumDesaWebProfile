import React, {useState,useEffect} from 'react'
import Navbar from '../components/Navbar/indexNavbar'
import '../components/InfoSection/Section.css'

const Error = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen);
  };

  return (
    <div>
       <Navbar />
       <div className='bg-error'>

       </div>
    </div>
  )
}

export default Error