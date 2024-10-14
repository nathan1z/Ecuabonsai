import "./Navbar.css";
export function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-cream">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-black" href="#">
                  Crear
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black" href="#">
                  Actualizar
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black" href="#">
                  Consultar
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black" href="#">
                  Eliminar
                </a>
              </li>
            </ul>
          </div>
          <div className="dropdown ">
            <img
              className="rounded-3"
              src="https://scontent.fuio13-1.fna.fbcdn.net/v/t39.30808-6/226492707_4456185454403628_2684627725507667103_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=NymcCoC0hBIAX-Ybc-L&_nc_oc=AQn1wJzeUF3PB2HFtXMUZMJwWnwQogmSr17Ufk4nlL_kuoEI1NW7Clc3-YGJc35tkX8&_nc_ht=scontent.fuio13-1.fna&oh=00_AT-OZALIT4H1YSug6I49lfwy7B85u-wdIsnair6ElaAcIw&oe=630C5B0B"
              height={70}
              width={100}
              alt="MDB Logo"
              loading="lazy"  
            />
          </div>
        </div>
      </nav>
    </>
  );
}
