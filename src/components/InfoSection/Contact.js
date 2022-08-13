import React from 'react'
import './Section.css'

const Contact = () => {
  return (
    <div>
        <div className='bg-color'>
        <div className='container'>
            <div className='row'>
                    <div className='col-md-8 text-position'>
                        <p className='text-contact'>JIKA ADA PERTANYAAN ATAU KERJASAMA DAPAT MENGHUBUNGI</p>
                        <p className='text-whatsapp'>WHATSAPP : +84 1102 2703</p>  
                    </div>
                    <div class="d-flex justify-content-end ">
                    <button type="button" class="btn btn-lg btn-outline-primary button-position "><span className='btn-chat'> CHAT WHATSAPP</span></button>
                    </div>
                </div>
        </div>
        </div>

    </div>
  )
}

export default Contact