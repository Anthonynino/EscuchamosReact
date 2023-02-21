import React from 'react'

export const Galery = () => {
  return (
    <>
        <section className="actions">
			<div className="container" id="actividades">
				<h1 className="title">Nuestro trabajo</h1>
				<div className="grid-container">
					<div className="grid-item tall leftsc" style={{backgroundImage: `url("http://localhost:3000/img/pruebas12.jpg")`}}></div>

					<div className="grid-item bottomsc" style={{backgroundImage: `url("http://localhost:3000/img/trabajo.jpg")`}}></div>

					<div className="grid-item wide bottomsc" style={{backgroundImage: `url("http://localhost:3000/img/photo7.jpg")`}}></div>
	
                    <div className="grid-item rightsc" style={{backgroundImage: `url("http://localhost:3000/img/prueba10.jpg")`}}></div>
                    
                    <div className="grid-item bottomsc" style={{backgroundImage: `url("http://localhost:3000/img/photo8.jpg")`}}></div>
					
                    <div className="grid-item bottomsc" style={{backgroundImage: `url("http://localhost:3000/img/photo9.jpg")`}}></div>
					
                    <div className="grid-item leftsc" style={{backgroundImage: `url("http://localhost:3000/img/photo3.jpg")`}}></div>
					
                    <div className="grid-item leftsc" style={{backgroundImage: `url("http://localhost:3000/img/photo4.jpg")`}}></div>
					
                    <div className="grid-item tall wide leftsc" style={{backgroundImage: `url("http://localhost:3000/img/photo2.jpg")`}}></div>
					
                    <div className="grid-item rightsc" style={{backgroundImage: `url("http://localhost:3000/img/prueba11.jpg")`}}></div>
				</div>
			</div>
		</section>
    </>
  )
}
