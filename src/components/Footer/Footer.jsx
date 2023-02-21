import React from 'react'

export const Footer = () => {
  return (
    <>
        <footer>
		<div className="container-footer grid" id="contact">
			<div className="content-foo g-col-6 g-col-sm-4">
				<h4><i className="fa-solid fa-mobile-screen"></i>Telefono</h4>
				<p>04247159057</p>
			</div>
			<div className="content-foo g-col-6 g-col-sm-4">
				<h4><i className="fa-solid fa-at"></i> Correo electronico</h4>
				<p>proyectoescuchamostachira@gmail.com</p>
			</div>
			<div className="content-foo g-col-6 g-col-sm-4">
				<h4><i className="fa-solid fa-location-dot"></i>Ubicación</h4>
				<p>Rubio,Tachira, Venezuela</p>
			</div>
			<div className="content-foo g-col-6 g-col-sm-4">
				<h4><i className="fa-brands fa-instagram"></i>Instagram</h4>
				<a href="https://www.instagram.com/proyectoescuchamos" target="_BLANK">@Proyectoescuchamos</a>
			</div>
			<div className="content-foo g-col-6 g-col-sm-4">
				<h4><i className="fa-brands fa-instagram"></i>Facebook</h4>
				<a href="https://www.facebook.com/profile.php?id=100075837644778"
					target="_BLANK">@Proyectoescuchamos</a>
			</div>
		</div>

		<h2 className="title-final">&copy; <span className="escu">Escu</span><span className="chamos">chamos</span> - Asociación
			civil</h2>
	</footer>
    </>
  )
}
