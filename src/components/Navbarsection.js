import websitelogo from '../images/home.png'

function Navbarsection() {
    return (
        <div className="Navbarsection">
            <nav className="navbar bg-light ">
                <div className="container-fluid">
                    <a className="navbar-brand " href="#">
                        <img src={websitelogo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                        Home Decoration Services                    </a>
                </div>
            </nav>


        </div>
    );
}

export default Navbarsection;
