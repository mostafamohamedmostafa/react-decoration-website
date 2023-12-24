import Contactusimg from '../images/Contactus.jpg'

function Contactussection() {
    return (
      <div className="Contactussection">
  
  <h3>Contactus</h3>
        <div className="card-group">
          <div className="card">
            <img src={Contactusimg} className="card-img-top  " alt="..." />

          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Contactus</h5>
              <ul class="list-group list-group-flush">


              <li class="list-group-item"> Loctation : </li>
              <li class="list-group-item"> Phone Number : </li>
              <li class="list-group-item"> Whatapp : </li>
              <li class="list-group-item"> Telegram : </li>
              <li class="list-group-item"> Working Hours : </li>
              <li class="list-group-item"> Working Days : </li>

              </ul>

            </div>
          </div>

        </div>
        
      </div>
    );
  }
  
  export default Contactussection;
  