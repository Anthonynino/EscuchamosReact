
export const CardIitem = ({title,img,description, }) => {
  return (
    <>
          <div className="card1 rightsc col-12 col-lg-6 border ">
					<img src={ img }></img>
				<div className="content-text-card">
					<h4>{ title }</h4>
					<p>
						{ description }
					</p>
				</div>
	        </div>
    </>
  )
}
