
import logotipo from "../../img/logo.png"

export const NavLinks = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light m-o p-0">
    <div className="container-fluid ">

         <a class="navbar-brand" href="/">
            <img src={logotipo} className="logo logotipo1" alt="logo" />
         </a> 
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-lg-flex justify-content-lg-between" id="navbarSupportedContent">
            <div></div>
            <ul className="navbar-nav d-flex mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link menu_link" aria-current="page" href="#sobrenosotros">Sobre nosotros</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link menu_link" href="#actividades">Nuestro trabajo</a>
                </li>
                <li className="nav-item ">
                    <a className="nav-link menu_link" href="#Contact">Contacto</a>
                </li>
            </ul>

        </div>
    </div>
</nav>
  )
}
