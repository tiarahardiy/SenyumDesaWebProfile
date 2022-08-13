import React from 'react'
import './Section.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {FaFacebook, FaTwitter} from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'

const ContactInfo = () => {
  return (
    <div>
      <div className='container'>
        <div className='container-info center-vertical'>
        <div className='row '>
            <div className='col-md-8 '>
                <div className=''>
                    <p className='address '>ADDRESS:<span className='alamat'> ALAMAT </span></p>
                    <p className='address margin-top'>PHONE:<span className='alamat'> HP </span></p>
                    <p className='address margin-top'>CONTACT:<span className='alamat'> senyumdesa@gmail.com </span></p>
                </div>
              
            </div>
            <div class="col-md-4 d-flex justify-content-end ">
                <div className=''>
                <p className='address'>NEWSLETTER</p>
                <Form inline>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Your Email" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Subcribes
                    </Button>
                </Form>
                <p className='address margin-top'>SOCIAL</p>
                <div className='d-flex'>
                    <FaFacebook className='size-icon' />
                    <AiFillInstagram className='size-icon ms-2' />
                    <FaTwitter className='size-icon ms-2' />
                </div>
                </div>
               
            </div>
        </div>
        </div>
      
      </div>
    </div>
  )
}

export default ContactInfo