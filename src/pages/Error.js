import React, {useState,useEffect} from 'react'
import Navbar from '../components/Navbar/indexNavbar'
import '../components/InfoSection/Section.css'
import ErrorCard from './ErrorCard';

const Error = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen);
  };

  return (
    <div>
       <Navbar />
       <ErrorCard></ErrorCard>
       
    </div>
  )
}

export default Error