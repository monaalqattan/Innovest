
import '../styles/landingpage.css'
// import '../data/siteData';
import logo from '../assets/20250914_185850 1.png'
interface INavbar  {
  Home?:string,
  Discover?:string,
  AboutUs ?:string,
 Contact?:string,
  Login?:string,
  Signup ?:string,
  StartupShowcase?:string,
 InvestorDashboard?:string,
}
const Navbar =({ Home, Discover, AboutUs, Contact, Login, Signup }: INavbar)=>{
  return(
  <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Innovest Logo" /> Innovest
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav me-3">
              <li className="nav-item">
                <a className="nav-link" href="#">
                {Home} 
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {Discover}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {AboutUs}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {Contact}
                </a>
              </li>
            </ul>
            <button className="btn-login">{Login}</button>
            <button className="btn-signup">{Signup}</button>
          </div>
        </div>
      </nav>
  )
}
export default Navbar;