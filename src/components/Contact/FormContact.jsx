import React from 'react'
import radio from "../../img/radio.png"
import { NavLinks } from '../NavLinks/NavLinks'

export const FormContact = () => {
  return (
    <div className='container-father pb-3'>
    <NavLinks/>
    <div className='container container-son shadow border mt-3 rounded-5'>
        <section className="mb-5">
			<h2 className="title" id="sobrenosotros">Contactanos</h2>
			<div className="container-form row">
				<div className="content-text col-12 col-lg-6 row">
                    <div className="mt-3 ms-5 container-input shadow">
                        <label for="exampleFormControlInput1" className="form-label fw-semibold">Coloca aqui tu correo electronico</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="nombre@gmail.com"></input>
                    </div>
                    <div className="ms-5 container-input-text shadow">
                        <label for="exampleFormControlTextarea1 label-text" className="form-label fw-semibold ">Escribe aqui el mensaje que deseas enviar</label>
                        <textarea className="form-control form-text" id="exampleFormControlTextarea1" rows="10" placeholder='lorem ipsun'></textarea>
                    </div>
				</div>
                <div className="col-12 col-lg-6 ms-3">
                    <img className="imagen-contact wide" src={radio} alt="imagen sobre nosotros"></img>
                </div>
			</div>
		</section>
    </div>
    </div>
    
  )
}
