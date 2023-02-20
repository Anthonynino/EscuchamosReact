import React from 'react';

import radio from "../img/radio.png"

export const AboutUs = () => {
  return (
    <div className='container'>
        <section className=" about-us">
			<h2 className="title" id="sobrenosotros">Sobre nosotros</h2>
			<div className="container-about-us row">
				<div className="col-12 col-lg-6">
                <img className="imagen-about-us wide" src={radio} alt="imagen sobre nosotros"></img>
                </div>
				<div className="content-text col-12 col-lg-6 row">
					<div className="rightsc col-12">
						<h3><span className='numbers'>1</span>Objetivo</h3>
						<p>Es una iniciativa vinculada a la educomunicación desde la perspectiva de la comunicación para
							el desarrollo, que busca promover entre las comunidades la implicación para el abordaje de
							sus problemáticas valiéndose de mecanismos para el análisis de su realidad y herramientas
							prácticas para configurar propuestas de mejora de su entorno desde los ciudadanos en
							especial entre niños, niñas, adolescentes, jóvenes y mujeres.
						</p>
					</div>
					<div className="rightsc col-12">
						<h3><span>2</span>Misión</h3>
						<p>La búsqueda de la promoción social para alcanzar acciones que mejoren la situación de los
							colectivos comunitarios desde la formación en desarrollo, valores, herramientas de
							resolución de conflictos, emprendimiento y la generación de productos educomunicativos.</p>
					</div>
					<div className="rightsc col-12">
						<h3><span>3</span>Visión</h3>
						<p>Constituirnos en una red de ciudadanos proactivos conectados desde la educomunicación con
							poder de convocatoria y movilización en las comunidades para gestionar intervención de los
							contextos desde los ciudadanos, para alcanzar mejoras sostenibles de sus proyectos de vida
							individuales y colectivos.
						</p>
					</div>
				</div>
			</div>
		</section>
    </div>
  )
}
