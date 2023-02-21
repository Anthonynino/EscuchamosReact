//Aqui los comentarios no necesitan las llaves '{ }'
export const Testimony = () => {
  return (
        <div className="testimonios container">
			<h2 className="title mt-5">Nuestros programas y servicios</h2>
			<div className="cards row">
				<div className="card1 rightsc col-12 col-lg-6 border ">
					<img alt="" src="img/lucy.jpg"></img>
					<div className="content-text-card">
						<h4>Programa Lucy</h4>
						<p>
							Programa para atención en asistencia médica y apoyo en medicamentos para enfermedades
							crónicas. Aportes solidarios a instituciones que cuidan del adulto mayor.
						</p>
					</div>
				</div>

				<div className="card1 leftsc col-12 col-lg-6 border">
					<img alt="" src="img/escuela-de-radio.jpg"></img>
					<div className="content-text-card">
						<h4>Escuela de comunicacion comunitaria y ciudadana</h4>
						<p>
							Formacion en niños/as, adolescentes y jóvenes, mujeres y población clave en lenguaje
							radiofónico y producción de radio, con difusión alternativa de contenidos.
						</p>
					</div>
				</div>



				<div className="card1 rightsc col-12 col-lg-6 border " id="talent">
					<img alt="" src="img/talento.jpg"></img>
					<div className="content-text-card">
						<h4>Somos talento</h4>
						<p>
							Formación en areas innovadoras para nuestros voluntarios de acuerdo con sus perfiles e
							intereses (fotografía, producción en medios audiovisuales, artes escénicas, generación de
							contenido para redes digitales, entre otras).
						</p>
					</div>
				</div>

				<div className="card1 leftsc col-12 col-lg-6 border">
					<img alt="" src="img/comunidad.jpg"></img>
					<div className="content-text-card">
						<h4>Trabajo por mi comunidad</h4>
						<p>
							Alianza con comunidades con lideres y liderezas, brindándoles formación en temas claves como
							potabilización del agua, salud integral, derechos sexuales y reproductivos, prevención de
							las formas de violencia, construcción de paz y reconstrucción del tejido social.
						</p>
					</div>
				</div>
			</div>
		</div>
    
  )
}
