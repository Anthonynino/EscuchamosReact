import { Cards } from "./Cards/Cards"

//Aqui los comentarios no necesitan las llaves '{ }'
export const Testimony = () => {
  return (
        <div className="testimonios container">
			<h2 className="title mt-5">Nuestros programas y servicios</h2>
			<div className="cards row">
				
				<Cards/>
				
			</div>
		</div>
    
  )
}
