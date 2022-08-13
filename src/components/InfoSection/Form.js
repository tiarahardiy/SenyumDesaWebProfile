import React from 'react'
import { TitleForm} from './SectionElements'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Section.css'

const form = () => {
  return (
    <div>
        <div className='container'>
        <div className='center'>
            <div className=' mt-5'>
                  <TitleForm>MARI SALING MENGENAL</TitleForm>
            </div>
            <div className=' mt-3'>
                  <Form>
                    <div className='row center-form'>
                      <div className='col-md-4 '>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control type="name" placeholder="Your Name" />
                        </Form.Group>
                      </div>
                      <div className='col-md-4'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                      </div>
                      
                      <div className='col-md-4'>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Phone" />
                      </Form.Group>
                      </div>
                      <div className='col-md-12'>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} placeholder="Message"/>
                        </Form.Group>
                      </div>
                    </div>
                    <div className='center d-grid gap-2 col-6 mx-auto'>
                      <button type="button" className="btn btn-lg  btn-primary btn-primary-form"><span>SUBMIT</span></button>
                    </div>
                   
              </Form>
            </div>
        </div>
        </div>
       
          
  
       

    </div>
  )
}

export default form