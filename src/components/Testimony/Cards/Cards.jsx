import React from 'react'
import { CardIitem } from '../CardIitem';

const card = [{
    id: 1,
    title: "Programa Lucy",
    img:"img/lucy.jpg",
    description: "Programa para atención en asistencia médica y apoyo en medicamentos para enfermedades crónicas. Aportes solidarios a instituciones que cuidan al adulto mayor",
}, 
{   id: 2,
    title: "Escuela de comunicacion comunitaria y ciudadana",
    img:"img/escuela-de-radio.jpg",
    description: "Formacion en niños/as, adolescentes y jóvenes, mujeres y población clave en lenguaje, radiofónico y producción de radio, con difusión alternativa de contenidos.",},
{   id: 3,
    title: "Somos talento",
    img:"img/talento.jpg",
    description: "Formación en areas innovadoras para nuestros voluntarios de acuerdo con sus perfiles e intereses (fotografía, producción en medios audiovisuales, artes escénicas, generación de contenido para redes digitales, entre otras).",
},{
    id: 4,
    title: "Trabajo por mi comunidad",
    img:"img/comunidad.jpg",
    description: "Alianza con comunidades con lideres y liderezas, brindándoles formación en temas claves como potabilización del agua, salud integral, derechos sexuales y reproductivos, prevención de las formas de violencia, construcción de paz y reconstrucción del tejido social.",
}
];



export const Cards = () => {
  return (
    <>
    {
        card.map( (card) => (
          <CardIitem key={card.id }
          {...card} />
        ))

    }
    </>
  )
}
