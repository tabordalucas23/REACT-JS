function NavBar(){
    return(
        <nav>
        <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Menú</button>
                <ul class="dropdown-menu dropdown-menu-dark">
                    <li class="boton-inicio"><a href="index.html"> Inicio</a> </li>
                    <li><a href="./pages/Contacto.html">Contacto  </a> </li>
                    <li><a href="./pages/Nosotros.html">Nosotros</a> </li>
                    <li><a href="./pages/Servicios.html">Servicios</a> </li>
                    <li><a href="./pages/Galeria.html">Galeria</a></li>
                    <li><a href="./pages/quienes-somos.html">¿Quienes somos?</a></li>
                </ul>
            </div>
        </nav>   
    )
}

export default NavBar;